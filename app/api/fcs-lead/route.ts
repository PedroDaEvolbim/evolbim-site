import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Server-side forwarding uses FCS_INGEST_URL from the current deployment environment.

export async function POST(request: NextRequest) {
  const destination = process.env.FCS_INGEST_URL;
  const token = process.env.FCS_INGEST_TOKEN;
  if (!destination || !token) {
    return NextResponse.json({ error: "Agendamento temporariamente indisponível" }, { status: 503 });
  }
  let data: { nome?: unknown; whatsapp?: unknown; website?: unknown };
  try { data = await request.json(); }
  catch { return NextResponse.json({ error: "Dados inválidos" }, { status: 400 }); }
  if (data.website) return NextResponse.json({ ok: true });
  const nome = typeof data.nome === "string" ? data.nome.trim() : "";
  const whatsapp = typeof data.whatsapp === "string" ? data.whatsapp.replace(/\D/g, "") : "";
  if (nome.length < 2 || nome.length > 100 || whatsapp.length < 10 || whatsapp.length > 13) {
    return NextResponse.json({ error: "Informe nome e WhatsApp com DDD" }, { status: 400 });
  }
  try {
    const response = await fetch(destination, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ nome, whatsapp, origem: "Site Evolbim — Reunião Gratuita" }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("FCS upstream rejected submission", { status: response.status });
      return NextResponse.json({ error: "Falha na integração com o OBRYQ", etapa: "obryq", codigo: response.status }, { status: 502 });\n    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Não foi possível conectar ao FCS. Tente novamente." }, { status: 503 });
  }
}
