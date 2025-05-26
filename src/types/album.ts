export interface Track {
  title: string;
  duration: string;
  featured: boolean;
  aiGenerated: boolean;
}

export interface Album {
  id: string;
  title: string;
  year: string;
  genre: string;
  tracks: number;
  image: string;
  featured: boolean;
  color: string;
  streams: string;
  rating: number;
  status: string;
  aiFeatures: string[];
  trackList: Track[];
}

export interface AlbumData {
  albums: Album[];
}
