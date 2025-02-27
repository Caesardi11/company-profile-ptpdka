import React from 'react';
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import locations from '@/data/locations.json';

const Location = () => {
    return (
        <section className='bg-white'>
            <div className='location-display'>
                <h2 className='location-heading'>Lokasi</h2>
                <p className='location-subheading'>
                    Dalam perkembangan selanjutnya, Kantor Pusat <b>PT. PANCA DUTA KARYA ABADI</b> dipindahkan ke Jayapura dan sekarang memiliki beberapa cabang, antara lain di Sorong, Manokwari, Timika dan Surabaya.
                </p>
                <div className='flex justify-center'>
                    <Image src='/map-kantor.webp' alt='kantor-pdka' className='w-full' width={1920} height={812} />
                </div>
                <div className='location-content-display'>
                    <div className='location-1-display'>
                        <div className='location-content'>
                            <FaLocationDot className='location-1-icon' />
                            <div>
                                <h3 className='location-1-heading'>
                                    KANTOR PUSAT JAYAPURA
                                </h3>
                                <p className='location-1-subheading'>
                                    Jl. Ardipura, No. 56 A, <br /> Ardipura, Mandala, Jayapura Utara, <br /> Kota Jayapura, Papua 99222
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='location-2-display'>
                        <div className='location-content'>
                            <FaLocationDot className='location-2-icon' />
                            <div>
                                <h3 className='location-2-heading'>
                                    KANTOR CABANG SORONG
                                </h3>
                                <p className='location-2-subheading'>
                                    Jl. A. Yani, Klademak III C, <br /> Klademak, Sorong Manoi, <br /> Kota Sorong, Papua Barat Daya 98414
                                </p>
                            </div>
                        </div>
                        <div className='location-content'>
                            <FaLocationDot className='location-2-icon' />
                            <div>
                                <h3 className='location-2-heading'>
                                    KANTOR CABANG TIMIKA
                                </h3>
                                <p className='location-2-subheading'>
                                    Jl. Caritas SP 2 - SP 5, <br /> Timika Jaya, Mimika Baru, <br /> Kabupaten Mimika, Papua 99963
                                </p>
                            </div>
                        </div>
                        <div className='location-content'>
                            <FaLocationDot className='location-2-icon' />
                            <div>
                                <h3 className='location-2-heading'>
                                    KANTOR CABANG MANOKWARI
                                </h3>
                                <p className='location-2-subheading'>
                                    Jl. Drs Esau Sesa (Samping Hotel Papua Forest), <br /> Wosi, Manokwari Barat <br /> Kabupaten Manokwari, Papua Barat 98312
                                </p>
                            </div>
                        </div>
                        <div className='location-content'>
                            <FaLocationDot className='location-2-icon' />
                            <div>
                                <h3 className='location-2-heading'>
                                    KANTOR CABANG SURABAYA
                                </h3>
                                <p className='location-2-subheading'>
                                    Jl. Merak No.4 - 6, <br /> Krembangan Selatan, Krembangan, <br /> Surabaya, Jawa Timur 60175
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;