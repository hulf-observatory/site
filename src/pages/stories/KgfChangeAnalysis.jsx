import ImageCarousel from '../../components/ui/ImageCarousel.jsx';

const IMG = `${import.meta.env.BASE_URL}assets/images/kgf-change-analysis`;

const CAROUSEL_ITEMS = [
  {
    src: `${IMG}/240409_KGF_Page_1.jpg`,
    alt: 'Pre-Imagery Kancha Gachibowli',
    label: 'Pre-Imagery: ',
    caption: 'Satellite view of Kancha Gachibowli on 28 March 2025.',
  },
  {
    src: `${IMG}/240409_KGF_Page_2.jpg`,
    alt: 'Post-Imagery Kancha Gachibowli',
    label: 'Post-Imagery: ',
    caption: 'Satellite view of Kancha Gachibowli on 07 April 2025.',
  },
  {
    src: `${IMG}/240409_KGF_Page_3.jpg`,
    alt: 'NDVI Change Kancha Gachibowli',
    label: 'NDVI Change: ',
    caption: 'Illustrates the approximate green cover loss of 102 Acres within the boundary, derived from NDVI analysis.',
  },
  {
    src: `${IMG}/240409_KGF_Page_4.jpg`,
    alt: 'Land Disturbance Kancha Gachibowli',
    label: 'Land Disturbance: ',
    caption: 'Shows the approximate land area disturbed, estimated at 115 Acres, based on observed changes.',
  },
];

export default function KgfChangeAnalysis() {
  return (
    <main className="content-main content-main--lg">
      <div className="content-block">
        <h1 className="content-heading">Kancha Gachibowli Forest Change Analysis</h1>

        <div className="story-prose-text">
          <p>Between March 30, 2025, and April 3, 2025, a deforestation drive was undertaken in Kancha Gachibowli Forest. We have conducted a quick assessment to map the extent of deforestation and land area that was disturbed in those four days.</p>

          <p>This analysis focuses on the observed changes in the Kancha Gachibowli area between late March and early April 2025, based on 10m Sentinel-2 satellite imagery. Satellite imagery from March 28, 2025 (pre-deforestation) and April 7, 2025 (post-deforestation) was compared to assess the extent of tree cover loss and land disturbance. The analysis estimates an approximate <strong style={{ fontWeight: 400 }}>green cover loss of 102 acres</strong> within the identified boundary, based on NDVI (Normalized Difference Vegetation Index) changes, and an <strong style={{ fontWeight: 400 }}>overall land disturbance of about 115 acres</strong>, based on observed surface changes.</p>

          <p>Using the location sketch provided in <a href="https://www.thehindu.com/news/cities/Hyderabad/400-acre-kancha-gachibowli-land-was-not-shown-as-forest-in-revenue-or-forest-records/article69403327.ece" target="_blank" rel="noopener noreferrer">The Hindu</a> (accessed on 8 April 2025), we georeferenced the image and digitized the boundary for reference purposes.</p>
        </div>

        <h2 className="story-subheading">Before and After Imagery</h2>
        <p className="story-prose-text" style={{ marginBottom: 24 }}>
          The images below provide a visual comparison of the Kancha Gachibowli area before and after the observed changes, including an illustration of green cover loss and land disturbance.
        </p>

        <ImageCarousel items={CAROUSEL_ITEMS} />

        <div className="story-attribution">
          <p>This assessment was conducted for <a href="https://drive.google.com/file/d/1Pn9Y-TuoZpXQ2gEyX5Ahuk_i4EcM2DEh/view?usp=share_link" target="_blank" rel="noopener noreferrer">An Ecological Heritage Compilation and Report</a> by Dr. Joseph Joby, University of Hyderabad. We worked in close coordination with Arun Vasireddy, who was part of the team that compiled the report.</p>
          <div className="story-meta">
            <span>Analysis &amp; visualisation: Teja Malladi, Dr. Anant Maringanti</span>
            <span>Last updated: 05 July 2025</span>
          </div>
        </div>
      </div>
    </main>
  );
}
