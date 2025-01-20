import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Navbar variant="homepage"/>
      <Carousel />
      <div className="content-container">
        <section>
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
        <section className="mt-20 bg-yellow-300">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pulvinar ipsum, hendrerit porttitor libero. Nam sed magna volutpat, posuere libero quis, venenatis orci. Vivamus porttitor eleifend est at placerat. Morbi risus erat, mollis et pulvinar et, consectetur nec risus. Nunc in ornare urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis felis mauris. Quisque egestas pellentesque ornare. Nullam nunc massa, tincidunt et elit eu, pharetra tempus lorem. Praesent volutpat, dui condimentum eleifend pretium, magna tortor pretium elit, a pretium augue enim sit amet purus. Duis nec volutpat mi. Integer pellentesque nec arcu non lacinia. Integer maximus dolor libero, sit amet blandit nisi viverra sollicitudin. Fusce sed ex scelerisque, egestas nisl non, venenatis felis. Sed lobortis enim accumsan turpis pellentesque, a porta libero porta. Nulla tempor feugiat mollis. Donec at sapien eu arcu hendrerit tristique. Morbi finibus metus ipsum, nec varius enim laoreet sit amet. Aenean ultricies tincidunt velit, nec finibus ligula malesuada vitae. Maecenas aliquam augue in elementum ornare. Proin suscipit leo consectetur nibh vulputate euismod in quis velit. Proin ultricies velit mauris, sed venenatis purus blandit ut. Suspendisse potenti. Sed posuere purus libero, vitae tempor turpis accumsan ac. Nam ultricies nisl et leo placerat fringilla. Mauris viverra est dolor, quis ullamcorper nunc luctus sit amet. Nunc rhoncus mattis odio, et porttitor nunc convallis et. Nunc consequat vel ipsum vitae pellentesque. Sed volutpat ac mauris in commodo. Quisque semper, urna at volutpat congue, sapien lorem sodales eros, eu varius augue ipsum vitae lectus. Aenean consectetur nunc a nunc elementum blandit. Nunc sed risus cursus, pretium ex at, malesuada enim. Fusce eget elementum massa, et aliquam neque. Vestibulum egestas nibh quis leo congue, eu accumsan orci vestibulum. In mi ligula, pretium et convallis eu, faucibus ac urna. Suspendisse efficitur, turpis ac bibendum egestas, metus est vestibulum justo, at posuere sem est in magna. Maecenas ut enim vitae ex pretium tincidunt. Aliquam sodales auctor sapien aliquet maximus. Aenean at enim ullamcorper ante lacinia mattis at in magna. Etiam sagittis, nisi nec dignissim aliquet, justo purus placerat mauris, eget elementum sem ex vel enim. Cras a porta ipsum, ut laoreet velit. Praesent aliquet vel ex eu viverra. Suspendisse placerat et libero sit amet finibus. Aliquam pretium suscipit consectetur. Phasellus volutpat tellus a diam faucibus accumsan. Phasellus in purus mi. Quisque blandit elit eget tincidunt consequat. Nulla in posuere urna. Nam in varius sapien. Ut faucibus velit vitae ipsum vestibulum volutpat. In hac habitasse platea dictumst. Nulla facilisi. Praesent leo nisl, viverra quis accumsan ut, dignissim eget tellus. Sed finibus, felis quis faucibus mattis, mauris tortor vulputate arcu, vitae sagittis enim sapien in tortor. Nunc euismod nunc mi, a pellentesque sem mollis in. Ut suscipit odio purus. Quisque quis nunc sollicitudin, vestibulum diam ac, congue lorem. Quisque a dui purus. Ut viverra risus sit amet magna ultricies, sit amet varius libero venenatis. Fusce quis pharetra erat. Aliquam bibendum, tortor vel porta varius, tortor libero laoreet ante, quis sagittis dolor nulla eu nulla. Morbi ac eleifend mauris, nec convallis dolor. Cras leo arcu, ultricies eu magna vel, fringilla luctus eros. Aliquam tristique, orci vel vulputate lacinia, magna turpis commodo lorem, at hendrerit nisi tortor id tellus. Integer feugiat lacinia felis, vel placerat est dictum nec. Aenean nibh metus, commodo at enim tincidunt, ultricies bibendum purus. Curabitur at consectetur nibh. Praesent eu felis pharetra, pharetra nulla nec, commodo ipsum. Ut consectetur, metus et tempor porttitor, quam mauris sollicitudin nisl, eget vehicula neque justo ac dolor.</p>
        </section>
        
      </div>
    </>
  );
}
