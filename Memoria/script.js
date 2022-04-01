let order = [];
let clickedOrder = [];
let score = 0;

/* 0 = verde 
    1=vermelho
    2=amarelo
    3=azul
*/

const blue = document.querySelector('.blue');
const red =  document.querySelector('.red');
const yellow =  document.querySelector('.yellow');
const green =  document.querySelector('.green');

/* Criando ordem aleatória de cor */
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order [i]);
        lightColor(elementColor,Number(i)+1);
    }

    
}

// Acende proxima cor
let lightColor= (element,number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected'); 
    },number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });

}

//checar se os botoes clicados sao os mesmos da ordem gerada no jogo

let checkOrder = ()=> {
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
     }

     if(clickedOrder.length == order.length){
         alert(`Pontuacao: ${score}\n Voce acertou ! Iniciando proximo nível!`)
         nextLevel();
     }
}

// funcao para clicar

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=> {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)

    
}

// funcao que retorna a cor 
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }
    else if (color ==1){
        return red;
    }
    else if (color ==2){
        return yellow;
    }
    else if (color ==3){
        return blue;
    }
 
}

//funcao para proximo nivel do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();

}

// funcao para game over
let lose = () =>{
    alert(`Pontuação: ${score}\n Voce perdeu o jogo !`);
    order=[];
    clickedOrder = []

    playGame();
}

let playGame = () => {
    alert('bem vindo ao genesis! iniciando novo jogo')
    score = 0;
    
    nextLevel();
}

green.onclick =() => click(0);
red.onclick =() => click(1);
yellow.onclick =() => click(2);
blue.onclick =() => click(3);

playGame();