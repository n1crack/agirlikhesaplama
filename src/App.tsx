import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";
import ShapeDimension from "./components/ShapeDimension";
import { setShape, selectedShape } from "./features/slices/shapeReducer";
import Result from "./components/Result";
import DensitySelector from "./components/DensitySelector";

import { Square, Profile, Plate, Pipe } from "./components/Shapes";

function App() {
    type ShapesType = {
        [key: string]: any;
    };

    const Shapes: ShapesType = {
        pipe: Pipe,
        profile: Profile,
        plate: Plate,
        square: Square,
    };

    const checkSelected = (name: any): boolean => {
        return name === shapeType;
    };

    const dispatch = useDispatch();
    const shapeType = useSelector(selectedShape);
    const SelectedComponent = Shapes[shapeType];
    const setShapeType = (type: string) => {
        dispatch(setShape(type));
    };
    return (
        <div className="flex h-screen justify-center bg-gray-100">
            <div className="box-border content-center m-auto w-full md:w-auto p-3 border-2 border-gray-600 bg-white">
                <h1 className="font-bold text-2xl m-5 ">
                    Malzeme ağırlık hesaplama
                </h1>
                <Nav>
                    <NavItem
                        selected={checkSelected("plate")}
                        onClick={() => setShapeType("plate")}
                    >
                        Sac
                    </NavItem>
                    <NavItem
                        selected={checkSelected("square")}
                        onClick={() => setShapeType("square")}
                    >
                        Kare
                    </NavItem>
                    <NavItem
                        selected={checkSelected("profile")}
                        onClick={() => setShapeType("profile")}
                    >
                        Profil
                    </NavItem>
                    <NavItem
                        selected={checkSelected("pipe")}
                        onClick={() => setShapeType("pipe")}
                    >
                        Boru
                    </NavItem>
                </Nav>
                <DensitySelector />
                <hr />
                <ShapeDimension />
                <hr />
                <div className="m-2">
                    <Result />
                </div>
                <hr />
                <SelectedComponent />
            </div>
        </div>
    );
}

export default App;
