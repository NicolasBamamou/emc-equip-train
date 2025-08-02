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
            <h3 className="text-xl font-bold mb-4">Séminaire d'Insertion Professionnel (SIP)</h3>
            <p className="mb-4">
              SIP accompagne votre insertion professionnelle complète dans l'écosystème minier guinéen à travers 7 spécialisations certifiantes qui couvrent les compétences techniques, digitales, managériales et humaines pour exceller dans l'industrie minière moderne.
            </p>
            <div className="mb-4">
              <p className="text-sm text-gray-300">
                <strong>🎯 Notre Mission:</strong> Centre d'excellence pour l'insertion professionnelle minière en Afrique de l'Ouest
              </p>
            </div>
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
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="" className="hover:text-blue-400 transition-colors">🏠 Accueil</Link></li>
              <li><Link to="about" className="hover:text-blue-400 transition-colors">🏢 À Propos</Link></li>
              <li><Link to="courses" className="hover:text-blue-400 transition-colors">🎓 Spécialisations</Link></li>
              <li><Link to="admissions" className="hover:text-blue-400 transition-colors">📝 Admissions</Link></li>
              <li><Link to="blog" className="hover:text-blue-400 transition-colors">📰 Blog Expertise</Link></li>
              <li><Link to="contact" className="hover:text-blue-400 transition-colors">📞 Contact</Link></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <h4 className="font-semibold mb-2">📊 Nos Résultats</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ 2000+ diplômés depuis 2005</li>
                <li>✓ 85% de taux de placement</li>
                <li>✓ 4 hectares d'installations</li>
              </ul>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Spécialisations</h3>
            <ul className="space-y-2">
              <li><Link to="/specialization/heavy-equipment" className="hover:text-blue-400 transition-colors">Équipement Lourd</Link></li>
              <li><Link to="/specialization/mining-safety" className="hover:text-blue-400 transition-colors">Sécurité Minière</Link></li>
              <li><Link to="/specialization/diesel-mechanics" className="hover:text-blue-400 transition-colors">Mécanique Diesel</Link></li>
              <li><Link to="/specialization/mining-engineering" className="hover:text-blue-400 transition-colors">Génie Minier</Link></li>
              <li><Link to="/specialization/electrical-mechatronics" className="hover:text-blue-400 transition-colors">Électricité Industrielle</Link></li>
              <li><Link to="/specialization/mining-operations-management" className="hover:text-blue-400 transition-colors">Gestion d'Opérations</Link></li>
              <li><Link to="/specialization/soft-skills-digital" className="hover:text-blue-400 transition-colors">Compétences Transversales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-Nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Boké Ville Zone minière, Baralande N°14, ECM 12345, Guinée</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+224626250624" className="hover:text-blue-400 transition-colors">
                  (+224) 626-250-624
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:expertiseminingconsulting@gmail.com" className="hover:text-blue-400 transition-colors">
                  expertiseminingconsulting@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <h4 className="font-semibold mb-2">🕒 Horaires d'Ouverture</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Lundi-Vendredi: 8h-18h</li>
                <li>Samedi: 8h-14h</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SIP - Séminaire d'Insertion Professionnel. Tous droits réservés.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 text-sm">
              <span>🏆 Centre d'Excellence Minier depuis 2005</span>
              <span className="hidden md:block">|</span>
              <span>🌍 Boké, Guinée - Afrique de l'Ouest</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
