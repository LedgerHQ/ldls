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
  const isOutAnimation =
    animationClass.includes('out') || animationClass.includes('hide');

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
        <h3 className='heading-3 mb-8'>{title}</h3>
        <p className='text-muted body-2 mb-16'>{description}</p>
        <code className='bg-muted body-3-semi-bold rounded-sm px-8 py-4'>
          {animationClass}
        </code>
      </div>

      <button
        className='w-144 border-muted-subtle relative h-80 overflow-hidden rounded-sm border'
        onClick={handleTrigger}
      >
        {/* Placeholder for in animations when not visible */}
        {!isOutAnimation && !isVisible && (
          <div className='text-muted body-2 absolute inset-0 flex items-center justify-center'>
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

// Default Tailwind Animations
export const DefaultTailwindAnimations: Story = {
  render: () => (
    <div className='grid grid-cols-1 gap-24 p-24 md:grid-cols-2 lg:grid-cols-4'>
      {/* Spin Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='heading-3 mb-8'>Spin</h3>
          <code className='bg-muted body-3-semi-bold rounded-sm px-8 py-4'>
            animate-spin
          </code>
        </div>
        <div className='relative size-24'>
          <div className='bg-accent absolute inset-0 animate-spin'></div>
        </div>
      </div>

      {/* Ping Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='heading-3 mb-8'>Ping</h3>
          <code className='bg-muted body-3-semi-bold rounded-sm px-8 py-4'>
            animate-ping
          </code>
        </div>
        <div className='relative size-24'>
          <div className='bg-accent absolute inset-0 animate-ping'></div>
          <div className='bg-accent relative size-full'></div>
        </div>
      </div>

      {/* Pulse Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='heading-3 mb-8'>Pulse</h3>
          <code className='bg-muted body-3-semi-bold rounded-sm px-8 py-4'>
            animate-pulse
          </code>
        </div>
        <div className='relative size-24'>
          <div className='bg-accent absolute inset-0 animate-pulse'></div>
        </div>
      </div>

      {/* Bounce Animation */}
      <div className='flex flex-col items-center gap-16 p-24'>
        <div className='text-center'>
          <h3 className='heading-3 mb-8'>Bounce</h3>
          <code className='bg-muted body-3-semi-bold rounded-sm px-8 py-4'>
            animate-bounce
          </code>
        </div>
        <div className='relative size-24'>
          <div className='bg-accent absolute inset-0 animate-bounce'></div>
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
        <h2 className='heading-2 mb-24 text-center'>Fade Animations</h2>
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

      {/* Content Animations Section */}
      <div>
        <h2 className='heading-2 mb-24 text-center'>Content Animations</h2>
        <div className='grid min-w-max grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <AnimationDemo
            animationClass='animate-content-show'
            title='Content Show'
            description='Content reveal animation'
          />
          <AnimationDemo
            animationClass='animate-content-hide'
            title='Content Hide'
            description='Content hide animation'
          />
        </div>
      </div>

      {/* Slide In Animations Section */}
      <div>
        <h2 className='heading-2 mb-24 text-center'>Slide In Animations</h2>
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
        <h2 className='heading-2 mb-24 text-center'>Slide Out Animations</h2>
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
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
