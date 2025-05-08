function validateForm() {
    let itemname = document.getElementById("itemname").value;
    if (itemname == "") {
      alert("Item Name must be filled out");
      return false;
    }
    let itemprice = document.getElementById("itemprice").value;
    let amount = document.getElementById("amount").value;

    if (isNaN(itemprice)) {
        alert("Item Price must be number");
      return false;
      } 
      if (isNaN(amount)) {
        alert("Amount must be number");
      return false;
      }  
  }