// get data and store to browser
fetch(`https://jsonplaceholder.typicode.com/users`,{method:"GET"})
.then(resp => {
    if(resp.ok){
        return resp.json()
    }else{
        throw new Error("Xem lai api di cu oi!!!")
    }
})
.then(data => { // data la 1 mang , voi 10 object
    localStorage.setItem("rawdata",JSON.stringify(data));
    // const rawdata = localStorage.getItem("rawdata");
    // console.log(data);
})
.catch(err => alert(err))