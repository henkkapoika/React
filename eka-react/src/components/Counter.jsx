import React, {useState} from "react"
import CounterButton from "./CounterButton"

const Counter = () => {

    // Tämä ei käytä React state:a
    //let count = 0;
    // Oikea state:
    const [count, setCount] = useState(0)

    // Koodissa kaiken ei tarvitse olla state:a
    // Ainoastaa se, joka halutaan näyttää käyttäjälle ja päivittää

    function reset(){
        setCount(count => 0)
    }

    function increment(){
        // Count++
        // Tämä ei päivitä state:a
        //count++

        // Oikea state update - Hook
        //       vanha => uusi
        setCount(count => ++count) // (count => count + 1)
    }

    function decrement(){
        // Count--
        //count--

        setCount(count => --count)
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            {/* Harjoitus, käytetään uutta CounterButton komponenttia */}
            {/* <button onClick={increment}>++</button>
            <button onClick={decrement}>--</button> */}
            <CounterButton onSelect={increment}>+++</CounterButton>
            <CounterButton onSelect={decrement}>---</CounterButton>
            <CounterButton onSelect={reset}>000</CounterButton>
        </div>
    )
}

export default Counter;