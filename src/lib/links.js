// Addresses of the companion apps. Each has a build-time override so a local
// checkout can point at a dev server (e.g. VITE_MAPS_URL=http://127.0.0.1:8124).
const trim = (u) => u.replace(/\/$/, '');

// Spatial Data Repository (map viewer)
export const MAPS_URL = trim(import.meta.env.VITE_MAPS_URL || 'https://maps.hyderabad.urbanobservatory.in');

// City Timeline (archive maps side by side); keeps its trailing slash: it is linked as-is
export const TIMELINE_URL = trim(import.meta.env.VITE_TIMELINE_URL || 'https://timeline.hyderabad.urbanobservatory.in') + '/';
