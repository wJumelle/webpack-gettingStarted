/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_guides"] = self["webpackChunkwebpack_guides"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* Methode sans async */ \r\n// function getComponent() {   \r\n//     return import('lodash').then(({default: _}) => {\r\n//         const element = document.createElement('div');\r\n\r\n//         element.innerHTML = _.join(['Hello', 'webpack', 'Code Splitting Dynamic Import'], ' ');\r\n\r\n//         return element;\r\n//     }).catch((error) => 'An error occured while loading the component');\r\n// }\r\n\r\n// getComponent().then((component) => {\r\n//     document.body.appendChild(component);\r\n// });\r\n\r\n/* Méthode avec async */\r\nasync function getComponent() {   \r\n    const element = document.createElement('div');\r\n    const { default: _ } = await __webpack_require__.e(/*! import() */ \"vendors\").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ \"./node_modules/lodash/lodash.js\", 23));\r\n\r\n    element.innerHTML = _.join(['Hello', 'webpack', 'Code Splitting Dynamic Import'], ' ');\r\n\r\n    return element;\r\n}\r\n\r\ngetComponent().then((component) => {\r\n    document.body.appendChild(component);\r\n});\n\n//# sourceURL=webpack://webpack-guides/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);