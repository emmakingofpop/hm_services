"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

// 1. Multilingual Dictionary
const translations = {
  en: {
    heroTag: "INDUSTRY INSIGHTS",
    heroTitle: "LATEST NEWS & BLOG",
    heroSub: "Stay informed with the latest developments in DRC mining, logistics, and sustainable development.",
    featuredTag: "FEATURED ARTICLE",
    recentTag: "RECENT PUBLICATIONS",
    readMore: "READ FULL ARTICLE",
    subscribeTitle: "SUBSCRIBE TO OUR NEWSLETTER",
    subscribeSub: "Receive executive summaries and industry updates directly in your inbox.",
    btnSubscribe: "SUBSCRIBE NOW",
    inputPlaceholder: "ENTER YOUR EMAIL ADDRESS",
  },
  fr: {
    heroTag: "PERSPECTIVES DE L'INDUSTRIE",
    heroTitle: "DERNIÈRES ACTUALITÉS ET BLOG",
    heroSub: "Restez informé des derniers développements dans les domaines des mines, de la logistique et du développement durable en RDC.",
    featuredTag: "ARTICLE EN VEDETTE",
    recentTag: "PUBLICATIONS RÉCENTES",
    readMore: "LIRE L'ARTICLE COMPLET",
    subscribeTitle: "ABONNEZ-VOUS À NOTRE NEWSLETTER",
    subscribeSub: "Recevez des résumés exécutifs et des mises à jour de l'industrie directement dans votre boîte de réception.",
    btnSubscribe: "S'ABONNER MAINTENANT",
    inputPlaceholder: "ENTREZ VOTRE ADRESSE E-MAIL",
  }
};

// 2. Mock Data for Professional Content
const articles = [
  {
    id: 1,
    date: "MAY 12, 2024",
    category: "COMPLIANCE",
    title: { en: "NAVIGATING THE NEW MINING REGULATIONS IN THE LUALABA PROVINCE", fr: "NAVIGATION DANS LES NOUVELLES RÉGLEMENTATIONS MINIÈRES AU LUALABA" },
    excerpt: { en: "A detailed analysis of the recent regulatory shifts and their impact on workforce mobilisation strategies.", fr: "Une analyse détaillée des récents changements réglementaires et de leur impact sur les stratégies de mobilisation de la main-d'œuvre." },
    image: "/blog-1.jpg"
  },
  {
    id: 2,
    date: "APR 28, 2024",
    category: "OPERATIONS",
    title: { en: "MAXIMIZING LOGISTICAL EFFICIENCY IN DEEP-PIT MINING", fr: "MAXIMISER L'EFFICACITÉ LOGISTIQUE DANS LES MINES À CIEL OUVERT" },
    excerpt: { en: "Exploring how integrated supply chain solutions are reducing operational downtime in the Copperbelt.", fr: "Découvrir comment les solutions de chaîne d'approvisionnement intégrées réduisent les temps d'arrêt opérationnels." },
    image: "/blog-2.jpg"
  },
  {
    id: 3,
    date: "APR 15, 2024",
    category: "CSR",
    title: { en: "MEASURING THE ROI OF SOCIAL PERFORMANCE PROGRAMS", fr: "MESURER LE ROI DES PROGRAMMES DE PERFORMANCE SOCIALE" },
    excerpt: { en: "Moving beyond philanthropy to measurable community impact and long-term operational stability.", fr: "Passer de la philanthropie à un impact communautaire mesurable et à une stabilité opérationnelle à long terme." },
    image: "/blog-3.jpg"
  }
];

export default function BlogPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = translations[lang];

  useGSAP(() => {
    gsap.from(".blog-hero-content", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((item, i) => {
      gsap.from(item, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      });
    });
  }, { scope: container });

  return (
    <main ref={container} className="bg-white text-slate-900 w-full overflow-hidden font-['Helvetica_Neue',_Arial,_sans-serif]">
      
      {/* SECTION 1 — HEADER / HERO */}
      <section className="pt-32 pb-20 px-8 md:px-20 bg-[#002B49] text-white">
        <div className="max-w-7xl mx-auto blog-hero-content">
          <p className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 border-l-4 border-[#D4AF37] pl-4">{t.heroTag}</p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* SECTION 2 — FEATURED POST */}
      <section className="py-20 px-8 md:px-20 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-gray-100">
            <div className="w-full lg:w-3/5 h-[400px] lg:h-auto relative">
              <Image 
                src="/featured-blog.jpg" 
                alt="Featured Insight" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center bg-white">
              <p className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-4">{t.featuredTag}</p>
              <h2 className="text-3xl font-black text-[#002B49] mb-6 uppercase leading-tight">
                {lang === "en" ? "Sustainable Extraction: The Future of Copper and Cobalt in DRC" : "Extraction Durable : L'Avenir du Cuivre et du Cobalt en RDC"}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {lang === "en" 
                  ? "An executive look at the shifting global demand for critical minerals and how local infrastructure is evolving to meet international ESG standards."
                  : "Un regard de haut niveau sur l'évolution de la demande mondiale pour les minéraux critiques et l'adaptation des infrastructures locales."}
              </p>
              <Link href="/blog/featured" className="text-[#002B49] font-black text-sm uppercase border-b-2 border-[#D4AF37] inline-block self-start hover:text-[#D4AF37] transition-colors">
                {t.readMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ARTICLE GRID */}
      <section className="py-20 px-8 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-black text-[#002B49] mb-12 uppercase border-b-2 border-gray-200 pb-4">
            {t.recentTag}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((post) => (
              <article key={post.id} className="stagger-item group cursor-pointer">
                <div className="h-64 relative overflow-hidden mb-6">
                  <Image 
                    src={post.image} 
                    alt="Article" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-[#002B49] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
                    {post.category}
                  </div>
                </div>
                <p className="text-[#D4AF37] font-bold text-xs mb-3">{post.date}</p>
                <h4 className="text-xl font-black text-[#002B49] mb-4 uppercase group-hover:text-[#D4AF37] transition-colors min-h-[3.5rem]">
                  {post.title[lang]}
                </h4>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt[lang]}
                </p>
                <Link href={`/blog/${post.id}`} className="text-[#002B49] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  {t.readMore} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — NEWSLETTER (PROFESSIONAL CTA) */}
      <section className="py-24 px-8 md:px-20 bg-[#D4AF37]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-[#002B49] mb-4 uppercase">{t.subscribeTitle}</h2>
          <p className="text-[#002B49]/80 text-lg mb-10 font-medium">
            {t.subscribeSub}
          </p>
          
          <form className="flex flex-col md:flex-row gap-0 shadow-2xl rounded-none overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t.inputPlaceholder} 
              className="flex-grow px-8 py-5 outline-none font-bold text-sm text-[#002B49] placeholder:text-[#002B49]/40"
            />
            <button className="bg-[#002B49] text-white px-10 py-5 font-black text-sm uppercase tracking-widest hover:bg-[#001930] transition-colors">
              {t.btnSubscribe}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* Language Switcher Button (Global) */}
      <div className="fixed bottom-10 right-10 z-[60] flex flex-col gap-2">
        <button 
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="bg-[#002B49] text-[#D4AF37] w-14 h-14 rounded-full font-black border-2 border-[#D4AF37] shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          {lang.toUpperCase()}
        </button>
      </div>

    </main>
  );
}