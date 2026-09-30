import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoria e Assessoria Técnica",

  description:
    "Consultoria e assessoria técnica em engenharia para análise de projetos, revisão técnica, diagnósticos, orientação e apoio a decisões em projetos e obras em Jataí, Goiás.",

  alternates: {
    canonical: "/servicos/consultoria-assessoria",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos/consultoria-assessoria",
    siteName: "Evolbim Engenharia",

    title: "Consultoria e Assessoria Técnica | Evolbim Engenharia",

    description:
      "Análise, diagnóstico e orientação técnica para apoiar decisões em projetos, obras e demandas específicas de engenharia.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Consultoria e Assessoria Técnica - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Consultoria e Assessoria Técnica | Evolbim Engenharia",

    description:
      "Consultoria em engenharia para análise de projetos, diagnóstico técnico, revisão e orientação em projetos e obras.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ConsultoriaAssessoriaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}