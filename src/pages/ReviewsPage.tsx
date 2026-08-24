import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Calendar, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export default function ReviewsPage() {
  const { rating, count } = siteConfig.business.reviews;
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[var(--color-accent)] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase mb-6">
              Customer Reviews
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-medium mb-6">
              What Our Clients Say
            </h1>
            <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
              Real reviews from real clients who trust Haya Beauty Salon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 lg:py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Rating Card */}
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

              {/* Stats */}
              <div>
                <h2 className="font-heading text-3xl font-medium text-[var(--color-text)] mb-6">
                  Our Reputation
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
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
                      <div className="text-[var(--color-text-muted)] text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section className="py-16 lg:py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Client Experiences"
              title="Read Reviews"
              centered
            >
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                We value every client's feedback. While individual reviews can be viewed on our
                social media and Google listing, we welcome you to contact us directly to
                learn more about client experiences.
              </p>
            </SectionHeading>
          </AnimatedSection>

          {/* Review Placeholder Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                description: 'Many of our new clients come through referrals from satisfied customers. Ask about our referral program.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
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
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.3}>
            <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8 text-center">
              <h3 className="font-heading text-2xl font-medium text-[var(--color-text)] mb-4">
                Want to Experience Haya Beauty Salon?
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
                Book your appointment today and discover why our clients consistently rate us {rating}/5.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/booking" variant="primary" icon={<Calendar className="w-4 h-4" />}>
                  Book an Appointment
                </Button>
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

      {/* Contact Options */}
      <section className="py-16 lg:py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Get In Touch"
              title="Contact Us"
              centered
            >
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Have questions? Want to learn more about our services? We're here to help.
              </p>
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Call Us',
                description: siteConfig.business.phoneFormatted,
                link: `tel:${siteConfig.business.phone}`,
                linkText: 'Call Now',
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'WhatsApp',
                description: 'Quick responses to your inquiries',
                link: siteConfig.business.whatsappLink,
                linkText: 'Message Us',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Book Online',
                description: 'Schedule your appointment',
                link: '/booking',
                linkText: 'Book Now',
                internal: true,
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-medium text-[var(--color-text)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-1">
                    {item.description}
                  </p>
                  {item.internal ? (
                    <Link
                      to={item.link}
                      className="inline-flex items-center justify-center gap-2 text-[var(--color-primary)] font-medium"
                    >
                      {item.linkText}
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-[var(--color-primary)] font-medium"
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
