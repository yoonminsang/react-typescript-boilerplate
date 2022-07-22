import { useCallback, useState } from 'react';

import { LOCAL_KEY } from '@/constants/storage';

// refer to https://usehooks.com/useLocalStorage/

export function useLocalStorage<T>(key: LOCAL_KEY, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (err) {
        console.log(err);
      }
    },
    [key],
  );
  return [storedValue, setValue];
}
