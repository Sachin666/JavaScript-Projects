const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const APIURL = "https://api.github.com/users/";

async function getUser(username) {
  const res = await fetch(APIURL + username);
  const data = await res.json();

  createUserCard(data);
  getRepos(username);
}

async function getRepos(username) {
  const res = await fetch(APIURL + username + "/repos");
  const data = await res.json();

  addRepos(data);
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <div class='img-container'>
            <img class='avatar' src='${user.avatar_url}' alt='${user.name}' />
        </div>
        <div class='user-info'>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class='info'>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <h4>Repos : <h4/>
            <ul id='repos'></ul>
        </div>
    `;

  main.innerHTML = "";
  main.appendChild(card);
}

function addRepos(repos) {
  const reposEl = document.getElementById("repos");

  repos.forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");

    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getUser(searchTerm);

    search.value = "";
  }
});
