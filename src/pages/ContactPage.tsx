import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ChevronRight, X } from 'lucide-react';

export default function ContactPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDonateDialogOpen, setIsDonateDialogOpen] = useState(false);

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
      {/* Background Image (faint) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'url(/hero-memorial.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* CTA Section */}
      <div ref={contentRef} className="relative z-10 px-6 lg:px-[6vw] py-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="animate-item font-display text-4xl sm:text-5xl md:text-6xl text-[#F5F5F7] mb-6">
            Aidez-nous à <span className="text-accent">préserver la mémoire</span> et
            à soutenir les survivants.
          </h2>

          <p className="animate-item font-body text-base md:text-lg text-[#A6A6AA] mb-10 max-w-2xl mx-auto leading-relaxed">
            Votre don permet d'organiser des commémorations, de financer des
            programmes de soutien et de développer des ressources éducatives.
          </p>

          <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* Contact Info */}
        <div className="animate-item grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-24">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-accent/30">
              <Mail size={20} className="text-accent" />
            </div>
            <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
              Email
            </h4>
            <a
              href="mailto:contact@ibukasenegal.org"
              className="font-body text-sm text-[#A6A6AA] hover:text-[#F5F5F7] transition-colors"
            >
              contact@ibukasenegal.org
            </a>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-accent/30">
              <Phone size={20} className="text-accent" />
            </div>
            <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
              Téléphone
            </h4>
            <a
              href="tel:+221338765432"
              className="font-body text-sm text-[#A6A6AA] hover:text-[#F5F5F7] transition-colors"
            >
              +221 33 876 54 32
            </a>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-accent/30">
              <MapPin size={20} className="text-accent" />
            </div>
            <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
              Adresse
            </h4>
            <p className="font-body text-sm text-[#A6A6AA]">
              Dakar, Sénégal
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-12">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
            {/* Logo */}
            <div>
              <img
                src="/logo.png"
                alt="Ibuka Sénégal"
                className="h-16 mb-4"
              />
              <p className="font-body text-sm text-[#A6A6AA] leading-relaxed">
                Mémoire, Justice et Prévention pour un monde sans génocide.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Accueil', href: '/' },
                  { label: 'Histoire', href: '/histoire' },
                  { label: 'Survivants', href: '/survivants' },
                  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
                  { label: 'Ce que nous faisons', href: '/ce-que-nous-faisons' },
                  { label: 'Événements', href: '/evenements' },
                  { label: 'Actualités', href: '/actualites' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
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
      </div>

      {/* Donate Dialog */}
      {isDonateDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0D]/90 backdrop-blur-sm">
          <div className="relative bg-[#141419] border border-white/10 max-w-md w-full p-8">
            <button
              onClick={() => setIsDonateDialogOpen(false)}
              className="absolute top-4 right-4 text-[#A6A6AA] hover:text-[#F5F5F7] transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="font-display text-2xl text-[#F5F5F7] mb-2">
              Faire un <span className="text-accent">don</span>
            </h3>
            <p className="font-body text-sm text-[#A6A6AA] mb-6">
              Votre générosité nous aide à poursuivre notre mission de mémoire et de soutien.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
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
            <p className="text-center font-body text-xs text-[#A6A6AA] mt-4">
              Les dons sont sécurisés et déductibles des impôts.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
