import { useState } from 'react';
import { InputForm } from './components/InputForm';
import { VideoCard } from './components/VideoCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorAlert } from './components/ErrorAlert';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { instagramService } from './services/instagramService';
import { VideoData } from './types/index';
import './App.css';

function App() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (url: string) => {
    setError(null);
    setLoading(true);

    try {
      // Validate URL format
      if (!instagramService.validateInstagramUrl(url)) {
        throw new Error(
          'Invalid Instagram URL. Please provide a valid Reels, Post, or Story link.'
        );
      }

      // Fetch video data from API
      const response = await instagramService.fetchReels(url);

      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to process the video');
      }

      // Create video object
      const newVideo: VideoData = {
        id: `video_${Date.now()}`,
        url: url,
        thumbnail: response.data.thumbnail || '',
        title: response.data.title || 'Instagram Video',
        duration: response.data.duration || 'N/A',
        author: response.data.author || 'Unknown',
        downloadUrl: response.data.video_url || '',
      };

      // Add to videos list
      setVideos([newVideo, ...videos]);

      // Optional: Auto-download
      // downloadVideo(newVideo);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Download error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveVideo = (id: string) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all videos?')) {
      setVideos([]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Input Section */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Download Instagram Reels
            </h2>
            <InputForm
              onSubmit={handleDownload}
              isLoading={loading}
              placeholder="https://www.instagram.com/reels/..."
            />

            {/* Error Message */}
            {error && (
              <ErrorAlert
                message={error}
                onClose={() => setError(null)}
              />
            )}

            {/* Loading State */}
            {loading && <LoadingSpinner message="Fetching video details..." />}

            {/* Info Box */}
            <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <p>
                <strong>Tips:</strong> Paste any Instagram Reels URL. The video will be
                processed and ready for download.
              </p>
            </div>
          </div>

          {/* Videos Grid */}
          {videos.length > 0 && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Downloaded Videos ({videos.length})
                </h2>
                <button
                  onClick={handleClearAll}
                  className="text-sm text-red-600 transition hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onRemove={handleRemoveVideo}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && videos.length === 0 && !error && (
            <div className="rounded-lg border-2 border-dashed border-gray-300 py-12 text-center dark:border-gray-600">
              <p className="text-gray-500 dark:text-gray-400">
                No videos downloaded yet. Paste an Instagram Reels URL above to get started!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
