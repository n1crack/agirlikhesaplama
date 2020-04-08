import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShapes } from "./features/slices/shapeReducer";
import { selectDensity, selectShapeType } from "./features/slices/mainReducer";
import "./App.css";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";
import ShapeDimension from "./components/ShapeDimension";
import { setShape } from "./features/slices/mainReducer";
import Result from "./components/Result";
import DensitySelector from "./components/DensitySelector";

function App() {
  const Shapes = useSelector(selectShapes);
  const ShapeType = useSelector(selectShapeType);
  const Volume = useSelector((state) => Shapes[ShapeType].volume);
  const Density = useSelector(selectDensity);

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
      <DensitySelector />
      <hr />
      <ShapeDimension />
      <hr />

      <div className="m-3">
        <Result value={Volume * Density} />
      </div>
      <hr />
    </div>
  );
}

export default App;
