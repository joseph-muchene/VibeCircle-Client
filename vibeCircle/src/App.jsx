import React from "react";
import Navbar from "./core/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Swipe from "./components/Swiper";
import Search from "./components/Search";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-center items-center mx-3 my-3">
        <Search />
      </div>
      <Swipe />
      <Cards />
    </div>
  );
}

export default App;
