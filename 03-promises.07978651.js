!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u=o("6JpON"),i=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');i.addEventListener("submit",(function(n){n.preventDefault();var t=0,r=Number(l.value),o=Number(a.value),i=Number(c.value);if(!(o<0||i<0||r<0))for(var f=0;f<r;f++)d(t+=1,o+=i).then((function(n){var t=n.numberOfPromise,r=n.delayDate;e(u).Notify.success(" Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.numberOfPromise,r=n.delayDate;e(u).Notify.failure(" Rejected promise ".concat(t," in ").concat(r,"ms"))}));function d(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t({numberOfPromise:e,delayDate:n}):r({numberOfPromise:e,delayDate:n})}),n)}))}}))}();
//# sourceMappingURL=03-promises.07978651.js.map
