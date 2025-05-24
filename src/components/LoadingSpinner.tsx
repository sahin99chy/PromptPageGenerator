import React from 'react';

interface LoadingSpinnerProps {
  darkMode: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className={`w-12 h-12 rounded-full absolute border-4 border-solid ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}></div>
        <div className={`w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-transparent ${darkMode ? 'border-t-blue-400' : 'border-t-blue-600'}`}></div>
      </div>
      <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Crafting your landing page...
      </p>
    </div>
  );
};

export default LoadingSpinner;