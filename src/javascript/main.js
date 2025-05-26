// 移动端汉堡菜单
document.querySelector(".mobile-menu-btn").addEventListener("click", function (e) {
  e.stopPropagation();
  e.currentTarget.classList.toggle("active");
  //console.log(e.target.);
});

document.addEventListener("click", function (e) {
  // 如果点击的不是sidebar区域，并且菜单展开时菜单折叠  (事件委托+点击目标检测)
  let sidebar = document.querySelector(".sidebar");
  let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  if (!sidebar.contains(e.target) && mobileMenuBtn.classList.contains("active")) {
    mobileMenuBtn.classList.remove("active");
  }
});
