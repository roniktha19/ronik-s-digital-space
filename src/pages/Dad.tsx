import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import dadImage from "@/assets/dad.jpg";

const Dad = () => {
  return (
    <div className="min-h-screen pb-12">
      <HamburgerMenu />
      
      <div className="pt-16 px-4">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center">
            <ProfilePhoto src={dadImage} alt="Kiran Thapa" size="lg" />
            <h1 className="mt-6 text-3xl font-bold text-foreground">
              My Dad <span className="text-primary">Kiran</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* About */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">About My Dad</h2>
              <ul className="space-y-3 text-foreground">
                <li><span className="text-muted-foreground">Name:</span> Kiran Thapa</li>
                <li><span className="text-muted-foreground">Work:</span> Physio Nepal (Supplier)</li>
                <li><span className="text-muted-foreground">Contact:</span> 9801983833</li>
              </ul>
            </div>

            {/* His Work */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">His Important Work</h2>
              <p className="text-foreground leading-relaxed">
                My dad works at Physio Nepal as a supplier. He helps provide equipment and 
                supplies that help paralyzed people and those who need physical therapy. 
                His work makes a real difference in people's lives!
              </p>
            </div>

            {/* Why I Love Him */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">Why I Love My Dad</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  He is very hardworking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  He teaches me good values
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  He supports our family
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  He is my role model
                </li>
              </ul>
            </div>

            {/* What Makes Him Special */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">What Makes Him Special</h2>
              <p className="text-foreground leading-relaxed">
                My dad works very hard to give our family a good life. He always teaches me 
                the importance of education, honesty, and helping others. He is my hero and 
                I want to be just like him when I grow up!
              </p>
            </div>

            {/* My Message */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">A Message to Dad</h2>
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
