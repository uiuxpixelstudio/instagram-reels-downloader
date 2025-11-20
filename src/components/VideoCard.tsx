import React from 'react';
import { AiOutlineDownload, AiOutlineDelete } from 'react-icons/ai';
import { VideoData } from '../types/index';

interface VideoCardProps {
  video: VideoData;
  onRemove: (id: string) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onRemove,
}) => {
  const downloadVideo = () => {
    const a = document.createElement('a');
    a.href = video.downloadUrl;
    a.download = `${video.title}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-400 to-purple-600">
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl mb-2">🎬</div>
              <p className="text-sm">Video Preview</p>
            </div>
          </div>
        )}
        {video.duration && (
          <div className="absolute bottom-2 right-2 rounded bg-black bg-opacity-70 px-2 py-1 text-sm text-white">
            {video.duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900 dark:text-white">
          {video.title}
        </h3>
        
        {video.author && (
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            By <span className="font-medium">{video.author}</span>
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={downloadVideo}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-pink-500 py-2 font-medium text-white transition hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700"
          >
            <AiOutlineDownload size={18} />
            Download
          </button>
          <button
            onClick={() => onRemove(video.id)}
            className="flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-gray-600 transition hover:bg-red-50 hover:text-red-600 sm:px-3 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-red-900 dark:hover:text-red-400"
          >
            <AiOutlineDelete size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
