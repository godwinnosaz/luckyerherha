import React from 'react';
import { Link } from 'react-router-dom';

export default function FullLogo({ size = '30px', src = '', invert = false }) {
  return (
    <Link to="/home" className={`brand-logo-link ${size}`}>
      <img
        alt="Lucky R. Erherha logo"
        className={`brand-logo-image ${invert ? 'brand-logo-image-invert' : ''}`}
        src={src}
      />
    </Link>
  );
}
