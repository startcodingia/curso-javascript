//CONTROL DE FLUJO

//IF/ELSE

// let age = 17;

// if (age >= 18) {
//   console.log(age >= 18);
//   console.log("Podes manejar");
// } else {
//   console.log(age >= 18);
//   console.log("No podes manejar");
// }

//ELSE IF

// let number = "esto es un string";

// console.log(+number);

// if (number < 10) {
//   console.log("El numero es menor a 10");
// } else if (number > 10) {
//   console.log("El numero es mayor a 10");
// } else if (number === 10) {
//   console.log("El numero es igual a 10");
// } else {
//   console.log("El valor ingresado no es un numero");
// }

// const weather = "fresCo";

// switch (weather.toUpperCase()) {
//   case "FRESCO":
//     console.log("LLeva Abrigo");
//     break;

//   case "LLUVIOSO":
//     console.log("Lleva Paraguas");
//     break;

//   case "SOLEADO":
//     console.log("Cuidate del Sol");
//     break;

//   default:
//     console.log("El tiempo esta bueno. Disfruta del dia :)");
//     break;
// }

// let x = 1;
// console.log(x);
// x = 2;
// console.log(x);
// x = 3;
// console.log(x);
// x = 4;
// console.log(x);
// x = 5;
// console.log(x);

//FOR

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// } // i+1 es igual que i++

// let number = 1;

// do {
//   console.log("con do while", number);
//   number++;
// } while (number < 1);

// number = 1;

// while (number < 1) {
//   console.log("con while", number);
//   number++;
// }

//EJERCICIOS

/* 1) Triangulo de #. Para este ejercicio, construir un programa que una vez concluido nos permita ver en consola un triangulo
formado con #, de la siguiente manera:

#
##
###
####
#####
 
(PISTA: Recuerden que yo puedo agarrar una variable, tomar su valor y concatenarla con otra cosa asi
=> miVariable = miVariable + 'algoMas")

*/

// let output = "";

// for (let i = 1; i <= 5; i++) {
//   output += "#";
//   console.log(output);
// }

/*2) Numeros pares e impares. Hacer un programa que itere por los numeros del 0 al 10 y, por cada uno de ellos, imprima el numero y
nos diga si es par o impar. 
Ejemplo:

0 es par
1 es impar
2 es par
...
*/

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) console.log(`${i} es par`);
//   else console.log(`${i} es impar`);
// }

/*3) FizzBuzz. Generar un programa que itere del 1 al 15. Por cada iteracion, mostrar por consola lo siguiente:

1- Si el numero es multimo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demas casos, mostrar el numero


*/

// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

//   let text = "";

//   if (i % 3 === 0) {
//     text += "Fizz";
//   }

//   if (i % 5 === 0) {
//     text += "Buzz";
//   } else if (i % 3 !== 0 && i % 5 !== 0) {
//     text = i;
//   }

//   console.log(text);
// }

//
//
//
//
//

//CODING CHALLENGE

/*1) REGISTRO.

  Vamos a construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en primer lugar vamos a
  mostrar un mensaje que le de la bienvenida al usuario y le pregunte si desea registrarse (PISTA: recuerden que habia un metodo del 
  navegador que permitia hacer este tipo de consultas al usuario, devolviendo true o false segun el caso).
  En caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en primer lugar. El nombre de usuario
  tiene que tener por lo menos 3 caracteres y no va a ser case sensitive, por lo que lo vamos a almacenar en minusculas, independientemente
  de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de que el usuario no cumpla con las concidiones, 
  se muestre un mensaje de error.
  Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una contrasena, la que tiene que tener
  por lo menos 6 caracteres. La contrasena tiene que ser case sensitive, por lo que se respetan las mayusculas y minusculas segun lo ingrese
  el usuario.
  En caso de que la contrasena no cumpla con el requisito anterior, se debe mostrar un mensaje de error. De lo contrario, se debe mostrar un
  mensaje de exito informando al usuario que se completo el registro. (OTRA PISTA: Para ver como validar la longitud de un string, pueden ver el siguiente
    enlace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length )

*/
let isRegistered, registerUserName, registerPassword;

const wishesToRegister = confirm(
  "Bienvenido al sitio. Haz click en OK para registrarte"
);

do {
  if (wishesToRegister) {
    if (!registerUserName) {
      registerUserName = prompt("Ingresa tu nombre de usuario");
    }

    if (registerUserName.length >= 3) {
      registerUserName = registerUserName.toLowerCase();

      registerPassword = prompt("Ingresa tu password");

      if (registerPassword.length >= 6) {
        alert("El registro se completo exitosamente");
        isRegistered = true;
      } else {
        alert("El password tiene que tener por lo menos 6 caracteres");
        registerPassword = null;
      }
    } else {
      alert("El nombre de usuario tiene que tener por lo menos 3 caracteres");
    }
  } else {
    alert("OK, te esperamos cuando gustes");
  }
} while (wishesToRegister && (!registerPassword || !registerUserName));

/*2) LOGIN

  Partiendo de la base del punto anterior, en caso de que se complete el registro, vamos a mostrarle un mensaje al usuario preguntandole
  si desea iniciar sesion. En caso de que el usuario haga click en aceptar, vamos a pedirle que ingrese su nombre de usuario y luego su contrasena
  Si alguno de los datos ingresados no coinciden con los informados al momento del registro, le vamos a mostrar un mensaje de error al usuario.
  Caso contrario, le mostraremos un mensaje que diga que el login fue exitoso. Recordar el tema de normalizar los inputs en caso de que sea necesario,
  para poder hacer la comparacion contra los valores almacenados.

  */

let loginPassword, loginUsername;

if (isRegistered) {
  let wishesToLogin = confirm("Haz click en OK para iniciar sesion");

  do {
    if (wishesToLogin) {
      loginUsername = prompt("Ingresa tu usuario");

      if (loginUsername !== null) {
        loginUsername = loginUsername.toLowerCase();
        loginPassword = prompt("Ingresa tu password");

        if (loginPassword === null) {
          wishesToLogin = false;
        } else if (
          loginUsername === registerUserName &&
          loginPassword === registerPassword
        ) {
          alert("Login Exitoso!");
        } else {
          alert("Alguno de los datos ingresados es incorrecto");
          loginPassword = null;
          loginUsername = null;
        }
      } else {
        wishesToLogin = false;
      }
    } else {
      alert("Vuelve cuando gustes");
    }
  } while (wishesToLogin && (!loginUsername || !loginPassword));
}

/*3) EXTRA
  Tomando los ejercicios anteriores, los vamos a modificar para que, en el caso de que cualquiera de las validaciones anteriores arroje un error
  el programa vuelva a pedir al usuario la informacion solicitada en ese punto. Tener en cuenta que el usuario podra dar por terminado el programa
  tocando el boton de cancelar al momento en que se le pide ingresar un dato o se le consulta si desea registrarse o iniciar sesion.
*/
