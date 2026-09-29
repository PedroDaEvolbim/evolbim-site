"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const whatsapp =
  "https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const etapas = [
  {
    number: "01",
    title: "Entendimento",
    text: "Compreensão da necessidade, dos objetivos, das características e das expectativas relacionadas à demanda.",
    tags: ["Necessidade", "Objetivos", "Escopo"],
  },
  {
    number: "02",
    title: "Levantamento",
    text: "Organização das informações, documentos, dados técnicos e condições necessárias para iniciar o desenvolvimento.",
    tags: ["Dados", "Documentos", "Informações"],
  },
  {
    number: "03",
    title: "Desenvolvimento",
    text: "Produção das soluções técnicas previstas no escopo, utilizando ferramentas e processos adequados a cada serviço.",
    tags: ["CAD", "BIM", "Engenharia"],
  },
  {
    number: "04",
    title: "Compatibilização",
    text: "Verificação das informações e interfaces entre disciplinas para identificar inconsistências e pontos que exigem atenção.",
    tags: ["Interfaces", "Revisão", "Coordenação"],
  },
  {
    number: "05",
    title: "Entrega",
    text: "Organização e disponibilização dos arquivos, documentos e produtos técnicos definidos para a contratação.",
    tags: ["Documentação", "Arquivos", "Entregáveis"],
  },
  {
    number: "06",
    title: "Acompanhamento",
    text: "Suporte técnico e acompanhamento das etapas posteriores quando previstos no escopo contratado.",
    tags: ["Suporte", "Obra", "Controle"],
  },
];

const integracao = [
  {
    number: "01",
    title: "CAD",
    text: "Documentação, representação e detalhamento técnico das soluções desenvolvidas.",
  },
  {
    number: "02",
    title: "BIM",
    text: "Modelagem, organização das informações e integração entre diferentes disciplinas.",
  },
  {
    number: "03",
    title: "Planejamento",
    text: "Estruturação de etapas, prazos, custos e recursos relacionados ao empreendimento.",
  },
  {
    number: "04",
    title: "Gestão",
    text: "Organização das informações e acompanhamento para apoiar decisões ao longo do processo.",
  },
];

const controles = [
  {
    number: "01",
    title: "Escopo definido",
    text: "Cada contratação começa com a definição das atividades, responsabilidades e produtos previstos.",
  },
  {
    number: "02",
    title: "Informação organizada",
    text: "Documentos e dados técnicos são estruturados para facilitar consultas, revisões e decisões.",
  },
  {
    number: "03",
    title: "Revisões técnicas",
    text: "As informações desenvolvidas passam por verificações de acordo com as características do serviço.",
  },
  {
    number: "04",
    title: "Entregáveis claros",
    text: "Os produtos finais são organizados conforme o escopo e o formato definido para cada contratação.",
  },
];

export default function ComoTrabalhamosPage() {
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

            <Link
              className="transition hover:text-[#16c7c2]"
              href="/quem-somos"
            >
              Quem Somos
            </Link>

            <Link
              className="transition hover:text-[#16c7c2]"
              href="/#servicos"
            >
              Serviços
            </Link>

            <Link className="text-[#16c7c2]" href="/como-trabalhamos">
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

              <Link onClick={closeMenu} href="/quem-somos">
                Quem Somos
              </Link>

              <Link onClick={closeMenu} href="/#servicos">
                Serviços
              </Link>

              <Link
                onClick={closeMenu}
                className="text-[#16c7c2]"
                href="/como-trabalhamos"
              >
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
            <SectionLabel>COMO TRABALHAMOS</SectionLabel>

            <h1 className="mt-8 max-w-[800px] text-[50px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[62px] lg:text-[72px]">
              Um processo técnico
              <span className="block text-[#16c7c2]">
                do entendimento à execução.
              </span>
            </h1>

            <p className="mt-8 max-w-[700px] text-[17px] leading-8 text-slate-300 md:text-[18px]">
              Organizamos cada trabalho em etapas para conectar informações,
              desenvolvimento técnico, compatibilização, planejamento e
              acompanhamento.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#processo"
                className="rounded-lg bg-[#16c7c2] px-8 py-4 text-center text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
              >
                Conhecer nosso processo
              </a>

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

          <ProcessBoard />
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section className="bg-[#061c2a] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <div>
            <SectionLabel>NOSSA METODOLOGIA</SectionLabel>

            <h2 className="mt-7 max-w-[600px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Organização técnica
              <span className="block text-[#16c7c2]">
                em cada etapa.
              </span>
            </h2>
          </div>

          <div className="max-w-[720px] lg:justify-self-end">
            <p className="text-xl leading-9 text-slate-300">
              Cada projeto ou demanda possui características próprias. Por isso,
              o processo começa pelo entendimento do que precisa ser
              desenvolvido.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              A partir desse entendimento, organizamos as informações
              necessárias, desenvolvemos as soluções previstas no escopo,
              realizamos as verificações aplicáveis e estruturamos os produtos
              técnicos da contratação.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Quando o trabalho envolve diferentes etapas ou disciplinas, CAD,
              BIM, planejamento e gestão podem ser integrados para melhorar a
              organização e a continuidade das informações.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section
        id="processo"
        className="border-y border-white/10 bg-[#081f30] py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>ETAPAS DO PROCESSO</SectionLabel>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-[760px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Do primeiro contato
              <span className="text-[#16c7c2]">
                {" "}
                ao acompanhamento técnico.
              </span>
            </h2>

            <p className="max-w-[580px] text-lg leading-8 text-slate-400 lg:justify-self-end">
              O fluxo é adaptado ao serviço contratado, mantendo uma lógica de
              organização, desenvolvimento, verificação e entrega.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {etapas.map((etapa) => (
              <article
                key={etapa.number}
                className="group min-h-[390px] bg-[#071d2d] p-8 transition duration-300 hover:bg-[#0a293b]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#16c7c2]">
                    {etapa.number}
                  </span>

                  <span className="h-px w-10 bg-[#16c7c2]/50 transition-all duration-300 group-hover:w-20" />
                </div>

                <h3 className="mt-12 text-2xl font-semibold">{etapa.title}</h3>

                <p className="mt-5 leading-7 text-slate-400">{etapa.text}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {etapa.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLUXO VISUAL */}
      <section className="relative overflow-hidden bg-[#061b2b] py-24 md:py-32">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(22,199,194,0.07),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>FLUXO DE DESENVOLVIMENTO</SectionLabel>

          <h2 className="mt-7 max-w-[800px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
            Informação que evolui
            <span className="text-[#16c7c2]"> junto com o projeto.</span>
          </h2>

          <p className="mt-7 max-w-[720px] text-lg leading-8 text-slate-400">
            O objetivo é evitar que cada etapa funcione de forma isolada. As
            informações desenvolvidas precisam contribuir para as etapas
            seguintes.
          </p>

          <div className="mt-16 overflow-hidden rounded-2xl border border-[#16c7c2]/20 bg-[#081f30]">
            <div className="grid md:grid-cols-3 lg:grid-cols-6">
              {etapas.map((etapa, index) => (
                <div
                  key={etapa.number}
                  className={`relative flex min-h-[180px] flex-col justify-center p-6 ${
                    index < etapas.length - 1
                      ? "border-b border-white/10 md:border-r lg:border-b-0"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[10px] text-[#16c7c2]">
                    {etapa.number}
                  </span>

                  <strong className="mt-5 text-lg">{etapa.title}</strong>

                  {index < etapas.length - 1 && (
                    <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-[#16c7c2]/50 lg:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRAÇÃO */}
      <section className="border-y border-white/10 bg-[#081f30] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <div>
            <SectionLabel>TECNOLOGIA + GESTÃO</SectionLabel>

            <h2 className="mt-7 max-w-[610px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Ferramentas diferentes.
              <span className="block text-[#16c7c2]">
                Um processo integrado.
              </span>
            </h2>

            <p className="mt-7 max-w-[580px] text-lg leading-8 text-slate-400">
              A tecnologia é aplicada conforme a necessidade do serviço. CAD,
              BIM, planejamento e gestão se complementam para organizar e
              desenvolver as informações técnicas.
            </p>
          </div>

          <div className="space-y-4">
            {integracao.map((item) => (
              <TechnologyLine
                key={item.number}
                number={item.number}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLE */}
      <section className="bg-[#061b2b] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <SectionLabel>ORGANIZAÇÃO DO TRABALHO</SectionLabel>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="max-w-[700px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
              Clareza no processo.
              <span className="block text-[#16c7c2]">
                Clareza nas entregas.
              </span>
            </h2>

            <p className="max-w-[580px] text-lg leading-8 text-slate-400 lg:justify-self-end">
              A organização do escopo e das informações ajuda a manter cada
              contratação alinhada ao que precisa ser desenvolvido.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {controles.map((item) => (
              <article
                key={item.number}
                className="group min-h-[260px] bg-[#071d2d] p-8 transition duration-300 hover:bg-[#0a293b] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#16c7c2]">
                    {item.number}
                  </span>

                  <span className="h-px w-10 bg-[#16c7c2]/50 transition-all group-hover:w-16" />
                </div>

                <h3 className="mt-12 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-5 max-w-[520px] leading-7 text-slate-400">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="border-y border-white/10 bg-[#081f30] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="overflow-hidden rounded-[28px] border border-[#16c7c2]/20 bg-[#061b2b]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 md:p-12 lg:p-14">
                <SectionLabel>DO PROJETO AO RESULTADO</SectionLabel>

                <h2 className="mt-7 max-w-[670px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">
                  Engenharia desenvolvida para
                  <span className="text-[#16c7c2]">
                    {" "}
                    conectar informação e execução.
                  </span>
                </h2>

                <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-400">
                  Mais do que produzir documentos isolados, buscamos organizar
                  as informações para que elas sejam úteis nas decisões e nas
                  etapas seguintes do empreendimento.
                </p>
              </div>

              <div className="relative min-h-[400px] border-t border-white/10 bg-[#082536] p-8 lg:border-l lg:border-t-0 md:p-12">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(22,199,194,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(22,199,194,.8) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                <div className="relative flex h-full flex-col justify-center">
                  <ResultLine number="01" title="PROJETO" />
                  <ResultArrow />
                  <ResultLine number="02" title="PLANEJAMENTO" />
                  <ResultArrow />
                  <ResultLine number="03" title="EXECUÇÃO" />
                  <ResultArrow />
                  <ResultLine number="04" title="RESULTADO" active />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0a2638] py-24 md:py-32">
        <div className="absolute -right-28 -top-28 h-[500px] w-[500px] rounded-full border border-[#16c7c2]/10" />
        <div className="absolute -right-10 -top-10 h-[340px] w-[340px] rounded-full border border-[#16c7c2]/10" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16">
          <div>
            <SectionLabel>VAMOS COMEÇAR?</SectionLabel>

            <h2 className="mt-7 max-w-[780px] text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
              Seu projeto começa
              <span className="block text-[#16c7c2]">
                pelo entendimento da necessidade.
              </span>
            </h2>

            <p className="mt-7 max-w-[650px] text-lg leading-8 text-slate-300">
              Conte para a Evolbim o que precisa ser desenvolvido. A partir
              disso, avaliamos a demanda e estruturamos o escopo técnico
              adequado.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#061b2b]/70 p-8 md:p-10">
            <span className="text-xs font-bold tracking-[0.2em] text-[#16c7c2]">
              EVOLBIM ENGENHARIA
            </span>

            <p className="mt-5 text-2xl font-semibold leading-9">
              Engenharia, CAD, BIM, planejamento e gestão integrados ao
              desenvolvimento da sua demanda.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"
            >
              Solicitar orçamento
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
    <div className="group flex items-center gap-6 rounded-xl border border-white/10 bg-[#071d2d] p-6 transition hover:border-[#16c7c2]/30 hover:bg-[#0a293b]">
      <span className="font-mono text-xs text-[#16c7c2]">{number}</span>

      <div className="flex-1">
        <strong className="text-sm tracking-[0.12em]">{title}</strong>
        <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
      </div>

      <span className="text-[#16c7c2]/40 transition group-hover:translate-x-1 group-hover:text-[#16c7c2]">
        →
      </span>
    </div>
  );
}

function ResultLine({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-5 rounded-xl border px-6 py-5 ${
        active
          ? "border-[#16c7c2]/50 bg-[#16c7c2]/10"
          : "border-white/10 bg-[#061b2b]/70"
      }`}
    >
      <span className="font-mono text-xs text-[#16c7c2]">{number}</span>

      <strong
        className={`text-sm tracking-[0.16em] ${
          active ? "text-[#16c7c2]" : "text-slate-200"
        }`}
      >
        {title}
      </strong>
    </div>
  );
}

function ResultArrow() {
  return (
    <div className="flex h-8 items-center pl-9">
      <span className="text-[#16c7c2]/50">↓</span>
    </div>
  );
}

function ProcessBoard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-12 -top-12 h-40 w-40 border border-[#16c7c2]/10" />
      <div className="absolute -bottom-12 -right-8 h-48 w-48 border border-[#16c7c2]/10" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2a3c]/90 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#16c7c2]" />

            <span className="text-[11px] font-bold tracking-[0.22em] text-[#20d8d2]">
              EVOLBIM • PROCESSO
            </span>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-slate-500">
            ENGENHARIA • GESTÃO
          </span>
        </div>

        <div className="relative min-h-[440px] p-7">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative grid grid-cols-2 gap-4">
            {[
              ["01", "ENTENDIMENTO"],
              ["02", "LEVANTAMENTO"],
              ["03", "DESENVOLVIMENTO"],
              ["04", "COMPATIBILIZAÇÃO"],
              ["05", "ENTREGA"],
              ["06", "ACOMPANHAMENTO"],
            ].map(([number, title], index) => (
              <div
                key={number}
                className={`relative min-h-[105px] border p-4 ${
                  index === 5
                    ? "border-[#16c7c2]/60 bg-[#16c7c2]/[0.05]"
                    : "border-[#16c7c2]/25 bg-[#061b2b]/40"
                }`}
              >
                <span className="font-mono text-[9px] text-[#16c7c2]/70">
                  {number}
                </span>

                <strong className="mt-6 block text-[9px] tracking-[0.12em] text-[#16c7c2]">
                  {title}
                </strong>
              </div>
            ))}
          </div>

          <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[8px] tracking-[0.14em] text-slate-500">
            <span>PROJETO</span>
            <span>→</span>
            <span>PLANEJAMENTO</span>
            <span>→</span>
            <span>EXECUÇÃO</span>
          </div>
        </div>
      </div>
    </div>
  );
}