import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import dadImage from "@/assets/dad.jpg";

const Dad = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-sky-950 via-sky-900/50 to-background relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl color-pulse" />
      
      <HamburgerMenu />
      
      <div className="pt-16 px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center animate-fade-in">
            <div className="relative glow-border rounded-full p-1 color-pulse">
              <ProfilePhoto src={dadImage} alt="Kiran Thapa" size="lg" />
              <div className="absolute inset-0 rounded-full bg-sky-500/30 blur-2xl -z-10 animate-pulse" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-foreground">
              My Dad <span className="rainbow-text">Kiran</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* About */}
            <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm animate-fade-in hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow">About My Dad</h2>
              <ul className="space-y-3 text-foreground">
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-sky-300/70">Name:</span> Kiran Thapa</li>
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-sky-300/70">Work:</span> Physio Nepal (Supplier)</li>
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-sky-300/70">Contact:</span> 9801983833</li>
              </ul>
            </div>

            {/* His Work */}
            <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm animate-fade-in hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow">His Important Work</h2>
              <p className="text-foreground leading-relaxed">
                My dad works at Physio Nepal as a supplier. He helps provide equipment and 
                supplies that help paralyzed people and those who need physical therapy. 
                His work makes a real difference in people's lives!
              </p>
            </div>

            {/* Why I Love Him */}
            <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm animate-fade-in hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer" style={{ animationDelay: '0.3s' }}>
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

            {/* What Makes Him Special */}
            <div className="p-6 rounded-xl bg-sky-950/30 border border-sky-800/50 backdrop-blur-sm animate-fade-in hover:border-sky-600/50 hover:bg-sky-900/30 transition-all duration-300 hover:scale-[1.02] shimmer" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-sky-400 mb-4 neon-glow">What Makes Him Special</h2>
              <p className="text-foreground leading-relaxed">
                My dad works very hard to give our family a good life. He always teaches me 
                the importance of education, honesty, and helping others. He is my hero and 
                I want to be just like him when I grow up!
              </p>
            </div>

            {/* My Message */}
            <div className="p-6 rounded-xl gradient-animate border border-sky-800/50 backdrop-blur-sm animate-fade-in hover:scale-[1.02] transition-all duration-300" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-xl font-semibold text-foreground mb-4 rainbow-text">A Message to Dad</h2>
              <p className="text-foreground leading-relaxed italic">
                "Thank you for working so hard for us, Dad. I am so proud of you and 
                everything you do. I love you and I promise to make you proud!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dad;
