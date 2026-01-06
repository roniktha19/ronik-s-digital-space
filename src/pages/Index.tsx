import { Link } from "react-router-dom";
import { Gamepad2, Zap, Star, Triangle } from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import ProfilePhoto from "@/components/ProfilePhoto";
import FamilyCard from "@/components/FamilyCard";
import myImage from "@/assets/my_image.jpeg";
import brotherImage from "@/assets/brother.jpeg";
import momImage from "@/assets/mom.png";
import dadImage from "@/assets/dad.jpg";
import geometryDashImage from "@/assets/geometry-dash.png";

const Index = () => {
  return (
    <div className="min-h-screen pb-12">
      <HamburgerMenu />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-md mx-auto flex flex-col items-center text-center animate-fade-in">
          <div className="relative group">
            <ProfilePhoto src={myImage} alt="Ronik Thapa Chhetri" />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10 group-hover:bg-primary/40 transition-all duration-500 animate-pulse" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hello, I am <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Ronik Thapa Chhetri!</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A 12-year-old student from Nepal who loves cycling, drawing, and exploring the world of computers!
          </p>
        </div>
      </section>

      {/* Family Section */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6 animate-fade-in">
            My Family
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
              <FamilyCard
                name="Reejan"
                relation="Brother"
                image={brotherImage}
                link="/family/brother"
              />
            </div>
            <div className="animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <FamilyCard
                name="Ritu"
                relation="Mom"
                image={momImage}
                link="/family/mom"
              />
            </div>
            <div className="animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
              <FamilyCard
                name="Kiran"
                relation="Dad"
                image={dadImage}
                link="/family/dad"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geometry Dash Section */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6 animate-fade-in">
            Geometry Dash
          </h2>
          <Link
            to="/games"
            className="group block rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-primary/30 hover:border-primary/50 bg-gradient-to-br from-card/80 to-primary/10 p-6 transition-all duration-300 hover:scale-[1.02] relative animate-fade-in"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Star className="absolute top-4 left-4 w-4 h-4 text-yellow-400 animate-pulse" />
              <Zap className="absolute top-6 right-8 w-5 h-5 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Triangle className="absolute bottom-8 left-8 w-4 h-4 text-green-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              <Star className="absolute bottom-4 right-4 w-3 h-3 text-yellow-400 animate-ping" style={{ animationDelay: '0.6s' }} />
            </div>
            
            <div className="flex flex-col items-center gap-4 relative z-10">
              <div className="relative">
                <img 
                  src={geometryDashImage} 
                  alt="Geometry Dash" 
                  className="w-24 h-24 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Play Geometry Dash
              </h3>
              <p className="text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                Click to play my favorite rhythm-based platformer game!
              </p>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                Start Playing →
              </span>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Index;