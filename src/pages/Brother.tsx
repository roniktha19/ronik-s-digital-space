import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import brotherImage from "@/assets/brother.jpeg";

const Brother = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-red-950 via-red-900/50 to-background relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl color-pulse" />
      
      <HamburgerMenu />
      
      <div className="pt-16 px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center animate-fade-in">
            <div className="relative glow-border rounded-full p-1 color-pulse">
              <ProfilePhoto src={brotherImage} alt="Reejan Thapa" size="lg" />
              <div className="absolute inset-0 rounded-full bg-red-500/30 blur-2xl -z-10 animate-pulse" />
            </div>
            <h1 className="mt-6 text-3xl font-bold">
              My Brother <span className="rainbow-text">Reejan</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* About */}
            <div className="p-6 rounded-xl bg-red-950/30 border border-red-800/50 backdrop-blur-sm animate-fade-in hover:border-red-600/50 hover:bg-red-900/30 transition-all duration-300 hover:scale-[1.02] shimmer" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-semibold text-red-400 mb-4 neon-glow">About Reejan</h2>
              <p className="text-foreground leading-relaxed">
                Reejan Thapa is my younger brother. He is a wonderful and energetic kid who always 
                brings joy to our family. We play together, learn together, and have so many adventures!
              </p>
            </div>

            {/* His Hobbies */}
            <div className="p-6 rounded-xl bg-red-950/30 border border-red-800/50 backdrop-blur-sm animate-fade-in hover:border-red-600/50 hover:bg-red-900/30 transition-all duration-300 hover:scale-[1.02] shimmer" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-semibold text-red-400 mb-4 neon-glow">His Hobbies</h2>
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

            {/* What Makes Him Special */}
            <div className="p-6 rounded-xl bg-red-950/30 border border-red-800/50 backdrop-blur-sm animate-fade-in hover:border-red-600/50 hover:bg-red-900/30 transition-all duration-300 hover:scale-[1.02] shimmer" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-semibold text-red-400 mb-4 neon-glow">What Makes Him Special</h2>
              <p className="text-foreground leading-relaxed">
                Reejan is always curious and loves to explore new things. He has a kind heart 
                and always shares his toys with me. He is the best brother anyone could ask for!
              </p>
            </div>

            {/* Our Bond */}
            <div className="p-6 rounded-xl gradient-animate border border-red-800/50 backdrop-blur-sm animate-fade-in hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-foreground mb-4 rainbow-text">Our Brotherhood</h2>
              <p className="text-foreground leading-relaxed">
                We love spending time together. Whether it's playing games, going cycling, 
                or just watching cartoons, every moment with my brother is special. 
                I am so lucky to have him in my life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brother;
