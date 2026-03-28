import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const survivorImages = [
  '/survivor-1.jpg',
  '/survivor-2.jpg',
  '/survivor-3.jpg',
  '/survivor-4.jpg',
];

export default function SurvivorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Background animation
      scrollTl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0.7 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );
      scrollTl.to(
        bgRef.current,
        { scale: 1.04, opacity: 0.35, ease: 'power2.in' },
        0.7
      );

      // Collage container entrance
      scrollTl.fromTo(
        collageRef.current,
        { x: '-12vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );
      scrollTl.to(
        collageRef.current,
        { x: '-6vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Tiles stagger entrance
      tilesRef.current.forEach((tile, i) => {
        if (tile) {
          scrollTl.fromTo(
            tile,
            { scale: 0.96, opacity: 0 },
            { scale: 1, opacity: 1, ease: 'power2.out' },
            0.05 + i * 0.03
          );
          scrollTl.to(
            tile,
            { scale: 0.98, opacity: 0, ease: 'power2.in' },
            0.72
          );
        }
      });

      // Headline entrance
      scrollTl.fromTo(
        headlineRef.current,
        { x: '12vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );
      scrollTl.to(
        headlineRef.current,
        { x: '8vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      // Body entrance
      scrollTl.fromTo(
        bodyRef.current,
        { y: '8vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.15
      );
      scrollTl.to(
        bodyRef.current,
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.74
      );

      // CTA entrance
      scrollTl.fromTo(
        ctaRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.2
      );
      scrollTl.to(
        ctaRef.current,
        { opacity: 0, ease: 'power2.in' },
        0.76
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned z-30"
    >
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
      <div className="absolute inset-0 bg-[#0B0B0D]/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-[6vw]">
        {/* Left Collage */}
        <div
          ref={collageRef}
          className="hidden lg:grid grid-cols-2 gap-3 w-[34vw] h-[64vh] absolute left-[6vw] top-[18vh]"
        >
          {survivorImages.map((src, i) => (
            <div
              key={i}
              ref={(el) => { tilesRef.current[i] = el; }}
              className="relative overflow-hidden border border-white/5"
              style={{
                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src={src}
                alt={`Survivor portrait ${i + 1}`}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="lg:ml-auto w-full lg:w-[48vw] lg:pr-[6vw]">
          <h2
            ref={headlineRef}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] leading-[1.05] mb-8"
          >
            Il a laissé des survivants avec une{' '}
            <span className="text-accent">perte dévastatrice</span>, un traumatisme
            inimaginable et des cicatrices émotionnelles à vie.
          </h2>

          <p
            ref={bodyRef}
            className="font-body text-sm md:text-base text-[#A6A6AA] leading-relaxed mb-8 max-w-xl"
          >
            Plus de 100 000 enfants ont été orphelins. Des femmes violées, beaucoup
            infectées par le VIH. Plus de 20 000 enfants sont nés de ces viols. Des
            familles entières ont été anéanties.
          </p>

          <a
            ref={ctaRef}
            href="#qui-sommes-nous"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#qui-sommes-nous')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
          >
            En savoir plus
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
