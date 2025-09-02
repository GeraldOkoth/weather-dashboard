import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [darkMode, setDarkMode] = useState(false);

  // set dark and light theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center fixed z-10 top-0 left-0 right-0 justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow-lg">
      <h1 className="sm:text-sm lg:text-2xl font-bold text-gray-700 dark:text-gray-200">
        Weather Dashboard
      </h1>

      <div className="flex-1 flex justify-center px-6">
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:cursor-pointer hover:text-blue-500"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 text-2xl" />
          ) : (
            <FaMoon className="text-gray-300 text-2xl" />
          )}
        </button>
        <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-300 hover:cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;