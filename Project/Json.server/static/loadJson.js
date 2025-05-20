function getAPI() {
  const xhttp = new XMLHttpRequest();
  let time = new Date();
  let year = time.getFullYear(); console.log(year);
  let month = time.getMonth() + 1; console.log(month);
  let date = time.getDate(); console.log(date);
  
  document.getElementById("today").innerHTML = `Today: ${year}-${month}-${date}`;

  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-05-20/v1/currencies/jpy.json`;
  xhttp.onload = function () {
    // Here you can use the Data
    let responseObject = JSON.parse(xhttp.responseText);
    let date = responseObject.date;
    //let jpy= responseObject.jpy; 
    let usd_jpy = responseObject.jpy.usd;
    let usd_vnd = responseObject.jpy.vnd;


    document.getElementById("yen_vnd").innerHTML = `JPY/VND Data: ${usd_vnd}`;
    document.getElementById("yen_usd").innerHTML = `JPY/USD Data: ${usd_jpy}`;
  }
  xhttp.open("GET", url, true);
  xhttp.send();
}
