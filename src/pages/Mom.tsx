import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import momImage from "@/assets/mom.png";

const Mom = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-pink-950 via-pink-900/50 to-background">
      <HamburgerMenu />
      
      <div className="pt-16 px-4">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center animate-fade-in">
            <div className="relative">
              <ProfilePhoto src={momImage} alt="Ritu Thapa" size="lg" />
              <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-2xl -z-10 animate-pulse" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-foreground">
              My Mom <span className="text-pink-400">Ritu</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* About */}
            <div className="p-6 rounded-xl bg-pink-950/30 border border-pink-800/50 backdrop-blur-sm animate-fade-in hover:border-pink-600/50 hover:bg-pink-900/30 transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-semibold text-pink-400 mb-4">About My Mom</h2>
              <ul className="space-y-3 text-foreground">
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-pink-300/70">Name:</span> Ritu Thapa</li>
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-pink-300/70">Age:</span> 32 years old</li>
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-pink-300/70">Contact:</span> 9804432608</li>
              </ul>
            </div>

            {/* Why I Love Her */}
            <div className="p-6 rounded-xl bg-pink-950/30 border border-pink-800/50 backdrop-blur-sm animate-fade-in hover:border-pink-600/50 hover:bg-pink-900/30 transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-semibold text-pink-400 mb-4">Why I Love My Mom</h2>
              <p className="text-foreground leading-relaxed">
                My mom is the most caring and loving person in my life. She always takes care 
                of our family with so much love and dedication. She makes the most delicious 
                food and always makes sure we are happy and healthy.
              </p>
            </div>

            {/* What Makes Her Special */}
            <div className="p-6 rounded-xl bg-pink-950/30 border border-pink-800/50 backdrop-blur-sm animate-fade-in hover:border-pink-600/50 hover:bg-pink-900/30 transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-semibold text-pink-400 mb-4">What Makes Her Special</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                  She is very caring and loving
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></span>
                  She makes delicious food
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  She always supports me
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                  She is my best friend
                </li>
              </ul>
            </div>

            {/* My Message */}
            <div className="p-6 rounded-xl bg-pink-950/30 border border-pink-800/50 backdrop-blur-sm animate-fade-in hover:border-pink-600/50 hover:bg-pink-900/30 transition-all duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-pink-400 mb-4">A Message to Mom</h2>
              <p className="text-foreground leading-relaxed italic">
                "Thank you for everything you do for our family, Mom. You are the heart of our 
                home and I love you so much! I promise to always make you proud."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mom;