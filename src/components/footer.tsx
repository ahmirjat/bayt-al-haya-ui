import Link from "next/link";
import { CookiePreferencesButton } from "@/components/privacy-actions";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#584b45] text-[#fffaf6]">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div><p className="font-serif text-3xl font-semibold">Bayt al-Haya</p><p className="mt-3 max-w-xs text-sm leading-6 text-[#ded1c8]">Faith-inspired modest essentials for individuals and families, rooted in comfort, dignity, and grace.</p><p className="mt-5 text-xs tracking-[.1em] text-[#dec2b5]">Canada · Pakistan · North America</p></div>
        <div><p className="font-bold">The collection</p><div className="mt-4 flex flex-col gap-2.5 text-sm text-[#ded1c8]"><Link href="/products">Shop all</Link><Link href="/products">New arrivals</Link><Link href="/products">Best sellers</Link><Link href="/order-tracking">Order Tracking</Link></div></div>
        <div><p className="font-bold">Bayt al-Haya</p><div className="mt-4 flex flex-col gap-2.5 text-sm text-[#ded1c8]"><Link href="/about">About Us</Link><Link href="/contact">Contact</Link><Link href="/feedback">Feedback</Link><Link href="/privacy">Privacy Notice</Link><CookiePreferencesButton /></div></div>
        <div><p className="font-bold">Connect</p><div className="mt-4 flex flex-col gap-2.5 text-sm text-[#ded1c8]"><span>Instagram <small className="text-[#bcaea5]">(coming soon)</small></span><span>WhatsApp <small className="text-[#bcaea5]">(coming soon)</small></span><span>hello@baytalhaya.example</span></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container-page flex flex-wrap justify-between gap-3 py-5 text-xs text-[#bcaea5]"><p>© 2026 Bayt al-Haya. Demo storefront.</p><p>Modest essentials for individuals and families.</p></div></div>
    </footer>
  );
}
