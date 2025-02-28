"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Marquee: () => Marquee
});
module.exports = __toCommonJS(src_exports);
var import_react = require("react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/styles.ts
var styles = {
  keyframes: `
    @keyframes marquee-left {
      from { transform: translateX(0); }
      to { transform: translateX(calc(-100% - var(--gap))); }
    }
    @keyframes marquee-up {
      from { transform: translateY(0); }
      to { transform: translateY(calc(-100% - var(--gap))); }
    }
  `,
  baseStyles: `
    .marquee-container {
      display: flex;
      gap: 1rem;
      overflow: hidden;
      contain: content;
      transform: translateZ(0);
      backface-visibility: hidden;
    }
    .marquee-content {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      --gap: 1rem;
      flex-shrink: 0;
      will-change: transform;
    }
    .marquee-left {
      animation: marquee-left var(--duration, 40s) linear infinite;
    }
    .marquee-up {
      animation: marquee-up var(--duration, 40s) linear infinite;
    }
    .marquee-pause:hover .marquee-content {
      animation-play-state: paused;
    }
    .marquee-reverse .marquee-content {
      animation-direction: reverse;
    }
  `
};
function injectStyles() {
  if (typeof document === "undefined")
    return;
  const styleId = "react-beautiful-marquee-styles";
  if (document.getElementById(styleId))
    return;
  const styleElement = document.createElement("style");
  styleElement.id = styleId;
  styleElement.textContent = `${styles.keyframes}
${styles.baseStyles}`;
  document.head.appendChild(styleElement);
}

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Marquee({
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
}) {
  (0, import_react.useEffect)(() => {
    injectStyles();
  }, []);
  const duration = {
    slow: "30s",
    normal: "20s",
    fast: "10s"
  }[speed];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: cn(
        "marquee-container",
        direction === "left" ? "flex-row" : "flex-col",
        reverse && "marquee-reverse",
        pauseOnHover && "marquee-pause",
        className
      ),
      role: "region",
      "aria-roledescription": "marquee",
      "aria-label": ariaLabel || "Scrolling content",
      "aria-live": "polite",
      style: {
        "--duration": duration,
        maskImage: fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0,
        WebkitMaskImage: fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0
      },
      ...rest,
      children: Array(numberOfCopies).fill(0).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          className: cn(
            "marquee-content",
            direction === "left" ? "marquee-left flex-row" : "marquee-up flex-col",
            innerClassName
          ),
          children
        },
        i
      ))
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Marquee
});
//# sourceMappingURL=index.js.map