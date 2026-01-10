import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollSection from "@/components/ScrollSection";
import myImage from "@/assets/my_image.jpeg";

const About = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      <ParticleBackground />
      <HamburgerMenu />
      
      <div className="pt-16 px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <ScrollSection animation="down">
            <div className="mt-8 flex flex-col items-center">
              <div className="relative glow-border rounded-full p-1 color-pulse">
                <ProfilePhoto src={myImage} alt="Ronik Thapa Chhetri" size="lg" />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-foreground">
                About <span className="rainbow-text">Me</span> <span className="sticker">✨</span>
              </h1>
            </div>
          </ScrollSection>

          <div className="mt-8 space-y-6">
            {/* Personal Info */}
            <ScrollSection animation="left" delay={100}>
              <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm card-hover-yellow hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-primary mb-4 neon-glow"><span className="sticker">👤</span> Personal Information</h2>
                <ul className="space-y-3 text-foreground">
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-muted-foreground">Name:</span> Ronik Thapa Chhetri</li>
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-muted-foreground">Date of Birth:</span> November 5, 2014</li>
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-muted-foreground">Age:</span> 12 years old</li>
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-muted-foreground">Grade:</span> 5</li>
                </ul>
              </div>
            </ScrollSection>

            {/* School */}
            <ScrollSection animation="right" delay={200}>
              <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm card-hover-yellow hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-primary mb-4 neon-glow"><span className="sticker">🎓</span> Education</h2>
                <ul className="space-y-3 text-foreground">
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-muted-foreground">School:</span> Namuna Secondary English School</li>
                  <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-muted-foreground">Location:</span> Gaindakot-04, Nawalparasi, Nepal</li>
                </ul>
              </div>
            </ScrollSection>

            {/* Hobbies */}
            <ScrollSection animation="left" delay={300}>
              <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm card-hover-yellow hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-primary mb-4 neon-glow"><span className="sticker">🎯</span> My Hobbies</h2>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-primary rounded-full color-pulse"></span>
                    <span className="sticker">🚴</span> Cycling
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-accent rounded-full color-pulse" style={{ animationDelay: '0.1s' }}></span>
                    <span className="sticker">🎨</span> Drawing
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full color-pulse" style={{ animationDelay: '0.2s' }}></span>
                    <span className="sticker">⚽</span> Outdoor Activities
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full color-pulse" style={{ animationDelay: '0.3s' }}></span>
                    <span className="sticker">💻</span> Learning Computer Skills
                  </li>
                </ul>
              </div>
            </ScrollSection>

            {/* Future Goals */}
            <ScrollSection animation="up" delay={400}>
              <div className="p-6 rounded-xl gradient-animate border border-border backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                <h2 className="text-xl font-semibold text-foreground mb-4 rainbow-text"><span className="sticker">🌟</span> My Dreams</h2>
                <p className="text-foreground leading-relaxed italic">
                  I dream of becoming someone who can make a positive impact in the world. 
                  I love learning new things, especially about computers and technology. 
                  I want to help others and make my family proud!
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
