 // Get Current Date
 const dt = document.getElementById("dt");
 const d = new Date();
 const day = d.getDate();
 const month = d.getMonth()+1;
 const year = d.getFullYear();
 dt.textContent = (`Today Is : ${day}/${month}/${year}`); 

 const inputTask = document.getElementById("inputTask");
 const addTask = document.getElementById("addTask");
 const taskList = document.querySelector('#taskDiv ul');

 // Add Task 
 addTask.addEventListener("click", function(){
     const text = inputTask.value;

     if(text.trim() !== ''){
         // List Items
         const listItem = document.createElement("li");
         listItem.classList.add("my_list")

         // Div
         const div = document.createElement("div");
         div.textContent = text
         div.classList.add("my_div");

         // Edit Button
         const editTask = document.createElement("button");
         editTask.innerHTML = "Edit";
         editTask.classList.add("btn", "btn-outline-secondary", "my_btn")
         editTask.addEventListener("click", function(){
             if(editTask.textContent == "Edit"){
                 div.contentEditable = true;
                 div.focus();  
                 editTask.textContent = "Save";
             }else if(editTask.textContent == "Save"){
                 div.contentEditable = false;
                 editTask.textContent = "Edit";
             }
             
         });

         // Delete Button
         const deleteTask = document.createElement("button");
         deleteTask.innerHTML = "Delete";
         deleteTask.classList.add("btn", "btn-outline-secondary","my_btn")
         deleteTask.addEventListener("click", function(){
             listItem.remove();
         });

         // Append Element's in listItem
         listItem.appendChild(div);
         listItem.appendChild(editTask);
         listItem.appendChild(deleteTask);

         // Append listItem in taskList
         taskList.appendChild(listItem);

         inputTask.value = '';
     } else {
         alert("Please Enter Task..!");
     }

 });
