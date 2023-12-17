import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./Providers";
import TanstackProvider from "@/components/providers/TanstackProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const openGraphImage = { images: ["https://i.imgur.com/z5FuMgF.png"] };

export const metadata: Metadata = {
  title: "eStudev",
  description:
    "Discover a collaborative network of student developers to elevate your development skills and tech career aspirations.",
  openGraph: {
    ...openGraphImage,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <Header />
              <main className="pt-12 lg:pt-20 min-h-screen overflow-hidden lg:p-6">
                {children}
                <Analytics />
              </main>
              <Footer />
            </AuthProvider>
            <Toaster />
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
