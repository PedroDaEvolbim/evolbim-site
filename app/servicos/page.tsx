"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    tag: "PROJETOS",
    title: "Projetos de Engenharia",
    description:
      "Desenvolvimento de soluções técnicas com foco em segurança, funcionalidade, compatibilidade e execução.",
    items: ["Arquitetônico", "Estrutural", "Instalações", "Detalhamentos"],
    href: "/servicos/projetos-de-engenharia",
  },
  {
    number: "02",
    tag: "CAD",
    title: "Desenho e Detalhamento Técnico",
    description:
      "Documentação técnica em CAD para transformar conceitos e levantamentos em informações claras para execução.",
    items: ["Plantas", "Cortes", "Fachadas", "Detalhamentos"],
    href: "/servicos/cad",
  },
  {
    number: "03",
    tag: "BIM",
    title: "Modelagem e Compatibilização",
    description:
      "Integração das disciplinas do projeto por meio da metodologia BIM, antecipando interferências antes da obra.",
    items: ["Modelagem", "Compatibilização", "Clash Detection", "Quantitativos"],
    href: "/servicos/bim",
  },
  {
    number: "04",
    tag: "PLANEJAMENTO",
    title: "Planejamento e Orçamento",
    description:
      "Estruturação técnica de custos, etapas, prazos e recursos para aumentar a previsibilidade do empreendimento.",
    items: ["Orçamento", "Cronograma", "Quantitativos", "Controle"],
    href: "/servicos/planejamento-orcamento",
  },
  {
    number: "05",
    tag: "OBRAS",
    title: "Execução e Acompanhamento",
    description:
      "Acompanhamento técnico para verificar qualidade, conformidade dos serviços e evolução da execução.",
    items: ["Fiscalização", "Medições", "Qualidade", "Acompanhamento"],
    href: "/servicos/execucao-acompanhamento",
  },
  {
    number: "06",
    tag: "CONSULTORIA",
    title: "Consultoria e Assessoria Técnica",
    description:
      "Suporte técnico para decisões relacionadas a projetos, planejamento, execução e gestão de obras.",
    items: ["Análises", "Orientação", "Planejamento", "Soluções técnicas"],
    href: "/servicos/consultoria-assessoria",
  },
];

export default function ServicosPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#061b2b] text-white selection:bg-[#16c7c2] selection:text-[#061b2b]">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061b2b]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[104px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
          <Link
            href="/"
            onClick={closeMenu}
            className="relative block h-[88px] w-[190px] shrink-0"
            aria-label="Evolbim Engenharia - Início"
          >
            <Image
              src="/images/brand/logo-light.png"
              alt="Evolbim Engenharia"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-9 text-[14px] font-medium text-slate-300 lg:flex">
            <Link className="transition hover:text-[#16c7c2]" href="/">
              Início
            </Link>

            <Link
              className="transition hover:text-[#16c7c2]"
              href="/quem-somos"
            >
              Quem Somos
            </Link>

            <Link className="text-[#16c7c2]" href="/servicos">
              Serviços
            </Link>

            <Link
              className="transition hover:text-[#16c7c2]"
              href="/como-trabalhamos"
            >
              Como Trabalhamos
            </Link>

            <Link
              className="transition hover:text-[#16c7c2]"
              href="/contato"
            >
              Contato
            </Link>
          </nav>

          <Link
            href="/contato#solicitar-orcamento"
            className="hidden rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7] lg:block"
          >
            Solicitar orçamento
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 lg:hidden"
            aria-label="Abrir menu"
          >
            <span className="h-[2px] w-5 bg-white" />
            <span className="h-[2px] w-5 bg-white" />
            <span className="h-[2px] w-5 bg-white" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#061b2b] px-6 py-6 lg:hidden">
            <nav className="mx-auto flex max-w-[1440px] flex-col gap-5 text-sm text-slate-200">
              <Link onClick={closeMenu} href="/">
                Início
              </Link>

              <Link onClick={closeMenu} href="/quem-somos">
                Quem Somos
              </Link>

              <Link
                onClick={closeMenu}
                href="/servicos"
                className="text-[#16c7c2]"
              >
                Serviços
              </Link>

              <Link onClick={closeMenu} href="/como-trabalhamos">
                Como Trabalhamos
              </Link>

              <Link onClick={closeMenu} href="/contato">
                Contato
              </Link>

              <Link
                onClick={closeMenu}
                href="/contato#solicitar-orcamento"
                className="mt-2 w-fit rounded-lg bg-[#16c7c2] px-6 py-3 font-bold text-[#041725]"
              >
                Solicitar orçamento
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#061b2b] pb-24 pt-[170px] md:pb-32 md:pt-[190px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(22,199,194,0.10),transparent_35%)]" />

        <div className="pointer-events-none absolute right-[4%] top-[22%] hidden opacity-[0.07] xl:block">
          <div className="h-[390px] w-[560px] rotate-[7deg] border border-[#16c7c2]" />
          <div className="absolute left-12 top-12 h-[390px] w-[560px] border border-[#16c7c2]" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
          <div>
            <SectionLabel>SERVIÇOS • EVOLBIM ENGENHARIA</SectionLabel>

            <h1 className="mt-8 max-w-[760px] text-[48px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[60px] lg:text-[68px]">
              Engenharia integrada
              <span className="mt-2 block text-[#16c7c2]">
                em todas as etapas.
              </span>
            </h1>

            <p className="mt-8 max-w-[680px] text-[17px] leading-8 text-slate-300 md:text-lg">
              Projetos, CAD, BIM, planejamento, orçamento, acompanhamento de
              obras e consultoria técnica conectados para organizar informações
              e preparar melhores decisões antes e durante a execução.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contato#solicitar-orcamento"
                className="rounded-lg bg-[#16c7c2] px-7 py-4 text-center text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
              >
                Solicitar orçamento
              </Link>

              <a
                href="#solucoes"
                className="rounded-lg border border-white/15 px-7 py-4 text-center text-sm font-semibold transition hover:border-[#16c7c2]/60 hover:bg-white/[0.04]"
              >
                Conhecer soluções
              </a>
            </div>
          </div>

          <ServicesBoard />
        </div>
      </section>

      {/* =========================================================
          INTRODUÇÃO
      ========================================================= */}
      <section className="bg-[#081f30] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-16">
          <div>
            <SectionLabel>ATUAÇÃO INTEGRADA</SectionLabel>

            <h2 className="mt-7 max-w-[620px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Do projeto
              <span className="block text-[#16c7c2]">à realidade da obra.</span>
            </h2>
          </div>

          <div className="max-w-[680px] lg:justify-self-end">
            <p className="text-lg leading-8 text-slate-300">
              Cada empreendimento possui necessidades diferentes. Por isso, os
              serviços podem ser contratados individualmente ou combinados
              conforme o escopo e a etapa do projeto.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              A proposta da Evolbim é conectar informação técnica, tecnologia,
              planejamento e acompanhamento para criar um processo mais
              organizado entre projeto e execução.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVIÇOS
      ========================================================= */}
      <section
        id="solucoes"
        className="border-y border-white/10 bg-[#061b2b] py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>NOSSAS SOLUÇÕES</SectionLabel>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-[720px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Soluções técnicas para
              <span className="block text-[#16c7c2]">
                cada etapa do empreendimento.
              </span>
            </h2>

            <p className="max-w-[610px] text-lg leading-8 text-slate-400 lg:justify-self-end">
              Conheça cada área de atuação e veja como a Evolbim pode contribuir
              para o desenvolvimento, organização e acompanhamento do seu
              projeto.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative min-h-[430px] bg-[#071d2d] p-8 transition duration-300 hover:bg-[#0a293b]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.22em] text-[#16c7c2]">
                    {service.tag}
                  </span>

                  <span className="font-mono text-xs text-slate-600">
                    {service.number}
                  </span>
                </div>

                <div className="mt-12 h-px w-10 bg-[#16c7c2] transition-all duration-300 group-hover:w-20" />

                <h3 className="mt-7 text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex items-center gap-3 text-sm font-bold text-[#16c7c2] transition-all duration-300 group-hover:gap-4">
                  <span>Conhecer serviço</span>
                  <span aria-hidden="true">→</span>
                </div>

                <Link
                  href={service.href}
                  aria-label={`Conhecer ${service.title}`}
                  className="absolute inset-0 z-10"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTEGRAÇÃO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#081f30] py-24 md:py-32">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,199,194,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(22,199,194,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>ENGENHARIA CONECTADA</SectionLabel>

          <h2 className="mt-7 max-w-[760px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
            Informação técnica conectada
            <span className="block text-[#16c7c2]">
              para apoiar a execução.
            </span>
          </h2>

          <div className="mt-16 overflow-hidden rounded-2xl border border-[#16c7c2]/20 bg-[#061b2b]">
            <div className="grid md:grid-cols-5">
              {["PROJETO", "CAD", "BIM", "PLANEJAMENTO", "OBRA"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`relative flex min-h-[130px] items-center justify-center px-5 text-center text-xs font-bold tracking-[0.16em] ${
                      index < 4
                        ? "border-b border-white/10 md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <span className="text-[#16c7c2]">{item}</span>

                    {index < 4 && (
                      <span className="absolute right-3 hidden text-[#16c7c2]/50 md:block">
                        →
                      </span>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <IntegrationCard
              number="01"
              title="Informação organizada"
              text="Documentação técnica estruturada para facilitar entendimento, análise e desenvolvimento."
            />

            <IntegrationCard
              number="02"
              title="Compatibilidade"
              text="Integração entre disciplinas para identificar interferências antes que elas cheguem à execução."
            />

            <IntegrationCard
              number="03"
              title="Previsibilidade"
              text="Planejamento e acompanhamento para melhorar a leitura de etapas, custos e evolução do empreendimento."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0a2638] py-24 md:py-32">
        <div className="absolute -right-28 -top-28 h-[500px] w-[500px] rounded-full border border-[#16c7c2]/10" />
        <div className="absolute -right-10 -top-10 h-[340px] w-[340px] rounded-full border border-[#16c7c2]/10" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16">
          <div>
            <SectionLabel>FALE COM A EVOLBIM</SectionLabel>

            <h2 className="mt-7 max-w-[760px] text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
              Não sabe qual serviço
              <span className="block text-[#16c7c2]">
                seu projeto precisa?
              </span>
            </h2>

            <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-300">
              Conte em que etapa está o seu empreendimento. A partir das
              informações iniciais, podemos entender melhor a demanda e avaliar
              o escopo adequado.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#061b2b]/70 p-8 md:p-10">
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#16c7c2]">
              PRÓXIMO PASSO
            </span>

            <h3 className="mt-6 text-2xl font-semibold">
              Conte sobre seu projeto.
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Preencha as informações iniciais para facilitar a análise da sua
              necessidade.
            </p>

            <Link
              href="/contato#solicitar-orcamento"
              className="mt-8 inline-flex rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
            >
              Solicitar avaliação/orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/10 bg-[#041725]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="relative h-[90px] w-[190px]">
                <Image
                  src="/images/brand/logo-light.png"
                  alt="Evolbim Engenharia"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="mt-5 max-w-[320px] text-sm leading-6 text-slate-500">
                Engenharia, tecnologia e gestão integradas para transformar
                projetos em soluções executáveis.
              </p>
            </div>

            <div>
              <strong className="text-sm">Navegação</strong>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
                <Link className="transition hover:text-[#16c7c2]" href="/">
                  Início
                </Link>

                <Link
                  className="transition hover:text-[#16c7c2]"
                  href="/quem-somos"
                >
                  Quem Somos
                </Link>

                <Link
                  className="transition hover:text-[#16c7c2]"
                  href="/servicos"
                >
                  Serviços
                </Link>

                <Link
                  className="transition hover:text-[#16c7c2]"
                  href="/como-trabalhamos"
                >
                  Como Trabalhamos
                </Link>

                <Link
                  className="transition hover:text-[#16c7c2]"
                  href="/contato"
                >
                  Contato
                </Link>
              </div>
            </div>

            <div>
              <strong className="text-sm">Contato</strong>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
                <span>Jataí • Goiás</span>

                <a
                  href="https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#16c7c2]"
                >
                  (64) 98420-1767
                </a>

                <a
                  href="mailto:contato@evolbimengenharia.com.br"
                  className="transition hover:text-[#16c7c2]"
                >
                  contato@evolbimengenharia.com.br
                </a>

                <span>Atendimento online e presencial</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-600 md:flex-row">
            <span>
              © {new Date().getFullYear()} Evolbim Engenharia. Todos os direitos
              reservados.
            </span>

            <span>Engenharia • CAD • BIM • Gestão</span>
          </div>
        </div>
      </footer>

      {/* =========================================================
          WHATSAPP
      ========================================================= */}
      <a
        href="https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Evolbim pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#16c7c2] text-[#041725] shadow-xl shadow-black/30 transition hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path d="M12 2a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l5.3-1.3A9.5 9.5 0 1 0 12 2Zm0 17.2a7.7 7.7 0 0 1-3.9-1.1l-.4-.2-3.1.8.8-3-.2-.4A7.7 7.7 0 1 1 12 19.2Zm4.2-5.8c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.6-1.1.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.2-1 0-.2-.2-.3-.4-.4Z" />
        </svg>
      </a>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-[#16c7c2]" />

      <span className="text-[11px] font-bold tracking-[0.3em] text-[#16c7c2]">
        {children}
      </span>
    </div>
  );
}

function ServicesBoard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-10 -top-10 h-40 w-40 border border-[#16c7c2]/10" />
      <div className="absolute -bottom-10 -right-10 h-48 w-48 border border-[#16c7c2]/10" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2a3c]/90 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#16c7c2]" />

            <span className="text-[11px] font-bold tracking-[0.22em] text-[#20d8d2]">
              EVOLBIM • SERVIÇOS
            </span>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-slate-500">
            ENGENHARIA INTEGRADA
          </span>
        </div>

        <div className="relative p-7">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative space-y-3">
            <BoardLine number="01" title="PROJETOS" detail="ENGENHARIA" />
            <BoardLine number="02" title="CAD" detail="DOCUMENTAÇÃO" />
            <BoardLine number="03" title="BIM" detail="COMPATIBILIZAÇÃO" />
            <BoardLine number="04" title="PLANEJAMENTO" detail="PRAZO • CUSTO" />
            <BoardLine number="05" title="OBRAS" detail="ACOMPANHAMENTO" />
            <BoardLine number="06" title="CONSULTORIA" detail="SUPORTE TÉCNICO" />
          </div>

          <div className="relative mt-7 border-t border-white/10 pt-5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[0.18em] text-slate-500">
                PROJETO
              </span>

              <span className="text-[#16c7c2]/50">→</span>

              <span className="text-[9px] font-bold tracking-[0.18em] text-slate-500">
                PLANEJAMENTO
              </span>

              <span className="text-[#16c7c2]/50">→</span>

              <span className="text-[9px] font-bold tracking-[0.18em] text-[#16c7c2]">
                EXECUÇÃO
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoardLine({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-[#071d2d]/80 px-5 py-4">
      <span className="font-mono text-[10px] text-[#16c7c2]">{number}</span>

      <span className="flex-1 text-xs font-bold tracking-[0.12em] text-white">
        {title}
      </span>

      <span className="text-[9px] tracking-[0.14em] text-slate-500">
        {detail}
      </span>
    </div>
  );
}

function IntegrationCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="min-h-[230px] rounded-2xl border border-white/10 bg-[#071d2d] p-8 transition hover:border-[#16c7c2]/30">
      <span className="font-mono text-xs text-[#16c7c2]">{number}</span>

      <h3 className="mt-10 text-xl font-semibold">{title}</h3>

      <div className="mt-4 h-px w-10 bg-[#16c7c2]" />

      <p className="mt-5 text-sm leading-7 text-slate-400">{text}</p>
    </article>
  );
}