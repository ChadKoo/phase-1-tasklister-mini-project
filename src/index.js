document.addEventListener("DOMContentLoaded", () => { // Ensures HTML Structure loads fully first befor js  
  let form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevents defualt refresh
    
    const task = e.target.querySelector("#new-task-description").value;  // Get the input value

    if (!task) return//Exits the function if blank

    handleToDo(task);  
      form.reset()//Resets form after submitting
});
});     

// Function to create and delete task
function handleToDo(todo) {
  let li = document.createElement('li');  // Create a new <li> element
  let btn = document.createElement('button')//Creates a button

  btn.addEventListener('click', handleDelete)//add an event Listener to the delete button
  btn.textContent = 'x'
  li.textContent = `${todo  }`;  // Set the text content of the <li> to the task description w/ spaces
  document.querySelector("#tasks").appendChild(li)  // Append the new <li> element to the <ul>
  li.appendChild(btn)// Appends a button to the <li> element

}

  function handleDelete(e){
    e.target.parentNode.remove(); //Removes <li> element when delete button is clicked
  }
 
  
