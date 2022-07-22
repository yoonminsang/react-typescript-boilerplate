/* eslint-disable @typescript-eslint/no-explicit-any */

export const throttle = (callback: (...args: any[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout | null;
  return () => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, delay);
  };
};
