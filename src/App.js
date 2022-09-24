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
    let novapalavra = palavras[0];
    let novapalavra1 = novapalavra.split('');
    let novapalavra2 = Array(novapalavra1.length).fill('_');
    let novapalavra5 = "_______";
    const [novo, setNovo] = React.useState(novapalavra2.map((seta) => <p class="underline">{seta}</p>));
    let novapalavra4 = {};
    let obj1 = [];


    function mostrar1(arr1,arr2,a){
        return (arr1.map((chr, idx) => (arr2.map( (x,index) => { if(x === a) return index}).filter(item => item !== undefined)[0] === idx) ? a : chr)).map((chr, idx) => (arr2.map( (x,index) => { if(x === a) return index}).filter(item => item !== undefined)[1] === idx) ? a : chr)}
    function mostrar(index){
    // let novaImagem = [...image, imagens[index]];
    let novoArray = [...valor, alfabeto[index]];
    setValor(novoArray);

    // setState((prevVals) => [...prevVals,newVals])


    // const handleClick = () => {
    //     // 👇️ push to end of state array
    //     setNames(current => [...current, 'Carl'])
    // updateMyArray( arr => [...arr, `${arr.length}`]);

    
    if (novapalavra1.includes(novoArray[novoArray.length -1]) === true){
        setAcerto(acerto + 1);
        if(acerto >= 0){
            // let obj = mostrar1(novapalavra2,novapalavra1,novoArray[novoArray.length -1]);
            let novapalavra3 = (novapalavra2.map((chr, idx) => (novapalavra1.map( (x,index) => { if(x === novoArray[novoArray.length -1]) return index}).filter(item => item !== undefined)[0] === idx) ? novoArray[novoArray.length -1] : chr)).map((chr, idx) => (novapalavra1.map( (x,index) => { if(x === novoArray[novoArray.length -1]) return index}).filter(item => item !== undefined)[1] === idx) ? novoArray[novoArray.length -1] : chr);
            setNovo(novapalavra3);
            console.log(novapalavra2);
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
                {novo}
            {/* {acerto === -1 ? <p>Olá</p> : novapalavra2.map((seta) => <p class="underline">{seta}</p>)}      */}
            </div>
            {/* <button onClick={() => console.log(mostrar1(novapalavra2,novapalavra1,'a'))}></button> */}
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
