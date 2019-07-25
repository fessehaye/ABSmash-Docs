var getChildren = require("./sidebar");

module.exports = {
  title: "Smash Resources",
  description: "Shared Resources for all TOing and community affairs",
  theme: "@vuepress/theme-default",
  head: [
    ["link", { rel: "icon", href: "/hero.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#1986FF" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  ga: "UA-11825324-2", // 'UA-124245419-1',
  themeConfig: {
    docsDir: "docs",
    nav: [
      { text: "TOing", link: "/TOing/" },
      { text: "Guides", link: "/Guides/" },
      { text: "Resources", link: "/Resources/" },
      { text: "Meetings", link: "/meetings/" }
    ],
    sidebar: [
      {
        title: "Tournament Organizing",
        children: getChildren("./docs/TOing/", "/TOing/")
      },
      {
        title: "Guides",
        children: getChildren("./docs/Guides/", "/Guides/")
      },
      {
        title: "Meetings",
        children: getChildren("./docs/meetings/", "/meetings/")
      },
      "/Resources/",
      "/"
    ],
    plugins: [
      "@vuepress/back-to-top",
      "@vuepress/nprogress",
      "@vuepress/active-header-links",
      "vuepress-plugin-container",
      "@vuepress/last-updated",
      "@vuepress/medium-zoom",
      [
        "@vuepress/pwa",
        {
          serviceWorker: true,
          updatePopup: true
        }
      ]
    ],
    lastUpdated: "Last Updated"
  }
};
