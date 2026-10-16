import React from 'react';
import { Link } from 'react-router-dom';

export default function AppButton({ routerLink, href, externalClass = '', target = '_self', onClick, children, className = '' }) {
  const combinedClass = [externalClass, className].filter(Boolean).join(' ');

  if (routerLink) {
    return (
      <Link to={routerLink} className={combinedClass} target={target} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClass} onClick={onClick}>
      {children}
    </button>
  );
}
