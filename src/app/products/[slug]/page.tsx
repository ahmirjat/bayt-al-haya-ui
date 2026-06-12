import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductBehavior } from "@/components/behavior-actions";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.15fr_.85fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#eee5dc] sm:col-span-2">
          <Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-top" />
        </div>
        {product.secondaryImage && <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-[#eee5dc] sm:col-span-2"><Image src={product.secondaryImage} alt={`${product.name} styled in a warm lifestyle setting`} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>}
      </div>
      <div className="lg:sticky lg:top-36 lg:self-start lg:py-8">
        <Link href="/products" className="text-sm text-[#716c63] underline">Back to products</Link>
        <p className="section-kicker mt-8">{product.badge} · {product.category}</p>
        <h1 className="mt-2 text-5xl font-semibold">{product.name}</h1>
        <p className="mt-4 w-fit rounded-full bg-[#efe0d6] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#765e52]">{product.prototypeLabel}</p>
        <p className="mt-4 text-lg font-bold">${product.price.toFixed(2)} CAD</p>
        <div className="mt-5 flex flex-wrap gap-5 text-sm text-[#716c63]"><span>Color: {product.colorName}</span><span>Sizes: {product.sizes}</span></div>
        <p className="mt-7 leading-7 text-[#5f5a52]">{product.description}</p>
        <p className="mt-3 leading-7 text-[#5f5a52]">{product.details}</p>
        <ProductBehavior slug={product.slug} category={product.category} />
        <div className="mt-8 grid gap-3 rounded-2xl bg-[#f5eee8] p-5 text-sm text-[#716c63]"><p><strong className="text-[#493d37]">Prototype preview:</strong> This demo product represents the planned Bayt al-Haya family collection.</p><p><strong className="text-[#493d37]">Please note:</strong> Stock, shipping, cart, and checkout functionality are placeholders for now.</p></div>
      </div>
    </section>
  );
}
