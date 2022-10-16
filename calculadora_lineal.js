//este es el archivo de luis pero modificado para mi calculadora LOOOOOOOOOOL

//convierto los numeros a un arrays yujuu
const botonnumeros = document.getElementsByName('data-number');
const botonoperacion = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botonborrar = document.getElementsByName('data-borrar')[0];
const boton_x = document.getElementsByName('data-x');
var resultado = document.getElementsByName('display');
var opactual = '';
var opanterior = '';
var operacion = undefined;
var x = 0;
var num_reciente = 0;
var num_ante = 0;
var reiniciar = false;
var nega = false;
var junto = false;

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
    analizar();
    actualizardisplay();
});

botonborrar.addEventListener('click', function () {
    clear();
    actualizardisplay();
});

boton_x.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarx(boton.innerText);
    })
});

function Selectoperacion(op) {
    operacion = op.toString();
    agregaroperacion(operacion);
    
}

function analizar() {
    let nume = parseInt(num_reciente);
    let ordenada = num_reciente;
    let proce = nume * -1;
    let abscisa_o = proce / parseInt(x);

    if(x < 0){
        var inclina = "descendente";
    }
    else if(x > 0){
        var inclina = "ascendente";
    }
    else if(x == 0){
        var inclina = "constante";
    }

    let negatividad = "(-∞ ; "+ abscisa_o + ")";
    let positiviad = "(" + abscisa_o + " ; +∞)"

    console.log(inclina);
    console.log(negatividad);
    console.log(positiviad);
    console.log(abscisa_o);
    console.log(ordenada);
    operacion = undefined;
    reiniciar = true;

    window.alert("Analisis de tu funcion: \n la funcion es "+inclina+"\n la abscisa al origen es "+abscisa_o+"\n la ordenada al origen es "+ordenada+"\n el intervalo de positividad es: "+positiviad+"\n el intervalo de negatividad es: "+negatividad)
}


//toString captura el dato en forma de texto por que el display esta en texto lol
function agregarnumero(num) {
    if(reiniciar == true){
        opactual = '';
        reiniciar = false;
    }
    if(junto == true){
        num_reciente = num_reciente + num.toString();
    }
    else{
        num_ante = num_reciente;
        num_reciente = num.toString();
        if(nega == true){
            num_reciente = "-" + num_reciente;
            nega = false;
        }
        junto = true;
    }
    
    opactual = opactual.toString() + num.toString();
    actualizardisplay();
}

function agregarx(num) {
    x = num_reciente;
    num_reciente = num_ante;
    opactual = opactual.toString() + num.toString();
    actualizardisplay();
    //console.log(x);
    //console.log(opactual);
    //console.log(num_reciente);
}

function agregaroperacion(op) {
    opactual = opactual.toString() + op.toString();
    actualizardisplay();
    if(op.toString() == "-") {
        nega = true;
    }
    junto = false;
}

function clear() {
    opactual = '';
    opanterior = '';
    operacion = undefined;
} 

function actualizardisplay() {
    display.value = "F(x) = " + opactual;
}

clear();



