// localStorage.setItem("name", "Ivan");
// sessionStorage.setItem("token", "123abc");

// const name = localStorage.getItem("name");
// console.log(name);

// localStorage.removeItem("name");

// localStorage.clear();
// sessionStorage.clear();

// const user = { name: "Anna", age: 38 };
// localStorage.setItem( "user", JSON.stringify(user) )

// const data = localStorage.getItem("user");
// const parsedUser = JSON.parse(data);
// console.log(parsedUser.name);

// const todos = [
//     { id: 1, text: "first" },
//     { id: 2, text: "second" }
// ];

// localStorage.setItem("todos", JSON.stringify(todos));

// const data = localStorage.getItem("todos");
// console.log(data);

// const parsedTodos = JSON.parse(data);
// console.log(parsedTodos);

// parsedTodos.forEach(todo => console.log(todo.text));

// document.getElementById("savebtn").addEventListener("click", () => {
//   const name = document.getElementById("username").value;
//   localStorage.setItem("username", name);
// });

// document.getElementById("loadbtn").addEventListener("click", () => {
//   const name = localStorage.getItem("username");
//   document.getElementById("output").textContent = `Your username is ${name}`;
// });

// document.getElementById("clearbtn").addEventListener("click", () => {
//   localStorage.removeItem("username");
//   document.getElementById("output").textContent = `No name`;
// });

// const body = document.body;
// const button = document.getElementById('toggle');

// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//     body.classList.add( savedTheme );
// }

// button.addEventListener("click", () => {
//     body.classList.toggle('dark-theme');
//     const theme = body.classList.contains('dark-theme') ? 'dark-theme' : "";
//     localStorage.setItem('theme', theme);
// });



//practical
/*
localStorage.setItem("user", "Ivan");

console.log(localStorage.getItem("user"));

localStorage.removeItem("user");
localStorage.clear();
*/
/*
const num = [1, 2, 3, 4];
localStorage.setItem("numbers", JSON.stringify(num)); 

const parcedNum = JSON.parse(localStorage.getItem("numbers"));
console.log(parcedNum.reduce((sum, num) => sum + num, 0));
*/
/*
const user = {
    name: "anna", 
    age: 25
}; 
sessionStorage.setItem("user", JSON.stringify(user)); 
const parcedUser = JSON.parse(sessionStorage.getItem("user"));
console.log(parcedUser.name);
*/
/*
const save = document.getElementById("saveBtn");

save.addEventListener("click", () => {
    const user = document.getElementById("username").value;

    localStorage.setItem("username", user); 
    alert("Username Saved");

});

const user = localStorage.getItem("username"); 
if (user) {
    const title = document.getElementById("title");
    title.textContent = user; 
}
    */
/*
const change = document.getElementById("change"); 
const body = document.body; 

const savedTheme = localStorage.getItem("theme") || "light";
body.className = savedTheme; 


change.addEventListener("click", () => {
    const theme = body.className;
    const newTheme = theme === "light" ? "dark" : "light"; 
    body.className = newTheme; 
    localStorage.setItem("theme", newTheme);
});
*/

// const check = document.getElementById("checkbox");
// const message = document.getElementById("message");

// window.addEventListener("DOMContentLoaded", () => {

//     const rem = localStorage.getItem('rememberMe'); 
//     if (rem) {
        
//     }

// });


// Слухаємо зміну чекбоксу
const checkbox = document.getElementById("rememberCheckbox");
const message = document.getElementById("message");

// Перевіряємо стан при завантаженні сторінки
window.addEventListener("DOMContentLoaded", () => {
  const remembered = localStorage.getItem("rememberMe");
  
  if (remembered === "true") {
    checkbox.checked = true;
    message.textContent = "Вітаємо знову!";
  }
});
checkbox.addEventListener("change", () => {
  localStorage.setItem("rememberMe", checkbox.checked);
});

