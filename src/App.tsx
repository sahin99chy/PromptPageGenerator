import React, { useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import LoadingSpinner from './components/LoadingSpinner';
import { LandingPageData } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [businessIdea, setBusinessIdea] = useState('');
  const [landingPageData, setLandingPageData] = useState<LandingPageData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleGenerate = async () => {
    if (!businessIdea.trim()) {
      setError('Please enter a business idea first');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: businessIdea }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate landing page');
      }

      const data = await response.json();
      setLandingPageData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow container mx-auto px-4 py-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            PromptPage Generator
          </h1>
          <p className={`text-xl text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Transform your business idea into a conversion-optimized landing page in seconds
          </p>

          <InputSection 
            businessIdea={businessIdea}
            setBusinessIdea={setBusinessIdea}
            handleGenerate={handleGenerate}
            isLoading={isLoading}
            error={error}
            darkMode={darkMode}
          />

          {isLoading && (
            <div className="my-12 flex justify-center">
              <LoadingSpinner darkMode={darkMode} />
            </div>
          )}

          {!isLoading && landingPageData && (
            <OutputSection 
              landingPageData={landingPageData} 
              darkMode={darkMode} 
            />
          )}
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;