import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import notaryProfile from "@/assets/notary-profile.jpg";

interface NotaryCardProps {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
}

const NotaryCard = ({ name, isSelected, onSelect }: NotaryCardProps) => {
  return (
    <Card 
      className={`
        relative overflow-hidden cursor-pointer h-full
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-elegant
        ${isSelected 
          ? 'bg-gradient-gold shadow-gold ring-2 ring-primary' 
          : 'bg-card hover:bg-secondary'
        }
      `}
      onClick={onSelect}
    >
      <div className="p-8 flex flex-col items-center text-center space-y-4 h-full">
        <div className={`
          w-20 h-20 rounded-full overflow-hidden
          transition-all duration-500
          ${isSelected 
            ? 'ring-4 ring-primary shadow-gold' 
            : 'ring-2 ring-border'
          }
        `}>
          <img 
            src={notaryProfile} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-2 flex-grow flex flex-col justify-center">
          <h3 className={`
            font-serif text-xl font-semibold
            transition-colors duration-300
            ${isSelected ? 'text-primary-foreground' : 'text-foreground'}
          `}>
            {name}
          </h3>
          
          <p className={`
            text-sm
            ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}
          `}>
            Notaire
          </p>
        </div>
        
        <Button
          variant={isSelected ? "secondary" : "outline"}
          className={`
            mt-4 w-full
            ${isSelected 
              ? 'bg-anthracite hover:bg-anthracite-light text-primary' 
              : ''
            }
          `}
        >
          {isSelected ? 'Sélectionné' : 'Sélectionner'}
        </Button>
      </div>
      
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-gold opacity-10 pointer-events-none" />
      )}
    </Card>
  );
};

export default NotaryCard;
