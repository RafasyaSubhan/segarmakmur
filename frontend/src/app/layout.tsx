import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

// Konfigurasi Font Inter (Body)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

// Konfigurasi Font Merriweather (Heading)
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

// Meta tags SEO
export const metadata: Metadata = {
  title: "Penerbit Segara Makmur Sejati",
  description:
    "Website resmi Penerbit Segara Makmur Sejati. Menerbitkan karya berkualitas untuk menginspirasi dunia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Mengambil FontAwesome via CDN untuk ikon */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      {/* Menerapkan font body, warna background, dan text default */}
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${merriweather.variable} font-body bg-bg-light text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}