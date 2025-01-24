import React from 'react';

const Collaboration = () => {
    return (
        <div className='bg-[#fff9dd]'>
            <section className='stats-container h-screen bg-cover bg-center'>
                <img
                    src="/carousel-1.png"
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#DAA520]/75"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <img src="/icon-navbar-2.png" alt="Logo" className="mb-6 h-12" />
                    <h1 className="text-4xl font-bold mb-4">Build Your Vision to Perfection</h1>
                    <p className="text-lg mb-6">
                        Contact us and start your journey to building your dream home with
                        exceptional quality.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
                    >
                        Konsultasikan Dengan Kami Sekarang →
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Collaboration;