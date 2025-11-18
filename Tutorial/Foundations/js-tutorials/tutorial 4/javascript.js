const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p1 = document.createElement("p");

p1.style.color = "red";
p1.textContent = "Hey I'm red!";

container.appendChild(p1);

const h3 = document.createElement("h3");

h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const newdiv = document.createElement("div");

newdiv.style.border = "thick solid black"; 

newdiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

newdiv.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

newdiv.appendChild(p2);

container.appendChild(newdiv)

const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

btn.addEventListener("click", function (e) {
  console.log(e.target);
});
