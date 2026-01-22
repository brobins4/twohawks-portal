export default function ProjectsPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 44, fontWeight: 900, marginBottom: 12 }}>Projects</h1>
      <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 24 }}>
        This section will list active opportunities and downloadable project materials.
      </p>

      <div style={{ padding: 18, borderRadius: 16, border: "1px solid rgba(0,0,0,0.12)", background: "rgba(255,255,255,0.7)" }}>
        <strong>Coming next:</strong>
        <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Project cards + status tags</li>
          <li>Project overview pages</li>
          <li>Document vault (Pitch deck, underwriting, timelines)</li>
          <li>Role-based access control</li>
        </ul>
      </div>

      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(0,0,0,0.15)" }}>
          ← Back to Portal
        </a>
      </div>
    </main>
  );
}
