export default function Disclaimer() {
  return (
    <main className="content-main" style={{ maxWidth: '64rem' }}>
      <div className="content-block">
        <h2 className="content-heading">Disclaimer</h2>

        <div className="content-prose">
          <p>
            The spatial data, maps, and related content available on this portal are provided for
            general informational and illustrative purposes only. While every effort is made to
            ensure that the information is current, accurate, and reliable, no guarantees or
            warranties—express or implied—are made regarding the data's completeness, precision,
            or suitability for any specific use.
          </p>
          <p>
            The maps, boundaries and spatial data presented on this portal are representational in
            nature. They should not be used for legal, regulatory, or emergency purposes. Any
            information derived from this portal should be independently validated with appropriate
            authorities or agencies before use in decision-making or formal applications.
          </p>
          <p>
            The creators, contributors, and hosting institutions of this portal accept no
            responsibility or liability for any errors, omissions, or inaccuracies in the data, or
            for any losses, injuries, or damages—direct or indirect—that may result from its use.
            The data is provided "as is," without warranty of any kind.
          </p>
          <p>
            This portal may contain links to external websites of government ministries,
            departments, or other organizations. The content and maintenance of those websites are
            the sole responsibility of the respective entities. Users are advised to contact the
            original sources directly for further information, clarification, or corrections.
          </p>
          <p>
            Users are responsible for ensuring compliance with any applicable data use licenses or
            third-party source restrictions.
          </p>
          <p>
            This portal is under continuous development. Visualizations, data, and functionalities
            may change or be updated without prior notice. Users are encouraged to revisit the
            portal periodically for the most recent information. We welcome feedback to improve the
            quality and relevance of this platform.
          </p>
          <p style={{ paddingTop: 16, borderTop: '1px solid rgba(17,17,17,0.1)' }}>
            Please report any issues, inaccuracies, or suggestions to{' '}
            <a href="mailto:hulf.observatory@gmail.com">hulf.observatory@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
