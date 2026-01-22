"use client";
export const metadata = {
  title: "Request Access | Two Hawks Collective",
};

export default function RequestAccessPage() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <a href="/" style={styles.backLink}>← Back to Portal</a>
        <div style={styles.brand}>
          <div style={styles.logo}>TH</div>
          <div>
            <div style={styles.brandName}>Two Hawks Collective</div>
            <div style={styles.brandSub}>Request Access</div>
          </div>
        </div>
      </header>

      <section style={styles.card}>
        <h1 style={styles.h1}>Request Portal Access</h1>
        <p style={styles.p}>
          Minimal intake. After review, we’ll send an access key / invitation and assign the correct role
          (Broker, Capital Partner, or Philanthropy).
        </p>

        {/* MVP NOTE:
           This form uses "mailto:" to send the submission to your email without any setup.
           Later we can swap to a real database + auth + approvals.
        */}
        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const data = new FormData(form);

            const fullName = String(data.get("fullName") || "");
            const org = String(data.get("org") || "");
            const email = String(data.get("email") || "");
            const role = String(data.get("role") || "");
            const interest = String(data.get("interest") || "");
            const message = String(data.get("message") || "");

            const subject = encodeURIComponent(`Portal Access Request — ${fullName || "New Request"}`);
            const body = encodeURIComponent(
              [
                "Portal Access Request",
                "--------------------",
                `Name: ${fullName}`,
                `Organization: ${org}`,
                `Email: ${email}`,
                `Requested Role: ${role}`,
                `Interest: ${interest}`,
                "",
                "Message:",
                message,
                "",
                "— Sent from portal.twohawkscollective.com",
              ].join("\n")
            );

            // ✅ Change this to YOUR preferred inbox:
            const to = "info@twohawkscollective.com";

            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
          }}
        >
          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>Full Name*</label>
              <input name="fullName" required style={styles.input} placeholder="Jane Doe" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Organization*</label>
              <input name="org" required style={styles.input} placeholder="Family Office / Firm / Brokerage" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Email*</label>
              <input name="email" type="email" required style={styles.input} placeholder="name@company.com" />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Access Type*</label>
              <select name="role" required style={styles.input}>
                <option value="">Select…</option>
                <option>Broker</option>
                <option>Investor</option>
                <option>Family Office</option>
                <option>Financial Institution</option>
                <option>Philanthropy / Impact Partner</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ ...styles.field, gridColumn: "1 / -1" }}>
              <label style={styles.label}>What are you looking for?*</label>
              <select name="interest" required style={styles.input}>
                <option value="">Select…</option>
                <option>Review active opportunities</option>
                <option>Submit / present a project</option>
                <option>Receive pipeline updates</option>
                <option>Partner on philanthropy / impact</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ ...styles.field, gridColumn: "1 / -1" }}>
              <label style={styles.label}>Message (optional)</label>
              <textarea
                name="message"
                style={styles.textarea}
                placeholder="Share what you’re focused on, geography, ticket size, timeline, or any details we should know."
              />
            </div>
          </div>

          <div style={styles.actions}>
            <button type="submit" style={styles.primaryBtn}>
              Submit Request
            </button>
            <a href="/white-paper" style={styles.secondaryBtn}>
              View White Paper
            </a>
          </div>

          <div style={styles.note}>
            <span style={styles.dot} />
            Submissions open your email client to send the request. (We can upgrade this to a fully automated workflow next.)
          </div>
        </form>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "28px 18px 48px",
    background: "linear-gradient(180deg, #FFFFFF 0%, #F6F7FB 100%)",
    color: "#0F172A",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
  },
  header: { maxWidth: 980, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" },
  backLink: { textDecoration: "none", fontWeight: 800, color: "#0F172A", opacity: 0.8 },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "#0F172A",
    color: "#fff",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
  },
  brandName: { fontWeight: 900 },
  brandSub: { fontSize: 12, opacity: 0.7, marginTop: 2 },

  card: {
    maxWidth: 980,
    margin: "18px auto 0",
    borderRadius: 18,
    border: "1px solid rgba(15,23,42,0.10)",
    background: "rgba(255,255,255,0.92)",
    padding: 20,
    boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
  },
  h1: { fontSize: 34, lineHeight: "38px", fontWeight: 900, margin: "6px 0 10px" },
  p: { margin: 0, opacity: 0.85, lineHeight: "26px" },

  form: { marginTop: 16 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 12.5, fontWeight: 800, opacity: 0.85 },
  input: {
    height: 42,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(15,23,42,0.14)",
    background: "#fff",
    outline: "none",
    fontSize: 14,
  },
  textarea: {
    minHeight: 110,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(15,23,42,0.14)",
    background: "#fff",
    outline: "none",
    fontSize: 14,
    resize: "vertical",
  },
  actions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 },
  primaryBtn: {
    borderRadius: 12,
    border: "1px solid transparent",
    background: "#0F172A",
    color: "#fff",
    padding: "10px 14px",
    fontWeight: 900,
    cursor: "pointer",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    borderRadius: 12,
    border: "1px solid rgba(15,23,42,0.14)",
    background: "#fff",
    color: "#0F172A",
    padding: "10px 14px",
    fontWeight: 900,
  },
  note: {
    marginTop: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: 12.5,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(15,23,42,0.10)",
    background: "rgba(255,255,255,0.7)",
    opacity: 0.9,
  },
  dot: { width: 10, height: 10, borderRadius: 99, background: "#16A34A", boxShadow: "0 0 0 4px rgba(22,163,74,0.15)" },
};
