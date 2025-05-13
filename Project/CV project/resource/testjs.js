function testme() {
    document.title = "New title";
}
function testme2() {
    var url = document.cookie;
    alert(url);
}

function testme3() {
    var title = document.forms["form"]["productName"].value;
    var node = document.getElementById("title1");
    node.innerHTML = title;
    return false;

}
function testme4() {
    var title = document.forms["form2"]["productName"].value;
    var rows= document.querySelectorAll(".table2 th")
    // document.getElementById("Dynamic").innerHTML = title;    
    for (let i = 0; i < rows.length; i++) {
        rows[3].innerHTML = title;
    }


}
function testme5() {
    // Lấy data từ input
    var date= document.forms["form3"]["date"].value;
    var morningact= document.forms["form3"]["morningact"].value;
    var noonact= document.forms["form3"]["noonact"].value;
    
    // Tạo thẻ table
    var table =  document.getElementById("table2");

    // Tạo 1 dòng (tr)
    var row = document.createElement("tr");

    // Tạo 2 ô (td)
    var cell1 = document.createElement("td");
    cell1.innerHTML = date;
    var cell2 = document.createElement("td");
    cell2.innerHTML = morningact;
    var cell3 = document.createElement("td");
    cell3.innerHTML = noonact;

    // Thêm ô vào dòng
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    // Thêm dòng vào bảng
    table.appendChild(row);


}

// Tạo 1 table input các data, rồi submit thì in nó ra 1 file txt