import { Link } from 'react-router-dom';
import { DATA_URL } from '../lib/links';
import useDocumentTitle from '../lib/useDocumentTitle';

// Catch-all route. Pages serves 404.html (= index.html) for unknown paths, so this is
// what a visitor sees for a mistyped or outdated address.
export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <main className="content-main">
      <div className="page-intro">
        <h1>Page not found</h1>
        <p>There is nothing at this address; the page may have moved or the link may be out of date.</p>
      </div>
      <nav className="not-found-links" aria-label="Where to go instead">
        <Link to="/">Home</Link>
        <Link to="/explore/thematic-areas">Themes</Link>
        <a href={DATA_URL} rel="noopener">Data sources</a>
      </nav>
    </main>
  );
}
