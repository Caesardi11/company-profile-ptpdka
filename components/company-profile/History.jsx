import React from 'react';
import Image from 'next/image'

const History = () => {
    return (
        <section className='history-container'>
            <div className='flex justify-center'>
                <Image src='/foto-karyawan.webp' alt='karyawan-pdka' className='w-full lg:w-3/4 xl:w-full 2xl:w-3/4' width={965} height={1240} />
            </div>
            <div>
                <h1 className='history-heading'>Sejarah</h1>
                <p className='history-text'>
                    <b>PT. PANCA DUTA KARYA ABADI</b> didirikan di kota Rembang, Jawa Tengah pada hari Sabtu, 21 Mei 1983 dengan Akte Notaris No.66 yang dikeluarkan Imam Sutaryo SH di Pati, Jawa Tengah, dan telah mengalami beberapa kali perubahan, dan kemudian Kantor Pusat PT. PANCA DUTA KARYA ABADI dipindah ke Jayapura; dan terakhir untuk menyesuaikan dengan peraturan pemerintah dengan diharuskannya sistem <b>Online Single Submission (OSS),</b> selanjutnya PT. PANCA DUTA KARYA ABADI telah menyesuaikan Maksud dan Tujuan Kegiatan Usaha dengan tabel KBLI yaitu dengan Akte terakhir yang dikeluarkan oleh Notaris Rera Farah, SH.,M.Kn. dengan <b>NIB 9120204121006.</b>
                </p>
                <p className='history-text'>
                    Disamping Perusahaan Jasa Konstruksi yang meliputi pekerjaan bangunan, perumahan dan pemukiman, gedung dan pabrik, jalan, jembatan, landasan bandara, lokasi pengeboran darat, pencetakan sawah dan pembukaan lahan, bendungan, reklamasi dan pengerukan, pelabuhan, dermaga penahan gelombang dan tanah, <b>PT. PANCA DUTA KARYA ABADI</b> juga merupakan perusahaan yang bergerak dalam bidang usaha perdagangan, ekspor, impor, leveransir, distributor, ekspedisi, serta segala sesuatu yang berhubungan langsung maupun tidak langsung dalam bidang industri, peternakan, perkebunan dan perbengkelan.
                </p>
            </div>
        </section>
    );
};

export default History;