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
import { FaLocationDot } from "react-icons/fa6";
import MiniPortfolio from '@/components/main/MiniPortfolio';

export const metadata = {
    title: 'Profil Perusahaan - pancadutakaryaabadi.com',
    description: 'Lihat proyek terbaru dan unggulan kami di halaman ini.',
    icons: {
        icon: '/logo-pdka.webp',
    },
}

const ProfilePage = () => {
    return (
        <>
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
            <section className='grid gap-10 my-5 mx-auto px-8 text-justify md:px-16 lg:px-28 xl:grid-cols-2 xl:mt-16 xl:my-10 2xl:px-32 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
                <div className='flex justify-center'>
                    <Image src='/foto-karyawan.webp' alt='karyawan-pdka' className='w-full lg:w-3/4 xl:w-full' width={965} height={1240} />
                </div>
                <div className=''>
                    <h1 className='heading font-semibold text-[#DAA520] text-3xl tracking-wider mb-7 md:text-3xl lg:text-4xl'>Sejarah</h1>
                    <p className='mb-4 text-sm leading-relaxed indent-10 md:text-base 2xl:text-lg'>
                        <b>PT. PANCA DUTA KARYA ABADI</b> didirikan di kota Rembang, Jawa Tengah pada hari Sabtu, 21 Mei 1983 dengan Akte Notaris No.66 yang dikeluarkan Imam Sutaryo SH di Pati, Jawa Tengah, dan telah mengalami beberapa kali perubahan, dan kemudian Kantor Pusat PT. PANCA DUTA KARYA ABADI dipindah ke Jayapura; dan terakhir untuk menyesuaikan dengan peraturan pemerintah dengan diharuskannya sistem <b>Online Single Submission (OSS),</b> selanjutnya PT. PANCA DUTA KARYA ABADI telah menyesuaikan Maksud dan Tujuan Kegiatan Usaha dengan tabel KBLI yaitu dengan Akte terakhir yang dikeluarkan oleh Notaris Rera Farah, SH.,M.Kn. dengan <b>NIB 9120204121006.</b>
                    </p>
                    <p className='mb-4 text-sm leading-relaxed indent-10 md:text-base 2xl:text-lg'>
                        Disamping Perusahaan Jasa Konstruksi yang meliputi pekerjaan bangunan, perumahan dan pemukiman, gedung dan pabrik, jalan, jembatan, landasan bandara, lokasi pengeboran darat, pencetakan sawah dan pembukaan lahan, bendungan, reklamasi dan pengerukan, pelabuhan, dermaga penahan gelombang dan tanah, <b>PT. PANCA DUTA KARYA ABADI</b> juga merupakan perusahaan yang bergerak dalam bidang usaha perdagangan, ekspor, impor, leveransir, distributor, ekspedisi, serta segala sesuatu yang berhubungan langsung maupun tidak langsung dalam bidang industri, peternakan, perkebunan dan perbengkelan.
                    </p>
                </div>
            </section>
            <section className='bg-[#121212] text-[#F5F5F5] py-14'>
                <div className="max-w-5xl mx-auto px-8 ">
                    {/* Bagian Visi */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-lg shadow-lg flex flex-col justify-between items-center md:gap-10 md:px-16 md:flex-row lg:gap-16 xl:gap-20">
                        <h2 className="text-4xl text-[#FFCC00] font-bold mb-2 md:mb-0">VISI</h2>
                        <div className="hidden mx-4 md:block md:h-24 md:border-l md:border-gray-500"></div>
                        <p className="text-base leading-relaxed text-center  md:text-left">
                            PT. PANCA DUTA KARYA ABADI berkembang dengan cara memenuhi seluruh komitmen pelanggan.
                        </p>
                    </div>

                    {/* Garis Pemisah */}
                    <div className="my-8 flex items-center">
                        <div className="flex-grow border-t border-[#FFCC00]"></div>
                        <h3 className="mx-4 text-3xl font-semibold text-[#FFCC00]">VISI & MISI</h3>
                        <div className="flex-grow border-t border-[#FFCC00]"></div>
                    </div>

                    {/* Bagian Misi */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-lg shadow-lg flex flex-col justify-between items-center md:gap-10 md:px-16 md:flex-row lg:gap-16 xl:gap-20">
                        <ul className='list-disc space-y-4 text-justify'>
                            <li>
                                PT. PANCA DUTA KARYA ABADI menciptakan hasil karya yang berkualitas, orientasi pelanggan, 
                                penempatan personel yang profesional, melaksanakan aktivitas secara aman, dan menjaga kelestarian lingkungan.
                            </li>
                            <li>
                                PT. PANCA DUTA KARYA ABADI dalam menjamin kesesuaian hasil produksi jasa konstruksi dan pengadaan yang sesuai dengan 
                                persyaratan pelanggan, maka dalam membuat dan menetapkan perencanaan akan berorientasi pada hasil produksi 
                                yang disesuaikan dengan rencana optimalisasi kepuasan pelanggan.
                            </li>
                        </ul>
                        <div className="hidden mx-4 md:block md:h-56 md:border-l md:border-gray-500"></div>
                        <h2 className="text-4xl font-bold self-center mt-6 text-[#FFCC00] md:mt-0">MISI</h2>
                    </div>
                </div>
            </section>
            <section className='bg-white'>
                <div className='mx-auto px-8 py-10 md:pt-12 md:px-16 lg:px-28 lg:pt-14 xl:pt-16 2xl:px-32 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
                    <h1 className='heading font-semibold text-[#DAA520] text-3xl text-center tracking-wider mb-5 lg:text-4xl'>Lokasi</h1>
                    <p className='text-sm leading-relaxed mb-4 md:text-center md:mx-14 md:text-base lg:mx-20 lg:mb-9 xl:mx-36'>
                        Dalam perkembangan selanjutnya, Kantor Pusat <b>PT. PANCA DUTA KARYA ABADI</b> dipindahkan ke Jayapura dan sekarang memiliki beberapa cabang, antara lain di Sorong, Manokwari, Timika dan Surabaya.
                    </p>
                    <div className='flex justify-center'>
                        <Image src='/map-kantor.webp' alt='kantor-pdka' className='w-full' width={1920} height={812} />
                    </div>
                    <div className='grid grid-cols-2 text-start mt-5 md:gap-5 md:grid-cols-3 xl:ml-12 xl:gap-20'>
                        <div className='grid col-span-2 md:col-span-1'>
                            <div className='flex flex-row gap-2 mb-5'>
                                <FaLocationDot className='mt-1 text-[#FFCC00]'/>
                                <div>
                                    <h3 className='text-[#FFCC00] font-semibold text-base tracking-wide heading'>
                                        KANTOR PUSAT JAYAPURA
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-400'>
                                        Jl. Ardipura, No. 56 A, <br /> Ardipura, Mandala, Jayapura Utara, <br /> Kota Jayapura, Papua 99222
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 col-span-2 md:gap-5 xl:gap-10'>
                            <div className='flex flex-row gap-2 mb-5'>
                                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                                <div>
                                    <h3 className='text-[#DAA520] font-semibold text-base tracking-wide heading'>
                                        KANTOR CABANG SORONG
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-400'>
                                        Jl. A. Yani, Klademak III C, <br /> Klademak, Sorong Manoi, <br /> Kota Sorong, Papua Barat Daya 98414
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 mb-5'>
                                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                                <div>
                                    <h3 className='text-[#DAA520] font-semibold text-base tracking-wide heading'>
                                        KANTOR CABANG TIMIKA
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-400'>
                                        Jl. Caritas SP 2 - SP 5, <br /> Timika Jaya, Mimika Baru, <br /> Kabupaten Mimika, Papua 99963
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 mb-5'>
                                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                                <div>
                                    <h3 className='text-[#DAA520] font-semibold text-base tracking-wide heading'>
                                        KANTOR CABANG MANOKWARI
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-400'>
                                        Jl. Drs Esau Sesa (Samping Hotel Papua Forest), <br /> Wosi, Manokwari Barat <br /> Kabupaten Manokwari, Papua Barat 98312
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-2 mb-5'>
                                <FaLocationDot className='mt-1 text-[#DAA520]'/>
                                <div>
                                    <h3 className='text-[#DAA520] font-semibold text-base tracking-wide heading'>
                                        KANTOR CABANG SURABAYA
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-400'>
                                        Jl. Merak No.4 - 6, <br /> Krembangan Selatan, Krembangan, <br /> Surabaya, Jawa Timur 60175
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MiniPortfolio />
        </>
    )
}

export default ProfilePage