"use client";



import Image from "next/image";

import Link from "next/link";

import { FormEvent, useState } from "react";



const whatsappNumber = "5564984201767";



const services = [

  "Projetos de Engenharia",

  "Desenho e Detalhamento Técnico (CAD)",

  "Modelagem e Compatibilização (BIM)",

  "Planejamento e Orçamento",

  "Execução e Acompanhamento",

  "Consultoria e Assessoria Técnica",

  "Outro / Ainda não sei",

];



const projectTypes = [

  "Residencial",

  "Comercial",

  "Industrial",

  "Reforma",

  "Obra em andamento",

  "Outro",

];



const stages = [

  "Ainda estou planejando",

  "Tenho uma ideia inicial",

  "Já possuo projetos",

  "Estou desenvolvendo os projetos",

  "Vou iniciar a obra",

  "A obra já está em andamento",

  "Preciso analisar uma situação específica",

];



export default function ContatoPage() {

  const [menuOpen, setMenuOpen] = useState(false);



  const [form, setForm] = useState({

    nome: "",

    whatsapp: "",

    email: "",

    cidade: "",

    uf: "",

    servico: "",

    empreendimento: "",

    etapa: "",

    descricao: "",

  });



  const closeMenu = () => setMenuOpen(false);



  function updateField(field: keyof typeof form, value: string) {

    setForm((current) => ({

      ...current,

      [field]: value,

    }));

  }



  function handleSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();



    const message = [

      "Olá! Vim pelo site da Evolbim Engenharia e gostaria de solicitar uma avaliação/orçamento.",

      "",

      "DADOS DO CLIENTE",

      `Nome: ${form.nome}`,

      `WhatsApp: ${form.whatsapp}`,

      `E-mail: ${form.email || "Não informado"}`,

      `Cidade/UF: ${form.cidade} - ${form.uf}`,

      "",

      "DADOS DA DEMANDA",

      `Serviço de interesse: ${form.servico}`,

      `Tipo de empreendimento: ${form.empreendimento}`,

      `Etapa atual: ${form.etapa}`,

      "",

      "Descrição:",

      form.descricao,

    ].join("\n");



    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(

      message,

    )}`;



    window.open(url, "_blank", "noopener,noreferrer");

  }



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



            <Link

              className="transition hover:text-[#16c7c2]"

              href="/como-trabalhamos"

            >

              Como Trabalhamos

            </Link>



            <Link className="text-[#16c7c2]" href="/contato">

              Contato

            </Link>

          </nav>



          <a

            href="#solicitar-orcamento"

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



              <Link onClick={closeMenu} href="/como-trabalhamos">

                Como Trabalhamos

              </Link>



              <Link

                onClick={closeMenu}

                className="text-[#16c7c2]"

                href="/contato"

              >

                Contato

              </Link>



              <a

                onClick={closeMenu}

                href="#solicitar-orcamento"

                className="mt-2 w-fit rounded-lg bg-[#16c7c2] px-6 py-3 font-bold text-[#041725]"

              >

                Solicitar orçamento

              </a>

            </nav>

          </div>

        )}

      </header>



      {/* FORMULÁRIO */}

      <section

        id="solicitar-orcamento"

        className="bg-[#081f30] pb-24 pt-[calc(104px+6rem)] md:pb-32 md:pt-[calc(104px+8rem)]"

      >

        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">

          <div>

            <SectionLabel>SOLICITAR ORÇAMENTO</SectionLabel>



            <h2 className="mt-7 max-w-[570px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">

              Vamos entender

              <span className="block text-[#16c7c2]">

                a sua necessidade.

              </span>

            </h2>



            <p className="mt-7 max-w-[550px] text-lg leading-8 text-slate-400">

              Preencha as informações iniciais ao lado. Elas serão organizadas

              em uma mensagem e enviadas para o WhatsApp comercial da Evolbim.

            </p>



            <div className="mt-10 space-y-5">

              <Step number="01" text="Preencha os dados da demanda." />

              <Step number="02" text="Envie a solicitação pelo WhatsApp." />

              <Step

                number="03"

                text="A Evolbim analisa as informações para definir os próximos passos."

              />

            </div>



            <div className="mt-12 rounded-xl border border-[#16c7c2]/20 bg-[#16c7c2]/[0.04] p-6">

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#16c7c2]">

                DICA

              </span>



              <p className="mt-3 text-sm leading-7 text-slate-400">

                Depois de abrir a conversa no WhatsApp, você também poderá

                enviar plantas, documentos, fotos e outros arquivos que ajudem

                a explicar sua necessidade.

              </p>

            </div>

          </div>



          <form

            onSubmit={handleSubmit}

            className="rounded-2xl border border-white/10 bg-[#061b2b] p-6 shadow-2xl shadow-black/10 md:p-10"

          >

            <div className="mb-9 flex items-center justify-between border-b border-white/10 pb-6">

              <div>

                <span className="text-[10px] font-bold tracking-[0.22em] text-[#16c7c2]">

                  EVOLBIM • NOVA SOLICITAÇÃO

                </span>



                <h3 className="mt-2 text-2xl font-semibold">

                  Informações iniciais

                </h3>

              </div>



              <span className="hidden font-mono text-xs text-slate-600 sm:block">

                FORM. 01

              </span>

            </div>



            <div className="grid gap-6 md:grid-cols-2">

              <Field label="Nome *">

                <input

                  required

                  type="text"

                  value={form.nome}

                  onChange={(event) =>

                    updateField("nome", event.target.value)

                  }

                  placeholder="Seu nome"

                  className={inputClass}

                />

              </Field>



              <Field label="WhatsApp *">

                <input

                  required

                  type="tel"

                  value={form.whatsapp}

                  onChange={(event) =>

                    updateField("whatsapp", event.target.value)

                  }

                  placeholder="(00) 00000-0000"

                  className={inputClass}

                />

              </Field>



              <Field label="E-mail">

                <input

                  type="email"

                  value={form.email}

                  onChange={(event) =>

                    updateField("email", event.target.value)

                  }

                  placeholder="seuemail@exemplo.com"

                  className={inputClass}

                />

              </Field>



              <div className="grid grid-cols-[1fr_100px] gap-3">

                <Field label="Cidade *">

                  <input

                    required

                    type="text"

                    value={form.cidade}

                    onChange={(event) =>

                      updateField("cidade", event.target.value)

                    }

                    placeholder="Cidade"

                    className={inputClass}

                  />

                </Field>



                <Field label="UF *">

                  <input

                    required

                    type="text"

                    maxLength={2}

                    value={form.uf}

                    onChange={(event) =>

                      updateField("uf", event.target.value.toUpperCase())

                    }

                    placeholder="GO"

                    className={inputClass}

                  />

                </Field>

              </div>



              <Field label="Serviço de interesse *">

                <select

                  required

                  value={form.servico}

                  onChange={(event) =>

                    updateField("servico", event.target.value)

                  }

                  className={inputClass}

                >

                  <option value="">Selecione</option>



                  {services.map((service) => (

                    <option key={service} value={service}>

                      {service}

                    </option>

                  ))}

                </select>

              </Field>



              <Field label="Tipo de empreendimento *">

                <select

                  required

                  value={form.empreendimento}

                  onChange={(event) =>

                    updateField("empreendimento", event.target.value)

                  }

                  className={inputClass}

                >

                  <option value="">Selecione</option>



                  {projectTypes.map((type) => (

                    <option key={type} value={type}>

                      {type}

                    </option>

                  ))}

                </select>

              </Field>



              <div className="md:col-span-2">

                <Field label="Etapa atual da demanda *">

                  <select

                    required

                    value={form.etapa}

                    onChange={(event) =>

                      updateField("etapa", event.target.value)

                    }

                    className={inputClass}

                  >

                    <option value="">Selecione a situação atual</option>



                    {stages.map((stage) => (

                      <option key={stage} value={stage}>

                        {stage}

                      </option>

                    ))}

                  </select>

                </Field>

              </div>



              <div className="md:col-span-2">

                <Field label="Conte um pouco sobre o que você precisa *">

                  <textarea

                    required

                    rows={6}

                    value={form.descricao}

                    onChange={(event) =>

                      updateField("descricao", event.target.value)

                    }

                    placeholder="Ex.: Preciso desenvolver os projetos para uma residência, já possuo o terreno e gostaria de entender quais projetos serão necessários..."

                    className={`${inputClass} resize-none`}

                  />

                </Field>

              </div>

            </div>



            <div className="mt-8 border-t border-white/10 pt-7">

              <button

                type="submit"

                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"

              >

                Enviar solicitação pelo WhatsApp

                <span aria-hidden="true">→</span>

              </button>



              <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">

                Ao clicar no botão, o WhatsApp será aberto com as informações

                preenchidas para você revisar e enviar.

              </p>

            </div>

          </form>

        </div>

      </section>



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



        <div className="relative mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">

          <div>

            <SectionLabel>CONTATO • EVOLBIM ENGENHARIA</SectionLabel>



            <h1 className="mt-8 max-w-[800px] text-[50px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[62px] lg:text-[72px]">

              Conte sobre

              <span className="block text-[#16c7c2]">

                seu próximo projeto.

              </span>

            </h1>



            <p className="mt-8 max-w-[680px] text-[17px] leading-8 text-slate-300 md:text-[18px]">

              Envie as informações iniciais da sua necessidade para entendermos

              a demanda e avaliarmos quais soluções de engenharia podem fazer

              parte do seu projeto ou obra.

            </p>



            <div className="mt-10 flex flex-wrap gap-3">

              <Tag>PROJETOS</Tag>

              <Tag>CAD</Tag>

              <Tag>BIM</Tag>

              <Tag>PLANEJAMENTO</Tag>

              <Tag>OBRAS</Tag>

              <Tag>CONSULTORIA</Tag>

            </div>

          </div>



          <ContactBoard />

        </div>

      </section>



      {/* CANAIS DE ATENDIMENTO */}

      <section className="border-y border-white/10 bg-[#061c2a] py-20 md:py-24">

        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

          <SectionLabel>CANAIS DE ATENDIMENTO</SectionLabel>



          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">

            <ContactCard

              number="01"

              title="WhatsApp"

              text="(64) 98420-1767"

              href="https://wa.me/5564984201767"

            />



            <ContactCard

              number="02"

              title="E-mail"

              text="contato@evolbimengenharia.com.br"

            />



            <ContactCard

              number="03"

              title="Localização"

              text="Jataí • Goiás"

            />



            <ContactCard

              number="04"

              title="Atendimento"

              text="Online e presencial"

            />

          </div>

        </div>

      </section>



      {/* PRÓXIMOS PASSOS */}

      <section className="bg-[#061b2b] py-24 md:py-32">

        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

          <SectionLabel>PRÓXIMOS PASSOS</SectionLabel>



          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:items-end">

            <h2 className="max-w-[720px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">

              Da primeira conversa

              <span className="text-[#16c7c2]">

                {" "}

                à definição do serviço.

              </span>

            </h2>



            <p className="max-w-[570px] text-lg leading-8 text-slate-400 lg:justify-self-end">

              Antes de iniciar qualquer trabalho, precisamos compreender a

              demanda e definir o que fará parte da contratação.

            </p>

          </div>



          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">

            <ProcessCard

              number="01"

              title="Contato"

              text="Você envia as informações iniciais sobre sua necessidade."

            />



            <ProcessCard

              number="02"

              title="Análise"

              text="A demanda é avaliada para entender características, documentos e necessidades."

            />



            <ProcessCard

              number="03"

              title="Escopo"

              text="São definidos os serviços, atividades e entregáveis aplicáveis à contratação."

            />



            <ProcessCard

              number="04"

              title="Proposta"

              text="A proposta comercial é estruturada com as condições para desenvolvimento do serviço."

            />

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0a2638] py-24 md:py-32">

        <div className="absolute -right-28 -top-28 h-[500px] w-[500px] rounded-full border border-[#16c7c2]/10" />

        <div className="absolute -right-10 -top-10 h-[340px] w-[340px] rounded-full border border-[#16c7c2]/10" />



        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16">

          <div>

            <SectionLabel>CONTATO DIRETO</SectionLabel>



            <h2 className="mt-7 max-w-[760px] text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">

              Prefere conversar

              <span className="block text-[#16c7c2]">

                diretamente pelo WhatsApp?

              </span>

            </h2>



            <p className="mt-7 max-w-[620px] text-lg leading-8 text-slate-300">

              Entre em contato com a Evolbim e explique brevemente sua

              necessidade.

            </p>

          </div>



          <div className="rounded-2xl border border-white/10 bg-[#061b2b]/70 p-8 md:p-10">

            <span className="text-xs font-bold tracking-[0.2em] text-[#16c7c2]">

              EVOLBIM ENGENHARIA

            </span>



            <p className="mt-5 text-2xl font-semibold leading-9">

              Projetos, CAD, BIM, planejamento, acompanhamento e consultoria.

            </p>



            <a

              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(

                "Olá! Vim pelo site da Evolbim Engenharia e gostaria de conversar sobre uma demanda de engenharia.",

              )}`}

              target="_blank"

              rel="noreferrer"

              className="mt-8 flex w-full items-center justify-center rounded-lg bg-[#16c7c2] px-7 py-4 text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"

            >

              Falar pelo WhatsApp

            </a>



            <div className="mt-6 space-y-2 text-sm text-slate-500">

              <p>(64) 98420-1767</p>

              <p>contato@evolbimengenharia.com.br</p>

              <p>Jataí • Goiás</p>

            </div>

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

                  href={`https://wa.me/${whatsappNumber}`}

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



      {/* WHATSAPP FLUTUANTE */}

      <a

        href={`https://wa.me/${whatsappNumber}`}

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



const inputClass =

  "mt-2 w-full rounded-lg border border-white/10 bg-[#082536] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#16c7c2]/60 focus:ring-1 focus:ring-[#16c7c2]/20";



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



function Field({

  label,

  children,

}: {

  label: string;

  children: React.ReactNode;

}) {

  return (

    <label className="block text-xs font-medium text-slate-400">

      {label}

      {children}

    </label>

  );

}



function Tag({ children }: { children: React.ReactNode }) {

  return (

    <span className="rounded-full border border-[#16c7c2]/20 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-[#16c7c2]">

      {children}

    </span>

  );

}



function Step({

  number,

  text,

}: {

  number: string;

  text: string;

}) {

  return (

    <div className="flex items-start gap-4">

      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#16c7c2]/30 font-mono text-[10px] text-[#16c7c2]">

        {number}

      </span>



      <p className="pt-1 text-sm leading-6 text-slate-400">{text}</p>

    </div>

  );

}



function ContactCard({

  number,

  title,

  text,

  href,

}: {

  number: string;

  title: string;

  text: string;

  href?: string;

}) {

  const content = (

    <>

      <span className="font-mono text-xs text-[#16c7c2]">{number}</span>



      <h3 className="mt-10 text-xl font-semibold">{title}</h3>



      <p className="mt-3 break-words text-sm leading-6 text-slate-400">

        {text}

      </p>



      {href && (

        <span className="mt-7 block text-xs font-semibold text-[#16c7c2]">

          Abrir conversa →

        </span>

      )}

    </>

  );



  if (href) {

    return (

      <a

        href={href}

        target="_blank"

        rel="noreferrer"

        className="min-h-[240px] bg-[#071d2d] p-8 transition hover:bg-[#0a293b]"

      >

        {content}

      </a>

    );

  }



  return (

    <div className="min-h-[240px] bg-[#071d2d] p-8">

      {content}

    </div>

  );

}



function ProcessCard({

  number,

  title,

  text,

}: {

  number: string;

  title: string;

  text: string;

}) {

  return (

    <article className="group min-h-[280px] bg-[#071d2d] p-8 transition hover:bg-[#0a293b]">

      <div className="flex items-center justify-between">

        <span className="font-mono text-xs text-[#16c7c2]">{number}</span>



        <span className="h-px w-9 bg-[#16c7c2]/50 transition-all group-hover:w-16" />

      </div>



      <h3 className="mt-12 text-2xl font-semibold">{title}</h3>



      <p className="mt-5 leading-7 text-slate-400">{text}</p>

    </article>

  );

}



function ContactBoard() {

  return (

    <div className="relative mx-auto w-full max-w-[560px]">

      <div className="absolute -left-12 -top-12 h-40 w-40 border border-[#16c7c2]/10" />

      <div className="absolute -bottom-12 -right-8 h-48 w-48 border border-[#16c7c2]/10" />



      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2a3c]/90 shadow-2xl shadow-black/20">

        <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#16c7c2]" />



            <span className="text-[11px] font-bold tracking-[0.22em] text-[#20d8d2]">

              EVOLBIM • CONTATO

            </span>

          </div>



          <span className="text-[10px] tracking-[0.18em] text-slate-500">

            NOVA DEMANDA

          </span>

        </div>



        <div className="relative min-h-[390px] p-8">

          <div

            className="absolute inset-0 opacity-[0.05]"

            style={{

              backgroundImage:

                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",

              backgroundSize: "36px 36px",

            }}

          />



          <div className="relative space-y-4">

            <BoardLine number="01" label="CLIENTE" value="INFORMAÇÕES" />

            <BoardLine number="02" label="DEMANDA" value="SERVIÇO" />

            <BoardLine number="03" label="ANÁLISE" value="ESCOPO" />

            <BoardLine

              number="04"

              label="PROPOSTA"

              value="PRÓXIMO PASSO"

              active

            />

          </div>



          <div className="relative mt-7 border-t border-white/10 pt-5">

            <span className="text-[9px] tracking-[0.18em] text-slate-500">

              CONTATO → ANÁLISE → ESCOPO → PROPOSTA

            </span>

          </div>

        </div>

      </div>

    </div>

  );

}



function BoardLine({

  number,

  label,

  value,

  active = false,

}: {

  number: string;

  label: string;

  value: string;

  active?: boolean;

}) {

  return (

    <div

      className={`grid grid-cols-[42px_1fr_1fr] items-center border px-4 py-5 ${

        active

          ? "border-[#16c7c2]/60 bg-[#16c7c2]/[0.05]"

          : "border-[#16c7c2]/20 bg-[#061b2b]/50"

      }`}

    >

      <span className="font-mono text-[9px] text-[#16c7c2]">

        {number}

      </span>



      <span className="text-[9px] font-bold tracking-[0.14em] text-slate-400">

        {label}

      </span>



      <span

        className={`text-right text-[9px] font-bold tracking-[0.14em] ${

          active ? "text-[#16c7c2]" : "text-slate-500"

        }`}

      >

        {value}

      </span>

    </div>

  );

}