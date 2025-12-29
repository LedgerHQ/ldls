export type IconSize = 12 | 16 | 20 | 24 | 40 | 48 | 56;

export type IconProps = {
  size?: IconSize;
  className?: string;
  children: React.ReactNode;
} & React.SVGProps<SVGSVGElement>;
