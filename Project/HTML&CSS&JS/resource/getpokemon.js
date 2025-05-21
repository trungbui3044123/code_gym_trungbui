const endpoint =["pokemon-species","contest-effect","encounter-method","evolution-chain","item","contest-type"];
const amount =[10,20,30,40,50,60,100,200,300];
fetch(`https://pokeapi.co/api/v2/${endpoint[0]}/?limit=${amount[3]}`,{method:"GET"})
.then(resp =>{
    if(resp.ok){
        return resp.json()
    }
    else{
        throw new Error("Link api nhu cai dau buoi, xem lai link hay bien truyen vao link di")
    }
})
.then(data => 
{
    localStorage.setItem("pokelist",JSON.stringify(data));
//    let test= localStorage.getItem("pokelist");
//  console.log(test)   ;
}
    )
.catch(err => alert(err))