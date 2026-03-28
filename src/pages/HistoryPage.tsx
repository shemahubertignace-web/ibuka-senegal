import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HistoryPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0.6 },
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
          backgroundImage: 'url(/genocide-crowd.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0B0D]/55" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-[6vw] py-24">
        {/* Label */}
        <span className="animate-item font-mono text-xs tracking-[0.2em] text-accent uppercase mb-8">
          HISTOIRE
        </span>

        {/* Paragraph */}
        <p className="animate-item font-body text-sm md:text-base text-[#A6A6AA] leading-relaxed max-w-2xl mb-12">
          Au début des années 1990, le Rwanda était une société profondément divisée.
          Des leaders extrémistes ont exploité la haine et planifié l'extermination
          des Tutsi. Le 6 avril 1994, l'assassinat du président Juvénal Habyarimana
          a déclenché un génocide bien coordonné. Pendant 100 jours, près d'un million
          de Tutsi et de Hutu modérés ont été assassinés.
        </p>

        {/* Headline */}
        <h2 className="animate-item font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F5F7] leading-[0.95] max-w-4xl mb-12">
          Le génocide de 1994 contre les Tutsi
        </h2>

        {/* Additional Content */}
        <div className="animate-item grid md:grid-cols-2 gap-8 max-w-4xl mb-12">
          <div>
            <h3 className="font-display text-xl text-accent mb-3">Les conséquences</h3>
            <p className="font-body text-sm text-[#A6A6AA] leading-relaxed">
              Plus de 100 000 enfants ont été orphelins. Des femmes violées, beaucoup
              infectées par le VIH. Plus de 20 000 enfants sont nés de ces viols.
              Des familles entières ont été anéanties.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-accent mb-3">L'après-génocide</h3>
            <p className="font-body text-sm text-[#A6A6AA] leading-relaxed">
              Le génocide s'est terminé en juillet 1994 lorsque le Front Patriotique
              Rwandais (FPR) a pris Kigali. Le Rwanda a été laissé en ruines, avec
              des fosses communes et une infrastructure détruite.
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/survivants"
          className="animate-item inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
        >
          Découvrir les survivants
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
