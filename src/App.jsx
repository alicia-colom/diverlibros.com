import React from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/hero/Hero";
import AboutUs from "./components/layout/aboutUs/AboutUs";
import Catalog from "./components/layout/catalog/Catalog";
import Home from "./components/layout/home/Home";
import Form from "./components/forms/form";
import Footer from "./components/layout/footer/Footer";

import { Divider } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Divider />
        <Home />
        <Divider />
      </main>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
