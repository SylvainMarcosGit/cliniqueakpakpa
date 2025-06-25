
import React from 'react';
import { Clock, User, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Horaires = () => {
  const horairesClinique = {
    'Lundi - Vendredi': '7h00 - 19h00',
    'Samedi': '8h00 - 16h00',
    'Dimanche': '9h00 - 13h00',
    'Urgences': '24h/24 - 7j/7'
  };

  const horairesMedecins = [
    {
      nom: 'Dr. Marie ADJOVI',
      specialite: 'Ophtalmologie',
      horaires: {
        'Lundi': '8h00 - 17h00',
        'Mardi': '8h00 - 17h00',
        'Mercredi': '8h00 - 17h00',
        'Jeudi': '8h00 - 17h00',
        'Vendredi': '8h00 - 17h00',
        'Samedi': '8h00 - 12h00'
      }
    },
    {
      nom: 'Dr. Jean KOSSOU',
      specialite: 'Médecine Générale',
      horaires: {
        'Lundi': '7h00 - 19h00',
        'Mardi': '7h00 - 19h00',
        'Mercredi': '7h00 - 19h00',
        'Jeudi': '7h00 - 19h00',
        'Vendredi': '7h00 - 19h00',
        'Samedi': '8h00 - 16h00'
      }
    },
    {
      nom: 'Dr. Florence AHONON',
      specialite: 'Gynécologie-Obstétrique',
      horaires: {
        'Mardi': '8h00 - 18h00',
        'Mercredi': '8h00 - 18h00',
        'Jeudi': '8h00 - 18h00',
        'Vendredi': '8h00 - 18h00',
        'Samedi': '8h00 - 14h00'
      }
    },
    {
      nom: 'Dr. Paul AGBODJAN',
      specialite: 'Pédiatrie',
      horaires: {
        'Lundi': '8h00 - 16h00',
        'Mardi': '8h00 - 16h00',
        'Mercredi': '8h00 - 16h00',
        'Jeudi': '8h00 - 16h00',
        'Vendredi': '8h00 - 16h00',
        'Samedi': '8h00 - 14h00'
      }
    },
    {
      nom: 'Dr. Christelle DANSOU',
      specialite: 'Cardiologie',
      horaires: {
        'Mercredi': '9h00 - 17h00',
        'Jeudi': '9h00 - 17h00',
        'Vendredi': '9h00 - 17h00',
        'Samedi': '9h00 - 13h00'
      }
    }
  ];

  const garde = [
    { jour: 'Lundi', medecin: 'Dr. Jean KOSSOU', specialite: 'Médecine Générale', horaire: '19h00 - 7h00' },
    { jour: 'Mardi', medecin: 'Dr. Paul AGBODJAN', specialite: 'Pédiatrie', horaire: '18h00 - 8h00' },
    { jour: 'Mercredi', medecin: 'Dr. Marie ADJOVI', specialite: 'Ophtalmologie', horaire: '17h00 - 8h00' },
    { jour: 'Jeudi', medecin: 'Dr. Florence AHONON', specialite: 'Gynécologie', horaire: '18h00 - 8h00' },
    { jour: 'Vendredi', medecin: 'Dr. Christelle DANSOU', specialite: 'Cardiologie', horaire: '17h00 - 9h00' },
    { jour: 'Week-end', medecin: 'Médecin de garde', specialite: 'Urgences générales', horaire: '24h/24' }
  ];

  return (
    <div className="min-h-screen bg-medical-gray-light">
      {/* Header Section */}
      <section className="bg-medical-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Horaires & Planning</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Consultez les horaires de notre clinique et de nos médecins spécialisés 
              pour planifier votre visite au meilleur moment.
            </p>
          </div>
        </div>
      </section>

      {/* Horaires généraux */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-blue mb-4">Horaires de la Clinique</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(horairesClinique).map(([jour, horaire], index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg animate-fade-in ${
                  jour === 'Urgences' 
                    ? 'bg-medical-green text-white' 
                    : 'bg-white text-medical-blue'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <Clock className={`h-8 w-8 mx-auto mb-4 ${
                    jour === 'Urgences' ? 'text-white' : 'text-medical-blue'
                  }`} />
                  <h3 className="text-xl font-bold mb-2">{jour}</h3>
                  <p className={`text-lg ${
                    jour === 'Urgences' ? 'text-white' : 'text-medical-gray-medium'
                  }`}>
                    {horaire}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Alerte importante */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16 animate-fade-in">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> Les horaires peuvent varier selon les jours fériés. 
                  Nous vous recommandons d'appeler avant votre visite pour confirmer la disponibilité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires des médecins */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-blue mb-4">Planning des Médecins</h2>
            <p className="text-xl text-medical-gray-medium">
              Horaires de consultation de nos médecins spécialisés
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {horairesMedecins.map((medecin, index) => (
              <div
                key={index}
                className="bg-medical-gray-light border-2 border-medical-blue/20 rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-medical-blue text-white p-3 rounded-full mr-4">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-medical-blue">{medecin.nom}</h3>
                    <p className="text-medical-green font-semibold">{medecin.specialite}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {Object.entries(medecin.horaires).map(([jour, horaire]) => (
                    <div key={jour} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-medical-blue">{jour}</span>
                      <span className="text-medical-gray-medium">{horaire}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link
                    to="/rendez-vous"
                    className="bg-medical-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-medical-green-light transition-colors"
                  >
                    Prendre RDV
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Médecins de garde */}
      <section className="py-20 bg-medical-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Médecins de Garde</h2>
            <p className="text-xl text-blue-200">
              Planning des médecins disponibles en dehors des heures d'ouverture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {garde.map((g, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-4 text-medical-green" />
                  <h3 className="text-xl font-bold mb-2">{g.jour}</h3>
                  <p className="text-lg font-semibold text-blue-200 mb-1">{g.medecin}</p>
                  <p className="text-blue-300 mb-3">{g.specialite}</p>
                  <p className="text-white font-medium">{g.horaire}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-medical-green/20 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
              <Phone className="h-12 w-12 mx-auto mb-4 text-medical-green" />
              <h3 className="text-2xl font-bold mb-4">Contact Urgences</h3>
              <p className="text-blue-200 mb-6">
                Pour toute urgence médicale, contactez directement notre ligne d'urgence disponible 24h/24.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+229XXXXXXXX"
                  className="bg-medical-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-medical-green-light transition-colors"
                >
                  Appeler Urgences
                </a>
                <Link
                  to="/urgences"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-medical-blue transition-colors"
                >
                  Infos Urgences
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Horaires;
