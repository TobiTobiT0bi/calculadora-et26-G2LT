//convierto los numeros a un arrays yujuu
const botonnumeros = document.getElementsByName('data-number');
const botonoperacion = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botonborrar = document.getElementsByName('data-borrar')[0];
var resultado = document.getElementsByName('display');
var opactual = '';
var opanterior = '';
var operacion = undefined;

//Selectoperacion(boton,innerText); recibe el texto del boton,numero

botonnumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarnumero(boton.innerText);
    })
});

botonoperacion.forEach(function (boton) {
    boton.addEventListener('click', function () {
        Selectoperacion(boton.innerText);
    })
});

botonigual.addEventListener('click', function () {
    calcular();
    actualizardisplay();
});

botonborrar.addEventListener('click', function () {
    clear();
    actualizardisplay();
});

function Selectoperacion(op) {
    if (opactual === '') return;
    if (opanterior !== '') {
        calcular()
    }
    operacion = op.toString();
    opanterior = opactual;
    opactual = '';
}

function calcular() {
    var calculo;
    //convierto los string a numeros 
    const anterior = parseFloat(opactual);
    const actual = parseFloat(opanterior);
    if (isNaN(anterior) && isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = actual + anterior;
            break;
        case '-':
            calculo = actual - anterior;
            break;
        case '*':
            calculo = actual * anterior;
            break;
        case '/':
            calculo = actual / anterior;
            break;
        ////////////////////////////////////////////////////
        case 'Tan':
            calculo = Math.tan(actual);
            break;
        case 'CoTan':
            calculo = Math.atan(actual);
            break;
        case 'Cos':
            calculo = Math.cos(actual);
            break;
        case 'CoCos':
            calculo = Math.acos(actual);
            break;
        case 'Sen':
            calculo = Math.sen(actual);
            break;
        case 'CoSen':
            calculo = Math.asen(actual);
            break;
        ////////////////////////////////////////////////////
        case '!':
            var total = 1;
            for (i = 1; i <= actual; i++) {
                total = total * i;
            }
            calculo = total;
            break;
        case 'CUIL':
            calculo = actual + anterior;
            break;
        default:
            return;
    }
    opactual = calculo;
    operacion = undefined;
    opanterior = '';
}


//toString captura el dato en forma de texto por que el display esta en texto lol
function agregarnumero(num) {
    opactual = opactual.toString() + num.toString();
    actualizardisplay();
}

function clear() {
    opactual = '';
    opanterior = '';
    operacion = undefined;
} 

function actualizardisplay() {
    display.value = opactual;
}

clear();



