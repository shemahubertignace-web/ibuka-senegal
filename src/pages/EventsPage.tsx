import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const events = [
  {
    year: '31',
    title: 'Kwibuka 31',
    date: '7 Avril 2025',
    location: 'Dakar, Sénégal',
    description: 'Commémoration nationale à Dakar avec des témoignages, une veillée à la bougie et des cérémonies officielles.',
  },
  {
    year: '30',
    title: 'Kwibuka 30',
    date: '7 Avril 2024',
    location: 'Dakar, Sénégal',
    description: 'Veillée à la bougie et témoignages de survivants. 30 ans de mémoire et de résilience.',
  },
  {
    year: '28',
    title: 'Kwibuka 28',
    date: '7 Avril 2022',
    location: 'Dakar, Sénégal',
    description: 'Conférences et ateliers éducatifs sur la prévention du génocide et la promotion de la paix.',
  },
];

export default function EventsPage() {
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
    <section className="min-h-screen w-full relative overflow-hidden bg-[#141419]">
      {/* Content */}
      <div ref={contentRef} className="relative z-10 min-h-screen px-6 lg:px-[6vw] py-24">
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="animate-item font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] mb-6">
            Événements <span className="text-accent">Kwibuka</span> au Sénégal
          </h2>
          <p className="animate-item font-body text-base md:text-lg text-[#A6A6AA] max-w-xl mx-auto">
            Des commémorations annuelles pour garder vivante la mémoire des victimes.
            Kwibuka signifie "souviens-toi" en kinyarwanda.
          </p>
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="animate-item group bg-[#0B0B0D]/60 border border-white/5 p-8 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <span className="font-display text-3xl text-accent">{event.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-display text-2xl text-[#F5F5F7] mb-2 group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-[#A6A6AA] leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-[#A6A6AA]">
                      <Calendar size={14} className="text-accent" />
                      <span className="font-mono text-xs">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#A6A6AA]">
                      <MapPin size={14} className="text-accent" />
                      <span className="font-mono text-xs">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-item text-center mt-12">
          <Link
            to="/actualites"
            className="inline-flex items-center font-mono text-xs tracking-widest text-accent hover:text-[#F5F5F7] transition-colors duration-300"
          >
            Voir les actualités
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
