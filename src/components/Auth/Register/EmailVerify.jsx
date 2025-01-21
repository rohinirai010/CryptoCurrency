import React, { useState, useCallback, useEffect } from "react";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import { PiInfoFill } from "react-icons/pi";
import { toast, ToastContainer } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify styles

const EmailVerify = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60); // Timer for resend
  const [canResend, setCanResend] = useState(false); // To manage resend button visibility
  const maxAttempts = 3;

  // Retrieve email/phone from localStorage
  const emailPhone = localStorage.getItem("emailPhone");

  // Timer function to manage resend countdown
  const startBlockTimer = useCallback(() => {
    setIsBlocked(true);
    setError("Too many attempts. Please try again in 1 minute.");

    // Reset after 1 minute
    setTimeout(() => {
      setIsBlocked(false);
      setAttempts(0);
      setError("");
    }, 60000);
  }, []);

  // Start the countdown for resend code button
  useEffect(() => {
    if (remainingTime === 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setCanResend(true); // Enable resend button after 60 seconds
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  // Function to generate a random 6-digit code and store it in localStorage
  const generateVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit code
    localStorage.setItem("verificationCode", code); // Store the generated code in localStorage
    return code;
  };

  // Handle code input change
  const handleCodeChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 6 digits
    if (/^\d*$/.test(value) && value.length <= 6) {
      setVerificationCode(value);
      setError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBlocked) return;

    // Get the verification code from localStorage
    const storedCode = localStorage.getItem("verificationCode");

    if (verificationCode.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }

    setAttempts((prev) => {
      const newAttempts = prev + 1;
      if (newAttempts >= maxAttempts) {
        startBlockTimer();
      }
      return newAttempts;
    });

    // Check if the entered code matches the stored code
    if (verificationCode === storedCode) {
      // If the code is correct, navigate to the next page
      window.location.href = "/create-password"; // You can change this to navigate to your next page
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  // Handle resend code logic
  const handleResendCode = () => {
    // Start a new 60-second timer after requesting a new code
    setRemainingTime(60);
    setCanResend(false);

    // Generate a new verification code and store it in localStorage
    const code = generateVerificationCode();

    // Display the code in a Toastify message
    toast.success(`Your verification code is: ${code}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000, // Hide after 5 seconds
    });
  };

  // Show the verification code on page load (when navigating from RegisterForm)
  useEffect(() => {
    // Check if there's a verification code in localStorage and display it
    const storedCode = localStorage.getItem("verificationCode");
    if (storedCode) {
      toast.success(`Your verification code is: ${storedCode}`, {
        autoClose: 5000, // Hide after 5 seconds
      });
    } else {
      // Generate and show a new code if none exists in localStorage
      const code = generateVerificationCode();
      toast.success(`Your verification code is: ${code}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // Hide after 5 seconds
      });
    }
  }, []); // Only run on mount

  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center px-4 sm:px-0 py-[2rem] bg-white">
      <div className="w-full max-w-sm p-6 sm:p-8 border-2 border-gray-200 rounded-3xl">
        <div className="mb-8 flex flex-col text-center gap-4">
          <div className="flex flex-row items-center justify-start gap-2">
            <img src="" alt="logo" className="" />
            <h1 className="text-[#F0B90B] text-xl font-bold">BINANCE</h1>
          </div>

          <h1 className="text-3xl font-semibold text-left text-[#202630]">
            Verify your email
          </h1>
          <p className="text-sm font-medium text-left text-gray-600">
            A 6-digit code has been sent to <br /> {emailPhone}.
            Please enter it within the next 30 minutes.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              label="Verification Code"
              placeholder=""
              name="verificationCode"
              value={verificationCode}
              onChange={handleCodeChange}
              disabled={isBlocked}
              error={error}
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

            {/* Show "Code sent" and tooltip with countdown */}
            {!canResend ? (
              <div className="absolute right-2 top-[68%] transform -translate-y-1/2 flex items-center gap-1">
                <span className="text-sm text-gray-400">Code sent</span>

                {/* Info button with attractive tooltip */}
                <button type="button" className="text-gray-400 relative group">
                  <PiInfoFill />
                  {/* Tooltip */}
                  <div className="absolute top-[1.8rem]  mb-2 left-[-4.5rem] transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[black] text-white text-xs rounded-md w-[12rem] px-3 py-1 z-10">
                    You can request a new code in{" "}
                    <span className="text-red-800 font-bold text-lg">
                      {remainingTime}{" "}
                    </span>{" "}
                    seconds. The code will expire in 30 minutes.
                  </div>
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="absolute right-2 top-[68%] transform -translate-y-1/2 text-sm text-yellow-600 font-semibold"
                onClick={handleResendCode}
              >
                Resend Code
              </button>
            )}
          </div>
          <a href="/create-password">
            <Button
              variant="primary"
              className="w-full text-center mt-[1.5rem]"
              type="submit"
              disabled={isBlocked || verificationCode.length !== 6}
              style={{
                opacity: isBlocked || verificationCode.length !== 6 ? 0.5 : 1,
                cursor: isBlocked || verificationCode.length !== 6 ? "not-allowed" : "pointer",
              }}
            >
              Next
            </Button>
          </a>
        </form>
        <div className="text-center mt-4">
          <a
            href="/register"
            className="text-yellow-600 hover:text-yellow-400 font-semibold text-sm"
          >
            Didn't receive the code?
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EmailVerify;
