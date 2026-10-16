import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import OnboardPage from './pages/OnboardPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';
import LegacyOfImpactPage from './pages/LegacyOfImpactPage';
import TheStoryTab from './pages/TheStoryTab';
import ZumeraTab from './pages/ZumeraTab';
import InvestorInfoTab from './pages/InvestorInfoTab';
import MovementPage from './pages/MovementPage';
import EngagementPage from './pages/EngagementPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<OnboardPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/mission&vision" element={<MissionPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/legacy-of-impact" element={<LegacyOfImpactPage />}>
          <Route index element={<ZumeraTab />} />
          <Route path="zumera" element={<ZumeraTab />} />
          <Route path="rj-brand" element={<Navigate to="/legacy-of-impact" replace />} />
          <Route path="investor-info" element={<Navigate to="/legacy-of-impact" replace />} />
        </Route>
        <Route path="/movement" element={<MovementPage />} />
        <Route path="/engagement" element={<EngagementPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}
