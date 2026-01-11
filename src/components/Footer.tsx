import { Heart, Mail, MapPin, Github, Youtube, Instagram } from "lucide-react";

interface FooterProps {
  showSecret?: boolean;
}

const Footer = ({ showSecret = false }: FooterProps) => {
  return (
    <footer className="relative z-10 mt-16 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground mb-4 rainbow-text">Contact Me</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>ronik@example.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Gaindakot, Nepal 🇳🇵</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-foreground mb-4 rainbow-text">Follow Me</h3>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-cyan-500 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-foreground mb-4 rainbow-text">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Me</a>
              <a href="/school" className="block text-muted-foreground hover:text-primary transition-colors">My School</a>
              <a href="/games" className="block text-muted-foreground hover:text-primary transition-colors">Games</a>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-lg text-foreground flex items-center justify-center gap-2">
            Made with love <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" /> ♥️
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Ronik Thapa Chhetri. All rights reserved.
          </p>
          
          {/* Secret Button - only on About page */}
          {showSecret && (
            <a 
              href="/secret-visitor" 
              className="inline-block mt-4 text-xs text-muted-foreground/30 hover:text-primary transition-colors cursor-pointer"
              title="🤫"
            >
              •••
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
