
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">EMC Formation</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors">
              À Propos
            </Link>
            <Link to="/courses" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Formations
            </Link>
            <Link to="/admissions" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Admissions
            </Link>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild className="ml-4">
              <Link to="/admissions">S'inscrire</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3">
            <Link 
              to="/" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/courses" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Formations
            </Link>
            <Link 
              to="/admissions" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link 
              to="/blog" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-2">
              <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>S'inscrire</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
