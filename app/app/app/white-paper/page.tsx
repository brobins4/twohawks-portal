export default function WhitePaperPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 44, fontWeight: 900, marginBottom: 12 }}>White Paper</h1>
      <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 24 }}>
        The Two Hawks Collective white paper will live here as a downloadable PDF.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <a href="/" style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(0,0,0,0.15)" }}>
          ← Back to Portal
        </a>
        <a href="/request-access" style={{ padding: "12px 16px", borderRadius: 12, background: "#0F172A", color: "white" }}>
          Request Access →
        </a>
      </div>
    </main>
  );
}
