
export const codeImport = `
import { Marquee } from "react-beautiful-marquee";
// if you copy ala shadcn, no need import css.
import "react-beautiful-marquee/dist/index.css";
`;

export const codeExample1 = `
// Use fade props
<Marquee fade={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`

export const codeExample2 = `
// Use reverse props
<Marquee fade={true} reverse={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`

export const codeExample3 = `
// Use pauseOnHover props
<Marquee fade={true} pauseOnHover={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`

export const codeExample4 = `
// Use direction props
<Marquee fade={true} direction="up">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`

export const codeExample5 = `
// Use css vars for gap and duration
// Default is 1 rem and 40s
<Marquee className="gap-[3rem] [--duration:5s]" innerClassName="gap-[3rem] [--gap:3rem]" fade={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`

export const codeExample6 = `
// Respect user accessibility settings
<Marquee className="motion-reduce:overflow-auto" 
innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`

export const codeExample7 = `
// Use speed preset props
// 'slow' (30s), 'normal' (20s), or 'fast' (10s)
// You can override the duration using the --duration CSS variable
<Marquee fade={true} speed="fast" className="[--duration:15s]">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
`

export const codeExample8 = `
// Compare different speed presets and custom duration
// Fast speed (10s)
<Marquee fade={true} speed="fast">
  <div>Fast Speed (10s)</div>
</Marquee>

// Custom duration (15s)
<Marquee fade={true} speed="fast" className="[--duration:15s]">
  <div>Custom Speed (15s)</div>
</Marquee>

// Normal speed (20s) - default
<Marquee fade={true} speed="normal">
  <div>Normal Speed (20s)</div>
</Marquee>

// Slow speed (30s)
<Marquee fade={true} speed="slow">
  <div>Slow Speed (30s)</div>
</Marquee>
`