import React from 'react';

export default function HamburgerMenu({ dark = false, isActive = false, onToggle }) {
  const lineClass = dark ? 'line-dark' : 'line';

  return (
    <>
      <style>{`
        .hamburger .line {
          width: 30px;
          height: 3px;
          background-color: #ecf0f1;
          display: block;
          margin: 4px auto;
          transition: all .3s ease-in-out;
        }
        .hamburger .line-dark {
          width: 30px;
          height: 3px;
          background-color: var(--footer-black);
          display: block;
          margin: 4px auto;
          transition: all .3s ease-in-out;
        }
        .hamburger:hover {
          cursor: pointer;
        }
        #hamburger-6.is-active {
          transition: all .3s ease-in-out;
          transition-delay: .6s;
          transform: rotate(45deg);
        }
        #hamburger-6.is-active .line:nth-child(2),
        #hamburger-6.is-active .line-dark:nth-child(2) {
          width: 0px;
        }
        #hamburger-6.is-active .line:nth-child(1),
        #hamburger-6.is-active .line:nth-child(3),
        #hamburger-6.is-active .line-dark:nth-child(1),
        #hamburger-6.is-active .line-dark:nth-child(3) {
          transition-delay: .3s;
        }
        #hamburger-6.is-active .line:nth-child(1),
        #hamburger-6.is-active .line-dark:nth-child(1) {
          transform: translateY(7px);
        }
        #hamburger-6.is-active .line:nth-child(3),
        #hamburger-6.is-active .line-dark:nth-child(3) {
          transform: translateY(-7px) rotate(90deg);
        }
      `}</style>
      <div
        id="hamburger-6"
        className={`hamburger ${isActive ? 'is-active' : ''}`}
        onClick={onToggle}
      >
        <span className={lineClass}></span>
        <span className={lineClass}></span>
        <span className={lineClass}></span>
      </div>
    </>
  );
}
