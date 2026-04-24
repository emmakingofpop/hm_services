"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import gsap from "gsap";

// Multilingual Dictionary
const translations = {
  en: {
    nav: [
      { name: "HOME", href: "/" },
      { name: "ABOUT", href: "/about" },
      { name: "SERVICES", href: "/services" },
      { name: "CONTACT", href: "/contact" },
      { name: "CAREERS", href: "/careers" },
      { name: "BLOG", href: "/blog" },
    ],
    slogan: "PERFORMANCE DRIVEN",
    portal: "CLIENT PORTAL",
    menu: "MENU",
    networkTitle: "DRC OPERATIONAL NETWORK",
    locations: "LUBUMBASHI — KOLWEZI — KINSHASA"
  },
  fr: {
    nav: [
      { name: "ACCUEIL", href: "/" },
      { name: "À PROPOS", href: "/about" },
      { name: "SERVICES", href: "/services" },
      { name: "CONTACT", href: "/contact" },
      { name: "CARRIÈRES", href: "/careers" },
      { name: "BLOG", href: "/blog" },
    ],
    slogan: "AXÉ SUR LA PERFORMANCE",
    portal: "PORTAIL CLIENT",
    menu: "MENU",
    networkTitle: "RÉSEAU OPÉRATIONNEL RDC",
    locations: "LUBUMBASHI — KOLWEZI — KINSHASA"
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  // State for multilingual support
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  // Logic: Force active design if on Privacy or Terms pages
  const isStaticPage = pathname === "/privacy" || pathname === "/terms" || pathname === "/services";
  const showScrolledDesign = isScrolled || isStaticPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-[100] px-6 md:px-12 py-6 transition-all duration-500 font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`mx-auto max-w-7xl rounded-none transition-all duration-500 px-8 md:px-12 ${
          showScrolledDesign 
            ? "bg-[#002B49]/95 backdrop-blur-xl py-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20" 
            : "bg-transparent py-6 border border-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-[#D4AF37] flex items-center justify-center font-black text-[#002B49] overflow-hidden shadow-lg group-hover:rotate-[10deg] transition-transform duration-300">
              HM
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-tighter text-lg text-white uppercase">
                SERVICES <span className="text-[#D4AF37]">&</span> LOG
              </span>
              <span className="text-[9px] font-black tracking-[0.3em] text-gray-300 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t.slogan}
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 border-r border-white/20 pr-10">
              {t.nav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-xs font-black uppercase tracking-[0.2em] text-white/80 hover:text-[#D4AF37] transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#D4AF37] rounded-none transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex gap-2 mr-4">
                <button onClick={() => setLang("en")} className={`text-xs font-bold px-2 py-1 border border-[#D4AF37] ${lang === "en" ? "bg-[#D4AF37] text-[#002B49]" : "text-[#D4AF37] hover:bg-[#D4AF37]/10"} transition-colors`}>EN</button>
                <button onClick={() => setLang("fr")} className={`text-xs font-bold px-2 py-1 border border-[#D4AF37] ${lang === "fr" ? "bg-[#D4AF37] text-[#002B49]" : "text-[#D4AF37] hover:bg-[#D4AF37]/10"} transition-colors`}>FR</button>
              </div>

              {/* Client Portal Button */}
              <Link 
                href="/contact" 
                className="relative overflow-hidden px-8 py-3 bg-white text-[#002B49] border-2 border-white font-black text-xs uppercase tracking-widest hover:border-[#D4AF37] transition-all duration-300 shadow-xl group"
              >
                <span className="relative z-10 group-hover:text-[#002B49] transition-colors">{t.portal}</span>
                <div className="absolute inset-0 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-white/5 border border-white/20"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-[#D4AF37]" />
            <span className="w-4 h-0.5 bg-white self-end mr-3" />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#001B2E]/98 backdrop-blur-2xl z-[200] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-[#D4AF37] font-black tracking-widest uppercase text-sm">{t.menu}</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white text-2xl hover:bg-[#D4AF37] hover:text-[#002B49] transition-colors"
              >
                ×
              </button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex gap-4 mb-10 border-b border-white/10 pb-6">
              <button onClick={() => setLang("en")} className={`text-sm font-bold px-4 py-2 border border-[#D4AF37] ${lang === "en" ? "bg-[#D4AF37] text-[#002B49]" : "text-[#D4AF37]"} transition-colors`}>ENGLISH</button>
              <button onClick={() => setLang("fr")} className={`text-sm font-bold px-4 py-2 border border-[#D4AF37] ${lang === "fr" ? "bg-[#D4AF37] text-[#002B49]" : "text-[#D4AF37]"} transition-colors`}>FRANÇAIS</button>
            </div>

            <div className="flex flex-col gap-8">
              {t.nav.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl md:text-7xl font-black text-white hover:text-[#D4AF37] transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: t.nav.length * 0.1 }}
                className="pt-4"
              >
                 <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block px-8 py-4 bg-[#D4AF37] text-[#002B49] font-black text-sm uppercase tracking-widest"
                >
                  {t.portal}
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-6">
               <p className="text-gray-400 text-xs font-black uppercase tracking-widest leading-loose">
                 {t.locations}<br />
                 {t.networkTitle}
               </p>
               <a href="tel:+243979455511" className="text-[#D4AF37] font-black text-xl">+243 979 455 511</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}