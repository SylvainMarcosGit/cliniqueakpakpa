
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone } from 'lucide-react';

const Medecins = () => {
  const medecins = [
    {
      nom: 'Dr. Marie ADJOVI',
      specialite: 'Ophtalmologue',
      experience: '15 ans d\'expérience',
      diplomes: ['Doctorat en Médecine - Université d\'Abomey-Calavi', 'Spécialisation en Ophtalmologie - France'],
      horaires: 'Lun-Ven: 8h-17h, Sam: 8h-12h',
      localisation: 'Cabinet 1',
      photo: '/placeholder.svg',
      bio: 'Spécialiste reconnue en ophtalmologie, Dr. ADJOVI traite tous les troubles de la vision avec expertise et bienveillance.',
      competences: ['Chirurgie de la cataracte', 'Traitement du glaucome', 'Chirurgie réfractive', 'Rétinologie']
    },
    {
      nom: 'Dr. Jean KOSSOU',
      specialite: 'Médecin Généraliste',
      experience: '20 ans d\'expérience',
      diplomes: ['Doctorat en Médecine - Université d\'Abomey-Calavi', 'Formation continue en Médecine Familiale'],
      horaires: 'Lun-Sam: 7h-19h',
      localisation: 'Cabinet 2',
      photo: '/placeholder.svg',
      bio: 'Médecin de famille dévoué, Dr. KOSSOU accompagne ses patients dans tous les aspects de leur santé.',
      competences: ['Médecine préventive', 'Gestion des maladies chroniques', 'Médecine d\'urgence', 'Santé familiale']
    },
    {
      nom: 'Dr. Florence AHONON',
      specialite: 'Gynécologue-Obstétricienne',
      experience: '12 ans d\'expérience',
      diplomes: ['Doctorat en Médecine - Université de Lomé', 'Spécialisation en Gynécologie-Obstétrique'],
      horaires: 'Mar-Sam: 8h-18h',
      localisation: 'Cabinet 3',
      photo: '/placeholder.svg',
      bio: 'Experte en santé féminine, Dr. AHONON accompagne les femmes à chaque étape de leur vie.',
      competences: ['Suivi de grossesse', 'Accouchement', 'Chirurgie gynécologique', 'Planification familiale']
    },
    {
      nom: 'Dr. Paul AGBODJAN',
      specialite: 'Pédiatre',
      experience: '10 ans d\'expérience',
      diplomes: ['Doctorat en Médecine - Université d\'Abomey-Calavi', 'Spécialisation en Pédiatrie - Sénégal'],
      horaires: 'Lun-Ven: 8h-16h, Sam: 8h-14h',
      localisation: 'Cabinet Pédiatrique',
      photo: '/placeholder.svg',
      bio: 'Passionné par la santé des enfants, Dr. AGBODJAN offre des soins personnalisés et attentionnés.',
      competences: ['Néonatologie', 'Pédiatrie générale', 'Vaccination', 'Suivi de croissance']
    },
    {
      nom: 'Dr. Christelle DANSOU',
      specialite: 'Cardiologue',
      experience: '8 ans d\'expérience',
      diplomes: ['Doctorat en Médecine - Université d\'Abomey-Calavi', 'Spécialisation en Cardiologie - Maroc'],
      horaires: 'Mer-Ven: 9h-17h, Sam: 9h-13h',
      localisation: 'Service Cardiologie',
      photo: '/placeholder.svg',
      bio: 'Spécialiste du cœur, Dr. DANSOU met son expertise au service de la santé cardiovasculaire.',
      competences: ['Échocardiographie', 'ECG', 'Holter cardiaque', 'Prévention cardiovasculaire']
    },
    {
      nom: 'Dr. Médard HOUNKPE',
      specialite: 'Chirurgien',
      experience: '18 ans d\'expérience',
      diplomes: ['Doctorat en Médecine - Université d\'Abomey-Calavi', 'Spécialisation en Chirurgie Générale'],
      horaires: 'Lun-Jeu: 8h-16h, Urgences 24h/24',
      localisation: 'Bloc Opératoire',
      photo: '/placeholder.svg',
      bio: 'Chirurgien expérimenté, Dr. HOUNKPE réalise des interventions avec précision et sécurité.',
      competences: ['Chirurgie générale', 'Chirurgie d\'urgence', 'Laparoscopie', 'Petite chirurgie']
    }
  ];

  return (
    <div className="min-h-screen bg-medical-gray-light">
      {/* Header Section */}
      <section className="bg-medical-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Notre Équipe Médicale</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Découvrez nos médecins spécialisés, une équipe de professionnels expérimentés 
              dédiés à votre bien-être et à votre santé.
            </p>
          </div>
        </div>
      </section>

      {/* Médecins Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {medecins.map((medecin, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Photo du médecin */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-medical-blue to-medical-blue-light rounded-full flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">
                          {medecin.nom.split(' ')[1]?.charAt(0) || 'Dr'}
                        </span>
                      </div>
                    </div>

                    {/* Informations du médecin */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-medical-blue">{medecin.nom}</h3>
                        <p className="text-lg text-medical-green font-semibold">{medecin.specialite}</p>
                        <p className="text-medical-gray-medium">{medecin.experience}</p>
                      </div>

                      <p className="text-medical-gray-medium">{medecin.bio}</p>

                      {/* Horaires et localisation */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-medical-green" />
                          <span>{medecin.horaires}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-medical-green" />
                          <span>{medecin.localisation}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compétences */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-medical-blue mb-3">Domaines d'expertise :</h4>
                    <div className="flex flex-wrap gap-2">
                      {medecin.competences.map((competence, idx) => (
                        <span
                          key={idx}
                          className="bg-medical-blue/10 text-medical-blue px-3 py-1 rounded-full text-sm"
                        >
                          {competence}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Formation */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-medical-blue mb-3">Formation :</h4>
                    <ul className="space-y-1">
                      {medecin.diplomes.map((diplome, idx) => (
                        <li key={idx} className="text-sm text-medical-gray-medium flex items-center">
                          <span className="w-2 h-2 bg-medical-green rounded-full mr-3 flex-shrink-0"></span>
                          {diplome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Boutons d'action */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/rendez-vous"
                      className="bg-medical-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-medical-green-light transition-colors text-center"
                    >
                      Prendre RDV
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-medical-blue text-medical-blue px-6 py-3 rounded-lg font-semibold hover:bg-medical-blue hover:text-white transition-colors text-center"
                    >
                      Contacter
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section informative */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white p-12 rounded-3xl animate-fade-in">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Une équipe à votre écoute</h2>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                Nos médecins conjuguent expertise technique et approche humaine pour vous offrir 
                des soins personnalisés et de qualité.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Formation continue</h3>
                  <p className="text-blue-200">Nos médecins se forment régulièrement aux dernières avancées</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Approche humaine</h3>
                  <p className="text-blue-200">Une prise en charge personnalisée et bienveillante</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Équipements modernes</h3>
                  <p className="text-blue-200">Technologies de pointe pour des diagnostics précis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medecins;
