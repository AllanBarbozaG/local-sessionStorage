import { useState, useEffect } from "react";

function Teste() {
  const [nInputs, setnInputs] = useState([""]);

  useEffect(() => {
    console.log(nInputs);
  }, [nInputs]);

  return (
    <>
      <button
        onClick={() => {
          setnInputs([...nInputs, ""]);
        }}
      >
        Adicionar campo
      </button>

      {nInputs.map((el, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            value={el}
            onChange={(e) => {
              nInputs[index] = e.target.value;
              setnInputs([...nInputs]);
            }}
            placeholder={"id pneu" + (index + 1)}
            key={index}
          />
          <button
            onClick={() =>
              setnInputs([
                ...nInputs.filter((_, position) => index != position),
              ])
            }
          >
            Excluir
          </button>
        </div>
      ))}
    </>
  );
}

export default Teste;
