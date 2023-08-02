import React from 'react';

const NotificationWindow = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="notifyWindow fixed top-[60px] right-[90px] w-72 bg-white shadow-lg rounded-lg">

      {/* Notification content */}
      <div className="p-4">
        <span className="font-semibold text-gray-800">
          New Notification
        </span>
        <p className="text-gray-600 mt-2">
          You have a new notification!
        </p>
      </div>
    </div>
  );
};

export default NotificationWindow;
