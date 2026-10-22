import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import Footer from '../components/Footer';
import SupportPaymentSection from '../components/SupportPaymentSection';
import EngagementPage from './EngagementPage';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    email: '',
    countryCode: 'NG',
    phone: '',
    eventType: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const eventTypes = [
    'A Keynote Address',
    'A Corporate Event',
    'An Academic or Policy Dialogue',
    'A Brand & Product Launch',
    'A Political & Socioeconomic Gathering',
    'A Private Conversation or Fireside Dialogue'
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const requiredFields = [
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'country', label: 'Country' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone Number' },
      { key: 'eventType', label: 'Event Type' },
      { key: 'message', label: 'Message' }
    ];

    const missing = [];
    for (const item of requiredFields) {
      const val = formData[item.key];
      if (!val || String(val).trim() === '') {
        missing.push(item.label);
      }
    }

    if (missing.length > 0) {
      alert(`Please fill out the following required field(s):\n- ${missing.join('\n- ')}`);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        company: formData.company,
        message: formData.message,
        phone: formData.phone,
        countryCode: formData.countryCode,
        eventType: formData.eventType
      };

      const res = await fetch('https://formspree.io/f/mvgwwqjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          country: '',
          email: '',
          countryCode: 'NG',
          phone: '',
          eventType: '',
          message: ''
        });
      } else {
        alert('Thank you for contacting us! We will get back to you soon.');
      }
    } catch (err) {
      alert('Thank you for contacting us! We will get back to you soon.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden">
        <NavSm isDark={true} />
      </div>

      {/* <AppIntersection externalClass="bg-(--white) sticky top-0 z-15">
        <h1 className="trajan-pro text-(--text-grey) text-4xl">Book LRE</h1>
      </AppIntersection> */}

      <EngagementPage embedded />

      <div className="min-h-[120vh] flex items-start justify-start py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto justify-between">
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col md:items-start text-justify md:text-left mb-10">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 manrope md:trajan-pro leading-tight mb-8 start-text">
                Events &amp; Engagements <br className="hidden md:block" /> with LRE{' '}
                <br className="hidden md:block" /> (Lucky R. Erherha).
              </h1>
              <div className="space-y-4 text-gray-700 text-justify md:text-left">
                <div className="leading-6 space-y-6">
                  <p>
                    LRE is not a speaker. He is an awakening.{' '}
                    <br /> Every appearance, whether in a private boardroom or a grand auditorium,
                    leaves audiences with conviction, cultural pride, intellectual clarity, and a
                    renewed hunger for greatness.
                  </p>
                  <p>
                    To invite LRE to your event, conference, executive retreat, or private dialogue,
                    please complete the booking request form.
                  </p>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <span className="font-black uppercase trajan-pro">Keynotes:</span> Culture,
                      African Renaissance, Enterprise, Sacred Geometry, Heritage.
                    </li>
                    <li>
                      <span className="font-black uppercase trajan-pro">Panels &amp; Dialogues:</span>{' '}
                      Continental Rebuilding, Capital, Sovereignty, Modern African Identity.
                    </li>
                    <li>
                      <span className="font-black uppercase trajan-pro">Private Sessions:</span>{' '}
                      Sovereign strategy for leaders, thinkers, and builders.
                    </li>
                  </ul>
                  <p className="mt-6">
                    Our team reviews every invitation with care and will respond within 48 to 72
                    hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-(--footer-black) py-[6rem] px-[3rem] h-full max-w-[42rem]">
            <form onSubmit={handleSubmit} className="space-y-10 w-full h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="The name of your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                    Country <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    placeholder="Where are you booking from?"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="flex w-full min-w-0">
                    <div className="relative flex-shrink-0">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="appearance-none bg-black border border-gray-300 rounded-l-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                      >
                        <option value="NG">NG</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="CA">CA</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-1.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+234 802 677 3682"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 min-w-0 w-full px-4 py-3 bg-white border border-l-0 border-gray-300 rounded-r-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-4">
                  Event Type <span className="text-red-400">*</span>
                </label>
                <div className="space-y-3">
                  {eventTypes.map(type => (
                    <div key={type} className="flex items-center mb-1">
                      <input
                        type="radio"
                        id={type}
                        name="eventType"
                        value={type}
                        checked={formData.eventType === type}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mr-2"
                      />
                      <label htmlFor={type} className="text-sm text-gray-300 cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="8"
                  placeholder="Leave us a message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-md text-white font-medium bg-black/60 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors uppercase trajan-pro text-[1.1rem] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SupportPaymentSection />

      <Footer color={true} />
    </>
  );
}
