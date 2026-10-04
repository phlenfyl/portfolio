import { incidents } from "@/data/content";

export default function IncidentLog() {
  return (
    <section id="log">
      <div className="sh">
        <span className="k">02</span>
        <h2>Incident log</h2>
        <span className="line" />
      </div>
      <p className="log-intro">
        A few production problems, and how they were closed out. Every fix shipped with a regression test.
      </p>
      <div className="log">
        <div className="log-row h">
          <div>Severity</div>
          <div>Symptom</div>
          <div>Root cause</div>
          <div>Fix</div>
        </div>
        {incidents.map((x) => (
          <div className="log-row" key={x.symptom}>
            <div>
              <span className={`sev${x.severity === "HIGH" ? "" : " b"}`}>{x.severity}</span>
            </div>
            <div>{x.symptom}</div>
            <div>{x.cause}</div>
            <div>{x.fix}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
