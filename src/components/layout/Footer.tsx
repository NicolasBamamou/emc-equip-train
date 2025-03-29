
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
            <h3 className="text-xl font-bold mb-4">EMC Training</h3>
            <p className="mb-4">
              EMC Training is dedicated to providing high-quality heavy equipment operator training that transforms lives and ensures workplace safety and excellence.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
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
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-400 transition-colors">Admissions</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses#excavator" className="hover:text-blue-400 transition-colors">Excavator Operation</Link></li>
              <li><Link to="/courses#bulldozer" className="hover:text-blue-400 transition-colors">Bulldozer Training</Link></li>
              <li><Link to="/courses#crane" className="hover:text-blue-400 transition-colors">Crane Operation</Link></li>
              <li><Link to="/courses#forklift" className="hover:text-blue-400 transition-colors">Forklift Certification</Link></li>
              <li><Link to="/courses#backhoe" className="hover:text-blue-400 transition-colors">Backhoe Operation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Training Avenue, Equipment City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@emctraining.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EMC Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
