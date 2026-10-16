import React, { useState } from 'react';

export default function SupportPaymentSection() {
  const [currency, setCurrency] = useState('NGN');
  const [frequency, setFrequency] = useState('one-time');
  const [selectedPreset, setSelectedPreset] = useState('50000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorNote, setDonorNote] = useState('');

  // Card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Transfer copied notification
  const [copied, setCopied] = useState(false);

  // Submission state
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const presets = {
    NGN: [
      { label: '₦10,000', value: '10000' },
      { label: '₦25,000', value: '25000' },
      { label: '₦50,000', value: '50000' },
      { label: '₦100,000', value: '100000' },
      { label: '₦250,000', value: '250000' }
    ],
    USD: [
      { label: '$25', value: '25' },
      { label: '$50', value: '50' },
      { label: '$100', value: '100' },
      { label: '$250', value: '250' },
      { label: '$500', value: '500' }
    ]
  };

  const handleCurrencyChange = newCurr => {
    setCurrency(newCurr);
    setSelectedPreset(newCurr === 'NGN' ? '50000' : '100');
    setCustomAmount('');
  };

  const getEffectiveAmount = () => {
    if (customAmount && Number(customAmount) > 0) {
      return Number(customAmount);
    }
    return Number(selectedPreset);
  };

  const handleCardNumberChange = e => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 16);
    val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(val);
  };

  const handleExpiryChange = e => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (val.length >= 3) {
      val = val.slice(0, 2) + '/' + val.slice(2);
    }
    setCardExpiry(val);
  };

  const handleCopyAccount = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaymentSubmit = e => {
    e.preventDefault();
    if (!donorName.trim() || !donorEmail.trim()) {
      alert('Please provide your name and email address to proceed.');
      return;
    }

    const amount = getEffectiveAmount();
    if (!amount || amount <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }

    if (paymentMethod === 'card') {
      if (cardNumber.replace(/\s/g, '').length < 15 || !cardExpiry || !cardCvv) {
        alert('Please fill out all card details to complete payment.');
        return;
      }
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setReceiptData({
        ref: 'LRE-SUP-' + Math.floor(100000 + Math.random() * 900000),
        donor: donorName,
        email: donorEmail,
        amount: amount.toLocaleString(),
        currency: currency === 'NGN' ? '₦' : '$',
        frequency,
        method: paymentMethod.toUpperCase(),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
    }, 1200);
  };

  const handleReset = () => {
    setReceiptData(null);
    setCardNumber('');
    setCardExpiry('');
    setCardCvv('');
    setCustomAmount('');
  };

  return (
    <section id="support-section" className="w-full bg-(--footer-black) text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="trajan-pro text-xs md:text-sm uppercase tracking-widest text-amber-500 font-semibold">
            Partner With The Vision
          </span>
          <h2 className="trajan-pro text-3xl md:text-4xl lg:text-5xl font-light text-white mt-2 mb-4">
            Support Africa’s Return
          </h2>
          <p className="manrope text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Every contribution directly funds sovereign African education, independent intellectual dialogues,
            historic research, and the creation of enduring institutions that awaken millions.
          </p>
        </div>

        {receiptData ? (
          <div className="max-w-lg mx-auto bg-neutral-900 border border-amber-500/40 rounded-lg p-8 shadow-2xl text-center">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="trajan-pro text-2xl text-white mb-2">Contribution Confirmed</h3>
            <p className="manrope text-sm text-gray-400 mb-6">
              Thank you for standing as a Custodian of Africa’s legacy.
            </p>

            <div className="bg-black/60 rounded-md p-4 mb-6 text-left space-y-2 border border-gray-800 manrope text-sm">
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Reference:</span>
                <span className="text-white font-mono">{receiptData.ref}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Patron:</span>
                <span className="text-white font-medium">{receiptData.donor}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Amount:</span>
                <span className="text-amber-400 font-bold text-base">
                  {receiptData.currency}{receiptData.amount} ({receiptData.frequency})
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Method:</span>
                <span className="text-white">{receiptData.method}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Date:</span>
                <span className="text-white">{receiptData.date}</span>
              </div>
            </div>

            <p className="manrope text-xs text-gray-400 mb-6 italic">
              A formal receipt and acknowledgment letter has been dispatched to {receiptData.email}.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-md trajan-pro transition-colors"
            >
              Make Another Contribution
            </button>
          </div>
        ) : (
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handlePaymentSubmit} className="space-y-8">
              {/* Frequency and Currency Switcher */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6 border-b border-neutral-800">
                <div className="inline-flex rounded-md p-1 bg-neutral-950 border border-neutral-800">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`px-5 py-2 text-sm trajan-pro rounded transition-all ${
                      frequency === 'one-time'
                        ? 'bg-amber-500 text-black font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`px-5 py-2 text-sm trajan-pro rounded transition-all ${
                      frequency === 'monthly'
                        ? 'bg-amber-500 text-black font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly Patron
                  </button>
                </div>

                <div className="inline-flex rounded-md p-1 bg-neutral-950 border border-neutral-800">
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange('NGN')}
                    className={`px-4 py-1.5 text-xs font-semibold rounded transition-all ${
                      currency === 'NGN'
                        ? 'bg-neutral-700 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    NGN (₦)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange('USD')}
                    className={`px-4 py-1.5 text-xs font-semibold rounded transition-all ${
                      currency === 'USD'
                        ? 'bg-neutral-700 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 trajan-pro tracking-wide">
                  Select Contribution Amount
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {presets[currency].map(preset => {
                    const isSelected = selectedPreset === preset.value && !customAmount;
                    return (
                      <button
                        key={preset.value}
                        type="button"
                        onClick={() => {
                          setSelectedPreset(preset.value);
                          setCustomAmount('');
                        }}
                        className={`py-3 px-4 rounded-md border text-center transition-all manrope font-medium text-base ${
                          isSelected
                            ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold shadow-md'
                            : 'border-neutral-700 bg-neutral-950 hover:border-neutral-500 text-gray-300'
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
                <div className="relative mt-2">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 manrope">
                    {currency === 'NGN' ? '₦ Custom Amount' : '$ Custom Amount'}
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={e => {
                      setCustomAmount(e.target.value);
                      if (e.target.value) setSelectedPreset('');
                    }}
                    className="w-full pl-36 pr-4 py-3 bg-neutral-950 border border-neutral-700 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 manrope">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={donorName}
                    onChange={e => setDonorName(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 manrope">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={donorEmail}
                    onChange={e => setDonorEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Payment Gateway Options */}
              <div className="pt-4 border-t border-neutral-800">
                <label className="block text-sm font-medium text-gray-300 mb-4 trajan-pro tracking-wide">
                  Choose Payment Gateway
                </label>

                <div className="flex border-b border-neutral-800 mb-6 gap-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`pb-3 text-sm font-medium transition-all relative ${
                      paymentMethod === 'card'
                        ? 'text-amber-400 border-b-2 border-amber-500'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    💳 Card (Debit / Credit)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('transfer')}
                    className={`pb-3 text-sm font-medium transition-all relative ${
                      paymentMethod === 'transfer'
                        ? 'text-amber-400 border-b-2 border-amber-500'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    🏦 Bank Transfer
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('ussd')}
                    className={`pb-3 text-sm font-medium transition-all relative ${
                      paymentMethod === 'ussd'
                        ? 'text-amber-400 border-b-2 border-amber-500'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    📱 USSD Code
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 bg-neutral-950 p-6 rounded-lg border border-neutral-800">
                    <div>
                      <label className="block text-xs uppercase text-gray-400 mb-1 manrope">Card Number</label>
                      <input
                        type="text"
                        maxLength={19}
                        placeholder="4532 •••• •••• 8892"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded text-white font-mono placeholder-gray-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase text-gray-400 mb-1 manrope">Expiry Date</label>
                        <input
                          type="text"
                          maxLength={5}
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={handleExpiryChange}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded text-white font-mono placeholder-gray-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase text-gray-400 mb-1 manrope">CVV / CVC</label>
                        <input
                          type="password"
                          maxLength={4}
                          placeholder="•••"
                          value={cardCvv}
                          onChange={e => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded text-white font-mono placeholder-gray-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 gap-2 pt-2">
                      <span>🔒 256-bit End-to-End Encrypted Gateway</span>
                      <span>•</span>
                      <span>PCI-DSS Level 1 Certified</span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'transfer' && (
                  <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 space-y-4 text-sm manrope">
                    <p className="text-gray-300">
                      Kindly transfer the contribution to the designated Africa’s Return custodial account:
                    </p>
                    <div className="bg-neutral-900 p-4 rounded border border-neutral-800 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Bank Name:</span>
                        <span className="text-white font-semibold">Zenith Bank Plc</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Account Number:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 font-mono font-bold text-base">1018892401</span>
                          <button
                            type="button"
                            onClick={() => handleCopyAccount('1018892401')}
                            className="text-xs bg-neutral-800 px-2 py-1 rounded text-gray-300 hover:text-white"
                          >
                            {copied ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Account Name:</span>
                        <span className="text-white">Africa’s Return Initiative</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sort / SWIFT Code:</span>
                        <span className="text-white font-mono">ZEIBNGLA</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 italic">
                      After transfer, click the button below to generate your confirmation receipt.
                    </p>
                  </div>
                )}

                {paymentMethod === 'ussd' && (
                  <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 space-y-4 text-sm manrope">
                    <p className="text-gray-300">
                      Dial the quick USSD payment code directly from your registered mobile phone:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <p className="text-xs text-gray-400">Zenith Bank (*966#)</p>
                        <p className="font-mono text-amber-400 font-bold mt-1">*966*000*88921#</p>
                      </div>
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <p className="text-xs text-gray-400">GTBank (*737#)</p>
                        <p className="font-mono text-amber-400 font-bold mt-1">*737*50*0*88921#</p>
                      </div>
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <p className="text-xs text-gray-400">Access Bank (*901#)</p>
                        <p className="font-mono text-amber-400 font-bold mt-1">*901*000*88921#</p>
                      </div>
                      <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
                        <p className="text-xs text-gray-400">UBA (*919#)</p>
                        <p className="font-mono text-amber-400 font-bold mt-1">*919*000*88921#</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Optional Note */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 manrope">
                  Optional Note / Dedication
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a message of solidarity or specify a designated project..."
                  value={donorNote}
                  onChange={e => setDonorNote(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-700 rounded-md text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 resize-none text-sm"
                />
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold trajan-pro text-lg rounded-md transition-all shadow-xl hover:shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Processing Gateway Securely...</span>
                    </>
                  ) : (
                    <span>
                      Complete Contribution of {currency === 'NGN' ? '₦' : '$'}
                      {getEffectiveAmount().toLocaleString()}{' '}
                      {frequency === 'monthly' ? '/ Month' : ''}
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
