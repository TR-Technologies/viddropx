import React from 'react';
import { Copy, MousePointer, Download, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Copy,
      title: 'Copy Video URL',
      description: 'Copy the link of your favorite video from YouTube, Facebook, Instagram, or TikTok.',
      color: 'bg-blue-500',
    },
    {
      icon: MousePointer,
      title: 'Paste & Select',
      description: 'Paste the URL into our downloader and choose your preferred platform.',
      color: 'bg-purple-500',
    },
    {
      icon: Download,
      title: 'Choose Quality',
      description: 'Select your desired video quality (360p, 720p, 1080p) or download as MP3.',
      color: 'bg-green-500',
    },
    {
      icon: CheckCircle,
      title: 'Download Complete',
      description: 'Your video will be processed and downloaded to your device instantly.',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download your favorite videos in just 4 simple steps. Fast, secure, and completely free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose VidDropx?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">100% Free</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">No hidden costs or premium subscriptions required.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Download className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">High Quality</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Download videos in original quality up to 1080p.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MousePointer className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Simple interface that works on all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;