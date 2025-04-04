import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-plain-enterprise-70 text-plain-constant-white disabled:opacity-50 active:bg-plain-enterprise-50",
        destructive: "bg-plain-error-40 text-plain-constant-white active:bg-plain-error-30",
        outline:
          "text-plain-neutral-100 border border-op-default-30 hover:bg-plain-neutral-20 hover:text-plain-neutral-100",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-op-default-5",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  dataTest: string;
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, dataTest, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-test={dataTest}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };