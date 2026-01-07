import { Link } from "react-router-dom";
import ProfilePhoto from "@/components/ProfilePhoto";
import FamilyCard from "@/components/FamilyCard";
import HamburgerMenu from "@/components/HamburgerMenu";
import myImage from "@/assets/my_image.jpeg";
import brotherImage from "@/assets/brother.jpeg";
import momImage from "@/assets/mom.png";
import dadImage from "@/assets/dad.jpg";
import geometryDashImage from "@/assets/geometry-dash.png";
import { Gamepad2, Star, Zap, School, BookOpen, Users, Award } from "lucide-react";

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
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block glow-border color-pulse">
            <ProfilePhoto 
              src={myImage} 
              alt="My Photo" 
              size="lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I am <span className="rainbow-text">Ronik Thapa Chhetri!</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A 12-year-old student from Nepal who loves cycling, drawing, and exploring the world of computers!
          </p>
        </div>
      </section>

      {/* Family Section */}
      <section id="family" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 neon-glow">
            My Family
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="shimmer rounded-2xl">
              <FamilyCard
                name="Reejan"
                relation="Brother"
                image={brotherImage}
                link="/family/brother"
              />
            </div>
            <div className="shimmer rounded-2xl" style={{ animationDelay: '0.2s' }}>
              <FamilyCard
                name="Ritu"
                relation="Mom"
                image={momImage}
                link="/family/mom"
              />
            </div>
            <div className="shimmer rounded-2xl" style={{ animationDelay: '0.4s' }}>
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

      {/* My School Section */}
      <section id="my-school" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 rainbow-text">
            🏫 My School 🏫
          </h2>
          
          <div className="bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-teal-500/20 rounded-3xl p-8 md:p-12 glow-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-blue-500/20 px-6 py-3 rounded-full mb-4 color-pulse">
                <School className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-blue-300 neon-glow">
                  Gaidakot Namuna Secondary School
                </h3>
              </div>
              <p className="text-muted-foreground text-lg">
                📍 Gaidakot Municipality–Ward No. 2, Nawalparasi (East), Nepal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Primary Building Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shimmer hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-500/20 rounded-full color-pulse">
                    <BookOpen className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-green-300">Primary School Building</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Where young students begin their educational journey. This building focuses on building strong foundations in basic subjects, good manners, discipline, and creativity. Classrooms are designed to help children feel comfortable and motivated to learn.
                </p>
              </div>

              {/* Secondary Building Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shimmer hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full color-pulse">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-300">Secondary & College (+2) Building</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Supports higher-level education and helps students prepare for future studies and careers. Teachers guide students not only in studies but also in discipline, leadership, and responsibility.
                </p>
              </div>
            </div>

            {/* School Mission */}
            <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-yellow-500/20 rounded-2xl p-6 gradient-animate">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-amber-500/20 rounded-full color-pulse">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <h4 className="text-xl font-bold text-amber-300">Our Mission</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Gaidakot Namuna Secondary School aims to provide quality education, encourage good character, and help students become responsible citizens. The school plays an important role in the educational development of the Gaidakot area and continues to serve students with dedication and commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geometry Dash Section */}
      <section id="geometry-dash" className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-animate bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            Geometry Dash
          </h2>
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
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold group-hover:from-yellow-400 group-hover:to-orange-400 transition-all shimmer">
                    <Gamepad2 className="w-5 h-5" />
                    Play Now
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
