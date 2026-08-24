/**
 * Central content + business data for Haya Beauty Salon.
 * Edit this file to update names, contact details, services, gallery, and copy.
 */

const phoneDigits = "03442782872";

const site = {
  name: "Haya Beauty Salon",
  shortName: "Haya",
  legalName: "Haya Beauty Salon",
  tagline: "Where Beauty Meets Confidence",
  category: "Beauty Salon",
  schemaType: "BeautySalon",

  phone: phoneDigits,
  phoneDisplay: "0344 2782872",
  phoneTel: `+92${phoneDigits.replace(/^0/, "")}`,
  whatsapp: `92${phoneDigits.replace(/^0/, "")}`,
  whatsappDisplay: "0344 2782872",

  address: {
    line1: "House # 426, Sector 9/E1",
    line2: "New Saeedabad, Baldia Town",
    sector: "Sector 9",
    area: "Baldia",
    city: "Karachi",
    postal: "75760",
    country: "Pakistan",
    short: "Baldia Town, Karachi",
    locality: "Baldia Town Karachi",
    full: "House # 426, Sector 9/E1, New Saeedabad, Baldia Town Karachi, Sector 9, Baldia, Karachi, 75760, Pakistan",
  },

  youtube: "https://www.youtube.com/channel/UCQMSPQxwXByFUPrP3z6-WKA",

  rating: 4.7,
  reviewCount: 6,

  hoursNote: "Please contact the salon for current timings",
  hoursEditable: [
    { day: "Monday", hours: "Please contact the salon" },
    { day: "Tuesday", hours: "Please contact the salon" },
    { day: "Wednesday", hours: "Please contact the salon" },
    { day: "Thursday", hours: "Please contact the salon" },
    { day: "Friday", hours: "Please contact the salon" },
    { day: "Saturday", hours: "Please contact the salon" },
    { day: "Sunday", hours: "Please contact the salon" },
  ],

  description:
    "Haya Beauty Salon is a welcoming beauty salon in Baldia Town, Karachi — a calm place for hair, makeup, skin, and personal care, by appointment.",

  year: 2026,

  nav: [
    { href: "/", label: "Home", page: "home" },
    { href: "/about", label: "About", page: "about" },
    { href: "/services", label: "Services", page: "services" },
    { href: "/gallery", label: "Gallery", page: "gallery" },
    { href: "/reviews", label: "Reviews", page: "reviews" },
    { href: "/contact", label: "Contact", page: "contact" },
  ],

  social: [
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCQMSPQxwXByFUPrP3z6-WKA",
    },
  ],

  /**
   * Example service categories — easy to rename, rewrite, or remove.
   * Do not treat these as a guaranteed live menu until the salon confirms them.
   */
  services: [
    {
      id: "hair-styling",
      category: "Hair",
      title: "Hair Styling",
      summary: "Cuts, blowouts, and finished styles shaped around your face and daily routine.",
      description:
        "An editable starting point for cuts, styling, and occasion hair. Update this copy to match the salon’s actual hair menu.",
      duration: "Duration on inquiry",
      price: "Price available on inquiry",
      image: "/images/services/hair-styling.jpg",
      alt: "Stylist sectioning long glossy hair at a salon station",
    },
    {
      id: "hair-care",
      category: "Hair",
      title: "Hair Care",
      summary: "Treatments and wash-house care for softness, shine, and healthier-feeling hair.",
      description:
        "Use this card for treatments, rituals, or repair services the salon offers. Replace the text with the real care menu.",
      duration: "Duration on inquiry",
      price: "Price available on inquiry",
      image: "/images/services/hair-care.jpg",
      alt: "Hair care ritual at a salon wash basin",
    },
    {
      id: "makeup",
      category: "Makeup",
      title: "Makeup",
      summary: "Soft everyday glam through to refined event makeup, matched to your features.",
      description:
        "A placeholder for makeup services. Add the looks the salon actually books — daytime, event, or editorial.",
      duration: "Duration on inquiry",
      price: "Price available on inquiry",
      image: "/images/services/makeup.jpg",
      alt: "Makeup artist applying refined eyeshadow",
    },
    {
      id: "facial",
      category: "Skin",
      title: "Facial & Skin Care",
      summary: "Calm, skin-first facials in a quiet treatment setting.",
      description:
        "Replace with the salon’s real facial list. Until then, guests are invited to ask which skin treatments are available.",
      duration: "Duration on inquiry",
      price: "Price available on inquiry",
      image: "/images/services/facial.jpg",
      alt: "Facial treatment with warm cream linens and a blush rose",
    },
    {
      id: "bridal",
      category: "Bridal",
      title: "Bridal Beauty",
      summary: "Thoughtful bridal hair and makeup, planned around your ceremony and photographs.",
      description:
        "An editable bridal category. Confirm packages, trials, and family services directly with the salon.",
      duration: "Duration on inquiry",
      price: "Price available on inquiry",
      image: "/images/services/bridal.jpg",
      alt: "Bride in ivory and gold with refined bridal makeup",
    },
    {
      id: "nails",
      category: "Nails",
      title: "Manicure & Pedicure",
      summary: "Clean, careful nail care with a refined finish.",
      description:
        "Use this card for manicure, pedicure, or nail-art offerings. Pricing stays on inquiry until the salon publishes a list.",
      duration: "Duration on inquiry",
      price: "Price available on inquiry",
      image: "/images/services/nails.jpg",
      alt: "Champagne manicure being painted at a linen nail desk",
    },
    {
      id: "packages",
      category: "Packages",
      title: "Beauty Packages",
      summary: "Combined visits for events, or a slower, more complete beauty sitting.",
      description:
        "Add real packages here when they are ready. Until then, ask the salon to build a visit around your occasion.",
      duration: "Duration on inquiry",
      price: "Price available on inquiry",
      image: "/images/services/packages.jpg",
      alt: "Luxury salon amenities with cream towels, roses, and gold details",
    },
  ],

  serviceFilters: ["All", "Hair", "Makeup", "Skin", "Nails", "Bridal", "Packages"],

  benefits: [
    {
      title: "Personalized Beauty Experience",
      text: "Every visit starts with listening — your features, your time, and how you want to feel when you leave.",
    },
    {
      title: "Elegant & Relaxing Environment",
      text: "A calm, considered room in Baldia Town where you can sit, breathe, and be looked after without rush.",
    },
    {
      title: "Professional Service",
      text: "Careful work, clean presentation, and honest conversation about what will suit you.",
    },
    {
      title: "Customer-Focused Approach",
      text: "Appointments, questions, and follow-ups are handled with the same courtesy as the service itself.",
    },
  ],

  gallery: [
    { src: "/images/gallery/hair-01.jpg", alt: "Hair being styled with a gold tail comb", category: "Hair" },
    { src: "/images/gallery/makeup-01.jpg", alt: "Close editorial makeup application", category: "Makeup" },
    { src: "/images/gallery/salon-01.jpg", alt: "Cream styling chairs and gold mirrors", category: "Salon" },
    { src: "/images/gallery/beauty-01.jpg", alt: "Portrait with soft glam makeup and waves", category: "Beauty" },
    { src: "/images/gallery/interior-01.jpg", alt: "Marble reception desk and blush roses", category: "Interior" },
    { src: "/images/gallery/bridal-01.jpg", alt: "Burgundy silk and gold salon sitting room", category: "Bridal" },
    { src: "/images/gallery/hair-02.jpg", alt: "Hair care at the wash basin", category: "Hair" },
    { src: "/images/gallery/beauty-02.jpg", alt: "Gold brushes, compact, and a blush rose", category: "Beauty" },
    { src: "/images/gallery/salon-02.jpg", alt: "Gold-framed mirrors along the styling wall", category: "Salon" },
    { src: "/images/gallery/makeup-02.jpg", alt: "Makeup look in warm champagne light", category: "Makeup" },
    { src: "/images/gallery/interior-02.jpg", alt: "Boutique salon sitting corner", category: "Interior" },
    { src: "/images/gallery/bridal-02.jpg", alt: "South Asian bride in ivory and gold with refined bridal makeup", category: "Bridal" },
    { src: "/images/gallery/hair-03.jpg", alt: "Polished dark waves", category: "Hair" },
    { src: "/images/gallery/beauty-03.jpg", alt: "Champagne manicure being painted at a linen nail desk", category: "Beauty" },
    { src: "/images/gallery/interior-03.jpg", alt: "Burgundy drape with embroidered monogram", category: "Interior" },
  ],

  galleryFilters: ["All", "Hair", "Makeup", "Beauty", "Salon", "Bridal", "Interior"],

  /**
   * Individual written reviews are not supplied.
   * Keep this array empty, or add real reviews later in this shape:
   * { name, date, rating, text }
   */
  writtenReviews: [],

  pages: {
    home: {
      title: "Haya Beauty Salon | Beauty Salon in Baldia Town Karachi",
      description:
        "Haya Beauty Salon in Baldia Town, Karachi. A welcoming beauty salon for appointments, hair, makeup, and personal care. Call 0344 2782872 to book.",
    },
    about: {
      title: "About Haya Beauty Salon | Baldia Town Karachi",
      description:
        "Meet Haya Beauty Salon in New Saeedabad, Baldia Town, Karachi — a calm, customer-first beauty salon focused on a considered visit.",
    },
    services: {
      title: "Beauty Services | Haya Beauty Salon Karachi",
      description:
        "Explore beauty service categories at Haya Beauty Salon in Baldia Town, Karachi. Ask the salon for current treatments, timings, and pricing.",
    },
    gallery: {
      title: "Gallery | Haya Beauty Salon Karachi",
      description:
        "A visual look at the atmosphere and beauty direction of Haya Beauty Salon in Baldia Town, Karachi.",
    },
    reviews: {
      title: "Reviews | Haya Beauty Salon — 4.7 from 6 reviews",
      description:
        "Haya Beauty Salon has a 4.7 out of 5 rating from 6 reviews. Visit the salon in Baldia Town, Karachi, or call 0344 2782872.",
    },
    contact: {
      title: "Contact Haya Beauty Salon | Baldia Town Karachi",
      description:
        "Visit Haya Beauty Salon at House 426, Sector 9/E1, New Saeedabad, Baldia Town, Karachi, or call 0344 2782872.",
    },
    booking: {
      title: "Book an Appointment | Haya Beauty Salon Karachi",
      description:
        "Request an appointment at Haya Beauty Salon in Baldia Town, Karachi. Call 0344 2782872 or send a booking request online.",
    },
  },
};

site.mapQuery = site.address.full;
site.mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.full)}&z=16&output=embed`;
site.mapDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;
site.telHref = `tel:${site.phone}`;
site.whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Haya Beauty Salon, I would like to book an appointment."
)}`;

module.exports = site;
