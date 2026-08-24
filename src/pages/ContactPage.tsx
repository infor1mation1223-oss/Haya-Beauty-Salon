import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Send, MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';

// Custom YouTube icon
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

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
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-medium mb-6">
              Get in Touch
            </h1>
            <p className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions or to book an appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div>
                <h2 className="font-heading text-3xl font-medium text-[var(--color-text)] mb-6">
                  Haya Beauty Salon
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] mb-8" />
                
                <div className="space-y-6 mb-10">
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
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-text)] mb-1">Address</h4>
                      <p className="text-[var(--color-text-secondary)]">
                        {siteConfig.business.address.street},<br />
                        {siteConfig.business.address.area}, {siteConfig.business.address.city},<br />
                        {siteConfig.business.address.postalCode}, {siteConfig.business.address.country}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-text)] mb-1">Hours</h4>
                      <p className="text-[var(--color-text-secondary)]">
                        {siteConfig.business.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.business.phone}`}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call {siteConfig.business.phoneFormatted}
                  </a>
                  <a
                    href={siteConfig.business.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20BD5A] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                  <Link
                    to="/booking"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[var(--color-accent)] text-[var(--color-text)] rounded-xl font-medium hover:bg-[var(--color-accent-dark)] transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
                <h3 className="font-heading text-2xl font-medium text-[var(--color-text)] mb-6">
                  Send Us a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-heading text-xl font-medium text-[var(--color-text)] mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-[var(--color-text-secondary)]">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500' : 'border-[var(--color-border)]'
                        } focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.phone ? 'border-red-500' : 'border-[var(--color-border)]'
                          } focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors`}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="services">Services Information</option>
                        <option value="booking">Booking Question</option>
                        <option value="pricing">Pricing Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl border resize-none ${
                          errors.message ? 'border-red-500' : 'border-[var(--color-border)]'
                        } focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors`}
                        placeholder="How can we help you?"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              subtitle="Find Us"
              title="Our Location"
              centered
            >
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Visit us at our salon in Baldia Town, Karachi. We're conveniently located and ready to welcome you.
              </p>
            </SectionHeading>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Map Placeholder - Replace with actual Google Maps embed */}
              <div className="h-80 bg-[var(--color-surface-alt)] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {siteConfig.business.address.street}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${siteConfig.business.address.street}, ${siteConfig.business.address.city}, Pakistan`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-[var(--color-text)] mb-1">Haya Beauty Salon</h4>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      {siteConfig.business.address.street}, {siteConfig.business.address.area}, {siteConfig.business.address.city}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${siteConfig.business.address.street}, ${siteConfig.business.address.city}, Pakistan`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm hover:text-[var(--color-primary-dark)] transition-colors"
                  >
                    Open in Google Maps
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 lg:py-24 bg-[var(--color-text)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-600/20 flex items-center justify-center">
                <YoutubeIcon className="w-8 h-8 text-red-500 fill-current" />
              </div>
              <h2 className="font-heading text-3xl font-medium text-white mb-4">
                Subscribe to Our YouTube
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Watch beauty tutorials, behind-the-scenes content, and more on our YouTube channel.
              </p>
              <a
                href={siteConfig.business.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                <YoutubeIcon className="w-5 h-5 fill-current" />
                Visit Our YouTube Channel
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
