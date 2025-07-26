
class UI {
  constructor(pages) {
    this.pages = pages;
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.catchDOM();
    this.renderTable(this.currentIndex);
    this.renderPaginateBtn();
    this.searchBTN.addEventListener("click", (e) => this.searchFunction(e));

    // Listen for modal events
    document.addEventListener("modal:create", (e) => this.createHandler(e.detail));
    document.addEventListener("modal:edit", (e) => this.editHandler(e.detail));
  }

  catchDOM() {
    this.searchInput = document.getElementById("searchInput");
    this.searchBTN = document.getElementById("searchBTN");
    this.tagFilter = document.getElementById("tagFilter");
    this.sortBy = document.getElementById("sortBy");
    this.resultsCount = document.getElementById("resultsCount");
    this.table = document.getElementById("table");
    this.tbody = document.getElementById("tbody");
    this.paginate = document.getElementById("paginate");
    this.noResults = document.getElementById("noResults");
  }

  renderTbody(record) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${record.title}</td>
      <td>${record.body}</td>
      <td>${record.tags}</td>
      <td>
        <button class="editBtn" data-id="${record.id}">Edit</button>
        <button class="deleteBtn" data-id="${record.id}">Delete</button>
      </td>
    `;
    this.tbody.appendChild(tr);

    // Gắn sự kiện
    tr.querySelector(".editBtn").addEventListener("click", () => this.triggerEdit(record.id));
    tr.querySelector(".deleteBtn").addEventListener("click", () => this.deleteHandler(record.id));
  }

  renderPaginateBtn() {
    this.paginate.innerHTML = "";
    const pageNumber = Array.isArray(this.pages) ? this.pages.length : 0;
    for (let i = 0; i < pageNumber; i++) {
      const btn = document.createElement("button");
      btn.innerText = i + 1;
      btn.addEventListener("click", () => {
        this.currentIndex = i;
        this.renderTable(i);
      });
      this.paginate.appendChild(btn);
    }
  }

  renderTable(pageIndex) {
    this.tbody.innerHTML = "";
    const currentPage = this.pages[pageIndex] || [];
    if (currentPage.length === 0) {
      this.noResults.style.display = "block";
      this.table.style.display = "none";
      return;
    }

    this.noResults.style.display = "none";
    this.table.style.display = "table";
    currentPage.forEach((record) => this.renderTbody(record));
  }

  searchFunction(e) {
    e.preventDefault();
    const value = this.searchInput.value || "";
    const searchResults = thread.searchData(value);
    this.pages = searchResults;
    this.renderTable(0);
    this.renderPaginateBtn();
  }

  triggerEdit(id) {
    const record = thread.findById(id);
    if (record) {
      // Phát sự kiện để mở modal và truyền dữ liệu
      document.dispatchEvent(
        new CustomEvent("modal:open", { detail: { mode: "edit", data: record } })
      );
    }
  }

  // 🛠️ CREATE Handler
  createHandler(data) {
    thread.create(data);
    this.pages = thread.returnListData();
    this.renderTable(0);
    this.renderPaginateBtn();
  }

  // 🧩 EDIT Handler
  editHandler(data) {
    thread.edit(data.id, data);
    this.pages = thread.returnListData();
    this.renderTable(this.currentIndex);
  }

  // ❌ DELETE Handler
  deleteHandler(id) {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      thread.delete(id);
      this.pages = thread.returnListData();
      this.renderTable(this.currentIndex);
    }
  }
}

// 🚀 Khởi tạo sau DOM load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const pages = thread.renderData(thread.getDataLocal());
    window.ui = new UI(pages);
  }, 1000);
});
