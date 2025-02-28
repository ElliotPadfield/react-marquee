import { HTMLAttributes, ReactNode, useEffect } from "react";
import { cn } from "./lib/utils";
import { injectStyles } from "./styles";

export type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The content to be displayed inside the marquee
   */
  children: ReactNode;
  
  /**
   * The direction of the marquee animation
   * @default "left"
   */
  direction?: "left" | "up";
  
  /**
   * Whether to pause the animation when hovering over the marquee
   * @default false
   */
  pauseOnHover?: boolean;
  
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  
  /**
   * Whether to apply a fade effect at the edges of the marquee
   * @default false
   */
  fade?: boolean;
  
  /**
   * Additional CSS class name for the inner content container
   */
  innerClassName?: string;
  
  /**
   * Number of copies of the children to render
   * @default 2
   */
  numberOfCopies?: number;
  
  /**
   * Animation speed preset
   * - "slow": 30 seconds per cycle
   * - "normal": 20 seconds per cycle
   * - "fast": 10 seconds per cycle
   * 
   * Can be overridden with CSS variable: `--duration`
   * @default "normal"
   */
  speed?: "slow" | "normal" | "fast";
  
  /**
   * Optional label for the marquee for accessibility
   * @default "Scrolling content"
   */
  ariaLabel?: string;
};

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
  numberOfCopies = 2,
  speed = "normal",
  ariaLabel,
  ...rest
}: MarqueeProps) {
  useEffect(() => {
    injectStyles();
  }, []);

  const duration = {
    slow: "30s",
    normal: "20s",
    fast: "10s",
  }[speed];

  return (
    <div
      className={cn(
        "marquee-container",
        direction === "left" ? "flex-row" : "flex-col",
        reverse && "marquee-reverse",
        pauseOnHover && "marquee-pause",
        className
      )}
      role="region"
      aria-roledescription="marquee"
      aria-label={ariaLabel || "Scrolling content"}
      aria-live="polite"
      style={{
        "--duration": duration,
        maskImage: fade
          ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      } as React.CSSProperties}
      {...rest}
    >
      {Array(numberOfCopies)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "marquee-content",
              direction === "left" ? "marquee-left flex-row" : "marquee-up flex-col",
              innerClassName
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
