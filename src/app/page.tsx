import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 divide-y divide-slate-800">
        <Banner />
        <Services />
        <Skills />
        <Contact />
    </main>
  );
}
