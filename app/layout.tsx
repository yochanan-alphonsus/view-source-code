import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/public/styles/globals.css";
import { TChildren } from "@/src/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "View Source Code",
  description:
    "A simple and lightweight tool to see the HTML code of your desired website",
  alternates: {
    canonical: "https://view-source-code.vercel.app",
  },
  openGraph: {
    title: "View Source Code",
    description:
      "A simple and lightweight tool to see the HTML code of your desired website",
    url: "https://view-source-code.vercel.app",
    images: "https://view-source-code.vercel.app/images/logo.jpeg",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "view source",
    "view source code",
    "view html code",
    "view source mobile",
  ],
  authors: {
    name: "João Afonso",
    url: "https://view-source-code.vercel.app",
  },
  icons: {
    apple: "https://view-source-code.vercel.app/images/logo.jpeg",
    icon: "https://view-source-code.vercel.app/images/logo.jpeg",
    shortcut: "https://view-source-code.vercel.app/images/logo.jpeg",
  },
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen h-full text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <footer className="bg-[#121212] fixed left-0 right-0 bottom-0 flex items-center py-1">
          <span className="text-sm font-bold text-gray-300 pl-5 pb-2.5">
            &copy; View Source Code. All rights reserveds{" "}
            {new Date().getFullYear()}
          </span>
        </footer>
      </body>
    </html>
  );
}
