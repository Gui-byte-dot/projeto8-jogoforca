import React from "react";

export default function App(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // const [valor, setValor] = React.useState(false);
    // const mostrar = () => setValor(true);
    const [valor, setValor] = React.useState([]);
    //    const task = [];
    // function mostrar(index){
    //     console.log(alfabeto[index])
    // }

function mostrar(index){
    let novoArray = [...valor, alfabeto[index]];
    setValor(novoArray);
    console.log(novoArray)
    console.log(novoArray[novoArray.length -1].includes('a'))
}
    return(
      
        <>
            <div class="forca">
                <img src="forca0.png" alt="forca" />
            </div>
            <div class="letras">
                {alfabeto.map((letra,index) => (<button key={index} onClick={() => mostrar(index)}>{letra}</button>))}
            </div>
            <div>
            </div>
            
        </>
    )
}

// {valor ? <p>{alfabeto[props.index]}</p> : null}
// () => console.log(alfabeto[index])
// () => setValor(alfabeto[index])