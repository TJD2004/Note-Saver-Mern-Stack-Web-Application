import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>&copy; 2025 Notes.app - All rights reserved</span>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-600 dark:text-gray-400">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-gray-600 dark:text-gray-400">by</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Tushar Dharmik
            </span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Secure note-taking application built with MERN stack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;