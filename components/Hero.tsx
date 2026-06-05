'use client';

import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo/GG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-10"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-gold-primary/40 backdrop-blur-sm bg-black/30 mb-6 hover-glow">
            <span className="font-cormorant text-3xl md:text-4xl font-semibold text-gold-primary">GG</span>
          </div>
          <p className="font-inter text-cream/70 text-sm tracking-wide">GALVIORS Ganja</p>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="mb-6"
        >
          <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-semibold gold-gradient-text mb-4">
            Premium Saatlar
          </h1>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="gold-divider-thick" />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="font-inter text-lg md:text-xl text-cream/80">
            Zamanın dəyərini bilənlərə
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: 'easeOut' }}
        >
          <a href="#collection">
            <button className="group px-10 md:px-14 py-4 gold-gradient text-black font-inter font-medium text-base md:text-lg rounded-full hover:scale-105 transition-all duration-300 hover-glow">
              <span className="relative z-10">Kolleksiyaya bax</span>
            </button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-12 border border-gold-primary/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-gold-primary rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
