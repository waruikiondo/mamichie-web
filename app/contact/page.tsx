"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email.trim() && formData.message.trim()) {
      // Future integration: Hook this up to Resend, SendGrid, or your backend API
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-brand-tint text-brand-black font-body selection:bg-brand-gold/30 flex-grow flex flex-col min-h-screen">
      
      {/* 1. PAGE HEADER */}
      <section className="pt-24 pb-12 px-6 bg-white border-b border-brand-gold/10">
        <div className="max-w-5xl mx-auto">
          
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50 mb-10">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-black">Clinical Enquiries</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-black uppercase leading-[1.1]">
              Contact <span className="text-brand-gold">Mamichie Healthcare®</span>
            </h1>
            <p className="font-body text-sm sm:text-base font-bold tracking-widest text-brand-black/50 uppercase mt-6">
              Direct access to the clinical practice and support team.
            </p>
          </div>
          
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            
            <div className="prose prose-brand text-brand-black/80 text-sm leading-relaxed text-justify">
              <p>
                Whether you are seeking to book a consultation, enquire about the Residency or discuss media partnerships, our team is ready to assist you.
              </p>
              <p>
                Please note that we cannot provide specific medical advice outside of a formal clinical consultation.
              </p>
            </div>

            <div className="space-y-8">
              {/* Contact Block: Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-brand-black mb-1">General Enquiries</h3>
                  <a href="mailto:info@mamichiehealthcare.com" className="text-sm text-brand-black/70 hover:text-brand-gold transition-colors block">
                    info@mamichiehealthcare.com
                  </a>
                </div>
              </div>

              {/* Contact Block: Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-brand-black mb-1">Telephone</h3>
                  <a href="tel:+447984469526" className="text-sm text-brand-black/70 hover:text-brand-gold transition-colors block">
                    +44 7984 469 526
                  </a>
                </div>
              </div>

              {/* Contact Block: Global Practice */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-brand-black mb-1">Global Virtual Practice</h3>
                  <p className="text-sm text-brand-black/70 leading-relaxed">
                    Mamichie Healthcare® operates internationally. Consultations with Dr Stirzaker are conducted via secure video link worldwide.
                  </p>
                </div>
              </div>

              {/* Contact Block: Operating Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-brand-black mb-1">Operating Hours</h3>
                  <p className="text-sm text-brand-black/70 leading-relaxed">
                    Monday to Friday: 09:00 to 17:00 (UK Time)<br />
                    We aim to respond to all written enquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-gold/20 pt-8 mt-8">
              <Link 
                href="/faq" 
                className="group flex items-center justify-between p-6 bg-white border border-brand-gold/20 rounded-sm hover:border-brand-gold transition-colors shadow-sm"
              >
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-brand-black mb-1 group-hover:text-brand-gold transition-colors">
                    Frequently Asked Questions
                  </h4>
                  <p className="text-[11px] text-brand-black/60">Find immediate answers to common queries.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-gold/20 p-8 sm:p-12 rounded-sm shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-gold"></div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in duration-500">
                  <CheckCircle className="w-16 h-16 text-brand-gold mb-6" />
                  <h2 className="font-display text-3xl font-bold text-brand-black mb-4">Enquiry Received</h2>
                  <p className="font-body text-sm text-brand-black/70 leading-relaxed max-w-md mx-auto">
                    Thank you for contacting Mamichie Healthcare®. A member of our clinical support team will review your message and respond shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-black mb-8">
                    Send a Secure Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-brand-black/70">Full Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-brand-tint/30 border border-brand-gold/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-colors text-brand-black"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-brand-black/70">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-brand-tint/30 border border-brand-gold/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-colors text-brand-black"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-brand-black/70">Nature of Enquiry</label>
                      <select 
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-brand-tint/30 border border-brand-gold/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-colors text-brand-black appearance-none"
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="consultation">Booking a Consultation</option>
                        <option value="residency">The 3R Method™ Residency</option>
                        <option value="media">Press and Media</option>
                        <option value="speaking">Speaking Engagements</option>
                        <option value="other">Other General Enquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-brand-black/70">Your Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-brand-tint/30 border border-brand-gold/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-gold focus:bg-white transition-colors text-brand-black resize-y"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-brand-black text-brand-tint font-bold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer shadow-md mt-4"
                    >
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    
                    <p className="text-[9px] text-brand-black/40 font-body uppercase tracking-wider text-center mt-4">
                      In the event of a medical emergency please contact your local emergency services immediately.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}