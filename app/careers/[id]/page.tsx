"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "../../components/Footer";

// Multilingual Content
const translations = {
  en: {
    back: "BACK TO CAREERS",
    applyNow: "APPLY FOR THIS POSITION",
    jobDetails: "JOB DETAILS",
    requirements: "REQUIREMENTS",
    responsibilities: "KEY RESPONSIBILITIES",
    formTitle: "SUBMIT YOUR APPLICATION",
    fullName: "FULL NAME",
    email: "EMAIL ADDRESS",
    phone: "PHONE NUMBER",
    uploadCv: "UPLOAD CV (PDF)",
    uploadCover: "UPLOAD COVER LETTER (PDF)",
    submitBtn: "SUBMIT APPLICATION",
    dragDrop: "DRAG & DROP OR CLICK TO UPLOAD",
    successMsg: "YOUR APPLICATION HAS BEEN SENT SUCCESSFULLY.",
  },
  fr: {
    back: "RETOUR AUX CARRIÈRES",
    applyNow: "POSTULER À CE POSTE",
    jobDetails: "DÉTAILS DU POSTE",
    requirements: "EXIGENCES",
    responsibilities: "RESPONSABILITÉS CLÉS",
    formTitle: "SOUMETTRE VOTRE CANDIDATURE",
    fullName: "NOM COMPLET",
    email: "ADRESSE E-MAIL",
    phone: "NUMÉRO DE TÉLÉPHONE",
    uploadCv: "TÉLÉCHARGER LE CV (PDF)",
    uploadCover: "TÉLÉCHARGER LA LETTRE DE MOTIVATION (PDF)",
    submitBtn: "ENVOYER LA CANDIDATURE",
    dragDrop: "GLISSER-DÉPOSER OU CLIQUER POUR TÉLÉCHARGER",
    successMsg: "VOTRE CANDIDATURE A ÉTÉ ENVOYÉE AVEC SUCCÈS.",
  }
};

export default function JobDetailPage() {
  const container = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations[lang];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main ref={container} className="bg-white text-slate-900 w-full overflow-hidden font-['Helvetica_Neue',_Arial,_sans-serif]">
      
      {/* TOP NAV BAR */}
      <nav className="py-24 px-8 md:px-20 flex justify-between items-center bg-[#002B49] text-white sticky top-0 z-50">
        
      </nav>

      {/* SUCCESS OVERLAY */}
      {isSubmitted && (
        <div className="fixed inset-0 z-[100] bg-[#002B49] flex items-center justify-center p-8 text-center">
          <div className="max-w-md">
            <div className="text-[#D4AF37] text-6xl mb-6">✓</div>
            <h2 className="text-white text-3xl font-black uppercase mb-4">{t.successMsg}</h2>
            <button onClick={() => setIsSubmitted(false)} className="text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold uppercase tracking-widest text-sm mt-8">
              {t.back}
            </button>
          </div>
        </div>
      )}

      {/* JOB HERO */}
      <header className="pt-20 pb-16 px-8 md:px-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="job-header-anim flex gap-3 mb-6">
            <span className="bg-[#D4AF37] text-[#002B49] px-3 py-1 text-[10px] font-black uppercase tracking-widest">FULL-TIME</span>
            <span className="bg-[#002B49] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">LUBUMBASHI, DRC</span>
          </div>
          <h1 className="job-header-anim text-4xl md:text-6xl font-black text-[#002B49] mb-6 uppercase leading-tight">
            SENIOR MINING ENGINEER (PLANNING & OPTIMIZATION)
          </h1>
          <p className="job-header-anim text-xl text-gray-600 font-light max-w-3xl">
            Lead the technical design and long-term strategic planning for our open-pit operations in the Katanga Copperbelt.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 md:px-20 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: JOB CONTENT */}
        <div className="w-full lg:w-2/3">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#002B49] mb-6 uppercase border-l-4 border-[#D4AF37] pl-4">{t.jobDetails}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a Senior Mining Engineer, you will be responsible for providing technical expertise to ensure mining plans are safe, efficient, and cost-effective. You will work closely with the Geology and Operations teams to maximize mineral recovery while maintaining zero-harm safety standards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#002B49] mb-6 uppercase border-l-4 border-[#D4AF37] pl-4">{t.responsibilities}</h2>
            <ul className="space-y-4 text-gray-700 list-disc pl-5">
              <li>Develop life-of-mine plans and annual budget schedules.</li>
              <li>Oversee drill and blast patterns to optimize fragmentation and reduce costs.</li>
              <li>Provide mentorship to junior engineers and technical staff.</li>
              <li>Collaborate with HSE teams to implement world-class safety protocols.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-[#002B49] mb-6 uppercase border-l-4 border-[#D4AF37] pl-4">{t.requirements}</h2>
            <ul className="space-y-4 text-gray-700 list-disc pl-5 font-bold uppercase text-sm tracking-tight">
              <li>BACHELOR’S DEGREE IN MINING ENGINEERING (OR EQUIVALENT).</li>
              <li>MINIMUM 8 YEARS OF EXPERIENCE IN OPEN-PIT MINING.</li>
              <li>PROFICIENCY IN SURPAC, DESWIK, OR VULCAN SOFTWARE.</li>
              <li>FLUENCY IN ENGLISH AND FRENCH IS HIGHLY DESIRABLE.</li>
            </ul>
          </section>
        </div>

        {/* RIGHT: APPLICATION FORM */}
        <aside className="w-full lg:w-1/3">
          <div className="bg-[#002B49] p-8 md:p-10 sticky top-32 shadow-2xl">
            <h3 className="text-white text-xl font-black mb-8 uppercase tracking-widest text-center border-b border-white/10 pb-6">
              {t.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#D4AF37] text-[10px] font-black uppercase mb-2 tracking-widest">{t.fullName}</label>
                <input type="text" required className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors" />
              </div>

              <div>
                <label className="block text-[#D4AF37] text-[10px] font-black uppercase mb-2 tracking-widest">{t.email}</label>
                <input type="email" required className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors" />
              </div>

              {/* CV UPLOAD */}
              <div>
                <label className="block text-[#D4AF37] text-[10px] font-black uppercase mb-2 tracking-widest">{t.uploadCv}</label>
                <div className="border-2 border-dashed border-white/20 p-6 text-center cursor-pointer hover:border-[#D4AF37] transition-all group">
                  <p className="text-gray-400 text-[10px] font-bold uppercase group-hover:text-white">{t.dragDrop}</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              {/* COVER LETTER UPLOAD */}
              <div>
                <label className="block text-[#D4AF37] text-[10px] font-black uppercase mb-2 tracking-widest">{t.uploadCover}</label>
                <div className="border-2 border-dashed border-white/20 p-6 text-center cursor-pointer hover:border-[#D4AF37] transition-all group">
                  <p className="text-gray-400 text-[10px] font-bold uppercase group-hover:text-white">{t.dragDrop}</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#D4AF37] text-[#002B49] py-5 font-black uppercase tracking-widest text-sm hover:bg-white transition-all transform active:scale-95 shadow-xl">
                {t.submitBtn}
              </button>
            </form>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}