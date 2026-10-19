import React from 'react';

export default function ZumeraTab() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Top Tagline */}
      <div className="w-full text-center pt-16 md:pt-24 pb-12 md:pb-20 animate-fade-in">
        <span
          className="zumera-tagline-text"
          style={{
            color: '#414141',
            fontFamily: 'TrajanPro, sans-serif',
            fontSize: 'clamp(1.15rem, 2.2vw, 1.85rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            display: 'inline-block',
          }}
        >
          THE NEW AFRICA STANDARD
        </span>
      </div>

      {/* Dedicated Statement Section with long horizontal width & vertical height */}
      <section
        className="zumera-statement-section px-6 sm:px-12 md:px-16 animate-fade-in-up"
        style={{
          width: '100%',
          maxWidth: '82rem',
          minHeight: '48vh',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '2rem',
          paddingBottom: '3rem',
        }}
      >
        <span
          className="zumera-statement-text"
          style={{
            display: 'block',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 800,
            color: '#414141',
            fontSize: 'clamp(2.1rem, 4.3vw, 3.85rem)',
            lineHeight: '1.45',
            letterSpacing: '0.015em',
            maxWidth: '72rem',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          ZUMERA Is Revealing Africa’s <br className="hidden sm:inline" />
          Power, Freedom And Beauty To <br className="hidden sm:inline" />
          The World Through A New <br className="hidden sm:inline" />
          Standard Of Peerless <br className="hidden sm:inline" />
          Hospitality.
        </span>
      </section>

      {/* Learn More Button */}
      <div
        className="zumera-btn-wrapper animate-fade-in-up"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '2.5rem',
          paddingBottom: 'clamp(8rem, 18vh, 16rem)',
          marginBottom: '3rem',
        }}
      >
        <a
          href="https://zumeraproperty.com"
          target="_blank"
          rel="noreferrer"
          className="shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 inline-block text-center"
          style={{
            backgroundColor: '#0b2444',
            color: '#ffffff',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '1.15rem 3.5rem',
          }}
        >
          CLICK TO LEARN MORE
        </a>
      </div>
    </div>
  );
}
