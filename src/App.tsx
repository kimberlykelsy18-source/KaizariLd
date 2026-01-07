import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { PromoBar } from './components/PromoBar';
import Navbar from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { CourseCatalog } from './pages/CourseCatalog';
import { EventsPage } from './pages/EventsPage';
import { PartnerTrainerPortal } from './pages/PartnerTrainerPortal';
import { BlogsPage } from './pages/BlogsPage';
import { CompanyProfile } from './pages/CompanyProfile';
import { LearningHubPage } from './pages/LearningHubPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle hash-based routing (for direct links and back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      }
    };

    // Set initial page from hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes
  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  // Render the appropriate page content
  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return <CourseCatalog />;
      case 'events':
        return <EventsPage />;
      case 'lms':
        return <LearningHubPage />;
      case 'portal':
        return <PartnerTrainerPortal />;
      case 'blogs':
        return <BlogsPage />;
      case 'company':
        return <CompanyProfile />;
      case 'contact':
        // Scroll to contact section on home page
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        setCurrentPage('home');
        return <HomePage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <PromoBar />
      <div className="pt-12">
        <Navbar activePage={currentPage} onNavigate={handleNavigate} />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}
