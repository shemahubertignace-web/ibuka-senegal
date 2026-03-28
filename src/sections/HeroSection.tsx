import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microLineRef = useRef<HTMLParagraphElement>(null);

  // Entrance animation (on page load)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background entrance
      tl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        0
      );

      // Headline entrance (split by words)
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          0.3
        );
      }

      // Subheadline entrance
      tl.fromTo(
        subheadlineRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.6
      );

      // CTAs entrance
      tl.fromTo(
        ctaRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.8
      );

      // Micro line entrance
      tl.fromTo(
        microLineRef.current,
        { opacity: 0 },
        { opacity: 0.7, duration: 0.6 },
        1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
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
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set(bgRef.current, { scale: 1, y: 0, opacity: 1 });
            gsap.set(headlineRef.current, { y: 0, opacity: 1 });
            gsap.set(subheadlineRef.current, { y: 0, opacity: 1 });
            gsap.set(ctaRef.current, { y: 0, opacity: 1 });
            gsap.set(microLineRef.current, { opacity: 0.7 });
          },
        },
      });

      // Background exit (70-100%)
      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, y: 0, opacity: 1 },
        { scale: 1.06, y: '-6vh', opacity: 0.25, ease: 'power2.in' },
        0.7
      );

      // Headline exit
      scrollTl.fromTo(
        headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Subheadline exit
      scrollTl.fromTo(
        subheadlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-12vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      // CTAs exit
      scrollTl.fromTo(
        ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '-12vh', opacity: 0, ease: 'power2.in' },
        0.74
      );

      // Micro line exit
      scrollTl.fromTo(
        microLineRef.current,
        { opacity: 0.7 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="section-pinned z-10"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/hero-memorial.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F7] mb-6 max-w-[85vw]"
        >
          <span className="word inline-block">Mémoire.</span>{' '}
          <span className="word inline-block">Justice.</span>{' '}
          <span className="word inline-block text-accent">Prévention.</span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="font-body text-base sm:text-lg md:text-xl text-[#A6A6AA] max-w-2xl mb-10 leading-relaxed"
        >
          Ibuka Sénégal perpétue la mémoire du génocide, soutient les survivants
          et éduque pour que cela ne se reproduise jamais.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center px-8 py-3.5 bg-[#E5E7EB] text-[#0B0B0D] font-mono text-xs tracking-widest uppercase hover:bg-[#9CA3AF] transition-colors duration-300"
          >
            Faire un don
            <ChevronRight size={16} className="ml-2" />
          </button>
          <button
            onClick={() => scrollToSection('#histoire')}
            className="inline-flex items-center text-[#F5F5F7] font-mono text-xs tracking-widest uppercase hover:text-accent transition-colors duration-300"
          >
            En savoir plus
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        {/* Micro Line */}
        <p
          ref={microLineRef}
          className="absolute bottom-[12vh] font-mono text-xs tracking-[0.2em] text-[#A6A6AA] uppercase"
        >
          Commémoration · Soutien · Éducation
        </p>
      </div>
    </section>
  );
}
