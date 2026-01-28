import { useState, useCallback, useEffect } from 'react';

export type ImageStatus = 'loading' | 'loaded' | 'error';

interface UseImageLoaderReturn {
  currentSrc: string;
  status: ImageStatus;
  handleLoad: () => void;
  handleError: () => void;
  isLoading: boolean;
  isLoaded: boolean;
  isError: boolean;
}

/**
 * Custom hook to handle image loading with multiple fallback URLs.
 * It iterates through the provided sources array until one succeeds.
 */
export const useImageLoader = (sources: string[]): UseImageLoaderReturn => {
  const [srcIndex, setSrcIndex] = useState(0);
  const [status, setStatus] = useState<ImageStatus>('loading');

  // We filter out any empty or undefined sources to ensure we only try valid strings
  const validSources = sources.filter(Boolean);
  const currentSrc = validSources[srcIndex] || '';

  const handleLoad = useCallback(() => {
    setStatus('loaded');
  }, []);

  const handleError = useCallback(() => {
    if (srcIndex < validSources.length - 1) {
      // Move to the next fallback source
      setSrcIndex((prev) => prev + 1);
      setStatus('loading');
    } else {
      // No more fallbacks left
      setStatus('error');
    }
  }, [srcIndex, validSources.length]);

  // Reset internal state when the sources array changes significantly
  useEffect(() => {
    setSrcIndex(0);
    setStatus('loading');
  }, [validSources.join('|')]);

  return {
    currentSrc,
    status,
    handleLoad,
    handleError,
    isLoading: status === 'loading',
    isLoaded: status === 'loaded',
    isError: status === 'error',
  };
};
