class Store {
    id;
    name;
    listProduct;
    constructor(id, name) {
        this.listProduct = [];
        this.id = id;
        this.name = name;
    }

    getListSearch(nameSearch, priceStart, priceEnd) {
        let listOutput = [];
        for (let i = 0; i < this.listProduct.length; i++) {
            let product = this.listProduct[i];
            if (product.name.includes(nameSearch)) {
                listOutput.push(product);
            }
        }
        let listOutput2 = []
        for (let i =0; i< listOutput.length; i++){
            let product = listOutput[i];
            if(product.price >= priceStart && product.price <= priceEnd){
            listOutput2.push(product);
            }
        }
        return listOutput2;
    }

    getListProduct() {
        return this.listProduct;
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
        this.saveDataInStorage();
    }

    remove(id) {
        let index = -1;
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i];
            if (p.id == id) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            alert("Không có sản phẩm này")
        } else {
            this.listProduct.splice(index, 1);
            for (let i = 0; i < this.listProduct.length; i++) {
                this.listProduct[i].id = i + 1;
            }
        }
        this.saveDataInStorage()
    }

    getProductById(id) {
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i];
            if (id == p.id) {
                return p;
            }
        }
    }

    update(id, newProduct) {
        let index = -1;
        for (let i = 0; i < this.listProduct.length; i++) {
            let p = this.listProduct[i];
            if (p.id == id) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            alert("Không có sản phẩm này")
        } else {
            this.listProduct[index] = newProduct;
        }
        this.saveDataInStorage();
    }

    saveDataInStorage() {
        localStorage.setItem("listProduct", JSON.stringify(this.listProduct));
    }

    getDataInStorage() {
        let data = localStorage.getItem("listProduct");
        if (data) {
            this.listProduct = JSON.parse(data);
        } else {
            this.listProduct = [];
            this.saveDataInStorage()
        }
    }
}



