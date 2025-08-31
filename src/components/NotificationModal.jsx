import React from "react";

const NotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-sm font-semibold">Notifications</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-sm"
        >
          ✕
        </button>
      </div>
      <div className="p-4 text-gray-500 text-sm">
        <p>No new notifications</p>
      </div>
    </div>
  );
};

export default NotificationModal;
