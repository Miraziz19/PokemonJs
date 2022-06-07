let findEl = (element) => document.querySelector(element);
let createEl = (element) => document.createElement(element);

for (const pokemon of arr) {
    // CreatElement

    let ul = findEl(".list");
    let li = createEl("li");
    let wall = createEl("img");

    let nams = createEl("h3");
    let box = createEl("div");
    let text = createEl("p");
    let weight = createEl("p");
    let age = createEl("p");

    // SetAtribute

    li.setAttribute("class", "item");
    wall.classList.add("card-img");
    wall.setAttribute("src", pokemon.img);
    nams.classList.add("card-title");
    text.classList.add("card-type");
    weight.classList.add("text-danger");
    age.classList.add("card-age");

    nams.textContent = pokemon.name;
    text.textContent = pokemon.type;
    weight.textContent = pokemon.weight;
    age.textContent = "52 age";

    // AppendChilds
    ul.appendChild(li);
    li.appendChild(wall);
    li.appendChild(nams);
    li.appendChild(text);
    li.appendChild(weight);
    li.appendChild(age);
}

function pok(el) {}
pok();