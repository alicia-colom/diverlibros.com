import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header/Header";
import AboutUs from "./components/layout/aboutUs/AboutUs";
import Catalog from "./components/layout/catalog/Catalog";
import Home from "./components/layout/home/Home";
import Contact from "./components/layout/contact/Contact";
import Footer from "./components/layout/footer/Footer";

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
            <Route exact path="/contacto" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
