export const metadata = {
    title: 'Loading...',
    icons: {
        icon: '/logo-pdka.webp',
    },
};

export default function Loading() {
return (
    <>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-16 h-16 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
        </div>
    </>
    );
}
