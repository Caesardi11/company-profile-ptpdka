import "./globals.css";

export const metadata = {
  title: "PT. Panca Duta Karya Abadi",
  description: "Engineering Bureau & General Contractor",
  icons: {
    icon: "/logo-pdka.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary antialiased">
        {children}
      </body>
    </html>
  );
}
