import Carousel from "@/components/main/Carousel";
import ClientCarousel from "@/components/main/ClientCarousel";
import Collaboration from "@/components/main/Collaboration";
import MiniPortfolio from "@/components/main/MiniPortfolio";
import Stats from "@/components/main/Stats";
import Link from "next/link";

export const metadata = {
    title: "PT. Panca Duta Karya Abadi : Engineering Bureau & General Contractor",
    description: "PT. Panca Duta Karya Abadi adalah Perusahaan Jasa Konstruksi dan Jasa Pengadaan barang / jasa yang senantiasa mengembangkan dan menerapkan Sistem Manajemen Mutu dengan tujuan untuk meningkatkan kinerja perusahaan guna memberikan / meningkatkan kepuasan bagi para pelanggan / owner dengan cara memenuhi persyaratan yang telah ditetapkan.",
    icons: {
        icon: "/logo-pdka.webp",
    },
};

export default function Home() {
    return (
        <>
            <Carousel />
            <section className="content-container">
                <p className="quote">
                    "Mewujudkan Komitmen, Membangun Kualitas, Mengutamakan Kepuasan."
                </p>
                <div className="grid-container">
                    <iframe
                        src="https://www.youtube.com/embed/-jO7OPAvkh0?si=4MKCgjUBkR5Ly840"
                        title="Company Profile PT. PDKA"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="embed-video"
                    ></iframe>
                    <div>
                        <p className="indent-text">
                            <b>PT. Panca Duta Karya Abadi</b> adalah Perusahaan Jasa Konstruksi dan Jasa Pengadaan barang / jasa yang senantiasa mengembangkan dan menerapkan <b>Sistem Manajemen Mutu</b> dengan tujuan untuk meningkatkan kinerja perusahaan guna memberikan / meningkatkan kepuasan bagi para pelanggan / owner dengan cara memenuhi persyaratan yang telah ditetapkan.
                        </p>
                        <div className="text-button">
                            <Link href="/company-profile">Kenali Kami →</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Stats />
            <MiniPortfolio />
            <ClientCarousel />
            <Collaboration />
        </>
    );
}
