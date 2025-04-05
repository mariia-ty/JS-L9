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

const body = document.body;
const button = document.getElementById('toggle');

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add( savedTheme );
}

button.addEventListener("click", () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : "";
    localStorage.setItem('theme', theme);
});