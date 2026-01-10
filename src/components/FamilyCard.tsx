import { Link } from "react-router-dom";

interface FamilyCardProps {
  name: string;
  relation: string;
  image: string;
  link: string;
}

const FamilyCard = ({ name, relation, image, link }: FamilyCardProps) => {
  return (
    <Link
      to={link}
      className="group block p-6 rounded-2xl bg-gradient-to-br from-card/60 via-card/40 to-card/60 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:border-yellow-400/80 hover:bg-gradient-to-br hover:from-yellow-500/20 hover:via-orange-500/10 hover:to-pink-500/20 relative overflow-hidden"
    >
      {/* Animated glow ring on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-pink-400/20 animate-pulse" />
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
      </div>
      
      <div className="flex flex-col items-center gap-4 relative z-10">
        {/* Photo with rotating border */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500" style={{ animationDuration: '3s' }} />
          <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-primary/50 group-hover:border-yellow-400 transition-all duration-500 relative bg-background">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
            />
          </div>
          {/* Sparkle effects */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{ animationDelay: '0.2s' }} />
        </div>
        
        <div className="text-center">
          <h3 className="font-bold text-lg text-foreground group-hover:text-yellow-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-yellow-200/80 transition-colors duration-300 mt-1">
            {relation}
          </p>
        </div>
        
        {/* Arrow indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-yellow-400 text-sm font-semibold">Click to view →</span>
        </div>
      </div>
    </Link>
  );
};

export default FamilyCard;
