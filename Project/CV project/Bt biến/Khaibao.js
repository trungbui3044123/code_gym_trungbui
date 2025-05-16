// bài 1
let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';

document.getElementById("result").innerHTML = ('i = ' + i);
document.getElementById("result").innerHTML = ('<br/>');
document.getElementById("result").innerHTML = ('f = ' + f);
document.getElementById("result").innerHTML = ('<br/>');
document.getElementById("result").innerHTML = ('b = ' + b);
document.getElementById("result").innerHTML = ('<br/>');
document.getElementById("result").innerHTML = ('s = ' + s);

// Bài 2
let width = 20;

let height = 10;
let area = width * height;
document.getElementById("result").innerHTML = ('Area = ' + area);

// bài 3
function myFunction() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}
function myFunction2() {
    inputWidth = prompt("Enter the width");
    inputHeight = prompt("Enter the height");
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area = width * height;
    document.getElementById("demo2").innerHTML ="The area is: " + area;
}

const x=83;
const y=9;
console.log(x%=y);