/**
 * SEO Utilities for RB MUSIC Website
 * Contains reusable SEO metadata and structured data configurations
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

export const defaultSEO: SEOData = {
  title: 'RB MUSIC - Hip-Hop & Acoustic Artist | Official Website',
  description: 'Experience authentic Hip-Hop and Acoustic music by RB MUSIC. Stream latest tracks, discover the artist\'s journey, and dive into powerful storytelling through music since 2025.',
  keywords: 'RB MUSIC, hip-hop, acoustic music, rapper, singer, songwriter, music artist, streaming, Spotify, Apple Music, new music 2025',
  image: 'https://rbmusic.com/LogoRBTECH_new.png',
  url: 'https://rbmusic.com',
  type: 'website'
};

export const generatePageTitle = (pageTitle: string): string => {
  return pageTitle === 'Home' ? defaultSEO.title : `${pageTitle} | RB MUSIC`;
};

export const generateMusicianStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "RB MUSIC",
    "alternateName": "RB TECH Music",
    "description": "Hip-Hop and Acoustic music artist creating authentic rhythms and powerful storytelling",
    "genre": ["Hip-Hop", "Acoustic"],
    "foundingDate": "2025",
    "url": "https://rbmusic.com",
    "logo": "https://rbmusic.com/LogoRBTECH_new.png",
    "image": "https://rbmusic.com/LogoRBTECH_new.png",
    "sameAs": [
      "https://open.spotify.com/artist/0obtHk61jktNA0D5qii2nH",
      "https://music.apple.com/us/new",
      "https://tidal.com/browse/artist/60707695",
      "https://www.apple.com/itunes/",
      "https://www.deezer.com/en/"
    ],
    "member": {
      "@type": "Person",
      "name": "RB MUSIC"
    },
    "musicBy": {
      "@type": "Person",
      "name": "RB MUSIC"
    },
    "albumReleased": [
      {
        "@type": "MusicAlbum",
        "name": "Latest Releases",
        "datePublished": "2025"
      }
    ]
  };
};

export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RB MUSIC Official Website",
    "description": "Official website of RB MUSIC - Hip-Hop and Acoustic artist",
    "url": "https://rbmusic.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rbmusic.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "author": {
      "@type": "MusicGroup",
      "name": "RB MUSIC"
    }
  };
};

export const socialMediaLinks = [
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/artist/0obtHk61jktNA0D5qii2nH'
  },
  {
    platform: 'Apple Music',
    url: 'https://music.apple.com/us/new'
  },
  {
    platform: 'Tidal',
    url: 'https://tidal.com/browse/artist/60707695'
  },
  {
    platform: 'iTunes',
    url: 'https://www.apple.com/itunes/'
  },
  {
    platform: 'Deezer',
    url: 'https://www.deezer.com/en/'
  }
];
