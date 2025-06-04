const url = `https://fakestoreapi.com/products`;

fetch(url,{method:"get"})
.then(resp =>{
    if(resp.ok){
       return resp.json()
    }else{
        throw new Error("Check lai api")
    }
})
.then(data => {
    localStorage.setItem("productArray",JSON.stringify(data))

})
.catch(err => alert(err))