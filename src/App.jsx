import React, { useState } from "react";
import "./Style.scss";

export default function App(){
  const [primeiroValor, setPrimeiroValor]=useState();
  const [segundoValor, setSegundoValor]=useState();


  const capturandoPrimeiroValor=(event)=>{
    setPrimeiroValor(Number(event.target.value));
    console.log((event.target.value))
  }

  const capturandoSegundoValor=(event)=>{
    setSegundoValor(Number(event.target.value));
  }

  const [resultado, setResultado]=useState();

  const soma =()=>{
    setResultado(primeiroValor+segundoValor);
    
  }
  const subtracao=()=>{
    setResultado(primeiroValor-segundoValor);
  }
  const multiplicacao=()=>{
    setResultado(primeiroValor*segundoValor);
  }
  const divisao=()=>{
    setResultado(primeiroValor/segundoValor);
  }
  
  return(
    <main>
      <h1>calculadora</h1>

    <section className="container-input">
      <input type="Number" placeholder="digite o primeiro valor" onChange={capturandoPrimeiroValor}/>
      <input type="Number" placeholder="digite o segundo valor" onChange={capturandoSegundoValor}/>
    </section>
    <section className="container-btn">
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>x</button>
      <button onClick={divisao}>/</button>
      </section>
      <h2>{resultado}</h2>
    </main>
  )
}