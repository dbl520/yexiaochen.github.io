/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/Array原型之变异方法/index.html","631c7e2b913ff17f9e6f8a80e8610930"],["/Array原型之迭代方法/index.html","fd59ea66df2f98a1902b3789f33d8f78"],["/Array原型之非变异方法/index.html","9bdeef42f473a12c7aeace85cfa96443"],["/Array构造函数/index.html","e9b57dac2e71eeaf7bc844fcf1cc9d37"],["/DIP、IoC、DI、JS/index.html","c0e3697089996de0306b6287448a91c7"],["/Function原型方法/index.html","6619e20f89ceeae873e283aaa70f8f27"],["/Github-Hexo-Next博客搭建之Hexo-Next及部署/index.html","61d7834065569279325aa3ad097aceab"],["/Github-Hexo-Next博客搭建之Markdown/index.html","ebb256585f7d2cecea0736b3fb44a29d"],["/Github-Hexo-Next博客搭建之git和\bGitHub/index.html","23eeee05e30fdc7c00f99579c94224cc"],["/JaVaScript中的模块/index.html","512fc382409c189099569369d7f2766c"],["/Mac终端改造/index.html","4a9f23980a229c7dc832ad2a6b200abe"],["/Object原型方法/index.html","023d409e370fcfd0f1ef9ae56ef67fee"],["/Object构造函数/index.html","e2582bfb39ee19a4aa0ac0369a9407e8"],["/String原型方法/index.html","8b43a94c811f64626886125f62d2d68f"],["/VS-Code使用基础/index.html","c946b4352b2f149731b6007ab091c7f1"],["/about/index.html","c09b616904c4d5085a95f26b464d1b8c"],["/archives/2018/03/index.html","35c94c9bbef86c883c0eddd0ae43181c"],["/archives/2018/04/index.html","cd96d2a6728d20940a62b7e44c2728e8"],["/archives/2018/05/index.html","56e3a70aaec331a9be8936560e9db75b"],["/archives/2018/09/index.html","91edcf1f2b0813b45810451096144a94"],["/archives/2018/11/index.html","225bb2e6e9a8a499e56f60290d994eb7"],["/archives/2018/12/index.html","14a72c3ed2a19131be05e58e7ffebfa8"],["/archives/2018/index.html","640502ed65d0628347153816e4f79159"],["/archives/2018/page/2/index.html","c6a48cdfa29a013ab507ddd2636ccabb"],["/archives/2019/01/index.html","89006bb18aacb112989d4303a9474b77"],["/archives/2019/02/index.html","a2844ad0d0b0dd73e68683c5f587d366"],["/archives/2019/03/index.html","acaa57f7c7baf0976364b622e6e5af44"],["/archives/2019/04/index.html","27c295512f14f3afb31039ac539d25d2"],["/archives/2019/index.html","3a7b2c0aee12f82e622e657d756bd186"],["/archives/2019/page/2/index.html","d6aa8d8a9b9fe478cac7d14dd695093d"],["/archives/2019/page/3/index.html","5d27771d9bfebf339288422351da245d"],["/archives/index.html","df356515f5d1b2bb7c31f7b4df440ccb"],["/archives/page/2/index.html","29f8ca8b4d6c9a1e171efeba2d661528"],["/archives/page/3/index.html","5f98e914dcc2c8ecf77555604c36ec68"],["/archives/page/4/index.html","839fe1f479ab803f277c2e0d3254b012"],["/archives/page/5/index.html","64a48977f94ed5922d6421a2298e3e5f"],["/categories/API总结/index.html","470d881959e23049be7948f18bb0647b"],["/categories/index.html","b4179677148d671d83ce22cef618c8f0"],["/categories/写点啥/index.html","7b93e8318366920228ddbf040808ec1e"],["/categories/写着玩/index.html","bdc4ff875181a68741f75b37a863d046"],["/categories/博客搭建/index.html","dc727ff0be537f73d4b49de7481eb98c"],["/categories/善事利器/index.html","3dec08a3aeefe7eb5ddefe8e6f2ea9d3"],["/categories/天坑也填坑/index.html","4caa7494bc956abf844292807d277515"],["/categories/很难么/index.html","b7258491501fe780e08a2aa3537fcaa6"],["/categories/日志/index.html","8759fae60e517c0ef4558a33188bfd51"],["/categories/浏览器/index.html","325fe8d024d9361fea6a652f5249b2d6"],["/categories/设计模式/index.html","ca7b313139150cd7dfea169a55d2a8c3"],["/categories/这个想法不一定对/index.html","816e30addd5c3a68134628036fd5fe3a"],["/css/main.css","63e0a9eab82ceb1d931ed867c926962b"],["/images/1avatar.jpg","be92c0e634cf1fff725957a0def06ec2"],["/images/Aquaman.png","f0c8c2b31fd64583051757fc4502bf5d"],["/images/Array.prototype.fill.png","8d0fa6833de85c0be9a41e2806fbda7b"],["/images/Chrome.png","ca0cad3d365569e3428d218a8ae61c29"],["/images/DNS.png","7bf66fe30c698b5775742e1f7ef865d7"],["/images/EventLoop.gif","b70ac1c2e901e76a46880d4970219535"],["/images/Filesystem.gif","69d212f30dec2d42b4d0eabede9a0d46"],["/images/Function和原型链.jpg","f34c4d55c198ce91a53c39caef0f3012"],["/images/HMR.gif","9903bec7bd048afec83a0bdbc891a33b"],["/images/J-20.jpg","23931e422a58f5550793116361e82c1d"],["/images/MVC&MVP.jpg","6ff5d99bbbc6d92595ccdbe72a789a33"],["/images/MVC.png","3639172aa5e9668b338cafac40e16ba2"],["/images/MVCDEMO.png","ad569fc080aae5296c952473f05226c5"],["/images/MVP.png","4ee59e673475e0c981f9105b8ed665f8"],["/images/MVVM.png","2bb97e90ac2649c7175274f5885f40ac"],["/images/OAuth.png","4ffdeedc70f9e0a70c0d30c2420da79d"],["/images/SSH.png","13b73d7d71d08f973cd25fe08d3fd1a8"],["/images/ScopeChain.png","91f6119895588b4f104ed08347ed73ab"],["/images/UML.png","531cfb2d5ff4796d822af47fded18125"],["/images/UMLOverview.png","7db738c02f1f9cbe45f1507ec926da6f"],["/images/URLRelationship.png","9c985468d82bdc4a86132b5c6e2f68af"],["/images/VSCode.png","60f487800c0a9c23f19edd2eec695349"],["/images/View.png","1e2f484dcf6f380c10aaf2f236206469"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar1.jpg","ab9042bbb69e6e1f70c45d966d6247ab"],["/images/callStack.gif","fd85aa25ffbb3a64646db0b3bf408334"],["/images/callbackHell.jpg","a28691101976e12da1dd15f82eeb6f47"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/codeCommand.gif","516f6b87c7aca7ed8f0debee169046ac"],["/images/coding.png","89c11595de9dadba3b5cd8c1d486221c"],["/images/colorThemes.gif","b63367626263ecebc9c5600d963f9e0f"],["/images/companyExpense.png","f4205659e723c6c5ac0794e1f23d5982"],["/images/compositeMode.png","0a5b42e95d1ffd65b69077c2bd48cd6d"],["/images/devToolsWithScope.gif","009c839de50554c20438b17f938b16ff"],["/images/eventListener.gif","339dacad3ed73202fd916c5be3424f4a"],["/images/exceptions.png","797ea6b507c01cdae1559125a85876fc"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/fileComparison.gif","24f9f245f9195230e8d7441af596dc11"],["/images/filter.gif","1f3e94eb31357c669c11fde4ec3a983a"],["/images/git.png","4f2a74d1d3ba9983cdb4dda21529b230"],["/images/initiator.gif","173bc1fe672c4a77c2945abc7ca63599"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/loop.gif","e97b22568d8bdd7a96bb86641bee1c6a"],["/images/mvvmVue.png","8a919f39bb3005b2a6b2f102f615e309"],["/images/mvvm_typescript_React.gif","019b6d8183cb878a7ea0f4524cff5226"],["/images/netSpeed.png","48a902396092b5a72e03cd52abc91411"],["/images/newRepository.png","e57a357d5b26f0696e7d8adb1be482dd"],["/images/ordinary.png","7766f57ef787bf975f5fce3fea983cfc"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/property.png","4d6fd3e68c2c396ae1dd39a8fd224430"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/render.png","2496690e74adf41b97160fb291988f1c"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/snippet.gif","f502cf858a3bdaca6c22fa80c0bddafb"],["/images/terminal.gif","5f7185b06a490c5f62e88e0baf59e747"],["/images/thread.png","755ac478c32dea9320ece86cf93fa357"],["/images/windows.gif","1c318882e8a021613689a35269bf7545"],["/images/workplace.gif","1b853f9a9795b0b4b22a1578402e08b9"],["/images/响应首部.png","635e90c99fe5f96f77aa3e2f48d03ca0"],["/images/浏览器缓存机制.png","45ff742cd1f0804d24dfef05fbe1323d"],["/images/请求首部.png","58245defb3bd8642a3af6808b34fa0ca"],["/index.html","dfa284018b08be817e3979262b6be070"],["/js/src/affix.js","6bd6472a1216b3b273da4f0ea3bc0253"],["/js/src/algolia-search.js","52237067a54acd62cce59d2191f9fcdf"],["/js/src/bootstrap.js","9a990ed838a696772b69ffd9a4c3e918"],["/js/src/exturl.js","47bea0bca1a544b992994130443f0fd2"],["/js/src/hook-duoshuo.js","af94bdeac070c4757fba7c1fe9bd596e"],["/js/src/js.cookie.js","5f3275c00d76061d15d5d1d3d49f4090"],["/js/src/motion.js","6e18b8e3fd6919e1c365ec27b5a1f586"],["/js/src/post-details.js","d5c8821c297ea8b2c1b26bf98c6ae7c4"],["/js/src/schemes/pisces.js","80be694178e35b62667de106e200bffe"],["/js/src/scroll-cookie.js","859d7330e5f34cdabb9a29258d12a90a"],["/js/src/scrollspy.js","642409bcff8511071ca6bc3344dd26aa"],["/js/src/utils.js","b1069ccdf9683a9813ee3cc8fe8d2045"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","b5219f43c16a314add355193ddb14112"],["/lib/Han/dist/han.js","82c16bcf0941d0f5724243117c05a0a3"],["/lib/Han/dist/han.min.css","dcff20d05f217581baae2c143a3e936b"],["/lib/Han/dist/han.min.js","2081b084646de32461cb4a6432544280"],["/lib/algolia-instant-search/instantsearch.min.css","7707277a8734881434d84d6443182b5c"],["/lib/algolia-instant-search/instantsearch.min.js","0304af36f198053bff0eb7dd5e301678"],["/lib/canvas-nest/canvas-nest.min.js","8a0a9e8be5606e04c437abdfe0f0a35f"],["/lib/canvas-ribbon/canvas-ribbon.js","763dfa93c28ee06955385665f56b6be2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","758eb645d9606cb1ac96cc2172aa4795"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","309a863d57fbf9333c6a35a904b741db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","06b16d3254fa09fc3b572ebff7959594"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","79e05cccafcde57e9e7d601185aba875"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e1c672aeab4daa1339bcdd2838cb3c30"],["/lib/fancybox/source/jquery.fancybox.css","58d76b7929cbe563afdc82d7791b17c0"],["/lib/fancybox/source/jquery.fancybox.js","cdd3f97aeceb8a7c6429d6713eddf2b3"],["/lib/fancybox/source/jquery.fancybox.pack.js","b7476220420ca50ea57971efa499d58a"],["/lib/fastclick/README.html","8238900968ff1d4c754b749ecefeb415"],["/lib/fastclick/lib/fastclick.js","5dbcd7f943750b317d937abf78e717c4"],["/lib/fastclick/lib/fastclick.min.js","bde56d873610a733692dde0c9dc72ce9"],["/lib/font-awesome/css/font-awesome.css","ddf98fb761df107da617ffe4542a2671"],["/lib/font-awesome/css/font-awesome.min.css","ddf98fb761df107da617ffe4542a2671"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","ca77771f78111d9871f5c497b8ad71ec"],["/lib/jquery_lazyload/CONTRIBUTING.html","0ae2755a5ac20c440d80964ccc8dfc0e"],["/lib/jquery_lazyload/README.html","544b611e4987843d1eafb90a9f6efed3"],["/lib/jquery_lazyload/jquery.lazyload.js","fa55aba9104020a92d05fe5ea84f5967"],["/lib/jquery_lazyload/jquery.scrollstop.js","764ed53dee628e21cdb0b02784bb0927"],["/lib/needsharebutton/font-embedded.css","c9f98f149e6a9930f3691e0596b8da0b"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6ef65525ecf175988b0cd6fcb750525e"],["/lib/pace/pace-theme-barber-shop.min.css","9894356a5ed772d51ca1bf17b045790c"],["/lib/pace/pace-theme-big-counter.min.css","b44c20d91ff091a723aafd2c0309c145"],["/lib/pace/pace-theme-bounce.min.css","b94c47d9ce49777262fcc2a7cf410169"],["/lib/pace/pace-theme-center-atom.min.css","07f91f0220765794e11a1b56c539bdc6"],["/lib/pace/pace-theme-center-circle.min.css","05ac41f93a798a4a0cd693215e9f54f0"],["/lib/pace/pace-theme-center-radar.min.css","2e0e869c4a08ef7b4a44036dedb0ce5b"],["/lib/pace/pace-theme-center-simple.min.css","bacae6137ef0901c0f6e8a2d73d647fd"],["/lib/pace/pace-theme-corner-indicator.min.css","a72c753c3181690d0f7490d7a05764f4"],["/lib/pace/pace-theme-fill-left.min.css","9ac363f7da4f55bc5a05baefa358fd12"],["/lib/pace/pace-theme-flash.min.css","ec5a2f4024d4e0ddafcd982701131474"],["/lib/pace/pace-theme-loading-bar.min.css","4daff9348332283caff13e5efb4bf9ee"],["/lib/pace/pace-theme-mac-osx.min.css","f99934dcf38d73f5f155f796ddc1f3d5"],["/lib/pace/pace-theme-minimal.min.css","f4a71d03b79e920548df469c9b49987b"],["/lib/pace/pace.min.js","08c2fecc0413d4f91a1452401355515b"],["/lib/three/canvas_lines.min.js","d9e3d040a4eb830f4274f4ef0165662b"],["/lib/three/canvas_sphere.min.js","31877bf80771250dc260802500a4edd0"],["/lib/three/three-waves.min.js","5bc865fade2d63293703e4c49f3173a1"],["/lib/three/three.min.js","f6cc086819b4eb8f89e35394f80de274"],["/lib/ua-parser-js/dist/ua-parser.min.js","91dccad0c207cf2cf3c4531485a5f380"],["/lib/ua-parser-js/dist/ua-parser.pack.js","61f07c478adaefb169044b70d2b90376"],["/lib/velocity/velocity.js","8e56bd486364b13b9452d13c4531a3ac"],["/lib/velocity/velocity.min.js","cc7be9d9f68da0f6dbd9130956d5ed85"],["/lib/velocity/velocity.ui.js","92b5481d94eae34ee88b1d10a756a301"],["/lib/velocity/velocity.ui.min.js","9d847eb7912e4db185a7a215e62c9666"],["/page/2/index.html","091a134ab09f47525f7c35c31704cfca"],["/page/3/index.html","3aa8a5949b4eca06b84b02ffb913edbf"],["/page/4/index.html","429ef8119cf4c5d25e2e9bd262c783a9"],["/page/5/index.html","3e0bac6d802062d6ac12425f6ba4bcd7"],["/schedule/index.html","08122409c1a716525d05b36d4c85d6de"],["/tags/Array/index.html","96930f9fb62d77863823750deb4a3cf9"],["/tags/Blob/index.html","e90c5c193646c28206f7e88fa4a7820d"],["/tags/Chrome/index.html","51dec1645e64f4eae2a957f7dee566f8"],["/tags/DI/index.html","bf111c4f39f0d59fdd2ca1b40d554800"],["/tags/DIP/index.html","efdef06a00122ef6f84fae6d8ddd24a8"],["/tags/DNS/index.html","d5cf53dac08f205961cd5c441be40ec8"],["/tags/DevTools/index.html","a7e78a49cfead371c46e340078d22cd2"],["/tags/File-API/index.html","51d22f2b0899b4f94e7aeb2a96a5799b"],["/tags/FileReader/index.html","faf109d803a574e8285b758f7a7a4abd"],["/tags/Function/index.html","343bb1cad4f78fb8a476d4141448d3a5"],["/tags/Function原型/index.html","ea0a8294a60b24c6d386ccd93b949d26"],["/tags/Hexo/index.html","8c7bbe8bc351bbefe3022f69723d0ebd"],["/tags/Ioc/index.html","9d89d216cae2ac37b78b462d3207181f"],["/tags/JavaScript继承/index.html","a576d1890210e513e5fa3dbb3ec1bf38"],["/tags/MV/index.html","2393784c83eeeccc94c10df5de3ab085"],["/tags/MVC/index.html","8c53620d9f98b484743605333a60c2f4"],["/tags/MVP/index.html","b7c05b489c3709b733874d06326bf7e0"],["/tags/MVVM/index.html","7296f07dd5aa7d0e3cba9d43d1f10397"],["/tags/Mac终端/index.html","dc0afed9cc788ba3abeace1d75f589f1"],["/tags/Markdown/index.html","dc341a75764a99b100211c4ebde79519"],["/tags/Next/index.html","dbed74d184e79ae798d5d389a3816f13"],["/tags/Object-defineProperty/index.html","57a1eb882337df0c48eade97e65cf57f"],["/tags/Object/index.html","d390e3fad9411128f1b1b11d39ec41da"],["/tags/Promise/index.html","e67462f32a678e7441cc5833ebd5dc15"],["/tags/String/index.html","f466f4ddc0bd623acb9e5dc638135e4b"],["/tags/TypeScript/index.html","48b5b0c3c9148d652950060a7f593e09"],["/tags/UML类图/index.html","260d643a5078760dcc49e2ee01c5d92f"],["/tags/URL/index.html","5c0e3c51f4e3d3fdbc7fb09a2ef1a56b"],["/tags/VS-Code/index.html","6b6d7da037f5c74f07382e59f9fff2ca"],["/tags/Visual-Studio-Code/index.html","08c75a9e891969bae79c712caec076ab"],["/tags/apply/index.html","82e7a34fd7402ae88669715c40d4ff4f"],["/tags/async-await/index.html","1720ad4bd1c6bb2b87483a6c1719f838"],["/tags/bind/index.html","199ce9ae366b5041d2e21fad515c3910"],["/tags/call/index.html","bf37314cc552b033b335a6413e0a7fe4"],["/tags/coding/index.html","abb68dc4ebe00c216e598480030af552"],["/tags/defineProperty/index.html","83d264ed8e9262ef10458292f6b4da3b"],["/tags/git/index.html","883917d622b71de52173398dbfb6201b"],["/tags/github/index.html","8bccbec6d2aee80e8d8e67a48926e14e"],["/tags/index.html","e197a4624d7c7408011cc0e7e88179b6"],["/tags/new操作符/index.html","8f79aa4f6dfcc2561c25d106add0cc0e"],["/tags/oh-my-zsh/index.html","b1a7a55bddb54507d7244ee36e314651"],["/tags/prototype/index.html","957111f7fa70828395c145177434de33"],["/tags/react/index.html","c04818b7b55a56b053ed476d575f23a0"],["/tags/shell/index.html","a890df4816d3a4202947b535b1e0e3a4"],["/tags/then/index.html","3fd6fa502515fca6a81265a3548d3926"],["/tags/this/index.html","9d6586ffea5e0e530cadf5540425fa31"],["/tags/zsh/index.html","dfed450e064d165249aa7a0517440f81"],["/tags/事件循环/index.html","f7b82c22c7d32ccb62cbf567d55e0e64"],["/tags/任务队列/index.html","55e4aa732cd8fb014ec79dc48e101ee9"],["/tags/作用域/index.html","e97e045417af9d0ba5888aa231b30525"],["/tags/内存泄漏/index.html","c59fb5a0077430c0d13350e6e5681fe4"],["/tags/函数/index.html","674d2e1c9ccb2ec91aaa12e71a52dc76"],["/tags/博客/index.html","a66c4674a92a212205fbbf360bc48a4c"],["/tags/原型链/index.html","9fff315f9cb26075bc44ad4118ad4ef3"],["/tags/反向继承/index.html","4cea7426d6118669e48407643c4ff3d9"],["/tags/发布-订阅模式/index.html","fd57d69422408c019723fcae5265ac4f"],["/tags/变异方法/index.html","32fae3fa75dae2bc1f7b7ffbeb1d4d06"],["/tags/回调/index.html","4534260260eca328efbf9936d665d209"],["/tags/字符串原型/index.html","21fae40cf852602a9ef6347f79e4c85a"],["/tags/对象原型/index.html","efe44c5cd6dbb004fcf324a593fe7a13"],["/tags/属性描述符/index.html","136300aed57bb9987858e4e403283b4c"],["/tags/序言/index.html","c70a754c542120ff4467e6a13d65bb8b"],["/tags/异步/index.html","8263fb3554670fc6ef44eb4baddc914d"],["/tags/强制类型转换/index.html","74debf0ddbc4ea6229590d4c9bc11c66"],["/tags/数据类型/index.html","c990e5ed3a6acc0cd187796caec1bdb9"],["/tags/数组原型/index.html","d19886ea9d76d6b59d69ead4e59f2327"],["/tags/构造函数/index.html","63fadc3f1efa25a61ddf624eebfe2ad8"],["/tags/模块化/index.html","3ad85358a7b950af7aac929171aac95e"],["/tags/浏览器缓存/index.html","bde62dbf438ddae0f5676702c9a0c68b"],["/tags/生成器/index.html","3bfa41c2c4c11f1d2afededf543a81a9"],["/tags/空对象数组/index.html","b1bdb8611ac47dc6140959eee952d242"],["/tags/策略模式/index.html","f05ff3be301144654c75fbc6ad148624"],["/tags/组合模式/index.html","98132e5d20373e6e66b0cabf988417bc"],["/tags/编辑器/index.html","e0fc127e01925c8885d58fb013d3bd51"],["/tags/观察者模式/index.html","f2f7865aa3a8446aa915db04d8f662b9"],["/tags/迭代协议/index.html","5fb168e0d6685d84cabd1642349d3be1"],["/tags/迭代器/index.html","4cc101111347f1749afddb0c7546a2a8"],["/tags/迭代方法/index.html","91433df6c313640c10585a7edf576b45"],["/tags/部署/index.html","9d3ce4384a13034a911ce0a12b465eaa"],["/tags/闭包/index.html","f15e8f57815ef5699e696e446af6338c"],["/tags/随手记/index.html","e3aef50c95bf1ee154ca46b0652da369"],["/tags/非变异方法/index.html","1f9f27fc0eda066da79d57972b6047ca"],["/tags/面试/index.html","bbb75e5bee045e58b75a887665f4d505"],["/tags/高阶组件/index.html","5e59b79d0e1f30658d9c7cf622e3f2fb"],["/为强制类型转换正名/index.html","857a30df0943d125fac3f44120ab4a12"],["/从Function入手原型链/index.html","f1324819f852fe5247542f7b1e2c4554"],["/从游戏角度说作用域/index.html","f53ac35d88533812eac73b58a42050bd"],["/从观察者模式说起/index.html","3b352e15326dec2b0ee4fc19e26fec14"],["/从迭代器模式到迭代协议/index.html","529ac75e6f2357da6cab9296fad8b924"],["/关于MVC模式简单代码实现/index.html","5fbff9e84935748400faef204e10583f"],["/关于MVVM模式简单代码实现/index.html","88e4fbf6dcf41e174ea7e452ebbd560d"],["/初始化空对象数组/index.html","1a10df917868b27982b036d408cfd794"],["/前端笔试之手写代码/index.html","aaf4d244007e5375c6934f9ffccc8460"],["/咬文嚼字说策略/index.html","f5cdc61bce97521c39a5432b46623ec9"],["/在JavaScript中尝试组合模式/index.html","7fc59628eda1b9631d3ab418978062be"],["/对象属性的属性/index.html","0188fef61798bd91eb0d762add56fbd6"],["/序言/index.html","4774fc2483185ae1ee62efacfb431119"],["/异步的JavaScript/index.html","84d42188df4e769b0f965ec2a180d7ee"],["/异步的JavaScript——Promise篇/index.html","03b77e353f3d7fadf34a9f562ac3eefc"],["/异步的JavaScript（终篇）/index.html","8e7a6f9c217b4e0d385afcd9a9857e00"],["/浏览器缓存机制/index.html","9e15996ebe2e7d1b82919092ce7a84b1"],["/用DevTools提高你的工作效率/index.html","36358b6a706bc396f0ead2d1f76a3076"],["/用Type驯化JavaScript/index.html","fd054e9347723318d461b45b404df7ba"],["/白话MVC-MVP-MVVM/index.html","f33c86177c19bfa235554c129fdab76b"],["/观察者模式再次进阶/index.html","e86f54948d46aff9f2309b344830970d"],["/让Python漫步在浏览器上/index.html","4e1f613679dbe7bbbc024bd4d39dd216"],["/记不住的继承方式/index.html","948b8839dd3bb787b5066199eefd01f8"],["/读懂UML类图/index.html","333c21d1c508cf304620b7e26d2981dc"],["/进击的观察者模式/index.html","ed778d92fc536683e3916513d5c60991"],["/随手记（一）/index.html","205124e5c49136ae321e9118da909a0f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







