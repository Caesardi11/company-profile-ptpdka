import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Navbar variant="homepage"/>
      <Carousel />
      <section className="content-container">
        <p className="quote">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        <div className="grid-container">
          <iframe src="https://www.youtube.com/embed/-jO7OPAvkh0?si=4MKCgjUBkR5Ly840" title="Company Profile PT. PDKA" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="embed-video"></iframe>
          <div>
            <p className="indent-text"><b>PT. Panca Duta Karya Abadi</b> adalah Perusahaan Jasa Konstruksi dan Jasa Pengadaan barang / jasa yang senantiasa mengembangkan dan menerapkan <b>Sistem Manajemen Mutu</b> dengan tujuan untuk meningkatkan kinerja perusahaan guna memberikan / meningkatkan kepuasan bagi para pelanggan / owner dengan cara memenuhi persyaratan yang telah ditetapkan.</p>
            <div className="text-button">
              <a href="/about">Kenali Kami <FaArrowRightLong className="inline" /></a>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <section className="content-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien orci, tristique sed elementum a, fringilla id velit. Quisque nec risus tincidunt, varius neque sit amet, laoreet purus. Maecenas a ante rhoncus, eleifend massa non, pellentesque justo. Phasellus lobortis placerat neque, eget lobortis dui dapibus sit amet. Etiam accumsan ac libero vel pulvinar. Ut eu libero semper, tristique mi vitae, eleifend tortor. Aenean a dolor enim. In eget odio sed arcu finibus consequat. Curabitur nec facilisis turpis, at lobortis tortor. Praesent efficitur, massa ac consectetur mollis, turpis nisi aliquam turpis, vitae egestas nisl mi ut quam. Sed eget metus a sem fermentum commodo. Donec semper nulla ut felis porta, volutpat venenatis turpis eleifend. Cras dignissim ultrices eros, sit amet faucibus lectus pulvinar aliquet.
      </section>
    </>
  );
}
