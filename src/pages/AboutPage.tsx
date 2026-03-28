import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Users, Heart, BookOpen, ShieldCheck } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';

export default function AboutPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.05, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );

      gsap.fromTo(
        headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const memberTypes = [
    {
      icon: Users,
      title: 'Survivants du génocide',
      description: "Ce groupe comprend tous ceux qui ont été directement et personnellement touchés par le génocide contre les Tutsi — ceux qui l'ont vécu, leurs descendants, et les individus ou familles affectés par le déplacement, l'exil ou la persécution avant et pendant 1994. Ensemble, ils portent la mémoire, la perte et la résilience, veillant à ce que la vérité soit préservée et que le monde n'oublie jamais.",
    },
    {
      icon: Heart,
      title: 'Partenaires individuels',
      description: "Personnes compatissantes, qu'elles soient rwandaises ou internationales, n'ayant aucun lien avec le génocide ou des crimes contre l'humanité, qui soutiennent les survivants par le biais de la défense de leurs droits et du souvenir.",
    },
    {
      icon: BookOpen,
      title: 'Partenaires associatifs',
      description: "Nous sommes également soutenus par des institutions, des organisations à but non lucratif et des communautés religieuses partageant notre mission, qui cheminent avec nous dans ce voyage.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#0B0B0D]">
      {/* 1. Hero / Intro Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-end px-6 lg:px-[6vw] pb-24 overflow-hidden pt-32">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-[#0B0B0D]/30" />

        <div className="relative z-10 max-w-4xl" ref={headlineRef}>
          <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6 block">
            QUI SOMMES-NOUS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] leading-[1.05] mb-8">
            Soutenir les survivants, <span className="text-accent">préserver la mémoire</span> & promouvoir un monde sans génocide.
          </h1>
        </div>
      </section>

      {/* 2. Text Block: Supporting genocide survivors */}
      <section className="py-24 px-6 lg:px-[6vw] relative z-10 border-t border-white/5 bg-[#0E0E12]">
        <ScrollSection className="max-w-4xl mx-auto text-center md:text-left">
          <p className="font-body text-base md:text-lg text-[#A6A6AA] leading-relaxed">
            Ibuka Sénégal est né de la nécessité de donner une voix aux survivants au Sénégal et au-delà. De nombreux survivants ont fait face non seulement au traumatisme du génocide, mais aussi aux défis du déplacement, de l'isolement et de la reconstruction dans de nouveaux pays. Ibuka Sénégal offre une communauté et un soutien à ceux qui vivent aujourd'hui loin du Rwanda. Nous sommes déterminés à faire en sorte que l'héritage de ceux qui ont péri soit honoré par un plaidoyer continu, des programmes de soutien aux survivants et l'éducation du public.
          </p>
        </ScrollSection>
      </section>

      {/* 3. Our Mission */}
      <section className="py-24 px-6 lg:px-[6vw] relative z-10 bg-[#0B0B0D]">
        <ScrollSection className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-display text-4xl md:text-5xl text-[#F5F5F7] mb-6">Notre Mission</h2>
            <div className="w-12 h-0.5 bg-accent mb-8"></div>
            <p className="font-body text-base md:text-lg text-[#A6A6AA] leading-relaxed">
              Ibuka Sénégal est dédié au soutien des survivants du génocide de 1994 contre les Tutsi, à la préservation de la mémoire des vies perdues, et à l'éducation des générations actuelles et futures pour prévenir la récurrence de telles atrocités.
            </p>
          </div>
          <div className="flex-1 aspect-[4/3] bg-[#141419] border border-white/5 flex items-center justify-center">
             <span className="text-white/10 font-display text-4xl">Image Mission</span>
          </div>
        </ScrollSection>
      </section>

      {/* 4. Our Members */}
      <section className="py-24 px-6 lg:px-[6vw] relative z-10 bg-[#0E0E12] border-y border-white/5">
        <ScrollSection className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[#F5F5F7] mb-6">Nos Membres</h2>
            <p className="font-body text-[#A6A6AA] leading-relaxed text-lg">
              Ibuka Sénégal réunit divers membres qui partagent une mission commune de souvenir, de guérison et de justice, et nous sommes reconnaissants de vous compter parmi nous dans ce voyage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {memberTypes.map((type, i) => (
              <div key={i} className="bg-[#0B0B0D] border border-white/5 p-8 hover:border-accent/30 transition-colors">
                <type.icon size={32} className="text-accent mb-6 opacity-80" />
                <h4 className="font-display text-2xl text-[#F5F5F7] mb-4">{type.title}</h4>
                <p className="font-body text-sm text-[#A6A6AA] leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollSection>
      </section>

      {/* 5. Neutrality Commitment */}
      <section className="py-24 px-6 lg:px-[6vw] relative z-10 bg-[#0B0B0D]">
        <ScrollSection className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={48} className="text-accent opacity-50 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl text-[#F5F5F7] mb-8">Notre Engagement envers la Neutralité</h2>
          <p className="font-body text-base text-[#A6A6AA] leading-relaxed">
            Bien que notre plaidoyer comprenne le travail avec des organisations et des gouvernements, nous maintenons une stricte neutralité et une indépendance vis-à-vis des affiliations ou influences politiques. Cela garantit que nous restons dévoués à notre mission principale de préservation de la mémoire, de plaidoyer pour les survivants et la justice, et de sensibilisation au génocide.
          </p>
        </ScrollSection>
      </section>
    </div>
  );
}
