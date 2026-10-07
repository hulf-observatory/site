// Embeds of the Spatial Data Repository (replaced the Felt maps on the story pages).
// Production: the maps subdomain. For local testing point it at the viewer's dev server:
//   VITE_MAPS_URL=http://127.0.0.1:8124 npm run dev
export const MAPS_URL = (import.meta.env.VITE_MAPS_URL || 'https://maps.hyderabad.urbanobservatory.in').replace(/\/$/, '');

// layers: ids from the viewer's layers.json (first = drawn on top);
// view: [lat, lng, zoom] — the same order Felt's loc= used
export function mapsEmbedUrl(layers, view) {
  const p = new URLSearchParams({ embed: '1', layers: layers.join(',') });
  if (view) p.set('view', view.join(','));
  return `${MAPS_URL}/?${p.toString().replace(/%2C/g, ',')}`;
}

// a normal link (full viewer, not embed) that opens with these layers at this view
export function mapsLink(layers, view) {
  const p = new URLSearchParams({ layers: layers.join(',') });
  if (view) p.set('view', view.join(','));
  return `${MAPS_URL}/?${p.toString().replace(/%2C/g, ',')}`;
}
