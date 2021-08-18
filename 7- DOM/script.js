// DOM (Document Object Model)
// Live DOM Viewer => https://software.hixie.ch/utilities/js/live-dom-viewer/#

//Acceder a un nodo

// 1) Por el tag name
// const header = document.getElementsByTagName("header");

// console.log(header);

// 2) Por el nombre de la clase

// const container = document.getElementsByClassName("container");

// console.log(container);

// 3) por ID

// const avatar = document.getElementById("avatar");

// console.log(avatar);

//4) QuerySelector

// const main = document.querySelector("main");

// console.log(main);

// const username = document.querySelector(".username");

// console.log(username);

// const repos = document.querySelector("#repos");

// console.log(repos);

//5) querySelectorAll

// const username = document.querySelectorAll(".username");

// console.log(username);

// Acceder y modificar texto (textContent o innerText)
// const username = document.querySelector(".username");

// username.innerText = "Juan";

// //Acceder y modificar src de imagen

// const avatar = document.querySelector("#avatar");

// avatar.src = "https://i.pravatar.cc/300";

// // console.log(avatar);

// // Incorporar HTML mediante JS

// const list = document.querySelector("#repos-list");

// list.innerHTML = `
// <li> Un Repo </li>
// <li> Otro <strong>Repo</strong> </li>
// `;

// console.log(list.outerHTML);
// console.log(list.innerHTML);

//Modificar estilos
// console.log(container.className);

//className
// container.className = "background-black";
// console.log(container.className);

//classList
// container.classList.add("background-black");
// // console.log(container.classList);
// ////
// ///
// container.classList.remove("background-black");

// const switchTheme = () => {
//   const textNodes = document.querySelectorAll(".text");
//   const container = document.querySelector(".container");
//   const avatar = document.querySelector("#avatar");

//   container.classList.toggle("background-black");
//   textNodes.forEach((element) => element.classList.toggle("white-text"));
//   if (container.classList.contains("background-black")) {
//     avatar.style.border = "2px solid white";
//   }
// };

// switchTheme();
// const container = document.querySelector(".container");

// switchTheme();

//Eliminar un nodo
//remove()

// const repos = document.querySelector("#repos");

// repos.remove();

//Crear Nodo
//document.createElement

// const reposNode = document.createElement("h2");
// reposNode.textContent = "Repos";
// reposNode.classList.add("text", "white-text");
// console.log(reposNode);

//appendChild

// const parentAside = document.querySelector("aside");

// parentAside.appendChild(reposNode);

//before y after

// const reposList = document.querySelector("#repos-list");

// reposList.before(reposNode);
// reposList.after(reposNode);
// switchTheme();
// switchTheme();

// Link de propiedades y metodos de elementos => https://developer.mozilla.org/es/docs/Web/API/Element
// link de propieades y metodos document => https://developer.mozilla.org/es/docs/Web/API/Document

//EJERCICIO
//Utilizando el listado de
// repositorios que nos da la API de GITHUB (https://api.github.com)
// tomar el primer repositorio del listado y
// realizar las siguientes tareas:

// 1) Modificar el texto 'Nombre' por el nombre de usuario
// 2) Agregar el avatar del usuario
// 3) Insertar un listado de links a sus 5 primeros
// repositorios.

const baseUrl = "https://api.github.com";

const getPublicRepositories = async () => {
  const response = await fetch(`${baseUrl}/repositories`);
  const jsonResponse = await response.json();
  return jsonResponse[0];
};

const getRepositoriesFromOwner = async (reposEndpoint) => {
  const reposResponse = await fetch(reposEndpoint);
  const jsonReposResponse = await reposResponse.json();
  const responseRepos = jsonReposResponse.slice(0, 5);
  return responseRepos;
};

const editProfile = async () => {
  const profileData = await getPublicRepositories();
  const avatarUrl = profileData.owner.avatar_url;
  const name = profileData.owner.login;
  const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);

  const userAvatar = document.querySelector("#avatar");
  const nameNode = document.querySelector("h1");

  nameNode.textContent = name;
  userAvatar.src = avatarUrl;

  userRepos.forEach((repo) => {
    const repoNode = document.createElement("a");
    const listNode = document.querySelector("#repos-list");
    repoNode.textContent = repo.html_url;
    repoNode.href = repo.html_url;

    listNode.appendChild(repoNode);
  });

  console.log(userRepos);
};

editProfile();
