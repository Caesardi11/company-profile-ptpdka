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
            <div className='grid grid-cols-2 gap-10 mt-20'>
                <Image src='/foto-karyawan.webp' alt='karyawan-pdka' layout='responsive' width={800} height={1080} />
                <div className='indent-10 leading-relaxed'>
                    <p className='mb-4'>
                        <b>PT. PANCA DUTA KARYA ABADI</b> didirikan di <b>Rembang, Jawa Tengah,</b> pada <b>Sabtu, 21 Mei 1983,</b> berdasarkan <b>Akte Notaris No. 66</b> yang dikeluarkan oleh <b>Imam Sutaryo, S.H.</b> di Pati, Jawa Tengah. Seiring dengan perkembangannya, perusahaan mengalami beberapa kali perubahan, termasuk pemindahan kantor pusat ke <b>Jayapura</b>.
                    </p>
                    <p className='mb-4'>
                        Dalam rangka menyesuaikan dengan regulasi pemerintah mengenai sistem Online Single Submission (OSS), PT. PANCA DUTA KARYA ABADI telah menyesuaikan maksud dan tujuan kegiatan usahanya sesuai dengan tabel KBLI, sebagaimana tercantum dalam Akte terakhir yang dikeluarkan oleh Notaris Rera Farah, S.H., M.Kn., dengan <b>NIB 9120204121006</b>.
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