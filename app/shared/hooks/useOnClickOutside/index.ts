import { useEffect } from 'react';

export const useOnClickOutside = (
  element: Element | null,
  callback: () => void
) => {
  useEffect(() => {
    const listener = ({ target }: MouseEvent | TouchEvent) => {
      if (target instanceof Element && !element?.contains(target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [element, callback]);
};
