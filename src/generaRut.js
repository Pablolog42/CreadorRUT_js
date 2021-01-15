const prompt = require('prompt-sync')();



const pondera = [3, 2, 7, 6, 5, 4, 3, 2]


function randint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function multiplicaArray(arr1, arr2){
    multArray = []
    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        multArray[i] = arr1[i] * arr2[i];
     }
     return multArray
}

function imprimeArray(arr){
    let salida = ""

    for (let i = 0; i < arr.length; i++) {
        salida = salida + arr[i].toString(10)
     }
     return salida
}

function generaDigitosRut(){

    let digitosRut = []  

    for (let i = 0; i < 7; i++) {
    digitosRut.push(randint(0,9))
    }

    // Solo puedo partir con 0, 1 o 2
    digitosRut[0] = randint(0,2)

    if (digitosRut[0] == 2){
        let digito2 = randint(0,3) 
        // Si parte con 20 millones, inserta un numero del 0 al 4 en el segundo digito
        digitosRut.splice(1 /*Este es el index*/, 0, digito2);
    }
    else {
    // Si parte con 10 o 0 millones, inserta un digito del 1 al 9
    let digito2 = randint(1,9) 
    digitosRut.splice(1, 0, digito2);
    }

    return digitosRut
}

function generaVerificador(digitosRut){

    let rutPonderado = multiplicaArray(digitosRut, pondera)

    let suma = rutPonderado.reduce((a, b) => a + b, 0)
    let digitoVerificador = 11 - (suma % 11)
    digitoVerificador = digitoVerificador.toString(10)

    if (digitoVerificador == "11"){ 
        digitoVerificador = "0"
    }
    if(digitoVerificador == "10"){
        digitoVerificador = "k"
    }

    return digitoVerificador
}


// ESTO NO FUNCA unu
let n = 500 //Number(prompt("Ingrese el número de RUTs a generar: "));

for(let i = 0; i < n; i++){
    let rut = generaDigitosRut()
    console.log(imprimeArray(rut)+ "-" + generaVerificador(rut))
}


