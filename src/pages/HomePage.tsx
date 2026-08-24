import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Calendar, Star, ArrowRight, Check, Users, Play } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Haya Beauty Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[var(--color-primary)]/20 rounded-full blur-[80px]" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
                <Star className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" />
                Premium Beauty Experience in Karachi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-[1.05] mb-8"
            >
              Where Beauty Meets{' '}
              <span className="italic text-[var(--color-accent)]">Confidence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-white/75 leading-relaxed mb-12 max-w-xl"
            >
              Your premium beauty destination in Baldia Town Karachi. Experience expert hair styling, 
              makeup artistry, and rejuvenating skincare in an elegant, welcoming environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                to="/booking"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text)] rounded-full font-medium text-base hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/20"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/40 text-white rounded-full font-medium text-base hover:bg-white hover:text-[var(--color-text)] transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-4"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white/50 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border)]">
            <div className="py-10 px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" />
                <span className="text-3xl font-heading font-medium text-[var(--color-text)]">4.7</span>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm">Average Rating</p>
            </div>
            <div className="py-10 px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-3xl font-heading font-medium text-[var(--color-text)]">6</span>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm">Reviews</p>
            </div>
            <div className="py-10 px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-muted)] text-sm">Baldia Town, Karachi</p>
            </div>
            <div className="py-10 px-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <p className="text-[var(--color-text-muted)] text-sm">By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                    alt="Beauty services at Haya Beauty Salon"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-accent)]/10 rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-[var(--color-primary)]/5 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-5 shadow-xl z-20">
                  <div className="text-[var(--color-primary)] font-heading text-3xl font-medium">4.7</div>
                  <div className="flex gap-0.5 my-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 text-[var(--color-accent)]" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[var(--color-text-muted)] text-xs">6 Reviews</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                About Haya Beauty Salon
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6 leading-tight">
                Your Beauty Journey <br />
                <span className="text-[var(--color-primary)]">Starts Here</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                At Haya Beauty Salon, we believe every client deserves an exceptional beauty experience.
                Located in Baldia Town Karachi, our salon offers a warm, welcoming atmosphere where
                you can relax and let our skilled professionals enhance your natural beauty.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Personalized beauty consultations',
                  'Premium quality products',
                  'Relaxing and hygienic environment',
                  'Dedicated to customer satisfaction',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-4 transition-all"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                Our Services
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                Discover Your Perfect Beauty Treatment
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mx-auto mb-6" />
              <p className="text-[var(--color-text-secondary)] text-lg">
                From hair styling to bridal makeup, we offer a comprehensive range of beauty services
                tailored to enhance your unique beauty.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.slice(0, 6).map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Link
                  to="/services"
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-[var(--color-text)] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" fill="currentColor" />
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-medium text-[var(--color-text)] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-14">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-[var(--color-primary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-white mb-6">
                The Haya Experience
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent mx-auto mb-6" />
              <p className="text-white/70 text-lg">
                We go beyond beauty services to create memorable experiences that leave you feeling
                confident and radiant.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center h-full border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                    {item.icon === 'User' && (
                      <svg className="w-7 h-7 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                    {item.icon === 'Leaf' && (
                      <svg className="w-7 h-7 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
                        <path d="M12 10v6M9 13h6" />
                      </svg>
                    )}
                    {item.icon === 'Award' && (
                      <svg className="w-7 h-7 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    )}
                    {item.icon === 'Heart' && (
                      <svg className="w-7 h-7 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                Our Gallery
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                Beauty We Have Created
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {siteConfig.gallery.images.slice(0, 8).map((image, index) => (
              <AnimatedSection
                key={image.id}
                delay={index * 0.05}
                className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <Link
                  to="/gallery"
                  className="block relative group overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300" />
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-14">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
              >
                View Full Gallery
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="bg-[var(--color-primary)] rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="mb-4">
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
                  <Link
                    to="/reviews"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text)] rounded-full font-medium hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    Read All Reviews
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                Customer Reviews
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                What Our Clients Say
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                Our clients trust us with their beauty needs. With a rating of {siteConfig.business.reviews.rating}/5
                from {siteConfig.business.reviews.count} reviews, we are committed to delivering exceptional
                beauty services that exceed expectations.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
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
      <section className="py-24 lg:py-32 bg-[var(--color-text)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-red-600/20 flex items-center justify-center">
              <Play className="w-10 h-10 text-red-500 fill-current ml-1" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-medium text-white mb-6">
              Follow Us on YouTube
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Watch our latest beauty tutorials, behind-the-scenes content, and transformations.
              Subscribe to stay updated with our beauty tips and exclusive content.
            </p>
            <a
              href={siteConfig.business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              <Play className="w-5 h-5 fill-current ml-1" />
              Visit Our YouTube Channel
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-[var(--color-surface-alt)] rounded-3xl p-12 lg:p-20 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[var(--color-primary)]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="font-heading text-4xl lg:text-5xl font-medium text-[var(--color-text)] mb-6">
                  Ready to Experience <br />
                  <span className="text-[var(--color-primary)]">Beauty Excellence?</span>
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto mb-10">
                  Book your appointment today and let us help you look and feel your absolute best.
                  Your beauty journey starts with a single step.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-dark)] transition-all hover:shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Your Appointment
                  </Link>
                  <a
                    href={`tel:${siteConfig.business.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call {siteConfig.business.phoneFormatted}
                  </a>
                </div>
                <div className="mt-12 flex items-center justify-center gap-2 text-[var(--color-text-muted)]">
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
