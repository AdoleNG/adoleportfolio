export function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <article
        style={{
          background: "#1E2248",
          color: "white",
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ marginBottom: "1rem", fontSize: "1.8rem", color: "white", }}>
          🎓 Education & Certifications
        </h2>

        {/* Education */}
        <h3 style={{ marginBottom: "0.5rem", fontWeight: "700" }}>
          📘 Education
        </h3>
        <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          M.Sc. Economics, University of Lagos — 2016
        </p>

        {/* Certifications */}
        <h3 style={{ marginBottom: "0.5rem", fontWeight: "700" }}>
          🏅 Certifications
        </h3>

        <ul
  style={{
    lineHeight: "1.8",
    paddingLeft: "0",
    listStyleType: "none",
  }}
>
  <li>☁️ Microsoft Azure Administrator — Aug 2022</li>
  <li>🔐 Microsoft Security, Compliance & Identity Fundamentals — Jul 2022</li>
  <li>⚡ AWS Cloud Practitioner — Jul 2022</li>
  <li>🛡️ Certificate in Cloud Security Knowledge (CCSK) — Mar 2022</li>
  <li>☁️ Microsoft Certified: AZ‑900 Azure Fundamentals — May 2021</li>
  <li>📊 Certified Business Analysis Professional (CBAP) — Dec 2020</li>
</ul>

      </article>
    </section>
  );
}
