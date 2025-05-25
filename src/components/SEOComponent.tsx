import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  SEOData, 
  defaultSEO, 
  generateMusicianStructuredData, 
  generateWebsiteStructuredData 
} from '../utils/seo';

interface SEOComponentProps {
  data?: Partial<SEOData>;
  includeMusicianSchema?: boolean;
  includeWebsiteSchema?: boolean;
}

const SEOComponent: React.FC<SEOComponentProps> = ({ 
  data = {}, 
  includeMusicianSchema = false,
  includeWebsiteSchema = false 
}) => {
  const seoData = { ...defaultSEO, ...data };
  
  const structuredDataScripts = [];
  
  if (includeMusicianSchema) {
    structuredDataScripts.push(generateMusicianStructuredData());
  }
  
  if (includeWebsiteSchema) {
    structuredDataScripts.push(generateWebsiteStructuredData());
  }

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
      <meta name="author" content="RB MUSIC" />
      <meta name="robots" content={seoData.noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={seoData.url || defaultSEO.url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:type" content={seoData.type || 'website'} />
      <meta property="og:url" content={seoData.url || defaultSEO.url} />
      <meta property="og:image" content={seoData.image || defaultSEO.image} />
      <meta property="og:image:alt" content="RB MUSIC Official Logo" />
      <meta property="og:site_name" content="RB MUSIC" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image || defaultSEO.image} />
      <meta name="twitter:image:alt" content="RB MUSIC Official Logo" />
      
      {/* Music-specific metadata */}
      <meta name="music:musician" content="RB MUSIC" />
      <meta name="music:genre" content="Hip-Hop, Acoustic" />
      <meta name="music:release_date" content="2025" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      {structuredDataScripts.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOComponent;
