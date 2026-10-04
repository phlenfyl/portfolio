import { profile } from "@/data/content";

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div>
          <span className="k">04 · Contact</span>
          <h2 style={{ marginTop: 14 }}>Hiring for backend, or have a system that needs building?</h2>
        </div>
        <div className="rows">
          <a href={`mailto:${profile.email}`}>
            {profile.email} <span>→</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <span>↗</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github.com/{profile.githubHandle} <span>↗</span>
          </a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer">
            Download CV (PDF) <span>↓</span>
          </a>
        </div>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>END OF SHEET</span>
      </footer>
    </>
  );
}
