# Kata 
## 1. A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a _perfect square_.

### Task

Given an integral number, determine if it's a [square number](https://en.wikipedia.org/wiki/Square_number):

> In mathematics, a **square number** or **perfect square** is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will _always_ use some integral number, so don't worry about that in dynamic typed languages.

### Examples

```js
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```

### Traducción 
Un cuadrado de cuadrados
Te gustan los bloques de construcción. Especialmente te gustan los bloques de construcción que son cuadrados. ¡Y lo que te gusta aún más es organizarlos en un cuadrado de bloques de construcción cuadrados!

Sin embargo, a veces no puedes organizarlos en un cuadrado. En su lugar, ¡terminas con un rectángulo normal! ¡Esas cosas malditas! Si solo tuvieras una forma de saber si estás trabajando en vano... ¡Espera! ¡Eso es! Solo tienes que comprobar si el número de bloques de construcción es un cuadrado perfecto.

Tarea
Dado un número entero, determina si es un número cuadrado:

En matemáticas, un número cuadrado o cuadrado perfecto es un entero que es el cuadrado de un entero; en otras palabras, es el producto de un entero consigo mismo.

Las pruebas siempre usarán algún número entero, así que no te preocupes por eso en los lenguajes tipados dinámicamente.

Ejemplos
```
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```

### Solution

Personal solution 
```js
var isSquare = function(n){
    let resul = Math.sqrt(n);
    let test = Math.floor(resul) * Math.floor(resul) == n ? true : false;

    /* console.log(resul, test);  */

    if(test){
        return `${test}, ${n}: is a square number (${resul} * ${resul})`;
    }else if(n < 0){
        return `${test}, ${n}: Negative numbers cannot be square numbers`;
    }else {
        return `${test}, ${n}: is not a square number`;
    };
}

isSquare(-1);
isSquare(0);
isSquare(3);
isSquare(4);
isSquare(25);
isSquare(26);
```

Accepted solution
```js
var isSquare = function(n){
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

isSquare(-1);
```

Community solutions: 
01. Solution 
```js
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
```
Interpretation   
Si el número ingresado luego de pasar por el calculo de su raíz y el modal queda con residuo, entonces no es cuadrado perfecto.  
```js
function isSquare(n) {
    number = Math.sqrt(n)
    console.log(number, Math.sqrt(n) % 1 === 0);
    return Math.sqrt(n) % 1 === 0;
}

isSquare(3);
// 1.7320508075688772 false
```
02. Solution 
```js
const isSquare = n => Number.isInteger(Math.sqrt(n));
console.log(isSquare(4));
```
Interpretation    
La función flecha llamada "isSquare" recibe un parámetro "n", que es el número que se va a evaluar. Utilizando el método Math.sqrt() calculamos la raíz cuadrada de "n" para luego usando el método "Number.isInteger()", devolver verdadero si el número pasado como argumento es un entero, y falso si no lo es.

Si el resultado es un número entero, entonces la función devuelve verdadero (true), lo que indica que el número "n" es un cuadrado perfecto. Si el resultado no es un número entero, la función devuelve falso (false), lo que indica que el número "n" no es un cuadrado perfecto.

```js
```

```js
```

[Chat AI Sage](https://poe.com/Sage)