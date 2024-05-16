const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    listContainer.appendChild(li);
    let span = document.createElement("span");
    let description = document.createElement("input");
   
    span.innerHTML = "Delete";
    description.placeholder = "Add description";
    description.type = "text";
    description.id = "input-description";
 
    li.appendChild(span);
    li.appendChild(description);
    
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
     if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
   
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();