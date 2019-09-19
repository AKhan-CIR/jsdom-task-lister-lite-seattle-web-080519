 document.addEventListener("DOMContentLoaded", function() {
 

 document.querySelector("#create-task-form").addEventListener("submit", function(e){
 e.preventDefault();

 //Get value from form
 const todo = document.querySelector("#new-task-description").value;
 //Create new li
 const li = document.createElement("li");
 //Select Location to add List
 const ul = document.querySelector("#tasks");
     
 addListItem(todo, li, ul)
 //Reset Form Data   
 e.target.reset()
 });
});

function addListItem(todo, li, ul) {
  //Add id to to li for future access
  li.setAttribute("id", "tasks-list-item");
  //Add form value to li
  li.innerText =  todo;
  //Add li to UL
  ul.appendChild(li);
}