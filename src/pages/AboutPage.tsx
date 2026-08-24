import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar, Heart, Sparkles, Award, Users } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-medium mb-6">
              Our Story
            </h1>
            <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
              Discover the passion and dedication behind Haya Beauty Salon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Haya Beauty Salon Interior"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-[var(--color-accent)] rounded-2xl p-6 shadow-xl">
                  <div className="text-[var(--color-text)]">
                    <span className="text-4xl font-heading font-medium">4.7</span>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <span className="text-sm">6 Reviews</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                Welcome to Haya Beauty Salon
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--color-text)] mb-6">
                Where Beauty Meets <br />
                <span className="text-[var(--color-accent)]">Confidence</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
              <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Haya Beauty Salon is your premium beauty destination located in the heart of Baldia Town,
                  Karachi. We are dedicated to providing exceptional beauty services that enhance your
                  natural beauty and boost your confidence.
                </p>
                <p>
                  At our salon, every client is treated with the utmost care and attention. We believe that
                  beauty is not one-size-fits-all, which is why we take the time to understand your unique
                  needs and preferences before every service.
                </p>
                <p>
                  Our commitment to excellence, combined with our warm and welcoming atmosphere, makes Haya
                  Beauty Salon the perfect place to relax, rejuvenate, and discover your most beautiful self.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/booking" variant="primary" icon={<Calendar className="w-4 h-4" />}>
                  Book an Appointment
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Our Values"
              title="What We Stand For"
              centered
            >
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Our core values guide everything we do at Haya Beauty Salon
              </p>
            </SectionHeading>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority. We listen, understand, and deliver beyond expectations.',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Excellence',
                description: 'We strive for excellence in every service, using premium products and proven techniques.',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Quality',
                description: 'Only the finest products and latest techniques to ensure the best results for our clients.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community',
                description: 'Building lasting relationships with our clients based on trust and mutual respect.',
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full text-center shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-xl font-medium text-[var(--color-text)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 lg:py-32 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase mb-4 block">
                The Haya Experience
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--color-text)] mb-6">
                A Beauty Experience <br />
                <span className="text-[var(--color-accent)]">Like No Other</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
              <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  When you step into Haya Beauty Salon, you enter a world of elegance and relaxation.
                  Our thoughtfully designed space creates the perfect ambiance for your beauty journey.
                </p>
                <p>
                  From the moment you arrive, our friendly team ensures you feel comfortable and
                  well-cared for. We take pride in creating an environment where you can unwind
                  while receiving top-quality beauty treatments.
                </p>
                <p>
                  Whether you're visiting us for a simple haircut, a luxurious facial, or your
                  complete bridal beauty package, we guarantee an experience that leaves you
                  feeling refreshed, confident, and beautiful.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
                  alt="Hair treatment"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80"
                  alt="Makeup application"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80"
                  alt="Nail art"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80"
                  alt="Skincare treatment"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
                <h3 className="font-heading text-2xl font-medium text-[var(--color-text)] mb-6">
                  Visit Our Salon
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-text)] mb-1">Address</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {siteConfig.business.address.street},<br />
                        {siteConfig.business.address.area}, {siteConfig.business.address.city},<br />
                        {siteConfig.business.address.postalCode}, {siteConfig.business.address.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-text)] mb-1">Phone</h4>
                      <a
                        href={`tel:${siteConfig.business.phone}`}
                        className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                      >
                        {siteConfig.business.phoneFormatted}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                  <h4 className="font-medium text-[var(--color-text)] mb-3">Hours</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {siteConfig.business.hours}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80"
                  alt="Haya Beauty Salon interior"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading text-2xl text-white font-medium mb-2">
                    Haya Beauty Salon
                  </h3>
                  <p className="text-white/80 text-sm">
                    Your premium beauty destination in Karachi
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-medium text-[var(--color-text)] mb-6">
              Ready to Experience Haya Beauty Salon?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-10">
              Book your appointment today and let us help you discover your most beautiful self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/booking" size="lg" variant="primary" icon={<Calendar className="w-5 h-5" />}>
                Book an Appointment
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
