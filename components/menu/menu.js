const data = [
  {
    img: "../../img/anime-character-img/naruto.png",
    name: "naruto",
    class: "Genin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/sasuke.jpg",
    name: "sasuke",
    class: "Genin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/sakura.png",
    name: "sakura",
    class: "Genin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/kakashi.png",
    name: "kakashi",
    class: "Jonin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },

  {
    img: "../../img/anime-character-img/hinata.png",
    name: "hinata",
    class: "Genin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/ino.png",
    name: "ino",
    class: "Genin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/shikamaru.png",
    name: "shikamaru",
    class: "Genin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/choji.png",
    name: "choji",
    class: "Genin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },

  {
    img: "../../img/anime-character-img/jiraiya.jpg",
    name: "jiraiya",
    class: "Sanin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/tsunade.png",
    name: "tsunade",
    class: "Sanin Hokage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/orochimaru.png",
    name: "orochimaru",
    class: "Sanin Hokage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/itachi.png",
    name: "itachi",
    class: "Jonin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/madara.png",
    name: "madara",
    class: "Founder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/hashirama.png",
    name: "hashirama",
    class: "Founder Hokage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/tobirama.png",
    name: "tobirama",
    class: "Hokage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/hiruzen.png",
    name: "hiruzen",
    class: "Hokage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
  {
    img: "../../img/anime-character-img/minato.png",
    name: "minato",
    class: "Hokage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga consectetur dolores non minima facere possimus nostrum sapiente reiciendis veritatis.",
  },
];

// selectors
const characterName = document.querySelector(".character-name");
const characterClass = document.querySelector(".character-class");
const characterImg = document.querySelector(".character-img");
const characterDes = document.querySelector(".character-des");
const sectionMenu = document.querySelector(".menu");

function domContent(data) {
  let displayCharacters = data.map(function (character) {
    return `<article class="character-container">
    <img class="character-img" src=${character.img} alt=${character.characterImg}/>
     <div class="character-info">
     <h3 class="character-name">${character.name}</h3>
     <h4 class="character-class">${character.class}</h4>
     </div>
     <p class="character-des">${character.description}</p>
     </article>`;
  });

  displayCharacters = displayCharacters.join("");
  sectionMenu.innerHTML = displayCharacters;
}

window.addEventListener("DOMContentLoaded", domContent(data));
