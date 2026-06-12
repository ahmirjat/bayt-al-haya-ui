"use client";

import { useEffect, useState } from "react";

const SETTINGS_KEY = "bayt_al_haya_future_access_context";

export function FutureAccessSettings() {
  const [role, setRole] = useState("Customer");
  const [region, setRegion] = useState("North America");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? "{}");
        setRole(saved.role ?? "Customer");
        setRegion(saved.region ?? "North America");
      } catch {
        // Keep defaults if local preferences are unreadable.
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function save(nextRole: string, nextRegion: string) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ role: nextRole, region: nextRegion }));
  }

  return (
    <section className="mt-12 border border-[#e5ddd2] bg-[#f8f4ed] p-6">
      <h2 className="text-3xl font-semibold">Future access context</h2>
      <p className="mt-2 text-sm leading-6 text-[#716c63]">These local-only settings prepare the UI structure for future role-based behavior. They do not grant access or create an account.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">User type<select className="field" value={role} onChange={(event) => { setRole(event.target.value); save(event.target.value, region); }}><option>Customer</option><option>Employee</option><option>Admin</option></select></label>
        <label className="grid gap-2 text-sm font-bold">Region<select className="field" value={region} onChange={(event) => { setRegion(event.target.value); save(role, event.target.value); }}><option>North America</option><option>Pakistan</option><option>Canada</option></select></label>
      </div>
      <p className="mt-4 text-sm text-[#716c63]">Future admin access will require login, roles, audit logs, and permissions. Admins and employees should only see data needed for their role. No customer personal data is shown in this MVP.</p>
    </section>
  );
}
