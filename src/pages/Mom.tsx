import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import momImage from "@/assets/mom.png";

const Mom = () => {
  return (
    <div className="min-h-screen pb-12">
      <HamburgerMenu />
      
      <div className="pt-16 px-4">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center">
            <ProfilePhoto src={momImage} alt="Ritu Thapa" size="lg" />
            <h1 className="mt-6 text-3xl font-bold text-foreground">
              My Mom <span className="text-primary">Ritu</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* About */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">About My Mom</h2>
              <ul className="space-y-3 text-foreground">
                <li><span className="text-muted-foreground">Name:</span> Ritu Thapa</li>
                <li><span className="text-muted-foreground">Age:</span> 32 years old</li>
                <li><span className="text-muted-foreground">Contact:</span> 9804432608</li>
              </ul>
            </div>

            {/* Why I Love Her */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">Why I Love My Mom</h2>
              <p className="text-foreground leading-relaxed">
                My mom is the most caring and loving person in my life. She always takes care 
                of our family with so much love and dedication. She makes the most delicious 
                food and always makes sure we are happy and healthy.
              </p>
            </div>

            {/* What Makes Her Special */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">What Makes Her Special</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  She is very caring and loving
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  She makes delicious food
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  She always supports me
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  She is my best friend
                </li>
              </ul>
            </div>

            {/* My Message */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">A Message to Mom</h2>
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
