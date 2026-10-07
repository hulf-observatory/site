import { useRef } from 'react';

export default function ImageComparison({ before, after, alt = '' }) {
  const beforeRef = useRef(null);
  const lineRef = useRef(null);
  const handleRef = useRef(null);

  const onInput = (e) => {
    const v = e.target.value;
    if (beforeRef.current) beforeRef.current.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
    if (lineRef.current) lineRef.current.style.left = `${v}%`;
    if (handleRef.current) handleRef.current.style.left = `${v}%`;
  };

  return (
    <div className="image-comparison">
      <div className="comparison-inner">
        <img className="comparison-after" src={after} alt={`${alt} — after`} />
        <img className="comparison-before" ref={beforeRef} src={before} alt={`${alt} — before`} />
        <div className="comparison-line" ref={lineRef} />
        <div className="comparison-handle" ref={handleRef}>
          <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}>
            <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <input type="range" className="comparison-input" min="0" max="100" defaultValue="50" onInput={onInput} />
      </div>
    </div>
  );
}
