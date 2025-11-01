// calculate
const display = document.querySelector(".display");
function appendValue(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// noteType select
const noteTypeList = JSON.parse(localStorage.getItem("typeLists"));
const noteTypeSelect = document.getElementById("noteType");
console.log(noteTypeList);
noteTypeList.forEach((type) => {
  const option = document.createElement("option");
  option.setAttribute("value", type.typeId);
  option.innerHTML = type.typeName;
  noteTypeSelect.appendChild(option);
});

// submit form
// const submitForm=document.getElementById("noteForm");
function submitForm(e) {
  e.preventDefault();
  const newNote = {
    title: document.querySelector(`input[name="title"]`).value,
    content: document.querySelector(`textarea[name="content"]`).value,
    typeid: parseInt(document.querySelector(`select[name="noteType"]`).value),
    typeName: document.querySelector(`select[name="noteType"] option:checked`)
      .textContent,
    created: document.querySelector(`input[type="date"]`).value,
  };
  if (confirm("Do you want to add this note")) {
    fetch("/notes/note/add", {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    })
      .then((resp) => resp.json())
      .then((result) => {
        if (!result || "Error" === result.status) {
          alert("Added fails");
          window.location.href = "/notes/html/notes.html";
        } else {
          window.location.href = "/notes/html/home.html";
        }
      });
  } else {
     alert("Something went wrong. Please try again.");
  }
}

// function test(e){
//     e.preventDefault();
//     const newNote={
//      title:document.querySelector(`input[name="title"]`).value,
//      content: document.querySelector(`textarea[name="content" ]`).value,
//      typeid: document.querySelector(`select[name="noteType" ]`).value,
//      created: document.querySelector(`input[type="date"]`).value,
//    }
//    console.log(newNote);
// }
