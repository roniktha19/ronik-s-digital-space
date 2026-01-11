import { useState, useEffect } from 'react';

interface TypingTextProps {
  phrases: string[];
  speed?: number;
  wait?: number;
  showCursor?: boolean;
}

const TypingText = ({ phrases, speed = 80, wait = 2000, showCursor = true }: TypingTextProps) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), wait);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, speed, wait]);

  return (
    <span className="inline-flex items-center">
      <span className="rainbow-text">{text}</span>
      {showCursor && (
        <span className="ml-1 animate-pulse text-primary font-bold">|</span>
      )}
    </span>
  );
};

export default TypingText;
