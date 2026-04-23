import { useEffect, useRef } from 'react';

/**
 * GitHub-style white cat cursor follower.
 * Normal system cursor stays visible. A pixel-art white cat chases it.
 * The cat faces toward the cursor, sits when idle, and runs when moving fast.
 */

// SVG cat frames — sitting, walking right, walking left
const CAT_SIT = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <!-- ears -->
  <polygon points="8,6 10,2 12,6" fill="#ffffff"/>
  <polygon points="20,6 22,2 24,6" fill="#ffffff"/>
  <!-- ear inner -->
  <polygon points="9,5 10,3 11,5" fill="#a855f7"/>
  <polygon points="21,5 22,3 23,5" fill="#a855f7"/>
  <!-- head -->
  <ellipse cx="16" cy="10" rx="8" ry="6" fill="#ffffff"/>
  <!-- eyes -->
  <ellipse cx="13" cy="9" rx="1.5" ry="2" fill="#00d9ff"/>
  <ellipse cx="19" cy="9" rx="1.5" ry="2" fill="#00d9ff"/>
  <circle cx="13" cy="9" r="0.7" fill="#0a0a0a"/>
  <circle cx="19" cy="9" r="0.7" fill="#0a0a0a"/>
  <!-- eye shine -->
  <circle cx="13.5" cy="8.3" r="0.5" fill="white" opacity="0.8"/>
  <circle cx="19.5" cy="8.3" r="0.5" fill="white" opacity="0.8"/>
  <!-- nose -->
  <ellipse cx="16" cy="12" rx="1" ry="0.6" fill="#ff69b4"/>
  <!-- mouth -->
  <path d="M14.5 13 Q16 14.5 17.5 13" stroke="#444" fill="none" stroke-width="0.5"/>
  <!-- whiskers -->
  <line x1="6" y1="10" x2="12" y2="11" stroke="#555" stroke-width="0.4"/>
  <line x1="6" y1="12" x2="12" y2="12" stroke="#555" stroke-width="0.4"/>
  <line x1="20" y1="11" x2="26" y2="10" stroke="#555" stroke-width="0.4"/>
  <line x1="20" y1="12" x2="26" y2="12" stroke="#555" stroke-width="0.4"/>
  <!-- body (sitting) -->
  <ellipse cx="16" cy="21" rx="7" ry="6" fill="#ffffff"/>
  <!-- paws -->
  <ellipse cx="12" cy="26" rx="2.5" ry="1.5" fill="#ffffff"/>
  <ellipse cx="20" cy="26" rx="2.5" ry="1.5" fill="#ffffff"/>
  <!-- tail -->
  <path d="M23 20 Q28 16 26 12" stroke="#ffffff" fill="none" stroke-width="3" stroke-linecap="round"/>
  <!-- tail tip glow -->
  <circle cx="26" cy="12" r="2" fill="#a855f7" opacity="0.6"/>
</svg>
`;

const CAT_WALK_R = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32" width="36" height="32">
  <!-- ears -->
  <polygon points="14,4 16,0 18,4" fill="#ffffff"/>
  <polygon points="22,4 24,0 26,4" fill="#ffffff"/>
  <polygon points="15,3 16,1.5 17,3" fill="#a855f7"/>
  <polygon points="23,3 24,1.5 25,3" fill="#a855f7"/>
  <!-- head -->
  <ellipse cx="20" cy="8" rx="7" ry="5.5" fill="#ffffff"/>
  <!-- eyes looking right -->
  <ellipse cx="22" cy="7" rx="1.5" ry="1.8" fill="#00d9ff"/>
  <ellipse cx="26" cy="7" rx="1.5" ry="1.8" fill="#00d9ff"/>
  <circle cx="22.5" cy="7" r="0.7" fill="#0a0a0a"/>
  <circle cx="26.5" cy="7" r="0.7" fill="#0a0a0a"/>
  <circle cx="23" cy="6.4" r="0.4" fill="white" opacity="0.8"/>
  <circle cx="27" cy="6.4" r="0.4" fill="white" opacity="0.8"/>
  <!-- nose -->
  <ellipse cx="24" cy="9.5" rx="0.8" ry="0.5" fill="#ff69b4"/>
  <!-- whiskers -->
  <line x1="26" y1="9" x2="32" y2="8" stroke="#555" stroke-width="0.4"/>
  <line x1="26" y1="10" x2="32" y2="10" stroke="#555" stroke-width="0.4"/>
  <!-- body (elongated for walk) -->
  <ellipse cx="14" cy="16" rx="9" ry="5" fill="#ffffff"/>
  <!-- front legs -->
  <line x1="18" y1="20" x2="20" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <line x1="15" y1="20" x2="13" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <!-- back legs -->
  <line x1="8" y1="19" x2="6" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <line x1="11" y1="19" x2="10" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <!-- paws -->
  <ellipse cx="20" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <ellipse cx="13" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <ellipse cx="6" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <ellipse cx="10" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <!-- tail -->
  <path d="M5 14 Q0 10 2 6" stroke="#ffffff" fill="none" stroke-width="3" stroke-linecap="round"/>
  <circle cx="2" cy="6" r="1.8" fill="#a855f7" opacity="0.6"/>
</svg>
`;

const CAT_WALK_L = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32" width="36" height="32">
  <!-- ears -->
  <polygon points="10,4 12,0 14,4" fill="#ffffff"/>
  <polygon points="18,4 20,0 22,4" fill="#ffffff"/>
  <polygon points="11,3 12,1.5 13,3" fill="#a855f7"/>
  <polygon points="19,3 20,1.5 21,3" fill="#a855f7"/>
  <!-- head -->
  <ellipse cx="16" cy="8" rx="7" ry="5.5" fill="#ffffff"/>
  <!-- eyes looking left -->
  <ellipse cx="10" cy="7" rx="1.5" ry="1.8" fill="#00d9ff"/>
  <ellipse cx="14" cy="7" rx="1.5" ry="1.8" fill="#00d9ff"/>
  <circle cx="9.5" cy="7" r="0.7" fill="#0a0a0a"/>
  <circle cx="13.5" cy="7" r="0.7" fill="#0a0a0a"/>
  <circle cx="9" cy="6.4" r="0.4" fill="white" opacity="0.8"/>
  <circle cx="13" cy="6.4" r="0.4" fill="white" opacity="0.8"/>
  <!-- nose -->
  <ellipse cx="12" cy="9.5" rx="0.8" ry="0.5" fill="#ff69b4"/>
  <!-- whiskers -->
  <line x1="10" y1="9" x2="4" y2="8" stroke="#555" stroke-width="0.4"/>
  <line x1="10" y1="10" x2="4" y2="10" stroke="#555" stroke-width="0.4"/>
  <!-- body -->
  <ellipse cx="22" cy="16" rx="9" ry="5" fill="#ffffff"/>
  <!-- front legs -->
  <line x1="18" y1="20" x2="16" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <line x1="21" y1="20" x2="23" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <!-- back legs -->
  <line x1="28" y1="19" x2="30" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <line x1="25" y1="19" x2="26" y2="27" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <!-- paws -->
  <ellipse cx="16" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <ellipse cx="23" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <ellipse cx="30" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <ellipse cx="26" cy="27.5" rx="1.8" ry="1" fill="#ffffff"/>
  <!-- tail -->
  <path d="M31 14 Q36 10 34 6" stroke="#ffffff" fill="none" stroke-width="3" stroke-linecap="round"/>
  <circle cx="34" cy="6" r="1.8" fill="#a855f7" opacity="0.6"/>
</svg>
`;

const CAT_SLEEP = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 28" width="36" height="28">
  <!-- body curled up -->
  <ellipse cx="18" cy="18" rx="12" ry="7" fill="#ffffff"/>
  <!-- head resting -->
  <ellipse cx="24" cy="14" rx="6" ry="5" fill="#ffffff"/>
  <!-- ears -->
  <polygon points="20,10 22,6 24,10" fill="#ffffff"/>
  <polygon points="26,10 28,6 30,10" fill="#ffffff"/>
  <polygon points="21,9 22,7.5 23,9" fill="#a855f7"/>
  <polygon points="27,9 28,7.5 29,9" fill="#a855f7"/>
  <!-- closed eyes (sleeping lines) -->
  <path d="M21 13 Q23 14.5 25 13" stroke="#00d9ff" fill="none" stroke-width="1" stroke-linecap="round"/>
  <path d="M26 13 Q28 14.5 30 13" stroke="#00d9ff" fill="none" stroke-width="1" stroke-linecap="round"/>
  <!-- nose -->
  <ellipse cx="27" cy="15.5" rx="0.7" ry="0.4" fill="#ff69b4"/>
  <!-- tail wrapped around -->
  <path d="M6 17 Q4 12 8 10 Q12 8 14 11" stroke="#ffffff" fill="none" stroke-width="3" stroke-linecap="round"/>
  <circle cx="14" cy="11" r="1.5" fill="#a855f7" opacity="0.6"/>
  <!-- zzz -->
  <text x="30" y="8" font-size="5" fill="#a855f7" opacity="0.7" font-family="monospace" font-weight="bold">z</text>
  <text x="33" y="5" font-size="4" fill="#a855f7" opacity="0.5" font-family="monospace" font-weight="bold">z</text>
  <text x="35" y="2" font-size="3" fill="#a855f7" opacity="0.3" font-family="monospace" font-weight="bold">z</text>
</svg>
`;

const CustomCursor = () => {
  const catRef = useRef(null);

  useEffect(() => {
    const cat = catRef.current;
    if (!cat) return;

    let mouseX = -200;
    let mouseY = -200;
    let catX = -200;
    let catY = -200;
    let lastDirection = 'right';
    let idleTime = 0;
    let currentState = 'sit'; // sit, walk-r, walk-l, sleep
    let walkFrame = 0;
    let walkTimer = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      idleTime = 0; // Reset idle
    };

    const svgToDataURI = (svg) =>
      `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

    const tick = () => {
      const dx = mouseX - catX;
      const dy = mouseY - catY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Lerp speed: much faster and more active
      const speed = dist > 300 ? 0.18 : dist > 100 ? 0.12 : 0.08;

      // Move aggressively when cursor is far
      if (dist > 30) {
        catX += dx * speed;
        catY += dy * speed;
        lastDirection = dx > 0 ? 'right' : 'left';
        idleTime = 0;

        // Faster leg pumping (was > 8, now > 5)
        walkTimer++;
        if (walkTimer > 5) {
          walkFrame = (walkFrame + 1) % 2;
          walkTimer = 0;
        }

        currentState = lastDirection === 'right' ? 'walk-r' : 'walk-l';
      } else {
        // Softly drift directly to the point when it gets close, for extra smoothness
        catX += dx * 0.06;
        catY += dy * 0.06;

        idleTime++;
        if (idleTime > 250) {
          currentState = 'sleep';
        } else {
          currentState = 'sit';
        }
      }

      let svg;
      switch (currentState) {
        case 'walk-r': svg = CAT_WALK_R; break;
        case 'walk-l': svg = CAT_WALK_L; break;
        case 'sleep': svg = CAT_SLEEP; break;
        default: svg = CAT_SIT;
      }

      // Bigger bounce/bob while moving quickly
      const bobY = (currentState === 'walk-r' || currentState === 'walk-l')
        ? Math.sin(walkTimer * 1.2) * 2.5
        : 0;

      cat.style.backgroundImage = `url("${svgToDataURI(svg)}")`;
      // We subtract an offset so the cat is centered directly under the pointer
      cat.style.transform = `translate(${catX - 18}px, ${catY + 12 + bobY}px)`;

      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={catRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 36,
        height: 32,
        pointerEvents: 'none',
        zIndex: 99999,
        willChange: 'transform',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        // Add a nice dark glow so the white cat stands out even more beautifully
        filter: 'drop-shadow(0 4px 8px rgba(0,217,255,0.4)) drop-shadow(0 0 4px rgba(0,0,0,0.8))',
      }}
    />
  );
};

export default CustomCursor;
