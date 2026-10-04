"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

export const sections = [
  { id: "top", label: "Overview" },
  { id: "systems", label: "Systems" },
  { id: "log", label: "Incident log" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("top");

  // Highlights the section currently in the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <aside>
      <div>
        <div className="id">
          <div className="mark">{profile.initials}</div>
          <div>
            <b>{profile.name}</b>
            <span className="k">{profile.title}</span>
          </div>
        </div>
        <ul className="toc">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={active === s.id ? "on" : undefined}>
                <span>{String(i).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-foot">
        <span className="avail">
          <i />
          {profile.availability}
        </span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github.com/{profile.githubHandle} ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <div className="side-actions">
          <a className="btn fill" href={profile.cv} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
          <ThemeToggle alternate="dark" />
        </div>
      </div>
    </aside>
  );
}
