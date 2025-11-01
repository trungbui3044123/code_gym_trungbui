
const loginForm=document.getElementById("loginForm");

loginForm.addEventListener("submit",function(event){
  event.preventDefault();
  const loginAcc={
    username:document.querySelector(`input[type="text"]`).value,
    password:document.querySelector(`input[type="password"]`).value
  }  
  const loginAccJson= JSON.stringify(loginAcc);
  fetch("/notes/login",{
    method:`POST`,
    headers:{"Content-Type":"application/json"},
    body:loginAccJson
  })
  .then(data=>data.json())
  .then(data=>{
      console.log(data);
      if(!data||"Error"===data.status){
        document.querySelector(".errorDiv").innerHTML=`<h3>${data.message}</h3>`;
        loginForm.reset();
      }else{
        window.location.href="/notes/html/home.html";
      }  
  })
  .catch(err => console.error("Fetch error:", err));

});