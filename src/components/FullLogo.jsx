import React from 'react';
import { Link } from 'react-router-dom';

export default function FullLogo({ size = '', src = '' }) {
  return (
    <Link to="/home" className={`block ${size}`}>
      <img alt="Brand logo white " className="w-100" src={src} />
    </Link>
  );
}
