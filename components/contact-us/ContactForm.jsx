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
        <section className="left-contact-container">
            <form onSubmit={handleSubmit} className="space-y-5 text-start">
                <div>
                    <label htmlFor="name" className="left-contact-label">Nama Lengkap <span className="text-red-500">*</span></label>
                    <div className="left-input-container">
                        <User className="left-contact-icon" />
                        <input type="text" name="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required className="left-contact-input-with-icon" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="left-contact-label">Email <span className="text-red-500">*</span></label>
                    <div className="left-input-container">
                        <Mail className="left-contact-icon" />
                        <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required className="left-contact-input-with-icon" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="left-contact-label">Subyek <span className="text-red-500">*</span></label>
                    <div className="left-input-container">
                        <MessageSquare className="left-contact-icon" />
                        <input type="text" name="subject" placeholder="cth : Konstruksi gedung hunian, perkantoran, dan bangunan sipil jalan" value={formData.subject} onChange={handleChange} required className="left-contact-input-with-icon" />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="left-contact-label">Catatan atau pertanyaan spesifik terkait proyek <span className="text-red-500">*</span></label>
                    <textarea name="message" placeholder="Masukkan pesan Anda disini" value={formData.message} onChange={handleChange} required rows="6" className="left-contact-input"></textarea>
                </div>
                <button type="submit" className="left-form-btn">
                    {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
            </form>
            {success && <p className="success-msg">{success}</p>}
        </section>
    );
}
