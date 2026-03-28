import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAreSection() {
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

      // Background animation
      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.05, opacity: 0.35, ease: 'power2.in' },
        0.7
      );

      // Image card entrance
      scrollTl.fromTo(
        imageCardRef.current,
        { x: '-18vw', opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      );
      scrollTl.to(
        imageCardRef.current,
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Label entrance
      scrollTl.fromTo(
        labelRef.current,
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.05
      );
      scrollTl.to(
        labelRef.current,
        { x: '6vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      // Headline entrance
      scrollTl.fromTo(
        headlineRef.current,
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );
      scrollTl.to(
        headlineRef.current,
        { x: '6vw', opacity: 0, ease: 'power2.in' },
        0.74
      );

      // Paragraph entrance
      scrollTl.fromTo(
        paragraphRef.current,
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.15
      );
      scrollTl.to(
        paragraphRef.current,
        { x: '6vw', opacity: 0, ease: 'power2.in' },
        0.76
      );

      // CTA entrance
      scrollTl.fromTo(
        ctaRef.current,
        { x: '10vw', opacity: 0 },
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
      id="qui-sommes-nous"
      className="section-pinned z-40"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/community-photos.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B0B0D]/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-[6vw]">
        {/* Left Image Card */}
        <div
          ref={imageCardRef}
          className="hidden lg:block absolute left-[6vw] top-[18vh] w-[40vw] h-[64vh] border border-white/5 overflow-hidden"
          style={{
            boxShadow: '0 18px 60px rgba(0,0,0,0.45)',
          }}
        >
          <img
            src="/community-photos.jpg"
            alt="Community photos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="lg:ml-auto w-full lg:w-[40vw] lg:pr-[6vw]">
          <span
            ref={labelRef}
            className="block font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6"
          >
            QUI SOMMES-NOUS
          </span>

          <h2
            ref={headlineRef}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F5F5F7] leading-[1.05] mb-8"
          >
            Soutenir les survivants,{' '}
            <span className="text-accent">préserver la mémoire</span> et promouvoir
            un monde sans génocide.
          </h2>

          <p
            ref={paragraphRef}
            className="font-body text-sm md:text-base text-[#A6A6AA] leading-relaxed mb-8"
          >
            Ibuka Sénégal est né de la nécessité de donner une voix aux survivants.
            Nous offrons une communauté, des programmes de soutien et une éducation
            pour prévenir les atrocités.
          </p>

          <a
            ref={ctaRef}
            href="#ce-que-nous-faisons"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#ce-que-nous-faisons')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
          >
            Découvrir notre mission
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
