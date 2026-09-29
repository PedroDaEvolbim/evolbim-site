"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const executionServices = [
  {
    number: "01",
    title: "Acompanhamento Técnico",
    text: "Acompanhamento da execução para verificar serviços, etapas e informações técnicas conforme o escopo contratado.",
    items: ["Execução", "Conferência", "Registros", "Orientação"],
  },
  {
    number: "02",
    title: "Controle de Qualidade",
    text: "Verificação de serviços executados, materiais e critérios técnicos previstos nos projetos e documentos da obra.",
    items: ["Qualidade", "Inspeções", "Critérios", "Conformidade"],
  },
  {
    number: "03",
    title: "Avanço Físico",
    text: "Registro e acompanhamento da evolução dos serviços para comparar o andamento da obra com o planejamento.",
    items: ["Progresso", "Etapas", "Previsto", "Realizado"],
  },
  {
    number: "04",
    title: "Medições de Serviços",
    text: "Levantamento e organização das quantidades executadas para apoiar medições e controles conforme critérios definidos.",
    items: ["Quantidades", "Medições", "Memória", "Controle"],
  },
  {
    number: "05",
    title: "Registros de Obra",
    text: "Organização de evidências e informações de campo para documentar o desenvolvimento e as ocorrências da execução.",
    items: ["Fotos", "Relatórios", "Ocorrências", "Histórico"],
  },
  {
    number: "06",
    title: "Não Conformidades",
    text: "Registro e acompanhamento de desvios identificados durante a execução, apoiando tratativas e verificações posteriores.",
    items: ["Desvios", "Registro", "Tratativas", "Verificação"],
  },
];

const stages = [
  ["01", "Preparação", "Análise do escopo, projetos, planejamento e documentos disponíveis para orientar o acompanhamento."],
  ["02", "Mobilização", "Definição das rotinas de campo, registros, pontos de controle e critérios previstos para o serviço."],
  ["03", "Acompanhamento", "Verificação das atividades executadas e registro das informações relevantes durante a obra."],
  ["04", "Controle", "Comparação entre execução, projeto e planejamento, incluindo avanço, medições e ocorrências quando aplicável."],
  ["05", "Tratativas", "Organização dos desvios e pendências identificados para acompanhamento das ações previstas."],
  ["06", "Relatórios", "Consolidação dos registros, indicadores e documentos definidos no escopo contratado."],
];

const deliverables = [
  "Relatórios de acompanhamento técnico",
  "Registros fotográficos da execução",
  "Controle de avanço físico",
  "Planilhas de medição, quando contratadas",
  "Registros de inspeções e verificações",
  "Relação de pendências e não conformidades",
  "Histórico de ocorrências relevantes",
  "Indicadores e controles previstos no escopo",
];

const whatsapp =
  "https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Execu%C3%A7%C3%A3o%20e%20Acompanhamento%20de%20Obra.";

export default function ExecucaoAcompanhamentoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#061b2b] text-white selection:bg-[#16b9b4] selection:text-[#061b2b]">
      {/* HEADER */}
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
              sizes="190px"
              priority
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-9 text-[14px] font-medium text-slate-300 lg:flex">
            <Link className="transition hover:text-[#16c7c2]" href="/">
              Início
            </Link>
            <Link className="transition hover:text-[#16c7c2]" href="/quem-somos">
              Quem Somos
            </Link>
            <Link className="text-[#16c7c2]" href="/#servicos">
              Serviços
            </Link>
            <Link className="transition hover:text-[#16c7c2]" href="/como-trabalhamos">
              Como Trabalhamos
            </Link>
            <Link className="transition hover:text-[#16c7c2]" href="/contato">
              Contato
            </Link>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7] lg:block"
          >
            Solicitar orçamento
          </a>

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
              <Link onClick={closeMenu} href="/">Início</Link>
              <Link onClick={closeMenu} href="/quem-somos">Quem Somos</Link>
              <Link onClick={closeMenu} href="/#servicos">Serviços</Link>
              <Link onClick={closeMenu} href="/como-trabalhamos">Como Trabalhamos</Link>
              <Link onClick={closeMenu} href="/contato">Contato</Link>
              <a
                onClick={closeMenu}
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-fit rounded-lg bg-[#16c7c2] px-6 py-3 font-bold text-[#041725]"
              >
                Solicitar orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-[104px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_38%,rgba(22,199,194,0.12),transparent_34%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,199,194,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(22,199,194,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#16c7c2]" />
              <span className="text-[12px] font-bold tracking-[0.34em] text-[#20d8d2]">
                SERVIÇOS • EXECUÇÃO E ACOMPANHAMENTO
              </span>
            </div>

            <h1 className="max-w-[760px] text-[48px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[60px] lg:text-[70px]">
              Engenharia presente na obra.
              <span className="block text-[#16c7c2]">Execução acompanhada de perto.</span>
            </h1>

            <p className="mt-8 max-w-[680px] text-[17px] leading-8 text-slate-300 md:text-[18px]">
              Acompanhamento técnico para registrar, conferir e controlar a execução
              dos serviços, aproximando projeto, planejamento e realidade de
              campo ao longo da obra.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[#16c7c2] px-8 py-4 text-center text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
              >
                Solicitar orçamento
              </a>
              <a
                href="#tipos"
                className="rounded-lg border border-white/15 px-8 py-4 text-center text-sm font-semibold transition hover:border-[#16c7c2]/60 hover:bg-white/[0.04]"
              >
                Conhecer o acompanhamento
              </a>
            </div>
          </div>

          <TechnicalBoard />
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section className="bg-[#061c2a] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
          <div>
            <SectionLabel>VISÃO GERAL</SectionLabel>
            <h2 className="mt-7 max-w-[560px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Informação de campo para
              <span className="text-[#16c7c2]"> apoiar a execução.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              number="01"
              title="Clareza"
              text="Documentação organizada para facilitar leitura, entendimento e comunicação das soluções."
            />
            <InfoCard
              number="02"
              title="Integração"
              text="Disciplinas desenvolvidas considerando sua relação com as demais informações do empreendimento."
            />
            <InfoCard
              number="03"
              title="Detalhamento"
              text="Representações técnicas que apoiam a definição das soluções antes da execução."
            />
            <InfoCard
              number="04"
              title="Compatibilidade"
              text="Análise das interfaces do projeto para reduzir conflitos e dúvidas na etapa de obra."
            />
          </div>
        </div>
      </section>

      {/* SOLUÇÕES PARA A EXECUÇÃO */}
      <section id="tipos" className="border-y border-white/10 bg-[#081f30] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>SOLUÇÕES PARA A EXECUÇÃO</SectionLabel>
          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-[700px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Acompanhamento técnico para
              <span className="text-[#16c7c2]"> controlar a execução.</span>
            </h2>
            <p className="max-w-[600px] text-lg leading-8 text-slate-400 lg:justify-self-end">
              O escopo é definido conforme o empreendimento e a necessidade do cliente,
              podendo envolver visitas técnicas, conferências, medições, registros,
              acompanhamento de avanço e controle de não conformidades.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {executionServices.map((project) => (
              <article
                key={project.number}
                className="group min-h-[390px] bg-[#071d2d] p-8 transition duration-300 hover:bg-[#0a293b]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#16c7c2]">{project.number}</span>
                  <span className="h-px w-10 bg-[#16c7c2]/50 transition-all group-hover:w-20" />
                </div>
                <h3 className="mt-12 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-5 leading-7 text-slate-400">{project.text}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUÇÃO • QUALIDADE • CONTROLE */}
      <section className="relative overflow-hidden bg-[#061b2b] py-24 md:py-32">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(22,199,194,0.07),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:px-16">
          <div>
            <SectionLabel>EXECUÇÃO • QUALIDADE • CONTROLE</SectionLabel>
            <h2 className="mt-7 max-w-[650px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Do projeto ao campo:
              <span className="text-[#16c7c2]"> controle da execução.</span>
            </h2>
            <p className="mt-7 max-w-[620px] text-lg leading-8 text-slate-400">
              A execução precisa manter conexão com projetos, critérios técnicos e
              planejamento. O acompanhamento organiza informações de campo para
              registrar o avanço, identificar desvios e apoiar as decisões da obra.
            </p>
          </div>

          <div className="space-y-4">
            <TechnologyLine number="01" title="CAMPO" text="Acompanhamento dos serviços e das etapas executadas na obra." />
            <TechnologyLine number="02" title="QUALIDADE" text="Verificações e registros conforme os critérios técnicos previstos." />
            <TechnologyLine number="03" title="AVANÇO" text="Acompanhamento do progresso e comparação entre previsto e realizado." />
            <TechnologyLine number="04" title="REGISTROS" text="Informações, evidências e ocorrências organizadas ao longo da execução." />
          </div>
        </div>
      </section>

      {/* CONTROLE */}
      <section className="border-y border-white/10 bg-[#081f30] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>COMO DESENVOLVEMOS</SectionLabel>
          <h2 className="mt-7 max-w-[760px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
            Um processo estruturado
            <span className="text-[#16c7c2]"> do campo ao relatório.</span>
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(([number, title, text]) => (
              <div
                key={number}
                className="relative min-h-[250px] rounded-xl border border-white/10 bg-[#071d2d] p-7"
              >
                <span className="font-mono text-xs text-[#16c7c2]">{number}</span>
                <h3 className="mt-12 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section className="bg-[#061b2b] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <div>
            <SectionLabel>ENTREGÁVEIS</SectionLabel>
            <h2 className="mt-7 max-w-[600px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Registros e controles
              <span className="text-[#16c7c2]"> conforme o escopo contratado.</span>
            </h2>
            <p className="mt-7 max-w-[570px] text-lg leading-8 text-slate-400">
              Cada contratação define a frequência, as atividades e os documentos necessários.
              A proposta comercial registra as responsabilidades, critérios e entregáveis
              previstos para o acompanhamento da execução.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <div key={item} className="flex min-h-[110px] items-center gap-5 bg-[#081f30] p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#16c7c2]/30 text-xs font-bold text-[#16c7c2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#0a2638] py-24 md:py-32">
        <div className="absolute -right-28 -top-28 h-[500px] w-[500px] rounded-full border border-[#16c7c2]/10" />
        <div className="absolute -right-10 -top-10 h-[340px] w-[340px] rounded-full border border-[#16c7c2]/10" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16">
          <div>
            <SectionLabel>FALE COM A EVOLBIM</SectionLabel>
            <h2 className="mt-7 max-w-[760px] text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
              Quer acompanhar sua obra
              <span className="block text-[#16c7c2]">com mais informação e controle?</span>
            </h2>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-300">
              Envie as informações do empreendimento. A Evolbim avalia o estágio da obra,
              os documentos disponíveis e os objetivos para estruturar o escopo
              de execução e acompanhamento técnico.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#061b2b]/70 p-8 md:p-10">
            <span className="text-xs font-bold tracking-[0.2em] text-[#16c7c2]">
              EXECUÇÃO E ACOMPANHAMENTO
            </span>
            <p className="mt-5 text-2xl font-semibold leading-9">
              Solicite uma avaliação inicial do acompanhamento da sua obra.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
            >
              Falar pelo WhatsApp
            </a>
            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Atendimento online e presencial • Jataí, Goiás
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#041725]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="relative h-[90px] w-[190px]">
                <Image
                  src="/images/brand/logo-light.png"
                  alt="Evolbim Engenharia"
                  fill
                  sizes="190px"
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
                <Link href="/">Início</Link>
                <Link href="/quem-somos">Quem Somos</Link>
                <Link href="/#servicos">Serviços</Link>
                <Link href="/como-trabalhamos">Como Trabalhamos</Link>
                <Link href="/contato">Contato</Link>
              </div>
            </div>

            <div>
              <strong className="text-sm">Contato</strong>
              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
                <span>Jataí • Goiás</span>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#16c7c2]"
                >
                  (64) 98420-1767
                </a>
                <span>contato@evolbimengenharia.com.br</span>
                <span>Atendimento online e presencial</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-600 md:flex-row">
            <span>© {new Date().getFullYear()} Evolbim Engenharia. Todos os direitos reservados.</span>
            <span>Engenharia • CAD • BIM • Gestão</span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Evolbim pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#16c7c2] text-[#041725] shadow-xl shadow-black/30 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
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

function InfoCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#082536] p-7 transition hover:-translate-y-1 hover:border-[#16c7c2]/30">
      <span className="font-mono text-xs text-[#16c7c2]">{number}</span>
      <h3 className="mt-8 text-xl font-bold">{title}</h3>
      <div className="mt-4 h-px w-10 bg-[#16c7c2]" />
      <p className="mt-5 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function TechnologyLine({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-6 rounded-xl border border-white/10 bg-[#081f30] p-6 transition hover:border-[#16c7c2]/30 hover:bg-[#0a293b]">
      <span className="font-mono text-xs text-[#16c7c2]">{number}</span>
      <div className="flex-1">
        <strong className="text-sm tracking-[0.12em]">{title}</strong>
        <p className="mt-1 text-sm text-slate-500">{text}</p>
      </div>
      <span className="text-[#16c7c2]/40 transition group-hover:translate-x-1 group-hover:text-[#16c7c2]">
        →
      </span>
    </div>
  );
}

function TechnicalBoard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-12 -top-12 h-40 w-40 border border-[#16c7c2]/10" />
      <div className="absolute -bottom-12 -right-8 h-48 w-48 border border-[#16c7c2]/10" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2a3c]/90 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#16c7c2]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#20d8d2]">
              EVOLBIM • OBRA
            </span>
          </div>
          <span className="text-[10px] tracking-[0.22em] text-slate-500">EXECUÇÃO • QUALIDADE • CONTROLE</span>
        </div>

        <div className="relative h-[420px]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="absolute left-[10%] top-[12%] h-[65%] w-[68%] border border-[#16c7c2]/80">
            <div className="absolute left-[36%] top-0 h-full border-l border-[#16c7c2]/70" />
            <div className="absolute left-0 top-[43%] w-full border-t border-[#16c7c2]/70" />
            <div className="absolute left-[36%] top-[24%] w-[40%] border-t border-[#16c7c2]/70" />
            <div className="absolute left-[76%] top-0 h-[43%] border-l border-[#16c7c2]/70" />

            <span className="absolute left-[10%] top-[13%] text-[9px] tracking-[0.12em] text-[#16c7c2]">
              EXECUÇÃO
            </span>
            <span className="absolute left-[43%] top-[10%] text-[9px] tracking-[0.12em] text-[#16c7c2]">
              AVANÇO
            </span>
            <span className="absolute left-[10%] top-[72%] text-[9px] tracking-[0.12em] text-[#16c7c2]">
              CONTROLE
            </span>
          </div>

          <div className="absolute bottom-5 right-6 rounded-lg border border-[#16c7c2]/30 bg-[#061b2b]/90 px-5 py-4">
            <span className="block text-[9px] tracking-[0.2em] text-slate-500">CONTROLE</span>
            <strong className="mt-1 block text-xs tracking-[0.14em] text-[#16c7c2]">
              ACOMPANHAMENTO TÉCNICO
            </strong>
          </div>

          <div className="absolute bottom-5 left-6 flex gap-5 border-t border-white/10 pt-3 text-[8px] tracking-[0.14em] text-slate-500">
            <span>EVOLBIM</span>
            <span>ENGENHARIA</span>
            <span>REV. 00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
