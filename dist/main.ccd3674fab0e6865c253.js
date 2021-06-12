(self["webpackChunkwebpack_guides"] = self["webpackChunkwebpack_guides"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./src/math.js");
/* ======================================================== 
    Méthode avec async + import basique du module print.js 
    Résulte en la création d'un seul fichier ./dist/main.js */




async function getComponent() {   
    element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack !',
        '5 cubed is equal to ' + (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cube)(5),
        'It is working ?'
    ].join('\n\n');

    return element;
}

let element;

getComponent().then((component) => {
    document.body.appendChild(component);
});


/* Ecoute de la màj des fichiers afin de remplacer le contenu dynamiquement */
if (false) {}

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube": () => (/* binding */ cube)
/* harmony export */ });
/* unused harmony export square */
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWd1aWRlcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWd1aWRlcy8uL3NyYy9tYXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRXFCO0FBQ1k7O0FBRWpDLCtCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyw4Q0FBSTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JUO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQyIsImZpbGUiOiJtYWluLmNjZDM2NzRmYWIwZTY4NjVjMjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbiAgICBNw6l0aG9kZSBhdmVjIGFzeW5jICsgaW1wb3J0IGJhc2lxdWUgZHUgbW9kdWxlIHByaW50LmpzIFxyXG4gICAgUsOpc3VsdGUgZW4gbGEgY3LDqWF0aW9uIGQndW4gc2V1bCBmaWNoaWVyIC4vZGlzdC9tYWluLmpzICovXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgY3ViZSB9IGZyb20gJy4vbWF0aC5qcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7ICAgXHJcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcblxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBbXHJcbiAgICAgICAgJ0hlbGxvIHdlYnBhY2sgIScsXHJcbiAgICAgICAgJzUgY3ViZWQgaXMgZXF1YWwgdG8gJyArIGN1YmUoNSksXHJcbiAgICAgICAgJ0l0IGlzIHdvcmtpbmcgPydcclxuICAgIF0uam9pbignXFxuXFxuJyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmxldCBlbGVtZW50O1xyXG5cclxuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XHJcbn0pO1xyXG5cclxuXHJcbi8qIEVjb3V0ZSBkZSBsYSBtw6BqIGRlcyBmaWNoaWVycyBhZmluIGRlIHJlbXBsYWNlciBsZSBjb250ZW51IGR5bmFtaXF1ZW1lbnQgKi9cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIC8vU2VsZlxyXG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKGVsZW1lbnQpIHsgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpIH07XHJcbiAgICAgIH0pO1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuXHJcbiAgICAvL0RlcGVuZGVuY2llcyBcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxyXG4gICAgICAgICcuL21hdGguanMnLCBcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdVcGRhdGUgTWF0aC5qcycpO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50KSB7IGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KSB9O1xyXG4gICAgICAgICAgICBnZXRDb21wb25lbnQoKS50aGVuKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyLCB7bW9kdWxlSWQsIGRlcGVuZGVuY3lJZH0pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIDogJywgZXJyLCBtb2R1bGVJZCwgZGVwZW5kZW5jeUlkKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XHJcbiAgICByZXR1cm4geCAqIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdWJlKHgpIHtcclxuICAgIHJldHVybiB4ICogeCAqIHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9