import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import SurvivorsPage from './pages/SurvivorsPage';
import AboutPage from './pages/AboutPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import MemoryPage from './pages/MemoryPage';
import EventsPage from './pages/EventsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-[#0B0B0D] min-h-screen flex flex-col">
        {/* Grain Overlay */}
        <div className="grain-overlay" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Routes */}
        <main className="relative flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/histoire" element={<HistoryPage />} />
            <Route path="/survivants" element={<SurvivorsPage />} />
            <Route path="/qui-sommes-nous" element={<AboutPage />} />
            <Route path="/ce-que-nous-faisons" element={<WhatWeDoPage />} />
            <Route path="/memoire" element={<MemoryPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        {/* Footer globally added */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
