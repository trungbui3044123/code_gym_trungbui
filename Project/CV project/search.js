const productlist =JSON.parse(localStorage.getItem("productArray"));


let id_list =[];
let title_list =[];
let price_list =[];

productlist.forEach(({
    id,title,price
})=>{
    id_list.push(id);
    title_list.push(title);
    price_list.push(price);
})
 

const idProduct= document.getElementById("idProduct");
const titlePro= document.getElementById("titlePro");
const fromPrice= document.getElementById("fromPrice");
const toPrice= document.getElementById("toPrice");

function search(){
  let  idProduct_value = idProduct.value;
  let  titlePro_value = titlePro.value;
  let  fromPrice_value = fromPrice.value;
  let  toPrice_value = toPrice.value;
console.log(Number(id_list.forEach(idProduct_value)));
  if(id_list.forEach(idProduct_value)){

  }







 return false;
}
