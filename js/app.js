"use strict";
/**
 * document.querySelectorAll  Para seleccionar los artículos
 * document.querySelector Para los botones
 * 
 * nodo.addEventListener
 * 
 * for(){
 * }
 * 
 * while(){
 * }
 * 
 * do{
 * }while();
 */

//Variables
//Capturo las etiquetas articulo en html
const a1 = document.querySelectorAll(".a1");
const a2 = document.querySelectorAll(".a2");
const a3 = document.querySelectorAll(".a3");

let numbers = [1, 2, 3];


//Funciones



const ordenarFor = (evento) => {
    evento.preventDefault();//Evito que se haga el evento "que el enlace vaya a su destino (href)"
    //console.log("For: orden ascendente")
    // for (let i = 0; i < numbers.length; i++) {
    //     console.log(`Posición ${i}:${numbers[i]}`)
    // }

    // console.log("For: orden descendente")
    // for (let i = numbers.length-1; i >=0; i--) {
    //     console.log(`Posición ${i}:${numbers[i]}`)
    // }



    let p1 = a1[1].firstElementChild.nextElementSibling;
    let p2 = p1.nextElementSibling;

    p1.innerHTML = "<h6 style=\"\"color:red;font-weight:bold\">For: orden ascendente</h6>";
    for (let i = 0; i < numbers.length; i++) {
        p1.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`;
    };

    p2.innerHTML = "<h6 style=\"\"color:red;font-weight:bold\">For: orden descendente</h6>";
    for (let i = numbers.length - 1; i >= 0; i--) {
        p2.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`;
    };
};

const ordenarWhile = (e) => {
        e.preventDefault();
        let numbers = [1, 2, 3];
        let x = 0;
        while (x < numbers.length) {
            console.log(`Posición ascendente ${x}:${numbers[x]}`)
            x = x + 1; //x++
        }

        x = numbers.length - 1;

        while (x >= 0) {
            console.log(`Posición descendente ${x}:${numbers[x]}`);
            x--;
        }
    };
const ordenarDoWhile = (e) => {
        e.preventDefault();
        let numbers = [1, 2, 3];
        
        //Metodo forEach
        numbers.forEach(
            (valor,indice,array) => {
                console.log(`${valor}-${indice}-Array[${array}]`)
            }
        )

};




    //Escuchar Botones
    document.querySelector("#b1")
        .addEventListener(
            "click",
            ordenarFor
        );

    document.querySelector("#b2")
        .addEventListener(
            "click",
            ordenarWhile
        );

    document.querySelector("#b3")
        .addEventListener(
            "click",
            ordenarDoWhile
        );