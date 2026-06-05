'use client';

const phone = "051 733 36 81";
const tiktok = "galviors";
const address = "Gəncə";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 px-4 border-t border-gold-primary/10 bg-gradient-to-t from-black via-[#050505] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Top section with logo and tagline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-18 h-18 md:w-20 md:h-20 rounded-full border border-gold-primary/30 backdrop-blur-sm bg-black/30 mb-5 hover-glow">
            <span className="font-cormorant text-2xl md:text-3xl font-semibold text-gold-primary">GG</span>
          </div>
          <h2 className="font-cormorant text-xl md:text-2xl text-gold-primary mb-2">
            GALVIORS Ganja
          </h2>
          <p className="font-inter text-cream/60 text-sm">
            Stilini seç, zamanı idarə et
          </p>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-10" />

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-center mb-12">
          {/* Phone */}
          <div className="glassmorphism p-6 rounded-xl hover-glow">
            <div className="text-2xl mb-4">📞</div>
            <h3 className="font-inter text-gold-primary text-sm uppercase tracking-wide mb-2">Telefon</h3>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-inter text-cream hover:text-gold-primary transition-colors">
              {phone}
            </a>
          </div>

          {/* TikTok */}
          <div className="glassmorphism p-6 rounded-xl hover-glow">
            <div className="text-2xl mb-4">🎵</div>
            <h3 className="font-inter text-gold-primary text-sm uppercase tracking-wide mb-2">TikTok</h3>
            <a href={`https://tiktok.com/@${tiktok}`} target="_blank" rel="noopener noreferrer" className="font-inter text-cream hover:text-gold-primary transition-colors">
              @{tiktok}
            </a>
          </div>

          {/* Address */}
          <div className="glassmorphism p-6 rounded-xl hover-glow">
            <div className="text-2xl mb-4">📍</div>
            <h3 className="font-inter text-gold-primary text-sm uppercase tracking-wide mb-2">Ünvan</h3>
            <p className="font-inter text-cream">
              {address}
            </p>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="text-center">
          <div className="gold-divider mb-6 mx-auto max-w-md" />
          <p className="font-inter text-cream/50 text-xs">
            © {currentYear} GALVIORS Ganja. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
}
