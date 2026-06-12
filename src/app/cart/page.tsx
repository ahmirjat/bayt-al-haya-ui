import Link from "next/link";

export default function CartPage() {
  return <section className="container-page py-16"><h1 className="text-5xl font-semibold">Cart</h1><div className="mt-10 border border-[#e5ddd2] bg-[#f8f4ed] p-10 text-center"><h2 className="text-3xl font-semibold">Your cart is empty</h2><p className="mt-3 text-[#716c63]">Cart and checkout functionality will be added later.</p><Link className="btn-primary mt-7" href="/products">Browse products</Link></div></section>;
}
