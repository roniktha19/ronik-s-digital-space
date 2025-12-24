import BackButton from "@/components/BackButton";
import ProfilePhoto from "@/components/ProfilePhoto";
import HamburgerMenu from "@/components/HamburgerMenu";
import myImage from "@/assets/my_image.jpeg";

const About = () => {
  return (
    <div className="min-h-screen pb-12">
      <HamburgerMenu />
      
      <div className="pt-16 px-4">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <div className="mt-8 flex flex-col items-center">
            <ProfilePhoto src={myImage} alt="Ronik Thapa Chhetri" size="lg" />
            <h1 className="mt-6 text-3xl font-bold text-foreground">
              About <span className="text-primary">Me</span>
            </h1>
          </div>

          <div className="mt-8 space-y-6">
            {/* Personal Info */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">Personal Information</h2>
              <ul className="space-y-3 text-foreground">
                <li><span className="text-muted-foreground">Name:</span> Ronik Thapa Chhetri</li>
                <li><span className="text-muted-foreground">Date of Birth:</span> November 5, 2014</li>
                <li><span className="text-muted-foreground">Age:</span> 12 years old</li>
                <li><span className="text-muted-foreground">Grade:</span> 5</li>
              </ul>
            </div>

            {/* School */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">Education</h2>
              <ul className="space-y-3 text-foreground">
                <li><span className="text-muted-foreground">School:</span> Namuna Secondary English School</li>
                <li><span className="text-muted-foreground">Location:</span> Gaindakot-04, Nawalparasi, Nepal</li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">My Hobbies</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Cycling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Drawing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Outdoor Activities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Learning Computer Skills
                </li>
              </ul>
            </div>

            {/* Future Goals */}
            <div className="p-6 rounded-xl bg-card/50 border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">My Dreams</h2>
              <p className="text-foreground leading-relaxed">
                I dream of becoming someone who can make a positive impact in the world. 
                I love learning new things, especially about computers and technology. 
                I want to help others and make my family proud!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
