import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import notaryProfile from "@/assets/notary-profile.jpg";

interface AppointmentIframeProps {
  notaryName: string;
}

const AppointmentIframe = ({ notaryName }: AppointmentIframeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear existing content
      containerRef.current.innerHTML = '';
      
      // Create the container div
      const allawContainer = document.createElement('div');
      allawContainer.id = 'allaw-container';
      
      // Create and append the script
      const script = document.createElement('script');
      script.src = "https://allaw.fr/embed.js?profession=notaire&profile=noémie_bouchet_d0c";
      script.async = true;
      
      allawContainer.appendChild(script);
      containerRef.current.appendChild(allawContainer);
    }
  }, [notaryName]);

  return (
    <Card className="bg-card border-border overflow-hidden shadow-elegant">
      <div className="p-8">
        <div className="mb-6 flex items-center justify-center gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary shadow-gold flex-shrink-0 animate-fade-in">
            <img 
              src={notaryProfile} 
              alt={notaryName}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-left">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
              Prendre rendez-vous
            </h3>
            <p className="text-muted-foreground">
              avec {notaryName}
            </p>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="min-h-[600px] rounded-lg overflow-hidden"
        />
      </div>
    </Card>
  );
};

export default AppointmentIframe;
