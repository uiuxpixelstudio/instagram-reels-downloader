import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface InputFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  isLoading,
  placeholder = 'Paste Instagram Reels URL here...',
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          disabled={isLoading}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 disabled:bg-gray-100 disabled:text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:ring-pink-900"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="flex items-center gap-2 rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600 disabled:bg-gray-400 dark:bg-pink-600 dark:hover:bg-pink-700"
        >
          <AiOutlineSearch size={20} />
          Download
        </button>
      </div>
    </form>
  );
};
