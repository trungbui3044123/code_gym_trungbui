
class UI{
    constructor(){
        this.data = listproducts.showData()
        this.init()
        
    }
    init(){
    
    }
    renderTable(){
        const table= document.getElementById("maintable");
        const tbody= document.getElementById("tbody");
        tbody.innerHTML="";
        try{
        if(!this.data.length|| !Array.isArray(this.data )){throw new Error(" UI.data null")}    
        const {[2]:testObject,...rest}=this.data
        const tr= document.createElement("tr");
        tr.innerHTML=`
            <td>${testObject.id}</td>
            <td>${testObject.title}</td>
            <td><button  onclick="">Edit</button></td>            
        `
            tbody.appendChild(tr)
    
        
        
        // this.data.map(record=>{
        //     const tr= document.createElement("tr");
        // tr.innerHTML=`
        //     <td>${record.id}</td>
        //     <td>${record.title}</td>
        //     <td><button  onclick="">Edit</button></td>            
        // `
        //     tbody.appendChild(tr)

        // })
        
          console.log(rest)
        }catch(e){ console.log(`You are in UI renderTable problems: ${err.message}`)}}



}



const ui= new UI()