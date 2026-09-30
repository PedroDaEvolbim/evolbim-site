import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelagem e Compatibilização BIM",

  description:
    "Serviços de modelagem e compatibilização BIM, coordenação de modelos, Clash Detection, documentação e quantitativos para projetos de engenharia em Jataí, Goiás.",

  alternates: {
    canonical: "/servicos/bim",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos/bim",
    siteName: "Evolbim Engenharia",

    title: "Modelagem e Compatibilização BIM | Evolbim Engenharia",

    description:
      "Modelagem BIM, compatibilização de projetos, coordenação de modelos e identificação de interferências antes da execução.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Modelagem e Compatibilização BIM - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Modelagem e Compatibilização BIM | Evolbim Engenharia",

    description:
      "Modelagem BIM, compatibilização de projetos, Clash Detection e coordenação de modelos para apoiar o desenvolvimento e a execução.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BimLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}