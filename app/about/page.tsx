"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const container = useRef<HTMLDivElement | null>(null);

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

  const values = [
    { title: "Safety", desc: "Our highest priority in every operational environment.", img: "/value-safety.jpg" },
    { title: "Integrity", desc: "Transparent practices aligned with OHADA standards.", img: "/value-integrity.jpg" },
    { title: "Accountability", desc: "Measurable results through structured KPIs.", img: "/value-accountability.jpg" },
    { title: "Local Empowerment", desc: "Investing in the Congolese workforce and communities.", img: "/value-local.jpg" },
  ];

  return (
    <div>
    <main ref={container} className="bg-slate-50 font-sans overflow-hidden">
      
      {/* SECTION 1: HERO WITH VIDEO BACKGROUND */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center bg-slate-900 text-white px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900 z-10" />
          {/* Replace with an actual video of operations or corporate office */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover parallax-img scale-125 origin-top"
          >
            <source src="/mining-bg.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 max-w-5xl mt-20">
          <p className="hero-subtitle text-amber-500 font-bold tracking-[0.2em] uppercase mb-4">Our Identity</p>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]">
            <div className="overflow-hidden py-1"><span className="hero-text block">Beyond Services.</span></div>
            <div className="overflow-hidden py-1"><span className="hero-text block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">A Strategic Force.</span></div>
          </h1>
          <div className="hero-line h-1 w-32 bg-amber-500 mb-8 rounded-full" />
          <p className="hero-subtitle text-xl md:text-3xl text-slate-300 font-light max-w-3xl leading-relaxed">
            A DRC-based leader providing integrated support to mining operators, contractors, and industrial partners.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE STORY (MODERN OVERLAP) */}
      <section className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 gsap-fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              A Strategic Partner for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Mining Excellence</span>
            </h2>
            <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
              <p>
                HM Services and Logistics is dedicated to the operational, human, and logistical support of mining actors in the Democratic Republic of the Congo. Under the visionary leadership of <strong className="text-slate-900">Mme Hinnes Mbelu</strong>, we bridge the gap between rigorous technical requirements and ground-level realities.
              </p>
              <p>
                We operate across the major mining corridors—Lubumbashi, Kolwezi, and Kinshasa—ensuring that your operations remain safe, fully compliant with OHADA laws, and sustainably integrated into the local socio-economic fabric.
              </p>
            </div>
            <div className="pt-4">
              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-amber-500 font-black text-2xl">HM</span>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl gsap-fade-up">
            <Image 
              src="/about-story.jpg" 
              alt="Professional Support Team" 
              fill 
              className="object-cover parallax-img scale-125 origin-top"
            />
            {/* Glassmorphic info badge floating on the image */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
              <p className="font-bold text-xl">Connecting Global Standards with Local Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & MISSION (CINEMATIC GLASSMORPHISM) */}
      <section className="relative py-40 flex items-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/80 z-10" />
          <Image 
            src="/vision-bg.jpg" 
            alt="Mining Background" 
            fill 
            className="object-cover parallax-img scale-125"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-20 w-full stagger-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="grid-item p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
              <div className="text-6xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">🔭</div>
              <h3 className="text-4xl font-black text-white mb-6">Our Vision</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                To be the most trusted partner enabling safe, compliant, and stable mining operations throughout Central Africa.
              </p>
            </div>

            {/* Mission Card */}
            <div className="grid-item p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-2 h-full bg-white" />
              <div className="text-6xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">🎯</div>
              <h3 className="text-4xl font-black text-white mb-6">Our Mission</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                To support the mining sector responsibly through practical solutions that improve lives, empower communities, and maximize operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES GRID (IMAGE REVEAL CARDS) */}
      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 gsap-fade-up">
            <p className="text-amber-500 font-bold tracking-widest uppercase mb-2">Our DNA</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Core Values</h2>
          </div>
          
          <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="grid-item group relative h-[350px] bg-slate-100 rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Background Image that zooms on hover */}
                <div className="absolute inset-0 bg-slate-900 z-0" />
                {/* Fallback pattern/gradient if images are missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0" />
                <Image src={value.img} alt={value.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 z-0 opacity-40 group-hover:opacity-20" />
                
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                  <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center font-black text-xl border border-amber-500/50 backdrop-blur-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {value.title}
                    </h4>
                    <p className="text-slate-300 text-sm opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-100">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: STATS/KPIs (GSAP COUNTERS) */}
      <section className="relative py-24 bg-amber-500 text-slate-900 overflow-hidden gsap-fade-up">
        {/* Abstract circles for background texture */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-400 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-600 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-900/20">
          <div className="py-6">
            <div className="text-6xl md:text-7xl font-black mb-2 flex items-center justify-center">
              <span className="stat-number" data-target="3">0</span><span className="text-amber-700">+</span>
            </div>
            <span className="font-bold uppercase tracking-widest text-sm text-slate-800">Strategic Hubs</span>
          </div>
          <div className="py-6">
            <div className="text-6xl md:text-7xl font-black mb-2 flex items-center justify-center">
              <span className="stat-number" data-target="100">0</span><span className="text-amber-700">%</span>
            </div>
            <span className="font-bold uppercase tracking-widest text-sm text-slate-800">OHADA Compliant</span>
          </div>
          <div className="py-6">
            <div className="text-6xl md:text-7xl font-black mb-2 text-slate-900">
              DRC
            </div>
            <span className="font-bold uppercase tracking-widest text-sm text-slate-800">Local Empowerment</span>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}