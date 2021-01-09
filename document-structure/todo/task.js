const tekst = document.getElementById('task__input');
const taskList = document.querySelector('.tasks__list');
const addBtn = document.getElementById('tasks__add');
addBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const title = tekst.value;
if (!title) {
        return;
      }
 taskList.innerHTML += `
        <div class="task">
    <div class="task__title">
    ${title}
     </div>
     <a href="#" class="task__remove">&times;</a>
  </div>
        `;
tekst.value = "";
 })
taskList.addEventListener('click', (e) => {
    if (!e.target.classList.contains('task__remove')) {
      return;
    }
    deleteTask(e);
  });
function deleteTask(e) {
const currentTask = e.target.closest('.task');
currentTask.remove();
  }
