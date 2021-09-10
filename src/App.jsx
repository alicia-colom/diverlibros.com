import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import AboutUs from "./components/layout/aboutUs/AboutUs";
import Catalog from "./components/layout/catalog/CatalogPage";
import ProductDiverlibro from "./components/layout/catalog/productDiverlibro/ProductDiverlibro";
import ProductMiniDiverlibro from "./components/layout/catalog/productMiniDiverlibro/ProductMiniDiverlibro";
import ProductCalendario from "./components/layout/catalog/productCalendario/ProductCalendario";
import ProductCuadro from "./components/layout/catalog/productCuadro/ProductCuadro";
import Contact from "./components/layout/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import LegalAdvice from "./components/legal/LegalAdvice";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main__container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/catalogo" component={Catalog} />
            <Route
              exact
              path="/catalogo/diverlibro"
              component={ProductDiverlibro}
            />
            <Route
              exact
              path="/catalogo/mini-diverlibro"
              component={ProductMiniDiverlibro}
            />
            <Route
              exact
              path="/catalogo/calendario"
              component={ProductCalendario}
            />
            <Route exact path="/catalogo/cuadro" component={ProductCuadro} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/aviso-legal" component={LegalAdvice} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
