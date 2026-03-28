import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HistorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
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
        { scale: 1.1, opacity: 0.6 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );
      scrollTl.to(
        bgRef.current,
        { scale: 1.05, opacity: 0.3, ease: 'power2.in' },
        0.7
      );

      // Label entrance (0-30%)
      scrollTl.fromTo(
        labelRef.current,
        { x: '-6vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );
      scrollTl.to(
        labelRef.current,
        { x: '-4vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Paragraph entrance
      scrollTl.fromTo(
        paragraphRef.current,
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.05
      );
      scrollTl.to(
        paragraphRef.current,
        { x: '6vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Headline entrance
      scrollTl.fromTo(
        headlineRef.current,
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );
      scrollTl.to(
        headlineRef.current,
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      // CTA entrance
      scrollTl.fromTo(
        ctaRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.15
      );
      scrollTl.to(
        ctaRef.current,
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="histoire"
      className="section-pinned z-20"
    >
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
      <div className="relative z-10 h-full px-6 lg:px-[6vw]">
        {/* Label */}
        <span
          ref={labelRef}
          className="absolute top-[10vh] left-6 lg:left-[6vw] font-mono text-xs tracking-[0.2em] text-accent uppercase"
        >
          HISTOIRE
        </span>

        {/* Top Right Paragraph */}
        <p
          ref={paragraphRef}
          className="absolute top-[10vh] right-6 lg:right-[6vw] w-full max-w-[38vw] hidden lg:block font-body text-sm text-[#A6A6AA] leading-relaxed"
        >
          Au début des années 1990, le Rwanda était une société profondément divisée.
          Des leaders extrémistes ont exploité la haine et planifié l'extermination
          des Tutsi.
        </p>

        {/* Bottom Left Headline */}
        <h2
          ref={headlineRef}
          className="absolute bottom-[18vh] left-6 lg:left-[6vw] max-w-[62vw] font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F5F7] leading-[0.95]"
        >
          Le génocide de 1994 contre les Tutsi
        </h2>

        {/* Bottom Right CTA */}
        <a
          ref={ctaRef}
          href="#qui-sommes-nous"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#qui-sommes-nous')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-[10vh] right-6 lg:right-[6vw] inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
        >
          Lire la suite
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </section>
  );
}
