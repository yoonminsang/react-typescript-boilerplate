import { useState, useEffect } from 'react';

import { UTILS } from '@/utils';

interface IWindowSize {
  width: number;
  height: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = UTILS.COMMON.throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 300);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
