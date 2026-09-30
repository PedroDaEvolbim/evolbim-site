import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Trabalhamos",

  description:
    "Conheça o processo de trabalho da Evolbim Engenharia, do entendimento da demanda ao desenvolvimento, compatibilização, entrega e acompanhamento técnico.",

  alternates: {
    canonical: "/como-trabalhamos",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/como-trabalhamos",
    siteName: "Evolbim Engenharia",

    title: "Como Trabalhamos | Evolbim Engenharia",

    description:
      "Um processo técnico organizado para conectar informações, desenvolvimento, compatibilização, planejamento, entrega e acompanhamento.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Como Trabalhamos - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Como Trabalhamos | Evolbim Engenharia",

    description:
      "Conheça o processo técnico da Evolbim Engenharia, do entendimento da necessidade ao acompanhamento das etapas contratadas.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ComoTrabalhamosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}