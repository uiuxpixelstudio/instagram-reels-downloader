import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ErrorAlertProps {
  message: string;
  onClose?: () => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onClose }) => {
  return (
    <div className="mb-4 rounded-lg border border-red-300 bg-red-50 p-4 dark:border-red-700 dark:bg-red-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-red-800 dark:text-red-200">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200"
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
