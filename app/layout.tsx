import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Manrope({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const rounded = Nunito_Sans({ variable: "--font-rounded", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  const title = "Quantum Singapore 2027 — The Third Edition";
  const description = "Register for Quantum Singapore 2027 updates and explore the programmes, speakers and photographs from the 2026 and 2025 editions.";
  return {
    title, description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, images: [{ url: image, width: 1680, height: 945, alt: "Quantum Singapore 2026" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${rounded.variable}`}>{children}</body></html>;
}
