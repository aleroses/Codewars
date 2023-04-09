/* Un cuadrado de cuadrados
Te gustan los bloques de construcción. Te gustan especialmente los bloques de construcción que son cuadrados. ¡Y lo que más te gusta es organizarlos en un cuadrado de bloques de construcción cuadrados!

Sin embargo, a veces, no puedes organizarlos en un cuadrado. ¡En cambio, terminas con un rectángulo ordinario! ¡Esas malditas cosas! Si tuvieras una forma de saber si actualmente estás trabajando en vano... ¡Espera! ¡Eso es todo! Solo tienes que comprobar si tu número de bloques de construcción es un cuadrado perfecto .

Tarea
Dado un número entero, determine si es un número cuadrado :

En matemáticas, un número cuadrado o cuadrado perfecto es un número entero que es el cuadrado de un número entero; en otras palabras, es el producto de algún número entero consigo mismo.

Las pruebas siempre usarán algún número entero, así que no se preocupe por eso en lenguajes de tipo dinámico.

Ejemplos
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

/* var isSquare = function(n){
    let resul = Math.sqrt(n);
    let test = Math.floor(resul) * Math.floor(resul) == n ? true : false;

    console.log(resul, test); 

    if(test){
        return `${test}, ${n}: is a square number (${resul} * ${resul})`;
    }else if(n < 0){
        return `${test}, ${n}: Negative numbers cannot be square numbers`;
    }else {
        return `${test}, ${n}: is not a square number`;
    };
}

isSquare(-1); */
/* isSquare(0);
isSquare(3);
isSquare(4);
isSquare(25);
isSquare(26); */



// Solution aceptada 
/* var isSquare = function(n){
    let resul = Math.sqrt(n);
    let test = Math.floor(resul) * Math.floor(resul) == n ? true : false;

    if(test){
        return true;
    }else if(n < 0){
        return false;
    }else {
        return false;
    };
}

isSquare(-1); */

// Community solutions 
/* function isSquare(n) {
    number = Math.sqrt(n)
    console.log(number, Math.sqrt(n) % 1 === 0);
    return Math.sqrt(n) % 1 === 0;
}

isSquare(3); */


const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log(isSquare(4));