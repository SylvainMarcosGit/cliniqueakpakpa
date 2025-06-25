
import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const RendezVous = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    dateNaissance: '',
    medecin: '',
    service: '',
    dateRdv: '',
    heureRdv: '',
    motif: ''
  });

  const { toast } = useToast();

  const medecins = [
    'Dr. Marie ADJOVI - Ophtalmologie',
    'Dr. Jean KOSSOU - Médecine Générale',
    'Dr. Florence AHONON - Gynécologie-Obstétrique',
    'Dr. Paul AGBODJAN - Pédiatrie',
    'Dr. Christelle DANSOU - Cardiologie',
    'Dr. Médard HOUNKPE - Chirurgie'
  ];

  const services = [
    'Consultation Générale',
    'Consultation Spécialisée',
    'Échographie',
    'Analyses de Laboratoire',
    'ECG',
    'Petit Examen',
    'Suivi Médical'
  ];

  const creneaux = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rendez-vous demandé:', formData);
    toast({
      title: "Demande de rendez-vous envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous.",
    });
    setFormData({
      nom: '', prenom: '', telephone: '', email: '', dateNaissance: '',
      medecin: '', service: '', dateRdv: '', heureRdv: '', motif: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-medical-gray-light">
      {/* Header Section */}
      <section className="bg-medical-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Calendar className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Prendre Rendez-vous</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Planifiez votre consultation avec nos médecins spécialisés. 
              Remplissez le formulaire ci-dessous et nous vous confirmerons votre rendez-vous rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de rendez-vous */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-medical-blue mb-8 text-center">
                Demande de Rendez-vous
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations personnelles */}
                <div>
                  <h3 className="text-xl font-semibold text-medical-blue mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Informations personnelles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Nom *
                      </label>
                      <Input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Prénom *
                      </label>
                      <Input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Téléphone *
                      </label>
                      <Input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        placeholder="+229 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Date de naissance
                      </label>
                      <Input
                        type="date"
                        name="dateNaissance"
                        value={formData.dateNaissance}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Informations du rendez-vous */}
                <div>
                  <h3 className="text-xl font-semibold text-medical-blue mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Détails du rendez-vous
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Médecin souhaité
                      </label>
                      <select
                        name="medecin"
                        value={formData.medecin}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      >
                        <option value="">Sélectionner un médecin</option>
                        {medecins.map((medecin, index) => (
                          <option key={index} value={medecin}>{medecin}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Type de consultation
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      >
                        <option value="">Sélectionner un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Date souhaitée *
                      </label>
                      <Input
                        type="date"
                        name="dateRdv"
                        value={formData.dateRdv}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-medical-blue mb-2">
                        Heure souhaitée
                      </label>
                      <select
                        name="heureRdv"
                        value={formData.heureRdv}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      >
                        <option value="">Sélectionner une heure</option>
                        {creneaux.map((heure, index) => (
                          <option key={index} value={heure}>{heure}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Motif de consultation */}
                <div>
                  <label className="block text-sm font-medium text-medical-blue mb-2">
                    Motif de consultation (optionnel)
                  </label>
                  <Textarea
                    name="motif"
                    value={formData.motif}
                    onChange={handleChange}
                    className="w-full h-24"
                    placeholder="Décrivez brièvement le motif de votre consultation..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-medical-green hover:bg-medical-green-light text-white px-12 py-4 text-lg font-semibold"
                  >
                    Demander un Rendez-vous
                  </Button>
                </div>
              </form>
            </div>

            {/* Informations pratiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-medical-blue text-white rounded-2xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Phone className="h-6 w-6 mr-2" />
                  Contact Direct
                </h3>
                <p className="text-blue-200 mb-4">
                  Vous pouvez aussi nous appeler directement pour prendre rendez-vous :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">+229 XX XX XX XX</p>
                  <p className="text-blue-200">Lundi - Samedi : 7h00 - 19h00</p>
                </div>
              </div>

              <div className="bg-medical-green text-white rounded-2xl p-8 animate-slide-in">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Délai de Confirmation
                </h3>
                <p className="text-green-100 mb-4">
                  Nous confirmons généralement vos rendez-vous dans les :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">2 à 4 heures ouvrables</p>
                  <p className="text-green-100">Par téléphone ou SMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RendezVous;
