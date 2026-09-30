import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Engenharia, CAD, BIM e Gestão",

  description:
    "Conheça os serviços da Evolbim Engenharia em projetos de engenharia, CAD, BIM, planejamento, orçamento, acompanhamento de obras e consultoria técnica em Jataí, Goiás.",

  alternates: {
    canonical: "/servicos",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos",
    siteName: "Evolbim Engenharia",

    title: "Serviços de Engenharia, CAD, BIM e Gestão | Evolbim Engenharia",

    description:
      "Projetos de engenharia, CAD, BIM, planejamento, orçamento, acompanhamento de obras e consultoria técnica.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Serviços da Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Serviços de Engenharia, CAD, BIM e Gestão | Evolbim Engenharia",

    description:
      "Projetos de engenharia, CAD, BIM, planejamento, orçamento, acompanhamento de obras e consultoria técnica.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}