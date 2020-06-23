let inputEle = document.getElementById('input1');
let historicoEle = document.getElementById('historico');

let signoOperaciones = ['+', '-', '*', '/'];

let operaciones = {
    suma: (a, b) => {
        return +a + b;
    },
    resta: (a, b) => {
        return a - b;
    },
    dividir: (a, b) => {
        if (b === 0) return;
        return a / b
    },
    multiplicar: (a, b) => {
        return a * b;
    }
}


function add(value) {


    let operaciones = inputEle.value;
    let ultimoCaracter = inputEle.value.substr(-1);

    // Comprobamos si es un signo, y en tal caso lo reemplazamos aunque sea el mismo signo 
    if (signoOperaciones.lastIndexOf(value) >= 0 && signoOperaciones.lastIndexOf(ultimoCaracter) >= 0) {
        if (ultimoCaracter.length > 0)
            inputEle.value = inputEle.value.slice(0, -1) + value;
    } else {
        operaciones += value;
        inputEle.value = operaciones;
    }

}

function reemplazarSignoOperacion(signo) {

    let operaciones = inputEle.value;
    if (signoOperaciones.lastIndexOf(signo) >= 0) {
        operaciones = operaciones.replace('+', signo);
        operaciones = operaciones.replace('-', signo);
        operaciones = operaciones.replace('/', signo);
        operaciones = operaciones.replace('*', signo);
    }
    inputEle.value = operaciones + signo;

}

function calcular() {

    const signoOP = signoOperaciones.find(v => inputEle.value.indexOf(v) >= 0);

    let opArray = inputEle.value.split(signoOP);

    realizarOperacionesAleatorio(+opArray[0], opArray[1], signoOP);

    borrarOperaciones();
}


function borrarHistorial() {
    historicoEle.value = '';
}


function borrarOperaciones() {
    inputEle.value = '';
}


function borrarCaracteres() {

    inputEle.value = inputEle.value.slice(0, -1);
}

function realizarOperacionesAleatorio(valorA, valorB, op) {

    switch (op) {
        case '+':
            historicoEle.value += +valorA + '+' + valorB + " = " + operaciones.suma(+valorA, valorB) + '\n';
            break;

        case '-':
            historicoEle.value += valorA + '-' + valorB + " = " + operaciones.resta(valorA, valorB) + '\n';
            break;

        case '/':
            historicoEle.value += valorA + '/' + valorB + " = " + operaciones.dividir(valorA, valorB) + '\n';
            break;

        case '*':
            historicoEle.value += valorA + '*' + valorB + " = " + operaciones.multiplicar(valorA, valorB) + '\n';
            break;

        default:
            historicoEle.value += valorA + '\n';
            break;
    }
}