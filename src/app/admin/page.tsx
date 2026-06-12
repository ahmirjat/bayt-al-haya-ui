import { adminApiUrl, isPublicPreview } from "@/lib/site-config";

const demoCards = [
  ["Products", "6 fake catalog items"],
  ["Orders", "3 fake demo orders"],
  ["Activity", "Canada, USA, and Pakistan demo regions"],
];

export default function AdminPage() {
  return (
    <section className="container-page max-w-4xl py-16">
      <p className="section-kicker">Safe demo boundary</p>
      <h1 className="mt-3 text-5xl font-semibold">Admin Demo</h1>
      {isPublicPreview ? (
        <div className="soft-card mt-8 p-8" data-testid="admin-public-safe">
          <h2 className="text-3xl font-semibold">Admin demo is disabled on public preview.</h2>
          <p className="mt-3 leading-7 text-[#716c63]">This static GitHub Pages website does not call a laptop API, expose customer information, or include private admin credentials.</p>
        </div>
      ) : (
        <>
          <p className="mt-4 leading-7 text-[#716c63]">Local-only fake admin overview. No API request is made by this page yet.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">{demoCards.map(([title, text]) => <div className="soft-card p-6" key={title}><h2 className="text-3xl font-semibold">{title}</h2><p className="mt-2 text-sm text-[#716c63]">{text}</p></div>)}</div>
          <p className="mt-6 rounded-xl bg-[#f5eee8] p-4 text-sm text-[#716c63]">Future local demo API: <code>{adminApiUrl}</code>. Real admin access will require login, roles, audit logs, permissions, and server-side secrets.</p>
        </>
      )}
    </section>
  );
}
