const baseUrl = "https://api.github.com";

const getRandomProfile = (profileList) => {
  const randomIndex = Math.ceil(Math.random() * profileList.length - 1);
  const randomProfile = profileList[randomIndex];
  return randomProfile;
};

const getPublicRepositories = async () => {
  const response = await fetch(`${baseUrl}/repositories`);
  const jsonResponse = await response.json();

  const randomProfile = getRandomProfile(jsonResponse);

  return randomProfile;
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
  const listNode = document.querySelector("#repos-list");
  listNode.innerHTML = "";

  nameNode.textContent = name;
  userAvatar.src = avatarUrl;

  userRepos.forEach((repo) => {
    const repoNode = document.createElement("a");
    repoNode.textContent = repo.html_url;
    repoNode.href = repo.html_url;

    listNode.appendChild(repoNode);
  });
};

editProfile();

//EJERCICIOS

/* Utilizando eventos, agregar algun efecto de hover a la 
imagen (puede ser algun cambio en la forma, un blur, 
animacion, etc). NO SE PUEDE USAR EL SELECTOR 
:hover de CSS

2) Agregar un evento al boton shuffle, de forma tal que
cuando se haha click en el mismo, se actualice el perfil con
informacion de un usuario random selecionado de la lista
de usuarios que provee el endpoint de Github.
Pista, para crear la logica de seleccion random, pueden
investigar sobre el metodo Math.random())*/
const userAvatar = document.querySelector("#avatar");

const changeImageRadius = () => {
  // const isCircle = userAvatar.classList.contains("circle-avatar");

  // if (isCircle) {
  //   userAvatar.classList.remove("circle-avatar");
  //   userAvatar.classList.add("square-avatar");
  // } else {
  //   userAvatar.classList.add("circle-avatar");
  //   userAvatar.classList.remove("square-avatar");
  // }

  userAvatar.classList.toggle("circle-avatar");
  userAvatar.classList.toggle("square-avatar");
};

userAvatar.addEventListener("mouseenter", changeImageRadius);
userAvatar.addEventListener("mouseleave", changeImageRadius);

const shuffleBtn = document.querySelector("button");

shuffleBtn.addEventListener("click", editProfile);
