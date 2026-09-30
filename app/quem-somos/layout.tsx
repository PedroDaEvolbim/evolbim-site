import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos",

  description:
    "Conheça a Evolbim Engenharia, empresa de engenharia em Jataí, Goiás, que integra CAD, BIM, planejamento e gestão para conectar projeto e execução.",

  alternates: {
    canonical: "/quem-somos",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/quem-somos",
    siteName: "Evolbim Engenharia",

    title: "Quem Somos | Evolbim Engenharia",

    description:
      "Engenharia, CAD, BIM, planejamento e gestão integrados para transformar informações técnicas em soluções organizadas e preparadas para execução.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Evolbim Engenharia - Quem Somos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Quem Somos | Evolbim Engenharia",

    description:
      "Conheça a Evolbim Engenharia e nossa forma de conectar projeto, tecnologia, planejamento, gestão e execução.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function QuemSomosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}