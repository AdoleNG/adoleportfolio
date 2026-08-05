import { useParams, Link } from "react-router-dom";

const projectData = {
  eclrt: {
    title: "Enterprise Data Warehouse — Eglinton Crosstown LRT",
    role: "Lead Business Systems Analyst & Systems Integration Specialist",
    description:
      "Led requirements engineering and interface governance for a hybrid Enterprise Data Warehouse (EDW) utilizing Qumulo NAS storage to ingest data across 13 core transit subsystems—including Signaling & Train Control, SCADA, Intrusion Access Control, APCS, BCN, Network Management, and Master Clock. Translated RFP mandates from Her Majesty the Queen in Right of Ontario (HMQE) into end-to-end functional, technical, physical, and data interface specifications within a multi-vendor orchestration framework (Control-M, CaelumOne, Atempo, and Spectra Logic Tape Library). Coached partner firm BAs and QA engineers, authored key systems engineering artifacts (ICDs, RTM, V&V Matrix, FAT/SAT, PICO), and partnered with the Program Manager to enforce scope control and maintain schedule alignment.",
      image: "/images/eclrt.png",
  },

  openText: {
    title: "Microsoft 365 Tenant-to-Tenant Migration (OpenText)",
    role: "Senior Business Analyst",
    description:
      "Full story of migrating 13,000 users, mapping workloads, defining cutover windows, and validating post-migration integrity. Includes migration waves, mapping rules, and post-cutover validation strategy.",
    image: "/images/opentext.png",
  },

  versecast: {
    title: "VerseCast — Full-stack Bible Audio Platform",
    role: "Founder & Lead Engineer",
    description:
      "Engineered an end‑to‑end AI pipeline integrating Azure Speech‑to‑Text, FastAPI, and a custom Python NLP engine to classify spoken references and surface relevant content in real time. Built a multi‑service architecture leveraging FastAPI, WebSockets, Supabase, Azure STT, React + Vite, TailwindCSS, Render, and Cloudflare DNS, enabling low‑latency transcript ingestion, operator‑driven content validation, and multi‑tenant session management. Delivered a production‑ready marketing site and onboarding flow, implemented Resend‑based communication pipelines, and deployed stable environments supporting live events. Led product direction, UX design, and technical governance across backend, frontend, and real‑time systems, ensuring reliable performance, reduced operator workload, and synchronized on‑screen content during live speaking engagements..",
    image: "/images/versecast.png",
  },

  cgi: {
    title: "Global ISA DevOps & Flexera Enterprise Asset Governance Program",
    role: "Senior Business Analyst",
    description:
      "Served as Scrum Master and Technical Co-Lead for a global ISA DevOps initiative, deploying Flexera and Flexera Business Adapter Studio across a hybrid estate spanning 174 countries. Unified cross-functional delivery to streamline software discovery, license compliance, FinOps cloud optimization, and AI asset governance across virtualized, cloud, and on-premises environments.",
    image: "/images/cgi.png",
  },

  cpkc: {
    title: "CPKC / CP Rail — Enterprise Cybersecurity Compliance & TSA SD‑2022‑01 Alignment Program",
    role: "Senior Business Analyst",
    description:
      "Facilitated cybersecurity assessment workshops alongside a team of expert cybersecurity engineers to identify program gaps and align Canadian Pacific Kansas City (CPKC / CP Rail) with TSA Security Directive SD‑1580/82‑2022‑01. Co-authored and delivered a comprehensive Cybersecurity Implementation Plan (CIP) and strategic roadmap covering critical cyber systems, network segmentation, access controls, continuous monitoring, and patch management—enabling the organization to achieve full federal compliance.",
    image: "/images/cpkc.png",
  },

  tier1bank: {
    title: "Enterprise Cloud GRC & Key Cloud Controls Modernization Program (Canadian Tier‑1 Bank)",
    role: "Senior Business Analyst & Cloud GRC Specialist",
    description:
      "Partnered with Cloud Security Architects to lead the comprehensive refresh and cross-regulatory mapping of the bank’s Key Cloud Controls framework. Systematically analyzed enterprise IT standards—including Security Operations, Secure Application Development, Infrastructure Security, Incident Management, and Cloud Computing—and mapped key controls against OSFI guidelines alongside industry standards (NIST, CIS, MITRE ATT&CK, Cyber Kill Chain, SOC 1/SOX). Enhanced risk visibility, reporting fidelity, and regulatory compliance across the bank’s cloud estate.",
    image: "/images/tier1bank.png",
  },

  siem: {
    title: "Enterprise SIEM Modernization & Threat Response Automation Program (Canadian Tier‑1 Bank)",
    role: "Senior Business Analyst",
    description:
      "Drove requirements engineering and agile delivery for a major enterprise SIEM migration from ArcSight Next Gen SIEM to Microsoft Sentinel. Embedded within a daily Scrum environment, captured functional and technical specifications for log ingestion, threat intelligence integration, and UEBA criteria, while authoring core use cases for automated threat response using Azure Functions. Reviewed architectural designs to ensure seamless alignment with requirements, delivering unified visibility across cloud identities, endpoints, and applications.",
    image: "/images/siem.png",
  },

  azureSandbox: {
    title: "Azure Innovation Sandbox — Secure Cloud Experimentation & Governance Program (Canadian Tier‑1 Bank)",
    role: "Senior Business Analyst & Cloud Governance Lead",
    description:
      "Facilitated cross-functional requirements workshops to deliver a secure Azure sandbox environment for a Tier-1 Canadian bank, enabling rapid experimentation and MVP testing at reduced operational costs. Captured comprehensive user, functional, technical, and security requirements—including environment provisioning, RBAC guardrails, and sandbox isolation—ensuring full alignment with enterprise IT standards. Authored core project assets, acceptance criteria, and a robust governance framework, directly guiding bank leadership on policy implementation and enforcement.",
    image: "/images/azureSandbox.png",
  },

  translink: {
    title: "Modern Endpoint Management & Windows Autopilot Migration Program — South Coast Transportation Authority",
    role: "Senior Business Analyst",
    description:
      "Spearheaded the business analysis and service transition for migrating legacy endpoint management (SCCM, Active Directory, GPO) to Microsoft Intune and Windows Autopilot during remote-work COVID-19 operations. Authored end-to-end requirement specifications, detailed use cases, zero-touch provisioning workflows, and comprehensive change impact assessments. Successfully facilitated the transition to a Managed Services Provider (MSP) model, establishing ITIL-compliant compliance policies, proactive threat visibility, and a seamless onboarding experience for remote and hybrid employees.",
    image: "/images/translink.png",
  },

  dmmrrs: {
    title: "Digital Multimedia Recording & Retrieval System (DMMRRS) — Transit Infrastructure Integration (Eglinton Crosstown LRT)",
    role: "Senior Business Analyst",
    description:
      "Deconstructed published RFP requirements into comprehensive functional, technical, and granular interface specifications for the Eglinton LRT Digital Multimedia Recording and Retrieval System (DMMRRS). Partnered with cross-functional engineering teams and external vendors to architect a secure, human-centered solution that captures CCTV, PA, Telephony, and Passenger Information System (PIS) feeds. Engineered detailed interface requirements—including Interface Protocols, System Interface Types, Physical Interface Specifications, Data Transmission Interfaces, and DWH/DMMRRS Interface File Name Nomenclatures. Defined batch ingestion workflows via Control-M into high-performance Qumulo NAS storage with synchronous replication to the Backup Operations Control Centre (BOCC), while managing scope change control, technical workshops, and vendor alignment to keep delivery on schedule.",
    image: "/images/dmmrrs.png",
  },
  transcanada: {
  title: "Application Rationalization & Azure Migration — TransCanada Energy",
  role: "Senior Business Analyst & Cloud Migration Lead",
  description:
    "Led application portfolio rationalization and Azure migration strategy for TransCanada Energy. Established the baseline inventory schema, deployed Azure Migrate agentless scanners, and reconciled discovery data with the CMDB. Applied the Gartner TIME model (Tolerate, Invest, Migrate, Eliminate) to evaluate business capabilities, eliminate functional redundancies, and optimize TCO—identifying licensing inefficiencies across Dev, QA, and Prod environments. Documented migration sequencing, dependencies, and operational constraints, presenting decision packages to the Architecture Review Board (ARB) to govern cloud modernization and sunset strategies.",
  image: "/images/transcanada.png"
},

};

export function ProjectPage() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <section style={{ padding: "2rem" }}>
        <h2>Project not found.</h2>
      </section>
    );
  }

  return (
    <section
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
        <img
          src={project.image}
          alt=""
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "1.5rem",
          }}
        />

        <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>

        <p style={{ fontWeight: "600", marginBottom: "1rem" }}>
          {project.role}
        </p>

        <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
          {project.description}
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.6rem 1.2rem",
            background: "white",
            color: "#1E2248",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Back to Highlights
        </Link>
      </article>
    </section>
  );
}
