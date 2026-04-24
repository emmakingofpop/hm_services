"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

// 3. Multilingual Support Dictionary (ALL TITLES CAPITALIZED)
const translations = {
  en: {
    heroTag: "SUPPORTING MINING OPERATIONS",
    heroTitle: "RESPONSIBLY AND SUSTAINABLY",
    heroSub: "Integrated workforce, CSR, and logistics solutions tailored for modern mining operations in the DRC.",
    btnProposal: "REQUEST A PROPOSAL",
    btnServices: "EXPLORE OUR SERVICES",
    btnRfqNav: "REQUEST A QUOTATION",
    
    aboutTag: "WHO WE ARE",
    aboutTitle: "ENHANCING OPERATIONAL EXCELLENCE IN THE DRC",
    whyUsTitle: "WHY CHOOSE US",
    whereOperate: "OUR AREAS OF OPERATION",
    
    capTag: "OUR EXPERTISE",
    capTitle: "TAILORED SOLUTIONS FOR INDUSTRIAL PERFORMANCE",
    
    // New Sections
    hseTag: "HEALTH, SAFETY & ENVIRONMENT",
    hseTitle: "OUR COMMITMENT TO ZERO HARM",
    hseSub: "We uphold the highest international standards in health, safety, and environmental practices to safeguard our workforce and the communities we serve.",
    
    careerTag: "CAREERS",
    careerTitle: "JOIN OUR TEAM OF EXPERTS",
    careerSub: "Explore career opportunities and grow alongside leading professionals in the mining industry across the DRC.",
    btnCareer: "VIEW JOB OPPORTUNITIES",
    
    blogTag: "INDUSTRY INSIGHTS",
    blogTitle: "LATEST NEWS & ARTICLES",
    btnBlog: "READ MORE",
    
    rfqTag: "START YOUR PROJECT TODAY",
    rfqTitle: "LOOKING FOR A CUSTOMIZED SOLUTION FOR YOUR OPERATIONS?",
    btnRfq: "REQUEST A QUOTATION",

    ctaTitle: "READY TO OPTIMIZE YOUR OPERATIONS?",
  },

  fr: {
    heroTag: "AU SERVICE DES OPÉRATIONS MINIÈRES",
    heroTitle: "DE MANIÈRE RESPONSABLE ET DURABLE",
    heroSub: "Des solutions intégrées en ressources humaines, RSE et logistique, adaptées aux opérations minières modernes en RDC.",
    btnProposal: "DEMANDER UNE PROPOSITION",
    btnServices: "DÉCOUVRIR NOS SERVICES",
    btnRfqNav: "DEMANDER UN DEVIS",
    
    aboutTag: "QUI SOMMES-NOUS",
    aboutTitle: "AMÉLIORER L’EXCELLENCE OPÉRATIONNELLE EN RDC",
    whyUsTitle: "POURQUOI NOUS CHOISIR",
    whereOperate: "NOS ZONES D’INTERVENTION",
    
    capTag: "NOTRE EXPERTISE",
    capTitle: "DES SOLUTIONS SUR MESURE POUR LA PERFORMANCE INDUSTRIELLE",
    
    // New Sections
    hseTag: "SANTÉ, SÉCURITÉ & ENVIRONNEMENT",
    hseTitle: "NOTRE ENGAGEMENT ZÉRO INCIDENT",
    hseSub: "Nous appliquons les normes internationales les plus strictes en matière de santé, de sécurité et d’environnement afin de protéger nos collaborateurs et les communautés locales.",
    
    careerTag: "CARRIÈRES",
    careerTitle: "REJOIGNEZ NOTRE ÉQUIPE D’EXPERTS",
    careerSub: "Découvrez des opportunités de carrière et évoluez aux côtés de professionnels de référence dans l’industrie minière en RDC.",
    btnCareer: "VOIR LES OPPORTUNITÉS",
    
    blogTag: "ACTUALITÉS DU SECTEUR",
    blogTitle: "DERNIÈRES ACTUALITÉS & ARTICLES",
    btnBlog: "LIRE PLUS",
    
    rfqTag: "LANCEZ VOTRE PROJET DÈS AUJOURD’HUI",
    rfqTitle: "VOUS AVEZ BESOIN D’UNE SOLUTION SUR MESURE POUR VOS OPÉRATIONS ?",
    btnRfq: "DEMANDER UN DEVIS",

    ctaTitle: "PRÊT À OPTIMISER VOS OPÉRATIONS ?",
  }
};

export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);
  
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-title span", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.2,
    })
      .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");

    gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((img) => {
      gsap.to(img, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".stagger-grid").forEach((grid) => {
      const items = grid.querySelectorAll(".grid-item");
      gsap.from(items, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

  }, { scope: container });

  return (
    <main ref={container} className="bg-white text-slate-900 w-full overflow-hidden font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      
      {/* Floating Controls */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        <div className="flex flex-col bg-white rounded-full shadow-lg overflow-hidden border border-gray-200">
          <button onClick={() => setLang("en")} className={`p-3 text-xs font-bold transition-colors ${lang === "en" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>EN</button>
          <button onClick={() => setLang("fr")} className={`p-3 text-xs font-bold transition-colors ${lang === "fr" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>FR</button>
        </div>
        
        <div className="flex flex-col gap-2 bg-white p-2 rounded-full shadow-lg border border-gray-200">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full text-[#002B49] hover:bg-[#D4AF37] hover:text-white transition-colors">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative h-screen flex items-center justify-start px-8 md:px-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B49] via-[#002B49]/80 to-transparent z-10" />
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source src="/mining-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 max-w-5xl text-white mt-20">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-[1.1] overflow-hidden uppercase">
            <div className="hero-title overflow-hidden"><span className="block">{t.heroTag}</span></div>
            <div className="hero-title overflow-hidden"><span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-500">{t.heroTitle}</span></div>
          </h1>

          <p className="hero-subtitle text-xl md:text-3xl text-gray-300 mb-10 max-w-2xl font-light">
            {t.heroSub}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="hero-btn group relative px-8 py-4 bg-[#D4AF37] text-[#002B49] font-bold rounded-full overflow-hidden transition-all hover:scale-105 uppercase text-sm tracking-wide">
              <span className="relative z-10">{t.btnRfqNav}</span>
              <div className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
            <Link href="/services" className="hero-btn px-8 py-4 border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#002B49] text-white font-bold rounded-full transition-all uppercase text-sm tracking-wide">
              {t.btnServices}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 gsap-fade-up">
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2 border-l-4 border-[#D4AF37] pl-3">{t.aboutTag}</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#002B49] mb-8 leading-tight uppercase">
              {t.aboutTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {lang === "en" 
                ? "HM Services and Logistics is a professional services company dedicated to supporting mining operations through integrated workforce, compliance, CSR, and logistics solutions. We bridge the gap between global standards and local realities."
                : "HM Services and Logistics est une société de services professionnels dédiée au soutien des opérations minières via des solutions intégrées en ressources humaines, conformité, RSE et logistique. Nous comblons le fossé entre les normes mondiales et les réalités locales."}
            </p>
            
            <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                lang === "en" ? "MINING HR & RECRUITMENT" : "RH ET RECRUTEMENT MINIER",
                lang === "en" ? "PAYROLL & COMPLIANCE" : "PAIE ET CONFORMITÉ",
                lang === "en" ? "CSR & SOCIAL PERFORMANCE" : "RSE ET PERFORMANCE SOCIALE",
                lang === "en" ? "LOGISTICS & MOBILISATION" : "LOGISTIQUE ET MOBILISATION"
              ].map((item, index) => (
                <div key={index} className="grid-item flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-gray-100 border border-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#002B49] font-bold">✓</span>
                  </div>
                  <h3 className="font-bold text-[#002B49] text-sm tracking-wide uppercase">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[600px] relative rounded-none overflow-hidden shadow-2xl gsap-fade-up border-b-8 border-[#D4AF37]">
            <Image
              src="/mining-1.jpg"
              alt="Mining Professionals"
              fill
              className="object-cover parallax-image scale-125"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — HSE / SAFETY (NEW) */}
      <section className="py-24 px-8 md:px-20 bg-[#002B49] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 gsap-fade-up">
          <div className="w-full md:w-1/3 flex justify-center">
             <div className="w-48 h-48 border-8 border-[#D4AF37] rounded-full flex items-center justify-center">
               {/* Safety Shield Icon */}
               <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                 <path d="M9 12l2 2 4-4"></path>
               </svg>
             </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2">{t.hseTag}</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">{t.hseTitle}</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              {t.hseSub}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY US & WHERE WE OPERATE */}
      <section className="py-32 px-8 md:px-20 bg-gray-50 text-slate-900 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
          <div className="w-full lg:w-1/2 gsap-fade-up">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-[#002B49] border-b-2 border-[#D4AF37] pb-4 inline-block uppercase">
              {t.whyUsTitle}
            </h2>
            <div className="space-y-6 stagger-grid">
              {[
                { title: lang === "en" ? "FAST MOBILISATION" : "MOBILISATION RAPIDE", desc: lang === "en" ? "Structured deployment of skilled personnel exactly when you need them." : "Déploiement structuré de personnel qualifié au moment où vous en avez besoin." },
                { title: lang === "en" ? "DEEP LOCAL KNOWLEDGE" : "CONNAISSANCE LOCALE", desc: lang === "en" ? "Unmatched understanding of the Congolese mining sector and regulations." : "Une compréhension inégalée du secteur minier congolais et de ses réglementations." },
                { title: lang === "en" ? "MEASURABLE RESULTS" : "RÉSULTATS MESURABLES", desc: lang === "en" ? "Data-driven KPIs to ensure transparent and consistent service delivery." : "Des KPI basés sur les données pour assurer une prestation transparente et cohérente." }
              ].map((feature, idx) => (
                <div key={idx} className="grid-item flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-white border-2 border-[#D4AF37] flex items-center justify-center flex-shrink-0 group-hover:bg-[#002B49] transition-colors">
                    <span className="text-[#002B49] group-hover:text-[#D4AF37] font-bold text-xl">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[#002B49] uppercase">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center gsap-fade-up">
            <div className="w-full max-w-md bg-white border border-gray-200 p-12 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]" />
              <div className="text-8xl mb-8 animate-bounce" style={{ animationDuration: '3s' }}>🌍</div>
              <h3 className="text-3xl font-black mb-6 text-[#002B49] uppercase">{t.whereOperate}</h3>
              <div className="space-y-4 uppercase">
                <div className="py-3 px-6 bg-gray-50 text-[#D4AF37] font-bold text-xl border-l-4 border-[#002B49]">LUBUMBASHI</div>
                <div className="py-3 px-6 bg-gray-50 text-[#D4AF37] font-bold text-xl border-l-4 border-[#002B49]">KOLWEZI</div>
                <div className="py-3 px-6 bg-gray-50 text-[#D4AF37] font-bold text-xl border-l-4 border-[#002B49]">KINSHASA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR SOLUTIONS */}
      <section className="py-32 px-8 md:px-20 bg-[#D4AF37]">
        <div className="max-w-7xl mx-auto text-center mb-20 gsap-fade-up">
          <p className="text-white font-bold tracking-widest uppercase mb-2">{t.capTag}</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#002B49] uppercase">{t.capTitle}</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid">
          {[
            { title: lang === "en" ? "WORKFORCE RAMP-UP" : "AUGMENTATION DES EFFECTIFS", desc: lang === "en" ? "Rapid recruitment and site-ready mobilisation." : "Recrutement rapide et mobilisation sur site.", img: "/mining-workforce.jpg" },
            { title: lang === "en" ? "COMPLIANCE & PAYROLL" : "CONFORMITÉ ET PAIE", desc: lang === "en" ? "Full EOR services with rigorous management." : "Services complets avec une gestion rigoureuse.", img: "/mining-compliance.jpg" },
            { title: lang === "en" ? "SOCIAL LICENSE" : "PERMIS SOCIAL", desc: lang === "en" ? "Local hiring audits and community engagement." : "Audits d'embauche locale et engagement communautaire.", img: "/mining-social.jpg" },
            { title: lang === "en" ? "OPERATIONAL LOGISTICS" : "LOGISTIQUE OPÉRATIONNELLE", desc: lang === "en" ? "End-to-end logistics and facility management." : "Logistique de bout en bout et gestion des installations.", img: "/mining-logistics.jpg" }
          ].map((pkg, idx) => (
            <div key={idx} className="grid-item group relative h-[400px] bg-[#002B49] overflow-hidden cursor-pointer border border-white/20">
              <Image
                src={pkg.img}
                alt={pkg.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 z-0 opacity-40 group-hover:opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B49] via-[#002B49]/80 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500">
                <div className="w-12 h-1 bg-[#D4AF37] mb-4 transform origin-left transition-all duration-300 group-hover:w-full" />
                <h4 className="text-xl font-bold mb-2 text-[#D4AF37] uppercase">{pkg.title}</h4>
                <p className="text-white text-sm h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4">
                  {pkg.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — CAREER PORTAL (NEW) */}
      <section className="py-32 px-8 md:px-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="w-full lg:w-1/2 h-[500px] relative rounded-none overflow-hidden shadow-2xl gsap-fade-up">
             <Image
              src="/mining-careers.jpg"
              alt="Mining Careers"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 gsap-fade-up">
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2 border-l-4 border-[#D4AF37] pl-3">{t.careerTag}</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#002B49] mb-6 leading-tight uppercase">
              {t.careerTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t.careerSub}
            </p>
            <Link href="/careers" className="inline-block px-10 py-4 bg-[#002B49] text-white font-bold hover:bg-[#D4AF37] hover:text-[#002B49] transition-colors uppercase tracking-widest text-sm">
              {t.btnCareer}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — LATEST NEWS & BLOG (NEW) */}
      <section className="py-24 px-8 md:px-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center mb-16 gsap-fade-up">
          <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2">{t.blogTag}</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#002B49] uppercase">{t.blogTitle}</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 stagger-grid">
          {[
             { title: lang === "en" ? "NEW SAFETY PROTOCOLS IN 2026" : "NOUVEAUX PROTOCOLES DE SÉCURITÉ EN 2026", date: "APR 15, 2026" },
             { title: lang === "en" ? "OPTIMIZING HEAVY MACHINERY MAINTENANCE" : "OPTIMISATION DE LA MAINTENANCE DES MACHINES LOURDES", date: "MAR 28, 2026" },
             { title: lang === "en" ? "COMMUNITY OUTREACH: OUR IMPACT IN KOLWEZI" : "SENSIBILISATION COMMUNAUTAIRE : NOTRE IMPACT À KOLWEZI", date: "FEB 10, 2026" }
          ].map((post, idx) => (
             <div key={idx} className="grid-item bg-white shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
               <div className="h-48 bg-gray-300 relative w-full overflow-hidden">
                 <Image src={`/blog-${idx + 1}.jpg`} alt="Blog" fill className="object-cover" />
               </div>
               <div className="p-8 flex flex-col flex-grow">
                 <span className="text-[#D4AF37] font-bold text-xs uppercase mb-3">{post.date}</span>
                 <h3 className="text-[#002B49] font-black text-xl mb-4 uppercase">{post.title}</h3>
                 <div className="mt-auto pt-4 border-t border-gray-100">
                   <Link href={`/blog/${idx}`} className="text-[#002B49] font-bold text-sm uppercase hover:text-[#D4AF37] flex items-center gap-2">
                     {t.btnBlog} <span className="text-lg">→</span>
                   </Link>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* SECTION 8 — REQUEST FOR QUOTATION BANNER (NEW) */}
      <section className="py-20 px-8 md:px-20 bg-[#002B49] border-t border-[#D4AF37] gsap-fade-up">
        <div className="max-w-6xl mx-auto bg-[url('/pattern.png')] bg-cover bg-center text-center text-white">
           <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4">{t.rfqTag}</p>
           <h2 className="text-3xl md:text-5xl font-black mb-10 max-w-4xl mx-auto uppercase leading-tight">
             {t.rfqTitle}
           </h2>
           <Link href="/rfq" className="inline-block px-12 py-5 bg-[#D4AF37] text-[#002B49] font-black hover:bg-white hover:scale-105 shadow-xl transition-all uppercase tracking-widest text-sm">
             {t.btnRfq}
           </Link>
        </div>
      </section>

      {/* SECTION 9 — CALL TO ACTION */}
      <section className="relative py-32 px-8 md:px-20 bg-[#D4AF37] overflow-hidden gsap-fade-up border-t border-[#002B49]/20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-[#002B49] mb-8 uppercase">{t.ctaTitle}</h2>
          <p className="text-2xl text-[#002B49]/80 mb-12 font-medium max-w-3xl mx-auto">
            {lang === "en" 
              ? "Partner with us to achieve safe, compliant, and sustainable results in the DRC."
              : "Associez-vous à nous pour obtenir des résultats sûrs, conformes et durables en RDC."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-[#002B49] text-white font-black hover:bg-[#001930] hover:scale-105 shadow-xl transition-all uppercase tracking-widest text-sm">
              {lang === "en" ? "CONTACT US TODAY" : "CONTACTEZ-NOUS AUJOURD'HUI"}
            </Link>
            <Link href="tel:+243979455511" className="px-12 py-5 bg-transparent border-2 border-[#002B49] text-[#002B49] font-black hover:bg-[#002B49] hover:text-white hover:scale-105 transition-all uppercase tracking-widest text-sm">
              +243 979 455 511
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}