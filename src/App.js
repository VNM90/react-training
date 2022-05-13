import React, {useState} from "react";
import Counter from "./components/Counter";

export default function App() {
    const [value, setValue] = useState("RANDOM TEXT");

    return (
        <div className="App">
            <h1>{value}</h1>
            <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Counter />
        </div>
    )
}