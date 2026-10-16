import React from 'react';

export default function AppIntersection({ externalClass = '', className = '', children }) {
  const combinedClass = [
    'relative w-full flex flex-col items-center justify-center py-[3rem] text-center',
    externalClass,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={combinedClass}>{children}</div>;
}
