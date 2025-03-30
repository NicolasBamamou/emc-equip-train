import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Experise Mining Consulting (EMC) </h3>
            <p className="mb-4">
              EMC  est dédiée à fournir une formation d'opérateur d'équipement lourd de haute qualité qui transforme des vies et assure la sécurité et l'excellence sur le lieu de travail.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/share/1DccwFtXpe/" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link to="about" className="hover:text-blue-400 transition-colors">À Propos</Link></li>
              <li><Link to="courses" className="hover:text-blue-400 transition-colors">Formations</Link></li>
              <li><Link to="admissions" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
              <li><Link to="blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Formations</h3>
            <ul className="space-y-2">
              <li><Link to="/courses#excavator" className="hover:text-blue-400 transition-colors">Opérateur d'Excavatrice</Link></li>
              <li><Link to="/courses#bulldozer" className="hover:text-blue-400 transition-colors">Formation Bulldozer</Link></li>
              <li><Link to="/courses#Chargeuses" className="hover:text-blue-400 transition-colors">Certification Opérateurs de Chargeuses</Link></li>
              <li><Link to="/courses#backhoe" className="hover:text-blue-400 transition-colors">Opérateur de Pelle Rétrocaveuse</Link></li>
              <li><Link to="/courses#camion" className="hover:text-blue-400 transition-colors">Opérateur de camion minier</Link></li>
              <li><Link to="/courses#crane" className="hover:text-blue-400 transition-colors">Certification d'Opérateur de Grue</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-Nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Boké Vile Zone minière, Baralande N0.14, ECM 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+224626250624" className="hover:text-blue-400 transition-colors">
                  (+224) 626-250-624
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:espertiseminingconsulting@gmail.com" className="hover:text-blue-400 transition-colors">
                  espertiseminingconsulting@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EMC . Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
