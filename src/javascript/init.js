// 页面加载时如果没有hash，自动跳转到#home
if (!window.location.hash) {
  window.location.hash = "#home";
}

// 根据 URL hash 高亮对应菜单项
function highlightActiveMenu() {
  const hash = window.location.hash || "#home";
  if (hash) {
    const activeLink = document.querySelector(`.main-nav a[href="${hash}"]`);
    if (activeLink) {
      document.querySelectorAll(".main-nav a").forEach((item) => {
        item.classList.remove("active");
      });
      activeLink.classList.add("active");
    }
  }
}
// 页面加载时根据当前 hash 高亮对应菜单
// highlightActiveMenu();

