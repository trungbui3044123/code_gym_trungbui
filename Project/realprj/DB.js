class DataObject{
    constructor(id,title,description,category,price,discountPercentage,
        stock,tags,brand,reviews
        // ,images,thumbnail
    ){
        this.id=id,this.title=title,this.description=description,this.category=category,this.price=price,this.discountPercentage=discountPercentage,
        this.stock=stock,this.tags=tags,this.brand=brand,this.reviews=reviews
        // ,this.images=images,this.thumbnail=thumbnail
    }
}

class ListsProducts{
    constructor(url,localkey,paginaterow){
        this.url=url;
        this.localkeys=localkey;
        this.paginaterow=paginaterow;
        this.paginaterow= Number(this.paginaterow)>0?Number(this.paginaterow):1;
         this.lists=[];
        this.init()
    }
    init(){
        this.fetchData().then(()=>{
            // this.getLocal();
           
        })
    }
    fetchData(){
        return fetch(this.url)
        .then((resp) => {
            if(resp.ok){return resp.json()}
            else{throw new Error("Check your API")}
            
        })
        .then(data=>{
            const initArray = data.products.map(record=>new DataObject(
              record.id,record.title,record.description,record.category,record.price,record.discountPercentage,
        record.stock,record.tags,record.brand,record.reviews
        // record.images,record.thumbnail
            ))
            this.setLocal(initArray);
        })
        .catch((err) => { console.log(`You are in fetch problems: ${err.message}`)});
    }

    setLocal(data){
        try{
            if(!data.length){throw new Error(" setLocal(data) data null")}
            localStorage.setItem(this.localkeys,JSON.stringify(data))
        }catch(e){ console.log(`You are in setLocal problems: ${err.message}`)}}
    getLocal(){
        try{
             const lists= JSON.parse(localStorage.getItem(this.localkeys));
            if(!lists.length || !Array.isArray(lists)){throw new Error("  getLocal() data null")}
             return lists;
        }catch(e){ console.log(`You are in setLocal problems: ${err.message}`)}}
    showData( data = [...this.getLocal()]){
        try{
            if(!Array.isArray(data)|| !data.length){ throw new Error("showData data null")}
            return data;
        }catch(e){ console.log(`You are in setLocal problems: ${err.message}`)}}
    
    addData(newObject){
        const data = [...this.getLocal()]
        try{
            if(!newObject.title.length){ throw new Error("Title not null")}
            newObject.id=data.length+1;
            const newArray=[newObject];
            const renderData= [...data,...newArray];
            return this.showData(renderData);
            
        }catch(e){ console.log(`You are in  addData(newObject) problems: ${err.message}`)}}    
      
        
}   

// url= "/product.json"
// localkey="trungbui"
// paginaterow=6
// const listproducts= new ListsProducts(url,localkey,paginaterow)    



 /// nếu cùng 1 file thì nó chạy, còn khác file thì phải dùng bất động bộ



class BankAccount{
    constructor(balance,owner){
        this.balance=balance||0;
        this.owner=owner;
    }
    init(){

    }
    depopsit(amount){
        try{
            if(isNaN(amount)){throw new Error("Amount input with number")}
            
            if(Number(amount)<1){throw new Error("Amount inputed too low")}
             this.balance+=amount;
             return this.getBalance()
        }catch(e){console.log(e.message)}

    }
    withdraw(amount){
        try{
            if(isNaN(amount)){throw new Error("Amount input with number")}
            
            if(Number(amount)<1){throw new Error("Amount inputed too low")}            
            if(Number(amount)>this.balance){throw new Error("Amount inputed too much")}
             this.balance-=amount;
              return this.getBalance()
        }catch(e){console.log(e.message)}
        
    }
    getBalance(){
        return console.log(this.balance)
    }
}

// balance, owner

// deposit(amount), withdraw(amount), getBalance()

// Chặn rút tiền nếu không đủ

class Product{
    constructor(name, price){
        this.name=name;
        this.price=price
    }
}

class Cart{
     constructor(){
       this.lists= []
    } 
addProduct(product){
     this.lists.push(product)
     console.log(this.lists)
} 
removeProduct(name){
    const array= this.lists
    let targetIndex=  array.findIndex((record)=>{
        return record.name===name;
    })
    if(targetIndex){
         array.splice(targetIndex,1);
         return  this.showlist(array)
    }
    if(!targetIndex){
        return this.showlist()
    }
   
    
   
} 
showlist(array= this.lists){
     console.log(array)
}
getTotal(){
    let total=0;
        const array= this.lists
    array.map(record=>{
      total+= record.price
    })
    console.log(total)
}

}

// Class Cart: chứa danh sách sản phẩm, có các method:

// addProduct(product)

// removeProduct(name)

// getTotalPrice()