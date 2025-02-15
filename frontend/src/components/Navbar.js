import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';  // Import obrazka

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { root: null, threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [location]);

  // Funkcja renderująca link z podkreśleniem
  const renderLink = (to, label, isSection = false) => {
    const isActive = isSection
      ? activeSection === to.substring(2) // np. href="/#home" -> id="home"
      : location.pathname === to;
    return (
      <li className="relative">
        {isSection ? (
          <a href={to} className="text-white hover:text-gray-300 transition block py-2">
            {label}
            {isActive && (
              <span className="absolute left-0 right-0 -bottom-2 h-1 bg-brand-blue"></span>
            )}
          </a>
        ) : (
          <Link to={to} className="text-white hover:text-gray-300 transition block py-2">
            {label}
            {isActive && (
              <span className="absolute left-0 right-0 -bottom-2 h-1 bg-brand-blue"></span>
            )}
          </Link>
        )}
      </li>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-brand-dark shadow z-50">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-[4rem]" /> {/* Użycie importowanego obrazka */}
            </Link>
          </div>
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            {renderLink("/#home", "Strona główna", true)}
            {renderLink("/#about", "O nas", true)}
            {renderLink("/#services", "Usługi", true)}
            {renderLink("/kontakt", "Kontakt")}
            {renderLink("/zaloguj", "Zaloguj")}
          </ul>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white focus:outline-none">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            {isMobileMenuOpen && (
              <div className="bg-brand-dark">
                <ul className="flex flex-col space-y-2 px-4 pb-4">
                  {renderLink("/#home", "Strona główna", true)}
                  {renderLink("/#about", "O nas", true)}
                  {renderLink("/#services", "Usługi", true)}
                  {renderLink("/kontakt", "Kontakt")}
                  {renderLink("/zaloguj", "Zaloguj")}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
