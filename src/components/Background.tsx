import { experience, stack } from "@/data/content";

export default function Background() {
  return (
    <section id="background">
      <div className="sh">
        <span className="k">03</span>
        <h2>Background</h2>
        <span className="line" />
      </div>
      <div className="two">
        <div className="tline">
          {experience.map((e) => (
            <div key={e.role}>
              <span className="k">{e.dates}</span>
              <b>{e.role}</b>
              <span>
                {e.org} · {e.place}
              </span>
            </div>
          ))}
        </div>
        <table className="stack">
          <tbody>
            {stack.map((g) => (
              <tr key={g.group}>
                <td>{g.group}</td>
                <td>{g.items.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
