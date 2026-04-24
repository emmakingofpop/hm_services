"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

// Safely register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Added 'bgImage' to each service for the hover effect
const services = [
  {
    title: "HR & Recruitment",
    desc: "We source, screen and mobilise qualified mining professionals across technical and operational roles.",
    details: ["Technical screening", "Reference verification", "Onboarding support"],
    icon: "👷",
    bgImage: "/service-hr.jpg", // Replace with your actual image paths
  },
  {
    title: "EOR / Payroll & Compliance",
    desc: "Ensuring compliant workforce management with structured payroll and HR systems tailored to DRC regulations.",
    details: ["CNSS/INPP compliance", "Contract management", "Tax administration"],
    icon: "📊",
    bgImage: "/service-payroll.jpg",
  },
  {
    title: "Training & HSE",
    desc: "Competency-based programs to improve safety, operational discipline, and site-specific skills.",
    details: ["Safety inductions", "Operational training", "HSE reporting"],
    icon: "🛡️",
    bgImage: "/service-training.jpg",
  },
  {
    title: "CSR & Social Performance",
    desc: "Support for community engagement, local hiring, and managing social license to operate.",
    details: ["Grievance mechanisms", "Local hiring audits", "Community reporting"],
    icon: "🤝",
    bgImage: "/service-csr.jpg",
  },
  {
    title: "Logistics & Transport",
    desc: "Coordination of personnel, equipment, and consumables to ensure operational continuity.",
    details: ["Inter-site transfers", "Supply chain tracking", "Mobilisation logistics"],
    icon: "🚛",
    bgImage: "/service-logistics.jpg",
  },
  {
    title: "Project Mobilisation",
    desc: "Rapid deployment strategies for new mining concessions and industrial sites.",
    details: ["Housing logistics", "Visa/Permit handling", "Site readiness"],
    icon: "🚀",
    bgImage: "/service-mobilisation.jpg",
  }
];

export default function ServicesPage() {
  const container = useRef<HTMLDivElement | null>(null);

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

    // 3. Staggered Service Cards (Fixed Trigger & Recalculation)
    gsap.from(".service-card", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15, // Slightly longer stagger looks smoother
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%", 
        toggleActions: "play none none none",
        invalidateOnRefresh: true, // Forces GSAP to recalculate if Next.js shifts the layout
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
    <div>
      {/* Fix: Changed overflow-hidden to overflow-x-hidden to prevent scroll clipping issues */}
      <main ref={container} className="bg-slate-50 overflow-x-hidden">
        
        {/* SECTION 1: HERO */}
        <section className="relative h-[70vh] flex items-center justify-center text-center px-8 bg-slate-900">
          <div className="absolute inset-0 z-0 opacity-40">
             <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-slate-900" />
          </div>

          <div className="relative z-20 max-w-5xl">
            <h1 className="hero-title text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
              <span className="hero-title-span block">Industrial</span>
              <span className="hero-title-span block text-amber-500">Solutions</span>
            </h1>
            <p className="hero-desc text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Integrated Workforce, CSR, and Logistics designed for the unique challenges of the DRC mining corridors.
            </p>
          </div>
        </section>

        {/* SECTION 2: SERVICES GRID */}
        <section className="py-32 px-6 md:px-20 relative parallax-container bg-white">
          <div className="parallax-bg absolute top-20 left-10 text-[12rem] font-black text-slate-100 leading-none select-none -z-0 pointer-events-none">
            SERVICES
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card group relative bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col min-h-[400px]"
                >
                  {/* --- NEW: Fancy Hover Background Image --- */}
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

                  {/* Card Content - Z-index ensures it sits above the image */}
                  <div className="relative z-20 flex flex-col flex-grow h-full">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-500">
                      {service.icon}
                    </div>
                    
                    {/* Text elements transition to white when the dark background image appears */}
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-amber-400 transition-colors duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 mb-8 font-medium group-hover:text-slate-300 transition-colors duration-500">
                      {service.desc}
                    </p>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-3 text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors duration-500">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-slate-100 group-hover:border-slate-700 transition-colors duration-500 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-amber-500 transition-colors duration-500">Operational Core</span>
                      <div className="text-slate-300 group-hover:text-amber-500 transition-colors duration-500 transform group-hover:translate-x-2">→</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: MARQUEE */}
        <section className="py-24 bg-slate-900 overflow-hidden relative">
          <div className="marquee-content whitespace-nowrap flex">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center">
                <span className="text-7xl md:text-9xl font-black text-transparent stroke-white px-10 opacity-20">LUBUMBASHI</span>
                <span className="text-7xl md:text-9xl font-black text-amber-500 px-10">KOLWEZI</span>
                <span className="text-7xl md:text-9xl font-black text-transparent stroke-white px-10 opacity-20">KINSHASA</span>
              </div>
            ))}
          </div>
          <style jsx>{`
            .stroke-white { -webkit-text-stroke: 2px rgba(255,255,255,0.5); }
          `}</style>
        </section>

        {/* SECTION 4: CTA */}
        <section className="py-32 px-8 bg-slate-50 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
              Ready to <span className="text-amber-500">Deploy?</span>
            </h2>
            <button className="px-10 py-5 bg-slate-900 text-white font-black rounded-full hover:bg-amber-600 transition-all uppercase tracking-widest text-sm shadow-2xl">
              Contact Operations
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}