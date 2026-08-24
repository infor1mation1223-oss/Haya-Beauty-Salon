import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Footer from './Footer';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-[var(--color-border)]/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-[var(--color-accent)] font-heading font-bold text-lg">H</span>
              </div>
              <div className="hidden sm:block">
                <span className={`font-heading text-lg font-medium transition-colors ${
                  isScrolled || !isHomePage ? 'text-[var(--color-text)]' : 'text-white'
                }`}>
                  Haya Beauty
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isScrolled || !isHomePage
                      ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
                      : 'text-white/90 hover:text-white'
                  } ${
                    location.pathname === item.href ? 'text-[var(--color-primary)]' : ''
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href={`tel:${siteConfig.business.phone}`}
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                {siteConfig.business.phone}
              </a>
              <Link
                to="/booking"
                className="px-6 py-2.5 bg-[var(--color-primary)] text-white rounded-full text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-all hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-[var(--color-text)] hover:bg-[var(--color-surface)]'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white border-t border-[var(--color-border)]"
            >
              <div className="px-6 py-6 space-y-1">
                {siteConfig.navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`block py-3 text-base font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-[var(--color-primary)]'
                          : 'text-[var(--color-text-secondary)]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 space-y-3"
                >
                  <a
                    href={`tel:${siteConfig.business.phone}`}
                    className="flex items-center justify-center gap-2 py-3 border border-[var(--color-border)] rounded-full text-[var(--color-text-secondary)]"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <Link
                    to="/booking"
                    className="flex items-center justify-center gap-2 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border)] p-3 z-40 safe-area-inset-bottom">
        <div className="flex gap-3">
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-medium"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <Link
            to="/booking"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium"
          >
            <Calendar className="w-4 h-4" />
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}
