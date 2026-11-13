"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function CursorHalo() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const move = (event: PointerEvent) => { if (event.pointerType !== "mouse") return; setPosition({ x: event.clientX, y: event.clientY }); setVisible(true); setActive(Boolean((event.target as HTMLElement).closest("a,button"))); };
    const hide = () => setVisible(false);
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", hide);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", hide); };
  }, []);
  return <div aria-hidden="true" className={`cursor-halo ${visible ? "visible" : ""} ${active ? "active" : ""}`} style={{ left: position.x, top: position.y }}><span /></div>;
}


export default function SolicitarOrcamento() {
  return (
    <main className="landing">
      <CursorHalo />
      <header className="top" id="topo">
        <Image src="/images/brand/logo-light.png" alt="Evolbim Engenharia" width={240} height={85} className="logo" priority />
        <span className="reading">LEITURA DE 2 MINUTOS</span>
      </header>
      <section className="hero">
        <div className="copy">
          
          <h1>Desenvolva e execute seu projeto com segurança, eficiência e <em>alto padrão.</em></h1>
          <p>Projetos de engenharia, planejamento, orçamento e acompanhamento técnico em um processo completo, do estudo à execução.</p>
          <a className="cta" href="mailto:contato@evolbimengenharia.com.br?subject=Agendamento%20de%20reuni%C3%A3o%20gratuita%20-%20Evolbim">AGENDE SUA REUNIÃO GRATUITA</a>
          <div className="hero-meta"><span className="hero-limited"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> Vagas Limitadas</span><span className="hero-meta-divider" aria-hidden="true">|</span><span className="hero-location"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg> Jataí - GO e Região · Atendimento presencial e remoto</span></div>
        </div>
      </section>
      <section className="audience" aria-labelledby="audience-title">
        <div className="audience-inner">
          <span className="audience-label">É PARA VOCÊ</span>
          <h2 id="audience-title">A <strong>Evolbim Engenharia</strong> <em>é para você</em> que...</h2>
          <div className="audience-grid">
            {[
              ["01", "Precisa de projetos de engenharia", "Para construir com segurança."],
              ["02", "Precisa organizar projetos, profissionais, orçamento e execução", "Para ter mais clareza e controle em cada etapa do empreendimento."],
              ["03", "Deseja evitar retrabalhos, desperdícios e custos inesperados", "Com planejamento e soluções técnicas desde o início."],
              ["04", "Busca acompanhamento técnico", "Para ter mais controle da obra."],
              ["05", "Quer construir ou reformar", "Mas não sabe por onde começar."]
            ].map(([number, title, description], index) => (
              <article className="audience-card" key={number}>
                <span className="audience-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">{index === 0 ? <><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-7h6v7M9 10h.01M15 10h.01"/></> : index === 1 ? <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v7M14 17.5h7"/></> : index === 2 ? <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></> : index === 3 ? <><path d="M3 21h18M6 21V8l6-4 6 4v13M9 12h6M9 16h6"/><circle cx="19" cy="6" r="3"/><path d="m18 6 1 1 2-2"/></> : <><path d="M3 11.5 12 4l9 7.5V21H3v-9.5Z"/><path d="M9 21v-7h6v7"/><path d="M12 8v3M10.5 9.5h3"/></>}</svg></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="challenge" aria-labelledby="challenge-title">
        <div className="challenge-inner">
          <div className="challenge-visual"><div className="challenge-photo" role="img" aria-label="Profissional analisando desenhos e projetos arquitetônicos" /><div className="challenge-photo-caption"><span className="challenge-caption-dot" /> ENGENHARIA • PLANEJAMENTO • EXECUÇÃO</div></div>
          <div className="challenge-copy">
            <h2 id="challenge-title">O maior risco da sua obra? <strong>Começar sem planejamento.</strong></h2>
            <p>Uma obra não começa quando a construção é iniciada. Ela começa nas decisões tomadas antes: quais projetos desenvolver, como organizar o orçamento e quem será responsável por cada etapa.</p>
            <div className="challenge-risks"><div><span aria-hidden="true">↗</span> Projetos desconectados geram retrabalhos.</div><div><span aria-hidden="true">↗</span> Orçamentos imprecisos aumentam os custos.</div><div><span aria-hidden="true">↗</span> Falta de planejamento provoca atrasos.</div></div>
            <p>Na <strong>Evolbim Engenharia</strong>, conectamos projetos, planejamento e acompanhamento técnico para que você avance com mais clareza, segurança e controle.</p>
            <a className="challenge-cta" href="mailto:contato@evolbimengenharia.com.br?subject=Agendamento%20de%20reuni%C3%A3o%20gratuita%20-%20Evolbim">AGENDE SUA REUNIÃO GRATUITA <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section className="solution" aria-labelledby="solution-title">
        <div className="solution-inner">
          <span className="solution-kicker">A SOLUÇÃO QUE ENTREGAMOS</span>
          <h2 id="solution-title">Método <strong>APEX</strong></h2>
          <p className="solution-intro">Da concepção à realização, uma metodologia que integra soluções técnicas, tecnologia e gestão para desenvolver empreendimentos com mais previsibilidade e controle.</p>
          <div className="solution-grid">
            <article className="solution-card">
              <span className="solution-index">A</span>
              <h3>Análise</h3>
              <p>Entendemos as necessidades, avaliamos as condições e identificamos os requisitos técnicos e as oportunidades do empreendimento.</p>
            </article>
            <article className="solution-card">
              <span className="solution-index">P</span>
              <h3>Planejamento</h3>
              <p>Organizamos escopo, etapas, prazos e orçamento para orientar decisões com mais clareza e previsibilidade.</p>
            </article>
            <article className="solution-card">
              <span className="solution-index">E</span>
              <h3>Engenharia</h3>
              <p>Desenvolvemos e integramos soluções técnicas, projetos e tecnologias para reduzir incompatibilidades e retrabalhos.</p>
            </article>
            <article className="solution-card">
              <span className="solution-index">X</span>
              <h3>Execução</h3>
              <p>Aplicamos o planejamento à prática, com orientação e acompanhamento técnico para apoiar qualidade e controle.</p>
            </article>
          </div>
          <p className="solution-tagline">Engenharia inteligente do início ao resultado.</p>
        </div>
      </section>
      <section className="urgency" aria-labelledby="urgency-title">
        <div className="urgency-inner">
          <div className="urgency-copy">
            <span className="urgency-kicker">MAS VOCÊ PRECISA AGIR AGORA.</span>
            <h2 id="urgency-title">O tempo não espera. <strong>Sua obra também não deveria.</strong></h2>
            <p>Adiar o planejamento ou continuar executando sem uma gestão adequada pode aumentar custos, gerar retrabalhos e comprometer prazos.</p>
          </div>
          <div className="urgency-visual" role="img" aria-label="Relógio sobre projetos arquitetônicos, representando a importância do tempo no planejamento da obra">
            <div className="urgency-visual-label"><span /> TEMPO • PLANEJAMENTO • CONTROLE</div>
          </div>
        </div>
      </section>
      <section className="founder" aria-labelledby="founder-title">
        <div className="founder-inner">
          <div className="founder-copy">
            <span className="founder-kicker">QUEM DESENVOLVEU A METODOLOGIA</span>
            <h2 id="founder-title">Quem está por trás do <strong>Método APEX</strong></h2>
            <p>Por trás da metodologia está <strong>Pedro Moreira</strong>, engenheiro civil, pós-graduado em Infraestrutura BIM e fundador da <strong>Evolbim Engenharia</strong>.</p>
            <p>Sua trajetória profissional reúne experiências em gestão, execução e fiscalização de obras, implantação de empreendimentos imobiliários e infraestrutura rodoviária.</p>
            <p>A vivência prática no setor da construção civil, aliada ao conhecimento técnico e à aplicação de novas tecnologias, contribuiu para o desenvolvimento do <strong>Método APEX — Análise, Planejamento, Engenharia e Execução</strong>.</p>
            <p>Uma metodologia criada para integrar as etapas de um empreendimento, reduzir falhas de comunicação, antecipar problemas e proporcionar mais previsibilidade, qualidade e controle.</p>
            <p className="founder-signature">Engenharia inteligente do início ao resultado.</p>
          </div>
          <div className="founder-visual">
            <div className="founder-brand"><Image src="/images/brand/logo-light.png" alt="Evolbim Engenharia" width={275} height={98} /></div>
            <div className="founder-apex">APEX<span>ANÁLISE · PLANEJAMENTO · ENGENHARIA · EXECUÇÃO</span></div>
            <div className="founder-name"><strong>Pedro Moreira</strong><span>Engenheiro Civil · Fundador da Evolbim Engenharia</span></div>
          </div>
        </div>
      </section>
      <section className="faq" aria-labelledby="faq-title">
        <div className="faq-inner">
          <div className="faq-intro">
            <span className="faq-kicker">PERGUNTAS MAIS FREQUENTES</span>
            <h2 id="faq-title">Ainda com <strong>dúvidas?</strong></h2>
            <a className="faq-cta" href="mailto:contato@evolbimengenharia.com.br?subject=Agendamento%20de%20reuni%C3%A3o%20gratuita%20-%20Evolbim">AGENDE SUA REUNIÃO GRATUITA <span aria-hidden="true">↗</span></a>
            <span className="limited-spots limited-spots-faq"><span aria-hidden="true">✦</span> Vagas Limitadas</span>
            <p>Converse com a Evolbim e entenda os próximos passos do seu projeto.</p>
          </div>
          <div className="faq-items">
            <details className="faq-item">
              <summary>Preciso contratar todos os projetos de engenharia de uma vez?<span aria-hidden="true">+</span></summary>
              <p>Não necessariamente. O escopo pode ser definido conforme as necessidades do empreendimento. Avaliamos quais projetos e etapas são necessários e como integrá-los para evitar incompatibilidades.</p>
            </details>
            <details className="faq-item">
              <summary>Já comecei minha obra. Ainda posso contratar a Evolbim?<span aria-hidden="true">+</span></summary>
              <p>Sim. Podemos avaliar a situação atual, identificar necessidades técnicas e propor serviços de planejamento, projetos ou acompanhamento adequados à etapa em que sua obra se encontra.</p>
            </details>
            <details className="faq-item">
              <summary>Como sei quais projetos e serviços minha obra precisa?<span aria-hidden="true">+</span></summary>
              <p>Na conversa inicial, entendemos o tipo de empreendimento, a etapa em que ele se encontra e seus objetivos. Com essas informações, identificamos os projetos e serviços técnicos necessários e apresentamos uma proposta adequada à sua demanda.</p>
            </details>
            <details className="faq-item">
              <summary>Quanto custa contratar os serviços da Evolbim?<span aria-hidden="true">+</span></summary>
              <p>O investimento depende do tipo de serviço, da área, da complexidade e dos entregáveis necessários. Na conversa inicial, entendemos sua demanda para preparar uma proposta compatível com o escopo.</p>
            </details>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <Image src="/images/brand/logo-light.png" alt="Evolbim Engenharia" width={195} height={70} />
              <p>Engenharia inteligente do início ao resultado.</p>
            </div>
            <a className="footer-back" href="#topo"><span aria-hidden="true">↑</span> Voltar ao topo</a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Evolbim Engenharia. Todos os direitos reservados.</span>
            <span>Jataí - GO · Atendimento presencial e remoto</span>
          </div>
        </div>
      </footer>
      <style>{`
        .cursor-halo{position:fixed;z-index:2147483647;width:46px;height:46px;border:2px solid #12c6bf;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%) scale(.8);opacity:0;transition:opacity .18s,transform .2s;display:grid;place-items:center;box-shadow:0 0 0 3px #12c6bf22,0 0 18px #12c6bf66}.cursor-halo span{width:4px;height:4px;background:#12c6bf;border-radius:50%}.cursor-halo.visible{opacity:1;transform:translate(-50%,-50%) scale(1)}.cursor-halo.active{transform:translate(-50%,-50%) scale(1.45);background:#12c6bf18}@media(hover:none),(pointer:coarse),(prefers-reduced-motion:reduce){.cursor-halo{display:none!important}}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}
        .landing{font-family:Arial,Helvetica,sans-serif;background:#071624;color:#fff}
        .top{height:86px;max-width:1140px;margin:auto;padding:5px 18px;display:flex;align-items:center;justify-content:space-between;gap:20px;position:relative;z-index:2}
        .logo{width:145px;height:72px;object-fit:contain}
        .descriptor{display:none}.reading{font-size:14px;font-weight:600;letter-spacing:.5px;white-space:nowrap}
         .hero{min-height:540px;display:flex;align-items:center;background:linear-gradient(90deg,rgba(5,19,32,.98) 0%,rgba(5,19,32,.88) 34%,rgba(5,19,32,.45) 62%,rgba(5,19,32,.10) 100%),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat}
        .copy{max-width:1140px;width:100%;margin:auto;padding:52px 18px 44px}
        .copy>*{max-width:535px}
        .accent{display:none}
        h1{font-size:clamp(37px,4vw,53px);font-weight:400;line-height:1.12;letter-spacing:-1.2px;margin:0 0 22px}
        h1 em{font-style:normal;font-weight:700;color:#12c6bf}
        .copy p{font-size:14px;line-height:1.55;margin:0 0 40px;max-width:515px}
        .cta{display:inline-flex;align-items:center;justify-content:center;gap:26px;min-width:360px;padding:21px 27px;background:#12c6bf;border-radius:28px 0 28px 0;color:#041d24;text-decoration:none;font-weight:700;font-size:15px;transition:background .2s,transform .2s}
        .cta:hover{background:#4be0d8;transform:translateY(-2px)}.cta span{font-size:20px}
        .availability{font-size:12px;margin-top:16px;margin-bottom:7px;color:#cbd5d9}
        .region{font-size:12px;color:#cbd5d9;padding:0;border:0;margin-top:22px;display:flex;align-items:center;gap:7px}.region svg{color:#12c6bf;flex-shrink:0}
        .audience{background:radial-gradient(ellipse at 50% 10%,#103349 0%,#061526 52%,#04101e 100%);padding:90px 24px 108px;color:#f5f8fa}
        .audience-inner{max-width:1120px;margin:0 auto;text-align:center}
        .audience-label{display:inline-block;border:1px solid #1b5863;border-radius:30px;padding:8px 20px;color:#16c7c0;background:#0a2638;font-size:11px;font-weight:700;letter-spacing:1.6px}
        .audience h2{font-size:clamp(26px,3vw,38px);font-weight:400;line-height:1.25;margin:22px 0 34px;color:#c6d3dc}
        .audience h2 strong{color:#fff;font-weight:700}.audience h2 em{font-style:normal;color:#12c6bf;font-weight:600}
        .audience-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px;text-align:left}
        .audience-card{position:relative;overflow:hidden;grid-column:span 2;border:1px solid rgba(91,150,168,.24);border-radius:20px 4px 20px 4px;background:linear-gradient(145deg,rgba(18,49,68,.85),rgba(7,25,42,.98));padding:25px 25px;min-height:195px;transition:transform .25s,border-color .25s,box-shadow .25s;background-clip:padding-box}.audience-card:before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 100% 0%,rgba(18,198,191,.11),transparent 58%);opacity:.35;transition:opacity .25s}.audience-card:hover:before{opacity:1}
        .audience-card:nth-child(4),.audience-card:nth-child(5){grid-column:span 3}
        .audience-card:hover{transform:translateY(-5px);border-color:#13c6bf;box-shadow:0 16px 35px #0003}
        .audience-icon{display:inline-grid;place-items:center;width:38px;height:38px;border:1px solid rgba(18,198,191,.32);background:rgba(18,198,191,.08);border-radius:13px;color:#2bdbd2}.audience-icon svg{width:20px;height:20px}
        .audience-card h3{position:relative;font-size:16px;line-height:1.4;letter-spacing:-.2px;margin:18px 0 8px;color:#fff;font-weight:650}
        .audience-card p{position:relative;font-size:13px;line-height:1.55;margin:0;color:#b8c9d2}
        @media(max-width:750px){.audience{padding:65px 18px 75px}.audience-grid{grid-template-columns:1fr;gap:13px}.audience-card,.audience-card:nth-child(4),.audience-card:nth-child(5){grid-column:auto;min-height:0;padding:22px}.audience h2{margin-bottom:28px}}
        .challenge{background:radial-gradient(ellipse at 80% 40%,#102b40 0%,#071a2c 46%,#04101e 100%);color:#f2f7f8;padding:105px 24px}
        .challenge-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:minmax(0,.86fr) minmax(0,1.14fr);align-items:center;gap:70px}
        .challenge-visual{position:relative;max-width:470px;width:100%;margin:auto}.challenge-photo{min-height:470px;aspect-ratio:4/4.7;border-radius:30px 90px 30px 90px;background:linear-gradient(0deg,rgba(5,22,36,.48),rgba(5,22,36,.03) 50%),url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85') center/cover no-repeat;box-shadow:0 24px 65px rgba(0,0,0,.25);background-position:center 45%}.challenge-photo-caption{position:absolute;bottom:22px;left:20px;right:20px;display:flex;align-items:center;gap:9px;padding:13px 15px;background:rgba(4,19,32,.83);border:1px solid rgba(18,198,191,.32);border-radius:12px;color:#d7edf0;backdrop-filter:blur(10px);font-size:10px;font-weight:700;letter-spacing:1px}.challenge-caption-dot{width:7px;height:7px;border-radius:50%;background:#12c6bf;box-shadow:0 0 12px #12c6bf}
        .challenge-eyebrow{display:inline-block;font-size:11px;font-weight:700;letter-spacing:1.8px;color:#25d4cb;border-bottom:1px solid #12c6bf;padding-bottom:8px}
        .challenge h2{font-size:clamp(30px,3.1vw,43px);line-height:1.16;letter-spacing:-1px;font-weight:400;margin:22px 0 24px;color:#f0f6f8}
        .challenge h2 strong{font-weight:750;color:#12c6bf}
        .challenge-copy p{font-size:15px;line-height:1.75;color:#b9cbd5;margin:0 0 17px}
        .challenge-copy p strong{color:#fff}.challenge-risks{display:grid;gap:12px;margin:22px 0 25px}.challenge-risks div{display:flex;align-items:center;gap:13px;color:#e0ebef;font-size:14px;line-height:1.4}.challenge-risks span{flex:0 0 27px;width:27px;height:27px;display:grid;place-items:center;border:1px solid #12c6bf55;border-radius:9px;background:#12c6bf13;color:#12c6bf;font-size:17px}
        .challenge-cta{display:inline-flex;align-items:center;justify-content:center;gap:24px;margin-top:17px;padding:18px 25px;min-height:56px;border-radius:22px 3px 22px 3px;background:#12c6bf;color:#06222a;font-size:13px;font-weight:800;text-decoration:none;letter-spacing:.3px;transition:transform .2s,background .2s,box-shadow .2s}
        .challenge-cta:hover{background:#3eddd4;transform:translateY(-2px);box-shadow:0 12px 24px #12c6bf33}.challenge-cta span{font-size:19px}
        @media(max-width:800px){.challenge{padding:70px 20px}.challenge-inner{grid-template-columns:1fr;gap:34px}.challenge-photo{min-height:330px;max-height:430px}.challenge-visual{max-width:440px}.challenge h2{font-size:clamp(29px,7vw,39px)}.challenge-copy p{font-size:14px}.challenge-cta{width:100%;max-width:370px}}
        .solution{position:relative;overflow:hidden;padding:72px 24px 78px;background:linear-gradient(140deg,#071a2c 0%,#041225 65%,#071c30 100%);color:#f6fafc}
        .solution:before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(#3c74831a 1px,transparent 1px),linear-gradient(90deg,#3c74831a 1px,transparent 1px);background-size:74px 74px;mask-image:linear-gradient(90deg,transparent,#000 45%,transparent)}
        .solution-inner{position:relative;max-width:1120px;margin:auto;text-align:center}
        .solution-kicker{display:inline-block;font-size:11px;letter-spacing:2px;font-weight:700;color:#12c6bf;border-bottom:1px solid #12c6bf;padding-bottom:9px}
        .solution h2{font-size:clamp(29px,3vw,39px);line-height:1.2;font-weight:400;letter-spacing:-.8px;margin:17px auto 12px;max-width:750px}
        .solution h2 strong{font-weight:750;color:#fff}
        .solution-intro{font-size:14px;line-height:1.7;color:#afc5d0;max-width:660px;margin:0 auto 27px}
        .solution-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;text-align:left}
        .solution-card{background:linear-gradient(155deg,#102a41,#091d31);border:1px solid #28506988;border-radius:20px 4px 20px 4px;padding:22px 20px 23px;min-height:225px;transition:transform .25s,border-color .25s,box-shadow .25s}
        .solution-card:hover{transform:translateY(-5px);border-color:#12c6bf;box-shadow:0 16px 38px #0004}
        .solution-index{display:inline-grid;place-items:center;background:#12c6bf;color:#04202a;font-size:16px;font-weight:800;width:40px;height:40px;border-radius:11px}
        .solution-card h3{font-size:18px;line-height:1.3;margin:18px 0 10px;color:#f8fcff}
        .solution-card p{font-size:13px;line-height:1.55;margin:0;color:#b8cad4}.solution-tagline{font-size:15px;font-weight:600;color:#12c6bf;letter-spacing:.3px;margin:25px 0 0}
        @media(min-width:751px) and (max-width:1000px){.solution-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:750px){.solution{padding:68px 18px 75px}.solution-grid{grid-template-columns:1fr;gap:14px}.solution-card{min-height:0;padding:25px}.solution-intro{margin-bottom:28px}}
        .urgency{position:relative;overflow:hidden;background:linear-gradient(125deg,#061526,#0b273b 56%,#061526);color:#f6fafc;padding:68px 24px 74px;border-top:1px solid rgba(18,198,191,.16)}
        .urgency-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1.06fr) minmax(0,.94fr);align-items:center;gap:68px}
        .urgency-copy{max-width:560px}
        .urgency-kicker{display:block;font-size:14px;font-weight:700;color:#12c6bf;margin-bottom:17px}
        .urgency h2{font-size:clamp(30px,3.2vw,43px);line-height:1.18;font-weight:400;letter-spacing:-.8px;margin:0 0 24px}
        .urgency h2 strong{font-weight:750;color:#12c6bf}
        .urgency p{font-size:15px;line-height:1.75;color:#c1d2db;margin:0;max-width:510px}
        .urgency-visual{position:relative;min-height:340px;aspect-ratio:1.34;background:linear-gradient(0deg,rgba(2,17,31,.5),transparent 55%),url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85') center/cover no-repeat;border:1px solid rgba(18,198,191,.24);border-radius:36px 6px 36px 6px;box-shadow:0 20px 55px rgba(0,0,0,.25);overflow:hidden}
        .urgency-visual-label{position:absolute;left:18px;bottom:18px;right:18px;display:flex;align-items:center;gap:9px;padding:12px 14px;border:1px solid rgba(18,198,191,.3);border-radius:10px;background:rgba(4,20,34,.82);backdrop-filter:blur(8px);font-size:10px;font-weight:700;letter-spacing:1px;color:#d7edf0}
        .urgency-visual-label span{width:7px;height:7px;flex:0 0 7px;border-radius:50%;background:#12c6bf}
        @media(max-width:800px){.urgency{padding:58px 20px 65px}.urgency-inner{grid-template-columns:1fr;gap:28px}.urgency-copy{max-width:none}.urgency h2{font-size:clamp(29px,7vw,39px)}.urgency p{font-size:14px}.urgency-visual{min-height:260px;max-height:390px}}
        .founder{padding:82px 24px 88px;background:#f4f8fa;color:#071b2c}
        .founder-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);align-items:center;gap:70px}
        .founder-kicker{font-size:11px;letter-spacing:1.7px;font-weight:750;color:#008e8a;border-bottom:1px solid #12c6bf;padding-bottom:9px}
        .founder h2{font-size:clamp(30px,3.2vw,43px);line-height:1.16;font-weight:400;letter-spacing:-.8px;margin:23px 0 25px}
        .founder h2 strong{font-weight:750;color:#08243b}
        .founder-copy p{font-size:14px;line-height:1.75;color:#3c5060;margin:0 0 15px}
        .founder-copy p strong{color:#071b2c}
        .founder-copy .founder-signature{color:#008e8a;font-weight:750;margin-top:22px}
        .founder-visual{min-height:440px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;padding:35px;border-radius:35px 5px 35px 5px;background:radial-gradient(circle at 80% 25%,#136078 0%,transparent 40%),linear-gradient(140deg,#071a2c,#092c42 70%,#041524);border:1px solid #12c6bf55;box-shadow:0 20px 50px #071b2c2c;color:#fff}
        .founder-visual:after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.23;background-image:linear-gradient(#12c6bf24 1px,transparent 1px),linear-gradient(90deg,#12c6bf24 1px,transparent 1px);background-size:48px 48px}
        .founder-brand,.founder-apex,.founder-name{position:relative;z-index:1}
        .founder-brand img{object-fit:contain;max-width:100%;height:auto}
        .founder-apex{font-size:clamp(74px,9vw,125px);line-height:1;font-weight:800;letter-spacing:-7px;color:#12c6bf}
        .founder-apex span{display:block;font-size:10px;letter-spacing:1.2px;font-weight:650;color:#c4dbe2;margin-top:12px;line-height:1.5}
        .founder-name{border-top:1px solid #ffffff33;padding-top:18px;display:grid;gap:6px}
        .founder-name strong{font-size:19px}.founder-name span{font-size:12px;color:#c0d3de}
        @media(max-width:800px){.founder{padding:65px 20px}.founder-inner{grid-template-columns:1fr;gap:27px}.founder-visual{min-height:330px}.founder h2{font-size:clamp(29px,7vw,38px)}}
        .faq{background:#061526;color:#f6fafc;padding:84px 24px 92px;border-top:1px solid rgba(18,198,191,.12)}
        .faq-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:minmax(0,.75fr) minmax(0,1.25fr);gap:75px;align-items:start}
        .faq-kicker{display:inline-block;color:#12c6bf;font-size:11px;letter-spacing:1.6px;font-weight:750;padding-bottom:8px;border-bottom:1px solid #12c6bf}
        .faq-intro h2{font-size:clamp(32px,3.5vw,45px);font-weight:400;line-height:1.1;margin:22px 0 30px;max-width:320px}
        .faq-intro h2 strong{display:block;font-weight:750;color:#12c6bf}
        .faq-cta{display:inline-flex;align-items:center;justify-content:space-between;gap:24px;background:#12c6bf;color:#052233;text-decoration:none;padding:18px 20px;border-radius:16px 3px 16px 3px;font-size:12px;font-weight:800;transition:transform .2s,background .2s}
        .faq-cta:hover{background:#2eddd4;transform:translateY(-2px)}
        .faq-cta span{font-size:19px}
        .faq-intro>p{max-width:290px;font-size:12px;line-height:1.6;color:#a9c2ce;margin:15px 0 0}
        .faq-items{display:grid;gap:10px}
        .faq-item{border:1px solid #214259;background:#0a2034;border-radius:17px 4px 17px 4px;overflow:hidden}
        .faq-item summary{list-style:none;cursor:pointer;padding:21px 22px;display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:14px;font-weight:700;line-height:1.5;color:#f6fafc}
        .faq-item summary::-webkit-details-marker{display:none}
        .faq-item summary span{flex:none;color:#12c6bf;font-size:24px;font-weight:400;line-height:1;transition:transform .2s}
        .faq-item[open] summary span{transform:rotate(45deg)}
        .faq-item[open]{border-color:#12c6bf77}
        .faq-item p{font-size:13px;line-height:1.75;color:#b8cbd6;margin:0;padding:0 22px 22px}
        @media(max-width:800px){.faq{padding:65px 20px 72px}.faq-inner{grid-template-columns:1fr;gap:35px}.faq-intro h2{margin-bottom:22px}.faq-item summary{padding:18px;font-size:13px}.faq-item p{padding:0 18px 19px}}
        .details{background:#f5f8f8;color:#1c333b;padding:80px 6%}.details-inner{max-width:760px;margin:auto;text-align:center}
        .eyebrow{color:#008e8a;letter-spacing:3px;font-size:12px;font-weight:bold}
        h2{font-size:clamp(30px,4vw,48px);line-height:1.15;margin:16px 0}.details p:not(.eyebrow){font-size:18px;line-height:1.6;margin-bottom:30px}
        .hero-meta{display:flex;align-items:center;flex-wrap:wrap;gap:9px;margin-top:16px;font-size:12px;color:#d0e0e6;line-height:1.5}
        .hero-limited{display:inline-flex;align-items:center;gap:6px;font-weight:750;color:#12c6bf}.hero-location{display:inline-flex;align-items:center;gap:6px}.hero-location svg{flex:none;color:#12c6bf}
        .hero-meta-divider{color:#7f9da8}
        .limited-spots{display:flex;align-items:center;gap:7px;font-size:12px;font-weight:600;letter-spacing:.25px;color:#c6d8df}
        .limited-spots span{color:#12c6bf;font-size:11px}
        .limited-spots-hero{margin-top:13px}
        .limited-spots-faq{margin-top:13px}
        .site-footer{background:#061526;color:#adc1c4;padding:43px 24px 25px;border-top:1px solid rgba(18,198,191,.19)}
        .footer-inner{max-width:1120px;margin:0 auto}
        .footer-top{display:flex;justify-content:space-between;align-items:center;gap:30px;padding-bottom:31px}
        .footer-brand img{display:block;object-fit:contain;object-position:left center;width:180px;height:auto}
        .footer-brand p{font-size:12px;line-height:1.6;color:#a9c1ca;margin:8px 0 0}
        .footer-back{display:inline-flex;align-items:center;gap:11px;color:#e6f5f7;text-decoration:none;font-size:13px;font-weight:600;white-space:nowrap;transition:color .2s}
        .footer-back:hover{color:#12c6bf}
        .footer-back span{color:#12c6bf;font-size:23px;line-height:1}
        .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;border-top:1px solid rgba(180,214,222,.18);padding-top:19px;font-size:11px;line-height:1.6;color:#8faab6}
        @media(max-width:600px){.site-footer{padding:35px 20px 25px}.footer-top{align-items:flex-start}.footer-brand img{width:145px}.footer-brand p{max-width:210px}.footer-back{font-size:11px;gap:6px}.footer-bottom{flex-direction:column;align-items:flex-start;gap:7px}}
        @media(max-width:750px){.top{height:82px;padding:5px 18px}.logo{width:120px;height:70px}.reading{font-size:10px}.hero{min-height:600px;background:linear-gradient(90deg,rgba(5,19,32,.96),rgba(5,19,32,.72)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat}.copy{padding:45px 22px}.copy>*{max-width:460px}h1{font-size:clamp(34px,8vw,44px)}.copy p{font-size:14px}.cta{min-width:0;width:100%;max-width:340px}.details{padding:65px 6%}}
      `}</style>
    </main>
  );
}
