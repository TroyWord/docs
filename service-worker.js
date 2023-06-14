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
    "revision": "baf216e809ab8304bd5acfea07679324"
  },
  {
    "url": "about.html",
    "revision": "5e59859cf2e5cbc25b2f55089acce3e2"
  },
  {
    "url": "about1.html",
    "revision": "e319bdbd0b7c6e24b58a3657bcc2a2e6"
  },
  {
    "url": "about2.html",
    "revision": "54f71cf93a8fb69aeb767d5e36fa5bf1"
  },
  {
    "url": "assets/css/0.styles.b7e00332.css",
    "revision": "f7970a7cded05282b49479cbf1e8f9f2"
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
    "url": "assets/js/10.b914ab8a.js",
    "revision": "e29678cd6319f19e1b417d55ab5b5c21"
  },
  {
    "url": "assets/js/11.d0f43620.js",
    "revision": "6b432235e0a9af63039d848657227631"
  },
  {
    "url": "assets/js/12.d1e9b223.js",
    "revision": "557b4c802a0685361e97d976c0e4d328"
  },
  {
    "url": "assets/js/13.305e8e31.js",
    "revision": "af918e8a8c97dd009711e1bd61116742"
  },
  {
    "url": "assets/js/14.b7cf8454.js",
    "revision": "d01e77dc97b23f271a534b85bc197c63"
  },
  {
    "url": "assets/js/15.6b159532.js",
    "revision": "2af38625eb10152fe835ed37efe3acb0"
  },
  {
    "url": "assets/js/16.04695593.js",
    "revision": "6c9ae833d1551ca894307db8b1890cfb"
  },
  {
    "url": "assets/js/17.a0ab98ae.js",
    "revision": "27bfc1f572a6d9fe0a1200d83d6410a1"
  },
  {
    "url": "assets/js/18.9b248c58.js",
    "revision": "fc44b761d0e92e3c4e8417a60abc582a"
  },
  {
    "url": "assets/js/19.187c3d7b.js",
    "revision": "f27e4f5e1beba8e0622ce1f07ce2b9e6"
  },
  {
    "url": "assets/js/2.c9e4d231.js",
    "revision": "1f83705aa162fbc32ce08d8e720d4b5d"
  },
  {
    "url": "assets/js/20.9e2007bc.js",
    "revision": "eb875460c53c27ecd97c667e95bc4689"
  },
  {
    "url": "assets/js/21.2f7dcd96.js",
    "revision": "3829ef18b6c3735cab517fa866173bb7"
  },
  {
    "url": "assets/js/22.8ce04277.js",
    "revision": "8738be0822e5c26c116989eb1f5bf8e2"
  },
  {
    "url": "assets/js/23.09ac2fd1.js",
    "revision": "52d090a90d9a1d3e8bf91660524e3939"
  },
  {
    "url": "assets/js/3.ca4d82fb.js",
    "revision": "10185d4c12d7f0dbb68b1f55947bbd00"
  },
  {
    "url": "assets/js/4.200407ae.js",
    "revision": "e1d96ba2784161d42029513ef4779151"
  },
  {
    "url": "assets/js/5.9f12da90.js",
    "revision": "bd4ec2cea78dd6c3b55fe76bc28ffde1"
  },
  {
    "url": "assets/js/6.0d8fb8c8.js",
    "revision": "95f3224c3c697033c74b8e11b48b794a"
  },
  {
    "url": "assets/js/7.3f55bdcc.js",
    "revision": "18a6fa1dfa4038d7f49c027eb1059b17"
  },
  {
    "url": "assets/js/8.b86d2540.js",
    "revision": "a0d5c581febdec8b97d3052cc4484d2d"
  },
  {
    "url": "assets/js/9.0e891249.js",
    "revision": "6abf8004fab79ca9d8e9add158d9844c"
  },
  {
    "url": "assets/js/app.5a57b3b4.js",
    "revision": "0def102bca272d4ae03d9674df057e73"
  },
  {
    "url": "countup.html",
    "revision": "a07296e35127bf3d0a01d8ae786696e9"
  },
  {
    "url": "css/about.html",
    "revision": "97e1f1ef30e31345484ec7eca281dea8"
  },
  {
    "url": "css/index.html",
    "revision": "1c35f36f4261f415489ebcab4c636b41"
  },
  {
    "url": "healthy-index.html",
    "revision": "b69cabafb4157c6475b414b732e95b30"
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
    "revision": "4b216025eb2a1b6eab25e62752affd85"
  },
  {
    "url": "javascript/about.html",
    "revision": "3fc3542173fd121035940f276130b324"
  },
  {
    "url": "javascript/index.html",
    "revision": "cd519646e4c4696ad5c3e73422694457"
  },
  {
    "url": "quanxue.html",
    "revision": "c849df1e6ddadc2881bb576676957e67"
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
