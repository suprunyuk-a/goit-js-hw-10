function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("eWCmQ");function u(e,n){const o=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(n=>{n.preventDefault();const o=document.querySelector('[name="delay"]').valueAsNumber,t=document.querySelector('[name="step"]').valueAsNumber,r=document.querySelector('[name="amount"]').valueAsNumber;for(let n=0;n<r;n++){u(n+1,o+n*t).then((({position:n,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${n} in ${o} ms`)})).catch((({position:n,delay:o})=>{e(i).Notify.warning(`❌ Rejected promise ${n} in ${o} ms`)}))}}));
//# sourceMappingURL=03-promises.7453aad3.js.map
