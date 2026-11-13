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
        .details{background:#f5f8f8;color:#1c333b;padding:80px 6%}.details-inner{max-width:760px;margin:auto;text-align:center}
        .eyebrow{color:#008e8a;letter-spacing:3px;font-size:12px;font-weight:bold}
        h2{font-size:clamp(30px,4vw,48px);line-height:1.15;margin:16px 0}.details p:not(.eyebrow){font-size:18px;line-height:1.6;margin-bottom:30px}
        footer{text-align:center;padding:30px;font-size:13px;color:#adc1c4}
        @media(max-width:750px){.top{height:82px;padding:5px 18px}.logo{width:120px;height:70px}.reading{font-size:10px}.hero{min-height:600px;background:linear-gradient(90deg,rgba(5,19,32,.96),rgba(5,19,32,.72)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat}.copy{padding:45px 22px}.copy>*{max-width:460px}h1{font-size:clamp(34px,8vw,44px)}.copy p{font-size:14px}.cta{min-width:0;width:100%;max-width:340px}.details{padding:65px 6%}}
      `}</style>
    </main>
  );
}
