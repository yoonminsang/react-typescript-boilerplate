/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from 'react';

export function useUpdateEffect(callback: (...args: any[]) => void, deps: any[]) {
  const isMount = useRef<boolean>(false);

  useEffect(() => {
    if (isMount.current) {
      callback();
    } else {
      isMount.current = true;
    }
  }, deps);
}
