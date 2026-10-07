// Embeds of the Spatial Data Repository (the map viewer) on the story pages.
// MAPS_URL lives in links.js (VITE_MAPS_URL override); re-exported for existing imports.
import { MAPS_URL } from './links';
export { MAPS_URL };

// layers: ids from the viewer's layers.json (first = drawn on top);
// view: [lat, lng, zoom]
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
