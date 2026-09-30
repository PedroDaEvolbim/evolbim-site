import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Execução e Acompanhamento de Obras",

  description:
    "Execução e acompanhamento técnico de obras com controle de qualidade, avanço físico, medições, registros de campo e acompanhamento de não conformidades em Jataí, Goiás.",

  alternates: {
    canonical: "/servicos/execucao-acompanhamento",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos/execucao-acompanhamento",
    siteName: "Evolbim Engenharia",

    title: "Execução e Acompanhamento de Obras | Evolbim Engenharia",

    description:
      "Acompanhamento técnico de obras com controle da execução, qualidade, avanço físico, medições, registros e não conformidades.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Execução e Acompanhamento de Obras - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Execução e Acompanhamento de Obras | Evolbim Engenharia",

    description:
      "Acompanhamento técnico para registrar, conferir e controlar a execução dos serviços ao longo da obra.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ExecucaoAcompanhamentoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}