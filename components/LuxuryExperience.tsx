'use client';

import { motion } from 'framer-motion';

export default function LuxuryExperience() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/90" />
        <div className="absolute inset-0 bg-[url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20watch%20making%20cinematic%20dark%20background%20gold%20light&image_size=landscape_16_9')] bg-cover bg-center" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-inter text-gold-primary text-sm tracking-wide uppercase mb-3">
            Lüks təcrübə
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl text-cream mb-6 md:mb-8">
            Zamanı yaşayın
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-8" />
          <p className="font-inter text-base md:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto">
            Hər bir GALVIORS Ganja saatı əlinə çatan bir incəsənət əsəridir. Ən incə materiallardan, ustaların əlləri ilə yaradılmış və zamanı təkcə ölçmək deyil, yaşamaq üçün nəzərdə tutulmuş. Bizim üçün saat yalnız bir aksesuar deyil, həyat tərzidir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
