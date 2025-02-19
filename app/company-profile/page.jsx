import React from 'react'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Image from 'next/image'

export const metadata = {
    title: 'Profil Perusahaan - pancadutakaryaabadi.com',
    description: 'Lihat proyek terbaru dan unggulan kami di halaman ini.',
    icons: {
        icon: '/logo-pdka.webp',
    },
}

const ProfilePage = () => {
return (
    <div className='bg-white'>
        <section className='relative'>
            <div className='header-bg' style={{ backgroundImage: "url('/kantor-pdka.webp')" }}>
                <div className='header-bg-overlay'></div>
            </div>
            <div className='header-container'>
                <p className='header-p-txt'>
                    PDKA GROUP
                </p>
                <h1 className='header-h1-txt'>
                    Lebih Dekat Dengan Kami 
                </h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">BERANDA</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>PROFIL PERUSAHAAN</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </section>
        <section className='project-container'>
            <div className='grid xl:grid-cols-2 gap-10 xl:mt-20'>
                <Image src='/foto-karyawan.webp' alt='karyawan-pdka' layout='responsive' width={800} height={1080} />
                <div className='indent-10 leading-relaxed'>
                    <p className='mb-4 text-sm leading-relaxed'>
                        <b>PT. PANCA DUTA KARYA ABADI</b> didirikan di kota Rembang, Jawa Tengah pada hari Sabtu, 21 Mei 1983 dengan Akte Notaris No.66 yang dikeluarkan Imam Sutaryo SH di Pati, Jawa Tengah, dan telah mengalami beberapa kali perubahan, dan kemudian Kantor Pusat PT. PANCA DUTA KARYA ABADI dipindah ke Jayapura; dan terakhir untuk menyesuaikan dengan peraturan pemerintah dengan diharuskannya sistem <b>Online Single Submission (OSS),</b> selanjutnya PT. PANCA DUTA KARYA ABADI telah menyesuaikan Maksud dan Tujuan Kegiatan Usaha dengan tabel KBLI yaitu dengan Akte terakhir yang dikeluarkan oleh Notaris Rera Farah, SH.,M.Kn. dengan <b>NIB 9120204121006.</b>
                    </p>
                    <p className='mb-4'>
                        Disamping Perusahaan Jasa Konstruksi yang meliputi pekerjaan bangunan, perumahan dan pemukiman, gedung dan pabrik, jalan, jembatan, landasan bandara, lokasi pengeboran darat, pencetakan sawah dan pembukaan lahan, bendungan, reklamasi dan pengerukan, pelabuhan, dermaga penahan gelombang dan tanah, <b>PT. PANCA DUTA KARYA ABADI</b> juga merupakan perusahaan yang bergerak dalam bidang usaha perdagangan, ekspor, impor, leveransir, distributor, ekspedisi, serta segala sesuatu yang berhubungan langsung maupun tidak langsung dalam bidang industri, peternakan, perkebunan dan perbengkelan.
                    </p>
                    <p className='mb-4'>
                        Dalam perkembangan selanjutnya, Kantor Pusat <b>PT. PANCA DUTA KARYA ABADI</b> dipindahkan ke Jayapura dan sekarang memiliki beberapa cabang, antara lain di Sorong, Manokwari, Timika dan Surabaya.
                    </p>
                </div>
            </div>
            <Image src='/map-kantor.webp' alt='kantor-pdka' layout='responsive' width={500} height={500} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate odio non sapien dictum, a hendrerit neque maximus. Duis viverra diam quis velit mollis, nec ultricies quam euismod. Praesent in eros eget ex consequat vestibulum a ac dui. Nullam consectetur eu orci et feugiat. Curabitur vitae orci vulputate, porta augue sit amet, suscipit neque. Aliquam imperdiet tortor gravida dolor ornare faucibus. Nam vulputate massa at eleifend tincidunt. Nam tempus erat facilisis libero mattis aliquet. Pellentesque ullamcorper purus ipsum, ut volutpat nisi suscipit et. Nullam luctus pretium justo sit amet mollis.
        </section>
    </div>
)
}

export default ProfilePage