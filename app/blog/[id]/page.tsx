"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

// 1. Multilingual Content Dictionary
const translations = {
  en: {
    backToBlog: "BACK TO ALL NEWS",
    readingTime: "5 MIN READ",
    share: "SHARE THIS INSIGHT",
    relatedTitle: "MORE FROM OUR EXPERTS",
    readMore: "READ ARTICLE",
    newsletterTitle: "GET MORE INSIGHTS",
    btnSubscribe: "SUBSCRIBE",
  },
  fr: {
    backToBlog: "RETOUR AUX ACTUALITÉS",
    readingTime: "LECTURE 5 MIN",
    share: "PARTAGER CETTE ANALYSE",
    relatedTitle: "PLUS D'AVIS D'EXPERTS",
    readMore: "LIRE L'ARTICLE",
    newsletterTitle: "PLUS DE PERSPECTIVES",
    btnSubscribe: "S'ABONNER",
  }
};

export default function ArticleReadingPage({ params }: { params: { id: string } }) {
  const container = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = translations[lang];

  // Update Reading Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <main ref={container} className="bg-white text-slate-900 w-full overflow-hidden font-['Helvetica_Neue',_Arial,_sans-serif]">
      
      {/* READING PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-[#D4AF37] z-[100] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVIGATION OVERLAY */}
      <nav className="pt-24 pb-6 px-8 md:px-20 flex justify-between items-center bg-[#002B49] border-b border-gray-100 sticky top-0 z-50">
        
      </nav>

      {/* ARTICLE HERO SECTION */}
      <header className="pt-16 pb-20 px-8 md:px-20 max-w-5xl mx-auto">
        <div className="article-header-anim flex items-center gap-4 mb-8">
          <span className="bg-[#002B49] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            LOGISTICS & COMPLIANCE
          </span>
          <span className="text-gray-400 font-bold text-xs uppercase">{t.readingTime}</span>
        </div>
        
        <h1 className="article-header-anim text-4xl md:text-6xl font-black text-[#002B49] mb-8 uppercase leading-[1.1]">
          {lang === 'en' 
            ? "NAVIGATING THE NEW MINING REGULATIONS IN THE LUALABA PROVINCE" 
            : "NAVIGATION DANS LES NOUVELLES RÉGLEMENTATIONS MINIÈRES AU LUALABA"}
        </h1>

        <div className="article-header-anim flex items-center gap-6 border-y border-gray-100 py-6">
          <div className="w-12 h-12 bg-gray-200 rounded-none relative overflow-hidden">
            <Image src="/author-headshot.jpg" alt="Author" fill className="object-cover" />
          </div>
          <div>
            <p className="font-black text-[#002B49] text-sm uppercase">JEAN-PIERRE KABILA</p>
            <p className="text-gray-500 text-xs uppercase font-bold tracking-tighter">CHIEF OPERATIONS OFFICER</p>
          </div>
          <div className="ml-auto hidden md:block">
            <p className="text-gray-400 text-xs font-bold uppercase">MAY 24, 2026</p>
          </div>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <section className="px-0 md:px-20 mb-20 max-w-7xl mx-auto">
        <div className="relative h-[400px] md:h-[650px] w-full">
          <Image 
            src="/blog-large.jpg" 
            alt="Mining Operations" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="px-8 md:px-20 pb-24 max-w-4xl mx-auto">
        <div className="content-block prose prose-lg max-w-none text-slate-700 leading-relaxed font-light">
          <p className="text-2xl font-medium text-[#002B49] mb-10 leading-snug">
            {lang === 'en'
              ? "As the Democratic Republic of Congo solidifies its position as a global leader in battery minerals, the regulatory landscape is shifting toward stricter local content and safety requirements."
              : "Alors que la République Démocratique du Congo consolide sa position de leader mondial des minéraux de batterie, le paysage réglementaire évolue vers des exigences plus strictes."}
          </p>

          <h3 className="text-2xl font-black text-[#002B49] mt-12 mb-6 uppercase">I. THE LOCAL CONTENT PARADIGM</h3>
          <p className="mb-6">
            The latest decree aims to integrate local SMEs more deeply into the mining value chain. For logistics providers, this means building robust joint ventures that prioritize Congolese management and technical training. We have seen a 15% increase in operational efficiency when community-led logistics are integrated into the core site planning.
          </p>

          <blockquote className="border-l-8 border-[#D4AF37] bg-gray-50 p-10 my-12 italic text-[#002B49] font-medium text-xl">
            Transparency is no longer just a compliance check; it is a competitive advantage in the modern DRC mining sector.
          </blockquote>

          <h3 className="text-2xl font-black text-[#002B49] mt-12 mb-6 uppercase">II. DIGITALIZATION OF THE SUPPLY CHAIN</h3>
          <p className="mb-6">
            By leveraging real-time tracking systems, we are reducing transport bottlenecks between the Lualaba sites and the Dar es Salaam corridor. This technology allows for unprecedented audit trails, fulfilling the ESG requirements of international investors.
          </p>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64">
              <Image src="/blog-sub-1.jpg" alt="Detail" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold text-gray-500 uppercase border-b border-[#D4AF37] pb-2 mb-4">KEY TAKEAWAY</p>
              <p className="text-lg text-[#002B49] font-black uppercase">EFFICIENCY IS BORN FROM DATA, NOT JUST LABOR.</p>
            </div>
          </div>
        </div>

        {/* SOCIAL SHARE */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-black text-[#002B49] text-sm uppercase tracking-widest">{t.share}</p>
          <div className="flex gap-4">
            {['LINKEDIN', 'X', 'WHATSAPP'].map(social => (
              <button key={social} className="px-6 py-2 border-2 border-[#002B49] text-[#002B49] font-black text-[10px] tracking-widest hover:bg-[#002B49] hover:text-white transition-all">
                {social}
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* RELATED POSTS SECTION */}
      <section className="py-24 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#002B49] mb-12 uppercase border-b-2 border-gray-200 pb-4">
            {t.relatedTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white group cursor-pointer border border-transparent hover:border-[#D4AF37] transition-all">
                <div className="h-56 relative overflow-hidden">
                  <Image src={`/blog-${item}.jpg`} alt="Related" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-8">
                  <h4 className="text-lg font-black text-[#002B49] uppercase mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {lang === 'en' ? "IMPROVING COPPERBELT LOGISTICS" : "AMÉLIORATION DE LA LOGISTIQUE DU KATANGA"}
                  </h4>
                  <Link href="#" className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#002B49]">
                    {t.readMore} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI NEWSLETTER CTA */}
      <section className="py-16 px-8 md:px-20 bg-[#002B49] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h3 className="text-3xl font-black uppercase tracking-tighter">{t.newsletterTitle}</h3>
          <div className="flex w-full md:w-auto shadow-xl">
            <input 
              type="email" 
              className="bg-white/10 border border-white/20 px-6 py-4 outline-none text-white flex-grow md:w-80 font-bold" 
              placeholder="EMAIL..." 
            />
            <button className="bg-[#D4AF37] text-[#002B49] px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-white transition-colors">
              {t.btnSubscribe}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}