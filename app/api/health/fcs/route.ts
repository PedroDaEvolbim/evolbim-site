import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const destination = process.env.FCS_INGEST_URL?.trim() || "";
  const token = process.env.FCS_INGEST_TOKEN?.trim() || "";
  let destinationMatchesObryq = false;
  try {
    const parsed = new URL(destination);
    destinationMatchesObryq = parsed.protocol === "https:" &&
      parsed.hostname === "app.obryq.com.br" &&
      parsed.pathname === "/api/integrations/evolbim-lead";
  } catch { /* missing or invalid destination */ }

  return NextResponse.json({
    ingestUrlConfigured: Boolean(destination),
    ingestUrlMatchesObryq: destinationMatchesObryq,
    ingestTokenConfigured: Boolean(token),
    readyToForward: destinationMatchesObryq && Boolean(token),
  }, { headers: { "Cache-Control": "no-store" } });
}
