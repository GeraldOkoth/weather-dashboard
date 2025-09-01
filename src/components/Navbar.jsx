import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center fixed z-10 top-0 left-0 right-0 justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-sm font-bold text-gray-700 dark:text-gray-200">
        Weather Dashboard
      </h1>

      <div className="flex-1 flex justify-center px-6">
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="flex items-center space-x-8">
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-300 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

// import { FaBell } from "react-icons/fa";
// import React, { useRef, useEffect } from "react";
// import NotificationModal from "./NotificationModal";

// const Navbar = ({ city, setCity, onSearch }) => {
//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const bellRef = useRef(null);

//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (bellRef.current && !bellRef.current.contains(event.target)) {
//         setIsModalOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       onSearch(); // trigger fetch from Dashboard
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 bg-white flex flex-col px-4 py-3 shadow z-50">
//       <h1 className="font-extrabold text-black text-lg text-center">
//         Weather Dashboard
//       </h1>
//       <div className="flex justify-between items-center relative">
//         <div className="rounded-full px-3 py-1 w-10 h-10 cursor-pointer bg-gray-500"></div>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Search city..."
//           className="rounded-full px-3 py-1 md:w-3xl sm:w-1.5 border outline-none text-gray-500"
//         />
//         <div ref={bellRef} className="relative">
//           <button
//             onClick={() => setIsModalOpen((prev) => !prev)}
//             className="p-2 hover:text-blue-500 text-3xl"
//           >
//             <FaBell />
//           </button>
//           <NotificationModal
//             isOpen={isModalOpen}
//             onClose={() => setIsModalOpen(false)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
