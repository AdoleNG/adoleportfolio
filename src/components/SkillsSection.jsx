export function SkillsSection() {
  return (
    <section
      id="skills"
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
        <h2 style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>
          Professional Skills & Competencies
        </h2>

        <ul style={{ lineHeight: "1.8", paddingLeft: "1.2rem" }}>
          <li>
            <strong>Business Analysis & Process:</strong> Process Modelling (BPMN 2.0, Visio), Requirements Analysis, Needs Assessment, Business Process Improvement, Quality Assurance & Testing, Test Script Development
          </li>

          <li>
            <strong>Cloud & Architecture:</strong> Cloud Migration, Cloud Security Risk Assessment, Enterprise Architecture (TOGAF, Zachman, Purdue), Azure, AWS, Hyper‑V, VMware
          </li>

          <li>
            <strong>Security & Compliance:</strong> NIST SP 800‑53, MITRE ATT&CK, CIS Azure Benchmark, CIS AWS Benchmark, SWIFT CSCF, PCI‑DSS, CSA CCM, Cyber Kill Chain
          </li>

          <li>
            <strong>Data, APIs & Development:</strong> SQL, MS SQL Server Management Studio, Postman, Azure CLI, Azure Storage Explorer
          </li>

          <li>
            <strong>Business & Leadership Skills:</strong> Strategy Development, Design Thinking, Business Value Positioning
          </li>

          <li>
            <strong>Methodologies & Frameworks:</strong> Agile, Scrum, SAFe, Waterfall, SDLC, Lean, Six Sigma, ITIL, Project Management Methodology, SWOT Analysis, Kanban
          </li>

          <li>
            <strong>Technical Environment & Tools:</strong> Azure DevOps, AWS Management Console, Azure Portal, Azure Migrate, Flexera Business Adapter Studio, Git, SharePoint, Confluence, Jira, ServiceNow, BMC Remedy, Salesforce, Guidewire, Trello, MS Project, Visio, Lucidchart, Autosys, Windows Task Scheduler
          </li>
        </ul>
      </article>
    </section>
  );
}
