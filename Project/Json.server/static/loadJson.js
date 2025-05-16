function getAPI(){
    const xhttp = new XMLHttpRequest();
    const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/jpy.json"
    xhttp.onload = function() {
  // Here you can use the Data
  let responseObject= JSON.parse(xhttp.responseText); 
  let date= responseObject.date; 
  //let jpy= responseObject.jpy; 
  let usd_jpy= responseObject.jpy.usd; 
  let usd_vnd= responseObject.jpy.vnd; 

  document.getElementById("today").innerHTML= `Today: ${date}`;
  document.getElementById("yen_vnd").innerHTML= `JPY/VND Data: ${usd_vnd}`;
  document.getElementById("yen_usd").innerHTML= `JPY/USD Data: ${usd_jpy}`;
}
xhttp.open("GET",url,true);
xhttp.send();
}