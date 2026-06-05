import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { WATCH_BY_SLUG_QUERY, WATCHES_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Watch } from '@/types/sanity';
import { WHATSAPP_NUMBER } from '@/constants/data';

export const dynamic = 'force-static';
export const revalidate = 60;

export async function generateStaticParams() {
  const watches: Watch[] = await client.fetch(WATCHES_QUERY);
  return watches.map((watch) => ({
    slug: watch.slug.current,
  }));
}

export default async function WatchPage({ params }: { params: { slug: string } }) {
  const watch: Watch = await client.fetch(WATCH_BY_SLUG_QUERY, {
    slug: params.slug,
  });

  if (!watch) {
    return (
      <div className="min-h-screen bg-black-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-3xl text-gold-primary mb-4">Saat tapılmadı</h1>
          <Link href="/" className="font-inter text-cream hover:text-gold-primary transition-colors">
            Ana səhifəyə qayıt
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Salam! ${watch.title} model saatı haqqında məlumat almaq istəyirəm. (${watch.price})`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-black-primary py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Link href="/" className="font-inter text-cream/70 hover:text-gold-primary transition-colors mb-8 inline-flex items-center gap-2">
          <span>←</span>
          <span>Ana səhifəyə qayıt</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[600px]">
            <Image
              src={watch.mainImage.asset ? urlFor(watch.mainImage).width(1200).height(1500).url() : 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20watch%20black%20and%20gold%20premium%20watch%20isolated%20on%20black%20background&image_size=square_hd'}
              alt={watch.title}
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {watch.isSold && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-playfair">
                SATILDI
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-4">
                {watch.title}
              </h1>
              <p className="font-playfair text-2xl md:text-3xl text-gold-primary mb-6">
                {watch.price}
              </p>
            </div>

            <p className="font-inter text-cream/80 text-lg leading-relaxed">
              {watch.description}
            </p>

            {!watch.isSold && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto py-4 px-12 gold-gradient text-black-primary font-playfair text-lg font-semibold tracking-wider hover:opacity-90 transition-opacity"
              >
                WhatsApp ilə sifariş et
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
