"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  const container = useRef<HTMLDivElement | null>(null);

  const sections = [
    {
      id: "collection",
      title: "1. Data Collection",
      content: "We collect information you provide directly to us when requesting a proposal, including your name, company email, and professional contact details. We also collect operational data necessary for the execution of HR and logistics contracts."
    },
    {
      id: "usage",
      title: "2. Use of Information",
      content: "Your data is used to provide our services, manage payroll/compliance (CNSS/INPP), coordinate logistics, and maintain communication regarding your projects in Lubumbashi, Kolwezi, or Kinshasa."
    },
    {
      id: "compliance",
      title: "3. Legal Compliance (DRC & OHADA)",
      content: "HM Services and Logistics operates in accordance with the legal framework of the Democratic Republic of the Congo and OHADA standards. We ensure that employee and partner data is handled with the strict confidentiality required for industrial and mining operations."
    },
    {
      id: "security",
      title: "4. Data Security",
      content: "We implement robust technical and organizational measures to protect your personal and corporate data against unauthorized access, disclosure, or destruction, specifically tailored for the sensitive nature of the mining industry."
    },
    {
      id: "contact",
      title: "5. Contact Us",
      content: "If you have questions about this Privacy Policy or how your data is handled, please contact our administrative hub at info@hmserviceslogistics.com or call +243 979 455 511."
    }
  ];

  useGSAP(() => {
    // Elegant reveal of text blocks
    gsap.from(".policy-section", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
    });

    // Floating animation for the security badge
    gsap.to(".security-badge", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-white">
      <main className="min-h-screen pt-40 pb-24 px-8 md:px-20 relative">
        
        {/* BACKGROUND ACCENT */}
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-slate-50 -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: STICKY NAVIGATION & BADGE */}
          <aside className="lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-8">
            <div className="space-y-2">
              <p className="text-amber-500 font-black tracking-widest text-xs uppercase">Compliance</p>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">
                Privacy <br/>Policy
              </h1>
              <p className="text-slate-400 font-mono text-xs mt-4">Effective: April 2026</p>
            </div>

            <nav className="hidden lg:block space-y-4 py-8 border-y border-slate-100">
              {sections.map((s) => (
                <a 
                  key={s.id}
                  href={`#${s.id}`} 
                  className="block text-sm font-bold text-slate-400 hover:text-amber-600 transition-colors uppercase tracking-tight"
                >
                  {s.title.split('.')[1]}
                </a>
              ))}
            </nav>

            <div className="security-badge p-6 bg-slate-900 rounded-3xl text-white inline-flex items-center gap-4 shadow-2xl">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-tighter opacity-60">Security Protocol</p>
                <p className="text-sm font-bold tracking-tight">OHADA Compliant</p>
              </div>
            </div>
          </aside>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-8 space-y-20">
            {sections.map((section, index) => (
              <section 
                id={section.id}
                key={index}
                className="policy-section group"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-[2px] w-8 bg-amber-500 origin-left group-hover:scale-x-150 transition-transform duration-500" />
                   <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    {section.title}
                  </h2>
                </div>
                
                <div className="relative pl-12 border-l border-slate-100 group-hover:border-amber-200 transition-colors duration-500">
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}

            {/* Disclaimer Box */}
            <div className="policy-section p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-200" />
               <p className="text-slate-500 text-sm italic leading-relaxed">
                HM Services and Logistics reserves the right to modify this privacy framework as Democratic Republic of the Congo labor laws and international data standards evolve. Clients and partners will be notified of significant changes via our administrative hub.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER WRAPPER */}
      <section className="bg-slate-900 text-white">
        <Footer />
      </section>
    </div>
  );
}