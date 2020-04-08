import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";
import ShapeDimension from "./components/ShapeDimension";
import { useDispatch } from "react-redux";

import { setShape } from "./features/slices/mainReducer";

function App() {
  const dispatch = useDispatch();
  const setShapeType = (type: string) => {
    dispatch(setShape(type));
  };
  return (
    <div>
      <h1 className="font-bold text-lg m-5 "> Malzeme ağırlık hesaplama</h1>
      <Nav>
        <NavItem onClick={() => setShapeType("plate")}>Sac</NavItem>
        <NavItem onClick={() => setShapeType("square")}>Kare</NavItem>
        <NavItem onClick={() => setShapeType("profile")}>Profil</NavItem>
        <NavItem onClick={() => setShapeType("pipe")}>Boru</NavItem>
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
