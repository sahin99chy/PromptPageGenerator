import React from 'react';
import { MoonIcon, SunIcon, Rocket } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header 
      className={`sticky top-0 z-10 ${
        darkMode 
          ? 'bg-gray-900 text-white border-b border-gray-700' 
          : 'bg-white text-gray-900 border-b border-gray-200'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket size={24} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className="font-bold text-xl">PromptPage</span>
          </div>
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors duration-200`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <SunIcon size={20} className="text-yellow-300" />
            ) : (
              <MoonIcon size={20} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;