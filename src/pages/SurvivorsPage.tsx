import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const survivorImages = [
  { src: '/survivor-1.jpg', name: 'Marie', story: 'Orpheline de 12 ans en 1994' },
  { src: '/survivor-2.jpg', name: 'Jean', story: 'A perdu toute sa famille' },
  { src: '/survivor-3.jpg', name: 'Agnès', story: 'Survivante et mère de 4 enfants' },
  { src: '/survivor-4.jpg', name: 'Paul', story: 'Né après le génocide' },
];

export default function SurvivorsPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0.7 },
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
          backgroundImage: 'url(/survivor-portrait.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0B0D]/60" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-[6vw] py-24">
        {/* Headline */}
        <h2 className="animate-item font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] leading-[1.05] mb-8 max-w-4xl">
          Il a laissé des survivants avec une{' '}
          <span className="text-accent">perte dévastatrice</span>, un traumatisme
          inimaginable et des cicatrices émotionnelles à vie.
        </h2>

        {/* Body */}
        <p className="animate-item font-body text-sm md:text-base text-[#A6A6AA] leading-relaxed mb-12 max-w-2xl">
          Plus de 100 000 enfants ont été orphelins. Des femmes violées, beaucoup
          infectées par le VIH. Plus de 20 000 enfants sont nés de ces viols. Des
          familles entières ont été anéanties. Les survivants portent des cicatrices
          visibles et invisibles — les blessures physiques infligées pendant le
          génocide et le traumatisme psychologique profond.
        </p>

        {/* Survivor Grid */}
        <div className="animate-item grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {survivorImages.map((survivor, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border border-white/5"
              style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.3)' }}
            >
              <img
                src={survivor.src}
                alt={survivor.name}
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-lg text-[#F5F5F7]">{survivor.name}</p>
                  <p className="font-body text-xs text-[#A6A6AA]">{survivor.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/qui-sommes-nous"
          className="animate-item inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
        >
          Découvrir notre mission
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
