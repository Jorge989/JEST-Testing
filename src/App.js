import { useState } from "react";

import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  //const iniciando a variavel buttonColor com valor 'red'
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  // const recebendo o valor de buttonColor no caso começou com red
  // vareficando se o valor é igual a 'red' se não for recebe 'blue'
  // senao mantem 'red'
  const [disabled, setDisabled] = useState(false);

  // const iniciando a variavel disabled com valor false
  return (
    //retorno da funcao

    <div>
      <button
        // atribui um estilo ao botao backgroundColor recebe o buttonColor
        //que no caso e red
        onClick={() => setButtonColor(newButtonColor)}
        // ao clicar o buttonColor recebe o valor de newButtonColor que recebe o
        //valor de buttonColor que esta red e ele verifica se é red
        // ele muda para blue senao ele permanece red
        disabled={disabled}
        // o disabled ele recebe false no primeiro momento
        // o texto recebe o newButtonColor que esta red inicalmente
        style={{
          backgroundColor: disabled ? "gray" : buttonColor,
          color: "white",
        }}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        // ao clicar no input ele atribui o
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      ></input>
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
