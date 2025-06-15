// 优先正确显示主题切换图片
const theme = localStorage.getItem("theme");
const isDark = theme === "dark";
document.documentElement.classList.toggle("dark", isDark);
const [lightSwitcher, darkSwitcher] = [".turnLight_switcher", ".turnDark_switcher"].map((sel) => document.querySelector(`.sidebar .theme-switcher ${sel}`));
lightSwitcher?.classList.toggle("active", isDark);
darkSwitcher?.classList.toggle("active", !isDark);

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
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="time"><em>(${item.time})</em></span>
        <span class="name">${item.name}</span>
      </div>
    </li>
    `;
    honorList.insertAdjacentHTML("beforeend", honorHTML);
  });
})();

// 将作品集卡片插入页面
(function insertPotfolioBar() {
  let portfolioData = [
    { name: "myday", pictureSrc: "assets/img/portfolio/myday.png", pictureAlt: "Myday", title: "MyDay", description: "基于Electron + Vue的集 “计划清单 + 日记 + 灵感” 于一体的桌面应用程序，技术栈：前端：Electron + Electron Store + Vue + Vue-Router + Vuex + Element Plus + Axios + Mavon Editor； 后端：Express + MySQL", linkUrl: "https://github.com/Flycan-Fanc/MyDay" },
    { name: "userCenter", pictureSrc: "assets/img/portfolio/usercenter.png", pictureAlt: "用户中心", title: "用户中心", description: "技术栈：React + Ant Design Pro + Umi框架 + Umi Request请求库 + Spring Boot后端，实现了集用户注册登录、查询管理等功能的用户中心网站", linkUrl: "https://github.com/Flycan-Fanc/user_center_frontend" },
    { name: "mbti", pictureSrc: "assets/img/portfolio/mbti.png", pictureAlt: "MBTI小程序", title: "MBTI小程序", description: "基于 React + Taro + TaroUI 简易版微信小程序，采用了并实现了测评类应用的的评分算法", linkUrl: "https://github.com/Flycan-Fanc/mbti-test-mini" },
    { name: "wuliu", pictureSrc: "assets/img/portfolio/wuliu.png", pictureAlt: "物流管理系统安卓APP", title: "物流管理系统安卓APP", description: "安卓原生APP，使用多种安卓原生控件，借助多线程实现时间实时显示，结合SQLite存储用户账户以及运单数据，能够解析在线XML和JSON数据", linkUrl: "https://github.com/Flycan-Fanc/Logistics_Management_System" },
    { name: "glass-music", pictureSrc: "assets/img/portfolio/glass-music.png", pictureAlt: "毛玻璃风格音乐网站", title: "毛玻璃风格音乐网站", description: "Html + CSS + JavaScript构筑页面，Servlet + JSP + JDBC + MySQL实现注册登录功能、客户端与服务器的连接以及数据库相关操作", linkUrl: "https://github.com/Flycan-Fanc/WebMusicPlayer" },
  ];
  let portfolioList = document.querySelector("#portfolio .card-container");
  portfolioData.forEach((item) => {
    let portfolioHTML = `
    <div class="${item.name} pot-card">
      <span class="picture"><img src=${item.pictureSrc} alt=${item.pictureAlt} /></span>
      <span class="info">
        <span class="card-title">${item.title}</span>
        <span class="card-desc">${item.description}</span>
      </span>
      <a href="${item.linkUrl}" target="_blank" rel="noopener noreferrer" class="go">前往==></a>
    </div>
    `;
    portfolioList.insertAdjacentHTML("beforeend", portfolioHTML);
  });
})();

// 主题切换
(function themeSwitch() {
  let themeSwitcher = document.querySelector(".sidebar .theme-switcher");

  themeSwitcher.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    // 改变按钮样式
    document.querySelectorAll(".sidebar .theme-switcher img").forEach((el) => {
      el.classList.toggle("active");
    });
  });

  // let turnDark_switcher = document.querySelector(".sidebar .theme-switcher .turnDark_switcher");
  // let turnLight_switcher = document.querySelector(".sidebar .theme-switcher .turnLight_switcher");
  // if (turnDark_switcher.classList.contains("active")) {
  //   turnDark_switcher.classList.remove("active");
  //   turnLight_switcher.classList.add("active");
  // }
  // if (turnLight_switcher.classList.contains("active")) {
  //   turnLight_switcher.classList.remove("active");
  //   turnDark_switcher.classList.add("active");
  // }
})();
