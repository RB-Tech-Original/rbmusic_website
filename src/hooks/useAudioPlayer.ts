import { useState, useRef, useEffect, useCallback } from 'react';
import { AudioPlayerState, MusicTrack } from '../types';

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playerState, setPlayerState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    track: null,
  });
  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'metadata';
      audioRef.current.volume = 1.0; // Start at full volume
    }

    const audio = audioRef.current;
    
    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;
      
      // Start fading volume at 27 seconds for smooth ending
      if (currentTime >= 27 && currentTime < 30) {
        const fadeStart = 27;
        const fadeEnd = 30;
        const fadeProgress = (currentTime - fadeStart) / (fadeEnd - fadeStart);
        audio.volume = Math.max(0, 1 - fadeProgress);
      }
      
      // Enforce strict 30-second limit
      if (currentTime >= 30) {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1.0; // Reset volume for next play
        setPlayerState(prev => ({
          ...prev,
          isPlaying: false,
          currentTime: 0,
        }));
        console.log('30-second preview completed');
        return;
      }
      
      setPlayerState(prev => ({
        ...prev,
        currentTime: currentTime,
      }));
    };
    
    const handleLoadedMetadata = () => {
      // Always set duration to maximum 30 seconds for preview
      const actualDuration = Math.min(audio.duration || 30, 30);
      setPlayerState(prev => ({
        ...prev,
        duration: actualDuration,
      }));
    };
    
    const handleEnded = () => {
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
      }));
    };
    
    const handleError = (e: any) => {
      console.error('Audio playback error:', e);
      console.error('Error details:', {
        error: e.target?.error,
        src: e.target?.src,
        networkState: e.target?.networkState,
        readyState: e.target?.readyState
      });
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false,
      }));
    };
    
    // Add event listeners
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    
    // Cleanup function
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);const playTrack = useCallback(async (track: MusicTrack) => {
    if (!audioRef.current || !track.audioUrl) {
      console.warn('No audio URL available for this track');
      return;
    }

    try {
      // Stop current playback
      if (playerState.isPlaying) {
        audioRef.current.pause();
      }      // Configure audio element for better compatibility
      audioRef.current.preload = 'auto';
      audioRef.current.volume = 1.0; // Reset volume for new track
      
      // Load new track
      audioRef.current.src = track.audioUrl;
      audioRef.current.currentTime = 0;
      
      setPlayerState(prev => ({
        ...prev,
        track,
        currentTime: 0,
      }));

      // Wait for the audio to be ready before playing
      await new Promise((resolve, reject) => {
        const handleCanPlay = () => {
          audioRef.current?.removeEventListener('canplay', handleCanPlay);
          audioRef.current?.removeEventListener('error', handleLoadError);
          resolve(undefined);
        };
        
        const handleLoadError = (e: any) => {
          audioRef.current?.removeEventListener('canplay', handleCanPlay);
          audioRef.current?.removeEventListener('error', handleLoadError);
          reject(e);
        };
        
        audioRef.current?.addEventListener('canplay', handleCanPlay);
        audioRef.current?.addEventListener('error', handleLoadError);
        
        // Start loading
        audioRef.current?.load();
      });

      // Play the track
      await audioRef.current.play();
      
      setPlayerState(prev => ({
        ...prev,
        isPlaying: true,
      }));
    } catch (error) {
      console.error('Error playing track:', error);
      console.error('Track details:', {
        title: track.title,
        audioUrl: track.audioUrl,
        id: track.id
      });
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false,
      }));
    }
  }, [playerState.isPlaying]);

  const pauseTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false,
      }));
    }
  }, []);
  const resumeTrack = useCallback(async () => {
    if (audioRef.current) {
      try {
        // Check if browser supports audio playback
        if (audioRef.current.paused && audioRef.current.readyState >= 2) {
          await audioRef.current.play();
          setPlayerState(prev => ({
            ...prev,
            isPlaying: true,
          }));
        } else {
          console.warn('Audio not ready for playback:', {
            paused: audioRef.current.paused,
            readyState: audioRef.current.readyState,
            src: audioRef.current.src
          });
        }
      } catch (error) {
        console.error('Error resuming track:', error);
        // Try to reload and play if resume fails
        if (audioRef.current.src) {
          audioRef.current.load();
          setTimeout(async () => {
            try {
              await audioRef.current?.play();
              setPlayerState(prev => ({
                ...prev,
                isPlaying: true,
              }));
            } catch (retryError) {
              console.error('Retry failed:', retryError);
            }
          }, 100);
        }
      }
    }
  }, []);

  const togglePlayback = useCallback(async () => {
    if (playerState.isPlaying) {
      pauseTrack();
    } else {
      await resumeTrack();
    }
  }, [playerState.isPlaying, pauseTrack, resumeTrack]);  const seekTo = useCallback((time: number) => {
    if (audioRef.current && playerState.track) {
      // Ensure seeking doesn't go beyond 30 seconds and doesn't go below 0
      const seekTime = Math.max(0, Math.min(time, 30));
      audioRef.current.currentTime = seekTime;
      setPlayerState(prev => ({
        ...prev,
        currentTime: seekTime,
      }));
    }
  }, [playerState.track]);

  return {
    playerState,
    playTrack,
    pauseTrack,
    resumeTrack,
    togglePlayback,
    seekTo,
  };
};
