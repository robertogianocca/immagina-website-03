import "./globals.css";
import { Courier_Prime } from "next/font/google";
import { Inter } from "next/font/google";
import { Blinker } from "next/font/google";

// Globals font
const inter = Inter({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  // fallback: ["arial"],
  variable: "--font-inter",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  // fallback: ["system-ui", "arial"],
  variable: "--font-courier",
});

const blinker = Blinker({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  // fallback: ["arial"],
  variable: "--font-blinker",
});

export const metadata = {
  title: "IMMAGINA | Cultura",
  description:
    "Come il sarto confeziona l'abito, IMMAGINA confeziona la tua immagine, la tua comunicazione.",
  alternates: {
    canonical: "https://immagina.ch/cultura",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${courierPrime.variable} ${inter.variable} ${blinker.variable}`}>
      <body className="font-main bg-slate-50">{children}</body>
    </html>
  );
}
