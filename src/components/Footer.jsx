import React from 'react';
import { Link } from 'react-router-dom';
import FullLogo from './FullLogo';

export default function Footer({ color = false, secondaryColor = false }) {
  const scrollToTopWithEasing = () => {
    const startY = window.pageYOffset;
    const startTime = performance.now();
    const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 800, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY * (1 - eased));
      if (elapsed < 800) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  if (color) {
    const bgClass = secondaryColor ? 'bg-(--secondary-color)' : 'bg-(--footer-black)';
    return (
      <footer className={`text-white ${bgClass}`}>
        <div className="relative z-10 flex flex-col flex-1 text-white max-w-sm md:max-w-7xl mx-auto w-full pt-16">
          <div className="flex flex-col items-center md:items-start mb-8 mr-4">
            <FullLogo src="assets/imgs/icons/logos/full_logo_white.png" size="w-[150px]" />
          </div>

          <div className="flex-1 py-8">
            <div className="max-w-2xl">
              <div className="mb-8 space-y-4 text-white/90">
                <p className="text-lg leading-relaxed manrope">
                  We were raised to think silence was wisdom. <br /> To shrink ourselves. <br /> To blend in. To say "thank you" for scraps.
                </p>
                <div className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed manrope">
                    Burn that mindset. We were not made for servitude. <br /> We are the blood of kings and queens. Now we rebuild <br /> the kingdom.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pb-8">
              <div className="flex flex-col-reverse lg:flex-row items-start lg:items-start gap-10 md:gap-0">
                <div className="mb-8 md:me-[15rem] lg:mb-0">
                  <button
                    type="button"
                    onClick={scrollToTopWithEasing}
                    className="cta-transparent hover:bg-white/10 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <div className="w-[15px]">
                      <img src="assets/imgs/icons/footer/to_top.png" alt="" className="w-full" />
                    </div>
                    <span className="manrope">BACK TO TOP</span>
                  </button>

                  <div className="space-y-3 manrope flex gap-2 pt-4">
                    <a
                      href="https://www.facebook.com/share/18tZawxAqR/?mibextid=qi2Omg"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-0"
                    >
                      <div className="w-[12px]">
                        <img src="assets/imgs/icons/footer/facebook.png" alt="" className="w-full" />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/luckyrerherha?igsh=MXZuamE4YTJoZHZidQ==&utm_source=ig_contact_invite"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-0"
                    >
                      <div className="w-[15px]">
                        <img src="assets/imgs/icons/footer/insta.png" alt="" className="w-full" />
                      </div>
                    </a>
                    <a
                      href="http://www.LinkedIn.com/in/luckyrerherha"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-0"
                    >
                      <div className="w-[15px]">
                        <img src="assets/imgs/icons/footer/linkedin.png" alt="" className="w-full" />
                      </div>
                    </a>
                    <a
                      href="https://www.threads.com/@luckyrerherha?invite=0"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-0"
                    >
                      <div className="w-[15px]">
                        <img src="assets/imgs/icons/footer/thread.png" alt="" className="w-full" />
                      </div>
                    </a>
                    <a
                      href="https://www.tiktok.com/@lucky.r..erherha?_t=ZS-8ySGnj39cn3&_r=1"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-0"
                    >
                      <div className="w-[15px]">
                        <img src="assets/imgs/icons/footer/tiktok.png" alt="" className="w-full" />
                      </div>
                    </a>
                    <a
                      href="https://x.com/luckyrerherha?s=21"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-0"
                    >
                      <div className="w-[15px]">
                        <img src="assets/imgs/icons/footer/twitter.png" alt="" className="w-full" />
                      </div>
                    </a>
                    <a
                      href="https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 mb-0"
                    >
                      <div className="w-[17px]">
                        <img src="assets/imgs/icons/footer/yt.png" alt="" className="w-full" />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                  <div className="space-y-4 manrope">
                    <Link to="/home" className="block text-white transition-colors duration-300">
                      HOME
                    </Link>
                    <Link to="/about" className="block text-white transition-colors duration-300">
                      ABOUT LRE
                    </Link>
                    <Link to="/mission&vision" className="block text-white transition-colors duration-300">
                      MISSION & VISION
                    </Link>
                  </div>
                  <div className="space-y-4 manrope">
                    <Link to="/leadership" className="block text-white transition-colors duration-300">
                      THOUGHT LEADERSHIP
                    </Link>
                    <Link to="/legacy-of-impact" className="block text-white transition-colors duration-300">
                      RJ BRAND
                    </Link>
                    <Link to="/engagement" className="block text-white transition-colors duration-300">
                      ENGAGEMENT
                    </Link>
                  </div>
                  <div className="space-y-4 manrope">
                    <Link to="/movement" className="block text-white transition-colors duration-300">
                      MOVEMENT
                    </Link>
                    <Link to="/terms" className="block text-white transition-colors duration-300">
                      LEGAL TERMS
                    </Link>
                  </div>
                </div>

                <div>
                  <Link to="/contact-us" className="block text-white hover:text-white transition-colors duration-300 manrope font-bold mb-2">
                    CONTACT
                  </Link>
                  <div>
                    <p className="manrope text-sm text-gray-300">LRE@luckyerherha.com</p>
                    <p className="manrope text-sm text-gray-300">+2347045068663</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400 manrope">
            <p>Copyright: © 2025 Lucky R. Erherha. All Rights Reserved — The Rise of Royals</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="text-white relative bg-[url(/assets/imgs/home/Footer1.png)] min-h-screen flex flex-col overflow-hidden bg-cover bg-center bg-no-repeat">
      <div className="max-w-2xs md:max-w-7xl mx-auto flex flex-col w-full flex-1">
        <div className="py-10 self-center md:self-start">
          <FullLogo src="assets/imgs/icons/logos/full_logo_white.png" size="w-[150px]" />
        </div>

        <div className="flex-1 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col">
              <div className="max-w-md flex-1">
                <p className="text-white-200 text-[1.1rem] mb-4 leading-relaxed manrope">
                  We were raised to think silence was wisdom. <br className="hidden md:block" /> To shrink ourselves. <br className="hidden md:block" /> Burn that mindset. We were not made for servitude. <br className="hidden md:block" /> We are the blood of kings and queens. Now we rebuild <br className="hidden md:block" /> the kingdom.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={scrollToTopWithEasing}
                  className="cta-transparent hover:bg-white/10 transition-colors duration-300 flex items-center space-x-2"
                >
                  <div className="w-[15px]">
                    <img src="assets/imgs/icons/footer/to_top.png" alt="" className="w-full" />
                  </div>
                  <span className="manrope">BACK TO TOP</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                <div className="space-y-4 manrope">
                  <Link to="/home" className="block text-white transition-colors duration-300">
                    HOME
                  </Link>
                  <Link to="/about" className="block text-white transition-colors duration-300">
                    ABOUT LRE
                  </Link>
                  <Link to="/mission&vision" className="block text-white transition-colors duration-300">
                    MISSION & VISION
                  </Link>
                  <Link to="/leadership" className="block text-white transition-colors duration-300">
                    THOUGHT LEADERSHIP
                  </Link>
                  <Link to="/legacy-of-impact" className="block text-white transition-colors duration-300">
                    LEGACY OF IMPACT
                  </Link>
                  <Link to="/engagement" className="block text-white transition-colors duration-300">
                    ENGAGEMENT
                  </Link>
                  <Link to="/movement" className="block text-white transition-colors duration-300">
                    MOVEMENT
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col">
              <div className="flex-1">
                <Link to="/terms" className="text-white hover:text-white transition-colors duration-300 manrope">
                  TERMS & CONDITIONS
                </Link>
              </div>
              <div className="space-y-2 pt-8 manrope">
                <a
                  href="https://www.facebook.com/share/18tZawxAqR/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white transition-colors duration-300"
                >
                  <div className="w-[12px]">
                    <img src="assets/imgs/icons/footer/facebook.png" alt="" className="w-full" />
                  </div>
                  <span>FACEBOOK</span>
                </a>
                <a
                  href="https://www.instagram.com/luckyrerherha?igsh=MXZuamE4YTJoZHZidQ==&utm_source=ig_contact_invite"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white transition-colors duration-300"
                >
                  <div className="w-[15px]">
                    <img src="assets/imgs/icons/footer/insta.png" alt="" className="w-full" />
                  </div>
                  <span>INSTAGRAM</span>
                </a>
                <a
                  href="http://www.LinkedIn.com/in/luckyrerherha"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white transition-colors duration-300"
                >
                  <div className="w-[15px]">
                    <img src="assets/imgs/icons/footer/linkedin.png" alt="" className="w-full" />
                  </div>
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://www.threads.com/@luckyrerherha?invite=0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white transition-colors duration-300"
                >
                  <div className="w-[15px]">
                    <img src="assets/imgs/icons/footer/thread.png" alt="" className="w-full" />
                  </div>
                  <span>THREADS</span>
                </a>
                <a
                  href="https://www.tiktok.com/@lucky.r..erherha?_t=ZS-8ySGnj39cn3&_r=1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white transition-colors duration-300"
                >
                  <div className="w-[15px]">
                    <img src="assets/imgs/icons/footer/tiktok.png" alt="" className="w-full" />
                  </div>
                  <span>TIKTOK</span>
                </a>
                <a
                  href="https://x.com/luckyrerherha?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white transition-colors duration-300"
                >
                  <div className="w-[15px]">
                    <img src="assets/imgs/icons/footer/twitter.png" alt="" className="w-full" />
                  </div>
                  <span>X (TWITTER)</span>
                </a>
                <a
                  href="https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white transition-colors duration-300"
                >
                  <div className="w-[17px]">
                    <img src="assets/imgs/icons/footer/yt.png" alt="" className="w-full" />
                  </div>
                  <span>YOUTUBE</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Link to="/contact-us" className="block text-white hover:text-white transition-colors duration-300 manrope font-bold mb-4">
                CONTACT
              </Link>
              <div>
                <p className="manrope text-sm text-gray-300">LRE@luckyerherha.com</p>
                <p className="manrope text-sm text-gray-300">+2347045068663</p>
              </div>
              <div className="mt-8 md:hidden">
                <Link to="/contact-us" className="block hover:text-white transition-colors duration-300 manrope mb-5">
                  BOOK LRE
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="px-8 py-6 mt-12 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-(--white) text-sm manrope">
              Copyright: © 2025 Lucky R. Erherha. All Rights Reserved — The Rise of Royals
            </p>
          </div>
        </footer>
      </div>
    </footer>
  );
}
