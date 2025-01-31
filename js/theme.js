document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (!themeToggleBtn || !themeIcon) {
    console.error("زر تبديل الثيم غير موجود في الصفحة.");
    return;
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  }

  function updateThemeIcon(theme) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function setTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  }

  // تحميل الثيم المحفوظ عند فتح الصفحة
  setTheme();

  // ربط زر التبديل بوظيفة تغيير الوضع
  themeToggleBtn.addEventListener("click", toggleTheme);
});
