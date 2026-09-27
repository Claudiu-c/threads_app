import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="w-full flex justify-center items-center min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
