
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Ophtalmologie',
      description: 'Consultations spécialisées pour la santé de vos yeux, examens de la vue, traitement des pathologies oculaires.',
      details: ['Examen de la vue', 'Traitement du glaucome', 'Chirurgie de la cataracte', 'Correction de la myopie'],
      icon: '👁️',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Médecine Générale',
      description: 'Consultations médicales générales, bilans de santé, suivi médical et prévention.',
      details: ['Consultations générales', 'Bilans de santé', 'Vaccinations', 'Certificats médicaux'],
      icon: '🩺',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Consultation Prénatale et Post-Natale',
      description: 'Suivi médical complet de la grossesse et accompagnement après l\'accouchement.',
      details: ['Suivi de grossesse', 'Échographies prénatales', 'Consultations post-natales', 'Conseils en allaitement'],
      icon: '🤰',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      title: 'Gynécologie',
      description: 'Soins spécialisés en santé féminine, consultations gynécologiques et dépistages.',
      details: ['Consultations gynécologiques', 'Dépistage cancer du col', 'Contraception', 'Troubles menstruels'],
      icon: '🌸',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Obstétrique',
      description: 'Prise en charge complète de la grossesse, de l\'accouchement et du post-partum.',
      details: ['Suivi de grossesse', 'Accouchement assisté', 'Césariennes', 'Soins post-partum'],
      icon: '👶',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Échographie',
      description: 'Examens échographiques de haute qualité pour diagnostic et suivi médical.',
      details: ['Échographie abdominale', 'Échographie pelvienne', 'Échographie obstétricale', 'Doppler vasculaire'],
      icon: '📡',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Accouchement',
      description: 'Accompagnement personnalisé pour votre accouchement dans un environnement sécurisé.',
      details: ['Accouchement naturel', 'Césarienne programmée', 'Surveillance fœtale', 'Anesthésie péridurale'],
      icon: '🍼',
      color: 'bg-teal-50 border-teal-200'
    },
    {
      title: 'Pédiatrie',
      description: 'Soins médicaux spécialisés pour nourrissons, enfants et adolescents.',
      details: ['Consultations pédiatriques', 'Vaccinations infantiles', 'Suivi de croissance', 'Urgences pédiatriques'],
      icon: '🧸',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Laboratoire d\'Analyses Biomédicales',
      description: 'Analyses biologiques complètes avec résultats rapides et fiables.',
      details: ['Analyses sanguines', 'Analyses d\'urine', 'Microbiologie', 'Biochimie clinique'],
      icon: '🔬',
      color: 'bg-red-50 border-red-200'
    },
    {
      title: 'ECG (Électrocardiogramme)',
      description: 'Examens cardiaques pour évaluer le rythme et l\'activité électrique du cœur.',
      details: ['ECG de repos', 'ECG d\'effort', 'Surveillance cardiaque', 'Dépistage arythmies'],
      icon: '📈',
      color: 'bg-cyan-50 border-cyan-200'
    },
    {
      title: 'Cardiologie',
      description: 'Consultation et traitement des maladies cardiovasculaires par nos cardiologues.',
      details: ['Consultations cardiologiques', 'Échocardiographie', 'Holter ECG', 'Prévention cardiovasculaire'],
      icon: '❤️',
      color: 'bg-rose-50 border-rose-200'
    },
    {
      title: 'Petite Chirurgie',
      description: 'Interventions chirurgicales mineures en ambulatoire dans nos blocs opératoires.',
      details: ['Biopsies', 'Ablation de kystes', 'Circoncision', 'Sutures complexes'],
      icon: '🏥',
      color: 'bg-gray-50 border-gray-200'
    }
  ];

  return (
    <div className="min-h-screen bg-medical-gray-light">
      {/* Header Section */}
      <section className="bg-medical-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Nos Services Médicaux</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              La Clinique offre une gamme complète de services médicaux 
              avec des équipements modernes et une équipe de professionnels expérimentés.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 ${service.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="text-5xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-medical-blue mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-medical-gray-medium mb-6 text-center">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-medical-blue">Nos prestations :</h4>
                    <ul className="space-y-1">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-medical-gray-medium flex items-center">
                          <span className="w-2 h-2 bg-medical-green rounded-full mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/rendez-vous"
                      className="bg-medical-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-medical-green-light transition-colors"
                    >
                      Prendre RDV
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white p-12 rounded-3xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Besoin d'une consultation ?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Notre équipe médicale est disponible pour répondre à vos besoins de santé. 
              Prenez rendez-vous dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/rendez-vous"
                className="bg-medical-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-medical-green-light transition-colors"
              >
                Prendre Rendez-vous
              </Link>
              <Link
                to="/medecins"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-medical-blue transition-colors"
              >
                Voir nos Médecins
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
