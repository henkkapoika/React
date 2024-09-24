import React, {useState} from "react"

const Counter = () => {

    // Tämä ei käytä React state:a
    //let count = 0;
    // Oikea state:
    const [count, setCount] = useState(0)

    // Koodissa kaiken ei tarvitse olla state:a
    // Ainoastaa se, joka halutaan näyttää käyttäjälle ja päivittää

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
            <button onClick={increment}>++</button>
            <button onClick={decrement}>--</button>
        </div>
    )
}

export default Counter;