"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

export default function TermsPage() {
  const container = useRef<HTMLDivElement | null>(null);

  const terms = [
    {
      title: "Scope of Services",
      content: "HM Services and Logistics provides workforce management, recruitment, payroll administration, CSR performance auditing, and logistics coordination. All services are governed by specific Service Level Agreements (SLAs) signed between the company and the client."
    },
    {
      title: "Legal Compliance",
      content: "We operate strictly under the Laws of the Democratic Republic of the Congo and the OHADA Uniform Acts. We ensure all personnel managed under our EOR/Payroll services are compliant with CNSS, INPP, and ONEM requirements."
    },
    {
      title: "Professional Obligations",
      content: "The company commits to executing its duties with the safety, confidentiality, and professional traceability required in the mining and industrial sectors. Clients are responsible for providing safe access to sites for mobilised personnel."
    },
    {
      title: "Payment Terms",
      content: "Invoices are issued based on the terms agreed upon in the individual contract. Standard terms require payment within 30 days of invoice issuance unless otherwise specified in writing. Late payments may be subject to interest as per DRC commercial law."
    },
    {
      title: "Confidentiality",
      content: "Both parties agree to protect sensitive industrial information, mining data, and trade secrets disclosed during the term of the partnership. This obligation persists for 5 years after the termination of services."
    },
    {
      title: "Limitation of Liability",
      content: "HM Services and Logistics shall not be liable for indirect, incidental, or consequential damages resulting from site-wide operational delays, provided our services were rendered within the scope of the agreed-upon KPIs."
    }
  ];

  useGSAP(() => {
    // Reveal animation for terms cards
    gsap.from(".term-card", {
      opacity: 0,
      x: 40,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".terms-list",
        start: "top 85%",
      }
    });

    // Horizontal line expansion
    gsap.from(".title-line", {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1.5,
      ease: "expo.out"
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-white">
      <main className="min-h-screen pt-40 pb-24 px-8 md:px-20 relative">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDE: GOVERNANCE SUMMARY */}
          <aside className="lg:col-span-5 lg:sticky lg:top-40 h-fit space-y-10">
            <div className="space-y-6">
              <div className="title-line h-1 w-20 bg-amber-500" />
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9]">
                Terms of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">Service</span>
              </h1>
              <p className="text-slate-500 text-lg font-light max-w-sm leading-relaxed">
                Establishing a transparent framework for operational excellence in the DRC mining sector.
              </p>
            </div>

            <div className="p-8 bg-slate-900 rounded-[2rem] text-white space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-7xl opacity-10 group-hover:rotate-12 transition-transform duration-500">⚖️</div>
              <h4 className="text-amber-500 font-black uppercase text-xs tracking-[0.2em]">Jurisdiction</h4>
              <p className="text-xl font-medium leading-tight relative z-10">
                Governed by the commercial courts of Lubumbashi, Haut-Katanga, DRC.
              </p>
              <div className="pt-4 flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Active Partnership Framework
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: THE CLAUSES */}
          <div className="lg:col-span-7 space-y-6 terms-list">
            {terms.map((item, index) => (
              <div 
                key={index}
                className="term-card group p-8 md:p-12 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] hover:bg-white hover:border-amber-200 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-amber-500/30 transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light text-lg">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="term-card p-8 text-center border-2 border-dashed border-slate-200 rounded-[2.5rem]">
              <p className="text-slate-400 text-sm font-medium italic">
                End of General Terms. Specific SLAs may apply to individual project mobilisations.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER SECTION */}
      <section className="bg-slate-900 text-white">
        <Footer />
      </section>
    </div>
  );
}