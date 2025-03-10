"use client";
import { useState } from "react";

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
            setSuccess("Pesan Anda telah terkirim!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            setSuccess("Gagal mengirim pesan. Coba lagi nanti.");
        }
    };

    return (
        <section className="bg-[#121212] text-[#F5F5F5] py-10">
            <div className="max-w-3xl mx-auto px-6 bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-[#FFCC00] mb-6">Hubungi Kami</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-transparent border border-gray-300 rounded-md text-white" />
                    <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-transparent border border-gray-300 rounded-md text-white" />
                    <input type="text" name="subject" placeholder="Subjek" value={formData.subject} onChange={handleChange} required className="w-full p-3 bg-transparent border border-gray-300 rounded-md text-white" />
                    <textarea name="message" placeholder="Pesan Anda" value={formData.message} onChange={handleChange} required rows="4" className="w-full p-3 bg-transparent border border-gray-300 rounded-md text-white"></textarea>
                    <button type="submit" className="w-full bg-[#FFCC00] text-black font-bold py-3 rounded-md">
                        {loading ? "Mengirim..." : "Kirim Pesan"}
                    </button>
                </form>
                {success && <p className="text-center mt-4">{success}</p>}
            </div>
        </section>
    );
}
