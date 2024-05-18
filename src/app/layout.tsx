import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/react-query-provider";
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "next-client-cookies/server";
import Providers from "@/store/provider/provider";
// add fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const vazir = Vazirmatn({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vazir",
});

// add fonts

// meta
export const metadata: Metadata = {
  title: "hiweb task ",
  description: "hiweb task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className={`dark ${vazir.variable} ${inter.variable}`}>
      <Providers>
        <body>
          <QueryProvider>
            <div id="modal-root"></div>
            <CookiesProvider>{children}</CookiesProvider>
          </QueryProvider>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
