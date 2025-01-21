import React, { useState } from "react";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import { Eye, EyeOff } from "lucide-react"; // Import Eye icons
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EnterPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true); // toggle password visibility
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  // Check if password is entered (not empty)
  const isPasswordEntered = password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the entered password to the next page (no validation for now)
    navigate("/verify-email", { state: { password, fromForgotPassword: false } });
  };

  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center px-4 sm:px-0 py-[2rem] bg-white">
      <div className="w-full max-w-sm p-8 border-2 border-gray-200 rounded-3xl">
        <div className="mb-8 flex flex-col text-center gap-4">
          <div className="flex flex-row items-center justify-start gap-2">
            <img src="" alt="logo" className="" />
            <h1 className="text-[#F0B90B] text-xl font-bold">BINANCE</h1>
          </div>

          <h1 className="text-3xl font-semibold text-left text-[#202630]">
            Enter your password
          </h1>
          <p className="text-sm text-left text-gray-800/80">Email: {localStorage.getItem("emailPhone")}</p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "password" : "text"} // Toggle visibility based on showPassword state
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="absolute right-3 top-8 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} {/* Toggle Eye icon */}
            </button>
          </div>

          <Button
            variant="primary"
            className="w-full text-center"
            type="submit"
            disabled={!isPasswordEntered} // Disable only if the password is empty
            style={{
              opacity: isPasswordEntered ? 1 : 0.5,
              cursor: isPasswordEntered ? "pointer" : "not-allowed",
            }}
            onClick={handleSubmit} // Trigger redirection to the next page
          >
            Next
          </Button>
        </div>
        <div className="text-center mt-4">
          <a
            href="/verify-email"
            className="text-yellow-600 hover:text-yellow-400 font-semibold text-sm"
            onClick={(e) => {
              e.preventDefault();
              navigate("/verify-email", { state: { fromForgotPassword: true } });
            }}
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnterPassword;
