import {groq} from 'next-sanity';

export const WATCHES_QUERY = groq`*[_type == "watch" && !isSold] | order(_createdAt desc) {
  _id,
  title,
  slug,
  price,
  description,
  mainImage,
  categories[]-> {
    _id,
    title,
    slug
  }
}`;

export const WATCH_BY_SLUG_QUERY = groq`*[_type == "watch" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  price,
  description,
  mainImage,
  isSold,
  categories[]-> {
    _id,
    title,
    slug
  }
}`;

export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;
