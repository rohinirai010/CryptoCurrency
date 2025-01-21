// import React, { useState } from "react";
// import { Menu } from "lucide-react";
// import { GrLanguage } from "react-icons/gr";
// import { IoSettings } from "react-icons/io5";
// import { HiSun } from "react-icons/hi";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const NavItem = ({ text, isNew = false, className = "" }) => (
//     <button
//       className={`px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md relative whitespace-nowrap ${className}`}
//     >
//       {text}
//       {isNew && (
//         <span className="absolute -top-1 -right-1 px-1 py-0.5 text-[10px] bg-yellow-500 text-black rounded">
//           New
//         </span>
//       )}
//     </button>
//   );

//   const MobileNavItem = ({ text, isNew = false, hasDropdown = false }) => (
//     <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-800 cursor-pointer">
//       <div className="flex items-center space-x-3">
//         <span className="text-gray-300">{text}</span>
//         {isNew && (
//           <span className="px-1 py-0.5 text-[10px] bg-yellow-500 text-black rounded">
//             New
//           </span>
//         )}
//       </div>
//       {hasDropdown && (
//         <svg
//           className="w-4 h-4 text-gray-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       )}
//     </div>
//   );

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="hidden md:flex items-center h-16 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
//         <div className="flex items-center">
//           <a href="/" className="flex items-center">
//             <img
//               src="/api/placeholder/120/32"
//               alt="Binance Futures"
//               className="h-8"
//             />
//           </a>

//           <div className="flex ml-8 space-x-1">
//             <NavItem text="Futures" />
//             <NavItem text="Options" isNew />
//             <NavItem text="Trading Bots" />
//             <NavItem text="Copy Trading" />
//             <NavItem text="Data" />
//             <NavItem text="More" />
//             <NavItem text="BFUSD" isNew />
//             <NavItem text="Futures Present" isNew />
//           </div>
//         </div>

//         <div className="flex items-center ml-auto space-x-2">
//           <button className="px-4 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
//             Log In
//           </button>
//           <button className="px-4 py-1.5 text-sm bg-yellow-500 hover:bg-yellow-600 text-black rounded-md">
//             Register
//           </button>
//           <div className="flex items-center space-x-1 ml-2">
//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//               <GrLanguage />
//             </button>

//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//             <IoSettings className="w-5 h-5"/>
//             </button>
//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//             <HiSun className="w-5 h-5"/>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Navbar */}
//       <nav className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
//         <div className="flex items-center justify-between h-14 px-4">
//           <div className="flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//             <a href="/" className="ml-2">
//               <img
//                 src="/api/placeholder/120/32"
//                 alt="Binance Futures"
//                 className="h-6"
//               />
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                 />
//               </svg>
//             </button>
//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 z-50 bg-gray-900">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center justify-between p-4 border-b border-gray-800">
//                 <span className="text-gray-300">Menu</span>
//                 <button
//                   onClick={() => setIsMenuOpen(false)}
//                   className="p-2 hover:bg-gray-800 rounded-full"
//                 >
//                   <svg
//                     className="w-6 h-6 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <div className="flex-1 overflow-y-auto">
//                 <MobileNavItem text="Futures" hasDropdown />
//                 <MobileNavItem text="Options" isNew hasDropdown />
//                 <MobileNavItem text="Trading Bots" hasDropdown />
//                 <MobileNavItem text="Copy Trading" />
//                 <MobileNavItem text="Data" hasDropdown />
//                 <MobileNavItem text="More" hasDropdown />
//                 <MobileNavItem text="BFUSD" isNew />
//                 <MobileNavItem text="Futures Present" isNew />
//                 <div className="mt-4 border-t border-gray-800">
//                   <div className="flex p-4">
//                     <button className="flex-1 px-4 py-2 text-sm text-center border border-gray-700 rounded-md mr-2">
//                       Log In
//                     </button>
//                     <button className="flex-1 px-4 py-2 text-sm text-center bg-yellow-500 text-black rounded-md">
//                       Register
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4 border-t border-gray-800">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-300">Theme</span>
//                     <div className="flex space-x-2">
//                       <button className="p-2 bg-gray-800 rounded-full">
//                         <svg
//                           className="w-5 h-5 text-gray-400"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                           />
//                         </svg>
//                       </button>
//                       <button className="p-2 bg-gray-800 rounded-full">
//                         <svg
//                           className="w-5 h-5 text-gray-400"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4 border-t border-gray-800">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-300">English</span>
//                     <svg
//                       className="w-4 h-4 text-gray-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;




  import React, { useState, useEffect } from "react";
  import { Menu } from "lucide-react";
  import { GrLanguage } from "react-icons/gr";
  import { IoSettings } from "react-icons/io5";
  import { HiSun, HiMoon } from "react-icons/hi";
  import { FaBrush } from "react-icons/fa";
  import { ImCross } from "react-icons/im";

  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark/light theme

    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [isDarkMode]);

    const NavItem = ({ text, className = "" }) => (
      <button
        className={`px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${className}`}
      >
        {text}
      </button>
    );

    const MobileNavItem = ({ text }) => (
      <div className="flex items-center justify-between text-lg font-medium text-gray-600 dark:text-gray-400 px-6 py-3 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition-all ease-in-out duration-200 transform hover:scale-105 hover:shadow-lg">
        {text}
      </div>
    );

    return (
      <>
        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center h-16 px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all ease-in-out duration-300">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/api/placeholder/120/32"
                alt="Binance Futures"
                className="h-8 transition-all ease-in-out duration-300"
              />
            </a>

            <div className="flex ml-10 space-x-3">
              <NavItem text="Futures" />
              <NavItem text="Options" />
              <NavItem text="Trading Bots" />
              <NavItem text="Copy Trading" />
              <NavItem text="Data" />
              <NavItem text="More" />
              <NavItem text="BFUSD" />
              <NavItem text="Futures Present" />
            </div>
          </div>

          <div className="flex items-center ml-auto space-x-4">
            <a
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Log In
            </a>
            <a
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Register
            </a>
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-105">
                <GrLanguage className="w-5 h-5 dark:text-gray-300 transition-all duration-300" />
              </button>

              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-105">
                <IoSettings className="w-5 h-5 dark:text-gray-300 transition-all duration-300" />
              </button>

              {/* Toggle the theme */}
              <button
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? (
                  <HiMoon className="w-5 h-5 dark:text-gray-300 transition-all duration-300 hover:-rotate-90" />
                ) : (
                  <HiSun className="w-5 h-5 dark:text-gray-300 transition-all duration-300 hover:rotate-180" />
                )}
              </button>
            </div>
          </div>
        </nav>

       {/* Mobile Navbar */}
<nav className="md:hidden bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all ease-in-out duration-300">
  <div className="flex items-center justify-between h-16 px-4">
    <div className="flex items-center">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-105"
      >
        <Menu className="w-7 h-7 dark:text-gray-300 transition-all duration-300" />
      </button>
      <a href="/" className="ml-2">
        <img
          src="/api/placeholder/120/32"
          alt="Binance Futures"
          className="h-8 transition-all duration-300"
        />
      </a>
    </div>
    <div className="flex items-center space-x-3">
     
      <button
        className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-105"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <HiMoon className="w-6 h-6 dark:text-gray-300 transition-all duration-300 hover:-rotate-90" />
        ) : (
          <HiSun className="w-6 h-6 dark:text-gray-300 transition-all duration-300 hover:rotate-180" />
        )}
      </button>
      <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-105">
        <IoSettings className="w-6 h-6 dark:text-gray-300 transition-all duration-300" />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="fixed inset-0 z-50 bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-gray-900 dark:to-gray-800 transition-all ease-in-out duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-800 dark:border-gray-700 bg-gradient-to-r from-yellow-500 to-yellow-600">
          <img src="" alt="Logo" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-3 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-700 rounded-full animate-pulse transition-all duration-300"
          >
            <ImCross className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <MobileNavItem text="Futures" />
          <MobileNavItem text="Options" />
          <MobileNavItem text="Trading Bots" />
          <MobileNavItem text="Copy Trading" />
          <MobileNavItem text="Data" />
          <MobileNavItem text="More" />
          <MobileNavItem text="BFUSD" />
          <MobileNavItem text="Futures Present" />

          <div className="mt-6 border-t border-gray-800 dark:border-gray-700">
            <div className="flex p-6">
              <a
                href="/login"
                className="flex-1 px-4 py-4 text-lg font-semibold text-center dark:text-gray-400 border border-gray-700 dark:border-gray-600 rounded-md mr-2 transition-all duration-300 transform hover:scale-105"
              >
                Log In
              </a>
              <a
                href="/register"
                className="flex-1 px-4 py-4 text-lg font-semibold text-center bg-yellow-500 text-black dark:bg-yellow-600 dark:text-white rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Register
              </a>
            </div>
          </div>

          {/* Mobile Theme Section */}
          <div className="p-6 border-t border-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex flex-row gap-2 text-lg font-semibold items-center text-black dark:text-gray-300">
                <FaBrush className="w-6 h-6 text-gray-500 dark:text-gray-300 transition-all duration-300" />
                <span className="text-black dark:text-gray-300">
                  Theme
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  {isDarkMode ? (
                    <HiMoon className="w-6 h-6 text-gray-500 dark:text-gray-300 transition-all duration-300 hover:-rotate-90" />
                  ) : (
                    <HiSun className="w-6 h-6 text-gray-500 dark:text-gray-300 transition-all duration-300 hover:rotate-180" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Language Section */}
          <div className="p-6 border-t border-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex flex-row gap-2 text-lg font-semibold items-center text-black dark:text-gray-300">
                <GrLanguage className="w-6 h-6 text-gray-500 dark:text-gray-300 transition-all duration-300" />
                <span className="text-black dark:text-gray-300">
                  English
                </span>
              </div>

              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</nav>

      </>
    );
  };

  export default Navbar;
