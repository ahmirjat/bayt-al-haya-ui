"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const CONSENT_KEY = "bayt_al_haya_consent";
export const BEHAVIOR_KEY = "bayt_al_haya_behavior";
const CONSENT_VERSION = 1;

type Consent = {
  version: number;
  timestamp: string;
  essential: true;
  personalization: boolean;
  analytics: boolean;
};

type Behavior = {
  events: { name: string; path: string; timestamp: string; detail?: string }[];
  recentlyViewed: string[];
  categoryViews: Record<string, number>;
  lastVisitedPage?: string;
  visits: number;
  orderTrackingVisited: boolean;
};

type PrivacyContextValue = {
  consent: Consent | null;
  behavior: Behavior;
  openPreferences: () => void;
  trackEvent: (name: string, detail?: string) => void;
  trackProduct: (slug: string, category: string) => void;
};

const emptyBehavior: Behavior = {
  events: [],
  recentlyViewed: [],
  categoryViews: {},
  visits: 0,
  orderTrackingVisited: false,
};

const PrivacyContext = createContext<PrivacyContextValue | null>(null);

function readLocal<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function PrivacyProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent | null>(null);
  const [behavior, setBehavior] = useState<Behavior>(emptyBehavior);
  const [ready, setReady] = useState(false);
  const [managerOpen, setManagerOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [personalization, setPersonalization] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedConsent = readLocal<Consent | null>(CONSENT_KEY, null);
      setConsent(savedConsent);
      setPersonalization(savedConsent?.personalization ?? false);
      setAnalytics(savedConsent?.analytics ?? false);
      if (savedConsent?.personalization || savedConsent?.analytics) {
        setBehavior(readLocal(BEHAVIOR_KEY, emptyBehavior));
      }
      setManagerOpen(!savedConsent);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const updateBehavior = useCallback((update: (current: Behavior) => Behavior) => {
    setBehavior((current) => {
      const next = update(current);
      localStorage.setItem(BEHAVIOR_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const trackEvent = useCallback((name: string, detail?: string) => {
    if (!consent?.analytics) return;
    updateBehavior((current) => ({
      ...current,
      events: [...current.events, { name, path: window.location.pathname, timestamp: new Date().toISOString(), detail }].slice(-100),
    }));
  }, [consent?.analytics, updateBehavior]);

  const trackProduct = useCallback((slug: string, category: string) => {
    if (!consent?.personalization) return;
    updateBehavior((current) => ({
      ...current,
      recentlyViewed: [slug, ...current.recentlyViewed.filter((item) => item !== slug)].slice(0, 4),
      categoryViews: { ...current.categoryViews, [category]: (current.categoryViews[category] ?? 0) + 1 },
    }));
    trackEvent("product_viewed", slug);
  }, [consent?.personalization, trackEvent, updateBehavior]);

  useEffect(() => {
    if (!ready || (!consent?.personalization && !consent?.analytics)) return;
    const timer = window.setTimeout(() => {
      updateBehavior((current) => ({
        ...current,
        lastVisitedPage: consent.personalization ? pathname : current.lastVisitedPage,
        visits: consent.analytics ? current.visits + 1 : current.visits,
        orderTrackingVisited: consent.personalization && pathname === "/order-tracking" ? true : current.orderTrackingVisited,
        events: consent.analytics
          ? [
              ...current.events,
              { name: "page_visited", path: pathname, timestamp: new Date().toISOString() },
              ...(pathname === "/order-tracking" ? [{ name: "order_tracking_opened", path: pathname, timestamp: new Date().toISOString() }] : []),
              ...(pathname === "/contact" ? [{ name: "contact_page_opened", path: pathname, timestamp: new Date().toISOString() }] : []),
            ].slice(-100)
          : current.events,
      }));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [pathname, ready, consent, updateBehavior]);

  function saveConsent(nextPersonalization: boolean, nextAnalytics: boolean) {
    const next: Consent = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      essential: true,
      personalization: nextPersonalization,
      analytics: nextAnalytics,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    if (!nextPersonalization && !nextAnalytics) {
      localStorage.removeItem(BEHAVIOR_KEY);
      setBehavior(emptyBehavior);
    }
    setConsent(next);
    setPersonalization(nextPersonalization);
    setAnalytics(nextAnalytics);
    setManagerOpen(false);
    setShowDetails(false);
  }

  function resetBehavior() {
    localStorage.removeItem(BEHAVIOR_KEY);
    setBehavior(emptyBehavior);
  }

  return (
    <PrivacyContext.Provider value={{ consent, behavior, openPreferences: () => { setShowDetails(true); setManagerOpen(true); }, trackEvent, trackProduct }}>
      {children}
      {ready && managerOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/35 p-3 sm:items-center sm:justify-center" data-testid="consent-manager">
          <section className="max-h-[92vh] w-full max-w-2xl overflow-auto bg-[#fffdf9] p-6 shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
            <h2 id="privacy-title" className="text-3xl font-semibold">Your privacy choices</h2>
            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">We use essential cookies/local storage to make this website work. With your permission, we may also remember simple browsing activity, such as viewed products and categories, to improve your shopping experience. You can accept, reject, or manage your choices.</p>

            {showDetails && <div className="mt-6 grid gap-3" data-testid="preference-options">
              <div className="border border-[#e5ddd2] p-4"><div className="flex justify-between gap-4"><strong>Essential</strong><span className="text-sm text-[#5f5a52]">Always on</span></div><p className="mt-1 text-sm text-[#716c63]">Needed for cart, local preferences, and basic website function.</p></div>
              <label className="flex gap-3 border border-[#e5ddd2] p-4"><input data-testid="personalization-choice" type="checkbox" checked={personalization} onChange={(event) => setPersonalization(event.target.checked)} /><span><strong>Personalization</strong><span className="mt-1 block text-sm text-[#716c63]">Recently viewed products, favorite category, and welcome back messages.</span></span></label>
              <label className="flex gap-3 border border-[#e5ddd2] p-4"><input data-testid="analytics-choice" type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /><span><strong>Analytics</strong><span className="mt-1 block text-sm text-[#716c63]">Simple local page visit and click counts. No third-party services.</span></span></label>
            </div>}

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn-primary" data-testid="accept-all" onClick={() => saveConsent(true, true)}>Accept all</button>
              <button className="btn-secondary" data-testid="reject-optional" onClick={() => saveConsent(false, false)}>Reject optional</button>
              {!showDetails && <button className="btn-secondary" data-testid="manage-choices" onClick={() => setShowDetails(true)}>Manage choices</button>}
              {showDetails && <button className="btn-secondary" data-testid="save-choices" onClick={() => saveConsent(personalization, analytics)}>Save choices</button>}
              {showDetails && <button className="text-sm underline" data-testid="reset-behavior" onClick={resetBehavior}>Reset local tracking data</button>}
            </div>
          </section>
        </div>
      )}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  const context = useContext(PrivacyContext);
  if (!context) throw new Error("usePrivacy must be used inside PrivacyProvider");
  return context;
}
