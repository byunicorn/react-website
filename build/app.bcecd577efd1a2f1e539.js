webpackJsonp([3],{112:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(5),a=u(l),o=n(102),r=u(o),d=n(104),c=u(d),f=n(116),i=u(f),s=function(){return a.default.createElement(r.default,{history:c.default,routes:i.default})};t.default=s},115:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(5),a=u(l),o=n(65),r=u(o),d=function(e){var t=e.children;return a.default.createElement("div",null,a.default.createElement("nav",null,a.default.createElement(r.default,{to:"/"},"Home"),a.default.createElement(r.default,{to:"/about"},"About"),a.default.createElement(r.default,{to:"/users"},"Users")),a.default.createElement("main",null,t))};t.default=d},116:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function l(e){throw new Error("Dynamic page loading failed: "+e)}function a(e){return function(t){return e(null,t.default)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(115),r=u(o);t.default={path:"/",component:r.default,indexRoute:{getComponent:function(e,t){n.e(0).then(n.bind(null,114)).then(a(t)).catch(l)}},childRoutes:[{path:"about",getComponent:function(e,t){n.e(2).then(n.bind(null,238)).then(a(t,!1)).catch(l)}},{path:"users",getComponent:function(e,t){n.e(1).then(n.bind(null,239)).then(a(t)).catch(l)}},{path:"*",getComponent:function(e,t){n.e(0).then(n.bind(null,114)).then(a(t)).catch(l)}}]}},236:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var l=n(5),a=u(l),o=n(42),r=n(112),d=u(r);(0,o.render)(a.default.createElement(d.default,null),document.getElementById("App"))}},[236]);