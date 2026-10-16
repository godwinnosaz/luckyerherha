import React from 'react';
import AppButton from '../components/AppButton';

export default function OnboardPage() {
  return (
    <>
      <style>{`
        .cta-blue:active, .cta-blue:hover {
          background: var(--accent);
          color: var(--secondary-color);
        }
        .cta-blue {
          transition: background .5s ease-in-out, color .5s ease-in-out;
        }
      `}</style>
      <div className="bg-[url(/assets/imgs/onboard/onboard-img.jpg)] bg-cover bg-center bg-no-repeat h-screen">
        <div className="flex justify-center items-center h-full flex-col relative">
          <span className="trajan-pro text-center text-[3rem] md:text-[5rem] mx-auto">
            LEFTOVERS ARE FOR SLAVES
          </span>
          <div className="absolute bottom-30 flex flex-col justify-center items-center">
            <p className="text-[1.1rem] pb-3 trajan-pro">
              JOIN <span className="animate-bounce inline-block">↓</span>
            </p>
            <AppButton routerLink="/home" className="trajan-pro cta-blue text-[1.3rem]">
              THE RISE OF ROYALS
            </AppButton>
          </div>
        </div>
      </div>
    </>
  );
}
