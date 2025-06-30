
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medical-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinique Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white text-medical-blue p-2 rounded-lg">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6v2h2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8h2V6H4zm4 10V8h8v8H8z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Clinique</h3>
                <p className="text-blue-200"> </p>
              </div>
            </div>
            <p className="text-blue-100">
              Votre santé est notre priorité. Nous offrons des soins médicaux de qualité 
              avec une équipe de professionnels expérimentés.
            </p>
          </div>

          {/* Services rapides */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/services" className="hover:text-white transition-colors">Ophtalmologie</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Médecine Générale</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Gynécologie</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Pédiatrie</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Laboratoire</Link></li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens Rapides</h4>
            <ul className="space-y-2 text-blue-100">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/medecins" className="hover:text-white transition-colors">Nos Médecins</Link></li>
              <li><Link to="/horaires" className="hover:text-white transition-colors">Horaires</Link></li>
              <li><Link to="/rendez-vous" className="hover:text-white transition-colors">Prendre RDV</Link></li>
              <li><Link to="/urgences" className="hover:text-white transition-colors">Urgences</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+229 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>contact@clinique.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>Cotonou, Bénin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5" />
                <span>24h/24 - 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 Clinique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
