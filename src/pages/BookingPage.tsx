import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Phone, CheckCircle, User, MessageSquare, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import AnimatedSection from '../components/ui/AnimatedSection';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

export default function BookingPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\-\s()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) newErrors.date = 'Please select a preferred date';
    if (!formData.time) newErrors.time = 'Please select a preferred time';
    if (!formData.service) newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase mb-6">Book Now</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-medium mb-6">Book Your Appointment</h1>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">Schedule your beauty session at Haya Beauty Salon</p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-20 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
                  <h2 className="font-heading text-2xl font-medium text-[var(--color-text)] mb-2">Request an Appointment</h2>
                  <p className="text-[var(--color-text-muted)] mb-8">Fill out the form below and we'll get back to you shortly to confirm your booking.</p>

                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-heading text-2xl font-medium text-[var(--color-text)] mb-4">Booking Request Submitted!</h3>
                      <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
                        Thank you for choosing Haya Beauty Salon. We'll contact you shortly to confirm your appointment at <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] rounded-full font-medium hover:bg-[var(--color-surface)] transition-colors">
                          Return Home
                        </Link>
                        <a href={`tel:${siteConfig.business.phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium">
                          <Phone className="w-4 h-4" />
                          Call to Confirm
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-light)]" />
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-[var(--color-border)]'} focus:outline-none focus:border-[var(--color-primary)] transition-colors`} placeholder="Your full name" />
                          </div>
                          {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-2">Phone Number *</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-light)]" />
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-[var(--color-border)]'} focus:outline-none focus:border-[var(--color-primary)] transition-colors`} placeholder="Your phone number" />
                          </div>
                          {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">Email (Optional)</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="your@email.com" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-[var(--color-text)] mb-2">Preferred Date *</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-light)]" />
                            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} min={minDate} className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.date ? 'border-red-500' : 'border-[var(--color-border)]'} focus:outline-none focus:border-[var(--color-primary)] transition-colors`} />
                          </div>
                          {errors.date && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.date}</p>}
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-[var(--color-text)] mb-2">Preferred Time *</label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-light)]" />
                            <select id="time" name="time" value={formData.time} onChange={handleChange} className={`w-full pl-12 pr-4 py-3 rounded-xl border appearance-none bg-white ${errors.time ? 'border-red-500' : 'border-[var(--color-border)]'} focus:outline-none focus:border-[var(--color-primary)] transition-colors`}>
                              <option value="">Select a time</option>
                              {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                            </select>
                          </div>
                          {errors.time && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.time}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-[var(--color-text)] mb-2">Service *</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl border appearance-none bg-white ${errors.service ? 'border-red-500' : 'border-[var(--color-border)]'} focus:outline-none focus:border-[var(--color-primary)] transition-colors`}>
                          <option value="">Select a service</option>
                          {siteConfig.services.map(service => <option key={service.id} value={service.name}>{service.name}</option>)}
                          <option value="bridal-package">Bridal Package</option>
                          <option value="other">Other / Multiple Services</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.service}</p>}
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2">Special Request (Optional)</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[var(--color-text-light)]" />
                          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full pl-12 pr-4 py-3 rounded-xl border border-[var(--color-border)] resize-none focus:outline-none focus:border-[var(--color-primary)] transition-colors" placeholder="Any special requests or notes..." />
                        </div>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-70 flex items-center justify-center gap-2 text-lg">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                            Submitting Request...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5" />
                            Request Appointment
                          </>
                        )}
                      </button>
                      <p className="text-[var(--color-text-light)] text-sm text-center">We'll contact you to confirm your appointment. For immediate booking, call us directly.</p>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection direction="left" delay={0.1}>
                <div className="bg-[var(--color-primary)] rounded-2xl p-8 text-white">
                  <h3 className="font-heading text-xl font-medium mb-4">Quick Booking</h3>
                  <p className="text-white/80 mb-6">Prefer to book by phone? Call us directly and we'll schedule your appointment.</p>
                  <a href={`tel:${siteConfig.business.phone}`} className="flex items-center justify-center gap-3 w-full py-4 bg-white text-[var(--color-primary)] rounded-xl font-medium hover:bg-white/90 transition-colors">
                    <Phone className="w-5 h-5" />
                    {siteConfig.business.phoneFormatted}
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-medium text-[var(--color-text)] mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
                      <div>
                        <p className="text-sm text-[var(--color-text-light)]">Phone</p>
                        <a href={`tel:${siteConfig.business.phone}`} className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">{siteConfig.business.phoneFormatted}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
                      <div>
                        <p className="text-sm text-[var(--color-text-light)]">Hours</p>
                        <p className="text-[var(--color-text)]">{siteConfig.business.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.3}>
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-8">
                  <h3 className="font-heading text-xl font-medium text-[var(--color-text)] mb-4">Our Services</h3>
                  <ul className="space-y-3">
                    {siteConfig.services.slice(0, 5).map(service => (
                      <li key={service.id} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span className="text-[var(--color-text-muted)] text-sm">{service.name}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="inline-flex items-center gap-1 text-[var(--color-primary)] text-sm font-medium mt-4 hover:text-[var(--color-primary-dark)] transition-colors">
                    View all services →
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-medium text-[var(--color-text)] mb-10 text-center">Booking Information</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { q: 'How does the booking process work?', a: "Fill out the form with your preferred date, time, and service. We'll contact you to confirm your appointment." },
              { q: 'Can I book for the same day?', a: 'Same-day appointments may be available. Please call us directly to check availability.' },
              { q: 'Do I need to pay in advance?', a: "Payment is typically collected at the salon after your service. For bridal packages, a deposit may be required." },
              { q: 'What if I need to cancel or reschedule?', a: 'Please contact us at least 24 hours in advance if you need to cancel or reschedule your appointment.' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-medium text-[var(--color-text)] mb-2">{item.q}</h4>
                  <p className="text-[var(--color-text-muted)] text-sm">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
