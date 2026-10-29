import React, { useState } from 'react';
import { 
  Building2, 
  QrCode, 
  Copy, 
  Check, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Smartphone, 
  Lock,
  ArrowRight,
  Info
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { openWhatsApp } from '../../utils/whatsapp';

export const PaymentDetails: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleShareScreenshot = () => {
    const message = `Hello Lavanya Tours & Travels, I have completed the booking advance payment. Sharing my transaction details / screenshot for confirmation.`;
    openWhatsApp(message);
  };

  const { bankDetails } = BUSINESS_CONFIG;

  return (
    <section id="payment-details" className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Ambient Highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Secure & Verified Payments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            OFFICIAL PAYMENT & BANK DETAILS
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Deposit booking advances and vehicle rental payments securely via Google Pay / UPI or Direct Bank Transfer to State Bank of India.
          </p>
        </div>

        {/* 2-Column Responsive Payment Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Bank Account Details Card */}
          <div className="lg:col-span-7 bg-brand-surface rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-brand-navy">
                    Bank Transfer (NEFT / RTGS / IMPS)
                  </h3>
                  <p className="text-xs text-brand-blue font-semibold mt-0.5">
                    {bankDetails.bankName}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                <Lock className="w-3 h-3 text-emerald-600" />
                Verified
              </span>
            </div>

            {/* Bank Fields with One-Click Copy */}
            <div className="space-y-4 py-6">
              {/* Account Holder */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200/80 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Account Holder Name
                  </span>
                  <p className="text-base font-extrabold text-brand-navy mt-0.5">
                    {bankDetails.accountHolder}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(bankDetails.accountHolder, 'name')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 hover:bg-brand-blue-light text-gray-700 hover:text-brand-blue border border-gray-200 transition-colors"
                  title="Copy Account Holder Name"
                >
                  {copiedField === 'name' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Account Number */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200/80 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Account Number
                  </span>
                  <p className="text-lg sm:text-xl font-mono font-extrabold text-brand-navy tracking-wider mt-0.5">
                    {bankDetails.accountNumber}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(bankDetails.accountNumber, 'accountNumber')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 hover:bg-brand-blue-light text-gray-700 hover:text-brand-blue border border-gray-200 transition-colors"
                  title="Copy Account Number"
                >
                  {copiedField === 'accountNumber' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* IFSC Code & Branch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      IFSC Code
                    </span>
                    <p className="text-base font-mono font-extrabold text-brand-orange tracking-wider mt-0.5">
                      {bankDetails.ifsc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(bankDetails.ifsc, 'ifsc')}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 hover:bg-brand-orange-light text-gray-700 hover:text-brand-orange border border-gray-200 transition-colors"
                    title="Copy IFSC Code"
                  >
                    {copiedField === 'ifsc' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Bank & Branch
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-brand-navy mt-1">
                    State Bank of India
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Gangothri Layout, Mysore
                  </p>
                </div>
              </div>
            </div>

            {/* Note & Policy */}
            <div className="bg-white/80 p-3.5 rounded-xl border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <span>
                Please mention your passenger name or booking date in the transfer remarks for faster verification.
              </span>
            </div>
          </div>

          {/* Right Column: Google Pay / UPI QR Code Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-brand-navy via-brand-navy to-brand-royal text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between text-center relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Instant UPI Payment</span>
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Scan & Pay with Any UPI App
              </h3>
              <p className="text-xs text-gray-300 mt-1 max-w-xs mx-auto">
                Google Pay • PhonePe • Paytm • BHIM • Amazon Pay
              </p>

              {/* QR Code Container */}
              <div className="my-5 flex flex-col items-center">
                <div className="bg-white p-3 rounded-2xl shadow-2xl border-4 border-white/20 max-w-[240px] transform hover:scale-102 transition-transform duration-300">
                  <img
                    src={bankDetails.qrImage}
                    alt="Punith My - Google Pay UPI QR Code"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
              </div>

              {/* UPI ID Pill with Copy Button */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-3 max-w-sm mx-auto flex items-center justify-between gap-2">
                <div className="text-left pl-1">
                  <span className="text-[10px] uppercase font-bold text-gray-300 block">
                    Official UPI ID
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-brand-gold block">
                    {bankDetails.upiId}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(bankDetails.upiId, 'upiId')}
                  className="px-3 py-1.5 bg-white text-brand-navy rounded-xl text-xs font-bold hover:bg-brand-gold hover:text-white transition-colors flex items-center gap-1 shadow-sm"
                  title="Copy UPI ID"
                >
                  {copiedField === 'upiId' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Bottom Action: WhatsApp Screenshot Button */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                type="button"
                onClick={handleShareScreenshot}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Share Screenshot on WhatsApp</span>
              </button>
              <p className="text-[11px] text-gray-300 mt-2">
                Share payment screenshot for instant e-receipt & booking confirmation
              </p>
            </div>
          </div>
        </div>

        {/* Extra Bottom Trust Badges */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-brand-surface p-4 rounded-2xl border border-gray-200/80 flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-xs font-semibold text-brand-navy">Official OPC Pvt Ltd Registered Account</span>
          </div>
          <div className="bg-brand-surface p-4 rounded-2xl border border-gray-200/80 flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-xs font-semibold text-brand-navy">Instant Payment Confirmation on WhatsApp</span>
          </div>
          <div className="bg-brand-surface p-4 rounded-2xl border border-gray-200/80 flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-xs font-semibold text-brand-navy">Zero Hidden Fees • 100% Secure Transfer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
