import { Link } from "react-router-dom";
import ProfilePhoto from "@/components/ProfilePhoto";
import FamilyCard from "@/components/FamilyCard";
import HamburgerMenu from "@/components/HamburgerMenu";
import ScrollSection from "@/components/ScrollSection";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";
import myImage from "@/assets/my_image.jpeg";
import brotherImage from "@/assets/brother.jpeg";
import momImage from "@/assets/mom.png";
import dadImage from "@/assets/dad.jpg";
import geometryDashImage from "@/assets/geometry-dash.png";
import { Gamepad2, Star, Zap, School, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      <HamburgerMenu />
      
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section - About Myself */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection animation="down">
            <div className="mb-8 relative inline-block glow-border color-pulse">
              <ProfilePhoto 
                src={myImage} 
                alt="My Photo" 
                size="lg"
              />
            </div>
          </ScrollSection>
          <ScrollSection animation="up" delay={200}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hello, I am <span className="rainbow-text">Ronik Thapa Chhetri!</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              A 12-year-old student from Nepal who loves cycling, drawing, and exploring the world of computers!
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-bold btn-glow shimmer"
            >
              <User className="w-5 h-5" />
              About Myself
            </Link>
          </ScrollSection>
        </div>
      </section>

      {/* Family Section */}
      <section id="family" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollSection animation="left">
            <h2 className="text-4xl font-bold text-center mb-4 rainbow-text">
              <span className="sticker">👨‍👩‍👦‍👦</span> My Family <span className="sticker">💖</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">Hover over the cards to see the magic! ✨</p>
          </ScrollSection>
          {/* Brother at top */}
          <ScrollSection animation="right" delay={100}>
            <div className="flex justify-center mb-8">
              <div className="shimmer rounded-2xl w-full max-w-xs">
                <FamilyCard
                  name="Reejan"
                  relation="Brother"
                  image={brotherImage}
                  link="/family/brother"
                />
              </div>
            </div>
          </ScrollSection>
          {/* Mom and Dad below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <ScrollSection animation="left" delay={200}>
              <div className="shimmer rounded-2xl">
                <FamilyCard
                  name="Ritu"
                  relation="Mom"
                  image={momImage}
                  link="/family/mom"
                />
              </div>
            </ScrollSection>
            <ScrollSection animation="right" delay={300}>
              <div className="shimmer rounded-2xl">
                <FamilyCard
                  name="Kiran"
                  relation="Dad"
                  image={dadImage}
                  link="/family/dad"
                />
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* My School Section */}
      <section id="my-school" className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection animation="up">
            <h2 className="text-4xl font-bold mb-8 rainbow-text">
              🏫 My School 🏫
            </h2>
          </ScrollSection>
          <ScrollSection animation="up" delay={200}>
            <div className="bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-teal-500/20 rounded-3xl p-8 glow-border">
              <div className="inline-flex items-center gap-3 bg-blue-500/20 px-6 py-3 rounded-full mb-4 color-pulse">
                <School className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-blue-300">
                  Gaidakot Namuna Secondary School
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                📍 Gaidakot Municipality, Nawalparasi (East), Nepal
              </p>
              <Link
                to="/school"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-primary-foreground px-8 py-4 rounded-full font-bold btn-glow shimmer"
              >
                <School className="w-5 h-5" />
                View School Details
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Geometry Dash Section */}
      <section id="geometry-dash" className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection animation="left">
            <h2 className="text-4xl font-bold mb-12 gradient-animate bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              Geometry Dash
            </h2>
          </ScrollSection>
          <ScrollSection animation="right" delay={200}>
            <Link 
              to="/games" 
              className="block group"
            >
              <div className="relative bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-cyan-500/30 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden glow-border">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-4 color-pulse">
                    <Star className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="absolute top-4 right-4 color-pulse" style={{ animationDelay: '0.5s' }}>
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 color-pulse" style={{ animationDelay: '1s' }}>
                    <Gamepad2 className="w-8 h-8 text-pink-400" />
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden">
                    <img 
                      src={geometryDashImage} 
                      alt="Geometry Dash" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 neon-glow text-cyan-300">
                      Play Geometry Dash
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Click to play my favorite rhythm-based platformer game!
                    </p>
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold group-hover:from-yellow-400 group-hover:to-orange-400 transition-all shimmer btn-glow">
                      <Gamepad2 className="w-5 h-5" />
                      Play Now
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
