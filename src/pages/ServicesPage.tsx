import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';

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
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white font-medium mb-6">
              Beauty Services
            </h1>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">
              Discover our comprehensive range of premium beauty treatments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--color-text)] mb-6">
                Premium Beauty Treatments
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mx-auto mb-6" />
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                At Haya Beauty Salon, we offer a wide range of beauty services designed to help you
                look and feel your best. From hair styling to bridal makeup, our expert team is
                dedicated to delivering exceptional results tailored to your unique needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-[var(--color-text)] px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg">
                        <Star className="w-4 h-4" fill="currentColor" />
                        Popular
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-[var(--color-primary)] shadow-lg">
                        {iconMap[service.icon] || iconMap.Sparkles}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-medium text-[var(--color-text)] mb-3">
                      {service.name}
                    </h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="pt-6 border-t border-[var(--color-border)]">
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--color-text-light)] text-sm">
                          Price available on inquiry
                        </span>
                        <Link
                          to="/booking"
                          className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group/link"
                        >
                          Book Now
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                What to Expect
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                Our Service Process
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We start with a personalized consultation to understand your needs and preferences.',
              },
              {
                step: '02',
                title: 'Recommendation',
                description: 'Based on your consultation, we recommend the best treatments for your goals.',
              },
              {
                step: '03',
                title: 'Treatment',
                description: 'Our skilled professionals deliver exceptional service using premium products.',
              },
              {
                step: '04',
                title: 'Aftercare',
                description: 'We provide guidance on maintaining your look and recommend follow-up care.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <span className="text-5xl font-heading font-medium text-[var(--color-border)] mb-4 block">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-lg font-medium text-[var(--color-text)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-medium text-white mb-6">
              Ready to Book Your Service?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Contact us today to schedule your appointment and experience the Haya Beauty difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text)] rounded-full font-medium hover:bg-[var(--color-accent-light)] transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </Link>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[var(--color-primary)] transition-colors"
              >
                Call {siteConfig.business.phoneFormatted}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
