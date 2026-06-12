import { isPublicPreview } from "@/lib/site-config";

export function DemoBanner() {
  if (!isPublicPreview) return null;
  return <div className="bg-[#8a7469] px-4 py-2.5 text-center text-xs font-bold tracking-[0.06em] text-white" data-testid="demo-banner">Demo website for UI testing only. No real orders are accepted.</div>;
}
