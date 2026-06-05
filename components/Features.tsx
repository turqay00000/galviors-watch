'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🚚',
    title: 'Sürətli çatdırılma',
    description: 'Hər bir sifarişi ən qısa zamanda çatdırırıq'
  },
  {
    icon: '🛡️',
    title: 'Etibarlı xidmət',
    description: 'Güvənilən keyfiyyət və xidmət təmin edirik'
  },
  {
    icon: '⭐',
    title: 'Premium keyfiyyət',
    description: 'Dünya standartlarında məhsullar təqdim edirik'
  }
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />

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
            Nə üçün biz
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl text-cream mb-4">
            Fəriklərimiz
          </h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glassmorphism rounded-xl p-7 text-center hover-glow"
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full border border-gold-primary/30 bg-gold-primary/5"
                animate={{
                  boxShadow: ['0 0 20px rgba(212,175,55,0.1)', '0 0 35px rgba(212,175,55,0.2)', '0 0 20px rgba(212,175,55,0.1)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-3xl">{feature.icon}</span>
              </motion.div>

              {/* Title */}
              <h3 className="font-cormorant text-xl md:text-2xl text-gold-primary mb-2 group-hover:text-cream transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-cream/70 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
