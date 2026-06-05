'use client';

import { motion, AnimatePresence } from 'framer-motion';

const whatsappNumber = "994517333681";

interface WatchModalProps {
  watch: any | null;
  onClose: () => void;
}

export default function WatchModal({ watch, onClose }: WatchModalProps) {
  if (!watch) return null;

  const imageUrl = watch.mainImage?.asset?._ref
    ? ''
    : watch.mainImage?.asset?.url || 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20watch%20black%20and%20gold%20premium%20watch%20isolated%20on%20black%20background&image_size=square_hd';

  const whatsappMessage = encodeURIComponent(
    `Salam! ${watch.title} model saatı haqqında məlumat almaq istəyirəm. (${watch.price})`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/92 backdrop-blur-md"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative glassmorphism-dark rounded-2xl max-w-4xl w-full overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300 border border-gold-primary/20"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-auto bg-gradient-to-b from-[#111] to-black">
              <img
                src={imageUrl}
                alt={watch.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Title and price */}
                <h2 className="font-cormorant text-3xl md:text-4xl text-cream mb-3">
                  {watch.title}
                </h2>
                <p className="font-inter text-2xl md:text-3xl text-gold-primary mb-6">
                  {watch.price}
                </p>

                {/* Description */}
                <p className="font-inter text-cream/80 leading-relaxed mb-8">
                  {watch.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 mb-10">
                  <div className="flex items-center gap-3 text-cream/70 font-inter">
                    <span className="text-gold-primary text-lg">✓</span>
                    <span>Premium keyfiyyət</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream/70 font-inter">
                    <span className="text-gold-primary text-lg">✓</span>
                    <span>Sürətli çatdırılma</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream/70 font-inter">
                    <span className="text-gold-primary text-lg">✓</span>
                    <span>Etibarlı xidmət</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm mx-auto py-4 gold-gradient text-black font-inter font-semibold text-base rounded-xl hover:opacity-90 transition-opacity hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              >
                WhatsApp ilə sifariş et
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
