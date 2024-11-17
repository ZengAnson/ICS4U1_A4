import './HeronForm.css';
import { useState } from 'react';

function Heron() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [area, setArea] = useState("0");

    function calculate() {
        console.log(a);
        console.log(b);
        console.log(c);
        const root = Math.sqrt(4 * a * a * b * b - Math.pow((a * a + b * b - c * c), 2));
        console.log(root);
        if (a > 0 && b > 0 && c > 0) {
            if (root>0){
                return setArea (Math.round(root*25, 2)/100);
            }
        } return setArea ("This triangle does not exist");
    }

    return (
        <div className="heron">
            <h1>Heron's Formula</h1>
            <label>Side A:</label>
            <input type="number" value={a} onChange={(event) => {setA(event.target.value)}}></input>
            <label>Side B:</label>
            <input type="number" value={b} onChange={(event) => {setB(event.target.value)}}></input>
            <label>Side C:</label>
            <input type="number" value={c} onChange={(event) => {setC(event.target.value)}}></input>
            <label>Area (Result):</label>
            <input type="text" value={area} readOnly></input>
            <button onClick={() => calculate()}>Calculate</button>
        </div>
    )
}

export default Heron;