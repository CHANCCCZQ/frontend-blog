module.exports = {
  title: '客服前端技术博客',
  base: '/frontend-blog/',
  themeConfig: {
    // logo: '/app.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '技术', link: '/skill/' },
      { text: '业务', link: '/business/' },
      { text: 'VuePress', link: 'https://www.vuepress.cn' },
    ],
    sidebar: [
      {
        title: '技术',   // 必要的
        path: '/skill/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/skill/crudPage',
          '/skill/业务组件',
          '/skill/前后端接口规范',
          '/skill/微前端接入',
          '/skill/后端接口地址'
        ]
      },
      {
        title: '业务',   // 必要的
        path: '/business/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          // '/business/crudPage'
        ]
      },
      {
        title: '写作',   // 必要的
        path: '/write/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/write/关于写作'
        ]
      },
    ],
    lastUpdated: 'Last Updated',
    smoothScroll: true
  },

  markdown: {
    lineNumbers: true
  },
  port: 9999,
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
  ],
  evergreen: true,
}