export interface InstagramReelResponse {
  success: boolean;
  data: {
    video_url: string;
    thumbnail: string;
    title?: string;
    duration?: string;
    author?: string;
  };
  error?: string;
}

export interface VideoData {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  duration: string;
  author: string;
  downloadUrl: string;
}
