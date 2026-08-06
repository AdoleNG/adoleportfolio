import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const projects = [
    {
      id: "eclrt",
      title: "Enterprise Data Warehouse — Eglinton Crosstown LRT",
      role: "Lead Business Systems Analyst & Systems Integration Consultant",
      technologyStack:
        "Microsoft SQL Server • Qumulo • ETL • Atempo • BMC-Control • Spectra Logic • SCADA • GTFS / GTFS-Realtime • CaelumOne Integration Platform",
      image: "/images/eclrt.png",
    },

    {
      id: "openText",
      title: "Microsoft 365 Tenant-to-Tenant Migration (OpenText)",
      role: "Senior Business Analyst",
      technologyStack:
        "Microsoft 365 • Azure • SharePoint • Exchange Online • Entra ID • PowerShell • Quest ODM",
      image: "/images/opentext.png",
    },

    {
      id: "versecast",
      title: "VerseCast — Full-stack Bible Audio Platform",
      role: "Founder & Lead Engineer",
      technologyStack:
        "Python • FastAPI • React • Azure Foundry • Supabase • PostgreSQL • Cloudflare • Render",
      image: "/images/versecast.png",
    },

    {
      id: "cgi",
      title: "Global ISA DevOps & Flexera Enterprise Asset Governance Program",
      role: "Senior Business Analyst/Scrum Master",
      technologyStack:
        "Flexera • DevOps • IT Asset Management • Flexera Business Adapter Studio • Kanban • Kubernetes • Nutanix • VMware ESXi • Enterprise Reporting • Data Masking • Agile/Scrum",
      image: "/images/cgi.png",
    },

    {
      id: "cpkc",
      title:
        "CPKC / CP Rail — Enterprise Cybersecurity Compliance & TSA SD-2022-01 Alignment Program",
      role: "Senior Business Analyst",
      technologyStack:
        "Cybersecurity • GRC • SIEM • Microsoft Azure • Identity & Access Management • Compliance Frameworks",
      image: "/images/cpkc.png",
    },

    {
      id: "tier1bank",
      title:
        "Enterprise Cloud GRC & Key Cloud Controls Modernization Program (Canadian Tier-1 Bank)",
      role: "Senior Business Analyst & Cloud GRC Specialist",
      technologyStack:
        "Microsoft Azure • Cloud GRC • Azure Policy • Microsoft Defender for Cloud • Entra ID • Security Controls",
      image: "/images/tier1bank.png",
    },

    {
      id: "siem",
      title:
        "Enterprise SIEM Modernization & Threat Response Automation Program (Canadian Tier-1 Bank)",
      role: "Senior Business Analyst",
      technologyStack:
        "Microsoft Sentinel • SIEM • SOAR • Azure • KQL • Security Operations • Threat Intelligence",
      image: "/images/siem.png",
    },

    {
      id: "azureSandbox",
      title:
        "Azure Innovation Sandbox — Secure Cloud Experimentation & Governance Program (Canadian Tier-1 Bank)",
      role: "Senior Business Analyst & Cloud Governance Lead",
      technologyStack:
        "Microsoft Azure • Azure Policy • Entra ID • RBAC • Cloud Governance • Security Controls • DevOps",
      image: "/images/azureSandbox.png",
    },

    {
      id: "translink",
      title:
        "Modern Endpoint Management & Windows Autopilot Migration Program — South Coast Transportation Authority",
      role: "Senior Business Analyst",
      technologyStack:
        "Microsoft Intune • Windows Autopilot • Microsoft Entra ID • Microsoft 365 • Endpoint Management",
      image: "/images/translink.png",
    },

    {
      id: "dmmrrs",
      title:
        "Digital Multimedia Recording & Retrieval System (DMMRRS) — Transit Infrastructure Integration (Eglinton Crosstown LRT)",
      role: "Senior Business Analyst",
      technologyStack:
        "Digital Video • IP Networking • Enterprise Storage • Database Systems • Systems Integration • Transit Technology",
      image: "/images/dmmrrs.png",
    },

    {
      id: "transcanada",
      title:
        "Application Rationalization & Azure Migration — TransCanada Energy",
      role: "Senior Business Analyst & Cloud Migration Lead",
      technologyStack:
        "Microsoft Azure • Application Rationalization • Cloud Migration • Azure Migrate • SQL Server • Enterprise Architecture",
      image: "/images/transcanada.png",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Featured Projects
      </h2>

      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          id={p.id}
          title={p.title}
          role={p.role}
          technologyStack={p.technologyStack}
          image={p.image}
        />
      ))}
    </section>
  );
}