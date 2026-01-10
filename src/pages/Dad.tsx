import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import ScrollSection from "@/components/ScrollSection";
import ParticleBackground from "@/components/ParticleBackground";
import dadImage from "@/assets/dad.jpg";
import { MapPin, Building2, Phone } from "lucide-react";

const Dad = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-sky-950 via-sky-900/50 to-background relative overflow-hidden">
      <ParticleBackground />
      
      <HamburgerMenu />
      
      <div className="pt-16 px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <ScrollSection animation="down">
            <div className="mt-8 flex flex-col items-center">
              <div className="relative glow-border rounded-full p-1 color-pulse">
                <ProfilePhoto src={dadImage} alt="Kiran Thapa" size="lg" />
                <div className="absolute inset-0 rounded-full bg-sky-500/30 blur-2xl -z-10 animate-pulse" />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-foreground">
                My Dad <span className="rainbow-text">Kiran</span>
              </h1>
            </div>
          </ScrollSection>

          <div className="mt-8 space-y-6">
            {/* About */}
            <ScrollSection animation="left" delay={100}>
              <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow">About My Dad</h2>
                <ul className="space-y-3 text-foreground">
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-sky-300/70">Name:</span> Kiran Thapa</li>
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-sky-300/70">Work:</span> Physio Nepal (Supplier)</li>
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-sky-300/70">Contact:</span> 9801983833</li>
                </ul>
              </div>
            </ScrollSection>

            {/* Office Location */}
            <ScrollSection animation="right" delay={200}>
              <div className="p-6 rounded-xl bg-gradient-to-br from-sky-900/40 via-blue-900/30 to-cyan-900/40 border border-sky-700/50 backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300 hover:scale-[1.02] glow-border">
                <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Office Location
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-sky-950/50 rounded-lg border border-sky-800/30">
                    <MapPin className="w-6 h-6 text-cyan-400 mt-1 color-pulse" />
                    <div>
                      <h3 className="font-semibold text-cyan-300 mb-1">Physio Nepal Office</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Kathmandu, Nepal
                      </p>
                      <p className="text-sm text-sky-400/70 mt-2">
                        Medical Equipment & Physiotherapy Supplies
                      </p>
                      <p className="text-xs text-cyan-500/60 mt-2 font-mono">
                        📍 Coordinates: 27.70248, 84.41637
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps?q=27.70248209644719,84.41637499114283" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-sky-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-sky-500 hover:to-cyan-500 transition-all btn-glow"
                  >
                    <MapPin className="w-5 h-5" />
                    View on Google Maps
                  </a>
                  <div className="flex items-center gap-3 p-3 bg-sky-950/30 rounded-lg">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span className="text-foreground">Contact: 9801983833</span>
                  </div>
                </div>
              </div>
            </ScrollSection>

            {/* His Work */}
            <ScrollSection animation="left" delay={300}>
              <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow">His Important Work</h2>
                <p className="text-foreground leading-relaxed">
                  My dad works at Physio Nepal as a supplier. He helps provide equipment and 
                  supplies that help paralyzed people and those who need physical therapy. 
                  His work makes a real difference in people's lives!
                </p>
              </div>
            </ScrollSection>

            {/* Why I Love Him */}
            <ScrollSection animation="right" delay={400}>
              <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow">Why I Love My Dad</h2>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-sky-500 rounded-full color-pulse"></span>
                    He is very hardworking
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full color-pulse" style={{ animationDelay: '0.1s' }}></span>
                    He teaches me good values
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full color-pulse" style={{ animationDelay: '0.2s' }}></span>
                    He supports our family
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full color-pulse" style={{ animationDelay: '0.3s' }}></span>
                    He is my role model
                  </li>
                </ul>
              </div>
            </ScrollSection>

            {/* What Makes Him Special */}
            <ScrollSection animation="left" delay={500}>
              <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow">What Makes Him Special</h2>
                <p className="text-foreground leading-relaxed">
                  My dad works very hard to give our family a good life. He always teaches me 
                  the importance of education, honesty, and helping others. He is my hero and 
                  I want to be just like him when I grow up!
                </p>
              </div>
            </ScrollSection>

            {/* My Message */}
            <ScrollSection animation="up" delay={600}>
              <div className="p-6 rounded-xl gradient-animate border border-sky-800/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                <h2 className="text-xl font-semibold text-foreground mb-4 rainbow-text">A Message to Dad</h2>
                <p className="text-foreground leading-relaxed italic">
                  "Thank you for working so hard for us, Dad. I am so proud of you and 
                  everything you do. I love you and I promise to make you proud!"
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dad;
