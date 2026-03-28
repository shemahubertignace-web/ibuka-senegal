import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollSection from '../components/ScrollSection';

export default function HomePage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microLineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        0
      );

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(
          words,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          0.3
        );
      }

      tl.fromTo(
        subheadlineRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.5
      );

      tl.fromTo(
        ctaRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.7
      );

      tl.fromTo(
        microLineRef.current,
        { opacity: 0 },
        { opacity: 0.7, duration: 0.6 },
        0.9
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#0B0B0D]">
      {/* 1. Hero Section */}
      <section className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/1fire.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/35 to-[#0B0B0D]/75" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full">
          {/* Label / Small Intro text (Ibuka USA style) */}
          <p className="font-mono text-xs tracking-[0.2em] text-[#A6A6AA] uppercase mb-4">
            Bienvenue à
          </p>

          <p className="font-body text-base max-w-xl text-[#F5F5F7] mb-8 leading-relaxed">
            Une communauté de survivants résidant au Sénégal, dédiée à honorer la mémoire du Génocide de 1994 contre les Tutsi au Rwanda, à soutenir les survivants et à plaider pour un monde sans génocide.
          </p>

          <a href="#" className="inline-block border border-accent text-accent font-mono text-xs px-6 py-2 tracking-widest uppercase mb-12 hover:bg-accent hover:text-[#0B0B0D] transition-colors duration-300">
            Héberger kwibuka 32
          </a>

          {/* Core Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F7] mb-6 max-w-[85vw]"
          >
            <span className="word inline-block">Mémoire.</span>{' '}
            <span className="word inline-block">Justice.</span>{' '}
            <span className="word inline-block text-accent">Prévention.</span>
          </h1>

          <p
            ref={subheadlineRef}
            className="font-body text-base sm:text-lg md:text-xl text-[#A6A6AA] max-w-2xl mb-10 leading-relaxed"
          >
            Ibuka Sénégal perpétue la mémoire.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-[#E5E7EB] text-[#0B0B0D] font-mono text-xs tracking-widest uppercase hover:bg-[#9CA3AF] transition-colors duration-300"
            >
              Faire un don
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Quote Section */}
      <section className="py-24 px-6 lg:px-[6vw] bg-[#0E0E12] flex items-center justify-center border-y border-white/5 relative z-10">
        <ScrollSection className="max-w-4xl text-center">
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-[#F5F5F7] mb-8 italic">
            "Le génocide perpétré contre les Tutsi au Rwanda compte parmi les chapitres les plus sombres de l'histoire humaine récente. Nous devons rester toujours vigilants et faire en sorte que de telles atrocités ne se reproduisent plus jamais."
          </p>
          <p className="font-mono text-xs tracking-widest text-[#A6A6AA] uppercase mb-4">
            — António Guterres, Secrétaire général des Nations Unies
          </p>
          <a href="#" className="inline-flex items-center text-accent font-mono text-xs tracking-widest uppercase hover:text-[#F5F5F7] transition-colors duration-300">
            En lire plus sur l'ONU <ArrowRight size={16} className="ml-2" />
          </a>
        </ScrollSection>
      </section>

      {/* 3. Genocide Brief block */}
      <section className="py-24 px-6 lg:px-[12vw] relative z-10">
        <ScrollSection className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#A6A6AA] uppercase mb-4 block">
              LES ATROCITÉS LES PLUS HORRIBLES DU 20E SIÈCLE –
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F5F5F7] leading-tight mb-8">
              Le Génocide de 1994 <br/><span className="text-accent">contre les Tutsi.</span>
            </h2>
            <p className="font-body text-base text-[#A6A6AA] leading-relaxed mb-8">
              En l'espace de 100 jours seulement, plus d'un million d'hommes, de femmes et d'enfants Tutsi, ont été impitoyablement traqués et massacrés. Ce génocide a fait suite à des décennies d'oppression, culminant dans une campagne systématique et brutale qui a déchiré les familles et les communautés. Son impact dévastateur continue de hanter les survivants.
            </p>
            <Link to="/histoire" className="inline-flex items-center text-[#F5F5F7] font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors duration-300">
              En savoir plus <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="aspect-square bg-[#141419] border border-white/5 flex items-center justify-center overflow-hidden">
             {/* Replace with actual image later */}
             <span className="text-white/10 font-display text-4xl">Image de mémoire</span>
          </div>
        </ScrollSection>
      </section>

      {/* 4. Consequences block */}
      <section className="py-24 px-6 lg:px-[12vw] bg-[#0E0E12] border-t border-white/5 relative z-10">
        <ScrollSection className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 aspect-square bg-[#141419] border border-white/5 flex items-center justify-center overflow-hidden">
             <span className="text-white/10 font-display text-4xl">Image conséquences</span>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#A6A6AA] uppercase mb-4 block">
              CONSÉQUENCES DU GÉNOCIDE –
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#F5F5F7] leading-tight mb-8">
              Il a laissé les survivants avec une <span className="text-accent">perte dévastatrice</span>, un traumatisme inimaginable et des cicatrices émotionnelles à vie.
            </h2>
            <p className="font-body text-base text-[#A6A6AA] leading-relaxed mb-8">
              De nombreux enfants sont devenus orphelins, des familles entières ont été anéanties, laissant les survivants aux prises avec une perte profonde, un trouble de stress post-traumatique et un traumatisme accablant qui perdure encore aujourd'hui.
            </p>
            <Link to="/survivants" className="inline-flex items-center text-[#F5F5F7] font-mono text-xs tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors duration-300">
              En savoir plus <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </ScrollSection>
      </section>

      {/* 5. About Ibuka block */}
      <section className="py-24 px-6 lg:px-[12vw] border-t border-white/5 relative z-10">
        <ScrollSection className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#A6A6AA] uppercase mb-4 block">
            IBUKA SÉNÉGAL EST UNE ORGANISATION À BUT NON LUCRATIF –
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#F5F5F7] leading-tight mb-8">
            Ibuka, signifiant <span className="text-accent">"Souviens-toi"</span>, est née de la nécessité d'honorer la mémoire des victimes.
          </h2>
          <p className="font-body text-base text-[#A6A6AA] leading-relaxed mb-10 max-w-2xl">
            Ibuka Sénégal est une communauté dirigée par des survivants, déterminée à préserver la mémoire, à soutenir les survivants et à plaider pour la justice et l'éducation. Nous sommes indépendants de tout gouvernement ou parti politique.
          </p>
          <Link to="/qui-sommes-nous" className="inline-flex items-center px-8 py-3 bg-[#F5F5F7] text-[#0B0B0D] font-mono text-xs tracking-widest uppercase hover:bg-white transition-colors duration-300">
            Qui sommes-nous <ArrowRight size={16} className="ml-2" />
          </Link>
        </ScrollSection>
      </section>

      {/* 6. Recent Activities block */}
      <section className="py-24 px-6 lg:px-[6vw] bg-[#0E0E12] border-t border-white/5 relative z-10">
        <ScrollSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl text-[#F5F5F7] mb-4">Activités récentes</h2>
              <p className="font-body text-[#A6A6AA]">Activités mises en évidence et efforts continus par Ibuka et ses partenaires.</p>
            </div>
            <Link to="/actualites" className="inline-flex items-center font-mono text-xs tracking-widest text-accent uppercase hover:text-white transition-colors">
              Tous les articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Blog Post Card 1 */}
             <div className="group cursor-pointer">
               <div className="aspect-[4/3] bg-[#141419] mb-6 border border-white/5 overflow-hidden">
                 {/* Image placeholder */}
               </div>
               <span className="font-mono text-[10px] text-accent tracking-widest uppercase block mb-3">14 Juin 2025</span>
               <h3 className="font-display text-xl text-[#F5F5F7] leading-snug group-hover:text-accent transition-colors mb-4 line-clamp-3">
                 Ibuka Sénégal réagit à l'arrestation de suspects impliqués dans le génocide
               </h3>
               <Link to="/actualites" className="font-mono text-xs text-[#A6A6AA] uppercase group-hover:text-white transition-colors">Lire la suite →</Link>
             </div>

             {/* Blog Post Card 2 */}
             <div className="group cursor-pointer">
               <div className="aspect-[4/3] bg-[#141419] mb-6 border border-white/5 overflow-hidden">
                 {/* Image placeholder */}
               </div>
               <span className="font-mono text-[10px] text-accent tracking-widest uppercase block mb-3">5 Avril 2025</span>
               <h3 className="font-display text-xl text-[#F5F5F7] leading-snug group-hover:text-accent transition-colors mb-4 line-clamp-3">
                 Pour la première fois, de nombreux événements Kwibuka 31 commémorent le génocide
               </h3>
               <Link to="/actualites" className="font-mono text-xs text-[#A6A6AA] uppercase group-hover:text-white transition-colors">Lire la suite →</Link>
             </div>

             {/* Blog Post Card 3 */}
             <div className="group cursor-pointer">
               <div className="aspect-[4/3] bg-[#141419] mb-6 border border-white/5 overflow-hidden">
                 {/* Image placeholder */}
               </div>
               <span className="font-mono text-[10px] text-accent tracking-widest uppercase block mb-3">25 Mars 2025</span>
               <h3 className="font-display text-xl text-[#F5F5F7] leading-snug group-hover:text-accent transition-colors mb-4 line-clamp-3">
                 Déclaration d'Ibuka sur la justice internationale
               </h3>
               <Link to="/actualites" className="font-mono text-xs text-[#A6A6AA] uppercase group-hover:text-white transition-colors">Lire la suite →</Link>
             </div>
          </div>
        </ScrollSection>
      </section>

      {/* 7. CTA block */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-accent flex flex-col items-center text-center">
        <ScrollSection className="max-w-2xl px-6">
          <h2 className="font-display text-3xl md:text-5xl text-[#0B0B0D] mb-6 leading-tight">
            Rejoignez-nous pour soutenir la mission d'Ibuka Sénégal
          </h2>
          <p className="font-body text-[#1A1A1A] mb-10 max-w-xl mx-auto">
            Faites un don aujourd'hui pour aider les survivants et bâtir un monde libéré de la violence.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0B0B0D] text-[#F5F5F7] font-mono text-xs tracking-widest uppercase hover:bg-[#1A1A1A] transition-colors duration-300">
            Faites un don aujourd'hui ! <ArrowRight size={16} className="ml-2" />
          </Link>
        </ScrollSection>
      </section>
    </div>
  );
}
