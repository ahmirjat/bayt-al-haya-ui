"use client";

import { useState } from "react";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container-page max-w-3xl py-16">
      <p className="section-kicker">Help shape the demo</p>
      <h1 className="mt-3 text-5xl font-semibold">Share Your Feedback</h1>
      <p className="mt-4 max-w-2xl leading-7 text-[#716c63]">Your comments help us improve the Bayt al-Haya customer experience. Please do not include private or sensitive information.</p>
      <form className="soft-card mt-10 grid gap-5 p-6 sm:p-9" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        <label className="grid gap-2 text-sm font-bold">Name <span className="font-normal text-[#716c63]">(optional)</span><input className="field" name="name" /></label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">Country or region<select className="field" name="region"><option>Canada</option><option>USA</option><option>Pakistan</option><option>Other</option></select></label>
          <label className="grid gap-2 text-sm font-bold">Device type<select className="field" name="device"><option>Mobile</option><option>Desktop</option><option>Tablet</option></select></label>
          <label className="grid gap-2 text-sm font-bold">Page tested<select className="field" name="page"><option>Home</option><option>Products</option><option>Product detail</option><option>Cart</option><option>About Us</option><option>Contact</option><option>Order Tracking</option><option>Privacy Notice</option></select></label>
          <label className="grid gap-2 text-sm font-bold">Rating<select className="field" name="rating"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></label>
        </div>
        <label className="grid gap-2 text-sm font-bold">What did you like?<textarea className="field min-h-24" name="liked" /></label>
        <label className="grid gap-2 text-sm font-bold">What felt confusing or boring?<textarea className="field min-h-24" name="confusing" /></label>
        <label className="grid gap-2 text-sm font-bold">What should be improved?<textarea className="field min-h-24" name="improve" /></label>
        <label className="grid gap-2 text-sm font-bold">Would you trust this website to shop later?<select className="field" name="trust"><option>Yes</option><option>Maybe</option><option>No</option></select></label>
        <button className="btn-primary w-fit" data-testid="feedback-submit" type="submit">Submit Feedback</button>
      </form>
      {submitted && <p className="mt-6 rounded-xl border border-[#d9cbb9] bg-[#f8f4ed] p-4" data-testid="feedback-message">Thank you for your feedback. This demo form is not connected yet.</p>}
    </section>
  );
}
