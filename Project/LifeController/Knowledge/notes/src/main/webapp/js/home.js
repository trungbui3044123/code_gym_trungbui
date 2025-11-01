
const searchNoteType=document.querySelector(".searchNoteType");
const noteTable= document.querySelector(".noteTable");
const noteTableBody= document.querySelector(".noteTableBody");
const typeLists=[];
fetch("/notes/notetypes")
.then(data=>data.json())
.then(noteType=>{
    // searchNoteType.innerHTML="";
    noteType.forEach(type => {
        const option=document.createElement("option");
        option.setAttribute("value",type.typeId);
        option.innerText=type.typeName;
        searchNoteType.appendChild(option);
        typeLists.push(type.typeName);
        localStorage.setItem("typeLists",JSON.stringify(noteType));
    });
    console.log(noteType);

})
// show list Note
fetch("/notes/notelist")
.then(date=>date.json())
.then(listNote=>{
   if(listNote===null){
    noteTableBody.innerHTML=`<tr><h3>Data not found</h3></tr>`
   }else{
     parseTable(listNote);
   }
})
// Search
function searchNote(e){
    e.preventDefault();
    const searchParam={
       searchTitle: document.querySelector(`input[type="text"]`).value, 
       searchNoteType: parseInt(document.querySelector(`select[name="searchNoteType"]`).value),
       searchNoteDate: document.querySelector(`input[type="date"]`).value
    }
    fetch("/notes/notelist",{
        method:`POST`,
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(searchParam)
    })
    .then(resp=>resp.json())
    .then(note=>{
        if(!note || note.length === 0){
            console.log(note);
           noteTableBody.innerHTML=`<h3>Not found Note</h3>` ;
        }else{
           parseTable(note); 
        }
    })
}


//Utils function
function parseTable(listNote){

   noteTableBody.innerHTML="";
   listNote.forEach(note => {
    const row=document.createElement('tr');
    row.innerHTML=`
        <td>${note.id}</td>
        <td>${note.title}</td>
        <td>${note.typeName}</td>
        <td>${note.created}</td>
        <td><button onclick="NoteDetails(${note.id})">Details</button></td>
    `
    noteTableBody.appendChild(row);
   });

}

function NoteDetails(id){
fetch(`/notes/notelist?id=${id}`)
.then(resp=>resp.json())
.then(note=>{
   if(note===null){
    alert("Error")
   }else{
    window.location.href=`/notes/html/notedetails.html?id=${id}`;
   }
})
}