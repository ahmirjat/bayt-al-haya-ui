import { FutureAccessSettings } from "@/components/future-access-settings";

export default function PrivacyPage() {
  return (
    <section className="container-page max-w-3xl py-16">
      <p className="text-xs uppercase tracking-[0.24em] text-[#716c63]">Plain-language notice</p>
      <h1 className="mt-2 text-5xl font-semibold">Privacy Notice</h1>
      <div className="mt-8 space-y-7 leading-7 text-[#5f5a52]">
        <div><h2 className="text-3xl font-semibold text-[#292620]">Local storage</h2><p className="mt-2">Bayt al-Haya uses local storage in your browser for essential preferences and your privacy choices. Optional local storage may remember recently viewed products, favorite categories, page visits, clicks, your last page, and visit counts only after you agree.</p></div>
        <div><h2 className="text-3xl font-semibold text-[#292620]">Your choice</h2><p className="mt-2">Personalization and analytics are optional. You can reject them on first visit or reopen Cookie Preferences in the footer at any time. Rejecting optional tracking removes locally remembered behavior.</p></div>
        <div><h2 className="text-3xl font-semibold text-[#292620]">What we do not collect</h2><p className="mt-2">There is no payment, login, database, third-party analytics, advertising tracker, IP lookup, or cloud behavior tracking in this MVP. We do not sell or share local behavior data. Full IP addresses are not stored in the browser.</p></div>
        <div><h2 className="text-3xl font-semibold text-[#292620]">Clear or reset data</h2><p className="mt-2">Use Cookie Preferences in the footer, then select Reset local tracking data. You can also clear this site&apos;s local storage using your browser settings.</p></div>
        <div><h2 className="text-3xl font-semibold text-[#292620]">Future location and security support</h2><p className="mt-2">If location support is added later, it should be handled server-side, prefer country or region only, avoid exposing full IP addresses, and use shortened or hashed IP values only where security logs clearly require them.</p></div>
      </div>
      <FutureAccessSettings />
    </section>
  );
}
