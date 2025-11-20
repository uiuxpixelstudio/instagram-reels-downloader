import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...' 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <AiOutlineLoading3Quarters className="text-4xl text-pink-500 animate-spin" />
      <p className="mt-4 text-gray-600 dark:text-gray-400">{message}</p>
    </div>
  );
};
