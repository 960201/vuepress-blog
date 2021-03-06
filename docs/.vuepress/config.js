const path = require("path");
module.exports = {
  title: "林杰的博客",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.png" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: "/logo.png", // 左上角logo
    nav: require("./nav"),
    sidebar: require("./sidebar"), // 侧边栏配置
    sidebarDepth: 2,
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#valine-vuepress-comment",
          appId: "LELWe58CF8CB3ejMGSfCirqq-gzGzoHsz",
          appKey: "BWF1hP6lMUOKN07gUs9tOzuY",
        },
      },
    ],
  ],
};
