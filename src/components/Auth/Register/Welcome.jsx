import React, { useState } from "react";
import Button from "../../Common/Button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Welcome = () => {
  const [hasInviter, setHasInviter] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle the "Next" button click
  const handleNext = () => {
    // Store the user's choice (whether they have an inviter) in localStorage
    localStorage.setItem("hasInviter", hasInviter);

    // Navigate to the /trading page
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center px-4 sm:px-0 py-[2rem] bg-white">
      <div className="w-full max-w-sm p-6 sm:p-8 border-2 border-gray-200 rounded-3xl">
        <div className="mb-8 flex flex-col text-center gap-4">
          <div className="flex flex-row items-center justify-start gap-2">
            <img src="" alt="logo" className="" />
            <h1 className="text-[#F0B90B] text-xl font-bold">BINANCE</h1>
          </div>

          {/* Success Icon with Animation */}
          <div className="flex justify-center my-6">
            <div className="relative">
              {/* Outer sparkles */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute -top-2 left-[65%] text-2xl text-red-400">✷</div>
                <div className="absolute bottom-0 left-[10%] text-xl text-yellow-400">✷</div>
                <div className="absolute left-0 top-[20%] text-base text-blue-400">✷</div>
                <div className="absolute right-0 top-1/2 text-2xl text-blue-400">✷</div>
              </div>
              {/* Success circle */}
              <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-center text-[#202630]">
            Welcome aboard!
          </h1>
          
          <p className="text-base text-center text-gray-600">
            Do you have an inviter? (Optional)
          </p>
        </div>

        <div className="space-y-6">
          {/* Option Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              className={`py-2 px-4 rounded-lg border ${
                hasInviter === true
                  ? 'border-yellow-500 bg-yellow-50 text-yellow-600'
                  : 'border-gray-300 hover:border-yellow-500'
              }`}
              onClick={() => setHasInviter(true)}
            >
              Yes
            </button>
            <button
              className={`py-2 px-4 rounded-lg border ${
                hasInviter === false
                  ? 'border-yellow-500 bg-yellow-50 text-yellow-600'
                  : 'border-gray-300 hover:border-yellow-500'
              }`}
              onClick={() => setHasInviter(false)}
            >
              No
            </button>
          </div>

          <Button
            variant="primary"
            className="w-full text-center"
            type="submit"
            onClick={handleNext} // Call the handleNext function on button click
            disabled={hasInviter === null} // Disable the button if no option is selected
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
