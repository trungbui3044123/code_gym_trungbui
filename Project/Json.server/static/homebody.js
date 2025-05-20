function test() {
    const test = document.getElementById("today").innerHTML;
    const test2 = document.getElementById("yen_vnd").innerHTML;
    console.log(test);
    console.log(test2);
    if (test2) {
        const x = parseFloat(test2) || 0;
        console.log(x);
        console.log(itemdata);
    }

}
const table = document.getElementById("tableMain");
let itemnameData = document.getElementById("item");
let costData = document.getElementById("cost");
let buydate = document.getElementById("buydate");
let quantityData = document.getElementById("quantity");
let storeData = document.getElementById("store");
let unitData = document.getElementById("unit");
let memoData = document.getElementById("memo");
let categoryData = document.getElementById("category");
let levelData = document.getElementById("level");

function addtable() {
    let nrow = document.createElement('tr');
    let cell1 = document.createElement('td');
    cell1.innerHTML = itemnameData.value;
    cell1.id='itemname';
    let cell2 = document.createElement('td');
    cell2.innerHTML = costData.value;
    cell2.class='itemcost';
    let cell3 = document.createElement('td');
    cell3.innerHTML = buydate.value;
    let cell4 = document.createElement('td');
    cell4.innerHTML = quantityData.value;
    let cell5 = document.createElement('td');
    cell5.innerHTML = storeData.value;
    let cell6 = document.createElement('td');
    cell6.innerHTML = unitData.value;
    let cell7 = document.createElement('td');
    cell7.innerHTML = memoData.value;
    let cell8 = document.createElement('td');
    cell8.innerHTML = categoryData.value;
    let cell9 = document.createElement('td');
    cell9.innerHTML = levelData.value;


    nrow.appendChild(cell1);
    nrow.appendChild(cell2);
    nrow.appendChild(cell3);
    nrow.appendChild(cell4);
    nrow.appendChild(cell5);
    nrow.appendChild(cell6);
    nrow.appendChild(cell7);
    nrow.appendChild(cell8);
    nrow.appendChild(cell9);

    table.appendChild(nrow);


}

// function submitdata(){
//     let rowData= document.getElementById("tableMain").getElementsByTagName('tr');
//     let totalCost='';
//     for(let i=1;i<rowData.length;i++){
//         let costCell= rowData[i].querySelector('.itemcost');
//         if(costCell){
//             totalCost+=costValue;
//         }
//     }


//     console.log(`Tổng chi phí ${totalCost}`);
//     return false;
    
// }

function submitdata(){
    let rowData = document.getElementById('tableMain').getElementsByTagName('tr'); // Lấy danh sách các hàng trong bảng
    let totalCost = 0; // Khởi tạo biến tổng cộng

    for(let i = 1; i < rowData.length; i++) { // Bỏ qua hàng tiêu đề (index 0)
        let costCell = rowData[i].getElementsByTagName('td')[1]; // Giả sử cột '値段' là cột thứ 2 (index 1)
        
        if (costCell) { // Kiểm tra nếu có phần tử td
            let costValue = parseFloat(costCell.innerText) || 0; // Chuyển đổi giá trị thành số
            totalCost += costValue; // Cộng dồn vào tổng
        }
    }

    console.log(`Tổng chi phí: ${totalCost}`); // Kiểm tra kết quả trên console
    document.getElementById('totaldaily').innerHTML = `Tổng tiền tiêu : ${totalCost}`;    
    
    return false; // Ngăn form gửi đi
}
