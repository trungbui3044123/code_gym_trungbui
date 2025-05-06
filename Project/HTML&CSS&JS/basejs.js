
const d= new Date();
document.getElementById("date").innerHTML = d;

function validateForm() {
    let x = document.forms["trung"]["item1"].value;
    if (x == "") {
      alert("Item's name must be filled out");
      return false;
    }
    let y = document.forms["trung"]["price"].value;
    if (y == "") {
      alert("Item's price must be filled out");
      return false;
    }
  }