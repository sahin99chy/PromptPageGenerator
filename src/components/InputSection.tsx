import React from 'react';
import { Rocket } from 'lucide-react';

interface InputSectionProps {
  businessIdea: string;
  setBusinessIdea: (idea: string) => void;
  handleGenerate: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
  darkMode: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({
  businessIdea,
  setBusinessIdea,
  handleGenerate,
  isLoading,
  error,
  darkMode,
}) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md mb-8 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300`}
    >
      <h2 
        className={`text-2xl font-semibold mb-4 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Enter Your Business Idea
      </h2>
      
      <div className="mb-4">
        <textarea
          value={businessIdea}
          onChange={(e) => setBusinessIdea(e.target.value)}
          placeholder="e.g., A platform that lets authors use AI to turn books into social media content."
          className={`w-full p-4 rounded-lg border ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
          rows={5}
        />
      </div>
      
      {error && (
        <div className={`mb-4 p-3 rounded-md ${darkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-700'}`}>
          {error}
        </div>
      )}
      
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          disabled={isLoading || !businessIdea.trim()}
          className={`
            flex items-center px-6 py-3 rounded-lg font-medium
            ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 transform'}
            ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} 
            text-white transition-all duration-200 shadow-lg
          `}
        >
          <Rocket size={20} className="mr-2" />
          {isLoading ? 'Generating...' : 'Generate Landing Page'}
        </button>
      </div>
      
      <p className={`mt-4 text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Powered by OpenAI - Quality results in seconds
      </p>
    </div>
  );
};

export default InputSection;