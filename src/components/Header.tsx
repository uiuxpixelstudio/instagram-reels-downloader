import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white py-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <AiOutlineInstagram className="text-3xl text-pink-500" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Instagram Reels Downloader
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Download your favorite Instagram Reels in high quality
            </p>
            
          </div>
        </div>
      </div>
    </header>
  );
};
