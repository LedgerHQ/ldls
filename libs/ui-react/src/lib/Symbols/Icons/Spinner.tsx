import createIcon from "../../Components/Icon/createIcon";

/**
 * Spinner icon component.
 *
 * This icon component is automatically generated from SVG files and uses the createIcon utility
 * to create a consistent icon interface. It supports all standard SVG props and additional
 * size variants defined in the Icon component.
 *
 * @component
 * @param {16 | 20 | 24 | 40 | 48 | 56} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - Additional CSS classes to apply to the icon.
 * @param {React.SVGProps<SVGSVGElement>} [...props] - All standard SVG element props.
 *
 * @example
 * // Basic usage with default size (24px)
 * import { Spinner } from '@ldls/ui-react/symbols';
 *
 * <Spinner />
 *
 * @example
 * // With custom size and className
 * <Spinner size={40} className="text-warning" />
 *
 * @example
 * // Used within a Button component
 * import { Button } from '@ldls/ui-react';
 *
 * <Button icon={Spinner} size="md">
 *   Click me
 * </Button>
 */
export const Spinner = createIcon(
  "Spinner",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <g clipPath="url(#prefix__a)" data-figma-skip-parse="true">
      <foreignObject
        width={2464.29}
        height={2464.29}
        x={-1232.14}
        y={-1232.14}
        transform="rotate(90.184 .013 7.987)scale(.0056)"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            background:
              "conic-gradient(from 90deg,transparent 0deg,#000 360deg)",
            height: "100%",
            width: "100%",
            opacity: 1,
          }}
        />
      </foreignObject>
    </g>
    <path
      d="M8.844 12.878a.65.65 0 0 0 .222 1.28zm3.549-1.405.51.403zM8.272 2.407l.032-.65zM3.291 11.03l.547-.352zm3.05 2.995a.65.65 0 0 0 .346-1.253zm2.614-.508.11.64a6.25 6.25 0 0 0 3.838-2.281l-.51-.404-.51-.403a4.95 4.95 0 0 1-3.04 1.807zm3.438-2.045.51.403a6.25 6.25 0 0 0 1.335-4.26l-.649.04-.648.04a4.95 4.95 0 0 1-1.058 3.374zm1.196-3.816.65-.04a6.25 6.25 0 0 0-1.848-4.065l-.457.463-.456.463a4.95 4.95 0 0 1 1.463 3.218zm-1.655-3.642.457-.463a6.25 6.25 0 0 0-4.087-1.795l-.032.65-.032.649a4.95 4.95 0 0 1 3.238 1.422zM8.272 2.407l.032-.65a6.25 6.25 0 0 0-4.243 1.39l.41.505.41.505a4.95 4.95 0 0 1 3.36-1.101zM4.471 3.652l-.41-.505a6.25 6.25 0 0 0-2.233 3.866l.642.103.642.102A4.95 4.95 0 0 1 4.88 4.157zm-2 3.464-.643-.103a6.25 6.25 0 0 0 .916 4.37l.547-.352.547-.352a4.95 4.95 0 0 1-.726-3.46zm.82 3.915-.547.352a6.25 6.25 0 0 0 3.598 2.643l.172-.627.173-.626a4.95 4.95 0 0 1-2.85-2.094z"
      data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},"position":0.0},{"color":{"r":0.0,"g":0.0,"b":0.0,"a":1.0},"position":1.0}],"stopsVar":[{"color":{"r":0.0,"g":0.0,"b":0.0,"a":0.0},"position":0.0},{"color":{"r":0.0,"g":0.0,"b":0.0,"a":1.0},"position":1.0}],"transform":{"m00":-0.035937074571847916,"m01":-11.199942588806152,"m02":13.617911338806152,"m10":11.199942588806152,"m11":-0.035937074571847916,"m12":2.4179866313934326},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
    />
    <defs>
      <clipPath id="prefix__a">
        <path d="M8.844 12.878a.65.65 0 0 0 .222 1.28zm3.549-1.405.51.403zM8.272 2.407l.032-.65zM3.291 11.03l.547-.352zm3.05 2.995a.65.65 0 0 0 .346-1.253zm2.614-.508.11.64a6.25 6.25 0 0 0 3.838-2.281l-.51-.404-.51-.403a4.95 4.95 0 0 1-3.04 1.807zm3.438-2.045.51.403a6.25 6.25 0 0 0 1.335-4.26l-.649.04-.648.04a4.95 4.95 0 0 1-1.058 3.374zm1.196-3.816.65-.04a6.25 6.25 0 0 0-1.848-4.065l-.457.463-.456.463a4.95 4.95 0 0 1 1.463 3.218zm-1.655-3.642.457-.463a6.25 6.25 0 0 0-4.087-1.795l-.032.65-.032.649a4.95 4.95 0 0 1 3.238 1.422zM8.272 2.407l.032-.65a6.25 6.25 0 0 0-4.243 1.39l.41.505.41.505a4.95 4.95 0 0 1 3.36-1.101zM4.471 3.652l-.41-.505a6.25 6.25 0 0 0-2.233 3.866l.642.103.642.102A4.95 4.95 0 0 1 4.88 4.157zm-2 3.464-.643-.103a6.25 6.25 0 0 0 .916 4.37l.547-.352.547-.352a4.95 4.95 0 0 1-.726-3.46zm.82 3.915-.547.352a6.25 6.25 0 0 0 3.598 2.643l.172-.627.173-.626a4.95 4.95 0 0 1-2.85-2.094z" />
      </clipPath>
    </defs>
  </svg>
);
