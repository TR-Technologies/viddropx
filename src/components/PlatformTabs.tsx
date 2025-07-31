import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  hoverColor: string;
}

interface PlatformTabsProps {
  platforms: Platform[];
  selectedPlatform: string;
  setSelectedPlatform: (platform: string) => void;
}

const PlatformTabs: React.FC<PlatformTabsProps> = ({ platforms, selectedPlatform, setSelectedPlatform }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {platforms.map((platform) => {
        const Icon = platform.icon;
        const isSelected = selectedPlatform === platform.id;
        
        return (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
              isSelected
                ? `${platform.color} text-white shadow-lg`
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{platform.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PlatformTabs;