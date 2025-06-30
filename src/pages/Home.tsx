
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Clock, Phone, MapPin } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Ophtalmologie',
      description: 'Soins complets pour vos yeux',
      icon: '👁️'
    },
    {
      title: 'Médecine Générale',
      description: 'Consultations et suivi médical',
      icon: '🩺'
    },
    {
      title: 'Gynécologie',
      description: 'Santé féminine et suivi gynécologique',
      icon: '🤱'
    },
    {
      title: 'Pédiatrie',
      description: 'Soins spécialisés pour enfants',
      icon: '👶'
    },
    {
      title: 'Laboratoire',
      description: 'Analyses biomédicales complètes',
      icon: '🔬'
    },
    {
      title: 'Cardiologie',
      description: 'Soins du cœur et ECG',
      icon: '❤️'
    }
  ];

  const actualites = [
    {
      title: 'Nouvelle unité de cardiologie',
      date: '15 Décembre 2024',
      description: 'Ouverture de notre nouveau service de cardiologie avec équipement moderne.'
    },
    {
      title: 'Campagne de vaccination',
      date: '10 Décembre 2024',
      description: 'Campagne de vaccination gratuite pour les enfants de 0 à 5 ans.'
    },
    {
      title: 'Nouveaux horaires',
      date: '5 Décembre 2024',
      description: 'Extension des horaires de consultation pour mieux vous servir.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medical-blue to-medical-blue-light text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Clinique 
                <span className="block text-2xl lg:text-3xl font-normal text-blue-200 mt-2">
                  Votre santé, notre mission
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Votre santé, notre priorité absolue. 
                Des soins de qualité avec une équipe médicale expérimentée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/rendez-vous"
                  className="bg-medical-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-medical-green-light transition-colors"
                >
                  Prendre Rendez-vous
                </Link>
                <Link
                  to="/urgences"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-medical-blue transition-colors"
                >
                  Urgences 24h/24
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-slide-in">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Infos Pratiques</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Ouvert 24h/24</p>
                      <p className="text-blue-200">Urgences disponibles</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">+229 XX XX XX XX</p>
                      <p className="text-blue-200">Ligne directe</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6" />
                    <div>
                      <p className="font-semibold">Cotonou, Bénin</p>
                      <p className="text-blue-200">Facilement accessible</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-medical-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-4">Nos Services Phares</h2>
            <p className="text-xl text-medical-gray-medium max-w-3xl mx-auto">
              Une gamme complète de services médicaux pour répondre à tous vos besoins de santé.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-medical-blue mb-3">{service.title}</h3>
                <p className="text-medical-gray-medium mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-medical-green font-semibold hover:text-medical-green-light transition-colors"
                >
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-medical-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-medical-blue-dark transition-colors"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-4">Actualités de la Clinique</h2>
            <p className="text-xl text-medical-gray-medium max-w-3xl mx-auto">
              Restez informés de nos dernières actualités et innovations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actualites.map((actu, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm text-medical-green mb-2">{actu.date}</div>
                <h3 className="text-xl font-bold text-medical-blue mb-3">{actu.title}</h3>
                <p className="text-medical-gray-medium">{actu.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à prendre soin de votre santé ?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Notre équipe médicale expérimentée vous attend pour vous offrir les meilleurs soins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rendez-vous"
              className="bg-medical-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-medical-green-light transition-colors"
            >
              Prendre Rendez-vous
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-medical-blue transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
