'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Nərgiz Məmmədova',
    text: 'GALVIORS Ganja saatları həqiqətdə lüks və incəlikdən ibarətdir. Aldığım saatı hər gün istifadə edirəm və heç vaxt ürəkxanlıqdan gəlmərəm.',
    rating: 5
  },
  {
    name: 'Elvin Əliyev',
    text: 'Müştəri xidməti mükəmməldir. Saat tam vaxtında çatdırıldı və qaydasında idi. Çox memnunum.',
    rating: 5
  },
  {
    name: 'Lalə Nəcəfova',
    text: 'Premium keyfiyyət və gözəl dizayn. Dostlarıma da tövsiyə edirəm. Çox gözəl bir təcrübə oldu.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-black to-[#080808]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-gold-primary text-sm tracking-wide uppercase mb-3">
            Müşteri rəyləri
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl text-cream mb-4">
            Bizim haqqımızda
          </h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glassmorphism rounded-xl p-7 hover-glow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold-primary text-xl">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="font-inter text-cream/80 leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="font-cormorant text-lg md:text-xl text-gold-primary">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
