import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { label: 'Accueil', path: '/' },
    { label: 'Qui sommes-nous', path: '/qui-sommes-nous' },
    { label: 'Ce que nous faisons', path: '/ce-que-nous-faisons' },
    { label: 'Histoire', path: '/histoire' },
    { label: 'Mémoire', path: '/memoire' },
    { label: 'Actualités & Événements', path: '/actualites' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0B0B0D] border-t border-white/5 pt-16 pb-8 px-6 lg:px-[6vw] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="flex-1">
          <Link to="/" className="inline-block mb-6">
            <span className="font-display text-2xl text-[#F5F5F7]">Ibuka Sénégal</span>
          </Link>
          <p className="font-body text-sm text-[#A6A6AA] max-w-sm leading-relaxed mb-6">
            Une communauté dédiée à honorer la mémoire du génocide de 1994 contre les Tutsi au Rwanda, 
            à soutenir les survivants et à plaider pour un monde sans génocide.
          </p>
          <a href="/contact" className="inline-block px-6 py-2.5 bg-[#E5E7EB] text-[#0B0B0D] font-mono text-xs tracking-widest uppercase hover:bg-[#9CA3AF] transition-colors duration-300">
            Faire un don
          </a>
        </div>
        
        <div className="flex-1 lg:max-w-xs">
          <h4 className="font-display text-lg text-[#F5F5F7] mb-6">Liens Rapides</h4>
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-body text-sm text-[#A6A6AA] hover:text-accent transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 space-y-4 md:space-y-0">
        <p className="font-mono text-[10px] tracking-widest text-[#A6A6AA] uppercase">
          © {new Date().getFullYear()} Ibuka Sénégal. Tous droits réservés.
        </p>
        <p className="font-mono text-[10px] tracking-widest text-[#A6A6AA] uppercase">
          Une organisation à but non lucratif.
        </p>
      </div>
    </footer>
  );
}
