import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border hover:bg-card/80 transition-all duration-300 hover-scale text-foreground"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back Home</span>
    </Link>
  );
};

export default BackButton;
