import {objectarray} from "./img.js";


const test = JSON.parse(localStorage.getItem("pokelist"));
const resultGet = test.results;// đây là 1 array có 10 phần tử là object. Mỗi object có 2 thuộc tính

/// test
console.log();
console.log();

const table = document.getElementById("maintable");
let list = [];
let namelist = [];

resultGet.forEach(pokemonobject => {
    list.push(Object.values(pokemonobject));// tạo ra 1 array có 10 phần tử là array.
    // pokemonobject chính là 1 object. object.value chính là tạo ra array 2 phần tử

});

list.forEach(pokemonarray => {
    namelist.push(pokemonarray[0]);
    // pokemonarray chính là 1 array có 2 phần tử là value của  name,url   
    let row = document.createElement("tr");

    let cell0 = document.createElement("td");
    let cell_img = document.createElement("img");
    cell_img.alt = 'image of pokemon';
    cell_img.src = "";
    cell_img.style.width = '200px';
    cell_img.style.height = '200px';
    cell0.id = "img"
    cell0.appendChild(cell_img);

    let cell1 = document.createElement("td");
    cell1.innerHTML = pokemonarray[0]   ;
    cell1.id = "name"

    let cell2 = document.createElement("td");
    let cell_a = document.createElement("a");
    cell_a.href = pokemonarray[1];
    cell_a.innerHTML = "detail";
    cell2.id = "detail"
    cell2.appendChild(cell_a);

    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);

});

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    
        images[i].src = objectarray[i].url;
        // images[1].src = pokemonid2.url;
        // images[2].src = pokemonid3.url;
        // images[3].src = pokemonid4.url;
        // images[4].src = pokemonid5.url;
        // images[5].src = pokemonid6.url;
        // images[6].src = pokemonid7.url;
        // images[7].src = pokemonid8.url;
        // images[8].src = pokemonid9.url;
        // images[9].src = pokemonid10.url;
    
}
// if (namelist.includes("zubat")) {
//     document.getElementById("anh").src = pokemonid1.url;
// }
// if (namelist.includes("golbat")) {
//     document.getElementById("anh").src = pokemonid2.url;
// }
// if (namelist.includes("oddish")) {
//     document.getElementById("anh").src = pokemonid3.url;
// } else {
//     cell_img.src = "";

// }

console.log(namelist);

