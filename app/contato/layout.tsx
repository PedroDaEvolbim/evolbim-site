import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato e Orçamento",

  description:
    "Entre em contato com a Evolbim Engenharia em Jataí, Goiás. Solicite uma avaliação ou orçamento para projetos, CAD, BIM, planejamento, obras e consultoria técnica.",

  alternates: {
    canonical: "/contato",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/contato",
    siteName: "Evolbim Engenharia",

    title: "Contato e Orçamento | Evolbim Engenharia",

    description:
      "Envie sua demanda para a Evolbim Engenharia e solicite uma avaliação ou orçamento para projetos, CAD, BIM, planejamento, obras e consultoria.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Contato e Orçamento - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contato e Orçamento | Evolbim Engenharia",

    description:
      "Entre em contato com a Evolbim Engenharia e envie as informações iniciais da sua demanda de engenharia.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContatoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}