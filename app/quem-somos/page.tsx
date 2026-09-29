"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const whatsapp =
  "https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const pillars = [
  {
    number: "01",
    title: "Integração",
    text: "Projeto, planejamento e execução tratados como partes conectadas do mesmo processo.",
  },
  {
    number: "02",
    title: "Tecnologia",
    text: "CAD e BIM aplicados para organizar informações, desenvolver soluções e melhorar a comunicação técnica.",
  },
  {
    number: "03",
    title: "Gestão",
    text: "Organização técnica para apoiar decisões, estruturar etapas e aumentar a previsibilidade do empreendimento.",
  },
];

const process = [
  {
    number: "01",
    title: "Ideia",
    text: "Entendimento da necessidade, dos objetivos e das características da demanda.",
  },
  {
    number: "02",
    title: "CAD",
    text: "Desenvolvimento técnico, detalhamento e organização da documentação.",
  },
  {
    number: "03",
    title: "BIM",
    text: "Modelagem, integração das informações e compatibilização entre disciplinas.",
  },
  {
    number: "04",
    title: "Planejamento",
    text: "Estruturação de etapas, custos, prazos e recursos necessários à execução.",
  },
  {
    number: "05",
    title: "Obra",
    text: "Acompanhamento técnico e controle da execução conforme o escopo contratado.",
  },
];

const principles = [
  {
    number: "01",
    title: "Clareza técnica",
    text: "Informações organizadas para facilitar o entendimento entre projeto, planejamento e execução.",
  },
  {
    number: "02",
    title: "Previsibilidade",
    text: "Planejamento e análise técnica para antecipar necessidades e reduzir improvisos durante a obra.",
  },
  {
    number: "03",
    title: "Compatibilidade",
    text: "Integração das disciplinas para identificar interferências e melhorar a qualidade das informações.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Comunicação próxima e suporte técnico de acordo com as características de cada contratação.",
  },
];

export default function QuemSomosPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#061b2b] text-white selection:bg-[#16c7c2] selection:text-[#061b2b]">
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

            <Link className="text-[#16c7c2]" href="/quem-somos">
              Quem Somos
            </Link>

            <Link
              className="transition hover:text-[#16c7c2]"
              href="/#servicos"
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
              <Link onClick={closeMenu} href="/">
                Início
              </Link>

              <Link
                onClick={closeMenu}
                className="text-[#16c7c2]"
                href="/quem-somos"
              >
                Quem Somos
              </Link>

              <Link onClick={closeMenu} href="/#servicos">
                Serviços
              </Link>

              <Link onClick={closeMenu} href="/como-trabalhamos">
                Como Trabalhamos
              </Link>

              <Link onClick={closeMenu} href="/contato">
                Contato
              </Link>

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(22,199,194,0.12),transparent_35%)]" />

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
            <SectionLabel>EVOLBIM ENGENHARIA</SectionLabel>

            <h1 className="mt-8 max-w-[790px] text-[50px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[62px] lg:text-[72px]">
              Engenharia conectada
              <span className="block text-[#16c7c2]">
                do projeto à execução.
              </span>
            </h1>

            <p className="mt-8 max-w-[690px] text-[17px] leading-8 text-slate-300 md:text-[18px]">
              A Evolbim Engenharia integra engenharia, CAD, BIM, planejamento e
              gestão para transformar informações técnicas em soluções
              organizadas, compatibilizadas e preparadas para execução.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#servicos"
                className="rounded-lg bg-[#16c7c2] px-8 py-4 text-center text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
              >
                Conhecer nossos serviços
              </Link>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/15 px-8 py-4 text-center text-sm font-semibold transition hover:border-[#16c7c2]/60 hover:bg-white/[0.04]"
              >
                Falar com a Evolbim
              </a>
            </div>
          </div>

          <IdentityBoard />
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="bg-[#061c2a] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <div>
            <SectionLabel>QUEM SOMOS</SectionLabel>

            <h2 className="mt-7 max-w-[590px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Do desenho técnico
              <span className="block text-[#16c7c2]">
                à realidade da obra.
              </span>
            </h2>
          </div>

          <div className="max-w-[720px] lg:justify-self-end">
            <p className="text-xl leading-9 text-slate-300">
              A Evolbim Engenharia atua no desenvolvimento de soluções de
              engenharia conectando projeto, tecnologia, planejamento e
              execução.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              A proposta é organizar as informações técnicas desde as primeiras
              etapas, utilizando ferramentas e processos que facilitem o
              desenvolvimento dos projetos, a compatibilização das disciplinas
              e o planejamento da obra.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Cada contratação é estruturada conforme a necessidade do cliente,
              com definição de escopo, atividades e entregáveis adequados às
              características da demanda.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["ENGENHARIA", "CAD", "BIM", "PLANEJAMENTO", "GESTÃO"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#16c7c2]/20 bg-[#16c7c2]/[0.04] px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-[#16c7c2]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-y border-white/10 bg-[#081f30] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>NOSSOS PILARES</SectionLabel>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-[680px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Engenharia baseada em
              <span className="text-[#16c7c2]">
                {" "}
                integração, tecnologia e gestão.
              </span>
            </h2>

            <p className="max-w-[580px] text-lg leading-8 text-slate-400 lg:justify-self-end">
              Três pilares orientam a forma como estruturamos projetos,
              informações e processos técnicos.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group min-h-[330px] bg-[#071d2d] p-8 transition duration-300 hover:bg-[#0a293b] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#16c7c2]">
                    {pillar.number}
                  </span>

                  <span className="h-px w-10 bg-[#16c7c2]/50 transition-all duration-300 group-hover:w-20" />
                </div>

                <h3 className="mt-14 text-3xl font-semibold">
                  {pillar.title}
                </h3>

                <p className="mt-6 max-w-[380px] leading-7 text-slate-400">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLUXO */}
      <section className="relative overflow-hidden bg-[#061b2b] py-24 md:py-32">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(22,199,194,0.07),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>NOSSA VISÃO DE ENGENHARIA</SectionLabel>

          <h2 className="mt-7 max-w-[800px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
            Informação conectada
            <span className="text-[#16c7c2]"> em todas as etapas.</span>
          </h2>

          <p className="mt-7 max-w-[720px] text-lg leading-8 text-slate-400">
            O projeto não termina no desenho. As informações desenvolvidas em
            cada etapa precisam contribuir para as decisões seguintes e para a
            execução.
          </p>

          <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#081f30]">
            <div className="grid lg:grid-cols-5">
              {process.map((step, index) => (
                <article
                  key={step.number}
                  className={`relative min-h-[300px] p-7 ${
                    index < process.length - 1
                      ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <span className="font-mono text-xs text-[#16c7c2]">
                    {step.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-bold">{step.title}</h3>

                  <div className="mt-4 h-px w-10 bg-[#16c7c2]" />

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>

                  {index < process.length - 1 && (
                    <span className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[#16c7c2]/40 lg:block">
                      →
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO PENSAMOS */}
      <section className="border-y border-white/10 bg-[#081f30] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
          <div>
            <SectionLabel>FORMA DE ATUAÇÃO</SectionLabel>

            <h2 className="mt-7 max-w-[580px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Técnica para desenvolver.
              <span className="block text-[#16c7c2]">
                Organização para executar.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-lg leading-8 text-slate-400">
              Buscamos estruturar cada trabalho com informações claras,
              processos organizados e definição adequada do escopo.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.number}
                className="min-h-[260px] bg-[#071d2d] p-7 md:p-8"
              >
                <span className="font-mono text-xs text-[#16c7c2]">
                  {item.number}
                </span>

                <h3 className="mt-10 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-5 leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section className="bg-[#061b2b] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="overflow-hidden rounded-[28px] border border-[#16c7c2]/20 bg-[#082536]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-12 lg:p-14">
                <SectionLabel>ATENDIMENTO</SectionLabel>

                <h2 className="mt-7 max-w-[650px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
                  Engenharia próxima,
                  <span className="text-[#16c7c2]">
                    {" "}
                    mesmo quando o trabalho é digital.
                  </span>
                </h2>

                <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-400">
                  A Evolbim trabalha em modelo online e presencial, permitindo
                  desenvolver projetos, análises e documentação técnica de
                  forma digital, com atendimento presencial quando a demanda
                  exigir.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Tag>JATAÍ • GOIÁS</Tag>
                  <Tag>ATENDIMENTO ONLINE</Tag>
                  <Tag>ATENDIMENTO PRESENCIAL</Tag>
                </div>
              </div>

              <div className="relative min-h-[360px] border-t border-white/10 bg-[#061b2b] p-8 lg:border-l lg:border-t-0 md:p-12">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(22,199,194,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(22,199,194,.8) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.24em] text-[#16c7c2]">
                      EVOLBIM • ENGENHARIA
                    </span>

                    <p className="mt-7 max-w-[420px] text-2xl font-semibold leading-9">
                      Projeto, informação e gestão conectados para apoiar a
                      execução.
                    </p>
                  </div>

                  <div className="mt-12 border-t border-white/10 pt-6">
                    <span className="text-xs tracking-[0.18em] text-slate-500">
                      ENGENHARIA • CAD • BIM • GESTÃO
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
              Vamos transformar sua ideia
              <span className="block text-[#16c7c2]">
                em uma solução de engenharia?
              </span>
            </h2>

            <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-300">
              Conte para nós sobre sua necessidade. Vamos entender a demanda e
              avaliar quais serviços podem contribuir para o desenvolvimento do
              seu projeto ou obra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#061b2b]/70 p-8 md:p-10">
            <span className="text-xs font-bold tracking-[0.2em] text-[#16c7c2]">
              EVOLBIM ENGENHARIA
            </span>

            <p className="mt-5 text-2xl font-semibold leading-9">
              Engenharia, tecnologia e gestão para transformar projeto em
              resultado.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
            >
              Falar pelo WhatsApp
            </a>

            <Link
              href="/#servicos"
              className="mt-3 flex w-full items-center justify-center rounded-lg border border-white/15 px-7 py-4 text-sm font-semibold transition hover:border-[#16c7c2]/50"
            >
              Conhecer os serviços
            </Link>
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
            <span>
              © {new Date().getFullYear()} Evolbim Engenharia. Todos os direitos
              reservados.
            </span>

            <span>Engenharia • CAD • BIM • Gestão</span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href={whatsapp}
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#16c7c2]/20 px-4 py-2 text-[10px] font-bold tracking-[0.16em] text-[#16c7c2]">
      {children}
    </span>
  );
}

function IdentityBoard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-12 -top-12 h-40 w-40 border border-[#16c7c2]/10" />
      <div className="absolute -bottom-12 -right-8 h-48 w-48 border border-[#16c7c2]/10" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2a3c]/90 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#16c7c2]" />

            <span className="text-[11px] font-bold tracking-[0.22em] text-[#20d8d2]">
              EVOLBIM • ENGENHARIA
            </span>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-slate-500">
            CAD • BIM • GESTÃO
          </span>
        </div>

        <div className="relative h-[430px]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="absolute left-[9%] top-[15%] h-[56%] w-[58%] border border-[#16c7c2]/70">
            <div className="absolute left-[36%] top-0 h-full border-l border-[#16c7c2]/60" />
            <div className="absolute left-0 top-[44%] w-full border-t border-[#16c7c2]/60" />
            <div className="absolute left-[36%] top-[25%] w-[40%] border-t border-[#16c7c2]/60" />

            <span className="absolute left-[9%] top-[12%] text-[8px] tracking-[0.12em] text-[#16c7c2]">
              CAD
            </span>

            <span className="absolute left-[44%] top-[11%] text-[8px] tracking-[0.12em] text-[#16c7c2]">
              BIM
            </span>

            <span className="absolute left-[9%] top-[70%] text-[8px] tracking-[0.12em] text-[#16c7c2]">
              PROJETO
            </span>
          </div>

          <div className="absolute bottom-[15%] right-[8%] h-[150px] w-[180px]">
            <div className="absolute bottom-0 right-0 h-[95px] w-[135px] skew-y-[-8deg] border border-[#16c7c2]/80 bg-[#0d3042]/80" />

            <div className="absolute bottom-[28px] right-[18px] h-[95px] w-[135px] skew-y-[-8deg] border border-[#16c7c2]/60 bg-[#0c2a3a]/90" />

            <div className="absolute bottom-[56px] right-[36px] h-[95px] w-[135px] skew-y-[-8deg] border border-[#16c7c2]/40 bg-[#0b2737]/90" />

            <span className="absolute -top-2 right-0 text-[8px] font-bold tracking-[0.16em] text-[#16c7c2]">
              INTEGRAÇÃO
            </span>
          </div>

          <div className="absolute bottom-5 left-6 flex gap-5 border-t border-white/10 pt-3 text-[8px] tracking-[0.14em] text-slate-500">
            <span>PROJETO</span>
            <span>PLANEJAMENTO</span>
            <span>EXECUÇÃO</span>
          </div>
        </div>
      </div>
    </div>
  );
}