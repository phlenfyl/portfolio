"use client";

export default function ThemeToggle({ alternate }: { alternate: "light" | "dark" }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === alternate ? "" : alternate;
    root.dataset.theme = next;
    try {
      if (next) localStorage.setItem("theme", next);
      else localStorage.removeItem("theme");
    } catch {}
  };
  return (
    <button className="btn" onClick={toggle} aria-label="Toggle colour theme">
      ◐
    </button>
  );
}
