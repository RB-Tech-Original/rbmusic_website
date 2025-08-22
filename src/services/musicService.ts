import { MusicTrack } from '../types';
import { parseBlob } from 'music-metadata';

// MP3 files available in the public folder
const MP3_FILES = [
  {
    filename: 'Breath of Dawn.mp3',
    path: 'Breath of Dawn.mp3'
  }
  // Add more MP3 files here as you add them to the public folder
];

// Cache for extracted metadata
const metadataCache = new Map<string, MusicTrack>();

export class MusicService {
  private static instance: MusicService;

  private constructor() {}

  public static getInstance(): MusicService {
    if (!MusicService.instance) {
      MusicService.instance = new MusicService();
    }
    return MusicService.instance;
  }
  // Extract metadata from MP3 file
  private async extractMetadata(audioPath: string): Promise<MusicTrack> {
    // Check cache first
    if (metadataCache.has(audioPath)) {
      return metadataCache.get(audioPath)!;
    }

    try {
      // Fetch the MP3 file as a blob
      const response = await fetch(audioPath);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${audioPath}`);
      }
      
      const blob = await response.blob();
      
      // Parse metadata using music-metadata library
      const metadata = await parseBlob(blob);
      
      // Extract album art if available
      let coverUrl = '/LogoRB MUSIC_MUSIC.png'; // Default cover
      if (metadata.common.picture && metadata.common.picture.length > 0) {
        const picture = metadata.common.picture[0];
        const blob = new Blob([picture.data], { type: picture.format });
        coverUrl = URL.createObjectURL(blob);
      }
      
      // Get filename for fallback
      const filename = audioPath.split('/').pop() || 'Unknown';
      const trackName = filename.replace('.mp3', '');
      
      // Create track object with extracted metadata
      const track: MusicTrack = {
        id: `track-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title: metadata.common.title || trackName,
        artist: metadata.common.artist || 'RB MUSIC',
        album: metadata.common.album || trackName,
        duration: this.formatDuration(Math.min(metadata.format.duration || 30, 30)), // Limit to 30 seconds
        audioUrl: audioPath,
        coverUrl: coverUrl,
        genre: metadata.common.genre?.[0] || 'Electronic',
        releaseDate: metadata.common.year?.toString() || '2024'
      };

      // Cache the metadata
      metadataCache.set(audioPath, track);
      return track;
      
    } catch (error) {
      console.error(`Failed to extract metadata from ${audioPath}:`, error);
      
      // Fallback track if metadata extraction fails
      const filename = audioPath.split('/').pop() || 'Unknown';
      const trackName = filename.replace('.mp3', '');
      
      const fallbackTrack: MusicTrack = {
        id: `track-fallback-${Date.now()}`,
        title: trackName,
        artist: 'RB MUSIC',
        album: trackName,
        duration: '0:30', // Default 30 seconds
        audioUrl: audioPath,
        coverUrl: '/LogoRB MUSIC_MUSIC.png',
        genre: 'Electronic',
        releaseDate: '2024'
      };

      metadataCache.set(audioPath, fallbackTrack);
      return fallbackTrack;
    }
  }

  // Get all available tracks from MP3 files
  public async getAllTracks(): Promise<MusicTrack[]> {
    const tracks: MusicTrack[] = [];
    
    for (const file of MP3_FILES) {
      try {
        const track = await this.extractMetadata(file.path);
        tracks.push(track);
      } catch (error) {
        console.error(`Failed to extract metadata from ${file.filename}:`, error);
      }
    }
    
    return tracks;
  }

  // Get a specific track by ID
  public async getTrackById(id: string): Promise<MusicTrack | null> {
    const tracks = await this.getAllTracks();
    return tracks.find(track => track.id === id) || null;
  }

  // Get the latest/featured track
  public async getLatestTrack(): Promise<MusicTrack | null> {
    const tracks = await this.getAllTracks();
    return tracks[0] || null;
  }

  // Search tracks by title or artist
  public async searchTracks(query: string): Promise<MusicTrack[]> {
    const tracks = await this.getAllTracks();
    const lowercaseQuery = query.toLowerCase();
    return tracks.filter(track => 
      track.title.toLowerCase().includes(lowercaseQuery) ||
      track.artist.toLowerCase().includes(lowercaseQuery) ||
      track.album?.toLowerCase().includes(lowercaseQuery)
    );
  }

  // Get tracks by artist
  public async getTracksByArtist(artistName: string): Promise<MusicTrack[]> {
    const tracks = await this.getAllTracks();
    return tracks.filter(track => 
      track.artist.toLowerCase().includes(artistName.toLowerCase())
    );
  }

  // Helper method to format duration from seconds to mm:ss
  private formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  // Helper method to parse duration string (mm:ss) to seconds
  public static parseDuration(duration: string): number {
    const [minutes, seconds] = duration.split(':').map(Number);
    return minutes * 60 + seconds;
  }

  // Add new MP3 files to the service (call this when you add new files)
  public addMP3File(filename: string, path: string): void {
    MP3_FILES.push({ filename, path });
    // Clear cache to force re-extraction of metadata
    metadataCache.clear();
  }
  // Get list of available MP3 files
  public getAvailableFiles(): Array<{filename: string, path: string}> {
    return [...MP3_FILES];
  }
}

// Export singleton instance
export const musicService = MusicService.getInstance();

/*
  TO ADD MORE TRACKS:
  
  1. Add MP3 files to the public folder (e.g., public/audio/)
  2. Add track information to the MUSIC_TRACKS array above
  3. Make sure the audioUrl points to the correct path (e.g., '/audio/song.mp3')
  4. Add cover images to the public folder and reference them in coverUrl
  
  Example of adding a new track:
  {
    id: 'track-2',
    title: 'Your Song Title',
    artist: 'RB MUSIC',
    album: 'Album Name',
    duration: '4:30',
    audioUrl: '/audio/your-song.mp3',
    coverUrl: '/images/cover.jpg',
    genre: 'Electronic',
    releaseDate: '2024'
  }
*/
