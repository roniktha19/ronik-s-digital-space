import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Users, Gamepad2, Video, ChevronDown, ChevronUp } from "lucide-react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [familyOpen, setFamilyOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setFamilyOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-3 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover-scale hover-glow"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-card/95 backdrop-blur-md border-l border-border z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="pt-20 px-6">
          <ul className="space-y-2">
            {/* About Myself */}
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors link-underline"
              >
                <User className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">About Myself</span>
              </Link>
            </li>

            {/* My Family */}
            <li>
              <button
                onClick={() => setFamilyOpen(!familyOpen)}
                className="flex items-center justify-between w-full p-4 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">My Family</span>
                </div>
                {familyOpen ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              {familyOpen && (
                <ul className="ml-8 mt-2 space-y-1">
                  <li>
                    <Link
                      to="/family/brother"
                      onClick={closeMenu}
                      className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
                    >
                      Brother - Reejan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/family/mom"
                      onClick={closeMenu}
                      className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
                    >
                      Mom - Ritu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/family/dad"
                      onClick={closeMenu}
                      className="block p-3 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground"
                    >
                      Dad - Kiran
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Games */}
            <li>
              <Link
                to="/games"
                onClick={closeMenu}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors link-underline"
              >
                <Gamepad2 className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Geometry Dash</span>
              </Link>
            </li>

            {/* Funny Videos */}
            <li>
              <a
                href="#funny-video"
                onClick={closeMenu}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors link-underline"
              >
                <Video className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Funny Videos</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
