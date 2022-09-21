import React from "react";

export default function App(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [valor, setValor] = React.useState(false);
    const mostrar = () => setValor(true);
    
    return(
      
        <>
            <div class="forca">
                <img src="forca0.png" alt="forca" />
            </div>
            <div class="letras">
                {alfabeto.map((letra,index) => (<button key={index} onClick={mostrar}>{letra}</button>))}
            </div>
            <div>
                {valor ? <p>{alfabeto[props.index]}</p> : null}
            </div>
            
        </>
    )
}

