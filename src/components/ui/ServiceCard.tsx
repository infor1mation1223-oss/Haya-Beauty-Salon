import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import type { Service } from '../../config/siteConfig';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Scissors: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  Sparkles: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  ),
  Palette: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="2" fill="currentColor" />
      <circle cx="8" cy="14" r="2" fill="currentColor" />
      <circle cx="16" cy="14" r="2" fill="currentColor" />
    </svg>
  ),
  Droplets: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 14.31c1.47 0 2.67-1.22 2.67-2.7 0-.78-.38-1.51-1.14-2.13-.76-.62-1.26-1.4-1.53-2.2-.27.8-.77 1.58-1.53 2.2-.76.62-1.14 1.35-1.14 2.13 0 1.48 1.2 2.7 2.67 2.7z" />
    </svg>
  ),
  Heart: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  Paintbrush: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18.37 2.63l-1.42 1.42a5 5 0 000 7.07l3.54 3.54a5 5 0 007.07 0l1.42-1.42a5 5 0 000-7.07l-3.53-3.54a5 5 0 00-7.08 0z" />
      <path d="M14 8l-1.5-1.5" />
      <path d="M9 16.5L4.5 21" />
    </svg>
  ),
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {service.popular && (
            <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-[var(--color-text)] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star className="w-3 h-3" fill="currentColor" />
              Popular
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="w-14 h-14 rounded-xl bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
            {iconMap[service.icon] || iconMap.Sparkles}
          </div>
          <h3 className="font-heading text-xl font-medium text-[var(--color-text)] mb-3">
            {service.name}
          </h3>
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1">
            {service.description}
          </p>
          <Link
            to="/booking"
            className="mt-6 inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group/link"
          >
            Book Now
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
