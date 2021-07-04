document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById("create-task-form")

  form.addEventListener("submit", formHandler)
    
})


function formHandler(e) {
  e.preventDefault()
  console.log("yo what's up")
  
  let userInput = document.getElementById("new-task-description").value
  let toDo = document.getElementById("tasks")
  // let finalProduct = toDo.innerHTML += userInput

  let li = document.createElement("li")

  li.innerHTML = userInput
  toDo.appendChild(li)
  document.getElementById("new-task-description").value = ""



  
}


