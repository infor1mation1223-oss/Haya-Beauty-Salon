import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar, Star, Play, ArrowRight, Check, Users } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Haya Beauty Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[var(--color-primary)]/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[var(--color-accent)] text-sm font-medium border border-white/20">
                <Star className="w-4 h-4" fill="currentColor" />
                Premium Beauty Experience in Karachi
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOutExpo }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-tight mb-6"
            >
              Where Beauty Meets{' '}
              <span className="text-[var(--color-accent)] italic">Confidence</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              Your premium beauty destination in Baldia Town Karachi. Experience expert hair styling,
              makeup artistry, and rejuvenating skincare in an elegant, welcoming environment.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.45, ease: easeOutExpo }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button href="/booking" size="lg" variant="accent" icon={<Calendar className="w-5 h-5" />}>
                Book an Appointment
              </Button>
              <Button href="/services" size="lg" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-text)]">
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.6, ease: easeOutExpo }}
              className="flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-[var(--color-accent)]" />
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="text-white text-lg font-medium hover:text-[var(--color-accent)] transition-colors"
              >
                {siteConfig.business.phoneFormatted}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[var(--color-text)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" />
                <span className="text-3xl font-heading font-medium text-white">4.7</span>
              </div>
              <p className="text-white/60 text-sm">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-3xl font-heading font-medium text-white">6</span>
              </div>
              <p className="text-white/60 text-sm">Reviews</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-white/60 text-sm">Karachi, Pakistan</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-white/60 text-sm">By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Professional beauty services at Haya Beauty Salon"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--color-accent)]/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--color-primary)]/10 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                About Haya Beauty Salon
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                Your Beauty Journey <br />
                <span className="text-[var(--color-primary)]">Starts Here</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                At Haya Beauty Salon, we believe every client deserves an exceptional beauty experience.
                Located in Baldia Town Karachi, our salon offers a warm, welcoming atmosphere where
                you can relax and let our skilled professionals enhance your natural beauty.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Personalized beauty consultations',
                  'Premium quality products',
                  'Relaxing and hygienic environment',
                  'Dedicated to customer satisfaction',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/about" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Discover Our Story
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Our Services"
              title="Discover Your Perfect Beauty Treatment"
              centered
            >
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                From hair styling to bridal makeup, we offer a comprehensive range of beauty services
                tailored to enhance your unique beauty.
              </p>
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Button href="/services" variant="outline">
                View All Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Why Choose Us"
              title="The Haya Experience"
              light
              centered
            >
              <p className="text-white/70 max-w-2xl mx-auto">
                We go beyond beauty services to create memorable experiences that leave you feeling
                confident and radiant.
              </p>
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center">
                    {item.icon === 'User' && (
                      <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                    {item.icon === 'Leaf' && (
                      <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6.75 16.75A7.5 7.5 0 0112 22h.75a9 9 0 010-18h.75a6 6 0 00-.75 12h5.25a2.25 2.25 0 000-4.5H12a4.5 4.5 0 000-9h.75" />
                      </svg>
                    )}
                    {item.icon === 'Award' && (
                      <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    )}
                    {item.icon === 'Heart' && (
                      <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Our Gallery"
              title="Beauty We Have Created"
              centered
            >
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Explore our work and discover the artistry behind every look we create.
              </p>
            </SectionHeading>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {siteConfig.gallery.images.slice(0, 8).map((image, index) => (
              <AnimatedSection
                key={image.id}
                delay={index * 0.05}
                className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <div className="relative group overflow-hidden rounded-xl aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/30 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Button href="/gallery" variant="outline">
                View Full Gallery
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="bg-[var(--color-primary)] rounded-3xl p-10 lg:p-14 text-center">
                <div className="mb-6">
                  <span className="text-7xl lg:text-8xl font-heading font-medium text-white">
                    {siteConfig.business.reviews.rating}
                  </span>
                </div>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6"
                      fill={i < Math.round(siteConfig.business.reviews.rating) ? '#C9A961' : 'transparent'}
                      stroke="#C9A961"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="text-white/70 text-lg mb-8">Based on {siteConfig.business.reviews.count} Reviews</p>
                <Button href="/reviews" variant="accent" size="lg">
                  Read All Reviews
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                Customer Reviews
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                What Our Clients Say
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                Our clients trust us with their beauty needs. With a rating of {siteConfig.business.reviews.rating}/5
                from {siteConfig.business.reviews.count} reviews, we are committed to delivering exceptional
                beauty services that exceed expectations.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-[var(--color-secondary)] border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs text-[var(--color-primary)] font-medium">{i}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[var(--color-text-secondary)] text-sm">
                  {siteConfig.business.reviews.count} Happy Clients
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 lg:py-32 bg-[var(--color-text)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-red-600/20 flex items-center justify-center">
              <Play className="w-10 h-10 text-red-500 fill-current" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-medium text-white mb-6">
              Follow Us on YouTube
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Watch our latest beauty tutorials, behind-the-scenes content, and transformations.
              Subscribe to stay updated with our beauty tips and exclusive content.
            </p>
            <a
              href={siteConfig.business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              <Play className="w-5 h-5 fill-current" />
              Visit Our YouTube Channel
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-[var(--color-surface-alt)] rounded-3xl p-10 lg:p-20 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-primary)]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                  Ready to Experience <br />
                  <span className="text-[var(--color-primary)]">Beauty Excellence?</span>
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-10">
                  Book your appointment today and let us help you look and feel your absolute best.
                  Your beauty journey starts with a single step.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/booking" size="lg" variant="primary" icon={<Calendar className="w-5 h-5" />}>
                    Book Your Appointment
                  </Button>
                  <Button href={`tel:${siteConfig.business.phone}`} size="lg" variant="outline" icon={<Phone className="w-5 h-5" />}>
                    Call {siteConfig.business.phoneFormatted}
                  </Button>
                </div>
                <div className="mt-10 flex items-center justify-center gap-2 text-[var(--color-text-muted)]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{siteConfig.business.address.street}, {siteConfig.business.address.city}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
