/* eslint-disable @typescript-eslint/no-explicit-any */

export const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout;
  return () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  };
};
