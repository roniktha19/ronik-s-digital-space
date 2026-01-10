import BackButton from "@/components/BackButton";
import HamburgerMenu from "@/components/HamburgerMenu";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollSection from "@/components/ScrollSection";
import { Gamepad2, Star, Zap } from "lucide-react";

const Games = () => {
  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-purple-950 via-pink-900/50 to-background relative overflow-hidden">
      <ParticleBackground />
      <HamburgerMenu />
      <BackButton />
      
      <div className="max-w-4xl mx-auto pt-12 relative z-10">
        <ScrollSection animation="down">
          <div className="text-center mb-8">
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/30 to-pink-500/30 mb-4 glow-border color-pulse">
              <Gamepad2 className="w-10 h-10 text-yellow-400" />
              <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              <Zap className="absolute -bottom-1 -left-1 w-5 h-5 text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <h1 className="text-4xl font-bold rainbow-text">
              Geometry Dash
            </h1>
            <p className="mt-2 text-muted-foreground">
              <span className="sticker">🎮</span> My favorite rhythm-based platformer game! <span className="sticker">🎵</span>
            </p>
          </div>
        </ScrollSection>

        {/* Game Embed */}
        <ScrollSection animation="up" delay={100}>
          <div className="rounded-2xl overflow-hidden border border-purple-500/50 shadow-lg hover-glow bg-card glow-border">
            <iframe
              src="https://geometrydashfullversion.io/"
              title="Geometry Dash"
              className="w-full aspect-video"
              allowFullScreen
            />
          </div>
        </ScrollSection>

        {/* Game Info */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ScrollSection animation="left" delay={200}>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 card-hover-yellow hover:scale-[1.02] shimmer h-full">
              <h2 className="text-xl font-semibold text-foreground mb-3 neon-glow">
                <span className="sticker">📖</span> About the Game
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Geometry Dash is a rhythm-based platformer where you jump and fly through danger. 
                Time your moves to the beat of the music and complete challenging levels!
              </p>
            </div>
          </ScrollSection>
          
          <ScrollSection animation="right" delay={300}>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30 card-hover-yellow hover:scale-[1.02] shimmer h-full">
              <h2 className="text-xl font-semibold text-foreground mb-3 neon-glow">
                <span className="sticker">💖</span> Why I Love It
              </h2>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full color-pulse"></span>
                  <span className="sticker">🎵</span> Amazing electronic music
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-pink-500 rounded-full color-pulse" style={{ animationDelay: '0.1s' }}></span>
                  <span className="sticker">🔥</span> Challenging levels
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full color-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="sticker">💪</span> Fun to practice and improve
                </li>
                <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full color-pulse" style={{ animationDelay: '0.3s' }}></span>
                  <span className="sticker">✨</span> Cool visual effects
                </li>
              </ul>
            </div>
          </ScrollSection>
        </div>

        {/* Controls */}
        <ScrollSection animation="up" delay={400}>
          <div className="mt-6 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 glow-border">
            <h2 className="text-xl font-semibold text-foreground mb-3 rainbow-text">
              <span className="sticker">🎯</span> How to Play
            </h2>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <kbd className="px-4 py-2 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-lg text-sm font-mono border border-yellow-500/50 text-yellow-300">Space</kbd>
                <span>or</span>
                <kbd className="px-4 py-2 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-lg text-sm font-mono border border-pink-500/50 text-pink-300">Click</kbd>
                <span>to Jump <span className="sticker">🚀</span></span>
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </div>
  );
};

export default Games;
