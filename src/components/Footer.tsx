import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer 
      className={`py-8 ${
        darkMode 
          ? 'bg-gray-800 text-gray-300 border-t border-gray-700' 
          : 'bg-gray-100 text-gray-600 border-t border-gray-200'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} PromptPage Generator. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className={`${
                darkMode ? 'hover:text-white' : 'hover:text-gray-900'
              } transition-colors duration-200`}
            >
              About
            </a>
            <a 
              href="#" 
              className={`${
                darkMode ? 'hover:text-white' : 'hover:text-gray-900'
              } transition-colors duration-200`}
            >
              Contact
            </a>
            <a 
              href="#" 
              className={`${
                darkMode ? 'hover:text-white' : 'hover:text-gray-900'
              } transition-colors duration-200`}
            >
              Terms
            </a>
            <a 
              href="#" 
              className={`${
                darkMode ? 'hover:text-white' : 'hover:text-gray-900'
              } transition-colors duration-200`}
            >
              Privacy
            </a>
          </div>
        </div>

        <div className="mt-6 text-sm text-center">
          <p>
            Built with React, TailwindCSS, and OpenAI API
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;