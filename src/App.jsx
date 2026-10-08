import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import TerrainHero from './components/layout/TerrainHero';
import Home from './pages/Home';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import ExternalRedirect from './components/ui/ExternalRedirect';
import { MAPS_URL, DATA_URL } from './lib/links';
import ThematicAreas from './pages/explore/ThematicAreas';
import HyderabadWaterscapes from './pages/stories/HyderabadWaterscapes';
import GhmcWardsCensus from './pages/stories/GhmcWardsCensus';
import KgfChangeAnalysis from './pages/stories/KgfChangeAnalysis';
import NotFound from './pages/NotFound';

const draftTheme = {
  token: {
    colorPrimary: '#111827',
    colorBgBase: '#FFFFFF',
    colorTextBase: '#111827',
    colorBorder: '#E5E7EB',
    colorBorderSecondary: '#E5E7EB',
    colorBgContainer: '#FFFFFF',
    colorBgElevated: '#FFFFFF',
    colorBgLayout: '#EDEEF0',
    colorTextSecondary: '#374151',
    colorTextTertiary: '#6B7280',
    colorTextPlaceholder: '#9CA3AF',
    fontFamily: '"Archivo", "Helvetica Neue", Arial, sans-serif',
    fontWeightStrong: 600,
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    borderRadiusXS: 4,
    boxShadow: '0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.08)',
    boxShadowSecondary: '0 1px 2px rgba(0,0,0,.06), 0 4px 12px rgba(0,0,0,.08)',
    lineWidth: 1,
    wireframe: false,
  },
  components: {
    Button: {
      colorPrimary: '#111827',
      colorPrimaryHover: '#374151',
      colorBgContainer: '#FFFFFF',
      colorText: '#111827',
      paddingContentHorizontal: 14,
    },
    Card: {
      colorBorderSecondary: '#E5E7EB',
      boxShadowTertiary: '0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.08)',
    },
    Select: {
      colorBorder: '#E5E7EB',
      optionSelectedBg: '#F3F4F6',
    },
  },
};

export default function App() {
  const { pathname } = useLocation();
  return (
    <ConfigProvider theme={draftTheme}>
      <div className={`app-shell${pathname === '/' ? ' is-home' : ''}`}>
        {pathname === '/' && <TerrainHero />}
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* the in-site Data Observatory page is offline until the GeoLibre-based page exists;
              its code stays in pages/explore/DataObservatory.jsx. "Data sources" is the open-data site. */}
          <Route path="/explore/data-observatory" element={<ExternalRedirect to={DATA_URL} />} />
          {/* the old spatial data portal is retired; old links go to the map viewer */}
          <Route path="/explore/spatial-data-portal" element={<ExternalRedirect to={MAPS_URL + '/'} />} />
          <Route path="/explore/thematic-areas" element={<ThematicAreas />} />
          <Route path="/stories/hyderabad-waterscapes" element={<HyderabadWaterscapes />} />
          <Route path="/stories/ghmc-wards-census" element={<GhmcWardsCensus />} />
          <Route path="/stories/kgf-change-analysis" element={<KgfChangeAnalysis />} />
          {/* anything else: Pages serves 404.html (a copy of index.html), so the router lands here */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AppFooter />
      </div>
    </ConfigProvider>
  );
}
