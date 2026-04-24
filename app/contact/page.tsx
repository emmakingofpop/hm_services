"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Footer from "../components/Footer";
import { div } from "framer-motion/m";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    // 1. Hero Reveal
    const tl = gsap.timeline();
    tl.from(".contact-hero-text span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out"
    })
    .from(".contact-form-container", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    // 2. Info blocks stagger
    gsap.from(".contact-info-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-info-section",
        start: "top 80%"
      }
    });

    // 3. Magnetic Button Effect (Fancy UI Touch)
    const btn = document.querySelector(".magnetic-btn");
    if (btn) {
      btn.addEventListener("mousemove", (e: any) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
      });
    }
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
    <main ref={container} className="bg-slate-50 overflow-hidden">
      
      {/* SECTION 1: DYNAMIC HEADER */}
      <section className="relative pt-32 pb-20 px-8 md:px-20 bg-slate-900 text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="contact-hero-text">
            <p className="text-amber-500 font-black tracking-[0.3em] uppercase mb-4 text-sm">Connect With Us</p>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="block">{"Let's"} Build</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">The Future.</span>
            </h1>
          </div>
          <p className="contact-hero-text text-xl md:text-2xl text-slate-400 max-w-2xl font-light">
            Ready to deploy specialized workforce and logistics solutions across the DRC mining corridors.
          </p>
        </div>
      </section>

      {/* SECTION 2: CONTACT & FORM SPLIT */}
      <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Information (5 columns) */}
          <div className="lg:col-span-5 contact-info-section space-y-16">
            <div className="contact-info-item">
              <h3 className="text-amber-600 font-black uppercase text-xs tracking-widest mb-8">Strategic Presence</h3>
              <div className="grid gap-8">
                {[
                  { city: "Lubumbashi (HQ)", prov: "Haut-Katanga Province", icon: "🏢" },
                  { city: "Kolwezi", prov: "Lualaba Province", icon: "⛏️" },
                  { city: "Kinshasa", prov: "Administrative Hub", icon: "🏛️" }
                ].map((loc, i) => (
                  <div key={i} className="flex gap-6 group cursor-default">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">
                      {loc.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900">{loc.city}</h4>
                      <p className="text-slate-500 font-medium">{loc.prov}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-info-item p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-amber-500 font-bold mb-6 text-sm uppercase tracking-widest">Immediate Inquiry</h3>
              <a href="tel:+243979455511" className="block text-3xl font-black mb-2 hover:text-amber-500 transition-colors">
                +243 979 455 511
              </a>
              <a href="mailto:info@hmserviceslogistics.com" className="text-slate-400 hover:text-white transition-colors">
                info@hmserviceslogistics.com
              </a>
            </div>
          </div>

          {/* Right Side: Glassmorphic Form (7 columns) */}
          <div className="lg:col-span-7 contact-form-container relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500 to-amber-200 rounded-[3rem] blur-2xl opacity-10" />
            
            <div className="relative bg-white border border-slate-200 p-8 md:p-14 rounded-[3rem] shadow-xl">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group space-y-2">
                        <label className="text-xs font-black uppercase text-slate-400 group-focus-within:text-amber-600 transition-colors">Full Name</label>
                        <input type="text" required placeholder="John Doe" className="w-full py-4 bg-transparent border-b-2 border-slate-100 focus:border-amber-500 outline-none transition-all text-slate-900 font-medium" />
                      </div>
                      <div className="group space-y-2">
                        <label className="text-xs font-black uppercase text-slate-400 group-focus-within:text-amber-600 transition-colors">Company</label>
                        <input type="text" placeholder="Mining Corp" className="w-full py-4 bg-transparent border-b-2 border-slate-100 focus:border-amber-500 outline-none transition-all text-slate-900 font-medium" />
                      </div>
                    </div>
                    
                    <div className="group space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 group-focus-within:text-amber-600 transition-colors">Email Address</label>
                      <input type="email" required placeholder="john@company.com" className="w-full py-4 bg-transparent border-b-2 border-slate-100 focus:border-amber-500 outline-none transition-all text-slate-900 font-medium" />
                    </div>

                    <div className="group space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 group-focus-within:text-amber-600 transition-colors">How can we help?</label>
                      <select className="w-full py-4 bg-transparent border-b-2 border-slate-100 focus:border-amber-500 outline-none transition-all text-slate-900 font-medium appearance-none">
                        <option>Workforce & Recruitment</option>
                        <option>Payroll & Compliance (EOR)</option>
                        <option>Logistics & Mobilisation</option>
                        <option>CSR & Social Performance</option>
                      </select>
                    </div>

                    <div className="group space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 group-focus-within:text-amber-600 transition-colors">Project Brief</label>
                      <textarea rows={4} placeholder="Tell us about your operational needs..." className="w-full py-4 bg-transparent border-b-2 border-slate-100 focus:border-amber-500 outline-none transition-all text-slate-900 font-medium resize-none" />
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="magnetic-btn w-full bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl uppercase tracking-[0.2em] text-sm"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
                      ✅
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-4">Request Sent.</h3>
                    <p className="text-slate-500 text-lg max-w-xs mx-auto">Our specialized team will review your requirements and respond within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-12 text-amber-600 font-black uppercase tracking-widest text-sm hover:text-slate-900 transition-colors"
                    >
                      New Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMMERSIVE MAP PLACEHOLDER */}
      <section className="relative h-[500px] bg-slate-900 overflow-hidden">
        {/* Placeholder for an actual map integration like Mapbox or Google Maps */}
        <div className="absolute inset-0 grayscale contrast-125 opacity-40 mix-blend-luminosity">
          <iframe
            title="Lubumbashi Map"
            src="https://www.google.com/maps?q=Lubumbashi,DRC&output=embed"
            className="w-full h-full border-0 scale-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-900/80 pointer-events-none" />
        
        <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
               <div className="relative w-4 h-4 bg-amber-500 rounded-full" />
            </div>
            <p className="text-white font-black tracking-widest uppercase text-lg shadow-xl">Operational Hub: Lubumbashi</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}