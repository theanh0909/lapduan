module.exports = {
  // Directory where will be generated the HTML files by VuePress
  dest: 'dist/',

  // Base URL. Useful for GitHub pages.
  base: '/',
  // base: '/qlcl',

  theme: 'yuu',

  // Title of your project
  title: 'Phần mềm QLCL GXD 0974 889 500',

  // Description of your project
  description: 'Hướng dẫn sử dụng phần mềm Quản lý chất lượng GXD',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // Custom favicon
  ],

  // Plugins config
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'G-YYJREH1CD7', // GoogleAnalytics ID (optional. use your own ga)
    },

    '@vuepress/back-to-top': {},
    'vuepress-plugin-zooming': {},

    sitemap: {
      hostname: 'https://qlcl.gxd.vn',
    },
  },

  themeConfig: {
    activeHeaderLinks: false,
    nav: [
      { text: 'Hướng dẫn', link: '/guide/' }, // Link to a non-api-documentation section
      { text: 'Tình huống', link: '/case/' }, // Link to a non-api-documentation section
      { text: 'Văn bản', link: '/document/danh-muc.html' }, // Lint to our API documentation route
      { text: 'Nhật ký', link: '/guide/nhat-ky-thi-cong.html' }, // Lint to our API documentation route
    ],

    sidebar: {
      '/guide/': [
        {
          title: 'Sử dụng phần mềm',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            // Normal pages
            'introduction',
            'getting-started', /* /guide/getting-started.html */
            '', // Ref. to the `README.md` file
            'configuration', /* /guide/configuration.html */
            'review'
          ],
          initialOpenGroupIndex: 2 // optional, defaults to 0, defines the index of initially opened subgroup
        },
      ],
      
      // Your API documentation sidebar
      // Here is where will be generated your files (`docs/demo/` in this case).
      // This is the directory you configured in your `phpdoc.dist.xml` as target
      // directory (or `-t` option of phpdoc)
      // '/demo/': [
      //   {
      //     title: 'Văn bản',
      //     collapsable: false,
      //     children: [
      //       //
      //       '', // Ref. to the `README.md` file
      //       'danh-muc', // Ref. to the `classes.md` file
      //       'lxd-50-gheop-62', // Ref. to the `interfaces.md` file
      //       'lxd-so-62', // Ref. to the `traits.md` file
      //       'ND-06-2021-qlcl', // Ref. to the `functions.md` file
      //       'constants', // Ref. to the `constants.md` file
      //     ],
      //   },
      // ],
      // '/': [''],
    },

    // You can ignore the following optional customizations --------------------

    markdown: {
      lineNumbers: false,
      toc: { includeLevel: [1, 2, 3] },
    },

    sidebarDepth: 3,

    lastUpdated: true,

    evergreen: true,

    // Repository configurations
    // repo: 'nelson6e65/phpdoc-vuepress',
    // repo: 'gxd.vn',
    docsDir: 'docs',
    editLinks: true,
  },

  // custom webpack configuration
  configureWebpack: {
    resolve: {
      alias: {
        // Aliases
        '@github': '../../.github/assets',
      },
    },
  },
};
