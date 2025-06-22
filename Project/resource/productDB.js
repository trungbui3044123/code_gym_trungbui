class Product{
    constructor(id,title,description,category,
        price,discountPercentage,rating,stock,tags,
        brand,weight,images,thumbnail,returnPolicy,
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
        this.weight=weight;
        this.images=images;
        this.thumbnail=thumbnail;
        this.returnPolicy=returnPolicy;
        this.availabilityStatus=availabilityStatus;
        this.warrantyInformation=warrantyInformation;
        this.reviews=reviews
    }
}
class ProductArray{// bien tung cai thanh object product, fetch api
    constructor(url,localStorageKey){
        this.url=url;
        this.localStorageKey=localStorageKey;
        this.init();
    }
    init(){
        return fetch(this.url)
        .then(resp=>{
            if(resp.ok){return resp.json()}
            else{ throw new Error("API check again")}
        })
        .then(rawData=>{
            const productslist= rawData.products;
            const productObjects = productslist.map(row => new Product(
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
                row.weight,
                row.images,
                row.thumbnail,
                row.returnPolicy,
                row.availabilityStatus,
                row.warrantyInformation,
                row.reviews
            ))
           localStorage.setItem(`${this.localStorageKey}`,JSON.stringify(productObjects)) ;
           
           return productObjects;
        })
        .catch(e=>alert(e.message))
    }
}

