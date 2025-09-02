import { cva } from "class-variance-authority";

const buttonVariants = cva(
  'inline-flex  items-center justify-center rounded-full transition-colors body-1-semi-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled',
  {
    variants: {
      iconType: {
        filled: 'bg-interactive text-on-interactive hover:bg-interactive-hover active:bg-interactive-pressed',
        stroked: 'bg-muted text-base hover:bg-muted-hover active:bg-muted-pressed',
      },
    },
  },
);

export const IconButton = () => {
  return <button className={cn(className, 'rounded-full')} {...props}>
    <IconComponent size={24} />
  </button>
  );
};
