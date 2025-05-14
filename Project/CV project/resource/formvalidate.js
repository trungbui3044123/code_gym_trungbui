function formtopValidate(){
    var rd = document.forms["formtop"]["rd"].value;
    if (rd==0){
        alert("Pick 1 price ");
        return false
    }
}

var thu = ["Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"];
var date=[1,2,3,4,5,6,7,
    8,9,10,11,12,13,14,
    15,16,17,18,19,20,21,
    22,23,24,25,26,27,28,
    29,30,31];

function addtable(){
    var table= document.getElementById("calendar");
    var newtr1= document.createElement("tr");

    var newtr3= document.createElement("tr");
    var newtr4= document.createElement("tr");
    var newtr5= document.createElement("tr");
    var newtr6= document.createElement("tr");

   
    for(let i=0;i<thu.length;i++){
        var newth= document.createElement("th");
        newth.innerHTML=thu[i];
        newtr1.appendChild(newth)
    }
    table.appendChild(newtr1);
    

    var week1= document.createElement("tr");
    for(let i=0;i<7;i++){
        var newtd= document.createElement("td");
        newtd.innerHTML=date[i];
        week1.appendChild(newtd);
    }
    table.appendChild(week1);
    var week2= document.createElement("tr");
    for(let i=7;i<14;i++){
        var newtd= document.createElement("td");
        newtd.innerHTML=date[i];
        week2.appendChild(newtd);
    }
    table.appendChild(week2);
    var week3= document.createElement("tr");
    for(let i=14;i<21;i++){
        var newtd= document.createElement("td");
        newtd.innerHTML=date[i];
        week3.appendChild(newtd);
    }
    table.appendChild(week3);
    var week4= document.createElement("tr");
    for(let i=21;i<28;i++){
        var newtd= document.createElement("td");
        newtd.innerHTML=date[i];
        week4.appendChild(newtd);
    }
    table.appendChild(week4);
    var week5= document.createElement("tr");
    for(let i=28;i<31;i++){
        var newtd= document.createElement("td");
        newtd.innerHTML=date[i];
        week5.appendChild(newtd);
    }
    table.appendChild(week5);
    
    

}