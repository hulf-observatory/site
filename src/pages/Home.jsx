import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ACTIONS = [
  // the Spatial Data Repository (replaced the Felt portal) is its own subdomain
  { label: 'Layers', href: 'https://maps.hyderabad.urbanobservatory.in/', external: true },
  { label: 'Themes', href: '/explore/thematic-areas' },
];

const ArrowIcon = () => (
  <svg className="home-action-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M5 19L19 5M19 5H5M19 5V19" />
  </svg>
);

export default function Home() {
  // a click or tap on the terrain itself nudges the eye to the two buttons
  const [hint, setHint] = useState(false);
  const timer = useRef(0);
  useEffect(() => {
    const onDown = (e) => {
      if (e.target.closest && e.target.closest('a, button, nav')) return;
      setHint(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setHint(false), 2200);
    };
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('pointerdown', onDown);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <main className="home-main">
      {hint && <p className="home-hint">Dive deeper — explore the city's layers and themes</p>}
      <div className={`home-actions${hint ? ' is-hint' : ''}`}>
        {ACTIONS.map(({ label, href, external }) => (external ? (
          <a key={label} href={href} className="home-action">
            {label}
            <ArrowIcon />
          </a>
        ) : (
          <Link key={label} to={href} className="home-action">
            {label}
            <ArrowIcon />
          </Link>
        )))}
      </div>
      <p className="home-credit">
        Terrain: FABDEM 30 m · HMDA region · heights 22× · GHMC in slate, lakes in blue
      </p>
    </main>
  );
}
