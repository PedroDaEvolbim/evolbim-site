import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://evolbimengenharia.com.br";

  const routes = [
    "",
    "/quem-somos",
    "/como-trabalhamos",
    "/contato",
    "/servicos/projetos-de-engenharia",
    "/servicos/cad",
    "/servicos/bim",
    "/servicos/planejamento-orcamento",
    "/servicos/execucao-acompanhamento",
    "/servicos/consultoria-assessoria",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/servicos/") ? 0.8 : 0.7,
  }));
}