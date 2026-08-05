import { jsPDF } from "jspdf";

export function Hero() {

  function downloadResumePDF() {
    const doc = new jsPDF({
      unit: "pt",
      format: "letter",
    });

    let y = 40;

    const addLine = (text, spacing = 20) => {
      doc.text(text, 60, y);
      y += spacing;
    };
    function addWrapped(text, width = 500, spacing = 16) {
      const lines = doc.splitTextToSize(text, width);
      lines.forEach(line => {
        doc.text(line, 40, y);
        y += spacing;
      });
    }
    // Header
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    addLine("Victor Ameh");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    addLine("Senior Business Systems Analyst");
    addLine("");

    // Education
    doc.setFont("Helvetica", "bold");
    addLine("Education");
    doc.setFont("Helvetica", "normal");
    addLine("M.Sc. Economics, University of Lagos — 2016");
    addLine("");

    // Certifications
    doc.setFont("Helvetica", "bold");
    addLine("Certifications");
    doc.setFont("Helvetica", "normal");
    addLine("Microsoft Azure Administrator — Aug 2022");
    addLine("Microsoft Security, Compliance & Identity Fundamentals — Jul 2022");
    addLine("AWS Cloud Practitioner — Jul 2022");
    addLine("Certificate in Cloud Security Knowledge (CCSK) — Mar 2022");
    addLine("Microsoft Certified: AZ‑900 Azure Fundamentals — May 2021");
    addLine("Certified Business Analysis Professional (CBAP) — Dec 2020");
    addLine("");

    // Projects Header
    doc.setFont("Helvetica", "bold");
    addLine("Project Experience");
    doc.setFont("Helvetica", "normal");
    addLine("----------------------------------------------");

    const projects = [
      {
        title: "Enterprise Data Warehouse — Eglinton Crosstown LRT",
        role: "Lead Business Analyst & Systems Integration Consultant",
        description:
          "Led requirements engineering and interface governance for a hybrid EDW utilizing Qumulo NAS storage to ingest data across 13 core transit subsystems. Authored ICDs, RTM, V&V Matrix, FAT/SAT, PICO.",
      },
      {
        title: "Digital Multimedia Recording & Retrieval System (DMMRRS) — Eglinton Crosstown LRT",
        role: "Senior Business Analyst",
        description:
          "Deconstructed RFP requirements into functional, technical, and interface specifications. Architected secure ingestion of CCTV, PA, Telephony, and PIS feeds.",
      },
      {
        title: "Application Rationalization & Azure Migration — TransCanada Energy",
        role: "Senior Business Analyst & Cloud Migration Lead",
        description:
          "Led application portfolio rationalization and Azure migration strategy. Applied Gartner TIME model and documented migration sequencing for ARB governance.",
      },
      {
        title: "Microsoft 365 Tenant‑to‑Tenant Migration — OpenText",
        role: "Senior Business Analyst",
        description:
          "Defined migration waves, mapping rules, and cutover validation for 13,000 users.",
      },
      {
        title: "Global ISA DevOps & Flexera Enterprise Asset Governance Program — CGI",
        role: "Senior Business Analyst",
        description:
          "Co‑led global DevOps initiative deploying Flexera across 174 countries.",
      },
      {
        title: "Enterprise Cloud GRC — Tier‑1 Bank",
        role: "Senior Business Analyst & Cloud GRC Specialist",
        description:
          "Mapped enterprise IT standards to OSFI, NIST, CIS, MITRE ATT&CK, SOC 1/SOX.",
      },
      {
        title: "Enterprise SIEM Modernization — Tier‑1 Bank",
        role: "Senior Business Analyst",
        description:
          "Captured requirements for SIEM migration from ArcSight to Microsoft Sentinel.",
      },
      {
        title: "Azure Innovation Sandbox — Tier‑1 Bank",
        role: "Senior Business Analyst & Cloud Governance Lead",
        description:
          "Delivered secure Azure sandbox environment for MVP experimentation.",
      },
      {
        title: "Modern Endpoint Management — TransLink",
        role: "Senior Business Analyst",
        description:
          "Led migration from SCCM/AD/GPO to Intune and Autopilot.",
      },
    ];

    projects.forEach((p) => {
      addLine("", 25);   // spacing before each project
      doc.setFont("Helvetica", "bold");
      addLine(p.title, 22);
      doc.setFont("Helvetica", "normal");
      addLine(p.role, 20);
      const wrapped = doc.splitTextToSize(p.description, 500); // 500px width
      wrapped.forEach(line => addLine(line, 20));

      if (y > 780) {
        doc.addPage();
        y = 60;
      }
    });

    doc.save("Victor_Ameh_Resume.pdf");
  }

  return (
    <section
      style={{
        background: "#1E2248",
        color: "white",
        padding: "4rem 2rem",
        textAlign: "center",
        borderRadius: "0 0 24px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "800",
          marginBottom: "2rem",
          color: "white",
        }}
      >
        Victor Ameh
      </h1>

      <h2
        style={{
          fontSize: "1.35rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
          opacity: 0.95,
          color: "white"
        }}
      >
        Senior Business Systems Analyst & Digital Transformation Specialist
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 2.5rem auto",
          fontSize: "1.15rem",
          lineHeight: "1.75",
          opacity: 0.95,
        }}
      >
        I translate strategic vision into measurable business outcomes through the alignment of strategy, technology, governance, and execution.
        I possess Government of Canada Reliability Clearance
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1100px",
          margin: "0 auto 3rem auto",
          textAlign: "left",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "1.5rem",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ marginBottom: "0.75rem", fontWeight: "700" }}>
            Cybersecurity, Data & Enterprise Platforms
          </h3>
          <p style={{ lineHeight: "1.6", opacity: 0.9 }}>
            Leading cybersecurity and cloud governance initiatives, enterprise data and systems integration, 
            SIEM modernization, compliance programs, and custom platform development.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "1.5rem",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ marginBottom: "0.75rem", fontWeight: "700" }}>
            Cloud Transformation & Enterprise Modernization
          </h3>
          <p style={{ lineHeight: "1.6", opacity: 0.9 }}>
            Leading cloud migrations, application rationalization, Microsoft 365 tenant migrations, 
            enterprise architecture modernization, and digital transformation initiatives.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "1.5rem",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ marginBottom: "0.75rem", fontWeight: "700" }}>
            Digital Transformation & Empowering Modern Workplaces
          </h3>
          <p style={{ lineHeight: "1.6", opacity: 0.9 }}>
            Leading endpoint modernization, zero-touch device provisioning, Microsoft Intune transformation, 
            identity and privileged access modernization (PAM/PIM), and IT process optimization
          </p>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <a
          href="#projects"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.6rem",
            background: "white",
            color: "#1E2248",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "700",
            marginRight: "1rem",
          }}
        >
          View Projects
        </a>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.6rem",
            background: "transparent",
            border: "2px solid white",
            color: "white",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "700",
            marginRight: "1rem",
          }}
        >
          Contact Me
        </a>

        <button
          onClick={downloadResumePDF}
          style={{
            display: "inline-block",
            padding: "0.8rem 1.6rem",
            background: "white",
            color: "#1E2248",
            borderRadius: "999px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Download Resume (PDF)
        </button>
      </div>
    </section>
  );
}
