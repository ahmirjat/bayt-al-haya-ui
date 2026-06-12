import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { CategoryTrackingLink } from "@/components/behavior-actions";
import { ProductBehavior } from "@/components/behavior-actions";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-[#eadfd5] bg-[#fffdfa] shadow-[0_12px_35px_rgba(70,50,40,.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(70,50,40,.09)]">
      <CategoryTrackingLink category={product.category}><Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`} className="relative block aspect-[4/5] overflow-hidden bg-[#eee5dc]">
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.015]" />
        <span className="absolute left-4 top-4 rounded-full bg-[#fffdf9]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]">{product.badge}</span>
      </Link></CategoryTrackingLink>
      <div className="p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#967768]">{product.category}</p>
        <Link href={`/products/${product.slug}`}><h3 className="mt-1 text-2xl font-semibold leading-tight">{product.name}</h3></Link>
        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-[#716c63]"><span className="flex items-center gap-1.5"><i className="h-3 w-3 rounded-full border border-black/10" style={{ background: product.colors[0] }} />{product.colorName}</span><span>Sizes {product.sizes}</span></div>
        <div className="mt-5 flex items-center justify-between gap-3"><p className="font-bold">${product.price.toFixed(2)} CAD</p><ProductBehavior slug={product.slug} category={product.category} compact trackView={false} /></div>
      </div>
    </article>
  );
}
