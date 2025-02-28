import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes, ReactNode } from 'react';

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
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
declare function Marquee({ children, direction, pauseOnHover, reverse, fade, className, innerClassName, numberOfCopies, speed, ariaLabel, ...rest }: MarqueeProps): react_jsx_runtime.JSX.Element;

export { Marquee, type MarqueeProps };
