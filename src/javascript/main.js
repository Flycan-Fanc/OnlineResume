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

// 将技能进度条插入页面
(function insertSkillBar() {
  let skillData = [
    { name: "HTML & CSS", level: "90%", message: "熟练使用", color: "#4a90e2" },
    { name: "JavaScript", level: "85%", message: "熟悉语言特性和核心机制", color: "#f7df1e" },
    { name: "Vue生态", level: "80%", message: "熟悉组件化开发和响应式原理", color: "#41b883" },
    { name: "Node.js", level: "70%", message: "基础开发能力", color: "#417e38" },
    { name: "TypeScript", level: "50%", message: "基础开发能力，能配合文档完成工作", color: "#007acd" },
    { name: "Git", level: "75%", message: "熟悉团队协作流程", color: "#ed4b26" },
    { name: "前端UI框架", level: "75%", message: "有实战开发经验", color: "#3f85ed" },
    { name: "计算机网络与AJAX", level: "70%", message: "掌握基础理论", color: "#fac28d" },
  ];
  let skillList = document.querySelector("#resume .skill .skill-list");
  skillData.forEach((item) => {
    const skillHTML = `
    <li class="skill-item">
        <div class="skill-info">
            <span class="name">${item.name}</span>
            <span class="level">${item.level}</span>
            <span class="message">${item.message}</span>
        </div>
        <div class="skill-bar">
            <div class="skill-level" 
                 style="height:100%; width: ${item.level}; background-color: ${item.color}">
            </div>
        </div>
    </li>
    `;

    // skillList.innerHTML += skillHTML;
    skillList.insertAdjacentHTML("beforeend", skillHTML);
  });
})();

// 将荣誉奖项插入页面
(function insertHonorBar() {
  let honorData = [
    { name: "中国大学生计算机设计大赛（音乐创作普通组）辽宁省一等奖", time: "2021.08" },
    { name: "国家励志奖学金", time: "2021.11" },
    { name: "全国大学生数学建模竞赛辽宁省本科组二等奖", time: "2022.10" },
  ];
  let honorList = document.querySelector("#resume .honor .honor-list");
  honorData.forEach((item) => {
    let honorHTML = `
    <li class="honor-item">
        <span class="name">${item.name}</span>
        <span class="time">(${item.time})</span>
    </li>
    `;
    honorList.insertAdjacentHTML("beforeend", honorHTML);
  });
})();
