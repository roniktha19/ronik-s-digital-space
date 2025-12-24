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
      className="group block p-4 rounded-xl bg-card/50 border border-border hover:bg-card/80 transition-all duration-300 hover-scale hover-glow"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{relation}</p>
        </div>
      </div>
    </Link>
  );
};

export default FamilyCard;
