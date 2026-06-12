import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrivacyProvider } from "@/components/privacy-provider";
import { DemoBanner } from "@/components/demo-banner";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bayt al-Haya",
  description: "Faith-inspired abayas and modest essentials for everyday grace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${cormorant.variable}`}>
      <body>
        <PrivacyProvider>
          <DemoBanner />
          <Header />
          <main>{children}</main>
          <Footer />
        </PrivacyProvider>
      </body>
    </html>
  );
}
