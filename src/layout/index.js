import React from "react";
import HeaderTitle from "../components/HeaderTitle";
import BannerGov from "../components/BannerGov";
import NavbarDefault from "../components/NavbarDefault";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import "./index.scss";
const LayoutDefault = () => {
  return (
    <div className="container-layout">
      <header>
        <BannerGov />
        <NavbarDefault />
      </header>
      <main>
        <HeaderTitle />
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutDefault;
