import BackButton from "@/components/BackButton";
import HamburgerMenu from "@/components/HamburgerMenu";
import ScrollSection from "@/components/ScrollSection";
import { School, MapPin, Building, Users, BookOpen, GraduationCap, Target, Phone } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";

const SchoolPage = () => {
  return (
    <div className="min-h-screen pb-12 bg-gradient-to-br from-blue-950 via-cyan-900/50 to-background relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl color-pulse" />
      
      <HamburgerMenu />
      
      <div className="pt-16 px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          <BackButton />

          <ScrollSection animation="down">
            <div className="mt-8 flex flex-col items-center text-center">
              {/* School Building Image */}
              <div className="relative glow-border rounded-2xl overflow-hidden mb-6">
                <img 
                  src={schoolBuilding} 
                  alt="Gaidakot Namuna Secondary School Building" 
                  className="w-full max-w-md h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              </div>
              
              <div className="relative glow-border rounded-full p-6 color-pulse bg-gradient-to-br from-blue-500/30 to-cyan-500/30">
                <School className="w-16 h-16 text-cyan-300" />
                <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-2xl -z-10 animate-pulse" />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-foreground">
                My School <span className="sticker">🏫</span><span className="sticker">📚</span><span className="sticker">✏️</span>
              </h1>
            </div>
          </ScrollSection>

          <div className="mt-8 space-y-6">
            {/* School Name */}
            <ScrollSection animation="left" delay={100}>
              <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-800/50 backdrop-blur-sm card-hover-yellow hover:bg-blue-900/30 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-cyan-400 mb-4 neon-glow flex items-center gap-2 transition-colors duration-300">
                  <GraduationCap className="w-5 h-5" />
                  <span className="sticker">🎓</span> School Information
                </h2>
                <ul className="space-y-3 text-foreground">
                  <li className="hover:translate-x-2 transition-transform duration-200">
                    <span className="text-cyan-300/70">Name:</span> Gaidakot Namuna Secondary School
                  </li>
                  <li className="hover:translate-x-2 transition-transform duration-200 flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-cyan-400" />
                    <span>
                      <span className="text-cyan-300/70">Location:</span> Gaidakot Municipality, Ward No. 2, Nawalparasi (East), Nepal
                    </span>
                  </li>
                  <li className="hover:translate-x-2 transition-transform duration-200 flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-1 text-cyan-400" />
                    <span>
                      <span className="text-cyan-300/70">Contact:</span>{" "}
                      <a href="tel:9748203301" className="text-cyan-400 hover:text-yellow-400 transition-colors underline">
                        9748203301
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollSection>

            {/* About School */}
            <ScrollSection animation="right" delay={200}>
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-teal-900/40 border border-blue-700/50 backdrop-blur-sm card-hover-yellow hover:scale-[1.02] glow-border">
                <h2 className="text-xl font-semibold text-cyan-400 mb-4 neon-glow flex items-center gap-2 transition-colors duration-300">
                  <BookOpen className="w-5 h-5" />
                  <span className="sticker">📖</span> About the School
                </h2>
                <p className="text-foreground leading-relaxed">
                  Gaidakot Namuna Secondary School is a well-known educational institution 
                  that provides quality education from primary level to higher secondary (+2) level. 
                  The school is dedicated to nurturing students' academic excellence and personal growth.
                </p>
              </div>
            </ScrollSection>

            {/* Buildings */}
            <ScrollSection animation="left" delay={300}>
              <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-800/50 backdrop-blur-sm card-hover-yellow hover:bg-blue-900/30 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-cyan-400 mb-4 neon-glow flex items-center gap-2 transition-colors duration-300">
                  <Building className="w-5 h-5" />
                  <span className="sticker">🏛️</span> School Buildings
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-800/30 hover:border-yellow-500/50 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-300 mb-2"><span className="sticker">🏫</span> Primary Building</h3>
                    <p className="text-muted-foreground text-sm">
                      Used for primary school classes (Grade 1-5). Designed for younger students 
                      with colorful classrooms and play areas.
                    </p>
                  </div>
                  <div className="p-4 bg-cyan-900/30 rounded-lg border border-cyan-800/30 hover:border-yellow-500/50 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-300 mb-2"><span className="sticker">🏛️</span> Secondary Building</h3>
                    <p className="text-muted-foreground text-sm">
                      Used for secondary level (Grade 6-10) and college (+2) classes. 
                      Equipped with science labs, computer labs, and library facilities.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollSection>

            {/* Students & Staff */}
            <ScrollSection animation="right" delay={400}>
              <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-800/50 backdrop-blur-sm card-hover-yellow hover:bg-blue-900/30 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-cyan-400 mb-4 neon-glow flex items-center gap-2 transition-colors duration-300">
                  <Users className="w-5 h-5" />
                  <span className="sticker">👨‍🎓</span> Our Community
                </h2>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full color-pulse"></span>
                    <span className="sticker">👩‍🏫</span> Experienced and qualified teachers
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full color-pulse" style={{ animationDelay: '0.1s' }}></span>
                    <span className="sticker">🤗</span> Friendly and supportive environment
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-teal-500 rounded-full color-pulse" style={{ animationDelay: '0.2s' }}></span>
                    <span className="sticker">🎭</span> Active student clubs and activities
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full color-pulse" style={{ animationDelay: '0.3s' }}></span>
                    <span className="sticker">⚽</span> Sports and extracurricular programs
                  </li>
                </ul>
              </div>
            </ScrollSection>

            {/* Mission */}
            <ScrollSection animation="left" delay={500}>
              <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-800/50 backdrop-blur-sm card-hover-yellow hover:bg-blue-900/30 hover:scale-[1.02] shimmer">
                <h2 className="text-xl font-semibold text-cyan-400 mb-4 neon-glow flex items-center gap-2 transition-colors duration-300">
                  <Target className="w-5 h-5" />
                  <span className="sticker">🎯</span> School Mission
                </h2>
                <p className="text-foreground leading-relaxed">
                  To provide quality education that develops students' intellectual, social, 
                  and moral capabilities. The school aims to create responsible citizens 
                  who can contribute positively to society and the nation.
                </p>
              </div>
            </ScrollSection>

            {/* Why I Love My School */}
            <ScrollSection animation="up" delay={600}>
              <div className="p-6 rounded-xl gradient-animate border border-blue-800/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
                <h2 className="text-xl font-semibold text-foreground mb-4 rainbow-text">
                  <span className="sticker">💙</span> Why I Love My School <span className="sticker">🌟</span>
                </h2>
                <p className="text-foreground leading-relaxed italic">
                  "I love my school because it has amazing teachers who care about us. 
                  I have made many friends here and learn new things every day. 
                  My school is like my second home!"
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolPage;