import Link from "next/link";

export const metadata = {
    title: '404 - Halaman Tidak Ditemukan',
    icons: {
        icon: '/logo-pdka.webp',
    },
};

export default function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center text-center justify-center min-h-screen bg-gray-900 text-white">
                <h1 className="text-2xl font-bold md:text-3xl">Maaf, halaman yang dituju tidak ada</h1>
                <p className="mt-4">Silakan kembali ke halaman utama</p>
                <Link
                    href="/"
                    className="mt-6 px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
                >
                    Kembali ke Home
                </Link>
            </div>
        </>
    );
}
