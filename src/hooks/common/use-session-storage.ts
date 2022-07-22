import { useCallback, useState } from 'react';

import { SESSION_KEY } from '@/constants/storage';

// refer to https://usehooks.com/useLocalStorage/

export function useSessionStorage<T>(key: SESSION_KEY, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.sessionStorage.getItem(key);
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
          window.sessionStorage.setItem(key, JSON.stringify(value));
        }
      } catch (err) {
        console.log(err);
      }
    },
    [key],
  );
  return [storedValue, setValue];
}
