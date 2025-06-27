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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Fixed Background Container */}
        <div className="fixed inset-0 z-0">
          {/* Main Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/background.jpg')",
              backgroundAttachment: 'fixed'
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute bg-black/60" />

          {/* Sticky Female Fighter - Bottom Right */}
          <div
            className="fixed bottom-0  -left-48 w-150 h-screen z-10 pointer-events-none"
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