!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o.register("fSCrk",(function(e,t){var n,r=o("l1Gdk"),i=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");return i.addEventListener("input",r((function(e){n=e.target.value,console.log(n)}),300)),fetch("${BASE_URL}/alpha/${countryInput}.json").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))})),o.register("l1Gdk",(function(n,r){var i=o("l5bVx"),u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,b=Math.min,m=function(){return p.Date.now()};function x(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(x(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=c.test(e);return r||a.test(e)?l(e.slice(2),r?2:8):f.test(e)?NaN:+e}n.exports=function(e,t,n){var r,o,i,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,a=t,u=e.apply(i,n)}function v(e){return a=e,f=setTimeout(j,t),l?p(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-a>=i}function j(){var e=m();if(h(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-c);return s?b(n,i-(e-a)):n}(e))}function w(e){return f=void 0,d&&r?p(e):(r=o=void 0,u)}function O(){var e=m(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return v(c);if(s)return f=setTimeout(j,t),p(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=g(t)||0,x(n)&&(l=!!n.leading,i=(s="maxWait"in n)?y(g(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,r=c=o=f=void 0},O.flush=function(){return void 0===f?u:w(m())},O}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o("fSCrk")}();
//# sourceMappingURL=index.5b28f7d6.js.map
