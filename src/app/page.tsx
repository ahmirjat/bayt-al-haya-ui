import Image from "next/image";
import Link from "next/link";
import { PersonalizedHome } from "@/components/personalized-home";
import { ProductCard } from "@/components/product-card";
import { StoreIcon } from "@/components/store-icons";
import { products } from "@/data/products";
import { assetPath } from "@/lib/site-config";

const categories = [
  ["Abayas", "Flowing everyday silhouettes", assetPath("/images/abayas/classic-black-abaya.jpg")],
  ["Hijabs", "Soft finishing touches", assetPath("/images/abayas/soft-taupe-open-abaya.jpg")],
  ["Prayer Wear", "Comfort for quiet moments", assetPath("/images/abayas/mocha-lifestyle-banner.jpg")],
  ["Men's Essentials", "Thoughtful pieces for him", assetPath("/images/abaya-taupe.svg")],
  ["Children's Essentials", "Comfort for growing hearts", assetPath("/images/prayer-set.svg")],
  ["Everyday Modest Pieces", "Easy pieces for the family", assetPath("/images/abayas/embroidered-mocha-abaya.jpg")],
];

const benefits = [
  ["dress", "Modest by design", "Beautiful coverage with graceful movement."],
  ["delivery", "Family-focused vision", "Planned essentials for individuals, parents, and children."],
  ["shield", "Privacy-friendly browsing", "Optional local tracking stays under your control."],
  ["return", "Clear prototype labels", "Demo products and placeholders are easy to recognize."],
  ["fabric", "Quality fabric", "Soft, comfortable materials chosen to last."],
  ["sparkle", "Elegant details", "Refined finishes for everyday confidence."],
] as const;

export default function Home() {
  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-[#5e5049]">
        <Image src={assetPath("/images/abayas/mocha-lifestyle-banner.jpg")} alt="Woman wearing an elegant mocha abaya in a warm courtyard" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#463933]/90 via-[#55463e]/55 to-transparent" />
        <div className="container-page relative flex min-h-[720px] items-center py-16">
          <div className="max-w-2xl text-white">
            <p className="section-kicker">Modest essentials for individuals and families</p>
            <h1 className="mt-5 max-w-2xl text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-[5.5rem]">Faith-inspired modest wear for everyday grace</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Discover elegant abayas, hijabs, prayer wear, men&apos;s items, children&apos;s essentials, and everyday modest pieces designed for comfort, dignity, and timeless beauty.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link className="btn-primary border-white bg-white text-[#493d37] hover:bg-[#f2e8e1]" href="/products">Explore the Collection</Link><Link className="btn-secondary border-white bg-white/10 text-white hover:bg-white hover:text-[#493d37]" href="/about">Our Mission</Link></div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-[0.1em] text-white/75"><span>Quality fabrics</span><span>Modest silhouettes</span><span>Made for real life</span></div>
          </div>
        </div>
      </section>

      <PersonalizedHome />

      <section className="container-page py-20">
        <div className="text-center"><p className="section-kicker">Prototype previews</p><h2 className="mt-3 text-5xl font-semibold">The Family Collection</h2><p className="mx-auto mt-3 max-w-xl text-[#716c63]">Explore planned modest essentials for daily life, prayer, gatherings, and growing families.</p></div>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{products.slice(4, 7).map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="bg-[#eee3dc] py-20">
        <div className="container-page"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="section-kicker">Find your favorite</p><h2 className="mt-3 text-5xl font-semibold">Shop by Category</h2></div><p className="max-w-md text-sm leading-6 text-[#746963]">Simple pieces for daily wear and special moments, curated around the way you live.</p></div>
          <div data-testid="category-grid" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([name, text, image]) => <Link href="/products" key={name} className="group relative min-h-72 overflow-hidden rounded-3xl border border-white/60 bg-[#d8c5bb] p-6 shadow-[0_12px_30px_rgba(70,50,40,.06)]"><Image src={image} alt={`${name} prototype collection preview`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.015]" /><div className="absolute inset-0 bg-gradient-to-t from-[#3d322d]/80 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 text-white"><h3 className="text-3xl font-semibold">{name}</h3><p className="mt-1 text-sm text-white/85">{text}</p></div></Link>)}</div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="section-kicker">A growing collection</p><h2 className="mt-3 text-5xl font-semibold">Everyday Foundations</h2><p className="mt-4 max-w-sm leading-7 text-[#716c63]">Prototype pieces rooted in comfort, dignity, and grace for individuals and families.</p><Link href="/products" className="btn-secondary mt-7">Explore all pieces</Link></div><div className="grid gap-7 sm:grid-cols-2">{products.slice(0, 2).map((product) => <ProductCard key={product.slug} product={product} />)}</div></div>
      </section>

      <section className="bg-[#f4ece5] py-20">
        <div className="container-page text-center"><p className="section-kicker">Why Bayt al-Haya</p><h2 className="mt-3 text-5xl font-semibold">Confidence in every detail</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([icon, title, text]) => <div className="soft-card p-7 text-left" key={title}><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#efe0d6] text-[#765e52]"><StoreIcon name={icon} /></div><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#716c63]">{text}</p></div>)}</div></div>
      </section>

      <section className="container-page grid gap-8 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] bg-[#c8afa2]"><Image src={assetPath("/images/abayas/soft-taupe-open-abaya.jpg")} alt="Woman wearing a softly styled taupe abaya" width={1024} height={1280} className="h-full w-full object-cover object-top" /></div>
        <div className="flex flex-col justify-center rounded-[2rem] bg-[#796b64] p-9 text-white sm:p-14"><p className="section-kicker !text-[#ead2c7]">Our mission</p><h2 className="mt-3 text-5xl font-semibold">Comfort, dignity, and grace for every day</h2><p className="mt-5 max-w-lg leading-7 text-white/80">Our mission is to offer modest essentials that help individuals and families dress with comfort, dignity, and grace.</p><Link href="/about" className="btn-secondary mt-8 w-fit border-white text-white hover:bg-white hover:text-[#493d37]">Read our story</Link></div>
      </section>

      <section className="container-page rounded-[2rem] bg-[#eadbd1] px-6 py-14 text-center sm:px-12">
        <p className="section-kicker">A little note from Bayt al-Haya</p><h2 className="mt-3 text-4xl font-semibold">Join our modest living journal</h2><p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#716c63]">Receive prototype collection notes and thoughtful inspiration for everyday family life.</p><form className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"><input className="field flex-1" type="email" placeholder="Your email address" aria-label="Newsletter email" /><button type="button" className="btn-primary">Join the list</button></form><p className="mt-3 text-xs text-[#716c63]">Newsletter sign-up is a visual placeholder only.</p>
      </section>
    </>
  );
}
