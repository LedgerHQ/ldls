import { cn } from '@ledgerhq/ldls-utils-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
  title: 'Foundations/Animations',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Interactive showcase of all available animations in the Ledger Design System.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Animation Demo Component
const AnimationDemo = ({
  animationClass,
  title,
  description,
}: {
  animationClass: string;
  title: string;
  description: string;
}) => {
  // Check if this is an "out" animation
  const isOutAnimation = animationClass.includes('out');

  // For out animations, start visible; for in animations, start hidden
  const [isVisible, setIsVisible] = useState(isOutAnimation);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTrigger = () => {
    if (isOutAnimation) {
      // For out animations, animate out and then hide
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300); // Duration of the animation
    } else {
      // For in animations, start hidden and animate in
      setIsVisible(false);
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 50);
    }
  };

  return (
    <div className='flex flex-col items-center gap-16 rounded-sm p-24'>
      <div className='text-center'>
        <h3 className='mb-8 heading-3'>{title}</h3>
        <p className='mb-16 text-muted body-2'>{description}</p>
        <code className='rounded-sm bg-muted px-8 py-4 body-3-semi-bold'>
          {animationClass}
        </code>
      </div>

      <button
        className='relative h-80 w-144 overflow-hidden rounded-sm border border-muted-subtle'
        onClick={handleTrigger}
      >
        {/* Placeholder for in animations when not visible */}
        {!isOutAnimation && !isVisible && (
          <div className='absolute inset-0 flex items-center justify-center text-muted body-2'>
            Click me
          </div>
        )}

        {/* Animated element */}
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-accent text-on-accent body-2-semi-bold',
            // For out animations, show by default, hide when animating out
            isOutAnimation
              ? isVisible && !isAnimating
                ? ''
                : isAnimating
                  ? animationClass
                  : 'hidden'
              : isVisible
                ? animationClass
                : 'hidden',
          )}
        >
          {isOutAnimation ? 'Click me' : 'Animated Element'}
        </div>
      </button>
    </div>
  );
};

// Fade Animations
export const FadeIn: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-fade-in'
      title='Fade In'
      description='Simple opacity transition from transparent to visible'
    />
  ),
};

export const FadeOut: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-fade-out'
      title='Fade Out'
      description='Simple opacity transition from visible to transparent'
    />
  ),
};

// Slide In Animations (0px offset)
export const SlideInFromTop: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-in-from-top'
      title='Slide In From Top'
      description='Element slides in from above with fade-in effect'
    />
  ),
};

export const SlideInFromBottom: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-in-from-bottom'
      title='Slide In From Bottom'
      description='Element slides in from below with fade-in effect'
    />
  ),
};

export const SlideInFromLeft: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-in-from-left'
      title='Slide In From Left'
      description='Element slides in from the left with fade-in effect'
    />
  ),
};

export const SlideInFromRight: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-in-from-right'
      title='Slide In From Right'
      description='Element slides in from the right with fade-in effect'
    />
  ),
};

// Slide Out Animations (0px offset)
export const SlideOutToTop: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-out-to-top'
      title='Slide Out To Top'
      description='Element slides out upward with fade-out effect'
    />
  ),
};

export const SlideOutToBottom: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-out-to-bottom'
      title='Slide Out To Bottom'
      description='Element slides out downward with fade-out effect'
    />
  ),
};

export const SlideOutToLeft: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-out-to-left'
      title='Slide Out To Left'
      description='Element slides out to the left with fade-out effect'
    />
  ),
};

export const SlideOutToRight: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-slide-out-to-right'
      title='Slide Out To Right'
      description='Element slides out to the right with fade-out effect'
    />
  ),
};

// Translate Animations
export const TranslateFromRight: Story = {
  render: () => (
    <AnimationDemo
      animationClass='animate-translate-from-right'
      title='Translate From Right'
      description='Element moves from right to final position (no opacity change)'
    />
  ),
};

// Default Tailwind Animations
export const DefaultTailwindAnimations: Story = {
  render: () => (
    <div className='grid grid-cols-1 gap-24 p-24 md:grid-cols-2 lg:grid-cols-4'>
      {/* Spin Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='mb-8 heading-3'>Spin</h3>
          <code className='rounded-sm bg-muted px-8 py-4 body-3-semi-bold'>
            animate-spin
          </code>
        </div>
        <div className='relative size-24'>
          <div className='absolute inset-0 animate-spin bg-accent'></div>
        </div>
      </div>

      {/* Ping Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='mb-8 heading-3'>Ping</h3>
          <code className='rounded-sm bg-muted px-8 py-4 body-3-semi-bold'>
            animate-ping
          </code>
        </div>
        <div className='relative size-24'>
          <div className='absolute inset-0 animate-ping bg-accent'></div>
          <div className='relative size-full bg-accent'></div>
        </div>
      </div>

      {/* Pulse Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='mb-8 heading-3'>Pulse</h3>
          <code className='rounded-sm bg-muted px-8 py-4 body-3-semi-bold'>
            animate-pulse
          </code>
        </div>
        <div className='relative size-24'>
          <div className='absolute inset-0 animate-pulse bg-accent'></div>
        </div>
      </div>

      {/* Bounce Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='mb-8 heading-3'>Bounce</h3>
          <code className='rounded-sm bg-muted px-8 py-4 body-3-semi-bold'>
            animate-bounce
          </code>
        </div>
        <div className='relative size-24'>
          <div className='absolute inset-0 animate-bounce bg-accent'></div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// All Animations Grid
export const AllAnimations: Story = {
  render: () => (
    <div className='space-y-48 p-24'>
      {/* Fade Animations Section */}
      <div>
        <h2 className='mb-24 text-center heading-2'>Fade Animations</h2>
        <div className='grid min-w-max grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <AnimationDemo
            animationClass='animate-fade-in'
            title='Fade In'
            description='Opacity transition'
          />
          <AnimationDemo
            animationClass='animate-fade-out'
            title='Fade Out'
            description='Opacity transition'
          />
        </div>
      </div>

      {/* Slide In Animations Section */}
      <div>
        <h2 className='mb-24 text-center heading-2'>Slide In Animations</h2>
        <div className='grid min-w-max grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <AnimationDemo
            animationClass='animate-slide-in-from-top'
            title='Slide In From Top'
            description='From above with fade'
          />
          <AnimationDemo
            animationClass='animate-slide-in-from-bottom'
            title='Slide In From Bottom'
            description='From below with fade'
          />
          <AnimationDemo
            animationClass='animate-slide-in-from-left'
            title='Slide In From Left'
            description='From left with fade'
          />
          <AnimationDemo
            animationClass='animate-slide-in-from-right'
            title='Slide In From Right'
            description='From right with fade'
          />
        </div>
      </div>

      {/* Slide Out Animations Section */}
      <div>
        <h2 className='mb-24 text-center heading-2'>Slide Out Animations</h2>
        <div className='grid min-w-max grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <AnimationDemo
            animationClass='animate-slide-out-to-top'
            title='Slide Out To Top'
            description='To above with fade'
          />
          <AnimationDemo
            animationClass='animate-slide-out-to-bottom'
            title='Slide Out To Bottom'
            description='To below with fade'
          />
          <AnimationDemo
            animationClass='animate-slide-out-to-left'
            title='Slide Out To Left'
            description='To left with fade'
          />
          <AnimationDemo
            animationClass='animate-slide-out-to-right'
            title='Slide Out To Right'
            description='To right with fade'
          />
        </div>
      </div>

      {/* Translate Animations Section */}
      <div>
        <h2 className='mb-24 text-center heading-2'>Translate Animations</h2>
        <div className='grid min-w-max grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <AnimationDemo
            animationClass='animate-translate-from-right'
            title='Translate From Right'
            description='Movement only, no fade'
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
