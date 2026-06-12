"use client";

import { useState } from "react";
import { StoreIcon } from "@/components/store-icons";

export default function OrderTrackingPage() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <section className="bg-[#f2e9e1] py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <div className="soft-card overflow-hidden">
          <div className="bg-[#786a63] px-7 py-10 text-center text-white sm:px-12"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10"><StoreIcon name="box" /></div><p className="section-kicker mt-5 !text-[#ead2c7]">We are here to help</p><h1 className="mt-2 text-5xl font-semibold">Order Tracking</h1><p className="mx-auto mt-3 max-w-lg leading-7 text-white/80">Enter your order details below. Real tracking will be available soon.</p></div>
          <div className="p-7 sm:p-12"><form className="grid gap-5" onSubmit={(event) => { event.preventDefault(); setShowMessage(true); }}><label className="grid gap-2 text-sm font-bold">Order Number<input className="field" name="orderNumber" data-testid="order-number" type="text" placeholder="Example: NOOR-1001" /></label><label className="grid gap-2 text-sm font-bold">Email<input className="field" name="email" data-testid="tracking-email" type="email" placeholder="Email used for your order" /></label><button className="btn-primary mt-2 w-fit" data-testid="track-order-button" type="submit">Track Order</button></form>{showMessage && <p className="mt-7 rounded-xl border border-[#d9cbb9] bg-[#f8f4ed] p-4" data-testid="tracking-message">Order tracking will be available soon</p>}<p className="mt-8 border-t border-[#eadfd5] pt-6 text-sm leading-6 text-[#716c63]"><strong className="text-[#292620]">Need a little help?</strong> Contact us with your order number and we will be happy to assist. Customer support is a placeholder in this MVP.</p></div>
        </div>
      </div>
    </section>
  );
}
