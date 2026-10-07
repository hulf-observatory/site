import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE: the path the site is served from — '/site/' on the project Pages URL
// (https://hulf-observatory.github.io/site/), '/' at the apex domain.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});
