import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos de Engenharia em Jataí",

  description:
    "Projetos de engenharia em Jataí, Goiás: projeto arquitetônico, estrutural, elétrico, hidrossanitário, detalhamento técnico e compatibilização de projetos.",

  alternates: {
    canonical: "/servicos/projetos-de-engenharia",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos/projetos-de-engenharia",
    siteName: "Evolbim Engenharia",

    title: "Projetos de Engenharia em Jataí | Evolbim Engenharia",

    description:
      "Desenvolvimento de projetos arquitetônicos, estruturais, elétricos e hidrossanitários, com detalhamento técnico e compatibilização.",

    images: [
      {
        url: "/images/brand/og-evolbim.png",
        width: 1728,
        height: 910,
        alt: "Projetos de Engenharia - Evolbim Engenharia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Projetos de Engenharia em Jataí | Evolbim Engenharia",

    description:
      "Projetos arquitetônicos, estruturais, elétricos e hidrossanitários, detalhamento técnico e compatibilização.",

    images: ["/images/brand/og-evolbim.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjetosDeEngenhariaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}