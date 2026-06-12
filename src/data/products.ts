import { assetPath } from "@/lib/site-config";

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
  prototypeLabel: "Demo Product" | "Prototype Preview" | "Coming Soon";
};

export const products: Product[] = [
  { slug: "classic-black-abaya", name: "Classic Black Abaya", category: "Abayas", price: 89, description: "A timeless, flowing abaya for effortless everyday elegance.", details: "Prototype concept with a relaxed silhouette and discreet side pockets.", colors: ["#55504a", "#171717"], image: assetPath("/images/abayas/classic-black-abaya.jpg"), secondaryImage: assetPath("/images/abayas/mocha-lifestyle-banner.jpg"), imageAlt: "Model wearing a flowing classic black abaya in a warm arched setting", colorName: "Midnight Black", sizes: "52-60", badge: "Everyday Pick", prototypeLabel: "Demo Product" },
  { slug: "everyday-nidha-abaya", name: "Everyday Nidha Abaya", category: "Abayas", price: 95, description: "A comfortable essential designed for calm, polished days.", details: "Prototype concept with lightweight fabric, cuffed sleeves, and a simple closed front.", colors: ["#b0a594", "#70675b"], image: assetPath("/images/abayas/soft-taupe-open-abaya.jpg"), imageAlt: "Model wearing a soft taupe open abaya in a calm neutral interior", colorName: "Warm Taupe", sizes: "52-60", badge: "Prototype Preview", prototypeLabel: "Prototype Preview" },
  { slug: "soft-chiffon-hijab", name: "Soft Chiffon Hijab", category: "Hijabs", price: 22, description: "An airy hijab concept with an elegant drape and soft texture.", details: "A generously sized lightweight chiffon concept with neatly finished edges.", colors: ["#d8c9bd", "#a88f80"], image: assetPath("/images/abayas/soft-taupe-open-abaya.jpg"), imageAlt: "Model wearing an elegantly draped taupe chiffon hijab", colorName: "Rose Sand", sizes: "One Size", badge: "Demo Product", prototypeLabel: "Demo Product" },
  { slug: "prayer-khimar-set", name: "Prayer Khimar Set", category: "Prayer Wear", price: 75, description: "A soft two-piece concept created for comfort, coverage, and ease.", details: "Prototype preview of a long khimar and matching skirt in a breathable, opaque fabric.", colors: ["#a6afa0", "#697466"], image: assetPath("/images/prayer-set.svg"), imageAlt: "Illustrated placeholder for a flowing prayer khimar set", colorName: "Warm Mocha", sizes: "One Size", badge: "Coming Soon", prototypeLabel: "Coming Soon" },
  { slug: "mens-modest-thobe", name: "Men's Modest Thobe", category: "Men's Essentials", price: 85, description: "A clean, comfortable thobe concept for prayer, gatherings, and everyday wear.", details: "Prototype preview with a relaxed fit, understated collar, and practical side pockets.", colors: ["#c9b9a6", "#75665f"], image: assetPath("/images/abaya-taupe.svg"), imageAlt: "Neutral illustrated placeholder for the men's modest thobe prototype", colorName: "Warm Stone", sizes: "S-XXL", badge: "Coming Soon", prototypeLabel: "Coming Soon" },
  { slug: "mens-prayer-cap", name: "Men's Prayer Cap", category: "Men's Essentials", price: 18, description: "A simple prayer cap concept designed for a comfortable everyday fit.", details: "Prototype preview with a soft neutral finish and understated stitched detail.", colors: ["#eee3dc", "#9a887c"], image: assetPath("/images/abaya-rose.svg"), imageAlt: "Soft neutral illustrated placeholder for the men's prayer cap prototype", colorName: "Soft Cream", sizes: "S-L", badge: "Demo Product", prototypeLabel: "Demo Product" },
  { slug: "childrens-prayer-outfit", name: "Children's Prayer Outfit", category: "Children's Essentials", price: 48, description: "A gentle prayer outfit concept made to help little ones feel comfortable and included.", details: "Prototype preview with easy coverage, soft fabric, and a simple pull-on design.", colors: ["#d8c9bd", "#a88f80"], image: assetPath("/images/prayer-set.svg"), imageAlt: "Illustrated placeholder for the children's prayer outfit prototype", colorName: "Rose Sand", sizes: "4-12", badge: "Coming Soon", prototypeLabel: "Coming Soon" },
  { slug: "childrens-modest-set", name: "Children's Modest Set", category: "Children's Essentials", price: 55, description: "An easy layered set concept for school days, family visits, and celebrations.", details: "Prototype preview featuring a relaxed tunic and coordinating comfortable trousers.", colors: ["#b0a594", "#70675b"], image: assetPath("/images/abaya-taupe.svg"), imageAlt: "Warm taupe illustrated placeholder for the children's modest set prototype", colorName: "Warm Taupe", sizes: "4-12", badge: "Prototype Preview", prototypeLabel: "Prototype Preview" },
  { slug: "everyday-modest-tunic", name: "Everyday Modest Tunic", category: "Everyday Modest Pieces", price: 62, description: "A versatile longline tunic concept for comfortable, polished layering.", details: "Prototype preview with an easy fit, side slits, and a softly structured finish.", colors: ["#ad9c91", "#685e59"], image: assetPath("/images/abayas/embroidered-mocha-abaya.jpg"), imageAlt: "Warm lifestyle visual representing the everyday modest tunic prototype", colorName: "Soft Mocha", sizes: "S-XXL", badge: "Demo Product", prototypeLabel: "Demo Product" },
  { slug: "modest-gift-set", name: "Modest Gift Set", category: "Everyday Modest Pieces", price: 45, description: "A thoughtful gift concept with simple modest essentials for meaningful moments.", details: "Prototype preview of a coordinated scarf, prayer accessory, and keepsake pouch.", colors: ["#c9b9a6", "#8c7765"], image: assetPath("/images/abaya-occasion.svg"), imageAlt: "Elegant neutral illustrated placeholder for the modest gift set prototype", colorName: "Soft Sand", sizes: "One Size", badge: "Coming Soon", prototypeLabel: "Coming Soon" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
