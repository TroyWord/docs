module.exports = {
    base:"/docs/",
    title: 'hello word',
    description: 'hellow word 笔记，第二次',
    
    head: [
        ['link', {rel:'icon',href:'/favicon.ico'}],
        ['meta', { name: 'keywords', content: 'vuepress:介绍 说明,1111111111' }],
        ['meta', { name: 'auther', content: '1111111' }]
      ],
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
        // '',
        // 'about',
        // 'about1',
        // {
        //     title: 'CSS',   // 必要的
        //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //     collapsable: false, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     children: [
        //       '/css/about'
        //     ]
        // },
        // {
        //     title: 'JAVA',   // 必要的
        //     path: '/javascript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //     collapsable: false, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     children: [
        //       '/javascript/about'
        //     ]
        // },
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