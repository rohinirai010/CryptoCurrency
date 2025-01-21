import React, { useState, useEffect } from "react";
import LoginForm from "../components/Auth/Login/LoginForm";
import { FaQrcode } from "react-icons/fa";
import qrImg from "../assets/qrImg.png";

const Login = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  // Simulate loading delay for QR code image
  useEffect(() => {
    let timer;
    if (showQrCode) {
      // Set a timer for 2-4 seconds to simulate loading time
      timer = setTimeout(() => {
        setLoading(false); // Set loading to false after delay
      }, 3000); // 3000 milliseconds (3 seconds)

      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }
  }, [showQrCode]); // Only run this effect when the QR code is shown

  return (
    <div className="flex flex-col gap-[1rem] items-center justify-center px-4 sm:px-0 py-[2rem] bg-white">
      <div className="w-full max-w-sm p-6 sm:p-8 border-2 border-gray-200 rounded-3xl">
        <div className="mb-8 flex flex-col text-center gap-4">
          <div className="flex flex-row items-center justify-start gap-2">
            <img src="" alt="logo" className="" />
            <h1 className="text-[#F0B90B] text-xl font-bold">BINANCE</h1>
          </div>
          <div className="flex flex-row justify-between items-center relative">
            <h1 className="text-3xl font-semibold text-[#202630]">Log in</h1>
            <div
              className="w-10 h-10 flex items-center justify-center bg-[#FAFAFA] shadow-md rounded-md relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowQrCode(true)} // Toggle QR code visibility
            >
              <FaQrcode className="w-7 h-7" />
              {isHovered && (
                <div className="absolute top-12 left-[-1rem] w-[7rem] transform -translate-x-1/2 bg-white text-gray-700 text-sm font-medium px-2 py-1 rounded-md shadow-md border border-gray-300/30">
                  <div className="relative">
                    QR code login
                    <div className="absolute top-[-8px] left-[90%] transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-t-white border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <LoginForm />
      </div>

      {showQrCode && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-0">
          <div className="bg-white p-6 rounded-2xl max-w-sm border border-gray-300/60">
            <div className="flex flex-col items-center gap-4">
              {loading ? (
                <div className="w-40 h-40 flex justify-center items-center relative">
                  {/* QR code background image with blur effect while loading */}
                  <div className="absolute inset-0 bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${qrImg})`, filter: "blur(2px)" }} />
                  {/* Show loader while QR code is loading */}
                  <div className="animate-spin rounded-full border-t-4 border-yellow-600 w-12 h-12 z-10" />
                </div>
              ) : (
                <div className="w-40 h-40 border border-gray-200 rounded-xl shadow-lg">
                  <img
                    src={qrImg}
                    alt="QR Code"
                    className="w-full h-full"
                  />
                </div>
              )}
              <p className="text-gray-700 text-sm text-center">
                Scan with your phone camera or the <span className="text-[#F0B90B] hover:text-yellow-600 cursor-pointer">Binance app</span> to log in.
              </p>
              <button
                className="bg-yellow-600 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-6 py-2 rounded-md"
                onClick={() => setShowQrCode(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center">
        <a
          href="/register"
          className="text-yellow-600 hover:text-yellow-400 font-semibold text-sm"
        >
          Create a Binance Account
        </a>
      </div>
    </div>
  );
};

export default Login;
