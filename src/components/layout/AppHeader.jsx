import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { DATA_URL } from '../../lib/links';

export default function AppHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);

  // the menu is a one-shot: it closes when the route changes, on Escape (focus goes back
  // to the burger) and on any pointer down outside the burger and the menu card
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setMenuOpen(false);
      burgerRef.current?.focus();
    };
    const onDown = (e) => {
      if (burgerRef.current?.contains(e.target) || menuRef.current?.contains(e.target)) return;
      setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [menuOpen]);

  return (
    <header className={`app-header${isHome ? ' is-home' : ''}`}>
      <div className="header-brand">
        <Link to="/" className="logo-link hover-hatch">
          <Logo />
        </Link>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <Link to="/" className="header-title-link solid-block">
            <h1 className="header-title">
              Hyderabad<br />
              <strong>Urban Observatory</strong>
            </h1>
          </Link>
        </div>
      </div>

      {isHome ? (
        <>
          <nav className="home-links home-links-desktop" aria-label="Site">
            <a href={DATA_URL} rel="noopener">Data sources</a>
            <Link to="/about">About</Link>
          </nav>
          <button
            type="button"
            ref={burgerRef}
            className={`home-burger${menuOpen ? ' is-open' : ''}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="home-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          {menuOpen && (
            <nav className="home-menu" id="home-menu" ref={menuRef} aria-label="Site">
              <a href={DATA_URL} rel="noopener">Data sources</a>
              <Link to="/about">About</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </nav>
          )}
        </>
      ) : (
        <Link to="/" className="header-nav-link hover-hatch">
          <span className="hatch-bg-text">Home</span>
        </Link>
      )}
    </header>
  );
}
