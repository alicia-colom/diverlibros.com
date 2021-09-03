import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="mainContainer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalogo" component={Catalog} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contacto" component={Form} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
