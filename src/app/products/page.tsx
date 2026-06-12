import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function ProductsPage() {
  return <section className="container-page py-16"><p className="text-xs uppercase tracking-[0.24em] text-[#716c63]">Bayt al-Haya prototype collection</p><h1 className="mt-2 text-5xl font-semibold">Products</h1><p className="mt-3 max-w-2xl leading-7 text-[#716c63]">Explore demo abayas, hijabs, prayer wear, men&apos;s essentials, children&apos;s essentials, and everyday modest pieces planned for individuals and families. Products, prices, stock, and shopping actions are prototype previews only.</p><div data-testid="product-grid" className="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section>;
}
