import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Shield, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MemoryPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.05, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );

      const items = contentRef.current?.querySelectorAll('.animate-item');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/candle-vigil.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0B0D]/55" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-[6vw] py-24">
        {/* Label */}
        <span className="animate-item font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6">
          MÉMOIRE ET SOUTIEN
        </span>

        {/* Headline */}
        <h2 className="animate-item font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] leading-[1.05] mb-8 max-w-4xl">
          Un espace sûr et un{' '}
          <span className="text-accent">soutien communautaire</span> pour les
          survivants.
        </h2>

        {/* Paragraph */}
        <p className="animate-item font-body text-sm md:text-base text-[#A6A6AA] leading-relaxed mb-12 max-w-2xl">
          Nous facilitons la recherche et collaborons avec des universités et des
          médias pour créer des ressources éducatives qui favorisent la
          sensibilisation. En partageant les témoignages des survivants, nous nous
          efforçons de prévenir les futurs génocides et de garantir que les horreurs
          du passé ne soient ni oubliées ni répétées.
        </p>

        {/* Features */}
        <div className="animate-item grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#141419]/60 border border-white/5 p-6">
            <Shield size={28} className="text-accent mb-4" />
            <h4 className="font-display text-lg text-[#F5F5F7] mb-2">
              Espace sûr
            </h4>
            <p className="font-body text-sm text-[#A6A6AA] leading-relaxed">
              Un environnement sécurisé où les survivants peuvent partager leurs
              expériences et trouver du réconfort.
            </p>
          </div>
          <div className="bg-[#141419]/60 border border-white/5 p-6">
            <BookOpen size={28} className="text-accent mb-4" />
            <h4 className="font-display text-lg text-[#F5F5F7] mb-2">
              Ressources éducatives
            </h4>
            <p className="font-body text-sm text-[#A6A6AA] leading-relaxed">
              Des films, documents et matériels pédagogiques pour sensibiliser et
              éduquer.
            </p>
          </div>
          <div className="bg-[#141419]/60 border border-white/5 p-6">
            <Users size={28} className="text-accent mb-4" />
            <h4 className="font-display text-lg text-[#F5F5F7] mb-2">
              Communauté
            </h4>
            <p className="font-body text-sm text-[#A6A6AA] leading-relaxed">
              Un réseau de survivants qui peuvent se soutenir mutuellement.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-item grid grid-cols-3 gap-8 mb-12 max-w-2xl">
          <div className="text-center">
            <p className="font-display text-4xl text-accent mb-2">31</p>
            <p className="font-mono text-xs text-[#A6A6AA] uppercase tracking-wider">
              Années de mémoire
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-accent mb-2">1000+</p>
            <p className="font-mono text-xs text-[#A6A6AA] uppercase tracking-wider">
              Survivants soutenus
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl text-accent mb-2">50+</p>
            <p className="font-mono text-xs text-[#A6A6AA] uppercase tracking-wider">
              Événements annuels
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/evenements"
          className="animate-item inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
        >
          Voir nos événements
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
