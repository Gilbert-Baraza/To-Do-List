const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click",addTask);
function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText ==""){
        return alert("Please Enter  a task!")

    }
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click",()=>{
        li.classList.toggle("Completed")
        saveTask()
    });

    //delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList = "delete"
    delBtn.addEventListener("click",(e)=>{
       // e.stopPropagation();//prevent triggering completed
        li.remove();
        li.saveTask();
    });
 li.appendChild(delBtn)
 taskList.appendChild(li);
 taskInput.value = "";
 saveTask();
}
function saveTask(){

    }
