import plugin from 'tailwindcss/plugin.js';

export function createAnimationsPlugin() {
  return plugin(
    () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    {
      theme: {
        extend: {
          keyframes: {
            'content-show': {
              from: {
                opacity: '0',
                transform: 'translate(-50%, -48%) scale(0.96)',
              },
              to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
            },
            'content-hide': {
              from: {
                opacity: '1',
                transform: 'translate(-50%, -50%) scale(1)',
              },
              to: {
                opacity: '0',
                transform: 'translate(-50%, -48%) scale(0.96)',
              },
            },
            'fade-in': {
              from: { opacity: '0' },
              to: { opacity: '1' },
            },
            'fade-out': {
              from: { opacity: '1' },
              to: { opacity: '0' },
            },
            'slide-in-from-top': {
              from: { transform: 'translateY(-10px)', opacity: '0' },
              to: { transform: 'translateY(0px)', opacity: '1' },
            },
            'slide-in-from-bottom': {
              from: { transform: 'translateY(10px)', opacity: '0' },
              to: { transform: 'translateY(0px)', opacity: '1' },
            },
            'slide-in-from-left': {
              from: { transform: 'translateX(-10px)', opacity: '0' },
              to: { transform: 'translateX(0px)', opacity: '1' },
            },
            'slide-in-from-right': {
              from: { transform: 'translateX(10px)', opacity: '0' },
              to: { transform: 'translateX(0px)', opacity: '1' },
            },
            // Slide in animations (8px offset)
            'slide-in-from-top-8': {
              from: { transform: 'translateY(-10px)', opacity: '0' },
              to: { transform: 'translateY(8px)', opacity: '1' },
            },
            'slide-in-from-bottom-8': {
              from: { transform: 'translateY(10px)', opacity: '0' },
              to: { transform: 'translateY(-8px)', opacity: '1' },
            },
            'slide-in-from-left-8': {
              from: { transform: 'translateX(-10px)', opacity: '0' },
              to: { transform: 'translateX(8px)', opacity: '1' },
            },
            'slide-in-from-right-8': {
              from: { transform: 'translateX(10px)', opacity: '0' },
              to: { transform: 'translateX(-8px)', opacity: '1' },
            },
            'slide-out-to-top': {
              from: { transform: 'translateY(0px)', opacity: '1' },
              to: { transform: 'translateY(-10px)', opacity: '0' },
            },
            'slide-out-to-bottom': {
              from: { transform: 'translateY(0px)', opacity: '1' },
              to: { transform: 'translateY(10px)', opacity: '0' },
            },
            'slide-out-to-left': {
              from: { transform: 'translateX(0px)', opacity: '1' },
              to: { transform: 'translateX(-10px)', opacity: '0' },
            },
            'slide-out-to-right': {
              from: { transform: 'translateX(0px)', opacity: '1' },
              to: { transform: 'translateX(10px)', opacity: '0' },
            },
            // Slide out animations (8px offset)
            'slide-out-to-top-8': {
              from: { transform: 'translateY(8px)', opacity: '1' },
              to: { transform: 'translateY(-10px)', opacity: '0' },
            },
            'slide-out-to-bottom-8': {
              from: { transform: 'translateY(8px)', opacity: '1' },
              to: { transform: 'translateY(10px)', opacity: '0' },
            },
            'slide-out-to-left-8': {
              from: { transform: 'translateX(8px)', opacity: '1' },
              to: { transform: 'translateX(-10px)', opacity: '0' },
            },
            'slide-out-to-right-8': {
              from: { transform: 'translateX(-8px)', opacity: '1' },
              to: { transform: 'translateX(10px)', opacity: '0' },
            },
            'translate-from-right': {
              from: {
                transform: 'translateX(12px)',
              },
              to: {
                transform: 'translateX(0)',
              },
            },
          },
          animation: {
            'content-show': 'content-show 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            'content-hide': 'content-hide 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            'fade-in': 'fade-in 250ms ease-out',
            'fade-out': 'fade-out 250ms ease-in',

            // Slide animations with default 0px offset
            'slide-in-from-top': 'slide-in-from-top 250ms ease-in',
            'slide-in-from-bottom': 'slide-in-from-bottom 250ms ease-in',
            'slide-in-from-left': 'slide-in-from-left 250ms ease-in',
            'slide-in-from-right': 'slide-in-from-right 250ms ease-in',
            'slide-out-to-top': 'slide-out-to-top 250ms ease-in',
            'slide-out-to-bottom': 'slide-out-to-bottom 250ms ease-in',
            'slide-out-to-left': 'slide-out-to-left 250ms ease-in',
            'slide-out-to-right': 'slide-out-to-right 250ms ease-in',

            // Slide animations with 8px offset
            'slide-in-from-top-8': 'slide-in-from-top-8 250ms ease-in',
            'slide-in-from-bottom-8': 'slide-in-from-bottom-8 250ms ease-in',
            'slide-in-from-left-8': 'slide-in-from-left-8 250ms ease-in',
            'slide-in-from-right-8': 'slide-in-from-right-8 250ms ease-in',
            'slide-out-to-top-8': 'slide-out-to-top-8 250ms ease-in',
            'slide-out-to-bottom-8': 'slide-out-to-bottom-8 250ms ease-in',
            'slide-out-to-left-8': 'slide-out-to-left-8 250ms ease-in',
            'slide-out-to-right-8': 'slide-out-to-right-8 250ms ease-in',

            'translate-from-right':
              'translate-from-right 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
    },
  );
}
