import plugin from 'tailwindcss/plugin.js';

export function createAnimationsPlugin() {
  return plugin(
    () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    {
      theme: {
        extend: {
          keyframes: {
            contentShow: {
              from: {
                opacity: '0',
                transform: 'translate(-50%, -48%) scale(0.96)',
              },
              to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
            },
            slideInFromRight: {
              from: { transform: 'translateX(10px)', opacity: '0' },
              to: { transform: 'translateX(0)', opacity: '1' },
            },
            slideInFromLeft: {
              from: { transform: 'translateX(-10px)', opacity: '0' },
              to: { transform: 'translateX(0)', opacity: '1' },
            },
            slideInFromTop: {
              from: { transform: 'translateY(-10px)', opacity: '0' },
              to: { transform: 'translateY(0)', opacity: '1' },
            },
            slideInFromBottom: {
              from: { transform: 'translateY(10px)', opacity: '0' },
              to: { transform: 'translateY(0)', opacity: '1' },
            },
            slideOutToRight: {
              from: { transform: 'translateX(0)', opacity: '1' },
              to: { transform: 'translateX(10px)', opacity: '0' },
            },
            slideOutToLeft: {
              from: { transform: 'translateX(0)', opacity: '1' },
              to: { transform: 'translateX(-10px)', opacity: '0' },
            },
            slideOutToTop: {
              from: { transform: 'translateY(0)', opacity: '1' },
              to: { transform: 'translateY(-10px)', opacity: '0' },
            },
            slideOutToBottom: {
              from: { transform: 'translateY(0)', opacity: '1' },
              to: { transform: 'translateY(10px)', opacity: '0' },
            },
            contentHide: {
              from: {
                opacity: '1',
                transform: 'translate(-50%, -50%) scale(1)',
              },
              to: {
                opacity: '0',
                transform: 'translate(-50%, -48%) scale(0.96)',
              },
            },
            'fade-in-0': {
              from: { opacity: '0' },
              to: { opacity: '1' },
            },
            'fade-out-0': {
              from: { opacity: '1' },
              to: { opacity: '0' },
            },
            'slide-in-from-top': {
              from: { transform: 'translateY(-8px)', opacity: '0' },
              to: { transform: 'translateY(8px)', opacity: '1' },
            },
            'slide-in-from-bottom': {
              from: { transform: 'translateY(8px)', opacity: '0' },
              to: { transform: 'translateY(-8px)', opacity: '1' },
            },
          },
          animation: {
            contentShow: 'contentShow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            contentHide: 'contentHide 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            slideInFromRight: 'slideInFromRight 250ms ease-in',
            slideInFromLeft: 'slideInFromLeft 250ms ease-in',
            slideInFromTop: 'slideInFromTop 250ms ease-in',
            slideInFromBottom: 'slideInFromBottom 250ms ease-in',
            slideOutToRight: 'slideOutToRight 250ms ease-in',
            slideOutToLeft: 'slideOutToLeft 250ms ease-in',
            slideOutToTop: 'slideOutToTop 250ms ease-in',
            slideOutToBottom: 'slideOutToBottom 250ms ease-in',
            'fade-in': 'fade-in-0 250ms ease-out',
            'fade-out': 'fade-out-0 250ms ease-in',
            'slide-in-from-top': 'slide-in-from-top 250ms ease-out',
            'slide-in-from-bottom': 'slide-in-from-bottom 250ms ease-out',
          },
        },
      },
    },
  );
}
