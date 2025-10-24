import plugin from 'tailwindcss/plugin.js';

export function createAnimationsPlugin() {
  return plugin(
    () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    {
      theme: {
        extend: {
          keyframes: {
            'fade-in': {
              from: { opacity: '0' },
              to: { opacity: '1' },
            },
            'fade-out': {
              from: { opacity: '1' },
              to: { opacity: '0' },
            },
            'slide-in-from-top': {
              from: {
                transform: 'translateY(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
              to: { transform: 'translateY(0px)', opacity: '1' },
            },
            'slide-in-from-bottom': {
              from: {
                transform: 'translateY(var(--spacing-10))',
                opacity: '0',
              },
              to: { transform: 'translateY(0px)', opacity: '1' },
            },
            'slide-in-from-left': {
              from: {
                transform: 'translateX(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
              to: { transform: 'translateX(0px)', opacity: '1' },
            },
            'slide-in-from-right': {
              from: {
                transform: 'translateX(var(--spacing-10))',
                opacity: '0',
              },
              to: { transform: 'translateX(0px)', opacity: '1' },
            },
            // Slide in animations (8px offset)
            'slide-in-from-top-8': {
              from: {
                transform: 'translateY(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
              to: { transform: 'translateY(var(--spacing-8))', opacity: '1' },
            },
            'slide-in-from-bottom-8': {
              from: {
                transform: 'translateY(var(--spacing-10))',
                opacity: '0',
              },
              to: {
                transform: 'translateY(calc(var(--spacing-8) * -1))',
                opacity: '1',
              },
            },
            'slide-in-from-left-8': {
              from: {
                transform: 'translateX(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
              to: {
                transform: 'translateX(calc(var(--spacing-8) * -1))',
                opacity: '1',
              },
            },
            'slide-in-from-right-8': {
              from: {
                transform: 'translateX(var(--spacing-10))',
                opacity: '0',
              },
              to: {
                transform: 'translateX(calc(var(--spacing-8) * -1))',
                opacity: '1',
              },
            },
            'slide-out-to-top': {
              from: { transform: 'translateY(0px)', opacity: '1' },
              to: {
                transform: 'translateY(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
            },
            'slide-out-to-bottom': {
              from: { transform: 'translateY(0px)', opacity: '1' },
              to: { transform: 'translateY(var(--spacing-10))', opacity: '0' },
            },
            'slide-out-to-left': {
              from: { transform: 'translateX(0px)', opacity: '1' },
              to: {
                transform: 'translateX(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
            },
            'slide-out-to-right': {
              from: { transform: 'translateX(0px)', opacity: '1' },
              to: { transform: 'translateX(var(--spacing-10))', opacity: '0' },
            },
            // Slide out animations (8px offset)
            'slide-out-to-top-8': {
              from: { transform: 'translateY(var(--spacing-8))', opacity: '1' },
              to: {
                transform: 'translateY(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
            },
            'slide-out-to-bottom-8': {
              from: {
                transform: 'translateY(calc(var(--spacing-8) * -1))',
                opacity: '1',
              },
              to: { transform: 'translateY(var(--spacing-10))', opacity: '0' },
            },
            'slide-out-to-left-8': {
              from: {
                transform: 'translateX(calc(var(--spacing-8) * -1))',
                opacity: '1',
              },
              to: {
                transform: 'translateX(calc(var(--spacing-10) * -1))',
                opacity: '0',
              },
            },
            'slide-out-to-right-8': {
              from: { transform: 'translateX(var(--spacing-8))', opacity: '1' },
              to: { transform: 'translateX(var(--spacing-10))', opacity: '0' },
            },
            'translate-from-right': {
              from: {
                transform: 'translateX(var(--spacing-10))',
              },
              to: {
                transform: 'translateX(0)',
              },
            },
          },
          animation: {
            'fade-in': 'fade-in 300ms ease-in-out',
            'fade-out': 'fade-out 300ms ease-in',

            // Slide animations with default 0px offset
            'slide-in-from-top': 'slide-in-from-top 300ms ease-in',
            'slide-in-from-bottom': 'slide-in-from-bottom 300ms ease-in',
            'slide-in-from-left': 'slide-in-from-left 300ms ease-in',
            'slide-in-from-right': 'slide-in-from-right 300ms ease-in',
            'slide-out-to-top': 'slide-out-to-top 300ms ease-in',
            'slide-out-to-bottom': 'slide-out-to-bottom 300ms ease-in',
            'slide-out-to-left': 'slide-out-to-left 300ms ease-in',
            'slide-out-to-right': 'slide-out-to-right 300ms ease-in',

            // Slide animations with 8px offset
            'slide-in-from-top-8': 'slide-in-from-top-8 300ms ease-in',
            'slide-in-from-bottom-8': 'slide-in-from-bottom-8 300ms ease-in',
            'slide-in-from-left-8': 'slide-in-from-left-8 300ms ease-in',
            'slide-in-from-right-8': 'slide-in-from-right-8 300ms ease-in',
            'slide-out-to-top-8': 'slide-out-to-top-8 300ms ease-in',
            'slide-out-to-bottom-8': 'slide-out-to-bottom-8 300ms ease-in',
            'slide-out-to-left-8': 'slide-out-to-left-8 300ms ease-in',
            'slide-out-to-right-8': 'slide-out-to-right-8 300ms ease-in',

            'translate-from-right':
              'translate-from-right 300ms var(--easing-ease-in-out)',
          },
        },
      },
    },
  );
}
