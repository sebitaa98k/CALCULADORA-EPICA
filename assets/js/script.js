import {sumar,restar} from './operaciones.js'

let n1= document.getElementById("numero1");
let n2= document.getElementById("numero2");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let resultado = document.getElementById("resultado");


let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");

btnSumar.addEventListener("click", function(){

    error1.innerHTML= "";
    error2.innerHTML= "";

    if(n1.value === ""){
        error1.innerHTML = "Debes agregar el primer numero";
        error1.style.color ="red";
        return
    }


    if(n2.value === ""){
        error2.innerHTML = "Debes agregar el segundo numero";
        error2.style.color ="red";
        return
    }


    resultado.innerHTML = sumar(n1,n2);
    resultado.style.color = "blue";
    resultado.style.fontSize = "1.2rem";

});

btnRestar.addEventListener("click", function(){

    error1.innerHTML= "";
    error2.innerHTML= "";

    if(n1.value === ""){
        error1.innerHTML = "Debes agregar el primer numero";
        error1.style.color ="red";
        return
    }


    if(n2.value === ""){
        error2.innerHTML = "Debes agregar el segundo numero";
        error2.style.color ="red";
        return
    }


    resultado.innerHTML = restar(n1,n2);
    resultado.style.color = "blue";
    resultado.style.fontSize = "1.2rem";

});