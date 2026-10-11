

(function () {
  "use strict";

  // تابع تاخیر انداز (Debounce) جهت بالا بردن چشمگیر کارایی هنگام تایپ سریع
  function debounce(func, delay = 250) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // نرمال‌سازی متون فارسی و عربی (یکپارچه‌سازی ی و ک)
  function normalizeText(str) {
    if (!str) return "";
    return str
      .toString()
      .trim()
      .toLowerCase()
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک");
  }

  function initSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.querySelector(".search-box__btn");
    const catalogSection = document.getElementById("catalog");

    if (!searchInput) return;

    // تابع اصلی پردازش جستجو
    function handleSearch() {
      const query = normalizeText(searchInput.value);
      const allProducts = window.products || [];

      // اگر تابعی برای رندر در اپلیکیشن گلوبال تعریف شده باشد
      if (typeof window.renderFilteredProducts === "function") {
        window.renderFilteredProducts(query);
        return;
      }

      // فال‌بک مستقیم در صورت عدم وجود تابع سراسری در app.js
      const container = document.getElementById("products");
      const resultsCount = document.getElementById("resultsCount");
      if (!container) return;

      if (!query) {
        if (typeof window.renderProducts === "function") {
          window.renderProducts(allProducts);
        }
        if (resultsCount) {
          resultsCount.textContent = "دسته‌بندی مورد نظر خود را انتخاب کنید";
        }
        return;
      }

      const filtered = allProducts.filter((item) => {
        const nameMatch = normalizeText(item.name).includes(query);
        const brandMatch = normalizeText(item.brand).includes(query);
        const scentMatch = normalizeText(item.scent).includes(query);
        const descMatch = normalizeText(item.description).includes(query);
        return nameMatch || brandMatch || scentMatch || descMatch;
      });

      if (typeof window.renderProducts === "function") {
        window.renderProducts(filtered);
      }

      if (resultsCount) {
        const countPersian = filtered.length.toLocaleString("fa-IR");
        resultsCount.textContent = `${countPersian} عطر متناسب با «${searchInput.value.trim()}» یافت شد`;
      }
    }

    // متصل کردن ایونت تایپ به تابع دی‌بانس شده
    const debouncedSearch = debounce(() => {
      handleSearch();
      // در صورتی که کاربر سرچ کرد و اسکرول بالای صفحه بود، هدایت نرم به محصولات
      if (searchInput.value.trim().length > 1 && catalogSection) {
        const rect = catalogSection.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          catalogSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 200);

    searchInput.addEventListener("input", debouncedSearch);

    // سرچ با کلید Enter یا کلیک دکمه سرچ
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });

    if (searchBtn) {
      searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleSearch();
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  // اجرای ایمن پس از بارگذاری DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch);
  } else {
    initSearch();
  }
})();
