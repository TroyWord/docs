const secret=require("./secret");

module.exports = {
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
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
        locale: 'zh', //语言
        autoCreateIssue :true, //自动创建评论
      },
      '@vuepress/back-to-top' :true,
      '@vuepress/google-analytics':{
        'ga': secret.ga
      }
}