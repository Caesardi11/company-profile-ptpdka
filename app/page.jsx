import Carousel from "@/components/Carousel";
import ClientCarousel from "@/components/ClientCarousel";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import MiniPortfolio from "@/components/MiniPortfolio";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar variant="homepage"/>
      <Carousel />
      <section className="content-container">
        <p className="quote">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        <div className="grid-container">
          <iframe
            src="https://www.youtube.com/embed/-jO7OPAvkh0?si=4MKCgjUBkR5Ly840"
            title="Company Profile PT. PDKA"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen className="embed-video"></iframe>
          <div>
            <p className="indent-text"><b>PT. Panca Duta Karya Abadi</b> adalah Perusahaan Jasa Konstruksi dan Jasa Pengadaan barang / jasa yang senantiasa mengembangkan dan menerapkan <b>Sistem Manajemen Mutu</b> dengan tujuan untuk meningkatkan kinerja perusahaan guna memberikan / meningkatkan kepuasan bagi para pelanggan / owner dengan cara memenuhi persyaratan yang telah ditetapkan.</p>
            <div className="text-button">
              <a href="/about">Kenali Kami → </a>
            </div>
          </div>
        </div>
      </section>
      <Stats/>
      <MiniPortfolio/>
      <ClientCarousel/>
      <Collaboration/>
      <Footer/>
    </>
  );
}
