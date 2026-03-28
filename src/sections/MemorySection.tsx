import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function MemorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
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

      // Background animation (softer)
      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.03, opacity: 0.4, ease: 'power2.in' },
        0.7
      );

      // Image card entrance (from right, softer)
      scrollTl.fromTo(
        imageCardRef.current,
        { x: '10vw', opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      );
      scrollTl.to(
        imageCardRef.current,
        { x: '6vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Label entrance (from left, softer)
      scrollTl.fromTo(
        labelRef.current,
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.05
      );
      scrollTl.to(
        labelRef.current,
        { x: '-4vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      // Headline entrance
      scrollTl.fromTo(
        headlineRef.current,
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );
      scrollTl.to(
        headlineRef.current,
        { x: '-4vw', opacity: 0, ease: 'power2.in' },
        0.74
      );

      // Paragraph entrance
      scrollTl.fromTo(
        paragraphRef.current,
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.15
      );
      scrollTl.to(
        paragraphRef.current,
        { x: '-4vw', opacity: 0, ease: 'power2.in' },
        0.76
      );

      // CTA entrance
      scrollTl.fromTo(
        ctaRef.current,
        { x: '-8vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.2
      );
      scrollTl.to(
        ctaRef.current,
        { opacity: 0, ease: 'power2.in' },
        0.78
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ressources"
      className="section-pinned z-[60]"
    >
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
      <div className="absolute inset-0 bg-[#0B0B0D]/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-[6vw]">
        {/* Left Content */}
        <div className="w-full lg:w-[46vw]">
          <span
            ref={labelRef}
            className="block font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6"
          >
            MÉMOIRE
          </span>

          <h2
            ref={headlineRef}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F5F5F7] leading-[1.05] mb-8"
          >
            Un espace sûr et un{' '}
            <span className="text-accent">soutien communautaire</span> pour les
            survivants.
          </h2>

          <p
            ref={paragraphRef}
            className="font-body text-sm md:text-base text-[#A6A6AA] leading-relaxed mb-8 max-w-lg"
          >
            Nous facilitons la recherche et collaborons avec des universités et des
            médias pour créer des ressources éducatives qui favorisent la
            sensibilisation.
          </p>

          <a
            ref={ctaRef}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
          >
            Soutenir les survivants
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        {/* Right Image Card */}
        <div
          ref={imageCardRef}
          className="hidden lg:block absolute right-[6vw] top-[18vh] w-[40vw] h-[64vh] border border-white/5 overflow-hidden"
          style={{
            boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
          }}
        >
          <img
            src="/candle-vigil.jpg"
            alt="Candle vigil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
