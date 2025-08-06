import { useEffect } from 'react';

export default function useLockBodyScroll(shouldLock: boolean) {
  useEffect(() => {
    if (shouldLock) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [shouldLock]);
}
