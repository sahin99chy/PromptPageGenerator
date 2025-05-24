import React, { useState } from 'react';
import { LandingPageData } from '../types';
import ExportButton from './ExportButton';

interface OutputSectionProps {
  landingPageData: LandingPageData;
  darkMode: boolean;
}

const OutputSection: React.FC<OutputSectionProps> = ({ landingPageData, darkMode }) => {
  // Track number of generated pages for analytics
  const [pageViews, setPageViews] = useState(() => {
    const storedViews = localStorage.getItem('pageViewCount');
    return storedViews ? parseInt(storedViews, 10) + 1 : 1;
  });

  // Update localStorage when a new page is generated
  React.useEffect(() => {
    localStorage.setItem('pageViewCount', pageViews.toString());
  }, [pageViews]);

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg animate-fadeIn ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300`}
    >
      <div className="relative">
        {/* Hero section */}
        <div 
          className={`px-6 py-16 ${
            darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {landingPageData.headline}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {landingPageData.subheadline}
            </p>
            <button className="bg-white text-blue-700 font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 duration-200">
              {landingPageData.cta}
            </button>
          </div>
        </div>

        {/* Features section */}
        <div className={`px-6 py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto">
            <h3 
              className={`text-2xl font-bold text-center mb-12 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Key Features
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {landingPageData.features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md`}
                >
                  <h4 
                    className={`text-xl font-semibold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {feature.title}
                  </h4>
                  <p 
                    className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div 
          className={`px-6 py-12 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-100'
          } transition-colors duration-300`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p 
              className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Ready to transform your business?
            </p>
            <button 
              className={`px-8 py-3 rounded-lg font-medium ${
                darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition duration-200 transform hover:scale-105`}
            >
              {landingPageData.cta}
            </button>
          </div>
        </div>

        {/* Analytics section (bonus) */}
        <div 
          className={`px-6 py-4 text-sm ${
            darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-200 text-gray-600'
          } transition-colors duration-300`}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span>Landing pages generated: {pageViews}</span>
            <ExportButton landingPageData={landingPageData} darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputSection;