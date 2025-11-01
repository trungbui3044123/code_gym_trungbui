// const detailNote = {
//     title: document.querySelector(`input[name="title"]`).value,
//     content: document.querySelector(`textarea[name="content"]`).value,
//     typeid: parseInt(document.querySelector(`select[name="noteType"]`).value),
//     typeName: document.querySelector(`select[name="noteType"] `).textContent,
//     created: document.querySelector(`input[type="date"]`).value,
//   };
const detailNote = {
    id: document.querySelector(`input[type="hidden"]`),
    title: document.querySelector(`input[name="title"]`),
    content: document.querySelector(`textarea[name="content"]`),
    typeName: document.querySelector(`select[name="noteType"] `),
    // typeNameReadOnly: document.getElementById(`typeNameDisplay`),
    created: document.querySelector(`input[type="date"]`),
    submit: document.querySelector(`input[type="submit"]`)
  };
const noteTypeList = JSON.parse(localStorage.getItem("typeLists"));

const urlParams= new URLSearchParams(window.location.search);
const id=urlParams.get("id");

fetch(`/notes/notelist?id=${id}`)
.then(resp=>resp.json())
.then(note=>{
  console.log(note);
  parseSelect(note);
  detailNote.id.value=note.id;
  detailNote.title.value=note.title;
  detailNote.content.textContent=note.content;
  detailNote.created.value=note.created;
})

function editNote(e){
  e.preventDefault();
  if(detailNote.submit.getAttribute("value")==="Submit"){
   //khi btn = submit thi chay fetch va back ve home
  submitForm(e);
 
  }else{
    // khi btn = edit thi click de sang submit
  detailNote.submit.setAttribute("value","Submit")
  detailNote.title.removeAttribute("readonly");
  detailNote.content.removeAttribute("readonly");
  parseSelect(noteTypeList);
  detailNote.created.removeAttribute("readonly");
  
  }
}
function submitForm(e){
  e.preventDefault();
  const editNoteValue = {
  id: document.querySelector(`input[type="hidden"]`).value,
  title: document.querySelector(`input[name="title"]`).value,
  content: document.querySelector(`textarea[name="content"]`).textContent,
  typeid: document.querySelector(`select[name="noteType"] `).value,
  typeName: document.querySelector(`select[name="noteType"] `).textContent,
  created: document.querySelector(`input[type="date"]`).value,
};
if (confirm("Do you want to edit this note")){
  fetch("/notes/note/edit",{
    method:`PUT`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editNoteValue)
  })
  .then(resp=>resp.json())
  .then(result=>{
    if(!result||result.status==="Error"){
       alert(`${result.message}`);
       
    }else{
      window.location.href="/notes/html/home.html";
    }
  })
  }  
}
// noteType select
function parseSelect(isArray){
  const noteTypeSelect = document.getElementById("noteType");

  if(Array.isArray(isArray)){

  isArray.forEach((type) => {
  const option = document.createElement("option");
  option.setAttribute("value", type.typeId);
  option.innerHTML = type.typeName;
  noteTypeSelect.appendChild(option);
});
  }else{
  const option = document.createElement("option");
  option.setAttribute("value", isArray.typeId);
  option.innerHTML = isArray.typeName;
  noteTypeSelect.appendChild(option);

  }

}


// delete
function deleteNote(e){
  if(confirm("Confirm to delete note")){
  fetch(`/notes/note/delete?id=${id}`,{
    method:`DELETE`,
    headers: {
        "Content-Type": "application/json",
      },
  })
  .then(resp=>resp.json())
  .then(result=>{
    if(result.status==="Success"){
      window.location.href="/notes/html/home.html"
    }else{
      alert(`${result.message}`)
    }
  })
  }

}