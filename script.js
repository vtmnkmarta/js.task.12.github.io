const btn = document.querySelector("#btn");
const input = document.querySelector("#input1");
const body = document.querySelector("body");
let usernames = [];
/*
btn.addEventListener("click", ()=>{
    if (usernames.includes(input.value)){
        const par = document.createElement("p");
        par.textContent = "Привіт, " + input.value;
        body.appendChild(par); 
    }else{
        usernames.push(input.value);
        localStorage.setItem("name", JSON.stringify(usernames));
    }
    input.value = ""
});
*/

const input1 = document.createElement("input");
const button1 = document.createElement("button");
button1.textContent = "button";
body.appendChild(input1);
body.appendChild(button1);

button1.addEventListener("click", ()=>{
    if (usernames.includes(input1.value)){
        const par = document.createElement("p");
        par.textContent = "Привіт, " + input1.value;
        body.appendChild(par); 
        input1.style.display = "none"
        button1.style.display = "none"
    }else{
        usernames.push(input1.value);
        localStorage.setItem("name", JSON.stringify(usernames));
    }
    input1.value = ""

});
