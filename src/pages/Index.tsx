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
    <div className="min-h-screen pb-12 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl float" style={{ animationDelay: '0.5s' }} />
      </div>

      <HamburgerMenu />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-md mx-auto flex flex-col items-center text-center animate-fade-in">
          <div className="relative group">
            <div className="glow-border rounded-full p-1">
              <ProfilePhoto src={myImage} alt="Ronik Thapa Chhetri" />
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10 group-hover:bg-primary/40 transition-all duration-500 color-pulse" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hello, I am <span className="rainbow-text font-extrabold">Ronik Thapa Chhetri!</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A 12-year-old student from Nepal who loves cycling, drawing, and exploring the world of computers!
          </p>
        </div>
      </section>

      {/* Family Section */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6 animate-fade-in neon-glow">
            My Family
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="animate-fade-in hover:scale-105 transition-transform duration-300 shimmer rounded-xl" style={{ animationDelay: '0.1s' }}>
              <FamilyCard
                name="Reejan"
                relation="Brother"
                image={brotherImage}
                link="/family/brother"
              />
            </div>
            <div className="animate-fade-in hover:scale-105 transition-transform duration-300 shimmer rounded-xl" style={{ animationDelay: '0.2s' }}>
              <FamilyCard
                name="Ritu"
                relation="Mom"
                image={momImage}
                link="/family/mom"
              />
            </div>
            <div className="animate-fade-in hover:scale-105 transition-transform duration-300 shimmer rounded-xl" style={{ animationDelay: '0.3s' }}>
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
          <h2 className="text-2xl font-bold text-center text-foreground mb-6 animate-fade-in rainbow-text">
            Geometry Dash
          </h2>
          <Link
            to="/games"
            className="group block rounded-xl overflow-hidden gradient-animate p-1 transition-all duration-300 hover:scale-[1.02] relative animate-fade-in"
          >
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Star className="absolute top-4 left-4 w-4 h-4 text-yellow-400 float" />
                <Zap className="absolute top-6 right-8 w-5 h-5 text-primary color-pulse" style={{ animationDelay: '0.2s' }} />
                <Triangle className="absolute bottom-8 left-8 w-4 h-4 text-green-400 float" style={{ animationDelay: '0.4s' }} />
                <Star className="absolute bottom-4 right-4 w-3 h-3 text-yellow-400 animate-ping" style={{ animationDelay: '0.6s' }} />
                <Zap className="absolute top-1/2 left-6 w-3 h-3 text-purple-400 float" style={{ animationDelay: '0.8s' }} />
                <Star className="absolute top-8 left-1/2 w-4 h-4 text-pink-400 color-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="relative float">
                  <img 
                    src={geometryDashImage} 
                    alt="Geometry Dash" 
                    className="w-24 h-24 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors duration-300 color-pulse" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 neon-glow">
                  Play Geometry Dash
                </h3>
                <p className="text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">
                  Click to play my favorite rhythm-based platformer game!
                </p>
                <span className="px-4 py-2 gradient-animate text-white rounded-full text-sm font-medium shimmer">
                  Start Playing →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Index;