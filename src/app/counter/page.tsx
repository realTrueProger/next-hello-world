"use client"

import {useState} from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div>Counter page</div>
            <div>Counter: {counter}</div>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            <button onClick={() => setCounter(prev => prev - 1)}>-</button>
        </>
    )
}