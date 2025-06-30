
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/medecins', label: 'Médecins' },
    { path: '/horaires', label: 'Horaires' },
    { path: '/contact', label: 'Contact' },
    { path: '/urgences', label: 'Urgences' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-medical-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+229 XX XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@clinique.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Ouvert 24h/24 - Urgences disponibles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-medical-blue text-white p-2 rounded-lg">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6v2h2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8h2V6H4zm4 10V8h8v8H8z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-blue">Clinique</h1>
              <p className="text-sm text-medical-gray-medium"> </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-medical-blue ${
                  isActive(item.path) 
                    ? 'text-medical-blue border-b-2 border-medical-blue pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/rendez-vous"
              className="bg-medical-green text-white px-6 py-2 rounded-lg font-medium hover:bg-medical-green-light transition-colors"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors hover:text-medical-blue ${
                    isActive(item.path) ? 'text-medical-blue' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/rendez-vous"
                onClick={() => setIsMenuOpen(false)}
                className="bg-medical-green text-white px-6 py-2 rounded-lg font-medium hover:bg-medical-green-light transition-colors text-center"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
