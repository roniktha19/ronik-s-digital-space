import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Brother from '@/pages/Brother';
import Mom from '@/pages/Mom';
import Dad from '@/pages/Dad';
import Games from '@/pages/Games';
import School from '@/pages/School';
import SecretVisitor from '@/pages/SecretVisitor';
import NotFound from '@/pages/NotFound';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/family/brother" element={<PageTransition><Brother /></PageTransition>} />
        <Route path="/family/mom" element={<PageTransition><Mom /></PageTransition>} />
        <Route path="/family/dad" element={<PageTransition><Dad /></PageTransition>} />
        <Route path="/games" element={<PageTransition><Games /></PageTransition>} />
        <Route path="/school" element={<PageTransition><School /></PageTransition>} />
        <Route path="/secret-visitor" element={<PageTransition><SecretVisitor /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
