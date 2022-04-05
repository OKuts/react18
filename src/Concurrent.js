import './App.css';
import {useState} from "react";
const source = new Array(1200)
    .fill('')
    .map((_, i) => ({id: i, name: `Item ${i + 1}`}))
export const Concurrent = () => {
    const [value, setValue] = useState('')
    const [arr, setArr] = useState(source)

    const onChangeValue = (e) => {
        setValue(e.target.value)
        setArr(source.filter(el => el.name.includes(e.target.value)))
    }
    console.log('render')
    return (
        <div className="App">
            <input value={value} onChange = {onChangeValue}/>
            <ul>
                {arr.map(el => <li key={el.id}>{el.name}</li>)}
            </ul>
        </div>
    );
}
