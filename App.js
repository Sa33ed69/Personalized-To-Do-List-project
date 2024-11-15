document.getElementById("add-task-btn").onclick = () => {
  const taskText = document.getElementById("new-task").value;
  if (!taskText) return;
  const taskItem = document.createElement("li"),
    taskContent = document.createElement("span"),
    completeBtn = document.createElement("button"),
    deleteBtn = document.createElement("button");
  taskItem.className = "task-item";
  taskContent.className = "task-text";
  taskContent.textContent = taskText;
  completeBtn.className = "complete-btn";
  completeBtn.textContent = "Complete";
  completeBtn.onclick = () => taskContent.classList.toggle("completed");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskItem.remove();
  taskItem.append(taskContent, completeBtn, deleteBtn);
  document.getElementById("task-list").append(taskItem);
  document.getElementById("new-task").value = "";
};
