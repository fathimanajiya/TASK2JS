document.querySelector('form').addEventListener("submit",function(e){
e.preventDefault();
 
let name = document.createElement("p");
let email = document.createElement("p");
let text = document.createElement("p");

 name.textContent = document.querySelector("#name").value;
 email.textContent = document.querySelector("#email").value;
 text.textContent = document.querySelector("#text").value;

const content = document.querySelector(".content");
content.appendChild(name);
content.appendChild(email);
content.appendChild(text);
});