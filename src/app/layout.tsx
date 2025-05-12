import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";

const fontNunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O melhor delivery de tudo é no aiqfome",
  description:
    "Peça comida, bebidas, mercado, farmácia, padaria, pet shop e muito mais pelo maior aplicativo de delivery do interior. Baixe o app agora mesmo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontNunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
