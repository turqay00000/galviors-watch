'use client';

import { motion } from 'framer-motion';

interface WatchCardProps {
  watch: any;
  index: number;
  onClick: () => void;
}

export default function WatchCard({ watch, index, onClick }: WatchCardProps) {
  const imageUrl = watch.mainImage?.asset?._ref
    ? ''
    : watch.mainImage?.asset?.url || 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20watch%20black%20and%20gold%20premium%20watch%20isolated%20on%20black%20background&image_size=square_hd';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -12 }}
      className="group cursor-pointer relative"
      onClick={onClick}
    >
      <div className="glassmorphism rounded-2xl overflow-hidden hover-glow">
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none z-10" />

        {/* Image */}
        <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-b from-[#111] to-[#050505]">
          <img
            src={imageUrl}
            alt={watch.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick view button */}
          <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="w-full py-3 gold-gradient text-black font-inter font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Ətraflı bax
            </button>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6 text-center">
          <h3 className="font-cormorant text-xl md:text-2xl text-gold-primary mb-2 group-hover:text-cream transition-colors">
            {watch.title}
          </h3>
          <p className="font-inter text-cream/70">{watch.price}</p>
        </div>
      </div>
    </motion.div>
  );
}
