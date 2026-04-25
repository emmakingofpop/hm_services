"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  UsergroupAddOutlined, 
  FileProtectOutlined, 
  SafetyCertificateOutlined, 
  GlobalOutlined, 
  CarOutlined, 
  RocketOutlined 
} from "@ant-design/icons";
import Footer from "../components/Footer";

// Safely register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Multilingual Support Dictionary
const translations = {
  en: {
    heroTitle1: "INDUSTRIAL",
    heroTitle2: "SOLUTIONS",
    heroSub: "Integrated Workforce, CSR, and Logistics designed for the unique challenges of the DRC mining corridors.",
    
    bgText: "SERVICES",
    
    services: [
      {
        title: "HR & RECRUITMENT",
        desc: "We source, screen and mobilise qualified mining professionals across technical and operational roles.",
        details: ["Technical screening", "Reference verification", "Onboarding support"],
        icon: <UsergroupAddOutlined />,
        bgImage: "/service-hr.jpg",
      },
      {
        title: "EOR / PAYROLL & COMPLIANCE",
        desc: "Ensuring compliant workforce management with structured payroll and HR systems tailored to DRC regulations.",
        details: ["CNSS/INPP compliance", "Contract management", "Tax administration"],
        icon: <FileProtectOutlined />,
        bgImage: "/service-payroll.jpg",
      },
      {
        title: "TRAINING & HSE",
        desc: "Competency-based programs to improve safety, operational discipline, and site-specific skills.",
        details: ["Safety inductions", "Operational training", "HSE reporting"],
        icon: <SafetyCertificateOutlined />,
        bgImage: "/service-training.jpg",
      },
      {
        title: "CSR & SOCIAL PERFORMANCE",
        desc: "Support for community engagement, local hiring, and managing social license to operate.",
        details: ["Grievance mechanisms", "Local hiring audits", "Community reporting"],
        icon: <GlobalOutlined />,
        bgImage: "/service-csr.jpg",
      },
      {
        title: "LOGISTICS & TRANSPORT",
        desc: "Coordination of personnel, equipment, and consumables to ensure operational continuity.",
        details: ["Inter-site transfers", "Supply chain tracking", "Mobilisation logistics"],
        icon: <CarOutlined />,
        bgImage: "/service-logistics.jpg",
      },
      {
        title: "PROJECT MOBILISATION",
        desc: "Rapid deployment strategies for new mining concessions and industrial sites.",
        details: ["Housing logistics", "Visa/Permit handling", "Site readiness"],
        icon: <RocketOutlined />,
        bgImage: "/service-mobilisation.jpg",
      }
    ],

    coreTag: "OPERATIONAL CORE",
    
    ctaTitle1: "READY TO ",
    ctaTitle2: "DEPLOY?",
    ctaBtn: "CONTACT OPERATIONS"
  },
  fr: {
    heroTitle1: "SOLUTIONS",
    heroTitle2: "INDUSTRIELLES",
    heroSub: "Une main-d'œuvre intégrée, des solutions RSE et logistiques conçues pour les défis uniques des corridors miniers de la RDC.",
    
    bgText: "SERVICES",
    
    services: [
      {
        title: "RH & RECRUTEMENT",
        desc: "Nous recherchons, sélectionnons et mobilisons des professionnels miniers qualifiés pour des rôles techniques et opérationnels.",
        details: ["Sélection technique", "Vérification des références", "Soutien à l'intégration"],
        icon: <UsergroupAddOutlined />,
        bgImage: "/service-hr.jpg",
      },
      {
        title: "PORTAGE / PAIE & CONFORMITÉ",
        desc: "Garantir une gestion de la main-d'œuvre conforme grâce à des systèmes de paie et de RH structurés, adaptés aux réglementations de la RDC.",
        details: ["Conformité CNSS/INPP", "Gestion des contrats", "Administration fiscale"],
        icon: <FileProtectOutlined />,
        bgImage: "/service-payroll.jpg",
      },
      {
        title: "FORMATION & HSE",
        desc: "Programmes axés sur les compétences pour améliorer la sécurité, la discipline opérationnelle et les aptitudes spécifiques au site.",
        details: ["Initiations à la sécurité", "Formation opérationnelle", "Rapports HSE"],
        icon: <SafetyCertificateOutlined />,
        bgImage: "/service-training.jpg",
      },
      {
        title: "RSE & PERFORMANCE SOCIALE",
        desc: "Soutien à l'engagement communautaire, à l'embauche locale et à la gestion de l'acceptabilité sociale.",
        details: ["Mécanismes de gestion des plaintes", "Audits d'embauche locale", "Rapports communautaires"],
        icon: <GlobalOutlined />,
        bgImage: "/service-csr.jpg",
      },
      {
        title: "LOGISTIQUE & TRANSPORT",
        desc: "Coordination du personnel, de l'équipement et des consommables pour assurer la continuité opérationnelle.",
        details: ["Transferts inter-sites", "Suivi de la chaîne d'approvisionnement", "Logistique de mobilisation"],
        icon: <CarOutlined />,
        bgImage: "/service-logistics.jpg",
      },
      {
        title: "MOBILISATION DE PROJET",
        desc: "Stratégies de déploiement rapide pour les nouvelles concessions minières et les sites industriels.",
        details: ["Logistique de logement", "Gestion des visas/permis", "Préparation du site"],
        icon: <RocketOutlined />,
        bgImage: "/service-mobilisation.jpg",
      }
    ],

    coreTag: "CŒUR OPÉRATIONNEL",
    
    ctaTitle1: "PRÊT À ",
    ctaTitle2: "DÉPLOYER ?",
    ctaBtn: "CONTACTER LES OPÉRATIONS"
  }
};

export default function ServicesPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  useGSAP(() => {
    // 1. Hero Text Reveal
    const tl = gsap.timeline();
    tl.from(".hero-title-span", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    }).from(".hero-desc", {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.6");

    // 2. Parallax background for the large text
    gsap.to(".parallax-bg", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // 3. Staggered Service Cards
    gsap.from(".service-card", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%", 
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
      }
    });

    // 4. Infinite Marquee
    gsap.to(".marquee-content", {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: "none",
    });

  }, { scope: container });

  return (
    <main ref={container} className="bg-white text-slate-900 overflow-x-hidden font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      
      {/* Floating Language Controls */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        <div className="flex flex-col bg-white rounded-none shadow-lg overflow-hidden border border-gray-200">
          <button onClick={() => setLang("en")} className={`p-3 text-xs font-bold transition-colors ${lang === "en" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>EN</button>
          <button onClick={() => setLang("fr")} className={`p-3 text-xs font-bold transition-colors ${lang === "fr" ? "bg-[#002B49] text-white" : "text-[#002B49] hover:bg-gray-100"}`}>FR</button>
        </div>
      </div>
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-8 bg-[#002B49]">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 to-[#002B49]" />
        </div>

        <div className="relative z-20 max-w-5xl">
          <h1 className="hero-title text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
            <span className="hero-title-span block">{t.heroTitle1}</span>
            <span className="hero-title-span block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-500">{t.heroTitle2}</span>
          </h1>
          <p className="hero-desc text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* SECTION 2: SERVICES GRID */}
      <section className="py-32 px-6 md:px-20 relative parallax-container bg-gray-50 border-t-8 border-[#D4AF37]">
        <div className="parallax-bg absolute top-20 left-10 text-[10rem] md:text-[14rem] font-black text-gray-200/50 leading-none select-none -z-0 pointer-events-none uppercase">
          {t.bgText}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-white rounded-none p-10 shadow-lg border border-gray-200 overflow-hidden flex flex-col min-h-[420px]"
              >
                {/* Image Reveal Background */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                    <div className="absolute inset-0 bg-slate-900/80 z-10" /> {/* Dark overlay so text remains readable */}
                    <Image
                      src={service.bgImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  </div>

                {/* Card Content */}
                <div className="relative z-20 flex flex-col flex-grow h-full">
                  <div className="w-16 h-16 bg-gray-50 border border-[#D4AF37] rounded-none flex items-center justify-center text-3xl mb-8 group-hover:bg-[#D4AF37] group-hover:text-white text-[#002B49] transition-all duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#002B49] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 mb-8 font-medium group-hover:text-slate-300 transition-colors duration-500 leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors duration-500 uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-none" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-200 group-hover:border-[#D4AF37]/50 transition-colors duration-500 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-500">{t.coreTag}</span>
                    <div className="text-[#002B49] group-hover:text-[#D4AF37] transition-colors duration-500 transform group-hover:translate-x-2 font-bold">→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MARQUEE */}
      <section className="py-24 bg-[#002B49] overflow-hidden relative border-y border-[#D4AF37]/30">
        <div className="marquee-content whitespace-nowrap flex">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-7xl md:text-9xl font-black text-transparent stroke-gold px-10 opacity-30">LUBUMBASHI</span>
              <span className="text-7xl md:text-9xl font-black text-[#D4AF37] px-10">KOLWEZI</span>
              <span className="text-7xl md:text-9xl font-black text-transparent stroke-gold px-10 opacity-30">KINSHASA</span>
            </div>
          ))}
        </div>
        <style jsx>{`
          .stroke-gold { -webkit-text-stroke: 2px #D4AF37; }
        `}</style>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-32 px-8 bg-white text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#002B49] mb-8 uppercase">
            {t.ctaTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-600">{t.ctaTitle2}</span>
          </h2>
          <Link href="/contact" className="inline-block px-12 py-5 bg-[#002B49] text-white font-black hover:bg-[#001930] hover:scale-105 shadow-xl transition-all uppercase tracking-widest text-sm border-b-4 border-[#D4AF37]">
            {t.ctaBtn}
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}