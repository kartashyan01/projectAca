const showToDoBtn = document.querySelector("#show-todo-btn");
const main = document.querySelector("main");

async function getToDoes() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
     
    return data;
}

function randerTodos(todos) {
    main.innerHTML = "";
    const ul = document.createElement("ul");
    todos.forEach(({title, completed}) => {
        const li = document.createElement("li");

        li.className = completed ? "completed" : "not-completed";
        li.innerText = title;
        ul.appendChild(li);
    })
    main.appendChild(ul);
}


async function showBtnClickHandler(){
    const todos = await getToDoes();
    
    console.log(todos);
    randerTodos(todos); 
    
}

showToDoBtn.addEventListener("click", showBtnClickHandler)

 