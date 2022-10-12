import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [custosReformas, setCustosReformas] = useState([]);
  const [custosConsertosExt, setConsertosExt] = useState([]);

  // console.log(localStorage.removeItem("teste0"));
  // console.log(localStorage.removeItem("teste1"));
  // console.log(localStorage.removeItem("teste3"));

  const qtd = [1, 1, 1, 1];

  return (
    <div className="App">
      {qtd.map((un, index) => (
        <input
          type="text"
          key={index}
          name="teste"
          placeholder={"custo reformas " + (index + 1)}
          onChange={(e) => {
            sessionStorage.setItem(`custoReforma${index + 1}`, e.target.value);
          }}
        />
      ))}
      {qtd.map((un, index) => (
        <input
          type="text"
          key={index + qtd.length}
          name="teste"
          placeholder={"custo reparos " + (index + 1)}
          onChange={(e) => {
            sessionStorage.setItem(
              `custoReparoExt${index + 1}`,
              e.target.value
            );
          }}
        />
      ))}

      <button
        type="submit"
        onClick={() => {
          setCustosReformas([]);
          setConsertosExt([]);
          for (let i = 0; i < qtd.length; i++) {
            const custoReformasStorage = sessionStorage.getItem(
              `custoReforma${i + 1}`
            );

            const custoConsertosExtStorage = sessionStorage.getItem(
              `custoReparoExt${i + 1}`
            );

            custoReformasStorage != null
              ? custosReformas.push(custoReformasStorage)
              : null;

            custoConsertosExtStorage != null
              ? custosConsertosExt.push(custoConsertosExtStorage)
              : null;
          }
          console.log("CUSTOS REFORMAS:", custosReformas);
          console.log("CUSTOS CONSERTOS:", custosConsertosExt);

          
        }}
      >
        Calcular
      </button>
    </div>
  );
}

export default App;
