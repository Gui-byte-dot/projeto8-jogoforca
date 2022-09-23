import React from "react";
import palavras from "./palavras";

export default function App(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // const mostrar = () => setValor(true);
    const [valor, setValor] = React.useState([]);
    const imagens = ["forca0.png", "forca1.png", "forca2.png","forca3.png","forca4.png","forca5.png","forca6.png"];
    const [acerto, setAcerto] = React.useState(0);
    const [erro, setErro] = React.useState(0)
    // const [image, setImage] = React.useState([]);
    // array3.map((string, i) => string.replace('a','*'));
    const [novo, setNovo] = React.useState()
    let novapalavra = palavras[0];
    let novapalavra1 = novapalavra.split('');
    let novapalavra2 = Array(novapalavra1.length).fill('_');
    let novapalavra5 = "_______"



function mostrar(index){
    // let novaImagem = [...image, imagens[index]];
    let novoArray = [...valor, alfabeto[index]];
    setValor(novoArray);
    console.log(novoArray);
    console.log(novapalavra1);
    console.log(novapalavra2);
    // for(let i = 0; novapalavra2.length; i++){
    //     if()
    // }
    // novapalavra2.map((string, i) => )
    
//     const names = ["Matheus", "João", "Pedro"]
// const index = names.indexOf("João");
// if (index !== -1) {
//     names[index] = "Josias";
// }
// console.log(names) // ["Matheus", "Josias", "Pedro"]
    // const idx = novapalavra1.indexOf("a");
    // if(idx !== -1){
    //     novapalavra1[idx] = '_';
    // }
    // console.log(novapalavra1);
    // myText = myText.replace(/\./g,'')
    // let novapalavra3 = (novapalavra.replaceAll('a','_'));
    // let novapalavra4 = (novapalavra3.split(''));
    
    if (novapalavra1.includes(novoArray[novoArray.length -1]) === true){
        setAcerto(acerto + 1);
        if(acerto >= 0){
            console.log("isssssooooo");
            setNovo(((novapalavra5.replaceAll('_',novoArray[novoArray.length -1])).split('')));
                // array3.map((string, i) => string.replace('a','*'));

        }
    } else {
        console.log("ok");
        setErro(erro + 1);


    }
   
}
// const elements = novapalavra2.map(
//     seta => 
//         <p>{seta}</p>
// )


    return(
      
        <>
            <div class="forca">
                <img src={imagens[erro]} alt="forca" />
            </div>
            <div class="letras">
                {alfabeto.map((letra,index) => (<button key={index} onClick={() => mostrar(index)}>{letra}</button>))}
            </div>
            <div class="underlines">
                {/* {{novo}.map((seta) => <p class="underline">{seta}</p>)} */}
                {novo}

            </div>
        </>
    )
}

//RASCUNHOS
    // const [valor, setValor] = React.useState(false);
// function mostrar(index){
    //     console.log(alfabeto[index])
    // }
// {valor ? <p>{alfabeto[props.index]}</p> : null}
// () => console.log(alfabeto[index])
// () => setValor(alfabeto[index])
// {acerto === 0 ? novapalavra2.map((string, i) => string.replace('_','a')) : }
