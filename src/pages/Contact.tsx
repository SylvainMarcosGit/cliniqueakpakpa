
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos démarches de santé.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-medical-blue mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-medical-blue mb-2">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-medical-blue mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-medical-blue mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-medical-blue mb-2">
                    Sujet
                  </label>
                  <Input
                    type="text"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-medical-blue mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32"
                    placeholder="Décrivez votre demande ou vos questions..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-medical-green hover:bg-medical-green-light text-white py-3 text-lg font-semibold"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8 animate-slide-in">
              {/* Carte des informations */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-medical-blue mb-6">Nos coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-blue/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-blue">Adresse</h3>
                      <p className="text-medical-gray-medium">
                       <br />
                        Cotonou, République du Bénin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-blue/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-blue">Téléphone</h3>
                      <p className="text-medical-gray-medium">
                        Accueil: +229 XX XX XX XX<br />
                        Urgences: +229 XX XX XX XX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-blue/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-blue">Email</h3>
                      <p className="text-medical-gray-medium">
                        contact@clinique.com<br />
                        info@clinique.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-blue/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-blue">Horaires</h3>
                      <p className="text-medical-gray-medium">
                        Ouvert 24h/24 - 7j/7<br />
                        Urgences disponibles
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte interactive (placeholder) */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-medical-blue mb-4">Nous localiser</h3>
                <div className="bg-gradient-to-br from-medical-blue/10 to-medical-green/10 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-medical-blue mx-auto mb-4" />
                    <p className="text-medical-blue font-semibold">Carte interactive</p>
                    <p className="text-medical-gray-medium text-sm">
                      Clinique<br />
                      Cotonou, Bénin
                    </p>
                  </div>
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Informations pratiques</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Parking gratuit disponible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Accès handicapés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Transport public à proximité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Pharmacie sur place</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
