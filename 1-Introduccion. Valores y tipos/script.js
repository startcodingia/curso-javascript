// alert("hello world");

//Number
// console.log(3);
// console.log(3.5);
// console.log(typeof Infinity);
// console.log(typeof NaN);

//Strings
// console.log(typeof "Hola Mundo");
// console.log("3");

//Booleanos
// console.log(typeof true);
// console.log(typeof false);

//Null y Undefined

// console.log(typeof undefined);
// console.log(typeof null);

// let miVariable;
// console.log(miVariable);

// miVariable = null;
// console.log(miVariable);

//Tipado Dinamico
// let miVariable = "hello world";

// console.log(typeof miVariable);

// miVariable = null;

// console.log(miVariable);

// miVariable = 3;

// console.log(typeof miVariable);

//Expresiones y declaraciones

//Expresiones
// let miVariable = 3;

// console.log(miVariable);

// console.log(2 + 3);

// function saludar() {
//   return "Hola";
// }

// console.log(saludar());

//Declaraciones
// let miVariable = false;

// if (miVariable === true) {
//   console.log("Verdadero");
// } else {
//   console.log("Falso");
// }

//Metodos del Navegador
// alert("hello world");

// let nombre = prompt("Ingresa tu nombre");

// console.log(nombre);

// console.log(confirm("Estas seguro?"));

//Manipulacion de Tipos

//Valores literales
// let nombre = "Alexis";
// console.log(nombre);

// Conversion de string a Number

//Number, parseInt, +

// let string = "123hola";

// console.log(Number(string));
// console.log(parseInt(string));
// console.log(+string);

//Concatenacion

// let nombre = "Alexis";

// console.log("Hola" + nombre);
// console.log(`Hola Alexis`);

//Conversion a Booleano
// let string = "2";
// let number = 0;

// console.log(Boolean(string));
// console.log(Boolean(number));

// console.log(!!string);
// console.log(!!number);

//Conversion implicita

// let string = "2";
// let number = 2;
// let otroNumber = 3;

// console.log(number + otroNumber + string);
// console.log(string + number + otroNumber);
// console.log(otroNumber + string + number);

//Operadores

//Aritmeticos

//  Unarios (-. +, typeof)

// console.log(typeof "hola mundo");
// console.log(+"123");
// console.log(-"123");
// console.log(-"tres");

// Binarios

// console.log(2 + 3);
// console.log(3 - 3);
// console.log(2 * 3);
// console.log(6 / 3);
// console.log(7 % 3);

//Logicos

//Binarios

// Mayor y Menor

// console.log(2 > 3);
// console.log(2 < 3);
// console.log(3 >= 3);
// console.log(3 <= 3);

// === y ==

// console.log(2 === "2");
// console.log(3 == "3");
// console.log(2 === 3);
// console.log(2 == 3);

// console.log(3 !== "3");
// console.log(3 != "3");

// AND, OR, NOT

//AND

// console.log("AND");
// console.log(2 === 2 && 2 > 0);
// console.log(2 === "2" && 2 > 0);
// console.log(2 === 2 && 2 < 0);
// console.log(2 === "2" && 2 < 0);

//OR
// console.log("OR");

// console.log(2 === 2 || 2 > 0);
// console.log(2 === "2" || 2 > 0);
// console.log(2 === 2 || 2 < 0);
// console.log(2 === "2" || 2 < 0);

//TERNARIO

// let edad = 17;

// console.log(edad >= 18 ? "Podes manejar" : "No tenes edad para manejar");

//palabras reservadas para declarar una variable

// var, let y const

// var miVariable = 6;
// let otraVariable = 2;
// const otraVariableMas = 5;

// console.log(miVariable);
// console.log(otraVariable);
// console.log(otraVariableMas);

// otraVariable = 10;
// otraVariableMas = 20;

// console.log(otraVariable);
// console.log(otraVariableMas);

// const unaVariable;

// console.log(unaVariable);

// unaVariable = "Hola";

// console.log(unaVariable);

// let unaVariable = 2;

// let firstName = "Alexis";

// let address = "";

//Operator Precedence

// console.log((30 + 20) / 2);

// let nombre = "Alexis";

// let x, y;

// console.log(x, y);

// x = y = 10;

// console.log(x, y);

// x = y;
// y = 10;

// console.log(x, y);

//Template Literals

// const firstName = "Alexis";
// const job = "Desarrollador";
// const favouriteNumber = 7;

// Hola, soy Alexis, soy Desarrollador
// y mi numero favorito es el 7

// console.log(
//   "Hola, soy" +
//     " " +
//     firstName +
//     ", soy " +
//     job +
//     "y mi numero favorito es el " +
//     favouriteNumber
// );

// console.log(
//   `Hola, soy ${firstName},
//   soy ${job} y
// mi numero favorito es el ${3 + 4}`
// );

// console.log("I'm");

/*
EJERCICIOS 

1) Pedir al usuario que ingrese su nombre. Guardar
ese nombre en una variable y utilizarlo para saludar al 
usuario (por ejemplo: "Hola Alexis").
*/

// const firstName = prompt("Ingresa tu nombre");

// alert(`Hola ${firstName}`);

/*2) Pedirle a un usuario que ingrese dos numeros
y devolverle la suma de dichos numeros
*/

// const firstNumber = prompt("Ingresa un numero");
// const secondNumber = prompt("Ingresa otro numero");

// console.log(typeof firstNumber);

// alert(
//   `La suma de ${firstNumber} y ${secondNumber} es ${
//     +firstNumber + +secondNumber
//   }`
// );

/*3) Pedirle a un usuario que ingrese dos numeros
y devolverle el doble de la suma de dichos numeros
*/
// const firstNumber = prompt("Ingresa un numero");
// const secondNumber = prompt("Ingresa otro numero");

// alert(
//   `El doble de la suma de ${firstNumber} y ${secondNumber} es ${
//     (+firstNumber + +secondNumber) * 2
//   }`
// );

/*
4) Pedirle al usuario que ingrese el ancho y el alto 
de una habitacion y calcular la superficie.
*/

// const width = prompt("Ingresa el ancho de tu habitacion");
// const height = prompt("Ingresa el alto de tu habitacion");
// const result = width * height;

// alert(`La superficie de tu habitacion es ${result}`);

/*
5) Pedirle al usuario que ingrese su nombre y devolverle
el nombre todo en minusculas
*/

// const firstName = prompt("Ingresa tu nombre");

// alert(`Tu nombre en minusculas es ${firstName.toLowerCase()}`);

/*
6) Pedirle al usuario que ingrese su apellido y devolverle
el apellido todo en mayuscula.
*/
// const lastName = prompt("Ingresa tu apellido");

// alert(`Tu apellido en mayusculas es ${lastName.toUpperCase()}`);

/*
7) Pedirle al usuario el nombre, el apellido y la 
edad. Mostrar el siguiente mensaje:

Nombre: Juan
Apellido: Perez
Edad: 20
*/

// const firstName = prompt("Ingresa tu nombre");
// const lastName = prompt("Ingresa tu apellido");
// const age = prompt("Ingresa tu edad");

// alert(`
// Tus datos completos son:
// Nombre: ${firstName},
// Apellido: ${lastName},
// Edad: ${age}
// `);
