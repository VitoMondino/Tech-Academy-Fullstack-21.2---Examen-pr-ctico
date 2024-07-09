/*1.- Random par o impar(10 ptos).
Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar.
Ejemplo:
Primera iteración: numeroGenerado = 5 // el número es impar
Segunda iteración: numeroGenerado = 12 // el número es par*/
for (let i = 0; i < 5; i++) {
    let numeroGenerado = Math.floor(Math.random() * 100);
    if (numeroGenerado % 2 === 0) {
        console.log(`Iteración ${i + 1}: número generado = ${numeroGenerado} // el número es par`);
    } else {
        console.log(`Iteración ${i + 1}: número generado = ${numeroGenerado} // el número es impar`);
    }
}

/*
2.- Múltiplos de un número dado (10 ptos).
Escribir el código que muestre en consola los múltiplos de un número entero
dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15…..21, etc.
*/

let numero = 10; 
for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
        console.log(i);
    }
}

/*
3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
“hola como estas”.
*/

let cadena = "Hola como te va hoy, este es un trabajo practico";
let caracter = "o";
let contador = 0;

for (let char of cadena) {
    if (char === caracter) {
        contador++;
    }
}

console.log(`El carácter "${caracter}" se repite ${contador} veces en "${cadena}".`);

/*
4.- Invertir un array (10 ptos).
Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
mismo pero invertido.
Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
[7,”cadena”,98,56,34,5,23].
*/

// Función para invertir un array
function invertirArray(arr) {
    return arr.slice().reverse();
}

// Este es el Array original
const arrayOriginal = [23, 5, 34, 56, 98, "cadena", 7];

// Inverti el array
const arrayInvertido = invertirArray(arrayOriginal);

// Muestro resultados en la consola
console.log("Array original:", arrayOriginal);
console.log("Array invertido:", arrayInvertido);

//5= Punto numero 5 del ejercicio Practico

// 1. Clase Persona
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
    }
}

// 2. Clase Jugador
class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Posición: ${this.posicion}`);
    }
}

// 3. Clase Entrenador
class Entrenador extends Persona {
    constructor(nombre, apellido, edad, experiencia, idFederacion = Math.floor(10000 + Math.random() * 90000)) {
        super(nombre, apellido, edad);
        this.experiencia = experiencia;
        this.idFederacion = idFederacion;
    }

    getDetalles() {
        super.getDetalles();
        console.log(`Años de experiencia: ${this.experiencia}, ID Federación: ${this.idFederacion}`);
    }
}

// 4. Clase Equipo
class Equipo {
    constructor(entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles() {
        console.log("Detalles del Entrenador:");
        this.entrenador.getDetalles();
        console.log("\nDetalles de los Jugadores:");
        this.jugadores.forEach(jugador => jugador.getDetalles());
    }
}

// 5.1 Crear jugadores
const jugadores = [
    new Jugador("Emiliano ", "Martínez", 31, "Portero"),
    new Jugador("Cristian", "Romero", 26, "Defensa"),
    new Jugador("Giovani ", "Lo celso", 28, "Medio"),
    new Jugador("Lautaro", "Martínez", 26, "Delantero")
];

// 5.2 Crear entrenador
const entrenador = new Entrenador("Lionel", "Scaloni", 46, 15);

// 5.3 Crear equipo
const equipo = new Equipo(entrenador, jugadores);

// Mostrar detalles del equipo
console.log("Detalles del Equipo:");
equipo.getDetalles();




/*
Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).
Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después.
Ejemplo: entrada: www.techacademy.com
salida: WWW.techacademy.com
*/

function convertirHastaPunto(texto) {
    let indicePunto = texto.indexOf('.');
    if (indicePunto === -1) return texto.toUpperCase();
    
    return texto.slice(0, indicePunto).toUpperCase() + texto.slice(indicePunto);
}

// Ejemplo de uso
let entrada = "www.techacademy.com";
let salida = convertirHastaPunto(entrada);

console.log("Entrada:", entrada);
console.log("Salida:", salida);
