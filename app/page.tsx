// app/page.tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NotebookSpread from "@/components/NotebookSpread";
import Corkboard from "@/components/Corkboard";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BackgroundDoodles from "@/components/BackgroundDoodles";

export default function Home() {
  return (
    <main className="px-8">
      <BackgroundDoodles>
        <Nav />
        <NotebookSpread
          top={<Hero />}
          bottom={<p className="text-ink-soft italic">— more coming here soon —</p>}
        />
        <Corkboard />
        <Skills />
        <About />
        <Footer />
      </BackgroundDoodles>
    </main>
  );
}