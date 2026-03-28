import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'ACCUEIL', href: '/' },
  { label: 'HISTOIRE', href: '/histoire' },
  { label: 'SURVIVANTS', href: '/survivants' },
  { label: 'QUI SOMMES-NOUS', href: '/qui-sommes-nous' },
  { label: 'CE QUE NOUS FAISONS', href: '/ce-que-nous-faisons' },
  { label: 'ÉVÉNEMENTS', href: '/evenements' },
  { label: 'ACTUALITÉS', href: '/actualites' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' }
      );
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Ibuka Sénégal"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-[#A6A6AA] hover:text-[#F5F5F7]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 border border-[#E5E7EB] text-[#E5E7EB] font-mono text-[11px] tracking-widest uppercase hover:bg-[#E5E7EB] hover:text-[#0B0B0D] transition-all duration-300"
            >
              FAIRE UN DON
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F5F7]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#0B0B0D]/98 backdrop-blur-md border-b border-white/5 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block font-mono text-sm tracking-widest transition-colors duration-300 ${
                location.pathname === item.href
                  ? 'text-accent'
                  : 'text-[#A6A6AA] hover:text-[#F5F5F7]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 border border-[#E5E7EB] text-[#E5E7EB] font-mono text-xs tracking-widest uppercase hover:bg-[#E5E7EB] hover:text-[#0B0B0D] transition-all duration-300 mt-4"
          >
            FAIRE UN DON
          </Link>
        </div>
      </div>
    </nav>
  );
}
