"use client";
import { useState, useEffect } from "react";
import { Mail, MessageSquare, User } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        setLoading(false);

        if (result.success) {
            setSuccess("Pesan Anda berhasil terkirim!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            setSuccess("Gagal mengirim pesan. Coba lagi nanti.");
        }
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(null);
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [success]);

    return (
        <section className="bg-[#121212]/90 text-[#F5F5F5] p-10 rounded-md shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5 text-start">
                <div>
                    <label htmlFor="name" className="heading block mb-1 text-base leading-relaxed tracking-wider">Nama Lengkap <span className="text-red-500">*</span></label>
                    <div className="flex items-center text-center">
                        <User className="absolute ml-3 p-1 bg-[#DAA520] rounded-full" />
                        <input type="text" name="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required className="w-full py-3 px-5 pl-11 bg-coolWhite rounded-lg text-sm text-black focus:outline-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="heading block mb-1 text-base leading-relaxed tracking-wider">Email <span className="text-red-500">*</span></label>
                    <div className="flex items-center text-center">
                        <Mail className="absolute ml-3 p-1 bg-[#DAA520] rounded-full" />
                        <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required className="w-full py-3 px-5 pl-11 bg-coolWhite rounded-lg text-sm text-black focus:outline-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="heading block mb-1 text-base leading-relaxed tracking-wider">Subyek <span className="text-red-500">*</span></label>
                    <div className="flex items-center text-center">
                        <MessageSquare className="absolute ml-3 p-1 bg-[#DAA520] rounded-full" />
                        <input type="text" name="subject" placeholder="cth : Konstruksi gedung hunian, perkantoran, dan bangunan sipil jalan" value={formData.subject} onChange={handleChange} required className="w-full py-3 px-5 pl-11 bg-coolWhite rounded-lg text-sm text-black focus:outline-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="heading block mb-1 text-base leading-relaxed tracking-wider">Catatan atau pertanyaan spesifik terkait proyek <span className="text-red-500">*</span></label>
                    <textarea name="message" placeholder="Masukkan pesan Anda disini" value={formData.message} onChange={handleChange} required rows="6" className="w-full py-3 px-5 bg-coolWhite rounded-lg text-sm text-black focus:outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#DAA520] text-black font-bold py-3 rounded-md hover:bg-[#FFCC00]">
                    {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
            </form>
            {success && <p className="text-center text-coolWhite mt-7">{success}</p>}
        </section>
    );
}
