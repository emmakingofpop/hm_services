"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer"; 

gsap.registerPlugin(ScrollTrigger);

// Multilingual Support Dictionary (ALL TITLES STRICTLY CAPITALIZED)
const translations = {
  en: {
    heroTag: "CAREER PORTAL",
    heroTitle: "BUILD YOUR FUTURE IN MINING",
    heroSub: "Join a team dedicated to excellence, safety, and sustainable operational growth in the Democratic Republic of Congo.",
    
    valuesTag: "OUR CULTURE",
    valuesTitle: "WHY WORK WITH US?",
    
    jobsTag: "OPEN POSITIONS",
    jobsTitle: "CURRENT OPPORTUNITIES",
    btnApply: "APPLY NOW",
    
    spontaneousTag: "DON'T SEE A FIT?",
    spontaneousTitle: "SUBMIT A SPONTANEOUS APPLICATION",
    spontaneousSub: "We are always looking for dedicated professionals to join our talent pool. Send us your resume for future opportunities.",
    btnSubmit: "SUBMIT YOUR CV",
  },
  fr: {
    heroTag: "PORTAIL CARRIÈRES",
    heroTitle: "BÂTISSEZ VOTRE AVENIR DANS LES MINES",
    heroSub: "Rejoignez une équipe dédiée à l'excellence, à la sécurité et à la croissance opérationnelle durable en République Démocratique du Congo.",
    
    valuesTag: "NOTRE CULTURE",
    valuesTitle: "POURQUOI TRAVAILLER AVEC NOUS ?",
    
    jobsTag: "POSTES OUVERTS",
    jobsTitle: "OPPORTUNITÉS ACTUELLES",
    btnApply: "POSTULER MAINTENANT",
    
    spontaneousTag: "PAS D'OFFRE CORRESPONDANTE ?",
    spontaneousTitle: "CANDIDATURE SPONTANÉE",
    spontaneousSub: "Nous sommes toujours à la recherche de professionnels dévoués pour rejoindre notre vivier de talents. Envoyez-nous votre CV pour de futures opportunités.",
    btnSubmit: "SOUMETTRE VOTRE CV",
  }
};

// Mock Data for Job Postings
const jobOpenings = [
  {
    id: 1,
    title: { en: "SENIOR MINING ENGINEER", fr: "INGÉNIEUR MINIER PRINCIPAL" },
    location: "LUBUMBASHI, DRC",
    type: { en: "FULL-TIME", fr: "TEMPS PLEIN" },
    department: { en: "OPERATIONS", fr: "OPÉRATIONS" },
    description: {
      en: "Oversee mine planning, optimization, and daily operational safety at our key copper extraction sites.",
      fr: "Superviser la planification minière, l'optimisation et la sécurité opérationnelle quotidienne sur nos principaux sites d'extraction de cuivre."
    }
  },
  {
    id: 2,
    title: { en: "HSE SUPERVISOR", fr: "SUPERVISEUR HSE" },
    location: "KOLWEZI, DRC",
    type: { en: "ROTATIONAL (FIFO)", fr: "ROTATION (FIFO)" },
    department: { en: "HEALTH & SAFETY", fr: "SANTÉ ET SÉCURITÉ" },
    description: {
      en: "Ensure rigorous compliance with international environmental and safety standards to maintain our Zero Harm goal.",
      fr: "Veiller au respect rigoureux des normes internationales en matière d'environnement et de sécurité afin de maintenir notre objectif Zéro Accident."
    }
  },
  {
    id: 3,
    title: { en: "HEAVY MACHINERY MECHANIC", fr: "MÉCANICIEN D'ENGINS LOURDS" },
    location: "KOLWEZI, DRC",
    type: { en: "FULL-TIME", fr: "TEMPS PLEIN" },
    department: { en: "MAINTENANCE", fr: "MAINTENANCE" },
    description: {
      en: "Perform predictive and corrective maintenance on articulated trucks, excavators, and drilling equipment.",
      fr: "Effectuer la maintenance prédictive et corrective sur les camions articulés, les pelles et les équipements de forage."
    }
  },
  {
    id: 4,
    title: { en: "COMMUNITY LIAISON OFFICER", fr: "AGENT DE LIAISON COMMUNAUTAIRE" },
    location: "LUBUMBASHI, DRC",
    type: { en: "CONTRACT", fr: "CONTRAT" },
    department: { en: "CSR", fr: "RSE" },
    description: {
      en: "Act as the primary bridge between operations and local communities, ensuring social license to operate.",
      fr: "Agir comme pont principal entre les opérations et les communautés locales, assurant l'acceptabilité sociale."
    }
  }
];

export default function CareerPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  useGSAP(() => {
    // Hero Text Animation
    const tl = gsap.timeline();
    tl.from(".hero-text-anim", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2,
    });

    // Fade Up Sections
    gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((section) => {
      gsap.from(section, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

  }, { scope: container });

  return (
    <main ref={container} className="bg-white text-slate-900 w-full overflow-hidden font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      
      {/* Floating Language Switcher */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col bg-white rounded-full shadow-lg overflow-hidden border border-gray-200">
        <button onClick={() => setLang("en")} className={`p-3 text-xs font-bold transition-colors ${lang === "en" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>EN</button>
        <button onClick={() => setLang("fr")} className={`p-3 text-xs font-bold transition-colors ${lang === "fr" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>FR</button>
      </div>

      {/* SECTION 1 — CAREER HERO */}
      <section className="relative pt-40 pb-32 px-8 md:px-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/mining-careers-bg.jpg" 
            alt="Mining Team" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002B49]/90 to-[#002B49]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="hero-text-anim text-[#D4AF37] font-bold tracking-widest uppercase mb-4">{t.heroTag}</p>
          <h1 className="hero-text-anim text-5xl md:text-7xl font-black mb-6 uppercase text-white leading-tight">{t.heroTitle}</h1>
          <p className="hero-text-anim text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* SECTION 2 — WHY WORK WITH US */}
      <section className="py-24 px-8 md:px-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 gsap-fade-up">
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2">{t.valuesTag}</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#002B49] uppercase">{t.valuesTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-grid">
            {[
              { title: lang === "en" ? "SAFETY FIRST" : "LA SÉCURITÉ D'ABORD", desc: lang === "en" ? "A non-negotiable commitment to a zero-harm workplace." : "Un engagement non négociable envers un environnement de travail sans accident.", icon: "🛡️" },
              { title: lang === "en" ? "CAREER ADVANCEMENT" : "ÉVOLUTION DE CARRIÈRE", desc: lang === "en" ? "Continuous training programs and clear paths for internal promotion." : "Des programmes de formation continue et des parcours clairs pour la promotion interne.", icon: "📈" },
              { title: lang === "en" ? "LOCAL EMPOWERMENT" : "DÉVELOPPEMENT LOCAL", desc: lang === "en" ? "Proudly employing and upskilling the Congolese workforce." : "Fiers d'employer et de perfectionner la main-d'œuvre congolaise.", icon: "🤝" }
            ].map((value, idx) => (
              <div key={idx} className="grid-item bg-white p-10 shadow-lg border-t-4 border-[#D4AF37] text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-black text-[#002B49] mb-4 uppercase">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — OPEN POSITIONS */}
      <section className="py-24 px-8 md:px-20 bg-white" id="jobs">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b-2 border-gray-100 pb-6 gsap-fade-up">
            <div>
              <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2">{t.jobsTag}</p>
              <h2 className="text-4xl font-black text-[#002B49] uppercase">{t.jobsTitle}</h2>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="bg-gray-100 text-[#002B49] px-4 py-2 font-bold text-sm rounded-full">
                {jobOpenings.length} {lang === "en" ? "OPENINGS" : "POSTES"}
              </span>
            </div>
          </div>

          <div className="space-y-6 stagger-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="grid-item group flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 hover:border-l-[#D4AF37]">
                <div className="w-full md:w-3/4">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-[#002B49] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">{job.department[lang]}</span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-bold uppercase tracking-widest">{job.type[lang]}</span>
                    <span className="text-[#D4AF37] px-3 py-1 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      📍 {job.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#002B49] mb-3 uppercase group-hover:text-[#D4AF37] transition-colors">{job.title[lang]}</h3>
                  <p className="text-gray-600 md:max-w-2xl">{job.description[lang]}</p>
                </div>
                
                <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-end">
                  <Link href={`/careers/${job.id}`} className="inline-block px-8 py-4 bg-transparent border-2 border-[#002B49] text-[#002B49] font-black uppercase text-sm tracking-widest hover:bg-[#002B49] hover:text-white transition-colors w-full text-center md:w-auto">
                    {t.btnApply}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SPONTANEOUS APPLICATION CTA */}
      <section className="py-24 px-8 md:px-20 bg-[#D4AF37] relative overflow-hidden gsap-fade-up border-t border-[#002B49]/10">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-[#002B49] opacity-5 skew-x-12 transform -translate-x-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-white font-bold tracking-widest uppercase mb-2">{t.spontaneousTag}</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#002B49] mb-6 uppercase">{t.spontaneousTitle}</h2>
          <p className="text-xl text-[#002B49]/80 mb-10 max-w-2xl mx-auto font-medium">
            {t.spontaneousSub}
          </p>
          <Link href="/careers/spontaneous" className="inline-block px-12 py-5 bg-[#002B49] text-white font-black hover:bg-[#001930] hover:scale-105 shadow-xl transition-all uppercase tracking-widest text-sm">
            {t.btnSubmit}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}