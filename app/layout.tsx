import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";
import Comment from "@/components/comment";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "神圣大旺帝国旺学",
    template: "%s | 神圣大旺帝国旺学",
  },
  description: "让不可能变为可能",
  keywords: [
    "神圣大旺帝国旺学",
    "旺学",
    "大旺帝国",
  ],
  openGraph: {
    title: "神圣大旺帝国旺学",
    description: "让不可能变为可能",
    url: "https://wcu.edu.pl",
    images: [
      {
        url: "https://wcu.edu.pl/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "神圣大旺帝国旺学",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://wcu.edu.pl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <main className="grow">
              <Navbar />
              {children}
              <Comment />
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
