import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setScrollProgress(0);
    setShowScrollBtn(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollHeight > 0) {
        const progress = (totalScroll / scrollHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      setShowScrollBtn(totalScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{
          width: '100%',
          transform: `scaleX(${scrollProgress / 100})`,
        }}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top-btn animate-fade-in"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLineline="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
