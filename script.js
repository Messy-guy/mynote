const notesContainer = document.querySelector(".notes-container");
const Createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes()
{
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

Createbtn.addEventListener("click",()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    inputBox.appendChild(img); 
    inputBox.appendChild(document.createTextNode("\u00A0")); 
    notesContainer.appendChild(inputBox);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
}
    else if(e.target.tagName=="p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }

    })