import { cn } from '@ledgerhq/ldls-utils-shared';

const itemClassName = cn(
  'rounded-full bg-muted px-16 py-8 text-base body-2-semi-bold',
  'hover:bg-muted-hover active:bg-muted-pressed disabled:bg-disabled disabled:text-disabled focus-visible:outline-2 focus-visible:outline-focus',
);

export interface SuggestionKeyboardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SuggestionKeyboard = ({
  className,
  children,
  ...props
}: SuggestionKeyboardProps) => {
  return (
    <div
      className={cn('align-center flex justify-between px-24', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export interface SuggestionKeyboardItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SuggestionKeyboardItem = ({
  className,
  children,
  ...props
}: SuggestionKeyboardItemProps) => {
  return (
    <button {...props} className={cn(className, itemClassName)}>
      {children}
    </button>
  );
};
