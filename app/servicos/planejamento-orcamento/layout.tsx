import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planejamento e Orçamento de Obras",

  description:
    "Planejamento e orçamento de obras com quantitativos, orçamento analítico, referências de custos, cronograma físico-financeiro e controle previsto e realizado em Jataí, Goiás.",

  alternates: {
    canonical: "/servicos/planejamento-orcamento",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos/planejamento-orcamento",
    siteName: "Evolbim Engenharia",

    title: "Planejamento e Orçamento de Obras | Evolbim Engenharia",

    description:
      "Quantitativos, orçamento, cronograma físico-financeiro e planejamento para organizar custos, prazos e execução da obra.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Planejamento e Orçamento de Obras - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Planejamento e Orçamento de Obras | Evolbim Engenharia",

    description:
      "Planejamento, quantitativos, orçamento e cronograma físico-financeiro para apoiar o controle de custos e prazos da obra.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PlanejamentoOrcamentoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}