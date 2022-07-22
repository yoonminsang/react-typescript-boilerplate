/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

// refer to https://github.com/donavon/use-interval/blob/master/src/index.tsx

type Delay = number | null;
type TimerHandler = (...args: any[]) => void;

/**
 * Provides a declarative useInterval
 *
 * @param callback - Function that will be called every `delay` ms.
 * @param delay - Number representing the delay in ms. Set to `null` to "pause" the interval.
 */

export function useInterval(callback: TimerHandler, delay: Delay) {
  const savedCallbackRef = useRef<TimerHandler>();

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args: any[]) => savedCallbackRef.current!(...args);

    if (delay !== null) {
      const intervalId = setInterval(handler, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}
