<div align="center">

# Marquee <br> 🌬️

> A beautiful marquee component for React 18/19.

![NPM Version](https://img.shields.io/npm/v/react-beautiful-marquee?logo=npm)

</div>

## Advantages over alternatives

- ✅ Built for React 18/19
- ✅ Supports (but doesn't require) Tailwind CSS - Won't affect any of your other CSS
- ✅ Includes ARIA attributes
- ✅ Built for performance

## Demo

[Web Demo](<(https://beautiful-react-marquee-liard.vercel.app/)>)

## Installation

```bash
npm install react-beautiful-marquee
```

## Import

```ts
import { Marquee } from 'react-beautiful-marquee';
import 'react-beautiful-marquee/dist/index.css';
```

or you can skip npm install, and just copy and paste the source code into your component ala shadcn ui (don't forget to also copy tailwind config if you do this).

## Usage

This library has very few props and self explanatory, you can get it running in no time. See web example for more details.

```ts
<Marquee
  fade={true}
  direction='left'
  reverse={false}
  pauseOnHover={false}
  speed='normal' // 'slow' (30s), 'normal' (20s), or 'fast' (10s)
  className='' // pass class to override gap or duration (e.g. [--duration:5s])
  innerClassName='' // pass class to override gap
>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
  <div>Content 4</div>
</Marquee>
```

This lib made specifically for tailwind users, however you can use normal css class too, to override the gap by passing class.

## License

This project is a fork of marquee by [@devnomic](https://github.com/devnomic), licensed under [MIT](/LICENSE).
Modifications and enhancements © 2025 [Elliot Padfield](https://github.com/elliotpadfield), also under the [MIT License](/LICENSE).
