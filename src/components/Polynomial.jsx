import "./Polynomial.css";
import { useState } from 'react';

function Polynomial() {
    //variables
    let [coefficient, setCoefficient] = useState(0);
    let [exponent, setExponent] = useState(0);
    const [x, setX] = useState(0);
    let [eq, setEq] = useState(0);
    let [func, setFunc] = useState(0);
    
    //calculate function
    function calculate() {
        let coeff = coefficient.split(" ");
        let exp = exponent.split(" ");
        const output = { //object
            sum: 0,
            equ: "",
        }
        
        for (let i = 0; i < coeff.length; i++) {
            output.equ += coeff[i] + "x^" + exp[i] + " ";
            if (parseInt(coeff[i]) - 0 >= 0 && i + 1 < coeff.length) {
                output.equ += "+"; //adds + sign if coefficient is negative and not the first value
            }
            let value = parseInt(coeff[i]) * Math.pow(x, parseInt(exp[i]));
            output.sum += value;
        } 
        
        return setEq(output.equ), setFunc(Math.round((100 * output.sum), 2) / 100);
    }

    return (
        <div className="poly">
            <h1>Polynomial Function</h1>
            <div className="content">
                <label>Coefficients:</label>
                <input type="text" value={coefficient} onChange={(event) => { setCoefficient(event.target.value) }}></input>
                <label>Exponents:</label>
                <input type="text" value={exponent} onChange={(event) => (setExponent(event.target.value))}></input>
                <label>x Value:</label>
                <input type="number" value={x} onChange={(event) => (setX(event.target.value))}></input>
                <label>Polynomial Function:</label>
                <input type="text" value={eq} className="unclickable" readOnly></input>
                <label>Polynomial Evaluation:</label>
                <input type="text" value={func} className="unclickable" readOnly></input>
            </div>
            <button onClick={(event) => calculate()}>Calculate</button>
        </div>
    )
}

export default Polynomial;