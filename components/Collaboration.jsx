import React from 'react';

const Collaboration = () => {
    return (
        <section className='p-10 lg:p-16'>
            <div className='collab-container'>
                <img
                    src="/kantor-pdka.png"
                    alt="Background Image"
                    className="collab-bg"
                />
                <div className="collab-bg-overlay"></div>
                <div className="collab-content">
                    <img src="/logo-pdka.png" alt="Logo" className="mb-3 h-12 lg:mb-6" />
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
