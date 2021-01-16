module.exports = {
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/',
                items: [
                    { text: 'Version 1', link: '/language/chinese/' },
                    { text: 'Version 2', link: '/language/japanese/' }
                ]
            },
            {
                text: 'Guide',
                link: '/guide'
            }
        ],
        sidebar: [
            ['/gxd/', 'Tổng quan'],
            ['/trial/', 'Đăng ký dùng thử'],
            ['/guide/', 'Hướng dẫn'],
            ['/setup/', 'Cài đặt']
        ]
    }
}