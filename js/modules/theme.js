

(function (root, factory) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    const exportsObj = factory();
    root.SARFUME_THEME = exportsObj;
    // راه‌اندازی فوری برای جلوگیری از فلش تم
    exportsObj.initTheme();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const THEME_KEY = "sarfume_theme_preference";
  const THEME_DARK = "dark";
  const THEME_LIGHT = "light";

  // تشخیص تنظیمات ترجیحی سیستم‌عامل
  function getSystemPreference() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return THEME_LIGHT;
    }
    return THEME_DARK;
  }

  // خواندن تم فعلی
  function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY) || getSystemPreference();
  }

  // به‌روزرسانی آیکون دکمه تم
  function updateThemeToggleUI(theme) {
    const toggleBtns = document.querySelectorAll("#themeToggle, .theme-toggle");
    const isDark = theme === THEME_DARK;

    toggleBtns.forEach((btn) => {
      btn.setAttribute("aria-label", isDark ? "تغییر به تم روشن" : "تغییر به تم تاریک");
      btn.setAttribute("title", isDark ? "حالت روز" : "حالت شب");
      
      // اگر آیکون داخلی دارد
      const icon = btn.querySelector("svg, i, span");
      if (icon) {
        btn.innerHTML = isDark
          ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
          : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      }
    });
  }

  // اعمال تم به سند
  function applyTheme(theme) {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    if (theme === THEME_LIGHT) {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
    }

    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleUI(theme);
  }

  // جابه‌جایی بین دارک و لایت
  function toggleTheme() {
    const current = getCurrentTheme();
    const nextTheme = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(nextTheme);
  }

  function initTheme() {
    const initialTheme = getCurrentTheme();
    applyTheme(initialTheme);

    // افزودن Event Listener بعد از لود کامل صفحه به دکمه سوئیچ
    function attachListeners() {
      const toggleBtns = document.querySelectorAll("#themeToggle, .theme-toggle");
      toggleBtns.forEach((btn) => {
        btn.removeEventListener("click", toggleTheme);
        btn.addEventListener("click", toggleTheme);
      });
      updateThemeToggleUI(getCurrentTheme());
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", attachListeners);
    } else {
      attachListeners();
    }

    // گوش دادن به تغییر تم در سطح سیستم‌عامل کاربر
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
  }

  return {
    initTheme,
    toggleTheme,
    applyTheme,
    getCurrentTheme,
  };
});
