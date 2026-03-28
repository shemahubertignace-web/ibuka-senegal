import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Flame, Heart, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollSection from '../components/ScrollSection';

export default function WhatWeDoPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.05, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );

      gsap.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#0B0B0D]">
      {/* 1. Hero / Intro Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-end px-6 lg:px-[6vw] pb-24 overflow-hidden pt-32">
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/event-stage.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-[#0B0B0D]/30" />

        <div className="relative z-10 max-w-4xl" ref={headlineRef}>
          <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6 block">
            CE QUE NOUS FAISONS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] leading-[1.05] mb-8">
            Trois piliers pour un <span className="text-accent">monde sans génocide.</span>
          </h1>
        </div>
      </section>

      {/* 2. Preserving Memory */}
      <section className="py-24 px-6 lg:px-[12vw] relative z-10 border-t border-white/5 bg-[#0E0E12]">
        <ScrollSection className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 aspect-square bg-[#141419] border border-white/5 flex items-center justify-center">
             <span className="text-white/10 font-display text-4xl">Image Mémoire</span>
          </div>
          <div className="order-1 md:order-2">
            <Flame size={48} className="text-accent opacity-50 mb-8" />
            <h2 className="font-display text-4xl text-[#F5F5F7] mb-6">Préserver la Mémoire</h2>
            <div className="w-12 h-0.5 bg-accent mb-8"></div>
            <p className="font-body text-base text-[#A6A6AA] leading-relaxed mb-8">
              L'une de nos missions fondamentales est de veiller à ce que la mémoire du génocide et de ses victimes ne soit jamais oubliée. Nous organisons des événements commémoratifs au Sénégal et ailleurs pour honorer ceux qui ont été perdus. Ces événements servent de puissants rappels du passé et renforcent l'importance de la mémoire collective dans la prévention de futures atrocités.
            </p>
          </div>
        </ScrollSection>
      </section>

      {/* 3. Supporting Survivors */}
      <section className="py-24 px-6 lg:px-[12vw] relative z-10 border-t border-white/5 bg-[#0B0B0D]">
        <ScrollSection className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#A6A6AA] uppercase mb-4 block">
              Espace sûr et soutien communautaire pour les survivants
            </span>
            <Heart size={48} className="text-accent opacity-50 mb-8" />
            <h2 className="font-display text-4xl text-[#F5F5F7] mb-6">Soutenir les survivants</h2>
            <div className="w-12 h-0.5 bg-accent mb-8"></div>
            <p className="font-body text-base text-[#A6A6AA] leading-relaxed mb-8">
              Ibuka Sénégal s'efforce de fournir un soutien indispensable aux survivants du génocide, dont beaucoup continuent de faire face à des défis émotionnels, psychologiques et financiers. Notre objectif est de créer un réseau solide de survivants capables de se soutenir mutuellement tout en les connectant à la communauté plus large d'alliés.
            </p>
          </div>
          <div className="aspect-square bg-[#141419] border border-white/5 flex items-center justify-center">
             <span className="text-white/10 font-display text-4xl">Image Soutien</span>
          </div>
        </ScrollSection>
      </section>

      {/* 4. Education for Prevention */}
      <section className="py-24 px-6 lg:px-[12vw] relative z-10 border-t border-white/5 bg-[#0E0E12]">
        <ScrollSection className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 aspect-square bg-[#141419] border border-white/5 flex items-center justify-center">
             <span className="text-white/10 font-display text-4xl">Image Éducation</span>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#A6A6AA] uppercase mb-4 block">
              Un monde sans génocide—un avenir pacifique.
            </span>
            <GraduationCap size={48} className="text-accent opacity-50 mb-8" />
            <h2 className="font-display text-4xl text-[#F5F5F7] mb-6">Éducation pour la prévention</h2>
            <div className="w-12 h-0.5 bg-accent mb-8"></div>
            <p className="font-body text-base text-[#A6A6AA] leading-relaxed mb-8">
              Nous facilitons la recherche et collaborons avec des universités et des médias pour créer des ressources éducatives percutantes—telles que des films et du matériel pédagogique—qui favorisent la sensibilisation et la compréhension. En partageant les témoignages des survivants, nous nous efforçons de prévenir de futurs génocides.
            </p>
          </div>
        </ScrollSection>
      </section>

      {/* 5. CTA block */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-accent flex flex-col items-center text-center">
        <ScrollSection className="max-w-2xl px-6">
          <h2 className="font-display text-3xl md:text-5xl text-[#0B0B0D] mb-6 leading-tight">
            Rejoignez-nous pour faire la différence
          </h2>
          <p className="font-body text-[#1A1A1A] mb-10 max-w-xl mx-auto">
            Devenez partenaire d'Ibuka Sénégal ou faites un don pour soutenir nos piliers d'action.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0B0B0D] text-[#F5F5F7] font-mono text-xs tracking-widest uppercase hover:bg-[#1A1A1A] transition-colors duration-300">
            Faites un don aujourd'hui ! <ArrowRight size={16} className="ml-2" />
          </Link>
        </ScrollSection>
      </section>

    </div>
  );
}
