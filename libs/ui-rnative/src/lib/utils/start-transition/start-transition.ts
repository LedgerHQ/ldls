import { startTransition as reactStartTransition } from 'react';
import { isBrowser } from '../constants';

export const startTransition = (callback: React.TransitionFunction): void => {
  if (!isBrowser) {
    // Pass-through function
    callback();
  } else {
    // Proxy to react.startTransition
    reactStartTransition(callback);
  }
};
