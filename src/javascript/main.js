// 移动端汉堡菜单
document.querySelector(".mobile-menu-btn").addEventListener("click", function (e) {
  e.stopPropagation();
  e.currentTarget.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  // 如果点击的不是sidebar区域，并且菜单展开时菜单折叠  (事件委托+点击目标检测)
  let sidebar = document.querySelector(".sidebar");
  let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  if (!sidebar.contains(e.target) && mobileMenuBtn.classList.contains("active")) {
    mobileMenuBtn.classList.remove("active");
  }
});

// pc端菜单选择回显
const menuLink = document.querySelectorAll(".menu-list a");
menuLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.stopPropagation();
    // 移除所有的active
    menuLink.forEach((item) => item.classList.remove("active"));
    // 给当前点击的a添加active
    this.classList.add("active");
  });
});

// 页面加载时根据当前 hash 高亮对应菜单
(function highlightActiveMenu() {
  const hash = window.location.hash;
  const activeLink = document.querySelector(`.main-nav a[href="${hash}"]`);
  if (activeLink) {
    document.querySelectorAll(".main-nav a").forEach((item) => {
      item.classList.remove("active");
    });
    activeLink.classList.add("active");
  } else {
    throw new Error("activeLink is undefined");
  }
})();
