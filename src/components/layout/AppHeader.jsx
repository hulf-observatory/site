import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function AppHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link to="/explore/data-observatory">Data sources</Link>
            <Link to="/about">About</Link>
          </nav>
          <button
            type="button"
            className={`home-burger${menuOpen ? ' is-open' : ''}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          {menuOpen && (
            <nav className="home-menu" aria-label="Site">
              <Link to="/explore/data-observatory">Data sources</Link>
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
