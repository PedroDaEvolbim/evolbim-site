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
      <header className="top">
        <Image src="/images/brand/logo-light.png" alt="Evolbim Engenharia" width={240} height={85} className="logo" priority />
        <span className="reading">LEITURA DE 2 MINUTOS</span>
      </header>
      <section className="hero">
        <div className="copy">
          
          <h1>Desenvolva e execute seu projeto com segurança, eficiência e <em>alto padrão.</em></h1>
          <p>Projetos de engenharia, planejamento, orçamento e acompanhamento técnico em um processo completo, do estudo à execução.</p>
          <a className="cta" href="#orcamento">AGENDE SUA REUNIÃO GRATUITA</a>
          <div className="region"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg> Atendimento em Jataí-GO e Região</div>
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
            <a className="challenge-cta" href="#orcamento">AGENDE SUA REUNIÃO GRATUITA <span aria-hidden="true">↗</span></a>
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
            <span className="urgency-kicker">Mas você precisa agir agora.</span>
            <h2 id="urgency-title">O tempo não espera. <strong>Sua obra também não deveria.</strong></h2>
            <p>Adiar o planejamento ou continuar executando sem uma gestão adequada pode aumentar custos, gerar retrabalhos e comprometer prazos.</p>
          </div>
          <div className="urgency-visual" role="img" aria-label="Relógio sobre projetos arquitetônicos, representando a importância do tempo no planejamento da obra">
            <div className="urgency-visual-label"><span /> TEMPO • PLANEJAMENTO • CONTROLE</div>
          </div>
        </div>
      </section>
      <section className="details" id="orcamento">
        <div className="details-inner">
          <p className="eyebrow">EVOLBIM ENGENHARIA</p>
          <h2>Seu projeto merece planejamento desde o início.</h2>
          <p>Conte para nossa equipe o que você pretende desenvolver. Vamos entender sua necessidade e orientar os próximos passos.</p>
          <a className="cta" href="mailto:contato@evolbimengenharia.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento%20-%20Site%20Evolbim">Agende sua reunião gratuita <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <footer>© {new Date().getFullYear()} Evolbim Engenharia</footer>
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
        .details{background:#f5f8f8;color:#1c333b;padding:80px 6%}.details-inner{max-width:760px;margin:auto;text-align:center}
        .eyebrow{color:#008e8a;letter-spacing:3px;font-size:12px;font-weight:bold}
        h2{font-size:clamp(30px,4vw,48px);line-height:1.15;margin:16px 0}.details p:not(.eyebrow){font-size:18px;line-height:1.6;margin-bottom:30px}
        footer{text-align:center;padding:30px;font-size:13px;color:#adc1c4}
        @media(max-width:750px){.top{height:82px;padding:5px 18px}.logo{width:120px;height:70px}.reading{font-size:10px}.hero{min-height:600px;background:linear-gradient(90deg,rgba(5,19,32,.96),rgba(5,19,32,.72)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat}.copy{padding:45px 22px}.copy>*{max-width:460px}h1{font-size:clamp(34px,8vw,44px)}.copy p{font-size:14px}.cta{min-width:0;width:100%;max-width:340px}.details{padding:65px 6%}}
      `}</style>
    </main>
  );
}
