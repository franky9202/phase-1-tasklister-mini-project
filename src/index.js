document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener
  ("submit", function(e){
    e.preventDefault()
    listToDo(document.getElementById("new-task-description").value)
  })

});

function listToDo(toDo){
  let entry = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click", deleteList)
  btn.textContent = " x "
  entry.textContent = toDo
  entry.appendChild(btn)
  let child = document.getElementById("tasks").appendChild(entry)
  child.className = "toDos"
}
function deleteList(e){
  e.target.parentNode.remove()
}
document.getElementById("colorChanger").addEventListener('change',colorChange)
function colorChange(){
  let color = document.getElementById("colorChanger").value
  let list = document.getElementsByTagName('ul')
  for(const item of list){
    if(color === "red"){
      item.style.color = "red"
    }
    if(color === "yellow"){
      item.style.color = "yellow"
    }
    if(color === "green"){
      item.style.color ="green"
    }
  }
}
