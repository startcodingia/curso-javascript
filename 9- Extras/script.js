// Destructuring
// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };

//Arrays

//Sin destructuring
// const user1 = names1[0];
// const user2 = names1[1];
// const user3 = names1[2];

// console.log(user1, user2, user3);

//Con destructuring

// const [user1, user2] = names1;

// console.log(user1, user2);

//Objetos

//Sin destructuring
// const user1 = person1.firstname;
// const job = person1.job;
// console.log(user1, job);

//Con destructuring

// const { firstname, job } = person1;

// console.log(firstname, job);

///SPREAD OPERATOR (...)
// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };

// En arrays

// 1) Concatenar arrays (concat)

// const mergedArray = [...names1, ...names2];

// console.log(mergedArray);

// 2) Copia de array

// const copiedArray = [...names1];

// copiedArray.push("Marcelo");

// console.log(names1);
// console.log(copiedArray);

// 3) Obtener elementos del array

// const [user1, ...groupedUsers] = names1;

// console.log(user1);
// console.log(groupedUsers);
// console.log(names1);

//En Funciones

// const logValues = (value1, ...args) => {
//   console.log("Soy el value 1 =>", value1);

//   args.forEach((value) => console.log(value));
// };

// logValues("Hola", "Chau", "No aparezco", "Otro mas");

// En objetos

// 1) Copiar objetos
// const copiedPerson = { ...person1 };

// copiedPerson.city = "Rosario";

// console.log(copiedPerson);
// console.log(person1);

// Mergear objetos (vs object.assign())

// const mergedObject = { ...person1, city: "Mendoza" };

// console.log(mergedObject);

// const updatedData = {
//   city: "Rosario",
//   age: 30,
// };

// const mergedObject = { ...person1, ...updatedData };

// console.log(mergedObject);

//Programacion Funcional

// const getFirstname = () => "Alexis";

// console.log(getFirstname());

// const getTwoNumber = () => 2;

// console.log(getTwoNumber() + 3);

// Inmutabilidad

// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };

// const addMember = (currentMembers, newMember) => {
//   const newMemberList = [...currentMembers, newMember];
//   return newMemberList;
// };

// console.log(addMember(names1, "Marcelo"));

// console.log(names1);

// Funciones Puras

// const getRandomNumber = () => Math.random();

// const sum = (a, b) => a + b;

// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));

// High Order Functions

// const logResult = (result) => console.log(result);
// const alertResult = (result) => alert(result);

// const sum = (a, b, callback) => callback(a + b);

// sum(2, 3, logResult);
// sum(3, 3, alertResult);

// const names2 = ["Martin", "Javier", "Matias"];

// names2.forEach(logResult);

var dayjs = require("dayjs");

const currentDate = dayjs().format("DD-MM-YYYY");

console.log(`La fecha actual es ${currentDate}`);

const inputNombre = document.querySelector("#input-nombre").value; // Juan
const inputApellido = document.querySelector("#input-apellido").value; // Martinez

const nombre = inputNombre.toUpperCase();
const apellido = inputApellido.toUpperCase();

const data = { nombreCompleto: nombre.concat(" ", apellido) };

const nombre = document.querySelector("#input-nombre").value; // 'Juan   ';

console.log(nombre.trim()); // 'Juan'

const dni = document.querySelector("#input-nombre").value; // 'Juan   ';

console.log(nombre.trim()); // 'Juan'// "23.345.678"

console.log(dni.replaceAll(".", "")); // 23345898
