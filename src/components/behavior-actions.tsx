"use client";

import { useEffect } from "react";
import { usePrivacy } from "@/components/privacy-provider";

export function ProductBehavior({ slug, category, compact = false, trackView = true }: { slug: string; category: string; compact?: boolean; trackView?: boolean }) {
  const { trackEvent, trackProduct } = usePrivacy();

  useEffect(() => {
    if (trackView) trackProduct(slug, category);
  }, [slug, category, trackProduct, trackView]);

  return <button className={compact ? "rounded-full border border-[#292620] px-3 py-2 text-xs font-bold hover:bg-[#292620] hover:text-white" : "btn-primary mt-9"} type="button" onClick={() => trackEvent("add_to_cart_clicked", slug)}>Add to cart</button>;
}

export function CategoryTrackingLink({ category, children }: { category: string; children: React.ReactNode }) {
  const { trackEvent } = usePrivacy();
  return <span onClick={() => trackEvent("category_clicked", category)}>{children}</span>;
}
