// 1.show data
// 1.1 tạo js DB chứa users 
// 1.2 gọi tới nó
// const listUsers1 = new ListLocalUsers(localUsers);
// console.log(listUsers1);


// fetch("https://api.escuelajs.co/api/v1/users")
//     .then(resp => resp.json())
//     .then(rawData => {
//         // localStorage.setItem("apiUsers",JSON.stringify(rawData));

//         const listUser2 = new listApiUsers(rawData);
//         console.log(listUser2);

//     })

// fetch("https://dummyjson.com/users")
//     .then(resp => resp.json())
//     .then(rawData => {

//         const listUser3 = new ListUser3(rawData.users);
//         console.log(listUser3);
//     })


// fetch("https://dummyjson.com/products")
//     .then(resp => resp.json())
//     .then(rawData => {

//         const listProduct = new productList(rawData.products);
//         console.log(listProduct);
//     })

// Tạo 1 class làm công việc lấy fetch, lưu storage
// 

class fetchData {

    constructor(url) {
        this.url = url,
            this.initArray = []
    }
    // init() {
    //     fetch(this.url)
    //         .then(resp => resp.json())
    //         .then(rawData => {
    //             // localStorage.setItem("listData",JSON.stringify(rawData));
    //             this.initArray = rawData;
    //             return this.initArray;
    //         })
    //     // console.log(this.initArray.products);
    // }
    init() {
        return fetch(this.url)
            .then(resp => resp.json())
            .then(rawData => {
                this.initArray = rawData;
                return this.initArray.products; // Trả dữ liệu về nếu muốn
            });
    }

}