import './App.css';
import {useState} from "react";

export const App = () => {
    const [state, setState] = useState(0)
    const [value, setValue] = useState(0)

    const update = () => {
        setTimeout(()=>{
            setValue(prev => prev  + 1)
            setState(prev => prev  + 1)
        }, 300)
    }
    console.log('render')
    return (
        <div className="App">
            <h1>value = {value}</h1>
            <h1>state = {state}</h1>
            <button onClick={update}>UPDATE</button>
        </div>
    );
}
