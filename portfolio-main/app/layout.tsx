import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
const font = Hanken_Grotesk({ subsets: ["latin"] });
import { OpenPanelComponent } from '@openpanel/nextjs';
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ani.ink"),
  title: {
    default: "Ayush",
    template: "%s | Ayush",
  },
  description: "Full Stack Web Developer and Designer from India, specializing in Next.js, React, and TypeScript.",
  keywords: ["Full Stack Developer", "Web Designer", "Next.js", "React", "TypeScript", "India"],
  authors: [{ name: "Ayush", url: "https://ani.ink/" }],
  creator: "Ayush",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayush-go.vercel.app/",
    siteName: "Ayush's Portfolio",
    title: "Ayush - Full Stack Developer",
    description: "Full Stack Web Developer and Designer from India, specializing in Next.js, React, and TypeScript.",
    images: [
      {
        url: "/og1.png",
        width: 1200,
        height: 675,
        alt: "Ayush's Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@null",
    creator: "@null",
    images: [
      {
        url: "/og1.png",
        width: 1200,
        height: 675,
        alt: "Ayush's Profile Picture",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#111010] flex justify-center`}>
        <OpenPanelComponent
          clientId="89e02301-b6bb-4341-a2b4-29d138532b7b"
          trackScreenViews={true}
        />
        {children}
        <Script src="/oneko.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}