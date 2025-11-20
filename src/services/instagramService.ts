import axios, { AxiosError } from 'axios';
import { InstagramReelResponse } from '../types/index';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export const instagramService = {
  /**
   * Fetch Instagram video data (Reels, Posts, Stories)
   * @param instagramUrl - The Instagram URL
   * @returns Promise with video data
   */
  async fetchReels(instagramUrl: string): Promise<InstagramReelResponse> {
    try {
      if (!API_KEY || !API_HOST) {
        throw new Error('API credentials not configured. Check your .env file.');
      }

      if (!instagramUrl.trim()) {
        throw new Error('Please enter a valid Instagram URL');
      }

      // Remove trailing slashes and extract URL
      const cleanUrl = instagramUrl.trim().replace(/\/$/, '');

      // Basic URL validation
      if (!cleanUrl.includes('instagram.com')) {
        throw new Error('Invalid Instagram URL. Please provide a valid Instagram link.');
      }

      // Use the /convert endpoint from RapidAPI
      const apiUrl = `https://${API_HOST}/convert`;
      
      console.log('[Instagram Service] Fetching from:', apiUrl);
      console.log('[Instagram Service] URL param:', cleanUrl);
      console.log('[Instagram Service] API Key length:', API_KEY?.length || 0);
      console.log('[Instagram Service] API Host:', API_HOST);
      
      const response = await axios.get(apiUrl, {
        params: {
          url: cleanUrl,
        },
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      });

      console.log('[Instagram Service] Response status:', response.status);
      console.log('[Instagram Service] Response data:', response.data);

      if (!response.data) {
        throw new Error('No response from API');
      }

      // Helper: robustly find a video URL in the API response
      const findVideoUrlFromData = (data: any): string | null => {
        if (!data) return null;

        const candidates = [
          'video',
          'video_url',
          'download_url',
          'download_link',
          'downloadLink',
          'download',
          'url',
          'link',
        ];

        // Check direct keys first
        for (const key of candidates) {
          if (data[key] && typeof data[key] === 'string' && data[key].startsWith('http')) {
            return data[key];
          }
        }

        // Scan for any string URL values on the top-level
        if (typeof data === 'object') {
          for (const k of Object.keys(data)) {
            const v = data[k];
            if (typeof v === 'string' && v.startsWith('http')) {
              if (/\.(mp4|mov|m3u8)(\?|$)/i.test(v) || /cdn|video/i.test(v)) return v;
            }
          }

          // Recursively search nested objects/arrays
          for (const k of Object.keys(data)) {
            const v = data[k];
            if (typeof v === 'object') {
              const found = findVideoUrlFromData(v);
              if (found) return found;
            }
          }
        }

        return null;
      };

      // Helper: robustly find a thumbnail/preview image URL
      const findThumbnailFromData = (data: any): string | null => {
        if (!data) return null;

        const candidates = [
          'thumbnail',
          'thumb',
          'preview',
          'preview_url',
          'image',
          'image_url',
          'cover',
          'poster',
          'poster_url',
        ];

        // Check direct keys first
        for (const key of candidates) {
          if (data[key] && typeof data[key] === 'string' && data[key].startsWith('http')) {
            return data[key];
          }
        }

        // Scan for any string URL values on the top-level that look like images
        if (typeof data === 'object') {
          for (const k of Object.keys(data)) {
            const v = data[k];
            if (typeof v === 'string' && v.startsWith('http')) {
              if (/\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(v) || /thumb|image|preview|cdn/i.test(v)) {
                if (!/\.(mp4|mov|m3u8)/i.test(v)) return v;
              }
            }
          }

          // Recursively search nested objects/arrays
          for (const k of Object.keys(data)) {
            const v = data[k];
            if (typeof v === 'object') {
              const found = findThumbnailFromData(v);
              if (found) return found;
            }
          }
        }

        return null;
      };


      const videoUrl = findVideoUrlFromData(response.data);

      if (!videoUrl) {
        const keys = response.data && typeof response.data === 'object' ? Object.keys(response.data).join(', ') : String(response.data);
        throw new Error(`No video URL found in response (response keys: ${keys})`);
      }

      const thumbnailUrl = findThumbnailFromData(response.data);
      console.log('[Instagram Service] Video URL found:', videoUrl);
      console.log('[Instagram Service] Thumbnail URL found:', thumbnailUrl);

      return {
        success: true,
        data: {
          video_url: videoUrl,
          thumbnail: thumbnailUrl || '',
          title: response.data.title || 'Instagram Video',
          duration: response.data.duration || 'N/A',
          author: response.data.author || response.data.username || 'Unknown',
        },
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      
      console.error('[Instagram Service] Error:', error);
      console.error('[Instagram Service] Response status:', axiosError.response?.status);
      console.error('[Instagram Service] Response data:', axiosError.response?.data);
      console.error('[Instagram Service] Error message:', axiosError.message);
      
      if (axiosError.response?.status === 401) {
        throw new Error('Invalid API credentials. Check your RapidAPI key.');
      }
      
      if (axiosError.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }

      if (axiosError.response?.status === 400) {
        throw new Error('Invalid Instagram URL. Please provide a valid link.');
      }
      
      if (axiosError.message === 'Network Error' || axiosError.code === 'ECONNABORTED') {
        throw new Error('Network error: Could not connect to API. Check your internet connection or try again.');
      }
      
      if (error instanceof Error) {
        throw error;
      }
      
      throw new Error('Failed to download video. Please try again.');
    }
  },

  /**
   * Validate Instagram URL format
   */
  validateInstagramUrl(url: string): boolean {
    const patterns = [
      /instagram\.com\/reels?\//i,
      /instagram\.com\/p\//i,
      /ig\.me\//i,
    ];
    return patterns.some(pattern => pattern.test(url));
  },
};
