import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
      {/* banner section  */}
        <section className="banner">
            <Banner></Banner>
        </section>
        <section>
            <PopularGames></PopularGames>
        </section>
      </main>
    </div>
  );
};

export default HomeLayouts;
