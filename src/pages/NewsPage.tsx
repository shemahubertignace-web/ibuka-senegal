import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    image: '/news-1.jpg',
    title: 'Communiqué de presse',
    excerpt:
      'Ibuka Sénégal réagit à l\'arrestation d\'un suspect du génocide.',
    date: '14 Juin 2025',
  },
  {
    image: '/news-2.jpg',
    title: 'Rapport annuel',
    excerpt:
      'Bilan des activités et perspectives pour l\'année à venir.',
    date: '5 Avril 2025',
  },
  {
    image: '/news-3.jpg',
    title: 'Témoignage',
    excerpt:
      'Une survivante partage son parcours de guérison.',
    date: '25 Mars 2025',
  },
];

export default function NewsPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll('.animate-item');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-[#0B0B0D]">
      {/* Content */}
      <div ref={contentRef} className="relative z-10 min-h-screen px-6 lg:px-[6vw] py-24">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="animate-item font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] mb-6">
            Actualités et <span className="text-accent">déclarations</span>
          </h2>
          <p className="animate-item font-body text-base text-[#A6A6AA] max-w-xl mx-auto">
            Les dernières nouvelles, communiqués de presse et témoignages d'Ibuka Sénégal.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="animate-item group border border-white/5 hover:border-accent/30 transition-all duration-300 overflow-hidden"
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
                <p className="font-mono text-xs text-accent mb-2">{item.date}</p>
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

        {/* CTA */}
        <div className="animate-item text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#E5E7EB] text-[#0B0B0D] font-mono text-xs tracking-widest uppercase hover:bg-[#9CA3AF] transition-colors duration-300"
          >
            Soutenir notre mission
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
