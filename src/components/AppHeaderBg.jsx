import React from 'react';

export default function AppHeaderBg({ bgImage, externalClass = '', children }) {
  // Extract URL from externalClass if bgImage prop is not explicitly passed
  let resolvedBg = bgImage;
  if (!resolvedBg) {
    const match = externalClass.match(/url\(['"]?([^'"]+)['"]?\)/);
    if (match) {
      resolvedBg = match[1];
    }
  }

  const cleanSectionClass = externalClass.replace(/bg-\[url\([^)]+\)\]/g, '');

  return (
    <section
      className={`relative p-8 flex text-center justify-center items-end min-h-[80vh] overflow-hidden ${cleanSectionClass}`}
    >
      {resolvedBg && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-image-motion pointer-events-none"
          style={{ backgroundImage: `url(${resolvedBg})` }}
        />
      )}
      <div className="relative z-10 w-full animate-hero-title-reveal">{children}</div>
    </section>
  );
}
