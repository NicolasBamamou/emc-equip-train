
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary leading-tight">
              Séminaire d'Insertion Professionnel
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">
              Accueil
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">
              À Propos
            </Link>
            <Link to="/courses" className="font-medium text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">
              Formations
            </Link>
            <Link to="/admissions" className="font-medium text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">
              Admissions
            </Link>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">
              Blog
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-primary transition-colors text-sm lg:text-base">
              Contact
            </Link>
            <Button asChild className="ml-4 text-sm lg:text-base">
              <Link to="/admissions">S'inscrire</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary transition-colors p-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-3 border-t border-gray-200 pt-3">
            <Link 
              to="/" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/courses" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Formations
            </Link>
            <Link 
              to="/admissions" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link 
              to="/blog" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full text-sm">
                <Link to="/admissions">S'inscrire</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
