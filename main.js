let inputValue = document.getElementById("toDoInput")

let toDoList = []

let htmlToDoArray = []

let toDoValue;

let doneArray = []
let notDoneArray = []
let filterArea = document.getElementById("filterArea");

let addItem = () => {
    toDoValue = inputValue.value;
    let toDoItem = {item: toDoValue, isDone: false};
    toDoList.push(toDoItem);
    inputValue.value = "";
    saveToDo();
    render();
}

let removeItem = (index) => {
    toDoList.splice(index,1)
    saveToDo();
    render();
}

let render = (status) => {
    //map index: of current number
    let filter;
    if(status == "done"){
        filter = toDoList.filter(item => item.isDone)
    }
    else if(status == "notDone"){
        filter = toDoList.filter(item => !item.isDone)
    } 
    else {
        filter = toDoList
    }

    htmlToDoArray = filter.map((item, index) => {
        return `<li style="text-decoration: ${item.isDone ? 'line-through' : ''}; 
        list-style-type: none; color: ${item.isDone ? '#749C75' : '#92140C'}"
        onclick="toggleDone(${index})"><img src="${item.isDone ? 'yescheck.png' : ''}" width="20">${item.item}
        <button style="background-color: #FFBF46" onclick="removeItem(${index})">X</button>
        </li>`
    }).join('');

    document.getElementById("resultArea").innerHTML = htmlToDoArray;
}

function toggleDone (index) {
    toDoList[index].isDone=!(toDoList[index].isDone);
    saveToDo();
    render(); 

    console.log(toDoList);
    console.log(htmlToDoArray);
}

function saveToDo(){
    let str = JSON.stringify(toDoList);
    localStorage.setItem("toDoList", str);
}

function getToDo(){
    let str = localStorage.getItem("toDoList");
    toDoList = JSON.parse(str);
    if (!toDoList){
        toDoList = [];
    }
}

getToDo()
render()