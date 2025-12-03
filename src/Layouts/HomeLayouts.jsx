import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import PopularGames from "../Components/PopularGames/PopularGames";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import { Outlet, useNavigation } from "react-router";
import Loading from "../Pages/Loading";

const HomeLayouts = () => {

  const {state} = useNavigation();
  // console.log(state)

  const routeTitles = {
    "/": "Home - My Game Site",
    "/contact": "Contact Us - My Game Site",
  };

  // update document.title dynamically
  useEffect(() => {
    if (state === "loading") {
      document.title = "Loading...";
    } else {
      document.title = routeTitles[location.pathname] || "My Game Site";
    }
  }, [location.pathname , state]);


  return (
    <div className=" bg-base-300">
    
   
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main  className="min-h-screen">
      <section>
      {state == 'loading' ? <Loading></Loading>:<Outlet></Outlet>  }
        
      </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayouts;
