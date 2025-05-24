import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { LandingPageData } from '../types';

interface ExportButtonProps {
  landingPageData: LandingPageData;
  darkMode: boolean;
}

const ExportButton: React.FC<ExportButtonProps> = ({ landingPageData, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const generateHTML = (): string => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${landingPageData.headline}</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
  <!-- Hero Section -->
  <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-16">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-white mb-4">${landingPageData.headline}</h1>
      <p class="text-xl text-blue-100 mb-8">${landingPageData.subheadline}</p>
      <button class="bg-white text-blue-700 font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transform transition hover:scale-105 duration-200">
        ${landingPageData.cta}
      </button>
    </div>
  </div>
  
  <!-- Features Section -->
  <div class="px-6 py-16 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${landingPageData.features.map(feature => `
        <div class="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md">
          <h3 class="text-xl font-semibold mb-3 text-gray-900">${feature.title}</h3>
          <p class="text-gray-600">${feature.description}</p>
        </div>`).join('')}
      </div>
    </div>
  </div>
  
  <!-- CTA Section -->
  <div class="px-6 py-12 bg-gray-100">
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-lg mb-6 text-gray-600">Ready to transform your business?</p>
      <button class="px-8 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition duration-200 transform hover:scale-105">
        ${landingPageData.cta}
      </button>
    </div>
  </div>
  
  <!-- Footer -->
  <footer class="bg-gray-800 text-gray-300 py-8">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; ${new Date().getFullYear()} ${landingPageData.headline}</p>
    </div>
  </footer>
</body>
</html>`;
  };

  const copyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(landingPageData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHTML = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className={`p-3 rounded-full shadow-lg ${
          darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'
        } text-white transition-colors duration-200`}
        aria-label="Export options"
      >
        <Download size={20} />
      </button>

      {isOpen && (
        <div 
          className={`absolute bottom-14 right-0 w-48 rounded-md shadow-lg ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } transition-colors duration-200 z-10`}
        >
          <div className="py-1">
            <button
              onClick={copyJSON}
              className={`flex items-center w-full px-4 py-2 text-sm ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {copied ? <Check size={16} className="mr-2" /> : <Copy size={16} className="mr-2" />}
              {copied ? 'Copied!' : 'Copy JSON'}
            </button>
            <button
              onClick={downloadHTML}
              className={`flex items-center w-full px-4 py-2 text-sm ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              <Download size={16} className="mr-2" />
              Download HTML
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExportButton;