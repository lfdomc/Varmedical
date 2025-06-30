import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Varmedical",
  description:
    "Empresa líder a nivel nacional con los más altos estándares de calidad en la prestación de servicios biomédicos y suministros a clínicas, laboratorios y hospitales contribuyendo con el avance tecnológico en el sector de la salud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Propiedades pasadas al componente WhatsApp */}
        
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}