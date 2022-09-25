import React, { useState } from "react";
import palavras from "./palavras";

function comparador() {
    return Math.random() - 0.5;
}
let newpalavra = (palavras.sort(comparador));

export default function App(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // const mostrar = () => setValor(true);
    const [valor, setValor] = React.useState([]);
    const imagens = ["forca0.png", "forca1.png", "forca2.png","forca3.png","forca4.png","forca5.png","forca6.png"];
    const [acerto, setAcerto] = React.useState(0);
    const [erro, setErro] = React.useState(0);
    const [show, setShow] = useState(false);
    const [show1,setShow1] = useState(false);

    console.log(palavras.length);
    const handleClick = event => {
        setShow(current => !current)
    }
    const handleClick1 = () => {
        setShow1(curr => !curr);

    }
    
    
       

     // const [image, setImage] = React.useState([]);
    // array3.map((string, i) => string.replace('a','*'));
    let novapalavra = newpalavra[0];
    let novapalavra1 = novapalavra.split('');
    let novapalavra2 = Array(novapalavra1.length).fill('_');
    const [novo, setNovo] = React.useState(novapalavra2);
    let novapalavra4 = {};
    let obj1 = [];
    // const [novo, setNovo] = React.useState(novapalavra2.map((seta) => <p class="underline">{seta}</p>));
    // let novapalavra3 = (novapalavra2.map((chr, idx) => (novapalavra1.map( (x,index) => { if(x === novoArray[novoArray.length -1]) return index}).filter(item => item !== undefined)[0] === idx) ? novoArray[novoArray.length -1] : chr)).map((chr, idx) => (novapalavra1.map( (x,index) => { if(x === novoArray[novoArray.length -1]) return index}).filter(item => item !== undefined)[1] === idx) ? novoArray[novoArray.length -1] : chr);
    // function imprimir(arr1,arr2,a){
    //     return arr1.map((chr, idx) => (arr2.map( (x,index) => { if(x === a) return index}).filter(item => item !== undefined)[0] == idx) ? a : chr)}


    function mostrar1(arr1,arr2,a){
        return (arr1.map((chr, idx) => (arr2.map( (x,index) => { if(x === a) return index}).filter
        (item => item !== undefined)[0] === idx) ? a : chr)).map((chr, idx) => (arr2.map( (x,index) => { if(x === a) return index}
        ).filter(item => item !== undefined)[1] === idx) ? a : chr).map((chr, idx) => (arr2.map( (x,index) => { if(x === a) return index}
        ).filter(item => item !== undefined)[2] === idx) ? a : chr).map((chr, idx) => (arr2.map( (x,index) => { if(x === a) return index}
        ).filter(item => item !== undefined)[3] === idx) ? a : chr)}
        
    function mostrar(index){
    // let novaImagem = [...image, imagens[index]];
    let novoArray = [...valor, alfabeto[index]];
    setValor(novoArray);
    console.log(palavras.indexOf('tabacaria'));

    if (novapalavra1.includes(novoArray[novoArray.length -1]) === true){
        setAcerto(acerto + 1);
        

        if(acerto === 0){
            console.log('ola');
            // let idx = novapalavra1.indexOf(novoArray[novoArray.length -1]);
            let novapalavra3 = mostrar1(novapalavra2,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra3)
            localStorage.setItem('links1', JSON.stringify(novapalavra3));
            console.log(novapalavra);
            
            
            // let novapalavra4 =  mostrar1(novapalavra3,novapalavra1,novoArray[novoArray.length -1]);
            // setNovo(novapalavra3);
            // console.log(novapalavra3);
        } 
       
        else if (acerto === 1){
            let stored = JSON.parse(localStorage.getItem('links1'));
            let novapalavra4 = mostrar1(stored, novapalavra1, novoArray[novoArray.length -1]);
            console.log(stored);
            setNovo(novapalavra4);
            localStorage.setItem('links2',JSON.stringify(novapalavra4));
            console.log(stored.length);
        } else if(acerto === 2){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra5 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra5);
            localStorage.setItem('links2',JSON.stringify(novapalavra5));
            
        } else if(acerto === 3){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra6 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra6);
            localStorage.setItem('links2',JSON.stringify(novapalavra6));
           
        } else if(acerto === 4){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra7 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra7);
            localStorage.setItem('links2',JSON.stringify(novapalavra7));
            

        } else if (acerto === 5){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra8 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra8);
            localStorage.setItem('links2',JSON.stringify(novapalavra8));
           
            
        } else if (acerto === 6){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra9 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra9);
            localStorage.setItem('links2',JSON.stringify(novapalavra9));
            
        } else if(acerto === 7){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra10 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra10);
            localStorage.setItem('links2',JSON.stringify(novapalavra10));
        } else if(acerto === 8){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra11 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra11);
            localStorage.setItem('links2',JSON.stringify(novapalavra11));
        } else if(acerto === 9){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra12 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra12);
            localStorage.setItem('links2',JSON.stringify(novapalavra12));
        } else if(acerto === 10){
            let stored = JSON.parse(localStorage.getItem('links2'));
            let novapalavra13 = mostrar1(stored,novapalavra1,novoArray[novoArray.length -1]);
            setNovo(novapalavra13);
            localStorage.setItem('links2',JSON.stringify(novapalavra13));
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
                <button onClick={handleClick}>Escolher palavra</button>
            </div>
            <div class="letras">
                {alfabeto.map((letra,index) => (<button key={index}  onClick={() => {mostrar(index)}}>{letra}</button>))}
            </div>
            {show && (<div class="underlines" className={novo.includes('_') === false ? 'corcerta' : ''}>
                <div className={imagens[erro].includes("forca6.png") ? 'corerrada' : ''}>{imagens[erro].includes("forca6.png") ? <div class="palavraerrada">{novapalavra1.map((u) => (<p>{u}</p>))}</div> : <div class="palavraescolhida">{novo.map((t) => (<p>{t}</p>))}</div>}</div>
            </div>)}

        </>
    )
}

// className={(novo.includes('_') === false) ? 'corstring' : ''}
//RASCUNHOS
    // const [valor, setValor] = React.useState(false);
// function mostrar(index){
    //     console.log(alfabeto[index])
    // }
// {valor ? <p>{alfabeto[props.index]}</p> : null}
// () => console.log(alfabeto[index])
// () => setValor(alfabeto[index])
// {acerto === 0 ? novapalavra2.map((string, i) => string.replace('_','a')) : }
