import { useMemo } from "react";

const ParticleBackground = () => {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 12,
      size: Math.random() * 5 + 3,
      color: [
        'hsl(199 89% 48%)',   // Cyan
        'hsl(45 100% 50%)',    // Yellow
        'hsl(280 80% 60%)',    // Purple
        'hsl(330 90% 60%)',    // Pink
        'hsl(120 70% 50%)',    // Green
        'hsl(15 90% 55%)'      // Orange
      ][Math.floor(Math.random() * 6)],
      // Different animation types for variety
      animType: ['float-1', 'float-2', 'float-3', 'orbit'][Math.floor(Math.random() * 4)]
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle particle-${particle.animType}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}, 0 0 ${particle.size * 6}px ${particle.color}`
          }}
        />
      ))}
      
      {/* Extra large glowing orbs */}
      <div className="particle-orb orb-1" />
      <div className="particle-orb orb-2" />
      <div className="particle-orb orb-3" />
    </div>
  );
};

export default ParticleBackground;
