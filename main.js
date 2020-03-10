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
    render();
}

let removeItem = (index) => {
    toDoList.splice(index,1)
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
        list-style-type: none"
        onclick="toggleDone(${index})">${item.item}<button onclick="removeItem(${index})">X</button>
        </li>`
    }).join('');

    document.getElementById("resultArea").innerHTML = htmlToDoArray;
}

function toggleDone (index) {
    toDoList[index].isDone=!(toDoList[index].isDone);
    render(); 

    console.log(toDoList);
    console.log(htmlToDoArray);
}