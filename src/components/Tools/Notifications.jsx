import React, { useEffect, useState } from 'react';

// NotificationBar.jsx
// Simple, optimized top notification bar with dismiss (localStorage persistence)

export default function NotificationBar({
  message = '20% offer on all products till this Dasara',
  bgClass = 'bg-yellow-500',
  textClass = 'text-gray-900',
  storageKey = 'csd_notification_dismissed'
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) setVisible(true);
  }, [storageKey]);

  const handleClose = () => {
    localStorage.setItem(storageKey, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={`w-full top-0 left-0 right-0 z-50 ${bgClass} shadow-md`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4">
        <p className={`flex-1 text-center text-sm font-medium ${textClass}`}>{message}</p>
        <button
          onClick={handleClose}
          aria-label="Close notification"
          className="ml-2 rounded-full p-1 hover:opacity-80 focus:outline-none"
        >
          ✕
        </button>
      </div>
    </div>
  );
}