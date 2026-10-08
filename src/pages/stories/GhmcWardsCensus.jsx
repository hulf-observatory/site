import { useEffect } from 'react';
import useDocumentTitle from '../../lib/useDocumentTitle';

export default function GhmcWardsCensus() {
  useDocumentTitle('GHMC Ward-Level Census Data, 2011');
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="content-main content-main--lg">
      <div className="content-block">
        <h1 className="content-heading">GHMC Ward-Level Census Data, 2011</h1>

        <div className="story-prose-text" style={{ marginBottom: 32 }}>
          <p>Explore the Primary Census Abstract, Household Characteristics, and Housing Conditions from the 2011 Census of India.</p>

          <p>Use the dropdown menu above the map to explore and visualise over 200 variables—such as population density, literacy rates, housing types, and many more—at the ward level within the Greater Hyderabad Municipal Corporation (GHMC). You can search for a specific ward using the search tool, and hover over individual wards on the map to view detailed data.</p>
        </div>

        <div
          className="flourish-embed flourish-map"
          data-src="visualisation/25129699"
          style={{ width: '100%', minHeight: 600 }}
        />
      </div>
    </main>
  );
}
