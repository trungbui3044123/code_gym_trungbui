// Show list sản phẩm từ API
// Màn list có search sản phẩm
// Click btn add thì mở màn add
// Click vào sản phẩm show màn details, delete sản phẩm
function renderList(record) {
    const tbody = document.getElementById("tbody"); // show co data 
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${record.id}</td>
        <td>${record.title}</td>
        <td>${record.description}</td>
        <td>${record.price}</td>
        <td>${record.discountPercentage}</td>
        <td>${record.stock}</td>
        <td><img src="${record.thumbnail}" alt="thumbnail" width="150" /></td>

    `;
    tbody.appendChild(tr);
}


class UserShow {
    constructor(initArray) {
        this.initArray = initArray;
    }

    init() {

        const emptyDiv = document.getElementById("empty-state"); // hide no data
        const table = document.getElementById("proTable"); // hide no data


        if (this.initArray.length === 0) {
            emptyDiv.style.display = "block";
            table.style.display = "none";

        } else {
            emptyDiv.style.display = "none";
            table.style.display = "table";

            this.initArray.forEach(record => {
                renderList(record);
            });
        }
    }
}


const url = "https://dummyjson.com/products";

const productObjects = new ProductArray(url);
productObjects.init().then(productslist => {
    // data chinh la list product
    const userShow = new UserShow(productslist);
    userShow.init()
    console.log(productslist[10])

});// da co list product o localstorage

// DB + render HTML + save local + handle btn add

function addProduct() {
    console.log("aaa");
    const container = document.getElementById("container"); // function add
    container.innerHTML = `
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

                    <button type="button" class="btn btn-secondary" id="Back" onclick="return backtoList()">Back to List</button>
                    <button type="submit" class="btn btn-primary" id="submitBtn" >Add User</button>
                </form>
            </div>    
        
        
        `

        return false;
}
function backtoList() {
  const data = JSON.parse(localStorage.getItem("productslist"));

  const container = document.getElementById("container");
  container.innerHTML = `
    <table class="table" id="proTable">
      <thead>
        <tr>
          <th>id</th>
          <th>product title</th>
          <th>description</th>
          <th>price</th>
          <th>discountPercentage</th>
          <th>stock</th>
          <th>thumbnail</th>
        </tr>
      </thead>
      <tbody id="tbody"></tbody>
    </table>
  `;

  data.forEach(record => renderList(record));
}