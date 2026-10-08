// Addresses of the companion sites. Each has a build-time override so a local
// checkout can point at a dev server (e.g. VITE_MAPS_URL=http://127.0.0.1:8124).
const trim = (u) => u.replace(/\/$/, '');

// Spatial Data Repository (map viewer)
export const MAPS_URL = trim(import.meta.env.VITE_MAPS_URL || 'https://maps.hyderabad.urbanobservatory.in');

// City Timeline (archive maps side by side); keeps its trailing slash: it is linked as-is
export const TIMELINE_URL = trim(import.meta.env.VITE_TIMELINE_URL || 'https://timeline.hyderabad.urbanobservatory.in') + '/';

// The open-data site (catalogue, downloads). Stands in for the in-site Data Observatory page.
export const DATA_URL = (import.meta.env.VITE_DATA_URL || 'https://data.hyderabad.urbanobservatory.in') + '/';

// Tools (the former Thematic Areas "Tools" tab), its own site
export const TOOLS_URL = trim(import.meta.env.VITE_TOOLS_URL || 'https://tools.hyderabad.urbanobservatory.in') + '/';

// Stories & datasets and the story pages, its own site
export const STORIES_URL = trim(import.meta.env.VITE_STORIES_URL || 'https://stories.hyderabad.urbanobservatory.in') + '/';
