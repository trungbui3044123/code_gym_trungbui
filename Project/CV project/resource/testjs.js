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

