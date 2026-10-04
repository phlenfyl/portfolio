import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Systems from "@/components/Systems";
import IncidentLog from "@/components/IncidentLog";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <div className="mob-top">
        <div className="id">
          <div className="mark">{profile.initials}</div>
          <b>{profile.shortName}</b>
        </div>
        <a className="btn" href={profile.cv} target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </div>
      <div className="layout">
        <Sidebar />
        <main id="top">
          <Hero />
          <Systems />
          <IncidentLog />
          <Background />
          <Contact />
        </main>
      </div>
    </>
  );
}
