"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import Footer from "../components/Footer";

// Safely register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  en: {
    tag: "Connect With Us",
    title1: "LET'S BUILD",
    title2: "THE FUTURE.",
    sub: "Ready to deploy specialized workforce and logistics solutions across the DRC mining corridors.",
    presence: "Strategic Presence",
    locations: [
      { city: "Lubumbashi (HQ)", prov: "Haut-Katanga Province" },
      { city: "Kolwezi", prov: "Lualaba Province" },
      { city: "Kinshasa", prov: "Administrative Hub" }
    ],
    inquiry: "Immediate Inquiry",
    formName: "Full Name",
    formCompany: "Company",
    formEmail: "Email Address",
    formHelp: "How can we help?",
    formOptions: ["Workforce & Recruitment", "Payroll & Compliance (EOR)", "Logistics & Mobilisation", "CSR & Social Performance"],
    formBrief: "Project Brief",
    formPlaceholder: "Tell us about your operational needs...",
    formBtn: "Send Inquiry",
    successTitle: "Request Sent.",
    successSub: "Our specialized team will review your requirements and respond within 24 hours.",
    successBtn: "New Request",
    mapTag: "Operational Hub: Lubumbashi"
  },
  fr: {
    tag: "Contactez-nous",
    title1: "BÂTISSONS",
    title2: "L'AVENIR.",
    sub: "Prêt à déployer une main-d'œuvre spécialisée et des solutions logistiques dans les corridors miniers de la RDC.",
    presence: "Présence Stratégique",
    locations: [
      { city: "Lubumbashi (HQ)", prov: "Province du Haut-Katanga" },
      { city: "Kolwezi", prov: "Province du Lualaba" },
      { city: "Kinshasa", prov: "Centre Administratif" }
    ],
    inquiry: "Demande Immédiate",
    formName: "Nom Complet",
    formCompany: "Entreprise",
    formEmail: "Adresse E-mail",
    formHelp: "Comment pouvons-nous aider ?",
    formOptions: ["Recrutement & Main-d'œuvre", "Paie & Conformité (EOR)", "Logistique & Mobilisation", "RSE & Performance Sociale"],
    formBrief: "Détails du Projet",
    formPlaceholder: "Parlez-nous de vos besoins opérationnels...",
    formBtn: "Envoyer la Demande",
    successTitle: "Demande Envoyée.",
    successSub: "Notre équipe spécialisée examinera vos besoins et vous répondra dans les 24 heures.",
    successBtn: "Nouvelle Demande",
    mapTag: "Centre Opérationnel : Lubumbashi"
  }
};

export default function ContactPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".contact-hero-text span", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out"
    }).from(".contact-form-container", {
      x: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    gsap.from(".contact-info-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-info-section",
        start: "top 85%"
      }
    });

    const btn = document.querySelector(".magnetic-btn") as HTMLElement;
    if (btn) {
      btn.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
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
    <div className="bg-white">
      {/* Floating Language Controls */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col bg-white shadow-xl border border-gray-100 overflow-hidden">
        <button onClick={() => setLang("en")} className={`p-3 text-xs font-bold ${lang === "en" ? "bg-[#002B49] text-white" : "text-gray-500 hover:bg-gray-50"}`}>EN</button>
        <button onClick={() => setLang("fr")} className={`p-3 text-xs font-bold ${lang === "fr" ? "bg-[#002B49] text-white" : "text-gray-500 hover:bg-gray-50"}`}>FR</button>
      </div>

      <main ref={container} className="overflow-hidden">
        
        {/* SECTION 1: HERO */}
        <section className="relative pt-40 pb-24 px-8 md:px-20 bg-[#002B49] text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="contact-hero-text">
              <p className="text-[#D4AF37] font-black tracking-[0.3em] uppercase mb-6 text-sm">{t.tag}</p>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                <span className="block">{t.title1}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-600">{t.title2}</span>
              </h1>
            </div>
            <p className="contact-hero-text text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {t.sub}
            </p>
          </div>
        </section>

        {/* SECTION 2: CONTACT & FORM SPLIT */}
        <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Left Side: Information */}
            <div className="lg:col-span-5 contact-info-section space-y-16">
              <div className="contact-info-item">
                <h3 className="text-[#D4AF37] font-black uppercase text-xs tracking-widest mb-10 border-b border-gray-100 pb-4">{t.presence}</h3>
                <div className="grid gap-10">
                  {t.locations.map((loc, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-50 text-[#002B49] text-xl border border-gray-100 group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                        <EnvironmentOutlined />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-[#002B49] uppercase tracking-tight">{loc.city}</h4>
                        <p className="text-gray-500 font-medium">{loc.prov}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-info-item p-10 bg-[#002B49] text-white shadow-2xl relative border-b-4 border-[#D4AF37]">
                <h3 className="text-[#D4AF37] font-bold mb-6 text-xs uppercase tracking-widest">{t.inquiry}</h3>
                <div className="space-y-6">
                  <a href="tel:+243979455511" className="flex items-center gap-4 text-2xl font-black hover:text-[#D4AF37] transition-colors">
                    <PhoneOutlined className="text-lg" /> +243 979 455 511
                  </a>
                  <a href="mailto:info@hmserviceslogistics.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors lowercase">
                    <MailOutlined /> info@hmserviceslogistics.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7 contact-form-container relative">
              <div className="relative bg-white border border-gray-100 p-8 md:p-14 shadow-2xl">
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
                          <label className="text-xs font-black uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">{t.formName}</label>
                          <input type="text" required className="w-full py-3 bg-transparent border-b border-gray-200 focus:border-[#002B49] outline-none transition-all text-[#002B49] font-bold" />
                        </div>
                        <div className="group space-y-2">
                          <label className="text-xs font-black uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">{t.formCompany}</label>
                          <input type="text" className="w-full py-3 bg-transparent border-b border-gray-200 focus:border-[#002B49] outline-none transition-all text-[#002B49] font-bold" />
                        </div>
                      </div>
                      
                      <div className="group space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">{t.formEmail}</label>
                        <input type="email" required className="w-full py-3 bg-transparent border-b border-gray-200 focus:border-[#002B49] outline-none transition-all text-[#002B49] font-bold" />
                      </div>

                      <div className="group space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">{t.formHelp}</label>
                        <select className="w-full py-3 bg-transparent border-b border-gray-200 focus:border-[#002B49] outline-none transition-all text-[#002B49] font-bold appearance-none">
                          {t.formOptions.map((opt, i) => <option key={i}>{opt}</option>)}
                        </select>
                      </div>

                      <div className="group space-y-2">
                        <label className="text-xs font-black uppercase text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">{t.formBrief}</label>
                        <textarea rows={4} placeholder={t.formPlaceholder} className="w-full py-3 bg-transparent border-b border-gray-200 focus:border-[#002B49] outline-none transition-all text-[#002B49] font-bold resize-none" />
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit"
                          className="magnetic-btn w-full bg-[#002B49] text-white font-black py-6 hover:bg-[#001a2d] transition-all uppercase tracking-widest text-sm border-b-4 border-[#D4AF37]"
                        >
                          {t.formBtn}
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
                      <CheckCircleOutlined className="text-[#D4AF37] text-7xl mb-8" />
                      <h3 className="text-4xl font-black text-[#002B49] mb-4 uppercase">{t.successTitle}</h3>
                      <p className="text-gray-500 text-lg max-w-xs mx-auto mb-10">{t.successSub}</p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-[#D4AF37] font-black uppercase tracking-widest text-sm hover:text-[#002B49] transition-colors border-b-2 border-[#D4AF37]"
                      >
                        {t.successBtn}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MAP */}
        <section className="relative h-[500px] bg-gray-100 overflow-hidden border-t border-gray-200">
          <div className="absolute inset-0 grayscale opacity-60">
            <iframe
              title="Lubumbashi Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125211.54714150824!2d27.411132644265775!3d-11.669818817769974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723ec087f9d84f%3A0xc3f7a1f81014e08c!2sLubumbashi%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-[#002B49]/10 pointer-events-none" />
          
          <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="inline-block p-4 bg-[#002B49]/90 backdrop-blur-md rounded-full mb-4 border border-[#D4AF37]/50 shadow-2xl">
                 <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
              </div>
              <p className="text-[#002B49] font-black tracking-widest uppercase text-sm bg-white/80 px-6 py-2 shadow-lg">{t.mapTag}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}