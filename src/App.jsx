import { useState } from "react";

export function App() {
  const[letra, setLetra] = useState("Thalles")
  function handleAdicionar() {
    setLetra(letra + "s")
  }


return(<div>
  <h1>Nome:{letra}</h1>
  <button onClick={handleAdicionar}>Adicionar</button>
  </div>)

}