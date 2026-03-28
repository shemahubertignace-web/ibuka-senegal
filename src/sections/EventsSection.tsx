import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    year: '31',
    title: 'Kwibuka 31',
    description: 'Commémoration nationale à Dakar.',
  },
  {
    year: '30',
    title: 'Kwibuka 30',
    description: 'Veillée à la bougie et témoignages.',
  },
  {
    year: '28',
    title: 'Kwibuka 28',
    description: 'Conférences et ateliers éducatifs.',
  },
];

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Timeline line animation
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'top 35%',
            scrub: true,
          },
        }
      );

      // Events animation
      eventsRef.current.forEach((event, i) => {
        if (event) {
          const isLeft = i % 2 === 0;
          gsap.fromTo(
            event,
            { x: isLeft ? '-6vw' : '6vw', opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: event,
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
      className="relative z-[70] bg-[#141419] py-24 lg:py-32"
    >
      <div className="px-6 lg:px-[6vw]">
        {/* Title Block */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            ref={titleRef}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] mb-6"
          >
            Événements <span className="text-accent">Kwibuka</span> au Sénégal
          </h2>
          <p
            ref={subtitleRef}
            className="font-body text-base md:text-lg text-[#A6A6AA] max-w-xl mx-auto"
          >
            Des commémorations annuelles pour garder vivante la mémoire des victimes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 origin-top hidden lg:block"
          />

          {/* Events */}
          <div className="space-y-12 lg:space-y-0">
            {events.map((event, i) => (
              <div
                key={event.year}
                ref={(el) => { eventsRef.current[i] = el; }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  i !== events.length - 1 ? 'lg:pb-24' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3 lg:justify-start">
                    <Calendar size={18} className="text-accent" />
                    <span className="font-mono text-xs tracking-widest text-accent uppercase">
                      Kwibuka {event.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[#F5F5F7] mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-[#A6A6AA]">
                    {event.description}
                  </p>
                </div>

                {/* Dot (desktop only) */}
                <div
                  className={`hidden lg:block absolute left-1/2 top-0 -translate-x-1/2`}
                >
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
