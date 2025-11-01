
fetch("/notes/layout/header.html")
.then(data=> data.text())
.then(header=>{
    document.querySelector("header").innerHTML=header;
})

fetch("/notes/layout/footer.html")
.then(data=> data.text())
.then(footer=>{
    document.querySelector("footer").innerHTML=footer;
})

