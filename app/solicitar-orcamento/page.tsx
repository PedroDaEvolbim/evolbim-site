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
        .details{background:#f5f8f8;color:#1c333b;padding:80px 6%}.details-inner{max-width:760px;margin:auto;text-align:center}
        .eyebrow{color:#008e8a;letter-spacing:3px;font-size:12px;font-weight:bold}
        h2{font-size:clamp(30px,4vw,48px);line-height:1.15;margin:16px 0}.details p:not(.eyebrow){font-size:18px;line-height:1.6;margin-bottom:30px}
        footer{text-align:center;padding:30px;font-size:13px;color:#adc1c4}
        @media(max-width:750px){.top{height:82px;padding:5px 18px}.logo{width:120px;height:70px}.reading{font-size:10px}.hero{min-height:600px;background:linear-gradient(90deg,rgba(5,19,32,.96),rgba(5,19,32,.72)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat}.copy{padding:45px 22px}.copy>*{max-width:460px}h1{font-size:clamp(34px,8vw,44px)}.copy p{font-size:14px}.cta{min-width:0;width:100%;max-width:340px}.details{padding:65px 6%}}
      `}</style>
    </main>
  );
}
