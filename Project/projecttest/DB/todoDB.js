class TodoObject{
    constructor(id,todo,completed,userId){
        this.id=id;

        this.todo=todo;
        this.completed=completed;
        this.userId=userId;
    }
}
class TodoArray{
    constructor(url,keyLocal,rowPerPage){
        this.url=url;
        this.keyLocal=keyLocal;
        this.rowPerPage=rowPerPage;
        this.initArray=[];
        this.init(); 
        this.pages = []

    }
    init(){
        this.fetchData().then(()=>{
            this.getLocal();

        });

    }
    fetchData(){
      return  fetch(this.url)
      .then(resp=>{
        if(resp.ok){return resp.json()}
        else{throw new Error("API nhw loz")}
      })
      .then(data=>{
        const raw= data.todos;
        const setLocalList=raw.map(row =>new TodoObject(
            row.id,
            row.todo,
            row.completed,
            row.userId,
        ))
        this.setLocal(setLocalList);

      })
      .catch(e=>alert(e.message,e.name))
    }
    setLocal(setArray){
        localStorage.setItem(this.keyLocal,JSON.stringify(setArray));
    }
    getLocal(){
       this.initArray= JSON.parse(localStorage.getItem(this.keyLocal));

    }
    validateData(testObject){
        try{
            if(this.initArray.some(row=>row.id===testObject.id)){throw new Error("already have this task")};
            if(this.initArray.some(row=>row.todo===testObject.todo)){throw new Error("Todo already have created")};
        }catch(e){alert(e.message,e.name)}
    }
    addTodo(newTodoObject){
        this.validateData(newTodoObject);
        this.initArray.push(newTodoObject);
        this.setLocal(this.initArray);
        this.getLocal();
    }
    paginateList(){
        this.pages = [];
         const totalPages = Math.ceil(this.initArray.length / this.rowPerPage);
        for(let i=0;i<totalPages.length;i++){
            const startIndex= i*this.rowPerPage;
            const endIndex= this.rowPerPage+startIndex;
            const currentPage = this.initArray.slice(startIndex, endIndex);
            this.pages.push(currentPage);

        }
        this.pages.forEach((page, index) => {
        console.log(`Trang ${index + 1}:`, page);
    });
        // return firstpage=this.initArray.slice(0,this.rowPerPage)
        
    }
}
