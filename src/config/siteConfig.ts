// Haya Beauty Salon - Site Configuration
// Edit this file to update business information across the entire website

export const siteConfig = {
  business: {
    name: 'Haya Beauty Salon',
    tagline: 'Where Beauty Meets Confidence',
    description: 'Your premium beauty destination in Baldia Town Karachi, providing expert hair styling, makeup, skincare, and bridal beauty services.',
    shortDescription: 'Expert beauty services in Karachi',
    
    phone: '03442782872',
    phoneFormatted: '+92 344 2782872',
    phoneLink: 'tel:+923442782872',
    whatsappLink: 'https://wa.me/923442782872',
    
    address: {
      street: 'House # 426, Sector 9/E1, New Saeedabad, Baldia Town Karachi',
      area: 'Sector 9, Baldia',
      city: 'Karachi',
      postalCode: '75760',
      country: 'Pakistan',
    },
    
    email: '',
    website: 'https://hayabeautysalon.com',
    
    social: {
      youtube: 'https://www.youtube.com/channel/UCQMSPQxwXByFUPrP3z6-WKA',
      facebook: '',
      instagram: '',
    },
    
    hours: 'Contact salon for current timings',
    
    // Real review data - do not modify
    reviews: {
      rating: 4.7,
      count: 6,
    },
  },
  
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ],
  
  services: [
    {
      id: 'hair',
      name: 'Hair Styling',
      description: 'Expert cuts, coloring, and styling to bring out your natural beauty. From classic cuts to trendy styles.',
      icon: 'Scissors',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
      popular: true,
    },
    {
      id: 'haircare',
      name: 'Hair Care',
      description: 'Revitalizing treatments for healthy, shiny hair. Deep conditioning, keratin treatments, and more.',
      icon: 'Sparkles',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      popular: true,
    },
    {
      id: 'makeup',
      name: 'Makeup',
      description: 'Professional makeup services for every occasion. Natural looks to glamorous transformations.',
      icon: 'Palette',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
      popular: true,
    },
    {
      id: 'skincare',
      name: 'Facial & Skin Care',
      description: 'Rejuvenating facials and skincare treatments tailored to your skin type and concerns.',
      icon: 'Droplets',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      popular: false,
    },
    {
      id: 'bridal',
      name: 'Bridal Beauty',
      description: 'Complete bridal beauty packages for your special day. Engagement to wedding, we have you covered.',
      icon: 'Heart',
      image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80',
      popular: true,
    },
    {
      id: 'nails',
      name: 'Manicure & Pedicure',
      description: 'Luxurious nail care services including gel nails, nail art, and relaxing hand and foot treatments.',
      icon: 'Paintbrush',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
      popular: false,
    },
  ],
  
  gallery: {
    categories: ['All', 'Hair', 'Makeup', 'Beauty', 'Salon', 'Bridal', 'Interior'],
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
        category: 'Hair',
        alt: 'Professional hair styling at Haya Beauty Salon',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
        category: 'Makeup',
        alt: 'Professional makeup application',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
        category: 'Beauty',
        alt: 'Beauty treatment session',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        category: 'Hair',
        alt: 'Hair care treatment',
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&q=80',
        category: 'Bridal',
        alt: 'Bridal beauty services',
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
        category: 'Makeup',
        alt: 'Professional makeup artistry',
      },
      {
        id: 7,
        src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
        category: 'Salon',
        alt: 'Salon interior view',
      },
      {
        id: 8,
        src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80',
        category: 'Hair',
        alt: 'Hair styling and coloring',
      },
      {
        id: 9,
        src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        category: 'Beauty',
        alt: 'Skincare treatment',
      },
      {
        id: 10,
        src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
        category: 'Beauty',
        alt: 'Manicure and nail art',
      },
      {
        id: 11,
        src: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?w=800&q=80',
        category: 'Interior',
        alt: 'Elegant salon interior',
      },
      {
        id: 12,
        src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
        category: 'Salon',
        alt: 'Modern salon atmosphere',
      },
    ],
  },
  
  whyChooseUs: [
    {
      title: 'Personalized Beauty Experience',
      description: 'Every client receives individual attention and customized services tailored to their unique needs and preferences.',
      icon: 'User',
    },
    {
      title: 'Elegant & Relaxing Environment',
      description: 'Step into our thoughtfully designed space where comfort meets sophistication, ensuring a peaceful beauty experience.',
      icon: 'Leaf',
    },
    {
      title: 'Professional Excellence',
      description: 'Our skilled team is dedicated to delivering exceptional results using premium products and proven techniques.',
      icon: 'Award',
    },
    {
      title: 'Customer-Focused Approach',
      description: 'Your satisfaction is our priority. We listen, understand, and transform your beauty vision into reality.',
      icon: 'Heart',
    },
  ],
  
  seo: {
    title: 'Haya Beauty Salon | Beauty Salon in Baldia Town Karachi',
    description: 'Haya Beauty Salon - Your premium beauty destination in Baldia Town Karachi. Expert hair styling, makeup, skincare, and bridal beauty services.',
    keywords: 'beauty salon Karachi, hair salon Baldia Town, makeup artist Karachi, bridal makeup Pakistan',
  },
};

export type Service = typeof siteConfig.services[number];
export type NavigationItem = typeof siteConfig.navigation[number];
export type GalleryImage = typeof siteConfig.gallery.images[number];
