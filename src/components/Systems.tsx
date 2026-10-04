import { Fragment } from "react";
import { projects, sideProjects, type Project } from "@/data/content";

function Diagram({ flow }: { flow: Project["flow"] }) {
  return (
    <div className="diagram">
      {flow.map((row, r) => (
        <div className="flow" key={r}>
          {row.map((n, i) => (
            <Fragment key={n.label + i}>
              {i > 0 && <span className="wire" />}
              <span className={`box${n.kind === "core" ? " core" : n.kind === "external" ? " ext" : ""}`}>{n.label}</span>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Systems() {
  return (
    <section id="systems">
      <div className="sh">
        <span className="k">01</span>
        <h2>Systems</h2>
        <span className="line" />
      </div>

      {projects.map((p) => (
        <article className="sheet" key={p.id}>
          <div className="sheet-head">
            <span className="pid">{p.id}</span>
            <h3>{p.title}</h3>
            <span className="k">
              {p.role} · {p.dates}
            </span>
          </div>
          <div className="sheet-body">
            <div>
              <p>{p.summary}</p>
              <Diagram flow={p.flow} />
              {p.metrics && (
                <div className="metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <b>{m.value}</b>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <ul className="spec">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="stackline">
            <span>{p.tech.join(" · ")}</span>
            {p.link && (
              <a href={p.link.href} target="_blank" rel="noopener noreferrer">
                {p.link.label} ↗
              </a>
            )}
          </div>
        </article>
      ))}

      <div className="mini">
        {sideProjects.map((p, i) => (
          <div className="sheet" key={p.title}>
            <span className="pid">AUX-{String(projects.length + i + 1).padStart(2, "0")}</span>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <p className="k tech">{p.tech.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
