"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { usePrivacy } from "@/components/privacy-provider";
import { products } from "@/data/products";

export function PersonalizedHome() {
  const { consent, behavior } = usePrivacy();
  if (!consent?.personalization) return null;

  const recent = behavior.recentlyViewed.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean);
  const favorite = Object.entries(behavior.categoryViews).sort((a, b) => b[1] - a[1])[0]?.[0];
  const isReturning = behavior.visits > 1 || Boolean(behavior.lastVisitedPage);

  return (
    <section className="container-page pt-14" data-testid="personalization-area">
      {isReturning && <h2 className="text-4xl font-semibold">Welcome back to Bayt al-Haya</h2>}
      {behavior.lastVisitedPage && behavior.lastVisitedPage !== "/" && <p className="mt-2 text-[#716c63]">Continue where you left off: <Link className="underline" href={behavior.lastVisitedPage}>open your last page</Link>.</p>}
      {behavior.orderTrackingVisited && <p className="mt-3 bg-[#f1e9de] p-4">Need to check an order? Tracking will be available soon.</p>}
      {favorite === "Abayas" && <p className="mt-3 bg-[#f1e9de] p-4">You seem to love elegant abayas.</p>}
      {recent.length > 0 && <><h3 className="mt-12 text-3xl font-semibold">Recently viewed</h3><div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{recent.map((product) => product && <ProductCard key={product.slug} product={product} />)}</div></>}
    </section>
  );
}
