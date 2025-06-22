const localUsers = [
                {
                    id: '1',
                    firstName: 'John',

                    email: 'john.doe@example.com',
                    phone: '+1 (555) 123-4567',
                    role: 'Admin',

                    createdAt: new Date().toISOString()
                },
                {
                    id: '2',
                    firstName: 'Jane',

                    email: 'jane.smith@example.com',
                    phone: '+1 (555) 987-6543',
                    role: 'Manager',
                    status: 'Active',
                    createdAt: new Date().toISOString()
                },
                {
                    id: '3',
                    firstName: 'Bob',

                    email: 'bob.johnson@example.com',
                    phone: '+1 (555) 456-7890',
                    role: 'Employee',

                    createdAt: new Date().toISOString()
                },
                {
                    id: '4',
                    firstName: 'Cam',

                    email: 'cam.BuiNgo@example.com',
                    phone: '+1 (555) 456-512',
                    role: 'Employee',

                    createdAt: new Date().toISOString()
                },
                {
                    id: '5',
                    firstName: 'Trung',

                    email: 'trung.bui@example.com',
                    phone: '+1 (555) 456-008',
                    role: 'Employee',

                    createdAt: new Date().toISOString()
                }
            ];
class ListLocalUsers{
    constructor(arrayUser){ // khi báo mỗi record trong array là 1 new object
        this.users=arrayUser.map(user => new LocalUsers(
            user.id,
            user.firstName,
            user.email,
            user.phone,
            user.role,
            user.createdAt,
        ))
    }
}

class LocalUsers {
    constructor(id,firstName,email,phone,role,createdAt){
        this.id=id;
        this.firstName=firstName;
        this.email=email;
        this.phone=phone;
        this.role=role;
        this.createdAt=createdAt;
    }
}    

// tôi có 1 object với cấu trúc là .....
// tôi khai báo class cho object đó để sau sử dụng CRUD
// Object đó của tôi lại nằm trong 1 array, chứ nó ko nằm 1 mình
// tôi phải khai báo 1 class để xử lý : truyền array vào , tạo new object cho từng record
// tạo các loại object và class khác nhau theo api lấy về
// tạo class tức là đang tạo biến global, chỉ cần đúng thứ tự add vào html là nó sẽ lấy ra đc

class apiUsers{
        constructor(
            id,name,password,email,role,
            avatar,creationAt,updatedAt
        ){// PHẢI ĐẶT đúng thứ tự nếu không là không ra
        this.id=id;
        this.name=name;
        this.password=password;
        this.email=email;
        this.avatar=role;
        this.role=avatar;
    }
}
class listApiUsers{
    constructor(initArray){// PHẢI ĐẶT đúng thứ tự nếu không là không ra
        this.apiUser=initArray.map(user =>new apiUsers(
        user.id,
        user.name,
        user.password,
        user.email,
        user.role,
        user.avatar
        ))
    }
}

class ApiUsers3{
   constructor(
    id,firstName,age,email,phone,
    image,address
   ){
    this.id=id;
    this.firstName=firstName;
    this.age=age;
    this.email=email;
    this.phone=phone;
    this.image=image;
    this.address=address;
   }
}
class ListUser3{
    constructor(initArray2){
        this.apiUser2 = initArray2.map(user => new ApiUsers3(
            user.id,
            user.firstName,
            user.age,
            user.email,
            user.phone,
            user.image,
            user.address
        ))
    }
}

class productApi{
    constructor(id,title,description,category,price,discountPercentage,rating,stock,tags){
        this.id=id;
        this.title=title;
        this.description=description;
        this.category=category;
        this.price=price;
        this.discountPercentage=discountPercentage;
        this.rating=rating;
        this.stock=stock;
        this.tags=tags
    }
}
class productList{
    constructor(initArray){
        this.product111= initArray.map(record => new productApi(
            record.id,
            record.title,
            record.description,
            record.category,
            record.price,
            record.discountPercentage,
            record.rating,
            record.stock,
            record.tags,
        ))
    }
}