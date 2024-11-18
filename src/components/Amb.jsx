import "./Amb.css";
import { useState } from 'react';

function Amb() {
    //variables
    const [angle, setAngle] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [ambiguous, setAmbiguous] = useState(" ");

    //calculation
    function calculate() {
        if (angle > 0 && a > 0 && b > 0) {
            const h = b * Math.sin(angle * Math.PI / 180);
            if (angle <= 90) {
                if (a == h) {
                    return setAmbiguous("Right triangle");
                } else if (a >= b) {
                    return setAmbiguous("One triangle");
                } else if (h < a && a < b) {
                    return setAmbiguous("Two triangles (ambiguous case)");
                }
            } if (a > b) {
                return setAmbiguous("One triangle");
            }
        } return setAmbiguous("No triangle"); //case a<h, angle>90 && a<b || a==b
    }

    return (
        <div className="amb">
            <h1>Ambiguous Case</h1>
            <div className="content">
                <label>Angle A:</label>
                <input type="number" value={angle} onChange={(event) => { setAngle(event.target.value) }}></input>
                <label>Side A:</label>
                <input type="number" value={a} onChange={(event) => { setA(event.target.value) }}></input>
                <label>Side B:</label>
                <input type="number" value={b} onChange={(event) => { setB(event.target.value) }}></input>
                <label>Triangle Type (Result)</label>
                <input type="text" value={ambiguous} className="unclickable" readOnly/>
            </div>
            <button onClick={(event) => calculate()}>Calculate</button>
        </div >
    )
}

export default Amb;