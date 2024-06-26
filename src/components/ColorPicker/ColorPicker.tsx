import React, {useState, useCallback, useMemo} from 'react';
import InputRange from "../../ui/InputRange.tsx";
import {IColor} from "../../types/color.ts";

const ColorPicker: React.FC = () => {
    const [color, setColor] = useState<IColor>({
        red: 123,
        green: 45,
        blue: 210
    })
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setColor({
            ...color,
            [name]: value,
        });
    }, [color])

    const colorStyle = useMemo(() => ({
        backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
        width: '200px',
        height: '50px',
        margin: '10px 0',
    }), [color.blue, color.green, color.red]);

    return (
        <section>
            <div className="container mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">Color Picker</h1>
                <div className="p-4 max-w-md mx-auto">
                    <InputRange name={'red'} title={'R'} value={color.red} handleClick={handleChange}/>
                    <InputRange name={'green'} title={'G'} value={color.green} handleClick={handleChange}/>
                    <InputRange name={'blue'} title={'B'} value={color.blue} handleClick={handleChange}/>
                    <div className="mt-2 text-gray-700">
                        rgb({color.red}, {color.green}, {color.blue})
                    </div>
                    <div style={colorStyle} className="rounded-md"></div>
                </div>
            </div>
        </section>
    );
};

export default ColorPicker;
