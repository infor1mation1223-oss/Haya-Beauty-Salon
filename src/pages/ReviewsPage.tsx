import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Calendar, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function ReviewsPage() {
  const { rating, count } = siteConfig.business.reviews;
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

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
              Customer Reviews
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white font-medium mb-6">
              What Our Clients Say
            </h1>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">
              Real reviews from real clients who trust Haya Beauty Salon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-20 lg:py-28 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="bg-[var(--color-primary)] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="mb-6">
                    <span className="text-8xl lg:text-9xl font-heading font-medium text-white">
                      {rating}
                    </span>
                  </div>
                  <div className="flex justify-center gap-2 mb-4">
                    {stars.map((filled, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8"
                        fill={filled ? '#C9A961' : 'transparent'}
                        stroke="#C9A961"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-xl mb-2">out of 5</p>
                  <p className="text-white/60">Based on {count} reviews</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--color-text)] mb-6">
                Our Reputation
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
                Haya Beauty Salon is proud to maintain a {rating}/5 rating from our valued clients.
                This reflects our commitment to providing exceptional beauty services and creating
                memorable experiences for everyone who visits us.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: `${rating}`, label: 'Average Rating' },
                  { value: `${count}`, label: 'Reviews' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-heading font-medium text-[var(--color-primary)] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[var(--color-text-light)] text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reviews Info */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                Client Experiences
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                Read Reviews
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Review Source',
                description: 'Client reviews are available on Google Maps and our social media platforms. Contact us to learn more about client experiences.',
              },
              {
                title: 'Share Your Experience',
                description: 'We would love to hear about your experience at Haya Beauty Salon. Contact us to share your feedback.',
              },
              {
                title: 'Referrals',
                description: 'Many of our new clients come through referrals from satisfied customers.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {stars.map((filled, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5"
                        fill={filled ? '#C9A961' : 'transparent'}
                        stroke="#C9A961"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
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

          <AnimatedSection delay={0.3}>
            <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8 text-center">
              <h3 className="font-heading text-2xl font-medium text-[var(--color-text)] mb-4">
                Want to Experience Haya Beauty Salon?
              </h3>
              <p className="text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto">
                Book your appointment today and discover why our clients consistently rate us {rating}/5.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book an Appointment
                </Link>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] rounded-full font-medium hover:bg-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
