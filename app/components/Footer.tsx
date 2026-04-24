"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Multilingual Dictionary
const translations = {
  en: {
    ctaTitle: "READY TO ",
    ctaHighlight: "MOBILISE?",
    btnStart: "START A PROJECT",
    desc: "The premier strategic partner for mining operations in the DRC. Integrated workforce management, logistics, and social license experts.",
    navTitle: "QUICK NAVIGATION",
    nav: [
      { name: 'HOME', path: '/' },
      { name: 'ABOUT', path: '/about' },
      { name: 'SERVICES', path: '/services' },
      { name: 'CONTACT', path: '/contact' }
    ],
    hubsTitle: "OPERATIONAL HUBS",
    hubs: [
      { city: "LUBUMBASHI", sub: "REGIONAL HEADQUARTERS" },
      { city: "KOLWEZI", sub: "OPERATIONAL CENTER" },
      { city: "KINSHASA", sub: "ADMINISTRATIVE HUB" }
    ],
    contactTitle: "GET IN TOUCH",
    inquiries: "INQUIRIES",
    directLine: "DIRECT LINE",
    rights: "DESIGNED FOR PERFORMANCE",
    privacy: "PRIVACY",
    terms: "TERMS"
  },
  fr: {
    ctaTitle: "PRÊT À VOUS ",
    ctaHighlight: "MOBILISER ?",
    btnStart: "DÉMARRER UN PROJET",
    desc: "Le partenaire stratégique de premier plan pour les opérations minières en RDC. Experts en gestion intégrée de la main-d'œuvre, logistique et licence sociale.",
    navTitle: "NAVIGATION RAPIDE",
    nav: [
      { name: 'ACCUEIL', path: '/' },
      { name: 'À PROPOS', path: '/about' },
      { name: 'SERVICES', path: '/services' },
      { name: 'CONTACT', path: '/contact' }
    ],
    hubsTitle: "CENTRES OPÉRATIONNELS",
    hubs: [
      { city: "LUBUMBASHI", sub: "SIÈGE RÉGIONAL" },
      { city: "KOLWEZI", sub: "CENTRE OPÉRATIONNEL" },
      { city: "KINSHASA", sub: "PÔLE ADMINISTRATIF" }
    ],
    contactTitle: "NOUS CONTACTER",
    inquiries: "DEMANDES",
    directLine: "LIGNE DIRECTE",
    rights: "CONÇU POUR LA PERFORMANCE",
    privacy: "CONFIDENTIALITÉ",
    terms: "CONDITIONS"
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement | null>(null);
  
  // State for multilingual support (ideally passed via Context in a full app)
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  useGSAP(() => {
    gsap.from(".footer-item", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      }
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-[#002B49] text-white pt-24 pb-10 overflow-hidden relative font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      {/* Temporary Language Switcher for the standalone component */}
      <div className="absolute top-8 right-8 flex gap-2 z-10">
        <button onClick={() => setLang("en")} className={`text-xs font-bold px-2 py-1 border border-[#D4AF37] ${lang === "en" ? "bg-[#D4AF37] text-[#002B49]" : "text-[#D4AF37]"} transition-colors`}>EN</button>
        <button onClick={() => setLang("fr")} className={`text-xs font-bold px-2 py-1 border border-[#D4AF37] ${lang === "fr" ? "bg-[#D4AF37] text-[#002B49]" : "text-[#D4AF37]"} transition-colors`}>FR</button>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-20">
        
        {/* TOP SECTION: BIG CTA SECTION */}
        <div className="footer-item flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-20 border-b border-white/20 mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            {t.ctaTitle} <span className="text-[#D4AF37] underline decoration-2 underline-offset-8 uppercase">{t.ctaHighlight}</span>
          </h2>
          <Link href="/contact" className="group flex items-center gap-4 bg-white text-[#002B49] px-8 py-4 rounded-none border-2 border-white font-black uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#002B49] transition-all duration-300">
            {t.btnStart}
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="footer-item space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center font-black text-[#002B49] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                HM
              </div>
              <span className="font-black tracking-tighter text-xl uppercase">
                SERVICES <span className="text-[#D4AF37]">&</span> LOG
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              {t.desc}
            </p>
            <div className="flex gap-5">
              {/* LinkedIn Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#002B49] transition-all duration-300">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Twitter/X Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#002B49] transition-all duration-300">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              {/* WhatsApp Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#002B49] transition-all duration-300">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h4 className="text-[#D4AF37] font-black uppercase tracking-[0.2em] text-xs mb-8">{t.navTitle}</h4>
            <ul className="space-y-4">
              {t.nav.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-white hover:text-[#D4AF37] transition-colors font-bold text-sm uppercase tracking-wide">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Hubs */}
          <div className="footer-item">
            <h4 className="text-[#D4AF37] font-black uppercase tracking-[0.2em] text-xs mb-8">{t.hubsTitle}</h4>
            <div className="space-y-6">
              {t.hubs.map((loc) => (
                <div key={loc.city} className="group cursor-default">
                  <p className="text-white font-bold group-hover:text-[#D4AF37] uppercase transition-colors">{loc.city}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{loc.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-item">
            <h4 className="text-[#D4AF37] font-black uppercase tracking-[0.2em] text-xs mb-8">{t.contactTitle}</h4>
            <div className="space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{t.inquiries}</span>
                <a href="mailto:info@hmserviceslogistics.com" className="block text-white font-bold hover:text-[#D4AF37] transition-colors">
                  INFO@HMSERVICESLOGISTICS.COM
                </a>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{t.directLine}</span>
                <a href="tel:+243979455511" className="block text-2xl font-black text-[#D4AF37] tracking-tighter">
                  +243 979 455 511
                </a>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-[9px] text-gray-400 leading-relaxed uppercase tracking-widest font-bold">
                  OHADA REG: CD/LSH/RCCM/12-B-1455 <br />
                  VAT: FR 889 455 511
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-item pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
            © {currentYear} HM SERVICES <span className="text-[#D4AF37] px-2">&</span> LOGISTICS — {t.rights}
          </div>
          
          <div className="flex gap-10">
            <Link href="/privacy" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-[10px] font-black uppercase tracking-widest">
              {t.privacy}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-[10px] font-black uppercase tracking-widest">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}