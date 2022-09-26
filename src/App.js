import React, { useState } from "react";
import palavras from "./palavras";
import styled from 'styled-components';


function comparador() {
    return Math.random() - 0.5;
}
let newpalavra = (palavras.sort(comparador));

export default function App(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'á', 'é', 'í', 'ó', 'ú', 'ç'];
    const [valor, setValor] = React.useState([]);
    const imagens = ["forca0.png", "forca1.png", "forca2.png", "forca3.png", "forca4.png", "forca5.png", "forca6.png"];
    const [acerto, setAcerto] = React.useState(0);
    const [erro, setErro] = React.useState(0);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [pesquisa, setPesquisa] = useState("");

    function pesquisar() {
        let input = document.querySelector(".palavrasinput input");
        let letras = document.querySelectorAll(".letras");
        input.disabled = true;
        letras.disabled = true;
        if (pesquisa === novapalavra) {
            setShow2(true)
            setShow(false);
        } else {
            setShow2(false);
            setShow(false)
            setShow3(current => !current);
            setErro(false);
        }
    }
    function carregar() {
        window.location.reload();
    }

    const handleClick = event => {
        setShow2(false);
        setShow3(false);
        setShow(novapalavra2);
    }

    const handleClick1 = (e) => {
        console.log("this is working fine");
        e.preventDefault();
        e.target.style.backgroundColor = '#A9A9A9';
        e.target.style.color = '#808080';
        e.target.disabled = true;

    }




    // let novapalavra = 'câmera'.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let novapalavra = (newpalavra[0]);
    let novapalavra1 = novapalavra.split('');
    console.log(newpalavra[0]);
    let novapalavra2 = Array(novapalavra1.length).fill('_');
    const [novo, setNovo] = React.useState(novapalavra2);


    function mostrar1(arr1, arr2, a) {
        return (arr1.map((chr, idx) => (arr2.map((x, index) => { if (x === a) return index }).filter
            (item => item !== undefined)[0] === idx) ? a : chr)).map((chr, idx) => (arr2.map((x, index) => { if (x === a) return index }
            ).filter(item => item !== undefined)[1] === idx) ? a : chr).map((chr, idx) => (arr2.map((x, index) => { if (x === a) return index }
            ).filter(item => item !== undefined)[2] === idx) ? a : chr).map((chr, idx) => (arr2.map((x, index) => { if (x === a) return index }
            ).filter(item => item !== undefined)[3] === idx) ? a : chr)
    }

    function mostrar(index) {
        let novoArray = [...valor, alfabeto[index]];
        setValor(novoArray);
        console.log(palavras.indexOf('tabacaria'));


        if (novapalavra1.includes(novoArray[novoArray.length - 1]) === true) {
            setAcerto(acerto + 1);


            if (acerto === 0) {
                console.log('ola');
                let novapalavra3 = mostrar1(novapalavra2, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra3)
                localStorage.setItem('links1', JSON.stringify(novapalavra3));
                console.log(novapalavra);



            }

            else if (acerto === 1) {
                let stored = JSON.parse(localStorage.getItem('links1'));
                let novapalavra4 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                console.log(stored);
                setNovo(novapalavra4);
                localStorage.setItem('links2', JSON.stringify(novapalavra4));
                console.log(stored.length);
            } else if (acerto === 2) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra5 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra5);
                localStorage.setItem('links2', JSON.stringify(novapalavra5));

            } else if (acerto === 3) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra6 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra6);
                localStorage.setItem('links2', JSON.stringify(novapalavra6));

            } else if (acerto === 4) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra7 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra7);
                localStorage.setItem('links2', JSON.stringify(novapalavra7));


            } else if (acerto === 5) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra8 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra8);
                localStorage.setItem('links2', JSON.stringify(novapalavra8));


            } else if (acerto === 6) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra9 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra9);
                localStorage.setItem('links2', JSON.stringify(novapalavra9));

            } else if (acerto === 7) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra10 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra10);
                localStorage.setItem('links2', JSON.stringify(novapalavra10));
            } else if (acerto === 8) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra11 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra11);
                localStorage.setItem('links2', JSON.stringify(novapalavra11));
            } else if (acerto === 9) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra12 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra12);
                localStorage.setItem('links2', JSON.stringify(novapalavra12));
            } else if (acerto === 10) {
                let stored = JSON.parse(localStorage.getItem('links2'));
                let novapalavra13 = mostrar1(stored, novapalavra1, novoArray[novoArray.length - 1]);
                setNovo(novapalavra13);
                localStorage.setItem('links2', JSON.stringify(novapalavra13));
            }




        } else {
            console.log("ok");
            setErro(erro + 1);


        }

    }



    return (

        <>
            <div class="forca">
                {show3 ? (<ErroDireto src={imagens[6]} alt="imagem" />) : <UmErro src={imagens[erro]} alt="forca"/>}
                <div class="org">
                    <EscolherPalavra onClick={handleClick} data-identifier="choose-word">Escolher palavra</EscolherPalavra>
                    <ReiniciarJogo onClick={carregar} style={{ marginTop: "20px", backgroundColor: "blue" }}>Reiniciar o jogo</ReiniciarJogo>
                    {show && (<div class="underlines" className={novo.includes('_') === false ? 'corcerta' : ''}>
                        <div className={imagens[erro].includes("forca6.png") ? 'corerrada' : ''}>{imagens[erro].includes("forca6.png") ? <div class="palavraerrada">{novapalavra1.map((u) => (<p>{u}</p>))}</div> :
                            <div class="palavraescolhida">{novo.map((t) => (<p>{t}</p>))}</div>}</div>
                    </div>)}
                    {show2 && (<PalavraInteiraCerta>{novapalavra1.map((t) => (<p>{t}</p>))}</PalavraInteiraCerta>)}
                    {show3 && (<PalavraInteiraErrada class="palavrainteiraerrada">{novapalavra1.map((t) => (<p>{t}</p>))}</PalavraInteiraErrada>)}


                </div>
            </div>
            <div class="letras">
                {alfabeto.map((letra, index) => (<div onClick={() => mostrar(index)}><button key={index} onClick={handleClick1}>{letra}</button></div>))}
            </div>
            <div class="palavrasinput">
                <p>Já sei qual é a palavra</p>
                <input placeholder="Pesquisar" onChange={e => setPesquisa(e.target.value)}  ></input>
                <button onClick={pesquisar} data-identifier="guess-button">Chutar</button>
            </div>

        </>
    )
}

const ErroDireto = styled.img`
    width:700px;
`;
const UmErro = styled.img`
    width:700px;
`
const EscolherPalavra = styled.button`
    margin-left: 60px;
`
const ReiniciarJogo = styled.button`
    margin-left: 60px;
`
const PalavraInteiraCerta = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;

    p{
        margin-left: 10px;
        font-size: 60px;
        color:green;
        margin-top: 300px;
    }
`
const PalavraInteiraErrada = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;

    p{
        margin-left: 10px;
        font-size: 60px;
        color:red;
        margin-top: 300px;
    }
`
const Pesquisar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    align-items: center;
`