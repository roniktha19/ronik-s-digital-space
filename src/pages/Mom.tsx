import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import momImage from "@/assets/mom.png";

const Mom = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-pink-300 via-pink-200/50 to-pink-100 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-300/20 rounded-full blur-3xl color-pulse" />
      
      <HamburgerMenu />
      
      <div className="pt-16 px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center animate-fade-in">
            <div className="relative glow-border rounded-full p-1 color-pulse">
              <ProfilePhoto src={momImage} alt="Ritu Thapa" size="lg" />
              <div className="absolute inset-0 rounded-full bg-pink-400/40 blur-2xl -z-10 animate-pulse" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-pink-900">
              My Mom <span className="rainbow-text">Ritu</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* About */}
            <div className="p-6 rounded-xl bg-white/60 border border-pink-300 backdrop-blur-sm animate-fade-in hover:border-pink-400 hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] shadow-lg shimmer" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-semibold text-pink-600 mb-4">About My Mom</h2>
              <ul className="space-y-3 text-pink-900">
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-pink-500">Name:</span> Ritu Thapa</li>
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-pink-500">Age:</span> 32 years old</li>
                <li className="hover:translate-x-2 transition-transform duration-200"><span className="text-pink-500">Contact:</span> 9804432608</li>
              </ul>
            </div>

            {/* Why I Love Her */}
            <div className="p-6 rounded-xl bg-white/60 border border-pink-300 backdrop-blur-sm animate-fade-in hover:border-pink-400 hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] shadow-lg shimmer" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-semibold text-pink-600 mb-4">Why I Love My Mom</h2>
              <p className="text-pink-900 leading-relaxed">
                My mom is the most caring and loving person in my life. She always takes care 
                of our family with so much love and dedication. She makes the most delicious 
                food and always makes sure we are happy and healthy.
              </p>
            </div>

            {/* What Makes Her Special */}
            <div className="p-6 rounded-xl bg-white/60 border border-pink-300 backdrop-blur-sm animate-fade-in hover:border-pink-400 hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] shadow-lg shimmer" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl font-semibold text-pink-600 mb-4">What Makes Her Special</h2>
              <ul className="space-y-2 text-pink-900">
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-pink-500 rounded-full color-pulse"></span>
                  She is very caring and loving
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-rose-500 rounded-full color-pulse" style={{ animationDelay: '0.1s' }}></span>
                  She makes delicious food
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-fuchsia-500 rounded-full color-pulse" style={{ animationDelay: '0.2s' }}></span>
                  She always supports me
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full color-pulse" style={{ animationDelay: '0.3s' }}></span>
                  She is my best friend
                </li>
              </ul>
            </div>

            {/* My Message */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 border border-pink-300 backdrop-blur-sm animate-fade-in hover:scale-[1.02] transition-all duration-300 shadow-lg gradient-animate" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-xl font-semibold text-white mb-4 rainbow-text">A Message to Mom</h2>
              <p className="text-white leading-relaxed italic">
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
