'use client';

import { motion } from 'framer-motion';
import WatchCard from './WatchCard';

interface WatchShowcaseProps {
  watches: any[];
  onWatchClick: (watch: any) => void;
}

export default function WatchShowcase({ watches, onWatchClick }: WatchShowcaseProps) {
  return (
    <section id="collection" className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-[#050505]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-gold-primary text-sm tracking-wide uppercase mb-3">
            Seçilmiş məhsullar
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-cream mb-4">
            Koleksiyonumuz
          </h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </motion.div>

        {/* Watches grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {watches.map((watch, index) => (
            <WatchCard
              key={watch._id || watch.id}
              watch={watch}
              index={index}
              onClick={() => onWatchClick(watch)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
