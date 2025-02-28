export const styles = {
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

export function injectStyles() {
  if (typeof document === 'undefined') return;
  
  const styleId = 'react-beautiful-marquee-styles';
  if (document.getElementById(styleId)) return;

  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = `${styles.keyframes}\n${styles.baseStyles}`;
  document.head.appendChild(styleElement);
}