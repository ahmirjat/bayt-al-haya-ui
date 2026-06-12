import Image from "next/image";
import { StoreIcon } from "@/components/store-icons";
import { assetPath } from "@/lib/site-config";

const values = [
  ["dress", "Modesty with elegance", "We believe coverage and beauty belong naturally together."],
  ["fabric", "Comfort for everyday life", "Soft fabrics and relaxed silhouettes made for real days."],
  ["sparkle", "Thoughtful simplicity", "Quiet details that make each piece feel special, never excessive."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#efe4da]">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div><p className="section-kicker">The heart behind Bayt al-Haya</p><h1 className="mt-3 text-3xl font-semibold">About Us</h1><h2 className="mt-3 text-6xl font-semibold leading-[.95]">Faith-inspired style, thoughtfully chosen for everyday dignity.</h2><div data-testid="brand-story" className="mt-7 max-w-xl space-y-5 leading-8 text-[#5f5a52]"><p>Bayt al-Haya began with a simple idea: modest clothing should feel graceful, comfortable, and easy to wear every day.</p><p>Our collection brings together abayas, hijabs, prayer wear, timeless silhouettes, and thoughtful details to help women dress with quiet confidence.</p></div></div>
          <Image src={assetPath("/images/abayas/soft-taupe-open-abaya.jpg")} alt="Woman smiling gently while wearing a warm taupe abaya" width={1024} height={1280} className="mx-auto max-h-[620px] w-full rounded-[3rem_3rem_10rem_3rem] object-cover object-top shadow-2xl" />
        </div>
      </section>
      <section className="container-page py-20"><div className="text-center"><p className="section-kicker">What guides us</p><h2 className="mt-3 text-5xl font-semibold">Our values</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{values.map(([icon, title, text]) => <article className="soft-card p-8" key={title}><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#efe0d6] text-[#765e52]"><StoreIcon name={icon} /></div><h3 className="mt-5 text-3xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#716c63]">{text}</p></article>)}</div></section>
      <section className="container-page grid gap-8 rounded-[2rem] bg-[#75665f] p-8 text-white sm:p-14 lg:grid-cols-2"><div><p className="section-kicker !text-[#ead0c3]">Our story is growing</p><h2 className="mt-3 text-5xl font-semibold">Made to meet you in everyday moments</h2></div><div className="flex items-center"><p className="leading-8 text-white/80">From a calm morning to an important gathering, Bayt al-Haya offers modest essentials that feel considered and comfortable. This website is the beginning of our story, and the collection will grow gradually with our community.</p></div></section>
    </>
  );
}
