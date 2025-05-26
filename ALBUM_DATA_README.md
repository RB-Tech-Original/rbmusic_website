# Album Data Management

This project now uses a JSON-based system for managing album data, making it easier to add, modify, and maintain album information.

## Files Structure

```
src/
├── data/
│   ├── albums.json          # Main album data
│   └── albumTemplate.json   # Template for new albums
├── services/
│   └── albumService.ts      # Service for album operations
├── types/
│   └── album.ts             # TypeScript interfaces
└── components/
    └── Music.tsx            # Updated to use album service
```

## Adding a New Album

1. **Copy the template**: Open `src/data/albumTemplate.json` and copy the `newAlbumTemplate` object
2. **Fill in your data**: Update all fields with your album information
3. **Add to albums.json**: Paste the new album object into the `albums` array in `src/data/albums.json`
4. **Add album cover**: Place your album cover image in the `public/` folder

### Example: Adding a new album

```json
{
  "id": "future-sounds",
  "title": "Future Sounds",
  "year": "2025",
  "genre": "AI Electronic • Synthwave",
  "tracks": 8,
  "image": "/future-sounds-cover.png",
  "featured": true,
  "description": "Electronic beats crafted by neural networks with synthwave influences",
  "color": "#8b5cf6",
  "streams": "15K+",
  "rating": 4.9,
  "status": "released",
  "aiFeatures": ["Neural Synthesis", "Algorithmic Beats", "AI Mastering"],
  "trackList": [
    {
      "title": "Digital Dreams",
      "duration": "4:12",
      "featured": true,
      "aiGenerated": true
    },
    {
      "title": "Neon Nights",
      "duration": "3:45",
      "featured": false,
      "aiGenerated": true
    }
  ]
}
```

## Album Service Methods

The `albumService` provides several useful methods:

- `getAllAlbums()` - Get all albums
- `getAlbumById(id)` - Get specific album by ID
- `getFeaturedAlbums()` - Get only featured albums
- `getAlbumsByStatus(status)` - Filter by status ('released', 'coming-soon', etc.)
- `getAlbumsByYear(year)` - Filter by release year
- `searchAlbums(query)` - Search by title, description, or genre
- `getTotalTracks()` - Get total number of tracks across all albums
- `getAlbumsByRating()` - Get albums sorted by rating
- `getAlbumsByStreams()` - Get albums sorted by stream count

## Field Descriptions

### Album Fields
- **id**: Unique identifier (lowercase, hyphen-separated)
- **title**: Album title
- **year**: Release year
- **genre**: Music genre description
- **tracks**: Number of tracks in the album
- **image**: Path to album cover image (relative to public folder)
- **featured**: Whether to highlight this album (boolean)
- **description**: Short description of the album
- **color**: Theme color for the album card (hex format)
- **streams**: Stream count display text
- **rating**: Album rating (0-5)
- **status**: Release status ('released', 'coming-soon', etc.)
- **aiFeatures**: Array of AI technologies used
- **trackList**: Array of track objects

### Track Fields
- **title**: Track title
- **duration**: Track length in MM:SS format
- **featured**: Whether this is a featured track (boolean)
- **aiGenerated**: Whether the track was AI-generated (boolean)

## Benefits of This Approach

1. **Easy Maintenance**: Album data is separated from UI code
2. **Type Safety**: TypeScript interfaces ensure data consistency
3. **Reusability**: Album service can be used across multiple components
4. **Scalability**: Easy to add new albums without touching component code
5. **Data Validation**: TypeScript helps catch data errors early
6. **Performance**: JSON data is loaded once and cached

## Tips

- Keep album IDs unique and descriptive
- Use consistent color schemes for album themes
- Optimize album cover images for web (recommended: 800x800px, WebP format)
- Update the track count when adding/removing tracks
- Use proper duration format (MM:SS)
