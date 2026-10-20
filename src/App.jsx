import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import IntelligentAnimator from './components/IntelligentAnimator';
import WhatsAppButton from './components/WhatsAppButton';

import OnboardPage from './pages/OnboardPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';
import LegacyOfImpactPage from './pages/LegacyOfImpactPage';
import TheStoryTab from './pages/TheStoryTab';
import ZumeraTab from './pages/ZumeraTab';
import InvestorInfoTab from './pages/InvestorInfoTab';
import MovementPage from './pages/MovementPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <IntelligentAnimator />
      <WhatsAppButton />
      <div key={location.pathname} className="page-transition-enter">
        <Routes location={location}>
          <Route path="/" element={<OnboardPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mission&vision" element={<Navigate to="/about" replace />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/legacy-of-impact" element={<LegacyOfImpactPage />}>
            <Route index element={<ZumeraTab />} />
            <Route path="zumera" element={<ZumeraTab />} />
            <Route path="rj-brand" element={<Navigate to="/legacy-of-impact" replace />} />
            <Route path="investor-info" element={<Navigate to="/legacy-of-impact" replace />} />
          </Route>
          <Route path="/movement" element={<MovementPage />} />
          <Route path="/engagement" element={<Navigate to="/contact-us" replace />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}
