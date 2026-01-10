import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import ScrollSection from "@/components/ScrollSection";
import ParticleBackground from "@/components/ParticleBackground";
import brotherImage from "@/assets/brother.jpeg";

const Brother = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-red-950 via-red-900/50 to-background relative overflow-hidden">
      <ParticleBackground />
      
      <HamburgerMenu />
      
      <div className="pt-16 px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <ScrollSection animation="down">
            <div className="mt-8 flex flex-col items-center">
              <div className="relative glow-border rounded-full p-1 color-pulse">
                <ProfilePhoto src={brotherImage} alt="Reejan Thapa" size="lg" />
                <div className="absolute inset-0 rounded-full bg-red-500/30 blur-2xl -z-10 animate-pulse" />
              </div>
              <h1 className="mt-6 text-3xl font-bold">
                My Brother <span className="rainbow-text">Reejan</span> <span className="sticker">👦</span>
              </h1>
            </div>
          </ScrollSection>

          <div className="mt-8 space-y-6">
            {/* About */}
            <ScrollSection animation="left" delay={100}>
              <div className="p-6 rounded-xl bg-red-950/30 border border-red-800/50 backdrop-blur-sm card-hover-yellow hover:bg-red-900/30 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-red-400 mb-4 neon-glow transition-colors duration-300">
                  <span className="sticker">📖</span> About Reejan
                </h2>
                <p className="text-foreground leading-relaxed">
                  Reejan Thapa is my younger brother. He is a wonderful and energetic kid who always 
                  brings joy to our family. We play together, learn together, and have so many adventures!
                </p>
              </div>
            </ScrollSection>

            {/* His Hobbies */}
            <ScrollSection animation="right" delay={200}>
              <div className="p-6 rounded-xl bg-red-950/30 border border-red-800/50 backdrop-blur-sm card-hover-yellow hover:bg-red-900/30 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-red-400 mb-4 neon-glow transition-colors duration-300">
                  <span className="sticker">🎮</span> His Hobbies
                </h2>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-red-500 rounded-full color-pulse"></span>
                    Playing outdoors
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-orange-500 rounded-full color-pulse" style={{ animationDelay: '0.1s' }}></span>
                    Drawing
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full color-pulse" style={{ animationDelay: '0.2s' }}></span>
                    Cycling with me
                  </li>
                </ul>
              </div>
            </ScrollSection>

            {/* What Makes Him Special */}
            <ScrollSection animation="left" delay={300}>
              <div className="p-6 rounded-xl bg-red-950/30 border border-red-800/50 backdrop-blur-sm card-hover-yellow hover:bg-red-900/30 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-red-400 mb-4 neon-glow transition-colors duration-300">
                  <span className="sticker">✨</span> What Makes Him Special
                </h2>
                <p className="text-foreground leading-relaxed">
                  Reejan is always curious and loves to explore new things. He has a kind heart 
                  and always shares his toys with me. He is the best brother anyone could ask for!
                </p>
              </div>
            </ScrollSection>

            {/* Our Bond */}
            <ScrollSection animation="up" delay={400}>
              <div className="p-6 rounded-xl gradient-animate border border-red-800/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                <h2 className="text-xl font-semibold text-foreground mb-4 rainbow-text">
                  <span className="sticker">🤝</span> Our Brotherhood
                </h2>
                <p className="text-foreground leading-relaxed">
                  We love spending time together. Whether it's playing games, going cycling, 
                  or just watching cartoons, every moment with my brother is special. 
                  I am so lucky to have him in my life!
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brother;