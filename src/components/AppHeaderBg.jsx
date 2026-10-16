import React from 'react';

export default function AppHeaderBg({ externalClass = '', children }) {
  return (
    <section
      className={`p-8 flex text-center justify-center items-end min-h-[80vh] bg-cover bg-center bg-no-repeat ${externalClass}`}
    >
      <div>{children}</div>
    </section>
  );
}
