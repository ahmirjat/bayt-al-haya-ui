"use client";

import { usePrivacy } from "@/components/privacy-provider";

export function CookiePreferencesButton() {
  const { openPreferences } = usePrivacy();
  return <button className="text-left hover:text-white" data-testid="cookie-preferences" onClick={openPreferences}>Cookie Preferences</button>;
}
