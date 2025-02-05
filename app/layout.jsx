import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PT. Panca Duta Karya Abadi : Engineering Bureau & General Contractor",
  description: "PT. Panca Duta Karya Abadi adalah Perusahaan Jasa Konstruksi dan Jasa Pengadaan barang / jasa yang senantiasa mengembangkan dan menerapkan Sistem Manajemen Mutu dengan tujuan untuk meningkatkan kinerja perusahaan guna memberikan / meningkatkan kepuasan bagi para pelanggan / owner dengan cara memenuhi persyaratan yang telah ditetapkan.",
  icons: {
    icon: "/logo-pdka.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary antialiased">
        <Navbar variant="homepage" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
