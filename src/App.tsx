import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";
import ShapeDimension from "./components/ShapeDimension";

function App() {
  return (
    <div>
      <h1 className="font-bold text-lg m-5 "> Malzeme ağırlık hesaplama</h1>
      <Nav>
        <NavItem>Sac</NavItem>
        <NavItem>Kare</NavItem>
        <NavItem>Profil</NavItem>
        <NavItem>Boru</NavItem>
      </Nav>
      <hr />
      <ShapeDimension />
      <div className="m-3">Malzeme hesaplama ve görseller</div>
      <hr />
      <div className="m-3">Toplam değer</div>
    </div>
  );
}

export default App;
