import HamburgerMenu from "@/components/HamburgerMenu";
import ProfilePhoto from "@/components/ProfilePhoto";
import FamilyCard from "@/components/FamilyCard";
import myImage from "@/assets/my_image.jpeg";
import brotherImage from "@/assets/brother.jpeg";
import momImage from "@/assets/mom.png";
import dadImage from "@/assets/dad.jpg";
import funnyVideo from "@/assets/funny-video.mp4";

const Index = () => {
  return (
    <div className="min-h-screen pb-12">
      <HamburgerMenu />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-md mx-auto flex flex-col items-center text-center">
          <ProfilePhoto src={myImage} alt="Ronik Thapa Chhetri" />
          <h1 className="mt-6 text-3xl font-bold text-foreground">
            Hello, I am <span className="text-primary">Ronik Thapa Chhetri!</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A 12-year-old student from Nepal who loves cycling, drawing, and exploring the world of computers!
          </p>
        </div>
      </section>

      {/* Family Section */}
      <section className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">
            My Family
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <FamilyCard
              name="Reejan"
              relation="Brother"
              image={brotherImage}
              link="/family/brother"
            />
            <FamilyCard
              name="Ritu"
              relation="Mom"
              image={momImage}
              link="/family/mom"
            />
            <FamilyCard
              name="Kiran"
              relation="Dad"
              image={dadImage}
              link="/family/dad"
            />
          </div>
        </div>
      </section>

      {/* Funny Video Section */}
      <section id="funny-video" className="px-4 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-6">
            Funny Video
          </h2>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg hover-glow">
            <video
              controls
              className="w-full"
              poster=""
            >
              <source src={funnyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
