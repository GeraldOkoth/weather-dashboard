import { NavLink } from "react-router-dom";
import { FiHome, FiBell, FiRefreshCcw } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

const BottomNav = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 dark:bg-gray-900 text-white flex justify-around py-2 shadow-inner
                    lg:top-0 lg:bottom-0 lg:left-0 lg:w-48 lg:flex-col lg:justify-start lg:items-start lg:py-16"
    >
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs lg:flex-row lg:gap-2 lg:px-4 lg:py-3 rounded-md w-full
          ${isActive ? "bg-neutral-800 font-semibold" : "hover:bg-neutral-800"}`
        }
      >
        <FiHome className="text-2xl" />
        <span className="lg:text-base">Home</span>
      </NavLink>

      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs lg:flex-row lg:gap-2 lg:px-4 lg:py-3 rounded-md w-full
          ${isActive ? "bg-neutral-800 font-semibold" : "hover:bg-neutral-800"}`
        }
      >
        <FiBell className="text-2xl" />
        <span className="lg:text-base">Notifications</span>
      </NavLink>

      <NavLink
        to="/language"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs lg:flex-row lg:gap-2 lg:px-4 lg:py-3 rounded-md w-full
          ${isActive ? "bg-neutral-800 font-semibold" : "hover:bg-neutral-800"}`
        }
      >
        <MdLanguage className="text-2xl" />
        <span className="lg:text-base">Language</span>
      </NavLink>

      <NavLink
        to="/refresh"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs lg:flex-row lg:gap-2 lg:px-4 lg:py-3 rounded-md w-full
          ${isActive ? "bg-neutral-800 font-semibold" : "hover:bg-neutral-800"}`
        }
      >
        <FiRefreshCcw className="text-2xl" />
        <span className="lg:text-base">Refresh</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
