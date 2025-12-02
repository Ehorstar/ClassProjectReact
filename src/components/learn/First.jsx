import React, { useState } from 'react';

const First = () => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);

    };

    const toggleVisible = () =>{
        setVisible(!visible);
    };
    return (
        <div>
            <h1>First</h1>
            <div>
                <button onClick={() => decrement}>-</button>
                {count}
                <button onClick={() => increment}>+</button>
            </div>
            <hr />
            <div>
                <button onClick={toggleVisible}>Show</button>
                {visible && <div>Lorem, ipsum.</div>}
            </div>
        </div>


    );
}

export default First;
