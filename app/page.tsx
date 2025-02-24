import { Hero } from "./components/Layout/Hero";
import Contact from "./components/Contact";
import FadeIn from "./components/UILibrary/FadeIn";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center" >
      <Hero />
      <section className="w-full">
        <FadeIn delay={400}>
          <img src="/homepage.jpg" alt="North Houston Handyman" className="w-full h-full object-cover" />
        </FadeIn>
      </section>
      <Contact shouldFadeOnScroll />
    </div>
  );
}
