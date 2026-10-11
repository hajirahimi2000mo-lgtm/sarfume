

(function (root, factory) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    const exportsObj = factory();
    root.SARFUME_CART = exportsObj;
    // اجرای خودکار در محیط مرورگر
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", exportsObj.initCart);
    } else {
      exportsObj.initCart();
    }
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const STORAGE_KEY = "sarfume_cart_items";

  // بازیابی آیتم‌ها از حافظه مرورگر
  function getCartItems() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  // ذخیره در حافظه
  function saveCartItems(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.warn("Storage error:", err);
    }
  }

  // نمایش اعلان توست با استایل دارک
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("toast--visible");

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove("toast--visible");
    }, 2800);
  }

  // به‌روزرسانی نشانگر سبد خرید و اعمال انیمیشن ضربان
  function updateBadge() {
    const badgeEl =
      document.getElementById("cartCount") ||
      document.querySelector(".cart-count") ||
      document.querySelector(".badge");

    if (!badgeEl) return;

    const items = getCartItems();
    const totalCount = items.reduce((sum, item) => sum + (item.qty || 1), 0);

    badgeEl.textContent = totalCount.toLocaleString("fa-IR");

    // افکت انیمیشن جهش بج
    badgeEl.classList.remove("cart-bounce");
    void badgeEl.offsetWidth; // Trigger reflow
    badgeEl.classList.add("cart-bounce");
  }

  // افزودن محصول به سبد
  function addToCart(productId, productName = "محصول") {
    const items = getCartItems();
    const existing = items.find((item) => item.id === productId);

    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      items.push({ id: productId, name: productName, qty: 1 });
    }

    saveCartItems(items);
    updateBadge();
    showToast(`«${productName}» به سبد خرید افزوده شد.`);
  }

  function initCart() {
    // ۱. نمایش تعداد ذخیره شده در شروع لود
    updateBadge();

    // ۲. شنود کلیک برای دکمه‌های مختلف خرید (کارت‌ها و داخل مودال)
    document.addEventListener("click", (e) => {
      const addBtn = e.target.closest(
        ".product-card__btn, .product-card__add-btn, .btn-primary, [data-action='add-cart']"
      );

      if (!addBtn) return;

      // اگر دکمه مربوط به سبد خرید است
      const card = addBtn.closest(".product-card");
      let productId = null;
      let productName = "عطر انتخابی";

      if (card) {
        productId = Number(card.dataset.id);
        const nameEl = card.querySelector(".product-card__name");
        if (nameEl) productName = nameEl.textContent.trim();
      } else {
        // ممکن است داخل مودال کلیک شده باشد
        const modalContainer = addBtn.closest(".modal__container, .modal-product-layout");
        if (modalContainer) {
          const titleEl = modalContainer.querySelector(".modal-title");
          if (titleEl) productName = titleEl.textContent.trim();
          productId = Number(addBtn.dataset.id) || Date.now();
        }
      }

      addToCart(productId, productName);
    });
  }

  return {
    initCart,
    addToCart,
    getCartItems,
    updateBadge,
  };
});
