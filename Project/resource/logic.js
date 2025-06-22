const url = "https://dummyjson.com/products";
const localStorageKey = "trungbui"
// mọi thứ đều là object , truyền value vào, sử dụng method -> code làm sao đẻ đc như này
// show list màn hình : contener, table hiển thị -> thuộc tính method nó là gì

const productObjects = new ProductArray(url, localStorageKey);
// khoi tao tu api va luu vao local producobjectInit

const container = document.getElementById("container");
const tbody = document.getElementById("tbody");
const emptyDive = document.getElementById("empty-state");
const proTable = document.getElementById("proTable");
const paginationZone = document.getElementById("pagination-zone");

// class hieern thi man list su dung lai duoc o moi  noi


// 5 cviec chinh: lay du lieu tu local > ktra data ko rong > xoa noi dung html dang co
// > hien thi danh sach tai khu vuc html da xdinh san
//    > khi may dang o man add,edit... thi lam gi co DOM cua table, no chi co cai container thoi
//  Do do phai gen lai tu dau vi bi mat di roi, 
// 1. lay du lieu tu local: tt: key luu data tai local
class RenderListProduct {
    constructor(localStorageKey, rowPerPage) {
        this.localStorageKey = localStorageKey;
        this.rowPerPage = rowPerPage;
        this.data = [];

        this.init();
    }

    init() {
        this.renderListContainer();
        this.cacheDOMElements();
        this.loadData();
        this.renderPagination();
        this.renderCurrentPage(0);
    }

    renderListContainer() {
        const container = document.getElementById("container");
        container.innerHTML = `
            <div class="header">
            <h1>Product Management System</h1>
            <p>Manage your product efficiently with our comprehensive dashboard</p>
            <button id="addBtn">Add product</button>
        </div>  
    <div class="list-container">
        <h2>Product List</h2>
        <div id="list-zone">
          <div class="empty-state" id="empty-state" style="display:none;">
            <h3>No data found</h3>
            <p>There are no products to display.</p>
          </div>
          <table class="table" id="proTable" style="display:none;">
            <thead>
              <tr>
                <th>id</th>
                <th>product title</th>
                <th>description</th>
                <th>price</th>
                <th>discount %</th>
                <th>stock</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody id="tbody"></tbody>
          </table>
          <div id="pagination-zone"></div>
        </div>
      </div>
    `;
    }

    cacheDOMElements() {
        this.tbody = document.getElementById("tbody");
        this.emptyState = document.getElementById("empty-state");
        this.proTable = document.getElementById("proTable");
        this.paginationZone = document.getElementById("pagination-zone");
    }

    loadData() {
        const stored = localStorage.getItem(this.localStorageKey);
        this.data = stored ? JSON.parse(stored) : [];
    }

    renderPagination() {
        this.paginationZone.innerHTML = "";

        if (this.data.length === 0) return;

        const totalPage = Math.ceil(this.data.length / this.rowPerPage);
        for (let i = 0; i < totalPage; i++) {
            const btn = document.createElement("button");
            btn.textContent = i + 1;
            btn.addEventListener("click", () => this.renderCurrentPage(i));
            this.paginationZone.appendChild(btn);
        }
    }

    renderCurrentPage(pageIndex) {
        if (this.data.length === 0) {
            this.emptyState.style.display = "block";
            this.proTable.style.display = "none";
            return;
        }

        this.emptyState.style.display = "none";
        this.proTable.style.display = "table";

        const start = pageIndex * this.rowPerPage;
        const end = start + this.rowPerPage;
        const pageData = this.data.slice(start, end);

        this.renderTbody(pageData);
    }

    renderTbody(items) {
        this.tbody.innerHTML = "";
        items.forEach((record) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
        <td>${record.id}</td>
        <td>${record.title}</td>
        <td>${record.description}</td>
        <td>${record.price}</td>
        <td>${record.discountPercentage}</td>
        <td>${record.stock}</td>
        <td><img src="${record.thumbnail}" alt="thumbnail" width="100" /></td>
      `;
            this.tbody.appendChild(tr);
        });
    }
}

const renderListProduct = new RenderListProduct(localStorageKey, 15)


// add data: input thông tin > validate thông tin > lưu thông tin, update data
//  > trả lại màn chính với updated data
// 1. Input tt: làm sao để input thông tin : click btn add > chuyển tới màn input tt > function 1
//   + node của btn add. addeventlistener
// 2. gen ra form input tt: function 2
//  + form input tt fix cung
//  + node cuar parent node noi ma form chua
// 3. validate thông tin : function 3
// 4. lưu thông tin : function 4
//5 . trả lại màn main với tt đc input function 5
//-> cần tạo object có 5 function,
//  thuococj tính là gì: node của btn add. addeventlistener

class AddProduct {

    constructor() {
        this.container = document.getElementById("container");
        this.addBtn = document.getElementById("addBtn");
        this.mark = false;

    };
    init() {
        this.eventHandle();
    }
    eventHandle() {
        // addBTN click event    
        this.addBtn.addEventListener("click", (event) => {
            event.preventDefault();

            this.renderAddForm();
        })
        // backBTN click event

        this.container.addEventListener("click", (e) => this.backBTN(e))


    }
    backBTN(e) {

        const btnContent = e.target.textContent;
        if (this.mark && btnContent === "Back to List") {
            renderListProduct.init()
        } else { console.log("loz"); }
    }

    renderAddForm() {
        this.mark = true;
        this.container.innerHTML = `
    <div class="form-section">
                <h2>Add New Product</h2>
                <form id="formAdd">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="title">Product title</label>
                            <input type="text" id="title" name="title" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" id="description" name="description" required>
                        </div>
                        <div class="form-group">
                            <label for="category">category</label>
                            <input type="text" id="category" name="category" required>
                        </div>
                        <div class="form-group">
                            <label for="price">price</label>
                            <input type="text" id="price" name="price">
                        </div>
                        <div class="form-group">
                            <label for="discountPercentage">discountPercentage</label>
                            <input type="text" id="discountPercentage" name="discountPercentage">
                        </div>
                        <div class="form-group">
                            <label for="rating">rating</label>
                            <input type="text" id="rating" name="rating">
                        </div>
                        <div class="form-group">
                            <label for="stock">stock</label>
                            <input type="number" id="stock" name="stock" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="tags">tags</label>
                            <input type="text" id="tags" name="tags" required>
                        </div>
                        <div class="form-group">
                            <label for="brand">brand</label>
                            <input type="text" id="brand" name="brand" required>
                        </div>
                        <div class="form-group">
                            <label for="weight">weight</label>
                            <input type="number" id="weight" name="weight" >
                        </div>

                        <div class="form-group">
                            <label for="images">images</label>
                            <input type="image" id="images" name="images" required>
                        </div>
                        <div class="form-group">
                            <label for="thumbnail">thumbnail</label>
                            <input type="image" id="thumbnail" name="thumbnail" >
                        </div>
                        <div class="form-group">
                            <label for="returnPolicy">returnPolicy</label>
                            <input type="text" id="returnPolicy" name="returnPolicy" >
                        </div>
                        <div class="form-group">
                            <label for="availabilityStatus">availabilityStatus</label>
                            <input type="text" id="availabilityStatus" name="availabilityStatus" required>
                        </div>
                        <div class="form-group">
                            <label for="warrantyInformation">warrantyInformation</label>
                            <input type="text" id="warrantyInformation" name="warrantyInformation" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="reviews">reviews</label>
                            <input type="text" id="reviews" name="reviews" >
                        </div>
                    </div>

                    <button type="button" class="btn btn-secondary" id="Back"">Back to List</button>
                    <button type="submit" class="btn btn-primary" id="submitBtn" >Add User</button>
                </form>
            </div>    
        
        
`
    }

}
const addProduct = new AddProduct();
addProduct.init()



