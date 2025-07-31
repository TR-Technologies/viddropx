import React from 'react';
import { Heart, Mail, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg mb-6">
            Website created and developed by{' '}
            <span className="font-bold text-blue-400">Tanvir Rahman</span>.
            Made with <Heart className="inline h-5 w-5 text-red-500 mx-1" /> in{' '}
            <span className="font-bold text-green-400">Bangladesh</span>.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:mahin.md.tanvir.rahman@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
            <a
              href="https://www.facebook.com/Tanvir8268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tanvir-rahman-77b020371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 VidDropx. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              This is a demonstration website. Actual video downloading functionality would require proper backend implementation and compliance with platform terms of service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;