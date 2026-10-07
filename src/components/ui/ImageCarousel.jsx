import { useState, useRef, useEffect } from 'react';

const ChevronIcon = ({ dir }) => (
  <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
  </svg>
);

export default function ImageCarousel({ items }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const goTo = (index) => {
    setCurrent(index);
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: track.children[index].offsetLeft, behavior: 'smooth' });
    }
  };

  const prev = () => goTo((current - 1 + items.length) % items.length);
  const next = () => goTo((current + 1) % items.length);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.children[0].offsetWidth);
      setCurrent(idx);
    };
    track.addEventListener('scroll', onScroll);
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {items.map(({ src, alt, label, caption }, i) => (
            <div key={i} className="carousel-slide">
              <p className="carousel-caption">
                <strong>{label}</strong>
                {caption}
              </p>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
        <button className="carousel-nav prev" onClick={prev} aria-label="Previous">
          <ChevronIcon dir="left" />
        </button>
        <button className="carousel-nav next" onClick={next} aria-label="Next">
          <ChevronIcon dir="right" />
        </button>
      </div>
      <div className="carousel-dots">
        {items.map((_, i) => (
          <span key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
      <p style={{ fontSize: 12, fontWeight: 300, color: '#666666', marginTop: 16, textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Use arrows or dots to navigate
      </p>
    </>
  );
}
