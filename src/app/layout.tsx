import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

const openGraphImage = { images: ["https://i.imgur.com/6eglj0f.png"] };

export const metadata: Metadata = {
  title: "ThinkSync",
  description:
    "Discover a supportive network of peers and professionals to elevate your tech skills and career aspirations.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Header />
            <main className="pt-20 min-h-screen overflow-hidden p-6">
              {children}
            </main>
            <Footer />
          </AuthProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
