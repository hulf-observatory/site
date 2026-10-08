import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FilterBubbles from '../../components/ui/FilterBubbles.jsx';
import ExpandableCard from '../../components/ui/ExpandableCard.jsx';
import { TIMELINE_URL } from '../../lib/links';
import useDocumentTitle from '../../lib/useDocumentTitle';

const FILTERS = [
  { key: 'all', label: 'All Themes' },
  { key: 'ENVIRONMENTAL IMPACT', label: 'Environmental Impact' },
  { key: 'URBAN HERITAGE AND ARCHIVE', label: 'Urban Heritage & Archive' },
  { key: 'LAND USE AND LAND COVER', label: 'Land Use & Land Cover' },
  { key: 'WATER', label: 'Water' },
  { key: 'ACCESSIBILITY', label: 'Accessibility & Mobility' },
  { key: 'FLOODS', label: 'Floods' },
  { key: 'TERRAIN', label: 'Terrain' },
  { key: 'WEATHER', label: 'Weather' },
  { key: 'DEMOGRAPHICS', label: 'Demographics' },
  { key: 'GOVERNANCE', label: 'Governance' },
  { key: 'ECONOMIC HISTORY', label: 'Economic History' },
];

const CARDS = [
  {
    themes: ['WEATHER', 'WATER'],
    themeLabel: 'WEATHER, WATER',
    kind: 'tool',
    title: 'Weather Dashboard',
    link: 'https://weather.hyderabad.urbanobservatory.in/',
    external: true,
    description: 'Current and recent weather across Hyderabad: rainfall, temperature and other readings from weather stations around the city.',
  },
  {
    themes: ['ACCESSIBILITY', 'DEMOGRAPHICS'],
    themeLabel: 'ACCESSIBILITY, DEMOGRAPHICS',
    kind: 'tool',
    title: 'Accessibility Atlas',
    link: 'https://access.hyderabad.urbanobservatory.in',
    external: true,
    description: 'How far can you get on foot along Hyderabad\'s streets? Explore walking reach to schools, parks, toilets and bus and metro stops from any point, compare wards across the city, and see which stops serve the most people.',
  },
  {
    themes: ['ENVIRONMENTAL IMPACT'],
    themeLabel: 'ENVIRONMENTAL IMPACT',
    title: 'Kancha Gachibowli Forest Change Analysis',
    link: '/stories/kgf-change-analysis',
    description: 'This analysis focuses on green cover loss (approx. 102 Acres) and land area disturbed (approx. 115 Acres) in Kancha Gachibowli between March and April 2025, based on Sentinel-2 imagery.',
  },
  {
    themes: ['WATER', 'FLOODS'],
    themeLabel: 'FLOODS, WATER',
    kind: 'tool',
    title: 'Report Floods in Hyderabad',
    link: 'https://floodreport.hyderabad.urbanobservatory.in',
    external: true,
    description: 'Report waterlogging and flood events across Hyderabad in real time. Citizen reports are mapped as they come in, building a ground-level record of where and how flooding affects the city.',
  },
  {
    themes: ['URBAN HERITAGE AND ARCHIVE', 'WATER'],
    themeLabel: 'URBAN HERITAGE & ARCHIVE, WATER',
    title: "Hyderabad's forgotten waterscapes",
    link: '/stories/hyderabad-waterscapes',
    description: 'Follow the drainage networks and archival maps to see how rainfall flows across contour lines, linking catchments to both existing lakes and the old tanks that once held water.',
  },
  {
    themes: ['WATER', 'TERRAIN', 'FLOODS'],
    themeLabel: 'WATER, TERRAIN, FLOODS',
    kind: 'tool',
    title: 'Lake Atlas — Watershed Explorer',
    link: 'https://lakeatlas.hyderabad.urbanobservatory.in',
    external: true,
    description: 'Explore the watershed structure of ~3,500 HMDA lakes. Click any lake to trace its catchment, upstream drainage network, daily rainfall history, and rooftop harvest potential. Click any point to follow where water flows.',
  },
  {
    themes: ['URBAN HERITAGE AND ARCHIVE', 'LAND USE AND LAND COVER'],
    themeLabel: 'URBAN HERITAGE & ARCHIVE, LAND USE & LAND COVER',
    kind: 'tool',
    title: 'City Timeline',
    link: TIMELINE_URL,
    external: true,
    description: "See how Hyderabad changed. Compare archive maps, toposheets and satellite images from 1908 to today, and the 2031 land use plans, side by side, on a time slider, or by swiping between two years.",
  },
  {
    themes: ['DEMOGRAPHICS'],
    themeLabel: 'DEMOGRAPHICS',
    title: 'GHMC Ward-Level Census Data, 2011',
    link: '/stories/ghmc-wards-census',
    description: 'Explore the Primary Census Abstract, Household Characteristics, and Housing Conditions from the 2011 Census of India.',
  },
  {
    themes: ['LAND USE AND LAND COVER'],
    themeLabel: 'LAND USE & COVER',
    title: 'Proposed Land Use 2031',
    comingSoon: true,
    description: 'Discover how the 2031 Master Plan envisions the city\'s future by exploring the proposed land use map, shown here as a layer over the current basemaps.',
  },
  {
    themes: ['LAND USE AND LAND COVER'],
    themeLabel: 'LAND USE & COVER',
    title: 'Built-up Area Growth (1990–2020)',
    comingSoon: true,
    description: 'Tracks the spatial expansion of Hyderabad over three decades.',
  },
  {
    themes: ['WATER'],
    themeLabel: 'WATER',
    title: 'Water Supply Timings and Inequality',
    comingSoon: true,
    description: 'Maps disparities in water access and timing across neighborhoods.',
  },
  {
    themes: ['GOVERNANCE'],
    themeLabel: 'GOVERNANCE',
    title: "Changes in Hyderabad's Administrative Boundaries",
    comingSoon: true,
    description: 'Shows how city boundaries have shifted over time.',
  },
  {
    themes: ['ECONOMIC HISTORY'],
    themeLabel: 'ECONOMIC HISTORY',
    title: 'Industrial Timeline of Hyderabad (1817–2010)',
    comingSoon: true,
    description: 'A historical overview of industrial development in the city.',
  },
];

export default function ThematicAreas() {
  useDocumentTitle('Thematic Areas');
  const [tab, setTab] = useState('tools');
  const [selected, setSelected] = useState(new Set(['all']));

  const toggle = (key) => {
    if (key === 'all') { setSelected(new Set(['all'])); return; }
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete('all');
      if (next.has(key)) {
        next.delete(key);
        if (next.size === 0) next.add('all');
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const visible = useMemo(() => {
    if (selected.has('all')) return CARDS;
    return CARDS.filter((c) => c.themes.some((t) => selected.has(t)));
  }, [selected]);
  const shown = visible.filter((c) => (tab === 'tools' ? c.kind === 'tool' : c.kind !== 'tool'));

  return (
    <main className="content-main">
      <div className="page-intro">
        <h1>Thematic Areas</h1>
        <p>Filter by themes and click on each card to read more.</p>
      </div>

      <div className="cards-tabs" role="tablist">
        <button type="button" role="tab" aria-selected={tab === 'tools'}
          className={`cards-tab${tab === 'tools' ? ' is-active' : ''}`} onClick={() => setTab('tools')}>
          Tools
        </button>
        <button type="button" role="tab" aria-selected={tab === 'stories'}
          className={`cards-tab${tab === 'stories' ? ' is-active' : ''}`} onClick={() => setTab('stories')}>
          Stories &amp; datasets
        </button>
      </div>

      {tab === 'stories' && <FilterBubbles filters={FILTERS} selected={selected} onSelect={toggle} />}

      <div className="cards-grid">
        {shown.map((card) => (
          <ExpandableCard
            key={card.title}
            theme={card.themeLabel}
            title={card.title}
            comingSoon={card.comingSoon}
          >
            <p>{card.description}</p>
            {!card.comingSoon && (
              <p style={{ marginTop: 16 }}>
                {card.external ? (
                  <a href={card.link} rel="noopener" style={{ fontWeight: 500 }}>
                    Click here to explore &rarr;
                  </a>
                ) : (
                  <Link to={card.link} style={{ fontWeight: 500 }}>
                    Click here to explore &rarr;
                  </Link>
                )}
              </p>
            )}
          </ExpandableCard>
        ))}
      </div>
    </main>
  );
}
