const articles = document.getElementById('articles');

const newPostes = [{
  title: "Casque VR",
  description: "J'ai gagner un casque VR trop cool",
  pp: "img/pp1.jpg",
  pseudo: "Ethan",
}, {
  title: "Brawl Stars",
  description: "JE SUIS TROP FORT A CE JEUX",
  pp: "img/pp1.jpg",
  pseudo: "Encore Ethan",
}, {
  title: "Escalade",
  description: "Je peut monter jusqu'au 6c !",
  pp: "img/pp1.jpg",
  pseudo: "Toujours Ethan",
}];

for (let article of newPostes) {
  articles.innerHTML +=
  `<article>
    <h2 class="title">${article.title}</h2>
    <p class="description">${article.description}</p>
    <div class="users">
      <img class="pp" src="${article.pp}" alt="pp">
      <h3 class="pseudo">${article.pseudo}</h3>
    </div>
  </article>`
};