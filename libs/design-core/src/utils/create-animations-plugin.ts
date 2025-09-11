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
          },
          animation: {
            overlayShow: 'overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            overlayHide: 'overlayHide 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            contentShow: 'contentShow 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            contentHide: 'contentHide 250ms cubic-bezier(0.16, 1, 0.3, 1)',
          },
        },
      },
    },
  );
}
