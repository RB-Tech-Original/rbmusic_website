export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: string;
  audioUrl: string;
  coverUrl?: string;
  genre?: string;
  releaseDate?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  social: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  track: MusicTrack | null;
}
