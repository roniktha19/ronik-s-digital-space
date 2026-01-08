import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  animation?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

const ScrollSection = ({ 
  children, 
  animation = "up", 
  delay = 0,
  className = "" 
}: ScrollSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = {
    left: "slide-in-left",
    right: "slide-in-right",
    up: "slide-in-up",
    down: "slide-in-down",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
