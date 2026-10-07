import { useState, useMemo } from 'react';
import FilterBubbles from '../../components/ui/FilterBubbles.jsx';
import ExpandableCard from '../../components/ui/ExpandableCard.jsx';
import { DATASETS } from '../../data/datasets.js';

const ALL_THEMES = [...new Set(DATASETS.map((d) => d.theme))].sort();
const FILTERS = [
  { key: '__all__', label: 'All' },
  ...ALL_THEMES.map((t) => ({ key: t, label: t })),
];

export default function DataObservatory() {
  const [selected, setSelected] = useState(new Set(['__all__']));

  const toggle = (key) => {
    if (key === '__all__') {
      setSelected(new Set(['__all__']));
      return;
    }
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete('__all__');
      if (next.has(key)) {
        next.delete(key);
        if (next.size === 0) next.add('__all__');
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const visible = useMemo(() => {
    const all = selected.has('__all__');
    return [...DATASETS]
      .filter((d) => all || selected.has(d.theme))
      .sort((a, b) => a.dataset.localeCompare(b.dataset));
  }, [selected]);

  return (
    <main className="content-main">
      <div className="page-intro">
        <h1>Data Observatory</h1>
        <p>Download links will be updated soon. Source information is being revised; missing references will be included soon. Suggestions for corrections and additional datasets are welcome.</p>
      </div>

      <FilterBubbles filters={FILTERS} selected={selected} onSelect={toggle} />

      <div className="cards-grid">
        {visible.map((d) => (
          <ExpandableCard key={d.dataset} theme={d.theme} title={d.dataset} source={`Source: <a href="${d.url}" target="_blank" rel="noopener noreferrer">${d.source}</a>`}>
            <p>{d.details}</p>
          </ExpandableCard>
        ))}
      </div>
    </main>
  );
}
