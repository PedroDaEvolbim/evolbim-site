"use client";















import Image from "next/image";







import { useState } from "react";















const services = [







  {







    number: "01",







    tag: "PROJETOS",







    title: "Projetos de Engenharia",







    description:







      "Desenvolvimento de soluções técnicas com foco em segurança, funcionalidade, compatibilidade e execução.",







    items: ["Arquitetônico", "Estrutural", "Instalações", "Detalhamentos"],







  },







  {







    number: "02",







    tag: "CAD",







    title: "Desenho e Detalhamento Técnico",







    description:







      "Documentação técnica em CAD para transformar conceitos e levantamentos em informações claras para execução.",







    items: ["Plantas", "Cortes", "Fachadas", "Detalhamentos"],







  },







  {







    number: "03",







    tag: "BIM",







    title: "Modelagem e Compatibilização",







    description:







      "Integração das disciplinas do projeto por meio da metodologia BIM, antecipando interferências antes da obra.",







    items: ["Modelagem", "Compatibilização", "Clash Detection", "Quantitativos"],







  },







  {







    number: "04",







    tag: "PLANEJAMENTO",







    title: "Planejamento e Orçamento",







    description:







      "Estruturação técnica de custos, etapas, prazos e recursos para aumentar a previsibilidade do empreendimento.",







    items: ["Orçamento", "Cronograma", "Quantitativos", "Controle"],







  },







  {







    number: "05",







    tag: "OBRAS",







    title: "Execução e Acompanhamento",







    description:







      "Acompanhamento técnico para verificar qualidade, conformidade dos serviços e evolução da execução.",







    items: ["Fiscalização", "Medições", "Qualidade", "Acompanhamento"],







  },







  {







    number: "06",







    tag: "CONSULTORIA",







    title: "Consultoria e Assessoria Técnica",







    description:







      "Suporte técnico para decisões relacionadas a projetos, planejamento, execução e gestão de obras.",







    items: ["Análises", "Orientação", "Planejamento", "Soluções técnicas"],







  },







];















const steps = [







  {







    number: "01",







    title: "Entendimento",







    text: "Compreendemos a necessidade, os objetivos e as características do projeto.",







  },







  {







    number: "02",







    title: "Levantamento",







    text: "Organizamos informações, documentos, requisitos e dados necessários ao desenvolvimento.",







  },







  {







    number: "03",







    title: "Desenvolvimento",







    text: "Transformamos as informações em soluções técnicas utilizando CAD, BIM e engenharia.",







  },







  {







    number: "04",







    title: "Compatibilização",







    text: "Analisamos a integração entre disciplinas para reduzir conflitos antes da execução.",







  },







  {







    number: "05",







    title: "Entrega",







    text: "Estruturamos a documentação técnica necessária para orientar a próxima etapa.",







  },







  {







    number: "06",







    title: "Acompanhamento",







    text: "Quando contratado, acompanhamos tecnicamente a evolução da execução.",







  },







];















const areas = [







  {







    tag: "RESIDENCIAL",







    title: "Engenharia para residências",







    text: "Projetos, reformas, ampliações, planejamento e acompanhamento técnico.",







    detail: "CASAS • REFORMAS • AMPLIAÇÕES",







  },







  {







    tag: "COMERCIAL",







    title: "Soluções para espaços comerciais",







    text: "Desenvolvimento e adequação de espaços com organização técnica e planejamento.",







    detail: "LOJAS • ESCRITÓRIOS • ADEQUAÇÕES",







  },







  {







    tag: "OBRAS",







    title: "Planejamento e controle",







    text: "Estruturação das etapas da obra para acompanhar prazo, custo e execução.",







    detail: "PLANEJAMENTO • GESTÃO • ACOMPANHAMENTO",







  },







  {







    tag: "PROJETOS",







    title: "Desenvolvimento técnico",







    text: "Documentação, modelagem e integração das informações necessárias ao projeto.",







    detail: "CAD • BIM • COMPATIBILIZAÇÃO",







  },







];















export default function Home() {







  const [menuOpen, setMenuOpen] = useState(false);















  const closeMenu = () => setMenuOpen(false);















  return (







    <main className="min-h-screen overflow-x-hidden bg-[#061b2b] text-white selection:bg-[#16b9b4] selection:text-[#061b2b]">







      {/* =========================================================







          HEADER







      ========================================================= */}







      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061b2b]/95 backdrop-blur-xl">







        <div className="mx-auto flex h-[104px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">







          <a







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







          </a>















          <nav className="hidden items-center gap-9 text-[14px] font-medium text-slate-300 lg:flex">







            <a className="transition hover:text-[#16c7c2]" href="/">







              Início







            </a>







            <a className="transition hover:text-[#16c7c2]" href="/quem-somos">







              Quem Somos







            </a>







            <a className="transition hover:text-[#16c7c2]" href="/servicos">







              Serviços







            </a>







            <a className="transition hover:text-[#16c7c2]" href="/como-trabalhamos">







              Como Trabalhamos







            </a>







            <a className="transition hover:text-[#16c7c2]" href="/contato">







              Contato







            </a>







          </nav>















          <a







            href="/contato#solicitar-orcamento"







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







              <a onClick={closeMenu} href="/">







                Início







              </a>







              <a onClick={closeMenu} href="/quem-somos">







                Quem Somos







              </a>







              <a onClick={closeMenu} href="/servicos">







                Serviços







              </a>







              <a onClick={closeMenu} href="/como-trabalhamos">







                Como Trabalhamos







              </a>







              <a onClick={closeMenu} href="/contato">







                Contato







              </a>















              <a







                onClick={closeMenu}







                href="/contato#solicitar-orcamento"







                className="mt-2 w-fit rounded-lg bg-[#16c7c2] px-6 py-3 font-bold text-[#041725]"







              >







                Solicitar orçamento







              </a>







            </nav>







          </div>







        )}







      </header>















      {/* =========================================================







          HERO







      ========================================================= */}







      <section







        id="inicio"







        className="relative flex min-h-screen items-center overflow-hidden pt-[104px]"







      >







        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(22,199,194,0.10),transparent_34%)]" />















        <div className="pointer-events-none absolute right-[2%] top-[24%] hidden opacity-[0.08] xl:block">







          <div className="h-[420px] w-[620px] rotate-[7deg] border border-[#16c7c2]" />







          <div className="absolute left-14 top-14 h-[420px] w-[620px] border border-[#16c7c2]" />







        </div>















        <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-12">







          {/* HERO LEFT */}







          <div className="max-w-[690px]">







            <div className="mb-8 flex items-center gap-4">







              <span className="h-px w-10 bg-[#16c7c2]" />







              <span className="text-[12px] font-bold tracking-[0.38em] text-[#20d8d2] md:text-[13px]">







                ENGENHARIA • CAD • BIM • GESTÃO







              </span>







            </div>















<h1 className="text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[56px] lg:text-[70px] xl:text-[76px]">






              Engenharia que







              <br />







              transforma







              <br />







              <span className="text-[#16b9b4]">







                projeto em







                <br />







                resultado.







              </span>







            </h1>















            <p className="mt-8 max-w-[650px] text-[17px] leading-8 text-slate-300 md:text-[18px]">







              Projetos em CAD e BIM, planejamento, compatibilização, gestão e







              acompanhamento técnico para transformar ideias em soluções







              executáveis.







            </p>















            <div className="mt-9 flex flex-col gap-4 sm:flex-row">







              <a







                href="/contato#solicitar-orcamento"







                className="rounded-lg bg-[#16c7c2] px-7 py-4 text-center text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"







              >







                Solicitar orçamento







              </a>















              <a







                href="/servicos"







                className="rounded-lg border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-[#16c7c2]/60 hover:bg-white/[0.04]"







              >







                Conhecer serviços







              </a>







            </div>







          </div>















          {/* HERO TECHNICAL BOARD */}







          <div className="relative mx-auto w-full max-w-[570px]">







            <div className="absolute -left-16 -top-12 h-44 w-44 border border-[#16c7c2]/10" />







            <div className="absolute -right-10 -bottom-12 h-52 w-52 border border-[#16c7c2]/10" />















            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2a3c]/90 shadow-2xl shadow-black/20">







              <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">







                <div className="flex items-center gap-3">







                  <span className="h-2 w-2 rounded-full bg-[#16c7c2]" />







                  <span className="text-[11px] font-bold tracking-[0.22em] text-[#20d8d2]">







                    EVOLBIM • PROJETO INTEGRADO







                  </span>







                </div>















                <span className="text-[10px] tracking-[0.22em] text-slate-500">







                  CAD + BIM







                </span>







              </div>















              <div className="relative h-[430px] p-7">







                {/* GRID */}







                <div







                  className="absolute inset-0 opacity-[0.06]"







                  style={{







                    backgroundImage:







                      "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",







                    backgroundSize: "40px 40px",







                  }}







                />















                {/* DIMENSION TOP */}







                <div className="absolute left-[11%] top-6 w-[62%]">







                  <div className="relative h-5">







                    <span className="absolute left-0 top-2 h-3 w-px bg-slate-500" />







                    <span className="absolute right-0 top-2 h-3 w-px bg-slate-500" />







                    <span className="absolute left-0 right-0 top-[13px] h-px bg-slate-500" />







                    <span className="absolute left-1/2 top-0 -translate-x-1/2 text-[9px] text-slate-500">







                      8.00







                    </span>







                  </div>







                </div>















                {/* FLOOR PLAN */}







                <div className="absolute left-[11%] top-[12%] h-[66%] w-[62%] border border-[#16c7c2]/80">







                  <div className="absolute left-[37%] top-0 h-full border-l border-[#16c7c2]/70" />







                  <div className="absolute left-0 top-[44%] w-full border-t border-[#16c7c2]/70" />







                  <div className="absolute left-[37%] top-[22%] w-[34%] border-t border-[#16c7c2]/70" />







                  <div className="absolute left-[71%] top-0 h-[44%] border-l border-[#16c7c2]/70" />















                  <span className="absolute left-[12%] top-[13%] text-[9px] tracking-[0.1em] text-[#16c7c2]">







                    AMBIENTE 01







                  </span>







                  <span className="absolute left-[44%] top-[9%] text-[9px] tracking-[0.1em] text-[#16c7c2]">







                    AMBIENTE 02







                  </span>







                  <span className="absolute left-[12%] top-[76%] text-[9px] tracking-[0.1em] text-[#16c7c2]">







                    AMBIENTE 03







                  </span>















                  {/* DOOR ARC */}







                  <div className="absolute bottom-[23%] left-[37%] h-8 w-8 rounded-br-full border-b border-r border-[#16c7c2]" />







                  <div className="absolute bottom-0 left-[18%] h-8 w-8 rounded-tr-full border-r border-t border-[#16c7c2]" />







                </div>















                {/* LEFT DIMENSION */}







                <div className="absolute left-[5%] top-[20%] h-[58%] border-l border-slate-600">







                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] text-slate-500">







                    10.00







                  </span>







                </div>















                {/* BIM WIREFRAME */}







                <div className="absolute bottom-[8%] right-[4%] h-[160px] w-[190px]">







                  <span className="absolute -top-5 right-0 text-[9px] font-bold tracking-[0.18em] text-[#16c7c2]">







                    MODELO BIM







                  </span>















                  <div className="absolute bottom-0 right-0 h-[110px] w-[150px] skew-y-[-8deg] border border-[#16c7c2]/80 bg-[#0d3042]/80" />















                  <div className="absolute bottom-[32px] right-[18px] h-[110px] w-[150px] skew-y-[-8deg] border border-[#16c7c2]/60 bg-[#0c2a3a]/90" />















                  <div className="absolute bottom-[64px] right-[36px] h-[110px] w-[150px] skew-y-[-8deg] border border-[#16c7c2]/50 bg-[#0b2737]/90" />















                  <span className="absolute bottom-[4px] right-[2px] text-[8px] tracking-[0.12em] text-slate-500">







                    MODELO FEDERADO







                  </span>







                </div>















                {/* CARIMBO */}







                <div className="absolute bottom-4 left-7 flex gap-7 border-t border-white/10 pt-3 text-[8px] tracking-[0.15em] text-slate-500">







                  <span>EVOLBIM</span>







                  <span>ENGENHARIA</span>







                  <span>REV. 00</span>







                </div>







              </div>







            </div>







          </div>







        </div>







      </section>















      {/* =========================================================



          QUEM SOMOS



      ========================================================= */}



      <section



        id="quem-somos"



        className="relative overflow-hidden border-t border-white/10 bg-[#061c2a] py-24 md:py-32"



      >



        <div className="pointer-events-none absolute inset-0">



          <div className="absolute left-[6%] top-[18%] h-[260px] w-[260px] border border-[#18c3c8]/[0.05]" />



          <div className="absolute right-[5%] top-[12%] h-[420px] w-[420px] rotate-6 border border-[#18c3c8]/[0.05]" />



          <div



            className="absolute inset-0 opacity-[0.025]"



            style={{



              backgroundImage:



                "linear-gradient(rgba(24,195,200,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(24,195,200,.8) 1px, transparent 1px)",



              backgroundSize: "64px 64px",



            }}



          />



        </div>







        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">



          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">



            <div>



              <SectionLabel>QUEM SOMOS</SectionLabel>



              <h2 className="mt-7 max-w-[650px] text-4xl font-black leading-[0.98] tracking-[-0.045em] text-white md:text-6xl">



                Do desenho técnico



                <span className="block text-[#18c3c8]">à realidade da obra.</span>



              </h2>



            </div>



            <div className="max-w-[670px] lg:justify-self-end">



              <p className="text-lg leading-8 text-slate-300 md:text-xl">



                A Evolbim Engenharia integra projeto, tecnologia e gestão para transformar ideias em soluções tecnicamente viáveis, compatibilizadas e preparadas para execução.



              </p>



              <p className="mt-5 text-base leading-7 text-slate-400">



                Nossa atuação conecta ferramentas CAD e BIM ao planejamento e acompanhamento técnico, criando um processo mais organizado, previsível e eficiente desde as primeiras decisões até a obra.



              </p>



            </div>



          </div>







          <div className="mt-20 rounded-[28px] border border-white/10 bg-[#082536]/80 p-6 shadow-2xl shadow-black/10 backdrop-blur md:p-10">



            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">



              <ProcessStep number="01" title="Ideia" description="Entendimento da necessidade e definição dos objetivos." />



              <ProcessArrow />



              <ProcessStep number="02" title="CAD" description="Desenvolvimento técnico, detalhamento e documentação." />



              <ProcessArrow />



              <ProcessStep number="03" title="BIM" description="Modelagem, integração e compatibilização das disciplinas." />



              <ProcessArrow />



              <ProcessStep number="04" title="Planejamento" description="Organização das etapas, prazos e recursos da execução." />



              <ProcessArrow />



              <ProcessStep number="05" title="Obra" description="Acompanhamento técnico e controle da execução." />



            </div>



          </div>







          <div className="mt-12 grid gap-6 md:grid-cols-3">



            <AboutCard code="01" title="Integração" text="Projeto, planejamento e execução tratados como partes do mesmo processo." />



            <AboutCard code="02" title="Tecnologia" text="CAD e BIM aplicados para melhorar a qualidade das informações e reduzir incompatibilidades." />



            <AboutCard code="03" title="Gestão" text="Organização técnica para apoiar decisões, controlar etapas e dar mais previsibilidade ao projeto." />



          </div>







          <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">



            <div>



              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#22d3d6]">EVOLBIM ENGENHARIA</span>



              <p className="mt-3 max-w-[620px] text-lg font-semibold leading-7 text-white">



                Engenharia desenvolvida para conectar informação, planejamento e execução.



              </p>



            </div>



            <a href="/servicos" className="inline-flex h-12 items-center justify-center rounded-xl border border-[#18c3c8]/40 px-6 text-sm font-bold text-[#22d3d6] transition hover:bg-[#18c3c8] hover:text-[#041725]">



              Conhecer nossos serviços <span className="ml-3">→</span>



            </a>



          </div>



        </div>



      </section>



      {/* =========================================================







          SERVIÇOS







      ========================================================= */}







      <section







        id="servicos"







        className="border-y border-white/10 bg-[#081f30] py-24 md:py-32"







      >







        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">







          <div className="grid gap-10 lg:grid-cols-2">







            <div>







              <SectionLabel>SERVIÇOS</SectionLabel>















              <h2 className="mt-7 max-w-[620px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">







                Engenharia conectada em







                <span className="text-[#16c7c2]"> todas as etapas.</span>







              </h2>







            </div>















            <p className="max-w-[620px] self-end text-lg leading-8 text-slate-400">







              Soluções técnicas para organizar projetos, informações e







              processos antes e durante a execução.







            </p>







          </div>















          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">







            {services.map((service) => (







              <article







                key={service.number}







                className={`group relative min-h-[390px] bg-[#071d2d] p-8 transition duration-300 hover:bg-[#0a293b] ${["01", "02", "03", "04", "05", "06"].includes(service.number) ? "cursor-pointer" : ""}`}







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







                {["01", "02", "03", "04", "05", "06"].includes(service.number) && (







                  <>







                    <div className="mt-8 flex items-center gap-3 text-sm font-bold text-[#16c7c2] transition-all duration-300 group-hover:gap-4">







                      <span>Conhecer serviço</span>







                      <span aria-hidden="true">→</span>







                    </div>







                    <a







                      href={

                        service.number === "01"

                          ? "/servicos/projetos-de-engenharia"

                          : service.number === "02"

                            ? "/servicos/cad"

                            : service.number === "03"

                              ? "/servicos/bim"

                              : service.number === "04"

                                ? "/servicos/planejamento-orcamento"

                                : service.number === "05"

                                  ? "/servicos/execucao-acompanhamento"

                                  : "/servicos/consultoria-assessoria"

                      }







                      aria-label={

                        service.number === "01"

                          ? "Conhecer o serviço Projetos de Engenharia"

                          : service.number === "02"

                            ? "Conhecer o serviço Desenho e Detalhamento Técnico em CAD"

                            : service.number === "03"

                              ? "Conhecer o serviço Modelagem e Compatibilização BIM"

                              : service.number === "04"

                                ? "Conhecer o serviço Planejamento e Orçamento"

                                : service.number === "05"

                                  ? "Conhecer o serviço Execução e Acompanhamento de Obras"

                                  : "Conhecer o serviço Consultoria e Assessoria Técnica"

                      }







                      className="absolute inset-0 z-10"







                    />







                  </>







                )}







              </article>







            ))}







          </div>







        </div>







      </section>















      {/* =========================================================







          TECNOLOGIA







      ========================================================= */}







      <section className="relative overflow-hidden bg-[#061b2b] py-24 md:py-32">







        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(22,199,194,0.07),transparent_55%)]" />















        <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:px-16">







          <div>







            <SectionLabel>TECNOLOGIA APLICADA</SectionLabel>















            <h2 className="mt-7 max-w-[600px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">







              Projeto não é apenas desenho.







              <span className="text-[#16c7c2]">







                {" "}







                É informação para construir.







              </span>







            </h2>















            <p className="mt-7 max-w-[620px] text-lg leading-8 text-slate-400">







              A integração entre CAD, BIM e planejamento permite organizar







              informações técnicas e melhorar a comunicação entre projeto e







              execução.







            </p>







          </div>















          <div className="space-y-3">







            <TechnologyLine







              number="01"







              title="CAD"







              text="Desenvolvimento técnico 2D"







            />







            <TechnologyLine







              number="02"







              title="BIM"







              text="Modelagem + informação"







            />







            <TechnologyLine







              number="03"







              title="COMPATIBILIZAÇÃO"







              text="Antecipação de interferências"







            />







            <TechnologyLine







              number="04"







              title="PLANEJAMENTO"







              text="Prazo + custo + execução"







            />







          </div>







        </div>







      </section>















      {/* =========================================================







          PROCESSO







      ========================================================= */}







      <section







        id="processo"







        className="border-y border-white/10 bg-[#081f30] py-24 md:py-32"







      >







        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">







          <SectionLabel>COMO TRABALHAMOS</SectionLabel>















          <h2 className="mt-7 max-w-[760px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">







            Um processo técnico do início







            <span className="text-[#16c7c2]"> à entrega.</span>







          </h2>















          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">







            {steps.map((step) => (







              <div







                key={step.number}







                className="relative min-h-[250px] rounded-xl border border-white/10 bg-[#071d2d] p-7"







              >







                <span className="font-mono text-xs text-[#16c7c2]">







                  {step.number}







                </span>















                <h3 className="mt-12 text-2xl font-semibold">{step.title}</h3>















                <p className="mt-4 leading-7 text-slate-400">{step.text}</p>







              </div>







            ))}







          </div>







        </div>







      </section>















      {/* =========================================================







          ÁREAS DE ATUAÇÃO







      ========================================================= */}







      <section className="bg-[#061b2b] py-24 md:py-32">







        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">







          <div className="grid gap-10 lg:grid-cols-2">







            <div>







              <SectionLabel>ÁREAS DE ATUAÇÃO</SectionLabel>















              <h2 className="mt-7 max-w-[600px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">







                Soluções para diferentes







                <span className="text-[#16c7c2]"> necessidades.</span>







              </h2>







            </div>















            <p className="max-w-[610px] self-end text-lg leading-8 text-slate-400">







              A solução é definida conforme as características, necessidades e







              objetivos de cada demanda.







            </p>







          </div>















          <div className="mt-16 grid gap-5 md:grid-cols-2">







            {areas.map((area) => (







              <article







                key={area.tag}







                className="group relative min-h-[310px] overflow-hidden rounded-2xl border border-white/10 bg-[#081f30] p-8 md:p-10"







              >







                <div className="absolute -right-16 -top-16 h-56 w-56 rotate-45 border border-[#16c7c2]/10 transition duration-500 group-hover:rotate-[55deg] group-hover:border-[#16c7c2]/20" />















                <span className="text-xs font-bold tracking-[0.22em] text-[#16c7c2]">







                  {area.tag}







                </span>















                <h3 className="mt-12 max-w-[460px] text-3xl font-semibold">







                  {area.title}







                </h3>















                <p className="mt-5 max-w-[520px] leading-7 text-slate-400">







                  {area.text}







                </p>















                <div className="mt-8 border-t border-white/10 pt-5 text-[10px] font-bold tracking-[0.16em] text-slate-500">







                  {area.detail}







                </div>







              </article>







            ))}







          </div>







        </div>







      </section>















      {/* =========================================================



          POR QUE ESCOLHER A EVOLBIM



      ========================================================= */}



      <section className="relative overflow-hidden border-t border-white/10 bg-[#081f30] py-24 md:py-32">



        <div className="pointer-events-none absolute inset-0">



          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(22,199,194,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(22,199,194,.8) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />



          <div className="absolute -right-24 top-12 h-[420px] w-[420px] rotate-12 border border-[#16c7c2]/[0.06]" />



        </div>



        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">



          <SectionLabel>ENGENHARIA PENSADA PARA EXECUTAR</SectionLabel>



          <div className="mt-7 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">



            <h2 className="max-w-[720px] text-4xl font-bold leading-tight tracking-[-0.035em] md:text-5xl">



              Mais organização antes da obra.



              <span className="block text-[#16c7c2]">Mais controle durante a execução.</span>



            </h2>



            <p className="max-w-[590px] text-lg leading-8 text-slate-400 lg:justify-self-end">



              A Evolbim conecta projeto, tecnologia e gestão para organizar informações, apoiar decisões técnicas e tornar cada etapa mais clara antes e durante a execução.



            </p>



          </div>



          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">



            <WhyCard number="01" title="Visão integrada" text="Projeto, CAD, BIM, planejamento e execução tratados como partes do mesmo processo." />



            <WhyCard number="02" title="Decisões com base técnica" text="Informações organizadas para reduzir improvisos e apoiar decisões durante o empreendimento." />



            <WhyCard number="03" title="Tecnologia aplicada" text="CAD e BIM utilizados para melhorar documentação, compatibilização e entendimento do projeto." />



            <WhyCard number="04" title="Acompanhamento próximo" text="Comunicação direta e acompanhamento técnico conforme a necessidade de cada contratação." />



          </div>



          <div className="mt-14 overflow-hidden rounded-2xl border border-[#16c7c2]/20 bg-[#061b2b]">



            <div className="grid md:grid-cols-4">



              {["PROJETO", "PLANEJAMENTO", "EXECUÇÃO", "RESULTADO"].map((item, index) => (



                <div key={item} className={`relative flex min-h-[120px] items-center justify-center px-6 text-center text-sm font-bold tracking-[0.16em] ${index < 3 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""}`}>



                  <span className="text-[#16c7c2]">{item}</span>



                  {index < 3 && <span className="absolute right-4 hidden text-[#16c7c2]/50 md:block">→</span>}



                </div>



              ))}



            </div>



          </div>



        </div>



      </section>







      {/* =========================================================







          CTA / CONTATO







      ========================================================= */}







      <section







        id="contato"







        className="relative overflow-hidden border-t border-white/10 bg-[#0a2638] py-24 md:py-32"







      >







        <div className="absolute -right-28 -top-28 h-[500px] w-[500px] rounded-full border border-[#16c7c2]/10" />







        <div className="absolute -right-10 -top-10 h-[340px] w-[340px] rounded-full border border-[#16c7c2]/10" />















        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16">







          <div>







            <SectionLabel>FALE COM A EVOLBIM</SectionLabel>















            <h2 className="mt-7 max-w-[750px] text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">







              Tem um projeto







              <span className="text-[#16c7c2]"> em mente?</span>







            </h2>















            <p className="mt-7 max-w-[660px] text-lg leading-8 text-slate-300">







              Conte para nós o que você precisa. Vamos entender sua demanda e







              avaliar a solução técnica adequada para o projeto.







            </p>















            <div className="mt-10 flex flex-col gap-4 sm:flex-row">







              <a







                href="https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."







                target="_blank"







                rel="noreferrer"







                className="rounded-lg bg-[#16c7c2] px-8 py-4 text-center text-sm font-bold text-[#041725] transition hover:-translate-y-0.5 hover:bg-[#20ddd7]"







              >







                Falar pelo WhatsApp







              </a>















              <a







                href="mailto:contato@evolbimengenharia.com.br"







                className="rounded-lg border border-white/15 px-8 py-4 text-center text-sm font-semibold transition hover:border-[#16c7c2]/60"







              >







                Enviar e-mail







              </a>







            </div>







          </div>















          <div className="rounded-2xl border border-white/10 bg-[#061b2b]/60 p-8">







            <span className="text-xs font-bold tracking-[0.2em] text-[#16c7c2]">







              EVOLBIM ENGENHARIA







            </span>















            <div className="mt-10 space-y-7">







              <ContactLine label="Localização" value="Jataí • Goiás" />



              <ContactLine label="WhatsApp" value="(64) 98420-1767" />



              <ContactLine label="E-mail" value="contato@evolbimengenharia.com.br" />



              <ContactLine label="Atendimento" value="Online e presencial" />







            </div>







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







                <a href="/">Início</a>







                <a href="/quem-somos">Quem Somos</a>







                <a href="/servicos">Serviços</a>







                <a href="/como-trabalhamos">Como Trabalhamos</a>







                <a href="/contato">Contato</a>







              </div>







            </div>















            <div>







              <strong className="text-sm">Contato</strong>















              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">







                <span>Jataí • Goiás</span>



                <a href="https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer" className="transition hover:text-[#16c7c2]">

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















      {/* =========================================================







          WHATSAPP FLOAT







      ========================================================= */}







      <a







        href="https://wa.me/5564984201767?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Evolbim%20Engenharia%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."







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















/* =========================================================







   COMPONENTES







========================================================= */















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















function FlowCard({







  number,







  title,







  text,







  last = false,







}: {







  number: string;







  title: string;







  text: string;







  last?: boolean;







}) {







  return (







    <div







      className={`relative min-h-[240px] bg-[#081f30] p-7 ${







        !last ? "border-b border-white/10 md:border-b-0 md:border-r" : ""







      }`}







    >







      <span className="font-mono text-xs text-slate-600">{number}</span>















      <h3 className="mt-12 text-2xl font-bold text-[#16c7c2]">{title}</h3>















      <p className="mt-4 max-w-[250px] text-sm leading-6 text-slate-400">







        {text}







      </p>















      {!last && (







        <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-xl text-[#16c7c2]/40 md:block">







          →







        </span>







      )}







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















function ProcessStep({



  number,



  title,



  description,



}: {



  number: string;



  title: string;



  description: string;



}) {



  return (



    <div className="min-w-0 flex-1">



      <div className="flex items-center gap-3">



        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#18c3c8]/30 bg-[#18c3c8]/10 text-[10px] font-black text-[#22d3d6]">{number}</span>



        <h3 className="text-lg font-black text-white">{title}</h3>



      </div>



      <p className="mt-4 max-w-[230px] text-sm leading-6 text-slate-400">{description}</p>



    </div>



  );



}







function ProcessArrow() {



  return (



    <div className="hidden shrink-0 items-center xl:flex">



      <div className="h-px w-7 bg-[#18c3c8]/30" />



      <span className="-ml-1 text-sm text-[#18c3c8]/60">›</span>



    </div>



  );



}







function AboutCard({ code, title, text }: { code: string; title: string; text: string }) {



  return (



    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#082536] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#18c3c8]/30">



      <div className="absolute right-5 top-3 text-5xl font-black text-white/[0.025]">{code}</div>



      <span className="text-[10px] font-black tracking-[0.25em] text-[#22d3d6]">{code}</span>



      <h3 className="mt-8 text-xl font-black text-white">{title}</h3>



      <div className="mt-4 h-px w-10 bg-[#18c3c8]" />



      <p className="mt-5 text-sm leading-6 text-slate-400">{text}</p>



    </div>



  );



}







function WhyCard({ number, title, text }: { number: string; title: string; text: string; }) {



  return (



    <article className="group min-h-[260px] bg-[#071d2d] p-8 transition duration-300 hover:bg-[#0a293b] md:p-10">



      <div className="flex items-center justify-between">



        <span className="font-mono text-xs text-[#16c7c2]">{number}</span>



        <span className="h-px w-10 bg-[#16c7c2]/50 transition-all duration-300 group-hover:w-16" />



      </div>



      <h3 className="mt-12 text-2xl font-semibold">{title}</h3>



      <p className="mt-5 max-w-[520px] leading-7 text-slate-400">{text}</p>



    </article>



  );



}







function ContactLine({







  label,







  value,







}: {







  label: string;







  value: string;







}) {







  return (







    <div className="border-b border-white/10 pb-6">







      <span className="block text-[10px] font-bold tracking-[0.18em] text-slate-500">







        {label.toUpperCase()}







      </span>















      <span className="mt-2 block text-base text-slate-200">{value}</span>







    </div>







  );







}
