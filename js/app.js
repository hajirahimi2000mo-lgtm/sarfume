function normalizeText(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // پاکسازی اعراب فرانسوی مثل é به e
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .trim();
}

// لیسنر سرچ همراه با اسکرول خودکار به محصولات
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    render();

    // اگه کاربر چیزی تایپ کرد، صفحه اسکرول بشه روی بخش محصولات
    if (state.searchQuery.trim().length > 0) {
      const productsSection = document.getElementById("productsSection") || document.querySelector(".products-grid");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  });
}
