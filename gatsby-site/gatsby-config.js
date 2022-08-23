module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        cname: true,
      },
    },
  ],
  siteMetadata: {
    logoUrl:
      'https://cdn-cnc.staging.17zuoye.net/s17/displayPlatform/img/onelogo.e075a18c.png',
    title: '17Chart',
    description: '17图表库',
    siteUrl: 'https://github.com/Lee-Tanghui/17chart.js',
    // github地址
    githubUrl: 'https://github.com/Lee-Tanghui/17chart.js',
    navs: [
      {
        slug: 'docs/specification/about',
        title: {
          zh: '简介',
          en: '简介',
        },
      },
      {
        slug: 'examples/basic',
        title: {
          zh: '图表示例',
          en: '图表示例',
        },
      },
      {
        slug: 'independent',
        title: {
          zh: '开发者',
          en: '开发者',
        },
        // target: '_blank',
      },
    ],
    docs: [
      // {
      //   slug: 'specification/category',
      //   title: {
      //     zh: '分类一',
      //     en: 'category1',
      //   },
      //   order: 4,
      // },
      // {
      //   slug: 'specification/category/three',
      //   title: {
      //     zh: '第三层',
      //     en: 'three level',
      //   },
      //   order: 2,
      // },
    ],
    examples: [
      {
        slug: 'category',
        icon: 'pie',
        title: {
          zh: '饼图分类',
          en: 'Category',
        },
      },
    ],
    showGithubStar: false, // 是否展示 Github Star
    showSearch: false, // 是否展示搜索框
    showChinaMirror: false, // 是否展示国内镜像链接
    showAntVProductsCard: false, // 是否展示 AntV 系列产品的卡片链接
    showLanguageSwitcher: false, // 用于定义是否展示语言切换
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    playground: {
      container: '<div id="container" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
    },
    redirects: [],
  },
}
