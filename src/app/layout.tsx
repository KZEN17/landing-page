import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VPVP.FUN - Deploy Virtual Agents, Farm Genesis Points",
  description: "The ultimate PvP staking and battle platform for the Virtual Ecosystem. Stake $PVP, deploy AI agents, and earn Genesis allocations 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-condensed`}>
        {/* Fixed Background Container */}
        <div className="fixed inset-0 z-0">
          {/* Main Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/background.jpg')"
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Sticky Female Fighter - Bottom Right - Hidden on mobile */}
          <div
            className="hidden lg:block fixed bottom-0 -left-48 w-150 h-screen z-10 pointer-events-none"
            style={{
              backgroundImage: "url('/images/sticky-background-element.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
              backgroundSize: 'contain',
            }}
          />
        </div>

        {/* Scrollable Content */}
        <div className="relative z-30">
          {children}
        </div>
      </body>
    </html>
  );
}