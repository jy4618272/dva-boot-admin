"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/dva-boot-admin/index.html","ab74f30d1f8697cb7db5edfd7417d37e"],["/dva-boot-admin/static/css/main.5e52af4e.css","e255168c187060448c557deb2f0b0b9d"],["/dva-boot-admin/static/js/0.93adf373.chunk.js","fd5b59dfa11d8701b0a1fb61d1a8c6db"],["/dva-boot-admin/static/js/1.523f3c0a.chunk.js","0775ff466a8a5b3adf01271989c51000"],["/dva-boot-admin/static/js/10.b9f32196.chunk.js","23ef802447bb5de88802e6a3b082270f"],["/dva-boot-admin/static/js/11.7074e1b5.chunk.js","49eba4f59eed5f7025a58964b713dfcc"],["/dva-boot-admin/static/js/12.e433a3c3.chunk.js","1353419269d9c5e9a98fd785a243206c"],["/dva-boot-admin/static/js/13.49b9a9b1.chunk.js","bb90a743011e86a2a1ce3c7a59667504"],["/dva-boot-admin/static/js/14.008fe1bd.chunk.js","6f7cedd8900429b240e894f92555d149"],["/dva-boot-admin/static/js/15.9cd799cf.chunk.js","a168e00a671b11d5651d2f6794091175"],["/dva-boot-admin/static/js/16.e5f47331.chunk.js","64612adf19a123a75bfad6c81c2320da"],["/dva-boot-admin/static/js/17.514451dd.chunk.js","2c98178f7d26c86c7279b64e859af859"],["/dva-boot-admin/static/js/18.b48a12c4.chunk.js","1aa273104eb43bdf744a37ca59a7e9c1"],["/dva-boot-admin/static/js/19.50e6c738.chunk.js","bf77c9320e4bbe2163a91315f13324c0"],["/dva-boot-admin/static/js/2.6ab79dbb.chunk.js","fd449fe0faf25c716022e5980bbb92c8"],["/dva-boot-admin/static/js/20.ce6b0f39.chunk.js","d7a171d7ce000d2bf272d0e320f87546"],["/dva-boot-admin/static/js/21.6d7f0f9b.chunk.js","cdc4bf762ae43cd9a388fe3cfce62740"],["/dva-boot-admin/static/js/22.8147733a.chunk.js","75d4ed6ad8f141b3aea5c25943beea54"],["/dva-boot-admin/static/js/23.9d88b185.chunk.js","c6bad460c1abf6c4212cec9061a066ee"],["/dva-boot-admin/static/js/3.1c63f1fd.chunk.js","36fdc9dd90157657ec7dfe89dd80efec"],["/dva-boot-admin/static/js/4.31f799bf.chunk.js","cd88e2cebc1e6229474167d6c9c6eab1"],["/dva-boot-admin/static/js/5.86714acf.chunk.js","4ec74b6511b068de3f1da3d1fa7f2213"],["/dva-boot-admin/static/js/6.83d9ab1f.chunk.js","9796d487ff4e6e039b0b02126f45614f"],["/dva-boot-admin/static/js/7.5e6436b2.chunk.js","a342b4216c5b859a920ae12e4e7dbaee"],["/dva-boot-admin/static/js/8.cec34385.chunk.js","dceb2f5da2be1a60e907bf6a7e0a101d"],["/dva-boot-admin/static/js/9.febcc171.chunk.js","bf206a7d707fa26ff17eb8255457f95f"],["/dva-boot-admin/static/js/main.f5064f62.js","42ba8c139f9b2d613435b22383932963"],["/dva-boot-admin/static/media/avatar.595f9bc9.jpg","595f9bc9380b1cad5f61fdec19cda60b"],["/dva-boot-admin/static/media/icomoon.11da4f19.svg","11da4f19f54465b5a8dcddebb2ac737a"],["/dva-boot-admin/static/media/icomoon.96d7f1f2.woff","96d7f1f20e056647d4b29728a8d7c39b"],["/dva-boot-admin/static/media/icomoon.d585b42c.eot","d585b42ceaee40e267916bf3371037f3"],["/dva-boot-admin/static/media/icomoon.ea141907.ttf","ea14190751ba8d966844526ec6088bb1"],["/dva-boot-admin/static/media/pattern.c4113510.png","c4113510cff7beeda3fb0f77f2919b63"],["/dva-boot-admin/static/media/topbar-bg.eef71d63.jpg","eef71d63d83b49c46d954e9f41e8ff5e"],["/dva-boot-admin/static/media/workers.3bb77abc.png","3bb77abcf801d53bbda8fe52e4c240b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var c="/dva-boot-admin/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});