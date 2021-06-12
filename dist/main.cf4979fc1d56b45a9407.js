(self["webpackChunkwebpack_guides"] = self["webpackChunkwebpack_guides"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --clr-primary: hsl(0, 100%, 50%);\r\n}\r\n\r\nbody { \r\n    color: var(--clr-primary);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[":root {\r\n    --clr-primary: hsl(0, 100%, 50%);\r\n}\r\n\r\nbody { \r\n    color: var(--clr-primary);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ "./src/math.js");
/* ======================================================== 
    Méthode avec async + import basique du module print.js 
    Résulte en la création d'un seul fichier ./dist/main.js */




async function getComponent() {   
    element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack !',
        '5 cubed is equal to ' + (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.cube)(5),
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
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWd1aWRlcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ndWlkZXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ndWlkZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ndWlkZXMvLi9zcmMvbWF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCx5Q0FBeUMsS0FBSyxjQUFjLG1DQUFtQyxLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFlBQVksaUNBQWlDLHlDQUF5QyxLQUFLLGNBQWMsbUNBQW1DLEtBQUssbUJBQW1CO0FBQ3hhO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1BrRDtBQUN6RixZQUF1Rjs7QUFFdkY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJeEIsc0VBQWUsMEZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQ0E7QUFDQTs7QUFFcUI7QUFDWTs7QUFFakMsK0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLDhDQUFJO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxJQUFJLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7QUMzQlQ7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxDIiwiZmlsZSI6Im1haW4uY2Y0OTc5ZmMxZDU2YjQ1YTk0MDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1jbHItcHJpbWFyeTogaHNsKDAsIDEwMCUsIDUwJSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkgeyBcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6IGhzbCgwLCAxMDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHsgXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxyXG4gICAgTcOpdGhvZGUgYXZlYyBhc3luYyArIGltcG9ydCBiYXNpcXVlIGR1IG1vZHVsZSBwcmludC5qcyBcclxuICAgIFLDqXN1bHRlIGVuIGxhIGNyw6lhdGlvbiBkJ3VuIHNldWwgZmljaGllciAuL2Rpc3QvbWFpbi5qcyAqL1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGN1YmUgfSBmcm9tICcuL21hdGguanMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkgeyAgIFxyXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xyXG5cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gW1xyXG4gICAgICAgICdIZWxsbyB3ZWJwYWNrICEnLFxyXG4gICAgICAgICc1IGN1YmVkIGlzIGVxdWFsIHRvICcgKyBjdWJlKDUpLFxyXG4gICAgICAgICdJdCBpcyB3b3JraW5nID8nXHJcbiAgICBdLmpvaW4oJ1xcblxcbicpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5sZXQgZWxlbWVudDtcclxuXHJcbmdldENvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xyXG59KTtcclxuXHJcblxyXG4vKiBFY291dGUgZGUgbGEgbcOgaiBkZXMgZmljaGllcnMgYWZpbiBkZSByZW1wbGFjZXIgbGUgY29udGVudSBkeW5hbWlxdWVtZW50ICovXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAvL1NlbGZcclxuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihlbGVtZW50KSB7IGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KSB9O1xyXG4gICAgICB9KTtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcblxyXG4gICAgLy9EZXBlbmRlbmNpZXMgXHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdChcclxuICAgICAgICAnLi9tYXRoLmpzJywgXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnVXBkYXRlIE1hdGguanMnKTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCkgeyBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCkgfTtcclxuICAgICAgICAgICAgZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVyciwge21vZHVsZUlkLCBkZXBlbmRlbmN5SWR9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciA6ICcsIGVyciwgbW9kdWxlSWQsIGRlcGVuZGVuY3lJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xyXG4gICAgcmV0dXJuIHggKiB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3ViZSh4KSB7XHJcbiAgICByZXR1cm4geCAqIHggKiB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==