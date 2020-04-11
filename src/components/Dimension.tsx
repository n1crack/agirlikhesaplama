import React, { useState, useEffect } from "react";
import Unit from "./Unit";

type UnitProps = {
    label: string;
    value: number;
    placeholder: string;
    factor: number;
    onChange: any;
    event: any;
};

export default function Dimension(props: UnitProps) {
    const [attr, setAttr] = useState({
        label: props.label,
        placeholder: props.placeholder,
        value: props.value,
        factor: props.factor,
    });

    useEffect(() => {
        //props.event
        props.event.push(() => {
            setAttr({
                ...attr,
                value: 0,
            });
        });

        if (attr.value !== props.value) {
            props.onChange(attr);
        }
    }, [attr, props]);

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAttr({
            ...attr,
            value: Number(e.target.value),
        });
    };
    const handleChangeFactor = (factor: number) => {
        setAttr({
            ...attr,
            value: (Number(attr.value) * Number(factor)) / Number(attr.factor),
            factor: factor,
        });
    };

    return (
        <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
                <label
                    className="block text-gray-500 font-bold text-sm  md:text-xl md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor={attr.label}
                >
                    {attr.placeholder}
                </label>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    className="block w-full pl-2 pr-12 sm:leading-5 md:text-3xl border border-gray-700 focus:border-blue-500 rounded p-1 select-all leading-tight focus:outline-none "
                    type="number"
                    min={0}
                    placeholder={"0"}
                    id={attr.label}
                    value={attr.value || ""}
                    onChange={handleChangeValue}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <Unit
                        factor={attr.factor}
                        onUnitSelect={handleChangeFactor}
                    />
                </div>
            </div>
        </div>
    );
}
