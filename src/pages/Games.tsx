import BackButton from "@/components/BackButton";
import { Gamepad2 } from "lucide-react";

const Games = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <BackButton />
      
      <div className="max-w-4xl mx-auto pt-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Gamepad2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Geometry Dash
          </h1>
          <p className="mt-2 text-muted-foreground">
            My favorite rhythm-based platformer game!
          </p>
        </div>

        {/* Game Embed */}
        <div className="rounded-xl overflow-hidden border border-border shadow-lg hover-glow bg-card">
          <iframe
            src="https://geometrydashfullversion.io/"
            title="Geometry Dash"
            className="w-full aspect-video"
            allowFullScreen
          />
        </div>

        {/* Game Info */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              About the Game
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Geometry Dash is a rhythm-based platformer where you jump and fly through danger. 
              Time your moves to the beat of the music and complete challenging levels!
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Why I Love It
            </h2>
            <ul className="text-muted-foreground space-y-2">
              <li>• Amazing electronic music</li>
              <li>• Challenging levels</li>
              <li>• Fun to practice and improve</li>
              <li>• Cool visual effects</li>
            </ul>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            How to Play
          </h2>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <kbd className="px-3 py-1 bg-secondary rounded-lg text-sm font-mono">Space</kbd>
              <span>or</span>
              <kbd className="px-3 py-1 bg-secondary rounded-lg text-sm font-mono">Click</kbd>
              <span>to Jump</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
