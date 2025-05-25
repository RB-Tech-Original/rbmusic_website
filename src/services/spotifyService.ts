// This file is no longer used - replaced by musicService.ts
// import { SpotifyTrack, SpotifySearchResponse } from '../types';

// Your actual Spotify track ID
const YOUR_TRACK_ID = '5slDveRvu2uwBoiGcOyOHE';

// Using actual track data retrieved from Spotify
// Preview URL requires Spotify Web API authentication - using demo audio for now
const SAMPLE_TRACKS: any[] = [
  {
    id: YOUR_TRACK_ID,
    name: 'The Last Dawn', // Actual track name from Spotify
    artists: [{ name: 'RB MUSIC' }],
    album: {
      name: 'The Last Dawn',
      images: [
        {
          url: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027ebadf5654339bc75a4690ce',
          height: 300,
          width: 300,
        },
      ],
    },    // Demo preview URL - using a simple test audio that should work
    // Note: Replace with actual Spotify preview URL when you get API access
    preview_url: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
    external_urls: {
      spotify: 'https://open.spotify.com/track/5slDveRvu2uwBoiGcOyOHE?si=33c80d8e093d4300',
    },
    duration_ms: 180000, // Update this with actual duration when you get API access
  },  {
    id: 'sample-2',
    name: 'City Lights',
    artists: [{ name: 'RB MUSIC' }],
    album: {
      name: 'Urban Sounds',
      images: [
        {
          url: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027ebadf5654339bc75a4690ce',
          height: 300,
          width: 300,
        },
      ],
    },    // Another demo track - using a simple test audio that should work
    preview_url: 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav',
    external_urls: {
      spotify: 'https://open.spotify.com/track/sample-2',
    },
    duration_ms: 210000,
  },
];

export class SpotifyService {
  private static instance: SpotifyService;
  private clientId: string = '';
  private accessToken: string = '';

  private constructor() {}

  public static getInstance(): SpotifyService {
    if (!SpotifyService.instance) {
      SpotifyService.instance = new SpotifyService();
    }
    return SpotifyService.instance;
  }
  // Initialize with your Spotify Client ID (when you get one)
  public initialize(clientId: string) {
    this.clientId = clientId;
  }
  // Fetch actual track data from Spotify (requires client credentials)
  private async fetchSpotifyTrack(trackId: string): Promise<any | null> {
    try {
      // For now, we'll use a fallback since we don't have auth set up
      // In production, you'd get an access token first
      console.log(`Would fetch track ${trackId} from Spotify API`);
      return null;
    } catch (error) {
      console.error('Error fetching from Spotify:', error);
      return null;
    }
  }
  // For now, return sample tracks
  public async getLatestTrack(): Promise<any | null> {
    // Try to fetch real data first, fallback to sample
    const realTrack = await this.fetchSpotifyTrack(YOUR_TRACK_ID);
    if (realTrack) {
      return realTrack;
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return SAMPLE_TRACKS[0];
  }
  public async searchTracks(query: string): Promise<any[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return SAMPLE_TRACKS.filter((track: any) => 
      track.name.toLowerCase().includes(query.toLowerCase()) ||
      track.artists.some((artist: any) => artist.name.toLowerCase().includes(query.toLowerCase()))
    );
  }

  public async getArtistTracks(artistName: string): Promise<any[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return SAMPLE_TRACKS;
  }

  // Helper method to format duration
  public static formatDuration(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  // Helper method to get track preview or fallback
  public static getTrackPreview(track: any): string | null {
    return track.preview_url;
  }
}

// Export singleton instance
export const spotifyService = SpotifyService.getInstance();

/* 
  HOW TO INTEGRATE WITH REAL SPOTIFY API:
  
  1. Register your app at https://developer.spotify.com/dashboard
  2. Get your Client ID and Client Secret
  3. Implement OAuth flow for user authentication
  4. Use Spotify Web API endpoints:
     - Search: https://api.spotify.com/v1/search
     - Artist's albums: https://api.spotify.com/v1/artists/{id}/albums
     - Track info: https://api.spotify.com/v1/tracks/{id}
  
  Example with real API:
  
  public async searchTracks(query: string): Promise<SpotifyTrack[]> {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
      {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
        },
      }
    );
    
    const data: SpotifySearchResponse = await response.json();
    return data.tracks.items;
  }
*/
