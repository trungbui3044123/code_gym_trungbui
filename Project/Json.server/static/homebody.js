function test(){
    const test= document.getElementById("today").innerHTML;
    const test2= document.getElementById("yen_vnd").innerHTML;
    console.log(test);
    console.log(test2);
    if(test2){
            const x= parseFloat(test2)||0;
            console.log(x);
    }

}