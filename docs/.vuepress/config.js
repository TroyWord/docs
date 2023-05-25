module.exports = {
    base:"/docs/",
    title: 'hello word',
    description: 'hellow word 笔记，第二次',
    
    head: [
        ['link', {rel:'icon',href:'/favicon.ico'}],
        ['meta', { name: 'keywords', content: 'vuepress:介绍 说明,1111111111' }],
        ['meta', { name: 'auther', content: '祖国的花朵' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: {
        '@vuepress/last-updated':{
            Transformer:(timestamp) => moment(timestamp).format("LLLL")
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
              message: "发现新内容可用",
              buttonText: "刷新~"
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            // platform: 'github-v4',
            platform: 'github',
            
            // 其他的 Vssue 配置
            owner: 'TroyWord',
            repo: 'docs',
            clientId: '4b0a23114cecd5d852c6',
            clientSecret: '2cbcbc11c13da2be8751063047c38c3112b9852e',
            locale: 'zh', //语言
            autoCreateIssue :true, //自动创建评论
          }
    },      
    themeConfig: {
    //navbar: false,  //禁用导航栏
    
    lastUpdated: '更新时间',
    logo: '/assets/img/logo.png',
    nav: [                  //导航栏
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          },
        { text: 'External', link: 'https://google.com' },
    ],
    
    sidebar:[
        '',
        'about',
        'about1',
        {
            title: 'CSS',   // 必要的
            path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/css/about'
            ]
        },
        {
            title: 'JAVA',   // 必要的
            path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/javascript/about'
            ]
        },
        {
            '/css/':[
                'about'
            ],
            '/javascript/':[
                'about'
            ],
            
        }
    ]
    
    }
  }