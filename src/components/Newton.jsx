import "./Newton.css";
import { useState } from 'react';

function Newton() {
    //variable
    const [guess, setGuess] = useState(0);
    let x0 = guess;
    let x1 = x0;
    const [approx, setApprox] = useState(0);
    //calculate function
    function calculate() {
        do {
            x0 = x1;
            x1 = x0 - (6 * Math.pow(x0, 4) - 13 * Math.pow(x0, 3) - 18 * Math.pow(x0, 2) + 7 * x0 + 6) / (24 * Math.pow(x0, 3) - 39 * Math.pow(x0, 2) - 36 * x0 + 7);
        }
        while (Math.abs(x0 - x1) > 0.0001);
        return setApprox(Math.round(x1 * 100) / 100);
    }
    //return
    return (
        <div className="newton">
            <h1>Newton's Method</h1>
            <div className="content">
                <label>Root Guess:</label>
                <input type="number" value={guess} onChange={(event) => { setGuess(event.target.value) }}></input>
                <label>Root Approximation (Result):</label>
                <input type="text" value={approx} className="unclickable" readOnly></input>
            </div>
            <button onClick={(event) => calculate()}>Calculate</button>
        </div>
    )
}

export default Newton;