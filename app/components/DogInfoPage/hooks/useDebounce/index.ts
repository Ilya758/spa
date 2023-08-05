import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, wait = 0): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), wait);

    return () => {
      clearTimeout(timer);
    };
  }, [value, wait]);

  return debouncedValue;
}
