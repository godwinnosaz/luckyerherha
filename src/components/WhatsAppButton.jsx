import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347045068663"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="relative z-10 h-8 w-8" fill="none" aria-hidden="true">
        <path
          d="M16 4.5a11 11 0 0 0-9.45 16.63L5 27l6.03-1.5A11 11 0 1 0 16 4.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12.2 10.8c-.35-.78-.72-.8-1.05-.81h-.9c-.32 0-.84.12-1.28.6-.44.49-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.32 5.32 8.2 7.24 4.06 1.59 4.89 1.27 5.77 1.19.88-.08 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.02-.74-3.85-2.37-1.42-1.27-2.38-2.84-2.66-3.32-.28-.48-.03-.74.21-.98.21-.21.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.53Z"
          fill="currentColor"
          transform="translate(5 1) scale(.68)"
        />
      </svg>
    </a>
  );
}