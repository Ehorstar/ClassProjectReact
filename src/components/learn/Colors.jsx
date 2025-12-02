import React, { useState } from 'react';

const Colors = () => {
    const [color, setColor] = useState("black");
    const text = "Lorem ipsum dolor sit amet.";

    const Color = (c) => {
        setColor(c);
    };

    return (
        <div>
            <h1>ChangeColor</h1>
            <div>
                <button onClick={() => Color("red")}>red</button>
                <button onClick={() => Color("green")}>green</button>
                <button onClick={() => Color("blue")}>blue</button>
                <div style={{ color: color }}>{text}</div>
            </div>
        </div>
    );
}

export default Colors;
