"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

const translations = {
  en: {
    nav: [
      { name: "HOME", href: "/" },
      { name: "SERVICES", href: "/services" },
      { 
        name: "COMPANY", 
        subLinks: [
          { name: "ABOUT", href: "/about" },
          { name: "CAREERS", href: "/careers" },
          { name: "BLOG", href: "/blog" },
        ] 
      },
      { 
        name: "LEGAL", 
        subLinks: [
          { name: "TERMS", href: "/terms" },
          { name: "PRIVACY", href: "/privacy" },
        ] 
      },
      { name: "CONTACT", href: "/contact" },
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
      { name: "SERVICES", href: "/services" },
      { 
        name: "ENTREPRISE", 
        subLinks: [
          { name: "À PROPOS", href: "/about" },
          { name: "CARRIÈRES", href: "/careers" },
          { name: "BLOG", href: "/blog" },
        ] 
      },
      { 
        name: "LÉGAL", 
        subLinks: [
          { name: "CGU", href: "/terms" },
          { name: "CONFIDENTIALITÉ", href: "/privacy" },
        ] 
      },
      { name: "CONTACT", href: "/contact" },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // For Mobile Accordion
  const pathname = usePathname(); 

  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  const isStaticPage = pathname === "/privacy" || pathname === "/terms" || pathname === "/services";
  const showScrolledDesign = isScrolled || isStaticPage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed w-full z-[100] px-6 md:px-12 py-6 transition-all duration-500 font-sans">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto max-w-7xl transition-all duration-500 px-8 md:px-12 ${
          showScrolledDesign 
            ? "bg-[#002B49]/95 backdrop-blur-xl py-4 shadow-xl border border-white/20" 
            : "bg-transparent py-6 border border-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-[#D4AF37] flex items-center justify-center font-black text-[#002B49] shadow-lg group-hover:rotate-[10deg] transition-transform">
              HM
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-tighter text-lg text-white uppercase">
                SERVICES <span className="text-[#D4AF37]">&</span> LOG
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 border-r border-white/20 pr-10">
              {t.nav.map((link) => (
                link.subLinks ? (
                  <div key={link.name} className="relative group py-4 -my-4">
                    <button className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-[#D4AF37] transition-colors">
                      {link.name}
                      <motion.span className="inline-block group-hover:rotate-180 transition-transform">▼</motion.span>
                    </button>
                    {/* Dropdown content */}
                    <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-[#002B49] border border-white/10 p-2 min-w-[180px] shadow-2xl">
                        {link.subLinks.map(sub => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className="block text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-[#D4AF37] hover:bg-white/5 py-3 px-4 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button onClick={() => setLang(lang === "en" ? "fr" : "en")} className="text-xs font-bold border border-[#D4AF37] px-2 py-1 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all">
                {lang.toUpperCase()}
              </button>
              <Link href="/contact" className="px-6 py-2 bg-white text-[#002B49] font-black text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all">
                {t.portal}
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(true)}>
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-gray-100">
              <span className="text-[#002B49] font-black tracking-widest text-sm">{t.menu}</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#002B49] text-4xl">&times;</button>
            </div>

            {/* Scrollable Links */}
            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
              {t.nav.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.subLinks ? (
                    <>
                      <button 
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="flex justify-between items-center text-2xl font-black text-[#002B49] uppercase tracking-tighter"
                      >
                        {link.name}
                        <span className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`}>▾</span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-4 pl-4 mt-4 border-l-2 border-[#D4AF37]"
                          >
                            {link.subLinks.map(sub => (
                              <Link 
                                key={sub.name} 
                                href={sub.href} 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-bold text-gray-500 uppercase"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-black text-[#002B49] uppercase tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full py-4 bg-[#002B49] text-white text-center font-black uppercase tracking-widest"
              >
                {t.portal}
              </Link>
            </div>

            {/* Footer */}
            <div className="p-8 bg-gray-50 flex flex-col gap-4">
               <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                 {t.locations}
               </p>
               <div className="flex gap-4">
                 <button onClick={() => setLang("en")} className={`text-xs font-black ${lang === 'en' ? 'text-[#D4AF37]' : 'text-gray-400'}`}>EN</button>
                 <button onClick={() => setLang("fr")} className={`text-xs font-black ${lang === 'fr' ? 'text-[#D4AF37]' : 'text-gray-400'}`}>FR</button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}