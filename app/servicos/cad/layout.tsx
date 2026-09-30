import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desenho e Detalhamento Técnico CAD",

  description:
    "Serviços em CAD para desenho e detalhamento técnico, plantas, cortes, fachadas, pranchas, revisão e organização de arquivos técnicos em Jataí, Goiás.",

  alternates: {
    canonical: "/servicos/cad",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos/cad",
    siteName: "Evolbim Engenharia",

    title: "Desenho e Detalhamento Técnico CAD | Evolbim Engenharia",

    description:
      "Desenvolvimento e organização de desenhos técnicos em CAD, incluindo plantas, cortes, fachadas, detalhamentos e pranchas.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Desenho e Detalhamento Técnico CAD - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Desenho e Detalhamento Técnico CAD | Evolbim Engenharia",

    description:
      "Desenhos técnicos em CAD, plantas, cortes, fachadas, detalhamentos, pranchas e organização de arquivos técnicos.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}