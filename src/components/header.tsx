import Link from "next/link";

const links = [["Home", "/"], ["Products", "/products"], ["About Us", "/about"], ["Contact", "/contact"], ["Feedback", "/feedback"], ["Cart", "/cart"], ["Order Tracking", "/order-tracking"]];

export function Header() {
  return (
    <>
      <div className="bg-[#6d5b53] px-4 py-2.5 text-center text-[11px] tracking-[0.12em] text-[#fffaf6]">A family-focused prototype collection · No real orders or shipping</div>
      <header className="sticky top-0 z-30 border-b border-[#e5ddd2]/80 bg-[#fffdf9]/95 backdrop-blur">
        <div className="container-page flex flex-col items-center gap-4 py-4 lg:flex-row lg:justify-between">
          <Link href="/" className="group text-center font-serif text-3xl font-semibold tracking-wide text-[#493d37]" data-testid="brand-link">Bayt al-Haya<span className="block font-sans text-[8px] font-bold tracking-[0.3em] text-[#a18478]">MODEST ESSENTIALS FOR FAMILY LIFE</span></Link>
          <nav aria-label="Main navigation" data-testid="main-navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-[0.04em]">
              {links.map(([label, href]) => <li key={href}><Link className="border-b border-transparent pb-1 hover:border-[#9b7b6b] hover:text-[#9b7b6b]" href={href}>{label}</Link></li>)}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
