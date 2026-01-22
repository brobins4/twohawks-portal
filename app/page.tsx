// app/page.tsx

export default function Home() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brandRow}>
          <div style={styles.logoMark}>TH</div>
          <div>
            <div style={styles.brandName}>Two Hawks Collective</div>
            <div style={styles.brandTagline}>Portal Access • Projects • Capital • Impact</div>
          </div>
        </div>

        <div style={styles.headerActions}>
          <a href="/login" style={{ ...styles.button, ...styles.buttonPrimary }}>
            Login
          </a>
          <a href="/request-access" style={{ ...styles.button, ...styles.buttonGhost }}>
            Request Access
          </a>
        </div>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.h1}>Welcome to the Two Hawks Portal</h1>
        <p style={styles.p}>
          A centralized access point for brokers, investors, family offices, financial institutions, and philanthropic
          partners to review projects, track opportunities, and access documentation securely.
        </p>

        <div style={styles.heroCtas}>
          <a href="/projects" style={{ ...styles.button, ...styles.buttonPrimary }}>
            View Projects
          </a>
          <a href="/white-paper" style={{ ...styles.button, ...styles.buttonSecondary }}>
            View White Paper
          </a>
        </div>

        <div style={styles.notice}>
          <span style={styles.noticeDot} />
          Access is permission-based. Request access to receive an invitation and role assignment.
        </div>
      </section>

      <section style={styles.grid}>
        <a href="/broker" style={styles.card}>
          <div style={styles.cardTop}>
            <span style={styles.badge}>Broker Portal</span>
          </div>
          <h3 style={styles.cardTitle}>Present Projects</h3>
          <p style={styles.cardText}>
            Submit and present projects with basic details, documentation, and positioning for qualified capital.
          </p>
          <div style={styles.cardLink}>Enter →</div>
        </a>

        <a href="/capital" style={styles.card}>
          <div style={styles.cardTop}>
            <span style={styles.badge}>Capital Portal</span>
          </div>
          <h3 style={styles.cardTitle}>Investors & Institutions</h3>
          <p style={styles.cardText}>
            Review opportunities, underwriting materials, deal summaries, and project updates across the pipeline.
          </p>
          <div style={styles.cardLink}>Enter →</div>
        </a>

        <a href="/impact" style={styles.card}>
          <div style={styles.cardTop}>
            <span style={styles.badge}>Philanthropic Portal</span>
          </div>
          <h3 style={styles.cardTitle}>Impact & Philanthropy</h3>
          <p style={styles.cardText}>
            Access philanthropic initiatives, impact reporting, and partner opportunities aligned with mission outcomes.
          </p>
          <div style={styles.cardLink}>Enter →</div>
        </a>
      </section>

      <section style={styles.split}>
        <div style={styles.splitCard}>
          <h2 style={styles.h2}>Project Heat Map</h2>
          <p style={styles.pSmall}>
            Explore active projects by location, stage, sector, and capital need. Filter quickly and review
            documentation.
          </p>
          <a href="/map" style={{ ...styles.button, ...styles.buttonSecondary }}>
            Open Heat Map
          </a>
        </div>

        <div style={styles.splitCard}>
          <h2 style={styles.h2}>Request Access</h2>
          <p style={styles.pSmall}>
            Minimal intake. You’ll receive an access key / invitation after review, and be assigned the right role.
          </p>
          <a href="/request-access" style={{ ...styles.button, ...styles.buttonPrimary }}>
            Request Access
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerLeft}>
          <strong>Two Hawks Collective</strong> — Sponsor Representation • Development Advisory • Capital Strategy
        </div>
        <div style={styles.footerRight}>
          <a href="/white-paper" style={styles.footerLink}>
            White Paper
          </a>
          <a href="/request-access" style={styles.footerLink}>
            Request Access
          </a>
          <a href="/login" style={styles.footerLink}>
            Login
          </a>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #FFFFFF 0%, #F6F7FB 100%)",
    color: "#0F172A",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
    padding: "28px 18px 40px",
  },
  header: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "10px 6px 24px",
  },
  brandRow: { display: "flex", alignItems: "center", gap: 12 },
  logoMark: {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: "#0F172A",
    color: "white",
    display: "grid",
    placeItems: "center",
    fontWeight: 800,
    letterSpacing: 0.5,
  },
  brandName: { fontSize: 16, fontWeight: 800, lineHeight: "18px" },
  brandTagline: { fontSize: 12, opacity: 0.7, marginTop: 4 },
  headerActions: { display: "flex", gap: 10, alignItems: "center" },

  hero: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "26px 6px 14px",
  },
  h1: {
    fontSize: 44,
    lineHeight: "48px",
    fontWeight: 900,
    margin: "10px 0 12px",
    letterSpacing: -0.5,
  },
  p: {
    maxWidth: 820,
    fontSize: 16,
    lineHeight: "26px",
    opacity: 0.86,
    margin: 0,
  },
  heroCtas: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },
  notice: {
    marginTop: 18,
    display: "inline-flex",
    gap: 10,
    alignItems: "center",
    fontSize: 13,
    padding: "10px 12px",
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 12,
    background: "rgba(255,255,255,0.7)",
  },
  noticeDot: {
    width: 10,
    height: 10,
    borderRadius: 99,
    background: "#16A34A",
    boxShadow: "0 0 0 4px rgba(22,163,74,0.15)",
  },

  grid: {
    maxWidth: 1100,
    margin: "18px auto 0",
    padding: "0 6px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
  },
  card: {
    textDecoration: "none",
    color: "inherit",
    borderRadius: 18,
    border: "1px solid rgba(15,23,42,0.10)",
    background: "rgba(255,255,255,0.92)",
    padding: 18,
    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
    transition: "transform 120ms ease, box-shadow 120ms ease",
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  badge: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(15,23,42,0.10)",
    background: "rgba(15,23,42,0.04)",
    fontWeight: 700,
  },
  cardTitle: { fontSize: 18, fontWeight: 900, margin: "14px 0 6px" },
  cardText: { fontSize: 13.5, lineHeight: "22px", opacity: 0.82, margin: 0 },
  cardLink: { marginTop: 14, fontWeight: 900, fontSize: 13 },

  split: {
    maxWidth: 1100,
    margin: "14px auto 0",
    padding: "0 6px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 14,
  },
  splitCard: {
    borderRadius: 18,
    border: "1px solid rgba(15,23,42,0.10)",
    background: "rgba(255,255,255,0.92)",
    padding: 18,
    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  h2: { fontSize: 18, fontWeight: 900, margin: 0 },
  pSmall: { fontSize: 13.5, lineHeight: "22px", opacity: 0.82, margin: 0 },

  footer: {
    maxWidth: 1100,
    margin: "18px auto 0",
    padding: "14px 6px 0",
    borderTop: "1px solid rgba(15,23,42,0.10)",
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: 12.5,
    opacity: 0.85,
  },
  footerLeft: { maxWidth: 740 },
  footerRight: { display: "flex", gap: 12, flexWrap: "wrap" },
  footerLink: { color: "inherit", textDecoration: "none", fontWeight: 800 },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 13,
    border: "1px solid transparent",
  },
  buttonPrimary: { background: "#0F172A", color: "white" },
  buttonSecondary: {
    background: "white",
    border: "1px solid rgba(15,23,42,0.14)",
    color: "#0F172A",
  },
  buttonGhost: {
    background: "transparent",
    border: "1px solid rgba(15,23,42,0.14)",
    color: "#0F172A",
  },
};
