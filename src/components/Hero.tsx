import React, { useState } from 'react';
import { Search, Youtube, Facebook, Instagram, Music } from 'lucide-react';
import PlatformTabs from './PlatformTabs';
import DownloadOptions from './DownloadOptions';

const Hero: React.FC = () => {
  const [url, setUrl] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('youtube');
  const [showOptions, setShowOptions] = useState(false);

  const handleDownload = () => {
    if (url.trim()) {
      setShowOptions(true);
    }
  };

  const platforms = [
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600', hoverColor: 'hover:bg-blue-700' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-500', hoverColor: 'hover:bg-pink-600' },
    { id: 'tiktok', name: 'TikTok', icon: Music, color: 'bg-black', hoverColor: 'hover:bg-gray-800' },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Download Videos from
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
            Any Platform
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Fast, free, and easy video downloader for YouTube, Facebook, Instagram, and TikTok. 
          No registration required.
        </p>

        <div className="max-w-4xl mx-auto">
          <PlatformTabs 
            platforms={platforms}
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
          />

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={`Paste your ${platforms.find(p => p.id === selectedPlatform)?.name} video URL here...`}
                  className="w-full px-4 py-4 pr-12 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              
              <button
                onClick={handleDownload}
                disabled={!url.trim()}
                className={`px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 transform ${
                  url.trim()
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Download
              </button>
            </div>
          </div>

          {showOptions && (
            <div className="animate-fadeIn">
              <DownloadOptions platform={selectedPlatform} url={url} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;