import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import brotherImage from "@/assets/brother.jpeg";

const Brother = () => {
  return (
    <div className="min-h-screen pb-12">
      <HamburgerMenu />
      
      <div className="pt-16 px-4">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center">
            <ProfilePhoto src={brotherImage} alt="Reejan Thapa" size="lg" />
            <h1 className="mt-6 text-3xl font-bold text-foreground">
              My Brother <span className="text-primary">Reejan</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* About */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">About Reejan</h2>
              <p className="text-foreground leading-relaxed">
                Reejan Thapa is my younger brother. He is a wonderful and energetic kid who always 
                brings joy to our family. We play together, learn together, and have so many adventures!
              </p>
            </div>

            {/* His Hobbies */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">His Hobbies</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Playing outdoors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Drawing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Cycling with me
                </li>
              </ul>
            </div>

            {/* What Makes Him Special */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">What Makes Him Special</h2>
              <p className="text-foreground leading-relaxed">
                Reejan is always curious and loves to explore new things. He has a kind heart 
                and always shares his toys with me. He is the best brother anyone could ask for!
              </p>
            </div>

            {/* Our Bond */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">Our Brotherhood</h2>
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
