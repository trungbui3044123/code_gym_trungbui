class Product{
    constructor(
        id,title,description,category,
        price,discountPercentage,rating,stock,tags,
        brand,images,thumbnail,returnPolicy,
        availabilityStatus,warrantyInformation,reviews
    ){
        this.id=id;
        this.title=title;
        this.description=description;
        this.category=category;
        this.price=price;
        this.discountPercentage=discountPercentage;
        this.rating=rating;
        this.stock=stock;
        this.tags=tags;
        this.brand=brand;

        this.images=images;
        this.thumbnail=thumbnail;
        this.returnPolicy=returnPolicy;
        this.availabilityStatus=availabilityStatus;
        this.warrantyInformation=warrantyInformation;
        this.reviews=reviews
    }
}

class ListProducts{
    // new product voi cac truong da define o tung element trong array
    // luu local  va get local voi key
    // CRUD listproduct
    constructor(apitUrl,localKey){
        this.initArray=[];
        this.apitUrl=apitUrl;
        this.localKey=localKey;
        this.init();
    }
    init(){
        this.fetchData().then(()=>this.getlocal());

    }
    fetchData(){
        return fetch(this.apitUrl)
        .then(resp=>{
            if(resp.ok){
                return resp.json()
            }else{throw new Error("Check your API")}
        })
        .then(data=>{
             const raw= data.products
             const setLocalList = raw.map(row=>new Product(
                row.id,
                row.title,
                row.description,
                row.category,
                row.price,
                row.discountPercentage,
                row.rating,
                row.stock,
                row.tags,
                row.brand,

                row.images,
                row.thumbnail,
                row.returnPolicy,
                row.availabilityStatus,
                row.warrantyInformation,
                row.reviews
            ))
            localStorage.setItem(this.localKey,JSON.stringify(setLocalList));
        //    return setLocalList;
        })
        .catch(e=>alert(e.message+ e.name))
    }
    setlocal(){
        localStorage.setItem(this.localKey,JSON.stringify(this.initArray));
    }
    getlocal(){
        const getLocalList= JSON.parse(localStorage.getItem(this.localKey))||[];
        this.initArray=getLocalList;

    }
    addproduct(newProduct){
       this.initArray.push(newProduct);
       this.setlocal();
       console.log("Đã thêm:", this.initArray[this.initArray.length - 1]);

    }
    editproduct(editID,editProduct){
        // tim ra cai editproID trung với cái id nào ở array
        // sử dụng nó như thường
        const index = this.initArray.findIndex(row=>row.id===editID);

        this.initArray[index]=editProduct;
        this.setlocal();
        console.log("Đã edit:", this.initArray[index]);
    }
    deleteProduct(delteID){
        const index = this.initArray.findIndex(row=>row.id===delteID);
        this.initArray.splice(index,1);
        this.setlocal();
    }
    testNewArrayById() {

    console.log("Sản phẩm theo ID:", this.initArray);
}
}

const url = "https://dummyjson.com/products";
const localStorageKey = "trungbui"
const listpro = new ListProducts(url,localStorageKey)

setTimeout(() => {
const editProduct = new Product(
    3,
    "NEWWW PRODUCT MEN",
    "It looks like you’re trying to write a liwData exists, here's a corrected version:",

)
const newProduct1 = new Product(
    31,
    "java",
    "It loversion:",

)
listpro.addproduct(newProduct1);

listpro.editproduct(editProduct.id,editProduct);
console.log(listpro.initArray);


},1000);
//-> settimeout là cái loz gì, cần học thêm