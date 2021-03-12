import React, { useState } from 'react';

export const Panel = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h4>A react page bundled with Rollup.js</h4>
            <br />
            <h1>Counter: {counter}</h1>
            <br />
            <button onClick={()=>{setCounter(counter+1)}}>+ Increase</button>
            <br />
            <button onClick={()=>{setCounter(counter-1)}}>- Decrease</button>
        </div>
    );
};