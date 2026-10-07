import { Link, useLocation } from 'react-router-dom';

export default function AppFooter() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      {!isHome && (
        <div className="mobile-nav">
          <Link to="/" className="mobile-nav-link hover-hatch">
            <span className="hatch-bg-text">Home</span>
          </Link>
        </div>
      )}

      <footer className={`app-footer${isHome ? ' is-home' : ''}`}>
        <div className="footer-note solid-block">
          This website is under continuous development. You may encounter errors or incomplete
          content. Share your feedback at{' '}
          <a href="mailto:hulf.observatory@gmail.com">hulf.observatory@gmail.com</a>
          {isHome && (
            <span className="footer-terrain">
              Terrain: FABDEM 30 m · HMDA region · heights 22× · GHMC in slate, lakes in blue
            </span>
          )}

        </div>
        {pathname !== '/disclaimer' && (
          <div className="solid-block">
            <Link to="/disclaimer" className="footer-disclaimer-link">
              Disclaimer
            </Link>
          </div>
        )}
      </footer>
    </>
  );
}
