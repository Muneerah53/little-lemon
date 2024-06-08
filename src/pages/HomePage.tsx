import { About } from "../components/home/About";
import { Hero } from "../components/home/Hero";
import { Specials } from "../components/home/Specials";
import { Testimonials } from "../components/home/Testimonials";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
};
