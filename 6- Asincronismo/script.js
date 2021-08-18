// ASINCRONISMO

// console.log("Me despierto");
// console.log("Me lavo la cara");
// console.log("Pongo la cafetera");
// for (let time = 12000; time >= 0; time--) {
//   console.log(time);

//   if (time === 0) console.log("El cafe esta listo");
// }
// console.log("Desayuno");
// console.log("Me siento a trabajar");

//setTimeout()

// console.log("Me despierto");
// console.log("Me lavo la cara");
// console.log("Pongo la cafetera");
// setTimeout(() => {
//   console.log("El cafe esta listo");
// }, 5000);
// console.log("Me doy una ducha");
// console.log("Desayuno");

// console.log("Me despierto");
// console.log("Me lavo la cara");
// console.log("Pongo la cafetera");
// setTimeout(() => {
//   console.log("El cafe esta listo");
// }, 0);
// console.log("Me doy una ducha");
// console.log("Desayuno")

// ASINCRONISMO Y CALL STACK

//EJEMPLO 1

// console.log("Mario");
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 2
// setTimeout(() => console.log("Mario"), 1000);
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 3
// setTimeout(() => console.log("Mario"), 0);
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 4
// setTimeout(() => console.log("Mario"), 0);

// for (let index = 0; index <= 5000; index++) {
//   console.log(index);
//   if (index === 5000) console.log("Juan");
// }

// console.log("Pedro");

//PROMESAS

// function pagarConTarjeta(precio) {
//   const limite = 10000;

//   console.log("Conectando...");
//   setTimeout(() => {
//     if (precio < limite) console.log("Compra Aprobada");
//     else console.log("Compra Rechazada");
//   }, 2000);
// }

// console.log(pagarConTarjeta(1000));

// 3 estados: Pendiente, resuelta, rechazada

// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     console.log("Procesando el pago");
//     if (!isConected) return;
//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra Rechazada");
//     }, 3000);
//   });

// console.log(
//   pagarConTarjeta(100000, true)
//     .then((respuesta) => {
//       console.log(respuesta);
//     })
//     .catch((error) => console.log(error))
// );

// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");

//Async-Await
// const pagarConTarjeta = (precio, isConected) =>
//   new Promise((resolve, reject) => {
//     const limite = 10000;
//     console.log("Procesando el pago");
//     if (!isConected) return;
//     setTimeout(() => {
//       if (precio <= limite) resolve("Compra Aprobada");
//       else reject("Compra Rechazada");
//     }, 3000);
//   });

// const procesarPago = async () => {
//   try {
//     const respuesta = await pagarConTarjeta(100000, true);
//     console.log(respuesta);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // procesarPago();

// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");
// console.log("Otra tarea");

// const allPromises = [
//   pagarConTarjeta(100, true),
//   pagarConTarjeta(100, true),
//   pagarConTarjeta(5000, true),
// ];

// // Promise.all(allPromises);

// const procesarPagos = async () => {
//   try {
//     const respuesta = await Promise.all(allPromises);
//     console.log(respuesta);
//     return "todas resueltas";
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(procesarPagos().then((response) => console.log(response)));

//Fetch

// const getDataFromApi = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const jsonResponse = await response.json();

//     return jsonResponse;
//   } catch (error) {
//     console.log("error=>", error);
//   }
// };

// console.log(getDataFromApi().then((response) => console.log(response)));

//ASINCRONISMO Y CALL STACK - ROUND 2

//EJEMPLO 1

// const asyncOperation = new Promise((resolve) => resolve());

// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 2
// const asyncOperation = fetch("https://jsonplaceholder.typicode.com/todos/1");
// asyncOperation.then((resolvedValue) => console.log("Mario"));
// console.log("Juan");
// console.log("Pedro");

//EJEMPLO 3
// async function fetchSomething() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Mario");
//       resolve();
//     }, 10);
//   });

//   console.log("Juan");
// }

// fetchSomething();

// console.log("Pedro");

///EJEMPLO 4
// setTimeout(() => console.log("Mario"), 10);

// const promise = new Promise((resolve) => {
//   setTimeout(() => resolve(), 10);
// });

// promise.then(() => console.log("Juan"));
// console.log("Pedro");

//EJEMPLO 5

// setTimeout(() => console.log("Mario"), 0);
// const promise = Promise.resolve();
// promise.then(() => console.log("Juan"));
// console.log("Pedro");

// Protocolo HTTP

// GET, POST, PUT, DELETE

// GET => Solicitar datos o informacion al servidor
// POST => Enviar informacion al servidor
// PUT => Modificar informacion en el servidor.
// DELETE => Borrar informacion del servidor.

//GET
// fetch("https://jsonplaceholder.typicode.com/posts/10")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//POST

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PUT

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PATCH => Actualiza parcialmente el recurso

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "foo",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//DELETE

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// });

//JSON
//Metodos

// const body = {
//   id: 1,
//   title: "foo",
//   body: "bar",
//   userId: 1,
// };

// console.log(typeof body);

// Convertir a JSON

// const parsedBody = JSON.stringify(body);

// console.log(body);
// console.log(parsedBody);

//Convertir JSON a JS

// const bodyToJS = JSON.parse(parsedBody);

// console.log(bodyToJS);

// EJERCICIOS

// 1) Vamos a simular una carrera entre 3 personas, Juan,
// Mario y Martin. El orden de largada sera siempre el
//siguiente:

// console.log("Juan");
// console.log("Mario");
// console.log("Martin");

// El orden de llegada se determina conforme el
// nombre de cada uno vaya apareciendo en la consola,
// de modo que el ganador sera aquel cuyo nombre sea
//el primero en aparecer.

// ACTIVIDAD: Utilizando solamente setTimeout y sin
// alterar el orden de lagrada, escribir el codigo
// necesario para obtener los siguientes resultados:

// Vuelta 1:
// Mario
// Martin
// Juan

// setTimeout(() => console.log("Juan"), 0);
// console.log("Mario");
// console.log("Martin");

//Vuelta 2:
// Juan
// Martin
// Mario

// console.log("Juan");
// setTimeout(() => console.log("Mario"), 0);
// console.log("Martin");

//Vuelta 3
// Martin
// Juan
// Mario

// setTimeout(() => {
//   console.log("Juan");
//   console.log("Mario");
// }, 0);

// console.log("Martin");

// Vuelta 4
// Mario
// Juan
// Martin

// setTimeout(() => console.log("Juan"), 10);
// console.log("Mario");
// setTimeout(() => console.log("Martin"), 15);

// 2) Utilizando setTimeout, crear una funcion que
// actue como un temporizador, haciendo una cuenta
// regresiva desde el numero de segundos que se pase
// como argumentos hasta llegar a 0. Para ese ejercicio
// no se puede utilizar ningun tipo de loop (for, while, etc)
//PISTA: Para resolver el ejerciio, pueden investigar un
// poco sobre funciones recursivas.

// const temporizador = (second) => {
//   setTimeout(() => {
//     if (second < 0) return;

//     console.log(second);

//     temporizador(second - 1);
//   }, 1000);
// };

// temporizador(10);

//3) Utilizando la API de GITHUB (https://api.github.com)
//realizar las siguientes tareas

// a) Obtener una lista de los repositorios publicos
// (Documentacion de la API: https://docs.github.com/es/rest/reference/repos#list-public-repositories)

const baseUrl = "https://api.github.com";

const getPublicRepositories = async () => {
  const response = await fetch(`${baseUrl}/repositories`);
  const jsonResponse = await response.json();
  //   console.log(jsonResponse);
  return jsonResponse;
};

// getPublicRepositories();

// b) Generar una funcion que a partir de la respuesta
// del punto anterior, retorne un array de los nombres
// de usuario de los owners de los repositorios listados

// const getOwnersNames = async () => {
//   const repositories = await getPublicRepositories();

//   const namesArray = repositories.map((repo) => repo.owner.login);

//   console.log(namesArray);
// };

// getOwnersNames();

//c) Tomar de la respuesta al primer respositorio, y
// listar todos los repositorios del owner.
// PISTA: Para ver el endpoint al cual deberas pegarle
// para traer los repositorios del owner, deberas
// inspeccionar la informacion que recibes dentro del
// primer request.

const getRepositoriesFromOwner = async () => {
  const repositories = await getPublicRepositories();
  const firstRepository = repositories[0];

  const reposEndpoint = firstRepository.owner.repos_url;

  const reposResponse = await fetch(reposEndpoint);
  const jsonReposResponse = await reposResponse.json();

  console.log(jsonReposResponse);
};

getRepositoriesFromOwner();
