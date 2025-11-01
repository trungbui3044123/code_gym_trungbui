function parseListTypeTable(listNoteType) {
  const typeTable = document.querySelector(".typeTable");
  listNoteType.forEach((type) => {
    const row = document.createElement("tr");
    row.setAttribute("data-id", type.typeId);
    row.innerHTML = `
    <td><a href="">${type.typeId}</a></td>
    <td>${type.typeName}</td>
    <td>${type.typeDes}</td>
    <button onclick="deleteType(${type.typeId})">Delete</button>
    `;
    typeTable.appendChild(row);
  });
}

fetch("/notes/notetypes/add")
  .then((data) => data.json())
  .then((listNoteType) => {
    parseListTypeTable(listNoteType);
  });

const createType = document.querySelector(".createType");
createType.addEventListener("submit", function (event) {
  event.preventDefault();
  const newType = {
    typeName: document.querySelector(`.typeName`).value,
    typeDes: document.querySelector(`.TypeDes`).value,
  };
  console.log(newType);
  fetch("/notes/notetypes/add", {
    method: `POST`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newType),
  })
    .then((result) => result.json())
    .then((result) => {
      if (!result || "Error" === result.status) {
        document.querySelector(".addFailsDiv").innerHTML = `${result.message}`;
        document.querySelector(".createType").reset();
      } else {
        window.location.href = "/notes/html/notetypes.html";
      }
    })
    .catch((err) => console.error("Fetch error:", err));
});

function deleteType(deleteId) {

  if (confirm("Do you want to delete this type")) {
    fetch(`/notes/notetypes/delete?id=${deleteId}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (!resp || "Error" === resp.status) {
          document.querySelector(
            ".addFailsDiv"
          ).innerHTML = `${resp.message}`;
        } else {
          window.location.href = "/notes/html/notetypes.html";
        }
      });
  }
}
