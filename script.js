const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    attachEventListeners();
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div");
    let deleteImg = document.createElement("img");
    let saveImg = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    deleteImg.src = "images/delete.png";
    deleteImg.className = "delete";
    deleteImg.setAttribute("contenteditable", "false");

    saveImg.src = "images/save.png";
    saveImg.className = "save";
    saveImg.setAttribute("contenteditable", "false");

    inputBox.appendChild(deleteImg);
    inputBox.appendChild(saveImg);
    inputBox.appendChild(document.createTextNode("\u00A0")); 
    notesContainer.appendChild(inputBox);

    attachEventListeners();
});

function attachEventListeners() {
    const notes = document.querySelectorAll(".input-box");

    notes.forEach(note => {
        note.querySelector('.delete').addEventListener('click', function () {
            note.remove();
            updateStorage();
        });

        note.querySelector('.save').addEventListener('click', function () {
            updateStorage();
        });
    });
}

function disableButtonEditing() {
    const buttons = document.querySelectorAll(".delete, .save");
    buttons.forEach(button => {
        button.setAttribute("contenteditable", "false");
    });
}
disableButtonEditing();
