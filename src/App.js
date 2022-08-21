import React, { useState , useEffect } from "react";
import './App.css';

function App() {
    const [advice,setAdvice] = useState('');

    const GetQuote = async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
    }

    useEffect(() => {
        GetQuote();
    }, [])
    
    return (
        <>
        <q>{advice}</q>
        <button onClick={() => GetQuote()}>GIVE ME ADVICE!</button>
        </>
    )
}

export default App;