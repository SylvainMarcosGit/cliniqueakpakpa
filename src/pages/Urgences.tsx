
import React from 'react';
import { Phone, Clock, AlertTriangle, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Urgences = () => {
  const urgencesMedicales = [
    {
      titre: 'Urgences Vitales',
      description: 'Situations mettant la vie en danger immédiat',
      exemples: ['Arrêt cardiaque', 'Difficultés respiratoires sévères', 'Hémorragies importantes', 'Perte de conscience'],
      icon: '⚠️',
      couleur: 'bg-red-50 border-red-200'
    },
    {
      titre: 'Urgences Graves',
      description: 'Situations nécessitant une prise en charge rapide',
      exemples: ['Douleurs thoraciques', 'Traumatismes importants', 'Brûlures étendues', 'Intoxications'],
      icon: '🚨',
      couleur: 'bg-orange-50 border-orange-200'
    },
    {
      titre: 'Urgences Obstétricales',
      description: 'Situations d\'urgence liées à la grossesse',
      exemples: ['Travail prématuré', 'Saignements importants', 'Complications de grossesse', 'Accouchement imminent'],
      icon: '🤱',
      couleur: 'bg-pink-50 border-pink-200'
    },
    {
      titre: 'Urgences Pédiatriques',
      description: 'Urgences spécifiques aux enfants',
      exemples: ['Fièvre élevée chez nourrisson', 'Convulsions', 'Difficultés respiratoires', 'Déshydratation sévère'],
      icon: '👶',
      couleur: 'bg-blue-50 border-blue-200'
    }
  ];

  const procedureUrgence = [
    {
      etape: '1',
      titre: 'Évaluation initiale',
      description: 'Évaluation rapide de l\'état du patient par notre équipe d\'accueil spécialisée'
    },
    {
      etape: '2',
      titre: 'Triage médical',
      description: 'Classification selon la gravité et orientation vers le service approprié'
    },
    {
      etape: '3',
      titre: 'Prise en charge',
      description: 'Intervention médicale immédiate par nos médecins d\'urgence'
    },
    {
      etape: '4',
      titre: 'Suivi',
      description: 'Surveillance continue et orientation vers les services spécialisés si nécessaire'
    }
  ];

  const equipements = [
    'Défibrillateur automatique',
    'Moniteurs de surveillance',
    'Respirateurs d\'urgence',
    'Matériel de réanimation',
    'Échographe portable',
    'Laboratoire d\'urgence',
    'Pharmacie d\'urgence',
    'Ambulance équipée'
  ];

  return (
    <div className="min-h-screen bg-medical-gray-light">
      {/* Header Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Service d'Urgences</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Notre service d'urgences est disponible 24h/24 et 7j/7 pour prendre en charge 
              toutes vos urgences médicales avec rapidité et professionnalisme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+229XXXXXXXX"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors flex items-center justify-center"
              >
                <Phone className="h-6 w-6 mr-2" />
                Appeler Urgences
              </a>
              <div className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                24h/24 - 7j/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'urgences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-blue mb-4">Types d'Urgences Prises en Charge</h2>
            <p className="text-xl text-medical-gray-medium">
              Notre équipe est formée pour gérer tous types d'urgences médicales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {urgencesMedicales.map((urgence, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl p-8 animate-fade-in ${urgence.couleur}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{urgence.icon}</div>
                  <h3 className="text-2xl font-bold text-medical-blue mb-2">{urgence.titre}</h3>
                  <p className="text-medical-gray-medium">{urgence.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-medical-blue mb-3">Exemples :</h4>
                  <ul className="space-y-2">
                    {urgence.exemples.map((exemple, idx) => (
                      <li key={idx} className="text-medical-gray-medium flex items-center">
                        <span className="w-2 h-2 bg-medical-blue rounded-full mr-3"></span>
                        {exemple}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procédure d'urgence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-blue mb-4">Procédure d'Urgence</h2>
            <p className="text-xl text-medical-gray-medium">
              Comment nous prenons en charge vos urgences médicales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureUrgence.map((procedure, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-medical-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {procedure.etape}
                </div>
                <h3 className="text-xl font-bold text-medical-blue mb-3">{procedure.titre}</h3>
                <p className="text-medical-gray-medium">{procedure.description}</p>
                {index < procedureUrgence.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-medical-blue transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipements et équipe */}
      <section className="py-20 bg-medical-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Équipements */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8">Équipements d'Urgence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipements.map((equipement, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center"
                  >
                    <div className="w-3 h-3 bg-medical-green rounded-full mr-3"></div>
                    <span>{equipement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Équipe */}
            <div className="animate-slide-in">
              <h2 className="text-3xl font-bold mb-8">Notre Équipe d'Urgence</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <User className="h-8 w-8 mr-3 text-medical-green" />
                    <h3 className="text-xl font-bold">Médecins Urgentistes</h3>
                  </div>
                  <p className="text-blue-200">
                    Médecins spécialisés dans la prise en charge des urgences, 
                    disponibles 24h/24 pour évaluer et traiter rapidement les patients.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <User className="h-8 w-8 mr-3 text-medical-green" />
                    <h3 className="text-xl font-bold">Infirmiers Spécialisés</h3>
                  </div>
                  <p className="text-blue-200">
                    Équipe d'infirmiers expérimentés en soins d'urgence, 
                    formés aux gestes de premiers secours et à la réanimation.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <User className="h-8 w-8 mr-3 text-medical-green" />
                    <h3 className="text-xl font-bold">Personnel Technique</h3>
                  </div>
                  <p className="text-blue-200">
                    Techniciens de laboratoire et radiologues disponibles 
                    pour les examens d'urgence et diagnostics rapides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils et contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Conseils */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-medical-blue mb-6">Conseils Importants</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-medical-blue">En cas d'urgence vitale</h3>
                    <p className="text-medical-gray-medium">Appelez immédiatement le service d'urgence ou venez directement à la clinique.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-medical-blue">Apportez vos documents</h3>
                    <p className="text-medical-gray-medium">Carte d'identité, carnet de santé, ordonnances en cours, et assurance maladie.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-medical-blue">Contactez-nous</h3>
                    <p className="text-medical-gray-medium">En cas de doute, n'hésitez pas à nous appeler pour des conseils médicaux.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact urgences */}
            <div className="bg-medical-green text-white rounded-2xl p-8 animate-slide-in">
              <h2 className="text-3xl font-bold mb-6">Contact Urgences</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-bold">Ligne d'Urgence</h3>
                    <p className="text-green-100">+229 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-bold">Adresse</h3>
                    <p className="text-green-100">...<br />Cotonou, Bénin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-bold">Disponibilité</h3>
                    <p className="text-green-100">24 heures sur 24<br />7 jours sur 7</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  to="/contact"
                  className="bg-white text-medical-green px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Autres Contacts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Urgences;
