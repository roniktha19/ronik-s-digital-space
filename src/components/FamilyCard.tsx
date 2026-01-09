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
      className="group block p-6 rounded-2xl bg-gradient-to-br from-card/60 via-card/40 to-secondary/30 border-2 border-primary/30 family-card-hover"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-50 blur-sm" 
               style={{ padding: '4px', animationDuration: '4s' }} />
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-primary/70 transition-all duration-500 group-hover:border-[hsl(45_100%_50%)]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          {/* Floating stickers */}
          <span className="absolute -top-2 -right-2 text-2xl sticker">
            {relation === "Brother" ? "👦" : relation === "Mom" ? "👩" : "👨"}
          </span>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg text-foreground transition-colors duration-300 flex items-center justify-center gap-2">
            {name}
            <span className="text-xl heartbeat">
              {relation === "Mom" ? "❤️" : relation === "Dad" ? "💪" : "🎮"}
            </span>
          </h3>
          <p className="text-sm text-muted-foreground transition-colors duration-300 mt-1">
            {relation}
          </p>
        </div>
        {/* View button */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 group-hover:from-[hsl(45_100%_50%_/_0.3)] group-hover:to-[hsl(45_80%_60%_/_0.3)] group-hover:text-[hsl(45_100%_50%)] group-hover:border-[hsl(45_100%_50%)] transition-all duration-300">
          View Details ✨
        </span>
      </div>
    </Link>
  );
};

export default FamilyCard;