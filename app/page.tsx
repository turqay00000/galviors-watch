'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import MouseGlow from '@/components/MouseGlow';
import Hero from '@/components/Hero';
import WatchShowcase from '@/components/WatchShowcase';
import Features from '@/components/Features';
import LuxuryExperience from '@/components/LuxuryExperience';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WatchModal from '@/components/WatchModal';
import { client } from '@/sanity/lib/client';
import { WATCHES_QUERY } from '@/sanity/lib/queries';

// Fallback data if Sanity fails
const fallbackWatches = [
  {
    _id: '1',
    title: 'Aurora Gold',
    price: '12,500 AZN',
    description: 'Ən incə əllər tərəfindən əllə işlənmiş, saf qızıl detalları və müasir dizaynı ilə Aurora Gold, zamanda bir iz buraxacaq.',
    mainImage: {
      asset: {
        url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20watch%20black%20and%20gold%20premium%20watch%20isolated%20on%20black%20background&image_size=square_hd'
      }
    },
    isSold: false,
    slug: { current: 'aurora-gold' }
  },
  {
    _id: '2',
    title: 'Midnight Majesty',
    price: '18,900 AZN',
    description: 'Gecənin sönük gözəlliyini əks etdirən Midnight Majesty, hər bir detalı ilə zövqü nümayiş etdirir.',
    mainImage: {
      asset: {
        url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20luxury%20wrist%20watch%20black%20strap%20gold%20details%20cinematic&image_size=square_hd'
      }
    },
    isSold: false,
    slug: { current: 'midnight-majesty' }
  },
  {
    _id: '3',
    title: 'Imperial Chronos',
    price: '25,000 AZN',
    description: 'İmperator ləzzəti ilə hazırlanmış Imperial Chronos, saat sənətinin zirvəsidir.',
    mainImage: {
      asset: {
        url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high%20end%20luxury%20watch%20elegant%20gold%20accent%20dark%20background&image_size=square_hd'
      }
    },
    isSold: false,
    slug: { current: 'imperial-chronos' }
  },
  {
    _id: '4',
    title: 'Vintage Elegance',
    price: '15,200 AZN',
    description: 'Klassik incəlik və müasir texnologiyanın mükəmməl birləşməsi Vintage Elegance-da.',
    mainImage: {
      asset: {
        url: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=classic%20luxury%20watch%20gold%20case%20black%20dial%20premium&image_size=square_hd'
      }
    },
    isSold: false,
    slug: { current: 'vintage-elegance' }
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [watches, setWatches] = useState<any[]>(fallbackWatches);
  const [selectedWatch, setSelectedWatch] = useState<any>(null);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const data = await client.fetch(WATCHES_QUERY);
        if (data && data.length > 0) {
          setWatches(data);
        }
      } catch (error) {
        console.log('Using fallback data');
      } finally {
        setTimeout(() => setIsLoading(false), 3500);
      }
    };

    fetchWatches();
  }, []);

  return (
    <main className="min-h-screen">
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <MouseGlow />
          <Hero />
          <WatchShowcase watches={watches} onWatchClick={setSelectedWatch} />
          <Features />
          <LuxuryExperience />
          <Testimonials />
          <Footer />
          <WatchModal
            watch={selectedWatch}
            onClose={() => setSelectedWatch(null)}
          />
        </>
      )}
    </main>
  );
}
