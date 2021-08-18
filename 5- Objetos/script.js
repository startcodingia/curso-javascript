//OBJETOS

// {key: value}
//{firstName: "Alexis"}

//DECLARAR UN OBJETO en JS

// const literalObject = {
//   firstName: "Alexis",
//   "city-residence": "Buenos Aires",
//   job: "Developer",
// };
// const normalObject = new Object();

// console.log(normalObject);

// literalObject.favouriteColor = "Blue";

// console.log(literalObject.job);

// console.log(literalObject.favouriteColor);

// literalObject.favouriteColor = "Red";

// console.log(literalObject.favouriteColor);

//clase PERSONA

//3 propiedades : firstName, city, job

// const firstName = "Jose";

// class Persona {
//   constructor(firstName, city, job) {
//     this.firstName = firstName;
//     this.city = city;
//     this.job = job;
//   }

//   saludar() {
//     console.log(`Hola, soy ${this.firstName}`);
//   }
// }

// const Alexis = new Persona("Alexis", "Buenos Aires", "Developer");
// const Juan = new Persona("Juan", "Cordoba", "Arquitecto");
// const Martin = new Persona("Martin", "Rosario", "Abogado");

// // console.log(Alexis, Juan, Martin);

// // console.log(Alexis.saludar());
// Juan.saludar();
// Alexis.saludar();
// Martin.saludar();

//Extender una subclase desde una clase original
// class Animal {
//   constructor(name, isDomestic) {
//     this.name = name;
//     this.isDomestic = isDomestic;
//   }

//   speak() {
//     console.log(`${this.name} hace un ruido`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, isDomestic) {
//     super(name, isDomestic);
//     this.age = age;
//   }

//   speak() {
//     console.log(
//       `${this.name} ladra y ${this.isDomestic ? "es domestico" : "es salvaje"}`
//     );
//   }

//   sayAge() {
//     console.log(`${this.name} tiene ${this.age}`);
//   }
// }

// const dog = new Dog("Rulo", 5, true);

// // dog.speak();
// dog.speak();
// console.log(dog.name);

//Object.key(), Object.values(),
//Object.assign(), Object.entries()

const person = {
  firstName: "Alexis",
  city: "Buenos Aires",
  job: "Developer",
};

//Aceder a un elemento
// console.log(person.firstName);

//Modificar un elemento
// person.city = "Cordoba";
// console.log(person.city);

//Object.key()
// const keys = Object.keys(person);

// keys.forEach((key) => console.log(person[key]));

//For in
// for (const key in person) {
//   if (Object.hasOwnProperty.call(person, key)) {
//     console.log(person[key]);
//   }
// }

// Object.values()

const values = Object.values(person);
// console.log(values);

// Object.assign()

const developer = {
  skills: "Javascript",
  city: "Cordoba",
};

// Object.assign(person, developer);

// const modifiedPerson = { ...person, ...developer };

// console.log(person);
// console.log(modifiedPerson);

//Object.entries()

const entries = Object.entries(person);

// console.log(entries);

//EJERCICIOS

/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.

Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
"Para jugar al futbol necesitas 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)

 Futbol
 Basket
 Tenis

PARA ESTA ACTIVIDAD, USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/

// class Sport {
//   constructor(name, isTeamSport) {
//     this.name = name;
//     this.isTeamSport = isTeamSport;
//   }

//   sayName() {
//     console.log(`El nombre del deporte es ${this.name}`);
//   }

//   sayIsTeamSport() {
//     const message = this.isTeamSport
//       ? `${this.name} es un deporte de equipo`
//       : `${this.name} no es un deporte de equipo`;

//     console.log(message);
//   }
// }

// class TeamSports extends Sport {
//   constructor(name, playersByTeam) {
//     super(name);
//     this.playersByTeam = playersByTeam;
//   }

//   sayPlayersByTeam() {
//     console.log(
//       `Para jugar al ${this.name} necesitas ${this.playersByTeam} jugadores por equipo`
//     );
//   }
// }

// const tenis = new Sport("Tenis", false);
// tenis.sayName();
// tenis.sayIsTeamSport();

// const futbol = new TeamSports("Futbol", 11);

// futbol.sayName();
// futbol.sayPlayersByTeam();

// const basket = new TeamSports("Basket", 5);

// basket.sayName();
// basket.sayPlayersByTeam();

/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa
de papas fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa
y 1 paquete de galletitas dulces.

CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS,
DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.

REALIZAR LAS SIGUIENTES TAREAS:

a) Mostrar por consola los productos que llevo cada uno
(solo el nombre del producto)

b) En el camino al picnic, la bolsa de Andrea se rompio, 
por lo que tuvieron que poner todo en la bolsa de Martin.
Realizar el cambio correspondiente para que la bolsa de Martin
tenga el total de los productos del picnic.

c) Calcular el total de productos que llevaron al picnic
*/

const AndreaBag = { cervezas: 2, sandwiches: 2, papasFritas: 1 };
const MartinBag = { torta: 1, gaseosa: 1, galletitas: 1 };

// console.log(AndreaBag, MartinBag);

const AndreaProducts = Object.keys(AndreaBag);
const MartinProducts = Object.keys(MartinBag);

// console.log(AndreaProducts, MartinProducts);

Object.assign(MartinBag, AndreaBag);

// console.log(AndreaBag);

// console.log(MartinBag);

//usar Object.keys

const productsName = Object.keys(MartinBag);

// console.log(productsName);

let totalProducts = 0;

// productsName.forEach((product) => (totalProducts += MartinBag[product]));

// console.log(totalProducts);

// for (const key in MartinBag) {
//   if (Object.hasOwnProperty.call(MartinBag, key)) {
//     totalProducts += MartinBag[key];
//   }
// }

// console.log(totalProducts);

const productsQuantity = Object.values(MartinBag);

const totalProductsWithReduce = productsQuantity.reduce(
  (acumulador, currentValue) => acumulador + currentValue,
  0
);

console.log(totalProductsWithReduce);
