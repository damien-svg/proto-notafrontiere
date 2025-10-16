import { useState } from "react";
import NotaryCard from "@/components/NotaryCard";
import AppointmentIframe from "@/components/AppointmentIframe";
import { Calendar } from "lucide-react";

const notaries = [
  { id: 1, name: "Maître Fabien BRUGO" },
  { id: 2, name: "Maître Lionel DUARTE-FERREIRA" },
  { id: 3, name: "Maître Noémie BOUCHET" },
];

const Index = () => {
  const [selectedNotary, setSelectedNotary] = useState<number | null>(null);

  const handleNotarySelect = (id: number) => {
    setSelectedNotary(id);
    // Smooth scroll to iframe section
    setTimeout(() => {
      const iframeSection = document.getElementById('appointment-section');
      if (iframeSection) {
        iframeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const selectedNotaryData = notaries.find(n => n.id === selectedNotary);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite-light/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-6 shadow-gold">
            <Calendar className="w-8 h-8 text-anthracite" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Prendre
            <span className="block text-gradient-gold mt-2">Rendez-vous</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Située à deux pas de Genève, notre Étude vous accompagne dans vos projets patrimoniaux en France, en Suisse et à l'international.
          </p>
        </div>
      </section>

      {/* Notaries Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Choisissez votre notaire
            </h2>
            <p className="text-muted-foreground">
              Sélectionnez le notaire avec qui vous souhaitez prendre rendez-vous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {notaries.map((notary) => (
              <NotaryCard
                key={notary.id}
                name={notary.name}
                isSelected={selectedNotary === notary.id}
                onSelect={() => handleNotarySelect(notary.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Iframe Section */}
      {selectedNotary && selectedNotaryData && (
        <section 
          id="appointment-section" 
          className="py-16 px-4 scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto">
            <AppointmentIframe notaryName={selectedNotaryData.name} />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            <span className="font-serif text-primary font-semibold">NOTA FRONTIÈRE</span>
            <span className="mx-2">•</span>
            Votre notaire à Saint-Julien-en-Genevois
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
