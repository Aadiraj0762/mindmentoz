import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation

const AnimatedLogout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleLogout = () => {
    setIsLoggingOut(true);
    // Simulate logout process
    setTimeout(() => {
      console.log('User logged out');
      setIsLoggingOut(false);
      navigate('/'); // Redirect to home
    }, 1500);
  };

  return (
    <div className="relative">
      <div className="p-2">
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={`
            w-full mt-2 px-4 py-2 rounded-md
            flex items-center gap-2
            text-red-600 hover:bg-red-50
            transition-all duration-200
            ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <LogOut
            className={`h-4 w-4 ${
              isLoggingOut ? 'animate-spin' : ''
            }`}
          />
          <span>
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AnimatedLogout;
