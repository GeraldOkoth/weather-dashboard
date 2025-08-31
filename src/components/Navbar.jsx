import { FaBell } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import NotificationModal from "./NotificationModal";

const Navbar = () => {
  const [city, setCity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bellRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bellRef.current && !bellRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white flex flex-col px-4 py-3 shadow z-50">
      <h1 className="font-extrabold text-black text-lg text-center">
        Weather Dashboard
      </h1>
      <div className="flex justify-between items-center relative">
        <div className="rounded-full px-3 py-1 w-10 h-10 cursor-pointer bg-gray-500">
        </div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city..."
          className="rounded-full px-3 py-1 md:w-3xl sm:w-1.5 border outline-none text-gray-500 "
        />
        <div ref={bellRef} className="relative">
          <button
            onClick={() => setIsModalOpen((prev) => !prev)}
            className="p-2 hover:text-blue-500 text-3xl"
          >
            <FaBell />
          </button>
          <NotificationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
