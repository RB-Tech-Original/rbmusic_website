/**
 * Helper script to get your actual Spotify track preview URL
 * 
 * CURRENT STATUS: Your track "The Last Dawn" (ID: 5slDveRvu2uwBoiGcOyOHE) is configured
 * with real metadata but using demo audio. Follow steps below to get real preview.
 * 
 * TO GET YOUR ACTUAL TRACK PREVIEW:
 * 
 * 1. Go to https://developer.spotify.com/dashboard
 * 2. Log in with your Spotify account
 * 3. Click "Create App"
 *    - App name: "RB MUSIC Music Website"
 *    - App description: "Personal music website for RB MUSIC"
 *    - Website: Your website URL (optional)
 *    - Redirect URI: http://localhost:3000 (for development)
 *    - Check "Web API" and agree to terms
 * 
 * 4. Get your credentials:
 *    - Client ID: Copy this value
 *    - Client Secret: Click "Show Client Secret" and copy
 * 
 * 5. Test with PowerShell (replace YOUR_CLIENT_ID and YOUR_CLIENT_SECRET):
 * 
 *    # Get access token
 *    $credentials = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("YOUR_CLIENT_ID:YOUR_CLIENT_SECRET"))
 *    $headers = @{
 *        "Authorization" = "Basic $credentials"
 *        "Content-Type" = "application/x-www-form-urlencoded"
 *    }
 *    $body = "grant_type=client_credentials"
 *    $tokenResponse = Invoke-RestMethod -Uri "https://accounts.spotify.com/api/token" -Method Post -Headers $headers -Body $body
 *    $accessToken = $tokenResponse.access_token
 * 
 *    # Get track info
 *    $trackHeaders = @{
 *        "Authorization" = "Bearer $accessToken"
 *    }
 *    $trackData = Invoke-RestMethod -Uri "https://api.spotify.com/v1/tracks/5slDveRvu2uwBoiGcOyOHE" -Headers $trackHeaders
 *    $trackData | ConvertTo-Json -Depth 10
 *    Write-Host "Preview URL: $($trackData.preview_url)"
 * 
 * 6. Look for the "preview_url" field in the response
 * 7. Update the preview_url in spotifyService.ts with the real URL
 * 
 * ALTERNATIVE - Use this JavaScript function in your browser console:
 */

async function getSpotifyTrackInfo(clientId: string, clientSecret: string, trackId: string) {
  // Get access token
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });
  
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;
  
  // Get track info
  const trackResponse = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  const trackData = await trackResponse.json();
  console.log('Track data:', trackData);
  console.log('Preview URL:', trackData.preview_url);
  return trackData;
}

// Usage example (uncomment and add your credentials to test):
// getSpotifyTrackInfo('YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET', '5slDveRvu2uwBoiGcOyOHE');

/**
 * QUICK SETUP FOR PRODUCTION:
 * 
 * 1. Get Spotify API credentials (see steps above)
 * 2. Replace the preview_url in SAMPLE_TRACKS with your actual preview URL
 * 3. Update the track duration with the real value from the API
 * 4. For full integration, implement the Spotify Web API calls in spotifyService.ts
 * 
 * CURRENT TRACK INFO:
 * - Name: "The Last Dawn"
 * - ID: 5slDveRvu2uwBoiGcOyOHE
 * - Album Art: ✅ Using real Spotify CDN URL
 * - Preview URL: ⚠️ Using demo audio (needs Spotify API)
 * - Duration: ⚠️ Using estimated value (needs Spotify API)
 */

// Export the helper function so it can be used
export { getSpotifyTrackInfo };
