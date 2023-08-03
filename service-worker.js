/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f4375adb4e87118e39a57ef38a88f09d"
  },
  {
    "url": "about.html",
    "revision": "cc63694e8052938deeee1c10793333ab"
  },
  {
    "url": "about1.html",
    "revision": "b69d1b0993a9574995598e0e3a17639f"
  },
  {
    "url": "about2.html",
    "revision": "66157d23451664f7cd7c78eaa97215e6"
  },
  {
    "url": "assets/css/0.styles.b7e00332.css",
    "revision": "f7970a7cded05282b49479cbf1e8f9f2"
  },
  {
    "url": "assets/img/img-px.48d2e9ba.png",
    "revision": "48d2e9ba13fbabbd61fec27c7075d52f"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8b6d4ac2.js",
    "revision": "0e68af4f8bf331289b9d3cb6913210f9"
  },
  {
    "url": "assets/js/11.402023e3.js",
    "revision": "f8f5342c149da1c4a3d427fa338a6818"
  },
  {
    "url": "assets/js/12.b4156722.js",
    "revision": "61506dbab0a15706dad7d9dad6cc6fa3"
  },
  {
    "url": "assets/js/13.a4be136a.js",
    "revision": "52a26a1737c75c650740050ca4cf1ae7"
  },
  {
    "url": "assets/js/14.9b2734ed.js",
    "revision": "dd33f2f81bee4d35e0880cd3631475b7"
  },
  {
    "url": "assets/js/15.c7b52b82.js",
    "revision": "761d16b03a585228eda145d23ca4db2b"
  },
  {
    "url": "assets/js/16.eabae010.js",
    "revision": "bedc47d6b3fa89e2feb19a7b59870201"
  },
  {
    "url": "assets/js/17.65f78219.js",
    "revision": "16efe3335c7a6bc8decdd44ab748b830"
  },
  {
    "url": "assets/js/18.d5930e7b.js",
    "revision": "fa6cacf22aaebb7d8f8d3457b36ffeba"
  },
  {
    "url": "assets/js/19.e111f9ae.js",
    "revision": "9d82678a0574ed2146e6ac2232344232"
  },
  {
    "url": "assets/js/2.a777011b.js",
    "revision": "83209f898c7b1d20b362706161f1281c"
  },
  {
    "url": "assets/js/20.a458204c.js",
    "revision": "93bb64a48769594c3787c055c6397249"
  },
  {
    "url": "assets/js/21.bd001347.js",
    "revision": "308e4dcdafff2b6ae5f78710d15f2f02"
  },
  {
    "url": "assets/js/22.32803f23.js",
    "revision": "01b43d96f646bbf98255a3581e48fc2d"
  },
  {
    "url": "assets/js/23.3cbdd039.js",
    "revision": "34c408f816dc2fd7a4a54b9cf630a397"
  },
  {
    "url": "assets/js/24.6cde9a3c.js",
    "revision": "54cf31d16b5eb07977cecc3ade94fc53"
  },
  {
    "url": "assets/js/25.ab186430.js",
    "revision": "e17d679549aed611564aa033a5f782b3"
  },
  {
    "url": "assets/js/26.59921844.js",
    "revision": "0a6af6d41d8200425df532b0b73db0be"
  },
  {
    "url": "assets/js/27.67838406.js",
    "revision": "0c9bdc9cac76aa1992d5d416cc173cf3"
  },
  {
    "url": "assets/js/28.e640f7b9.js",
    "revision": "b109e32ea4cd090fee608e93182b1184"
  },
  {
    "url": "assets/js/29.28a94922.js",
    "revision": "bcfa0c33d598950b40c51bef139d9867"
  },
  {
    "url": "assets/js/3.8eaa33a3.js",
    "revision": "939389961cf6d82c7ceb2161f4c63730"
  },
  {
    "url": "assets/js/30.ef0083c9.js",
    "revision": "05568166e9a9fd47103825c400b351c9"
  },
  {
    "url": "assets/js/31.217cf485.js",
    "revision": "52042bc9638beb45dc30f9d3cc9b7e5b"
  },
  {
    "url": "assets/js/32.1882fa69.js",
    "revision": "8e785644db6cb4baad2bba9ecf7fa976"
  },
  {
    "url": "assets/js/33.76500aa4.js",
    "revision": "10dd75f2187494876eb80d42e7b5ca03"
  },
  {
    "url": "assets/js/34.edfee22c.js",
    "revision": "a0d0c0e3855e8893b76e3e99e8251c12"
  },
  {
    "url": "assets/js/35.d3214b51.js",
    "revision": "6bf5ea08b69171231b70385c6a72f5b6"
  },
  {
    "url": "assets/js/36.e002436a.js",
    "revision": "85a427afa3044f0a4fc95c653b17d892"
  },
  {
    "url": "assets/js/37.976ab3e2.js",
    "revision": "c36d32d5b8119d602bac29d26fa58361"
  },
  {
    "url": "assets/js/4.7b9c72f0.js",
    "revision": "884199505fb934f3a4604361ab1d0722"
  },
  {
    "url": "assets/js/5.02ae9146.js",
    "revision": "2d5d7516c6418fdcfa8e24ba9bca4897"
  },
  {
    "url": "assets/js/6.e9db95b1.js",
    "revision": "268b00e9f0f965c7db4360be9ad86961"
  },
  {
    "url": "assets/js/7.b5dd6390.js",
    "revision": "86e0ebec21226050fd6da6d83f68d0cb"
  },
  {
    "url": "assets/js/8.b27f9cb9.js",
    "revision": "e9f5bf9dab1fbe6219d14408ced27ddc"
  },
  {
    "url": "assets/js/9.d8389aef.js",
    "revision": "c407db9e40b2ca4cf95f74ab3e174745"
  },
  {
    "url": "assets/js/app.e6faaec4.js",
    "revision": "73a8c1785b0f311e1ca0fc53c140b9d6"
  },
  {
    "url": "countup.html",
    "revision": "ef82c36b895e0f7f58ab2fee7ee319b3"
  },
  {
    "url": "css/about.html",
    "revision": "db5ee4a10d88715dd7680e030dc7c62e"
  },
  {
    "url": "css/index.html",
    "revision": "a7a486c098332a58c41258483a6c0b95"
  },
  {
    "url": "h++/体衰老的变化.html",
    "revision": "ba4cf6d18987b4e9cd40ab8e7d7bd3d4"
  },
  {
    "url": "h++/儿童.html",
    "revision": "6308f69fd986713c53be5d7bec2da67e"
  },
  {
    "url": "h++/免疫功能.html",
    "revision": "883ea7fcb4bec8ab1b041181ff5de709"
  },
  {
    "url": "h++/多囊卵巢综合征.html",
    "revision": "8dcf6d1a842a9fe6119f4ba049797244"
  },
  {
    "url": "h++/烹调.html",
    "revision": "6d2b721ceb1be32cc9c03fd9b4ccf935"
  },
  {
    "url": "h++/甲状腺.html",
    "revision": "9a4d27595638fb9877b5ef5ec8d40d54"
  },
  {
    "url": "h++/皮肤.html",
    "revision": "6becece62d86a87a27be91441850cba4"
  },
  {
    "url": "h++/眼部保健.html",
    "revision": "da151ca5b8592a70b930ee6b6ac49c3d"
  },
  {
    "url": "h++/神经系统.html",
    "revision": "49f30a8640e2967bf2a643643928d682"
  },
  {
    "url": "h++/糖尿病.html",
    "revision": "88db3106bf6384206f1f30f1c4539c3c"
  },
  {
    "url": "h++/肿瘤.html",
    "revision": "bc7868fbbd44b7c6e04ae3f76c55d889"
  },
  {
    "url": "h++/贫血.html",
    "revision": "4476fd173d366f3a693f9fc7ac5c76a2"
  },
  {
    "url": "h++/运动的好处.html",
    "revision": "a2b2d787d5d4a366b24af037b4fa520c"
  },
  {
    "url": "h++/酗酒.html",
    "revision": "29759af1e2c12cc6fc5c7ce923c9f7ae"
  },
  {
    "url": "healthy-index.html",
    "revision": "b3c75f38d3acc5d71f3a492a97b81376"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "df00cba2ce6b37786ec2de71445fc866"
  },
  {
    "url": "javascript/about.html",
    "revision": "6e361c8716aa9951d9154def1dd63ae6"
  },
  {
    "url": "javascript/index.html",
    "revision": "a7070ef4d00dc149b8a79aa18bf5966f"
  },
  {
    "url": "quanxue.html",
    "revision": "37255a21c793bc0391675790c844e533"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
