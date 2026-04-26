import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StructurePage from './pages/StructurePage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#050014] selection:bg-[#0200B5] selection:text-white flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/structure" element={<StructurePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
