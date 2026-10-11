

(function () {
  "use strict";

  function initNavbar() {
    const siteHeader = document.querySelector(".site-header");
    const menuToggle = document.getElementById("menuToggle");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-link");
    const cartButton = document.getElementById("cartButton");

    // ۱. افکت اسکرول هدر (شیشه‌ای شدن و تاریکی عمیق‌تر در اسکرول)
    function handleScroll() {
      if (!siteHeader) return;
      if (window.scrollY > 40) {
        siteHeader.classList.add("site-header--scrolled");
      } else {
        siteHeader.classList.remove("site-header--scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // بررسی اولیه موقع لود

    // ۲. مدیریت منوی موبایل (همبرگری)
    if (menuToggle && navLinksContainer) {
      menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = menuToggle.classList.toggle("is-active");
        navLinksContainer.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.classList.toggle("mobile-menu-open", isOpen);
      });

      // بستن منو با کلیک روی هر لینک
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menuToggle.classList.remove("is-active");
          navLinksContainer.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
          document.body.classList.remove("mobile-menu-open");
        });
      });

      // بستن منو در صورت کلیک بیرون از هدر
      document.addEventListener("click", (e) => {
        if (!siteHeader.contains(e.target)) {
          menuToggle.classList.remove("is-active");
          navLinksContainer.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
          document.body.classList.remove("mobile-menu-open");
        }
      });
    }

    // ۳. مدیریت کلیک روی آیکون سبد خرید (اسکرول به محصولات یا اطلاع‌رسانی)
    if (cartButton) {
      cartButton.addEventListener("click", () => {
        const cartCount = document.getElementById("cartCount");
        const count = cartCount ? cartCount.textContent.trim() : "۰";

        if (count === "۰" || count === "0") {
          // اگر سبد خالی بود، هدایت نرم به گالری محصولات
          const catalogSection = document.getElementById("catalog");
          if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }
  }

  // اجرای ایمن پس از بارگذاری DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();
