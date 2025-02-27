import React from 'react'

const VisionMission = () => {
    return (
        <section className='relative text-smokyWhite py-14 bg-cover bg-center' style={{ backgroundImage: "url('/bg-visi-misi.webp')" }}>
            <div className="absolute inset-0 bg-[#121212]/85"></div>
            <div className="relative max-w-5xl mx-auto px-8">
                {/* Bagian Visi */}
                <div className="vision-mission-container">
                    <h3 className="vision-heading">VISI</h3>
                    <div className="vision-mission-divider md:h-24"></div>
                    <p className="vision-text">
                        <b>PT. PANCA DUTA KARYA ABADI</b> berkembang dengan cara memenuhi seluruh komitmen pelanggan.
                    </p>
                </div>

                {/* Garis Pemisah */}
                <div className=" relative my-8 flex items-center">
                    <div className="flex-grow border-t border-[#FFCC00]"></div>
                    <h2 className="mx-4 text-3xl font-semibold text-[#FFCC00]">VISI & MISI</h2>
                    <div className="flex-grow border-t border-[#FFCC00]"></div>
                </div>

                {/* Bagian Misi */}
                <div className="vision-mission-container">
                    <ul className='list-disc space-y-4 text-justify'>
                        <li>
                            <b>PT. PANCA DUTA KARYA ABADI</b> menciptakan hasil karya yang berkualitas, orientasi pelanggan, 
                            penempatan personel yang profesional, melaksanakan aktivitas secara aman, dan menjaga kelestarian lingkungan.
                        </li>
                        <li>
                            <b>PT. PANCA DUTA KARYA ABADI</b> dalam menjamin kesesuaian hasil produksi jasa konstruksi dan pengadaan yang sesuai dengan 
                            persyaratan pelanggan, maka dalam membuat dan menetapkan perencanaan akan berorientasi pada hasil produksi 
                            yang disesuaikan dengan rencana optimalisasi kepuasan pelanggan.
                        </li>
                    </ul>
                    <div className="vision-mission-divider md:h-56"></div>
                    <h3 className="mission-text">MISI</h3>
                </div>
            </div>
        </section>
    )
}

export default VisionMission