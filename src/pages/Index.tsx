import { Link } from "react-router-dom";
import ProfilePhoto from "@/components/ProfilePhoto";
import FamilyCard from "@/components/FamilyCard";
import HamburgerMenu from "@/components/HamburgerMenu";
import ScrollSection from "@/components/ScrollSection";
import myImage from "@/assets/my_image.jpeg";
import brotherImage from "@/assets/brother.jpeg";
import momImage from "@/assets/mom.png";
import dadImage from "@/assets/dad.jpg";
import geometryDashImage from "@/assets/geometry-dash.png";
import { Gamepad2, Star, Zap, School, User, MapPin, Building, BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      <HamburgerMenu />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/30 rounded-full blur-3xl float" style={{ animationDelay: '4s' }} />
      </div>
      
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
            <h2 className="text-4xl font-bold text-center mb-12 neon-glow">
              My Family
            </h2>
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
              {/* School Name */}
              <div className="inline-flex items-center gap-3 bg-blue-500/20 px-6 py-3 rounded-full mb-6 color-pulse">
                <School className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-300">
                  Gaidakot Namuna Secondary School
                </h3>
              </div>
              
              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 text-red-400" />
                <p>Gaidakot Municipality–Ward No. 2, Nawalparasi (East), Nepal</p>
              </div>

              {/* School Description */}
              <div className="text-left space-y-4 mb-8">
                <p className="text-foreground/80 leading-relaxed">
                  Gaidakot Namuna Secondary School is a well-known educational institution providing quality education to students from primary to higher secondary levels.
                </p>
                
                {/* Buildings Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-500/10 rounded-xl p-4 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-cyan-400" />
                      <h4 className="font-bold text-cyan-300">Primary Building</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Used for primary school classes (Nursery to Grade 5)
                    </p>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-4 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      <h4 className="font-bold text-purple-300">Secondary Building</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Used for secondary level and college (+2) classes
                    </p>
                  </div>
                </div>

                {/* Education Levels */}
                <div className="bg-green-500/10 rounded-xl p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    <h4 className="font-bold text-green-300">Education Levels</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Primary (Nursery - Grade 5) • Secondary (Grade 6 - 10) • Higher Secondary (+2)
                  </p>
                </div>
              </div>

              {/* Map Coordinates */}
              <div className="bg-orange-500/10 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <h4 className="font-bold text-orange-300">📍 School Location</h4>
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  Coordinates: 27.70248209644719, 84.41637499114283
                </p>
                <a 
                  href="https://www.google.com/maps?q=27.70248209644719,84.41637499114283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>

              {/* School Button */}
              <a
                href="https://www.google.com/maps?q=27.70248209644719,84.41637499114283"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold btn-glow shimmer hover:scale-105 transition-transform"
              >
                <School className="w-5 h-5" />
                Visit My School
              </a>
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
    </div>
  );
};

export default Index;
