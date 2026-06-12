export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string;
  colors: [string, string];
  image: string;
  secondaryImage?: string;
  imageAlt: string;
  colorName: string;
  sizes: string;
  badge: string;
};

export const products: Product[] = [
  { slug: "classic-black-abaya", name: "Classic Black Abaya", category: "Abayas", price: 89, description: "A timeless, flowing abaya for effortless everyday elegance.", details: "Cut from soft nidha fabric with a relaxed silhouette and discreet side pockets.", colors: ["#55504a", "#171717"], image: assetPath("/images/abayas/classic-black-abaya.jpg"), secondaryImage: assetPath("/images/abayas/mocha-lifestyle-banner.jpg"), imageAlt: "Woman wearing a flowing classic black abaya in a warm arched setting", colorName: "Midnight Black", sizes: "52-60", badge: "Best Seller" },
  { slug: "everyday-nidha-abaya", name: "Everyday Nidha Abaya", category: "Abayas", price: 95, description: "A comfortable essential designed for calm, polished days.", details: "Lightweight nidha fabric, cuffed sleeves, and a simple closed front.", colors: ["#b0a594", "#70675b"], image: assetPath("/images/abayas/soft-taupe-open-abaya.jpg"), imageAlt: "Woman wearing a soft taupe open abaya in a calm neutral interior", colorName: "Warm Taupe", sizes: "52-60", badge: "Everyday Pick" },
  { slug: "open-front-kimono-abaya", name: "Open Front Kimono Abaya", category: "Abayas", price: 105, description: "A versatile layer with graceful movement and a modern finish.", details: "Open-front cut with wide sleeves and a matching removable waist tie.", colors: ["#c9b9a6", "#8c7765"], image: assetPath("/images/abayas/soft-taupe-open-abaya.jpg"), secondaryImage: assetPath("/images/abayas/mocha-lifestyle-banner.jpg"), imageAlt: "Woman styling an elegant open-front taupe abaya", colorName: "Soft Sand", sizes: "52-60", badge: "New" },
  { slug: "embroidered-occasion-abaya", name: "Embroidered Occasion Abaya", category: "Occasion", price: 139, description: "Subtle embroidery brings a refined touch to special occasions.", details: "Fine tonal embroidery at the cuffs and front, finished with pearl buttons.", colors: ["#ad9c91", "#685e59"], image: assetPath("/images/abayas/embroidered-mocha-abaya.jpg"), secondaryImage: assetPath("/images/abayas/mocha-lifestyle-banner.jpg"), imageAlt: "Woman wearing an embroidered mocha occasion abaya in warm sunlight", colorName: "Mocha", sizes: "54-60", badge: "Popular" },
  { slug: "prayer-khimar-set", name: "Prayer Khimar Set", category: "Prayer", price: 75, description: "A soft two-piece set created for comfort, coverage, and ease.", details: "Includes a long khimar and matching skirt in breathable, opaque fabric.", colors: ["#a6afa0", "#697466"], image: assetPath("/images/abayas/mocha-lifestyle-banner.jpg"), imageAlt: "Woman in a modest flowing mocha outfit in a peaceful courtyard", colorName: "Warm Mocha", sizes: "One Size", badge: "Comfort Pick" },
  { slug: "chiffon-hijab", name: "Chiffon Hijab", category: "Hijabs", price: 22, description: "An airy chiffon hijab with an elegant drape and soft texture.", details: "Generously sized lightweight chiffon with neatly finished edges.", colors: ["#d8c9bd", "#a88f80"], image: assetPath("/images/abayas/soft-taupe-open-abaya.jpg"), imageAlt: "Woman wearing an elegantly draped taupe chiffon hijab", colorName: "Rose Sand", sizes: "One Size", badge: "New" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
import { assetPath } from "@/lib/site-config";
