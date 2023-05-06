import "../../App.css";
import WhyUs from "../../components/WhyUs";
import Testimonials from "../../components/Testimonials";
import ExporeProducts from "./Sections/ExporeProducts";
import Hero from "./Sections/Hero";
import WeHelp from "./Sections/WeHelp";
import PopularProducts from "./Sections/PopularProducts";
import Blog from "./Sections/Blog";
const Home = () => {
  return (
    <>
      <Hero />

      <ExporeProducts />

      <WhyUs />

      <WeHelp />

      <PopularProducts />

      <Testimonials />

      <Blog />
    </>
  );
};

export default Home;
