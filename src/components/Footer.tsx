import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Custom YouTube icon component
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text)] text-[var(--color-text-inverse)] pt-16 pb-8 lg:pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] flex items-center justify-center">
                <span className="text-[var(--color-text)] font-heading font-bold text-xl">H</span>
              </div>
              <div>
                <span className="font-heading text-xl font-medium">Haya Beauty Salon</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your premium beauty destination in Baldia Town Karachi. Where beauty meets confidence.
            </p>
            <a
              href={siteConfig.business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              <YoutubeIcon className="w-5 h-5" />
              <span className="text-sm">Visit Our YouTube</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-[var(--color-accent)] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-[var(--color-accent)] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="flex items-start gap-3 text-white/70 hover:text-[var(--color-accent)] transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.business.phoneFormatted}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  {siteConfig.business.address.street}, {siteConfig.business.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{siteConfig.business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="py-10 text-center border-b border-white/10">
          <p className="text-white/80 mb-6">Ready to feel your best?</p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text)] rounded-full font-medium hover:bg-[var(--color-accent-light)] transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Appointment Today
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Haya Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
