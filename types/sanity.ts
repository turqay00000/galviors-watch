export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface Watch {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  price: string;
  description: string;
  mainImage: SanityImage;
  isSold: boolean;
  categories?: Category[];
}
