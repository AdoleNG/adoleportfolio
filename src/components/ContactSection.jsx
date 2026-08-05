export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "2rem",
        maxWidth: "700px",
        margin: "0 auto",
        marginTop: "3rem",
        marginBottom: "3rem",
        textAlign: "center",          // ⭐ Center everything
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h2>

      <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
        If you'd like to discuss a project, collaboration, or opportunity, feel
        free to reach out.
      </p>

      <div style={{ marginTop: "1rem" }}>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Email:</strong> victorameh2011@gmail.com
        </p>

        <p style={{ marginBottom: "0.5rem" }}>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/victor-ameh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            linkedin.com/in/victor-ameh
          </a>
        </p>

        <p style={{ marginBottom: "0.5rem" }}>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/AdoleNG"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            github.com/AdoleNG
          </a>
        </p>
      </div>
    </section>
  );
}
