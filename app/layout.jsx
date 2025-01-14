// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "PT. Panca Duta Karya Abadi",
  description: "Engineering Bureau & General Contractor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary antialiased">
        {children}
      </body>
    </html>
  );
}
