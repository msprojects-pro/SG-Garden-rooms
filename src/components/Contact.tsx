import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ThumbsUp, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, ENQUIRY_OPTIONS } from '../data/content';

interface ContactProps {
  selectedCategory?: string;
  onClearCategory?: () => void;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  lookingFor: string;
  preferredLocation: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  lookingFor?: string;
}

export function Contact({ selectedCategory, onClearCategory }: ContactProps) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    lookingFor: selectedCategory || '',
    preferredLocation: 'Peterlee',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync category if chosen from cards
  useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, lookingFor: selectedCategory }));
    }
  }, [selectedCategory]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.trim().length < 9) {
      errs.phone = 'Please provide a valid UK telephone number.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.lookingFor) {
      errs.lookingFor = 'Please select what you are looking for.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearCategory) onClearCategory();
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      lookingFor: '',
      preferredLocation: 'Peterlee',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#151515] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#B7D51F]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7D51F]">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-heading [text-wrap:balance]">
            Ready To Create More Space?
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Tell S&G Garden Rooms what you have in mind and discuss a garden building tailored to your requirements.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Business Contact & Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white font-heading mb-6 border-b border-white/10 pb-4">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#B7D51F]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">
                      Direct Telephone
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneTel}`}
                      className="text-lg font-bold text-white hover:text-[#B7D51F] transition-colors tabular-nums block"
                    >
                      {BUSINESS_INFO.phoneInternational}
                    </a>
                    <span className="text-xs text-white/60">
                      Local: <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="hover:text-white underline">{BUSINESS_INFO.phoneDisplay}</a>
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#B7D51F]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-base sm:text-lg font-medium text-white hover:text-[#B7D51F] transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address & Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#B7D51F]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">
                      Workshop & Location
                    </p>
                    <p className="text-base font-medium text-white leading-snug">
                      {BUSINESS_INFO.address.street}
                    </p>
                    <p className="text-sm text-white/70">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.country}
                    </p>
                  </div>
                </div>

                {/* Facebook Social Link */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-base font-extrabold text-[#B7D51F]">f</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">
                      Social / Updates
                    </p>
                    <a
                      href={BUSINESS_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-white hover:text-[#B7D51F] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Find us on Facebook ({BUSINESS_INFO.facebook})</span>
                    </a>
                  </div>
                </div>

                {/* Rating Highlight */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B7D51F] flex items-center justify-center shrink-0">
                    <ThumbsUp className="w-4 h-4 text-[#151515]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#B7D51F] font-bold">
                      Customer Feedback
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.rating} · Based in Peterlee, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call S&G</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-sm text-center"
              >
                <Mail className="w-4 h-4 text-[#B7D51F]" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Premium Enquiry Form */}
          <div className="lg:col-span-7 bg-[#1c1c1c] border border-white/10 p-6 sm:p-10 rounded-sm shadow-xl">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#B7D51F]/20 border border-[#B7D51F] text-[#B7D51F] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-md mx-auto mb-6 leading-relaxed">
                  Your enquiry regarding a <strong className="text-[#B7D51F]">{formData.lookingFor}</strong> has been received. S&G Garden Rooms will review your project details and get back to you promptly.
                </p>
                <div className="p-4 bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1 mb-8">
                  <p><span className="text-white/50">Contact phone:</span> <span className="font-semibold text-white">{formData.phone}</span></p>
                  <p><span className="text-white/50">Email:</span> <span className="font-semibold text-white">{formData.email}</span></p>
                  <p><span className="text-white/50">Location:</span> <span className="font-semibold text-white">{formData.preferredLocation || 'Peterlee'}</span></p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading mb-1">
                    Send An Enquiry
                  </h3>
                  <p className="text-xs text-white/60">
                    Fill out your project details below and we will get back to you with advice on layouts and construction.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                    Name <span className="text-[#B7D51F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Smith"
                    className={`w-full px-4 py-3 bg-[#151515] border text-sm text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-[#B7D51F] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/15'
                    }`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Two Column: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      Phone <span className="text-[#B7D51F]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07535 123456"
                      className={`w-full px-4 py-3 bg-[#151515] border text-sm text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-[#B7D51F] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      Email <span className="text-[#B7D51F]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. david@example.co.uk"
                      className={`w-full px-4 py-3 bg-[#151515] border text-sm text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-[#B7D51F] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                {/* What Are You Looking For? Dropdown */}
                <div>
                  <label htmlFor="lookingFor" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                    What Are You Looking For? <span className="text-[#B7D51F]">*</span>
                  </label>
                  <select
                    id="lookingFor"
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#151515] border text-sm text-white rounded-sm focus:outline-none focus:border-[#B7D51F] transition-colors ${
                      errors.lookingFor ? 'border-red-500' : 'border-white/15'
                    }`}
                  >
                    <option value="" disabled className="bg-[#151515] text-white/40">
                      Select building type or purpose...
                    </option>
                    {ENQUIRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#151515] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.lookingFor && <p className="mt-1.5 text-xs text-red-400">{errors.lookingFor}</p>}
                </div>

                {/* Preferred Location */}
                <div>
                  <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                    Preferred Location / Town
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.preferredLocation}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    placeholder="e.g. Peterlee, County Durham, or surrounding North East"
                    className="w-full px-4 py-3 bg-[#151515] border border-white/15 text-sm text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-[#B7D51F] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                    Message / Desired Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your garden size, how you want to use the room, or any particular questions..."
                    className="w-full px-4 py-3 bg-[#151515] border border-white/15 text-sm text-white placeholder-white/30 rounded-sm focus:outline-none focus:border-[#B7D51F] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#151515] bg-[#B7D51F] hover:bg-[#c6e625] transition-colors rounded-sm shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4 text-[#151515]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
