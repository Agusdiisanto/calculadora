
const botoneNumeros = document.getElementsByName('numero');
const botonOperaciones = document.getElementsByName('operacion');
const botonIgual = document.getElementsByName('igual')[0];
const botonBorrador = document.getElementsByName('borrador')[0];

console.log(botoneNumeros);
console.log(botonOperaciones);
console.log(botonIgual);
console.log(botonBorrador);

var resultado = document.getElementById('result');

var operacionActual = '';
var operacionAnterior = '';
var operacion = '';

botoneNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});


botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonBorrador.addEventListener('click', function(){
    limpiar();
    actualizarDisplay();
});


function agregarNumero(numero){
    operacionActual = operacionActual.toString() + numero.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    resultado.value = operacionActual;
}

function limpiar() {
    operacionActual = '';
    operacion = undefined;
    operacionAnterior = '';
}

function selectOperacion(op){
    if(operacionActual === '') return;
    if(operacionAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
} 

function calcular(){
    var calculo;
    const anterior = parseFloat (operacionAnterior);
    const actual = parseFloat(operacionActual);

    if(isNaN(anterior) || isNaN (actual)) return;

    switch(operacion){
        case '+': 
            calculo = anterior + actual;
            break;
        case '-': 
            calculo = anterior - actual;
            break;a
        case '*': 
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
        default:
            return; 
    }

    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}


limpiar();