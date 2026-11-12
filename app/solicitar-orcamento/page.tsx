import Image from "next/image";

export const metadata = {
  title: "Solicite seu orçamento | Evolbim Engenharia",
  description: "Projetos de engenharia, planejamento, orçamento e acompanhamento técnico em Jataí-GO e região.",
};

export default function SolicitarOrcamento() {
  return (
    <main className="landing">
      <header className="top">
        <Image src="/images/brand/logo-light.png" alt="Evolbim Engenharia" width={240} height={85} className="logo" priority />
        <span className="descriptor">ENGENHARIA EM<br />PROJETOS E OBRAS</span>
        <span className="reading">◷ &nbsp; LEITURA DE 2 MINUTOS</span>
      </header>
      <section className="hero">
        <div className="copy">
          <span className="accent" />
          <h1>Desenvolva e execute seu projeto com segurança, eficiência e <em>alto padrão.</em></h1>
          <p>Projetos de engenharia, planejamento, orçamento e acompanhamento técnico em um processo completo, do estudo à execução.</p>
          <a className="cta" href="#orcamento">Solicite seu orçamento <span aria-hidden="true">→</span></a>
          <div className="availability">5 vagas disponíveis</div>
          <div className="region">⌖ &nbsp; Atendimento em Jataí-GO e Região</div>
        </div>
      </section>
      <section className="details" id="orcamento">
        <div className="details-inner">
          <p className="eyebrow">EVOLBIM ENGENHARIA</p>
          <h2>Seu projeto merece planejamento desde o início.</h2>
          <p>Conte para nossa equipe o que você pretende desenvolver. Vamos entender sua necessidade e orientar os próximos passos.</p>
          <a className="cta" href="mailto:contato@evolbimengenharia.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento%20-%20Site%20Evolbim">Solicite seu orçamento <span aria-hidden="true">→</span></a>
        </div>
      </section>
      <footer>© {new Date().getFullYear()} Evolbim Engenharia</footer>
      <style>{`
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}
        .landing{font-family:Arial,Helvetica,sans-serif;background:#061923;color:#fff}
        .top{height:116px;max-width:1450px;margin:auto;padding:20px 6%;display:flex;align-items:center;gap:34px;position:relative;z-index:2}
        .logo{width:210px;height:auto;object-fit:contain}.descriptor{border-left:1px solid #8da1a7;padding-left:32px;letter-spacing:4px;font-size:13px;line-height:1.7;font-weight:700}
        .reading{margin-left:auto;font-size:13px;letter-spacing:1.5px;white-space:nowrap}
        .hero{min-height:680px;display:flex;align-items:center;background:linear-gradient(90deg,#061923 0%,rgba(6,25,35,.98) 28%,rgba(6,25,35,.78) 52%,rgba(6,25,35,.15) 100%),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85') center/cover no-repeat}
        .copy{max-width:1450px;width:100%;margin:auto;padding:35px 6% 65px}.copy>*{max-width:650px}
        .accent{display:block;width:68px;height:7px;border-radius:9px;background:#10b5b0;margin-bottom:26px}
        h1{font-size:clamp(37px,4.1vw,64px);line-height:1.07;letter-spacing:-1.8px;margin:0 0 26px;font-weight:800}
        h1 em{font-style:normal;color:#10d8d0}.copy p{font-size:19px;line-height:1.5;margin:0 0 31px}
        .cta{display:inline-flex;align-items:center;justify-content:space-between;gap:35px;padding:20px 26px;background:#11c9c2;border-radius:14px;color:#041d24;text-decoration:none;font-weight:800;font-size:20px;transition:background .2s,transform .2s}
        .cta:hover{background:#44e6df;transform:translateY(-2px)}.cta span{font-size:26px}
        .availability{font-size:16px;margin-top:22px;margin-bottom:22px}.region{padding-top:19px;border-top:1px solid #51636a;font-size:15px}
        .details{background:#f5f8f8;color:#1c333b;padding:90px 6%}.details-inner{max-width:760px;margin:auto;text-align:center}.eyebrow{color:#008e8a;letter-spacing:3px;font-size:12px;font-weight:bold}
        h2{font-size:clamp(30px,4vw,48px);line-height:1.15;margin:16px 0}.details p:not(.eyebrow){font-size:18px;line-height:1.6;margin-bottom:30px}
        footer{text-align:center;padding:30px;font-size:13px;color:#adc1c4}
        @media(max-width:750px){.top{height:88px;padding:15px 6%;gap:12px}.logo{width:145px}.descriptor{display:none}.reading{font-size:10px;letter-spacing:0}.hero{min-height:690px;background:linear-gradient(90deg,rgba(6,25,35,.97),rgba(6,25,35,.76)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat}.copy{padding:45px 6% 60px}h1{letter-spacing:-1px}.copy p{font-size:16px}.cta{font-size:17px;gap:20px;padding:18px 20px}.details{padding:65px 6%}}
      `}</style>
    </main>
  );
}
