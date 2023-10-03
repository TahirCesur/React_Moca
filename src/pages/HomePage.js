import React from "react";
import About from "../Components/about/About";
import Contact from "../Components/contact/Contact";
import Product from "../Components/product/Product";
import Quarries from "../Components/quarries/Quarries";
import Slider from "../Components/common/Slider";
import TopBar from "../Components/common/TopBar";

function HomePage() {
  return (
    <>
      <TopBar />
      <Slider />
      <About />
      <Quarries />
      <Product />
      <Contact />
    </>
  );
}

export default HomePage;
