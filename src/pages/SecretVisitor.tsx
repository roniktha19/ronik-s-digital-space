import BackButton from "@/components/BackButton";
import ParticleBackground from "@/components/ParticleBackground";
import { Eye, Sparkles, Lock } from "lucide-react";

const SecretVisitor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 pt-16 px-4">
        <div className="max-w-lg mx-auto">
          <BackButton />
          
          <div className="mt-12 text-center">
            {/* Secret Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-6 py-3 rounded-full mb-8 animate-pulse">
              <Lock className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Secret Area</span>
            </div>
            
            {/* Main Content */}
            <div className="p-8 rounded-3xl bg-card/50 border border-border backdrop-blur-sm glow-border">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center color-pulse">
                  <Eye className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-4 rainbow-text">
                Welcome, Visitor! 👋
              </h1>
              
              {/* Visitor Tag */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold mb-6 shimmer">
                <Sparkles className="w-5 h-5" />
                VISITOR
                <span className="text-xs opacity-70">(not editor)</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                🎉 You found the secret page! This is a special area for curious visitors like you.
              </p>
              
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                <p className="text-yellow-300 text-sm">
                  ⚠️ You have <strong>view-only</strong> access. Only Ronik can edit this website!
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm">🔍 Explorer</span>
                <span className="px-4 py-2 rounded-full bg-accent/20 text-accent text-sm">👀 Viewer</span>
                <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">🌟 Curious</span>
              </div>
              
              {/* Redirect Button */}
              <a 
                href="https://lovable.dev/projects/f095bc2b-8fa0-4ce0-9c42-c2c8e0d0cab3"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shimmer"
              >
                <Sparkles className="w-5 h-5" />
                Enter Ronik's Workshop 🚀
              </a>
            </div>
            
            <p className="mt-8 text-muted-foreground/50 text-sm">
              Shhh... keep this secret between us! 🤫
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretVisitor;
