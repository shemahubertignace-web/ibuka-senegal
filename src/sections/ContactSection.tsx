import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isDonateDialogOpen, setIsDonateDialogOpen] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(
        headlineRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Subheadline animation
      gsap.fromTo(
        subheadlineRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subheadlineRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Footer animation
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            end: 'top 70%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-[90] bg-[#0B0B0D]"
    >
      {/* Background Image (faint) */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'url(/hero-memorial.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* CTA Section */}
      <div className="relative z-10 py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            ref={headlineRef}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] mb-6"
          >
            Aidez-nous à <span className="text-accent">préserver la mémoire</span> et
            à soutenir les survivants.
          </h2>

          <p
            ref={subheadlineRef}
            className="font-body text-base md:text-lg text-[#A6A6AA] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Votre don permet d'organiser des commémorations, de financer des
            programmes de soutien et de développer des ressources éducatives.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsDonateDialogOpen(true)}
              className="inline-flex items-center px-8 py-3.5 bg-[#E5E7EB] text-[#0B0B0D] font-mono text-xs tracking-widest uppercase hover:bg-[#9CA3AF] transition-colors duration-300"
            >
              Faire un don
              <ChevronRight size={16} className="ml-2" />
            </button>
            <a
              href="mailto:contact@ibukasenegal.org"
              className="inline-flex items-center text-[#F5F5F7] font-mono text-xs tracking-widest uppercase hover:text-accent transition-colors duration-300"
            >
              Nous contacter
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="relative z-10 border-t border-white/5 py-16 px-6 lg:px-[6vw]"
      >
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@ibukasenegal.org"
                  className="flex items-center gap-3 text-[#A6A6AA] hover:text-[#F5F5F7] transition-colors duration-300"
                >
                  <Mail size={16} />
                  <span className="font-body text-sm">contact@ibukasenegal.org</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+221338765432"
                  className="flex items-center gap-3 text-[#A6A6AA] hover:text-[#F5F5F7] transition-colors duration-300"
                >
                  <Phone size={16} />
                  <span className="font-body text-sm">+221 33 876 54 32</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#A6A6AA]">
                  <MapPin size={16} className="mt-0.5" />
                  <span className="font-body text-sm">
                    Dakar, Sénégal
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
              Liens
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Qui sommes-nous', href: '#qui-sommes-nous' },
                { label: 'Ce que nous faisons', href: '#ce-que-nous-faisons' },
                { label: 'Histoire', href: '#histoire' },
                { label: 'Ressources', href: '#ressources' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-sm text-[#A6A6AA] hover:text-[#F5F5F7] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-[#A6A6AA] hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-[#A6A6AA] hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-[#A6A6AA] hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Line */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="font-mono text-xs tracking-widest text-[#A6A6AA]">
            © Ibuka Sénégal — Mémoire · Justice · Prévention
          </p>
        </div>
      </footer>

      {/* Donate Dialog */}
      <Dialog open={isDonateDialogOpen} onOpenChange={setIsDonateDialogOpen}>
        <DialogContent className="bg-[#141419] border-white/10 text-[#F5F5F7] max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-[#F5F5F7]">
              Faire un <span className="text-accent">don</span>
            </DialogTitle>
            <DialogDescription className="font-body text-[#A6A6AA]">
              Votre générosité nous aide à poursuivre notre mission de mémoire et de soutien.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-3 gap-3">
              {['25 000', '50 000', '100 000'].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setIsDonateDialogOpen(false)}
                  className="py-3 px-4 border border-white/10 text-[#F5F5F7] font-mono text-sm hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {amount} FCFA
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsDonateDialogOpen(false)}
              className="w-full py-3.5 bg-[#E5E7EB] text-[#0B0B0D] font-mono text-xs tracking-widest uppercase hover:bg-[#9CA3AF] transition-colors duration-300"
            >
              Autre montant
            </button>
            <p className="text-center font-body text-xs text-[#A6A6AA]">
              Les dons sont sécurisés et déductibles des impôts.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
