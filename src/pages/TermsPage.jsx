import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <style>{`
        header.terms-header {
          padding: 3rem 1rem 1rem;
        }
        header.terms-header h1 {
          margin: 0;
          font-size: clamp(2rem, 1.5rem + 2vw, 3rem);
          font-weight: 800;
          color: var(--text-grey);
        }
        main.terms-main {
          margin: 0 auto;
          padding: 0rem 1rem 4rem;
        }
        main.terms-main h2 {
          margin-top: 2.5rem;
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: .5rem;
        }
        main.terms-main h3 {
          margin-top: 1.75rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: #111827;
        }
        main.terms-main p {
          margin: 1rem 0;
          font-size: 1.15rem;
          font-weight: 500;
          line-height: 1.75;
          color: var(--text-grey);
        }
        main.terms-main ul {
          padding-left: 1.5rem;
          list-style-type: disc;
        }
        main.terms-main ul li {
          font-size: 1.15rem;
          font-weight: 500;
          line-height: 1.75;
          color: var(--text-grey);
          margin-bottom: 0.5rem;
        }
        .muted {
          color: #4b5563;
          font-size: 1.15rem;
          font-weight: 500;
        }
      `}</style>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden">
        <NavSm isDark={true} />
      </div>

      <header className="terms-header max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1>Terms and Conditions</h1>
        <p className="muted">
          Please read these terms carefully. By accessing or using this website or other digital
          platforms, you agree to be bound by the terms and conditions described herein and all
          terms incorporated by reference.
        </p>
      </header>

      <main className="terms-main max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="overview">
          <h2 id="overview">Overview</h2>
          <p>
            If you do not agree to all of these terms, do not use this website or other digital
            platforms of the site’s owner.
          </p>
          <p>
            This website is a personal platform through which I,{' '}
            <strong>Romeo Jackson Lucky Erherha</strong>, share my views, experiences, and
            occasional topics related to business, culture, and life.
          </p>
          <p>
            By accessing or using this site, you agree that you are doing so voluntarily and are
            either of legal adult age in your jurisdiction (generally 18 years or older, though this
            may vary) or have obtained the appropriate parental or legal guardian consent to engage
            with the content herein. This website is not intended for individuals under the age of
            18, and we do not knowingly collect personal information from minors.
          </p>
          <p>
            Your use of this site does not create any advisory, fiduciary, or business relationship
            between us.
          </p>
        </section>

        <section aria-labelledby="opinions">
          <h2 id="opinions">Opinions and Third‑Party Content</h2>
          <p>
            All opinions expressed are solely mine unless clearly stated otherwise. They do not
            represent the views of Zumera Group Limited, its partners, affiliates, or any
            businesses referenced.
          </p>
          <p>
            I am not responsible for the views of guest contributors, third‑party advertisers,
            commenters, or any external content linked or promoted here. Inclusion of any such
            materials does not imply endorsement or verification. Visitors are advised to
            independently evaluate any advice, claims, or products mentioned.
          </p>
        </section>

        <section aria-labelledby="intellectual-property">
          <h2 id="intellectual-property">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, videos, and other materials, is
            protected by copyright and other intellectual property laws. You may not reproduce,
            distribute, or modify any content without prior written consent. Usage is limited to
            personal, informational, and non‑commercial purposes.
          </p>
        </section>

        <section aria-labelledby="governing-law">
          <h2 id="governing-law">Governing Law &amp; Updates</h2>
          <p>
            This site operates under Nigerian law and is intended to remain compliant with
            applicable international standards concerning privacy, intellectual property, and
            digital expression. I reserve the right to update or modify these terms without prior
            notice. By continuing to access the website, you acknowledge that you do so at your own
            discretion and agree that I am not liable for any loss, misunderstanding, or action taken
            based on content found here.
          </p>
        </section>

        <section aria-labelledby="disclaimers">
          <h2 id="disclaimers">Disclaimers</h2>
          <p>
            The content provided on this website is for informational purposes only and does not
            constitute business, moral, or legal advice. While I strive to keep information up to
            date, I do not guarantee the accuracy, reliability, or completeness of any content.
          </p>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability">Limitation of Liability</h2>
          <p>
            I am not liable for any direct, indirect, incidental, or consequential damages
            resulting from the use or inability to use this website or its materials.
          </p>
        </section>

        <section aria-labelledby="privacy">
          <h2 id="privacy">Privacy Policy</h2>
          <p>
            I respect your privacy and remain committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data in compliance
            with local and international privacy laws, including the Nigerian Data Protection
            Regulation (NDPR) and the General Data Protection Regulation (GDPR).
          </p>

          <h3 id="collect">Information We May Collect</h3>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other
              details you provide via contact forms or newsletter sign‑ups.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and website usage data
              collected through cookies and analytics tools.
            </li>
          </ul>

          <h3 id="use">How We Use Your Information</h3>
          <ul>
            <li>To respond to inquiries and provide requested services.</li>
            <li>To send updates, newsletters, or promotional materials (with your consent).</li>
            <li>To improve the functionality and user experience of our website.</li>
          </ul>

          <h3 id="sharing">Sharing of Information</h3>
          <p>We do not sell, rent, or share your personal information with third parties except:</p>
          <ul>
            <li>When required by law.</li>
            <li>
              With trusted service providers assisting in website operations (e.g., hosting and
              analytics).
            </li>
            <li>When necessary to protect our rights or comply with legal obligations.</li>
          </ul>

          <h3 id="security">Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to safeguard your
            personal information against unauthorized access, alteration, or disclosure.
          </p>

          <h3 id="rights">Your Rights</h3>
          <p>
            Depending on your jurisdiction, you may have the following rights regarding your
            personal data:
          </p>
          <ul>
            <li>The right to access, update, or delete your personal information.</li>
            <li>The right to withdraw consent for data processing.</li>
            <li>
              The right to lodge a complaint with a data protection authority if you believe your
              rights have been violated.
            </li>
          </ul>

          <h3 id="cookies">Cookies</h3>
          <p>
            This website uses cookies to enhance your browsing experience. By continuing to use the
            site, you consent to the use of cookies. You can manage your cookie preferences through
            your browser settings.
          </p>
        </section>
      </main>

      <Footer color={true} />
    </>
  );
}
