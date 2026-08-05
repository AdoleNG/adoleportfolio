import { Link } from "react-router-dom";

export function ProjectCard({
  id,
  title,
  role,
  technologyStack,
  image,
}) {
  return (
    <article
      style={{
        background: "#1E2248",
        color: "white",
        padding: "1.5rem",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        marginBottom: "2rem",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "1rem",
        }}
      />

      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>

      {role && (
        <p
          style={{
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          {role}
        </p>
      )}

      {technologyStack && (
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.5",
            marginBottom: "1rem",
            opacity: 0.9,
          }}
        >
          <strong>Technology Stack:</strong> {technologyStack}
        </p>
      )}

      <Link
        to={`/projects/${id}`}
        style={{
          display: "inline-block",
          marginTop: "0.5rem",
          padding: "0.6rem 1.2rem",
          background: "white",
          color: "#1E2248",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Learn More
      </Link>
    </article>
  );
}