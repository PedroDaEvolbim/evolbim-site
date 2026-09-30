import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evolbimengenharia.com.br"),

  title: {
    default: "Evolbim Engenharia | Engenharia, CAD, BIM e Gestão",
    template: "%s | Evolbim Engenharia",
  },

  description:
    "Projetos de engenharia, CAD, BIM, planejamento, orçamento, consultoria e acompanhamento técnico em Jataí, Goiás, com atendimento online e presencial.",

  applicationName: "Evolbim Engenharia",

  keywords: [
    "Evolbim Engenharia",
    "engenharia em Jataí",
    "engenharia em Goiás",
    "projetos de engenharia",
    "CAD",
    "BIM",
    "compatibilização de projetos",
    "planejamento de obras",
    "orçamento de obras",
    "acompanhamento de obras",
    "consultoria de engenharia",
  ],

  authors: [{ name: "Evolbim Engenharia" }],
  creator: "Evolbim Engenharia",
  publisher: "Evolbim Engenharia",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://evolbimengenharia.com.br",
    siteName: "Evolbim Engenharia",

    title: "Evolbim Engenharia | Engenharia, CAD, BIM e Gestão",

    description:
      "Engenharia, CAD, BIM, planejamento e gestão integrados para transformar projetos em soluções executáveis.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Evolbim Engenharia - Engenharia, CAD, BIM e Gestão",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Evolbim Engenharia | Engenharia, CAD, BIM e Gestão",

    description:
      "Engenharia, CAD, BIM, planejamento e gestão integrados para transformar projetos em soluções executáveis.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}