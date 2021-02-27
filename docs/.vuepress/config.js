module.exports = {
  // Directory where will be generated the HTML files by VuePress
  dest: 'dist/',

  // Base URL. Useful for GitHub pages.
  base: '/',
  // base: '/lapduan',

  theme: 'yuu',

  // Title of your project
  title: 'Phần mềm Lập Dự án GXD 0974 889 500',

  // Description of your project
  description: 'Hướng dẫn sử dụng phần mềm Dự án GXD',

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
      hostname: 'https://lapduan.gxd.vn',
    },
  },

  themeConfig: {
    activeHeaderLinks: false,
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Hướng dẫn', link: '/guide/' },
      { text: 'Tình huống', link: '/guide/tinh-huong-hoi-dap' },
      { text: 'Pháp lý', link: '/guide/co-so-phap-ly.html' },
      { text: 'Nhật ký', link: '/guide/lap-nhat-ky-thi-cong.html' },
      { text: 'Liên hệ', link: '/guide/lien-he.html' },
      { text: 'Luật', link: '/legal/luat-xay-dung-50-ghep-62.html' },
      { text: 'Hỏi đáp', link: '/case/tinh-huong-1.html' },
    ],

    sidebar: {
      '/guide/': [
        {
          title: 'Sử dụng phần mềm',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['/guide/chung-chi-hanh-nghe', 'Chứng chỉ hành nghề'],
            ['/guide/co-so-phap-ly', 'Cơ sở pháp lý'],
            ['/guide/danh-cho-nguoi-moi', 'Dành cho người mới'],
            ['/guide/danh-muc-van-ban', 'Danh mục văn bản'],
            ['/guide/ho-so-bieu-mau-nhat-ky', 'Hồ sơ biểu mẫu nhật ký'],
            ['/guide/kien-thuc-excel-co-ban', 'Kiến thức Excel cơ bản'],
            ['/guide/gioi-thieu-phan-mem-du-an-gxd', 'Giới thiệu phần mềm'],
            ['/guide/ho-so-bieu-mau-nhat-ky', 'Hồ sơ biểu mẫu nhật ký'],
            ['/guide/lap-nhat-ky-thi-cong', 'Lập nhật ký thi công'],
            ['/guide/phan-mem-tien-ich-bien-tap-ho-so', 'Phần mềm tiện ích biên tập hồ sơ'],
            ['/guide/tinh-huong-hoi-dap', 'Tình huống hỏi đáp'],
            ['/guide/trach-nhiem-cua-chu-dau-tu', 'Trách nhiệm của Chủ đầu tư'],
            ['/guide/trach-nhiem-cua-nha-thau', 'Trách nhiệm của Nhà thầu'],
            ['/guide/trach-nhiem-cua-tu-van', 'Trách nhiệm của Tư vấn lập dự án'],
            ['/guide/vai-tro-cua-nhat-ky-thi-cong', 'Vai trò của nhật ký thi công'],
            ['/guide/y-kien-cua-dong-nghiep', 'Ý kiến của đồng nghiệp'],
            ['/guide/lien-he', 'Liên hệ'],
            '', // Ref. to the `README.md` file
          ],
          initialOpenGroupIndex: 2, // optional, defaults to 0, defines the index of initially opened subgroup
        },
      ],
      '/legal/': [
        {
          title: 'Pháp lý dự án đầu tư',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['/legal/luat-xay-dung-50-ghep-62', 'Luật Xây dựng 50 ghép 62'],
            '', // Ref. to the `README.md` file
          ],
          initialOpenGroupIndex: 2, // optional, defaults to 0, defines the index of initially opened subgroup
        },
      ],
      '/case/': [
        {
          title: 'Tình huống thường gặp Q&A',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            ['/case/tinh-huong-1', 'Các tình huống 1'],
            '', // Ref. to the `README.md` file
          ],
          initialOpenGroupIndex: 2, // optional, defaults to 0, defines the index of initially opened subgroup
        },
      ],
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
