!function(){var t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=null;function e(){a?(clearInterval(a),a=null,t.disabled=!1):(t.disabled=!0,a=setInterval(o,1e3))}function c(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}function o(){var t,n,a,e=(t=Math.floor(400*Math.random()),n=c(),a=c(),"linear-gradient(".concat(t,"deg, ").concat(n,", ").concat(a,")"));document.body.style.background=e}t.addEventListener("click",e),n.addEventListener("click",e)}();
//# sourceMappingURL=01-color-switcher.cc38b5fa.js.map