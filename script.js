const taskList = document.getElementById("taskList");

function addTask() {

    const taskInput = document.getElementById("taskInput");
    const dueDate = document.getElementById("dueDate");

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerHTML = `<strong>${task}</strong><br>Due: ${dueDate.value || "No Date"}`;

    const btnDiv = document.createElement("div");
    btnDiv.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = () => {
        span.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";
    deleteBtn.onclick = () => {
        li.remove();
    };

    btnDiv.appendChild(completeBtn);
    btnDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnDiv);

    taskList.appendChild(li);

    taskInput.value = "";
    dueDate.value = "";
}

function searchTasks() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const tasks = taskList.getElementsByTagName("li");

    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i].innerText.toLowerCase();

        if (taskText.includes(searchText)) {
            tasks[i].style.display = "";
        } else {
            tasks[i].style.display = "none";
        }
    }
}