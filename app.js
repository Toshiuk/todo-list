const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = `
    <li class="item">
    <span>${todo}</span>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="delete"
    viewBox="0 0 20 20"
    fill="currentColor"
    >
    <path
    fill-rule="evenodd"
    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
    clip-rule="evenodd"
    />
    </svg>
    </li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

document.querySelector(".source").addEventListener("click", function () {
  let audio = new Audio("assets/sound.mp3");
  audio.play();
  setTimeout(function () {
    document.querySelector(".img").style.display = "block";
  }, 340);
  setTimeout(function () {
    document.querySelector(".img").style.display = "none";
  }, 1550);
});
