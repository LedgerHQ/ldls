import { startTransition as reactStartTransition } from 'react';
import { RuntimeConstants } from '../constants';

export const startTransition = (callback: React.TransitionFunction): void => {
  if (!RuntimeConstants.isBrowser) {
    // Pass-through function
    callback();
  } else {
    // Proxy to react.startTransition
    reactStartTransition(callback);
  }
};
