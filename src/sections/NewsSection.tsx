import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    image: '/news-1.jpg',
    title: 'Communiqué de presse',
    excerpt:
      'Ibuka Sénégal réagit à l\'arrestation d\'un suspect du génocide.',
  },
  {
    image: '/news-2.jpg',
    title: 'Rapport annuel',
    excerpt:
      'Bilan des activités et perspectives pour l\'année à venir.',
  },
  {
    image: '/news-3.jpg',
    title: 'Témoignage',
    excerpt:
      'Une survivante partage son parcours de guérison.',
  },
];

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Cards animation
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                end: 'top 55%',
                scrub: true,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[80] bg-[#0B0B0D] py-24 lg:py-32"
    >
      <div className="px-6 lg:px-[6vw]">
        {/* Title */}
        <h2
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] mb-12 lg:mb-16 text-center"
        >
          Actualités et <span className="text-accent">déclarations</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group border border-white/5 hover:border-accent/30 transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
              }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl md:text-2xl text-[#F5F5F7] mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[#A6A6AA] mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
                >
                  Lire plus
                  <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
