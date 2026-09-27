import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://threads-app-mu-eight.vercel.app"),
  title: "Threads App",
  description:
    "A social app for sharing posts, joining conversations, and connecting with others.",
  openGraph: {
    title: "Threads App",
    description: "Share posts, join conversations, and connect with others.",
    url: "https://threads-app-mu-eight.vercel.app",
    siteName: "Threads App",
    images: [
      {
        url: "/assets/threads.png",
        width: 1200,
        height: 630,
        alt: "Preview of the Threads App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Threads App",
    description: "Share posts, join conversations, and connect with others.",
    images: ["/threads-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSideBar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
