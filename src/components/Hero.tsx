import { profile, stats } from "@/data/content";

export default function Hero() {
  return (
    <>
      <div className="top">
        <span className="k">Portfolio / rev. 2026.10</span>
        <span className="k">Lagos, NG · Remote · UTC+1</span>
      </div>

      <header className="hero">
        <span className="k">{profile.focus}</span>
        <h1 style={{ marginTop: 18 }}>
          I design, ship and <u>run</u> the backend systems behind real businesses.
        </h1>
        <p>
          Backend engineer at {profile.currentCompany}, building production systems for US clients: a fuel-rewards app
          with 5K+ active users, a freight portal that has processed 80,000+ orders, ERP automation for 13 dispensaries,
          and AI connectors that let teams operate them from Claude and ChatGPT.
        </p>
        <div className="actions">
          <a className="btn fill" href="#systems">
            See the systems ↓
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            Start a conversation
          </a>
        </div>
      </header>

      <div className="readout">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="k">{s.key}</span>
            <b>{s.value}</b>
            <small>{s.detail}</small>
          </div>
        ))}
      </div>
    </>
  );
}
