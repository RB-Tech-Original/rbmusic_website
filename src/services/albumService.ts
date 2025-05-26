import albumsData from '../data/albums.json';
import { Album, AlbumData } from '../types/album';

class AlbumService {
  private albums: Album[];

  constructor() {
    this.albums = (albumsData as AlbumData).albums;
  }

  /**
   * Get all albums
   */
  getAllAlbums(): Album[] {
    return this.albums;
  }

  /**
   * Get album by ID
   */
  getAlbumById(id: string): Album | undefined {
    return this.albums.find(album => album.id === id);
  }

  /**
   * Get featured albums
   */
  getFeaturedAlbums(): Album[] {
    return this.albums.filter(album => album.featured);
  }

  /**
   * Get albums by status
   */
  getAlbumsByStatus(status: string): Album[] {
    return this.albums.filter(album => album.status === status);
  }

  /**
   * Get albums by year
   */
  getAlbumsByYear(year: string): Album[] {
    return this.albums.filter(album => album.year === year);
  }

  /**
   * Search albums by title or description
   */
  searchAlbums(query: string): Album[] {
    const lowercaseQuery = query.toLowerCase();
    return this.albums.filter(album => 
      album.title.toLowerCase().includes(lowercaseQuery) ||
      album.genre.toLowerCase().includes(lowercaseQuery)
    );
  }

  /**
   * Get total number of tracks across all albums
   */
  getTotalTracks(): number {
    return this.albums.reduce((total, album) => total + album.tracks, 0);
  }

  /**
   * Get albums sorted by rating (highest first)
   */
  getAlbumsByRating(): Album[] {
    return [...this.albums].sort((a, b) => b.rating - a.rating);
  }

  /**
   * Get albums sorted by streams
   */
  getAlbumsByStreams(): Album[] {
    return [...this.albums].sort((a, b) => {
      const aStreams = parseInt(a.streams.replace(/[^\d]/g, ''));
      const bStreams = parseInt(b.streams.replace(/[^\d]/g, ''));
      return bStreams - aStreams;
    });
  }
}

export const albumService = new AlbumService();
export default albumService;
