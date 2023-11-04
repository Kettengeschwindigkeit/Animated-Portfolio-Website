import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Test from "./Test";
import Hero from "./components/hero/Hero";

const App = () => {
  return <div>
    <section>
      <Navbar />
      <Hero />
    </section>
    <section id="Homepage">Parallax</section>
    <section id="Services">Services</section>
    <section>Parallax</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    {/* <Test /> */}
    {/* <Test /> */}
  </div>;
};

export default App;
