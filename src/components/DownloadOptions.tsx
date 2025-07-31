import React from 'react';
import { Download, Music, Video, Sparkles } from 'lucide-react';

interface DownloadOptionsProps {
  platform: string;
  url: string;
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({ platform, url }) => {
  const videoQualities = [
    { quality: '360p', size: '~25MB', icon: Video, label: 'Standard' },
    { quality: '720p', size: '~75MB', icon: Video, label: 'HD' },
    { quality: '1080p', size: '~150MB', icon: Sparkles, label: 'Full HD' },
  ];

  const handleDownload = (quality: string) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading ${quality} from ${platform}: ${url}`);
    alert(`Download started for ${quality} quality!`);
  };

  const handleAudioDownload = () => {
    console.log(`Downloading MP3 from ${platform}: ${url}`);
    alert('MP3 download started!');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 transition-colors duration-300">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Choose Download Quality
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videoQualities.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.quality}
              onClick={() => handleDownload(option.quality)}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:from-blue-100 hover:to-blue-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 transform hover:scale-105 border border-blue-200 dark:border-gray-500"
            >
              <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {option.quality}
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {option.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {option.size}
              </div>
            </button>
          );
        })}
        
        <button
          onClick={handleAudioDownload}
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-xl hover:from-green-100 hover:to-green-200 dark:hover:from-green-800 dark:hover:to-green-700 transition-all duration-200 transform hover:scale-105 border border-green-200 dark:border-green-600"
        >
          <Music className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            MP3
          </div>
          <div className="text-sm text-green-600 dark:text-green-400 font-medium">
            Audio Only
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            ~5MB
          </div>
        </button>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
          <strong>Note:</strong> This is a demo interface. In a real application, these buttons would trigger actual downloads.
        </p>
      </div>
    </div>
  );
};

export default DownloadOptions;