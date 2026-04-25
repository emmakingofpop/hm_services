"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

// Multilingual Support Dictionary
const translations = {
  en: {
    heroTag: "OUR IDENTITY",
    heroTitle1: "BEYOND SERVICES.",
    heroTitle2: "A STRATEGIC FORCE.",
    heroSub: "A DRC-based leader providing integrated support to mining operators, contractors, and industrial partners.",
    
    storyTitle1: "A STRATEGIC PARTNER FOR",
    storyTitle2: "MINING EXCELLENCE",
    storyP1: "HM Services and Logistics is dedicated to the operational, human, and logistical support of mining actors in the Democratic Republic of the Congo. Under the visionary leadership of Mme Hinnes Mbelu, we bridge the gap between rigorous technical requirements and ground-level realities.",
    storyP2: "We operate across the major mining corridors—Lubumbashi, Kolwezi, and Kinshasa—ensuring that your operations remain safe, fully compliant with OHADA laws, and sustainably integrated into the local socio-economic fabric.",
    storyBadge: "CONNECTING GLOBAL STANDARDS WITH LOCAL EXPERTISE",

    visionTag: "OUR VISION",
    visionDesc: "To be the most trusted partner enabling safe, compliant, and stable mining operations throughout Central Africa.",
    missionTag: "OUR MISSION",
    missionDesc: "To support the mining sector responsibly through practical solutions that improve lives, empower communities, and maximize operational efficiency.",

    valuesTag: "OUR DNA",
    valuesTitle: "CORE VALUES",
    values: [
      { title: "SAFETY", desc: "Our highest priority in every operational environment." },
      { title: "INTEGRITY", desc: "Transparent practices aligned with OHADA standards." },
      { title: "ACCOUNTABILITY", desc: "Measurable results through structured KPIs." },
      { title: "LOCAL EMPOWERMENT", desc: "Investing in the Congolese workforce and communities." }
    ],

    stat1: "STRATEGIC HUBS",
    stat2: "OHADA COMPLIANT",
    stat3: "LOCAL EMPOWERMENT"
  },
  fr: {
    heroTag: "NOTRE IDENTITÉ",
    heroTitle1: "AU-DELÀ DES SERVICES.",
    heroTitle2: "UNE FORCE STRATÉGIQUE.",
    heroSub: "Un leader basé en RDC offrant un soutien intégré aux opérateurs miniers, aux entrepreneurs et aux partenaires industriels.",
    
    storyTitle1: "UN PARTENAIRE STRATÉGIQUE POUR",
    storyTitle2: "L'EXCELLENCE MINIÈRE",
    storyP1: "HM Services and Logistics est dédié au soutien opérationnel, humain et logistique des acteurs miniers en République Démocratique du Congo. Sous la direction visionnaire de Mme Hinnes Mbelu, nous comblons le fossé entre les exigences techniques rigoureuses et les réalités du terrain.",
    storyP2: "Nous opérons à travers les principaux corridors miniers — Lubumbashi, Kolwezi et Kinshasa — pour garantir que vos opérations restent sûres, entièrement conformes aux lois OHADA et intégrées de manière durable dans le tissu socio-économique local.",
    storyBadge: "ALLIER NORMES MONDIALES ET EXPERTISE LOCALE",

    visionTag: "NOTRE VISION",
    visionDesc: "Être le partenaire de confiance permettant des opérations minières sûres, conformes et stables dans toute l'Afrique centrale.",
    missionTag: "NOTRE MISSION",
    missionDesc: "Soutenir le secteur minier de manière responsable grâce à des solutions pratiques qui améliorent les vies, renforcent les communautés et maximisent l'efficacité opérationnelle.",

    valuesTag: "NOTRE ADN",
    valuesTitle: "VALEURS FONDAMENTALES",
    values: [
      { title: "SÉCURITÉ", desc: "Notre priorité absolue dans chaque environnement opérationnel." },
      { title: "INTÉGRITÉ", desc: "Des pratiques transparentes alignées sur les normes OHADA." },
      { title: "RESPONSABILITÉ", desc: "Des résultats mesurables grâce à des KPI structurés." },
      { title: "AUTONOMISATION LOCALE", desc: "Investir dans la main-d'œuvre et les communautés congolaises." }
    ],

    stat1: "PÔLES STRATÉGIQUES",
    stat2: "CONFORME À L'OHADA",
    stat3: "AUTONOMISATION LOCALE"
  }
};

export default function AboutPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  useGSAP(() => {
    // 1. Hero Animation Timeline
    const tl = gsap.timeline();
    tl.from(".hero-text span", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2,
    })
      .from(".hero-line", { scaleX: 0, transformOrigin: "left", duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4");

    // 2. Standard GSAP Fade Up
    gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((section) => {
      gsap.from(section, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // 3. Staggered Grid (Values)
    gsap.utils.toArray<HTMLElement>(".stagger-grid").forEach((grid) => {
      const items = grid.querySelectorAll(".grid-item");
      gsap.from(items, {
        y: 60,
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

    // 4. Parallax Image Effect
    gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
      gsap.to(img, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // 5. Stat Counter Animation
    const stats = gsap.utils.toArray<HTMLElement>(".stat-number");
    stats.forEach((stat) => {
      const targetValue = parseInt(stat.getAttribute("data-target") || "0", 10);
      if (!isNaN(targetValue)) {
        gsap.to(stat, {
          innerHTML: targetValue,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, { scope: container });

  const valueImages = ["/value-safety.jpg", "/value-integrity.jpg", "/value-accountability.jpg", "/value-local.jpg"];

  return (
    <main ref={container} className="bg-white text-slate-900 w-full overflow-hidden font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      
      {/* Floating Controls */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        <div className="flex flex-col bg-white rounded-full shadow-lg overflow-hidden border border-gray-200">
          <button onClick={() => setLang("en")} className={`p-3 text-xs font-bold transition-colors ${lang === "en" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>EN</button>
          <button onClick={() => setLang("fr")} className={`p-3 text-xs font-bold transition-colors ${lang === "fr" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>FR</button>
        </div>
      </div>

      {/* SECTION 1: HERO WITH VIDEO BACKGROUND */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-start px-8 md:px-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B49] via-[#002B49]/80 to-transparent z-10" />
          <video autoPlay loop muted playsInline className="w-full h-full object-cover parallax-img opacity-60">
            <source src="/mining-bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 max-w-5xl text-white mt-20">
          <p className="hero-subtitle text-[#D4AF37] font-bold tracking-[0.2em] uppercase mb-4">{t.heroTag}</p>
          <h1 className="text-3xl md:text-6xl font-black mb-8 leading-[1.1] uppercase">
            <div className="overflow-hidden py-1"><span className="hero-text block">{t.heroTitle1}</span></div>
            <div className="overflow-hidden py-1"><span className="hero-text block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-500">{t.heroTitle2}</span></div>
          </h1>
          <div className="hero-line h-1 w-32 bg-[#D4AF37] mb-8 rounded-none" />
          <p className="hero-subtitle text-xl md:text-3xl text-gray-300 font-light max-w-3xl leading-relaxed">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* SECTION 2: THE STORY (MODERN OVERLAP) */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8 gsap-fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-[#002B49] leading-tight uppercase">
              {t.storyTitle1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-600">{t.storyTitle2}</span>
            </h2>
            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-none bg-gray-100 border border-[#D4AF37] flex items-center justify-center flex-shrink-0">
                <span className="text-[#002B49] font-black text-2xl">HM</span>
              </div>
              <p className="font-bold text-[#002B49] uppercase tracking-wider text-sm">HM Services & Logistics</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-[600px] relative rounded-none overflow-hidden shadow-2xl gsap-fade-up border-b-8 border-[#D4AF37]">
            <Image 
              src="/about-story.jpg" 
              alt="Professional Support Team" 
              fill 
              className="object-cover parallax-img scale-125 origin-top"
            />
            {/* Minimalist Info Badge */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#002B49]/90 backdrop-blur-md border-t border-[#D4AF37] text-white">
              <p className="font-bold text-lg uppercase tracking-wide text-center">{t.storyBadge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & MISSION */}
      <section className="relative py-40 flex items-center overflow-hidden bg-[#002B49]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#002B49]/90 z-10" />
          <Image 
            src="/vision-bg.jpg" 
            alt="Mining Background" 
            fill 
            className="object-cover parallax-img scale-125 opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-20 w-full stagger-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="grid-item p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#D4AF37]" />
              <div className="text-5xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">🔭</div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">{t.visionTag}</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                {t.visionDesc}
              </p>
            </div>

            {/* Mission Card */}
            <div className="grid-item p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-white" />
              <div className="text-5xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">🎯</div>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wider">{t.missionTag}</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                {t.missionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES GRID */}
      <section className="py-32 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 gsap-fade-up">
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2">{t.valuesTag}</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#002B49] uppercase">{t.valuesTitle}</h2>
          </div>
          
          <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, idx) => (
              <div 
                key={idx}
                className="grid-item group relative h-[350px] bg-[#002B49] rounded-none overflow-hidden cursor-pointer border border-gray-200 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B49] via-[#002B49]/80 to-transparent z-10" />
                <Image src={valueImages[idx]} alt={value.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 z-0 opacity-50" />
                
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
                  <div className="w-12 h-12 bg-white/10 text-[#D4AF37] border border-[#D4AF37] rounded-none flex items-center justify-center font-black text-xl backdrop-blur-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="w-8 h-1 bg-[#D4AF37] mb-4 transform origin-left transition-all duration-300 group-hover:w-full" />
                    <h4 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 text-sm opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-100">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: STATS/KPIs */}
      <section className="relative py-24 bg-[#D4AF37] text-[#002B49] overflow-hidden gsap-fade-up border-t border-[#002B49]/20">
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#002B49]/30">
          <div className="py-6">
            <div className="text-6xl md:text-7xl font-black mb-2 flex items-center justify-center">
              <span className="stat-number" data-target="3">0</span><span className="text-white">+</span>
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">{t.stat1}</span>
          </div>
          <div className="py-6">
            <div className="text-6xl md:text-7xl font-black mb-2 flex items-center justify-center">
              <span className="stat-number" data-target="100">0</span><span className="text-white">%</span>
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">{t.stat2}</span>
          </div>
          <div className="py-6">
            <div className="text-6xl md:text-7xl font-black mb-2 text-[#002B49]">
              RDC
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">{t.stat3}</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}