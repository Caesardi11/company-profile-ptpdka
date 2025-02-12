import React from 'react';
import Image from 'next/image';

const Collaboration = () => {
    return (
        <section className='p-10 lg:p-16'>
            <div className='collab-container'>
                <Image
                    src="/kantor-pdka.png"
                    alt="Background Image"
                    className="collab-bg"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="collab-bg-overlay"></div>
                <div className="collab-content">
                    <Image src="/logo-pdka.png" alt="Logo" className="mb-3 lg:mb-6" width={50} height={50} />
                    <h1 className="collab-heading">Engineering <span className='text-[#ffc800]'>Bureau</span> & General <span className='text-[#ffc800]'>Contractor</span></h1>
                    <p className="collab-subheading">
                        Hubungi kami dan mulailah perjalanan Anda dalam mewujudkan proyek impian berkualitas tinggi bersama tim ahli kami.
                    </p>
                    <div className="collab-btn">
                        <a href="/contact"> Konsultasikan dengan kami → </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collaboration;
