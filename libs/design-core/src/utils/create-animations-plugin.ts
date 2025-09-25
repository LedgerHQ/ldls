import plugin from 'tailwindcss/plugin.js';

export function createAnimationsPlugin() {
  return plugin(
    () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    {
      theme: {
        extend: {
          keyframes: {
            overlayShow: {
              from: { opacity: '0' },
              to: { opacity: '1' },
            },
            overlayHide: {
              from: { opacity: '1' },
              to: { opacity: '0' },
            },
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
            focusGlow: {
              from: {
                transform: 'scale(1)',
              },
              '50%': {
                transform: 'scale(1.02)',
              },
              to: {
                transform: 'scale(1)',
              },
            },
          },
          animation: {
            overlayShow: 'overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            overlayHide: 'overlayHide 250ms cubic-bezier(0.16, 1, 0.3, 1)',
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
            focusGlow: 'focusGlow 250ms ease-out',
          },
        },
      },
    },
  );
}
