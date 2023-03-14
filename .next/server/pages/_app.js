/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/store-context.js":
/*!**********************************!*\
  !*** ./context/store-context.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LLContext\": () => (/* binding */ LLContext),\n/* harmony export */   \"LLProvider\": () => (/* binding */ LLProvider),\n/* harmony export */   \"StoreContext\": () => (/* binding */ StoreContext),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst StoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LLContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LLProvider = ({ children  })=>{\n    const [latlong, setlatlong] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LLContext.Provider, {\n        value: {\n            latlong,\n            setlatlong\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/druvvv/coffee-conaissour/context/store-context.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, undefined);\n};\nconst StoreProvider = ({ children  })=>{\n    const [FetchedcoffeeStores, setCoffeeStores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StoreContext.Provider, {\n        value: {\n            FetchedcoffeeStores,\n            setCoffeeStores\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/druvvv/coffee-conaissour/context/store-context.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3N0b3JlLWNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ0o7QUFFeEIsTUFBTUUsNkJBQWVGLG9EQUFhQSxHQUFHO0FBQ3JDLE1BQU1HLDBCQUFZSCxvREFBYUEsR0FBRztBQUVsQyxNQUFNSSxhQUFhLENBQUMsRUFBQ0MsU0FBUSxFQUFDLEdBQUk7SUFDdkMsTUFBTSxDQUFDQyxTQUFVQyxXQUFXLEdBQUdOLCtDQUFRQTtJQUV2QyxxQkFBTyw4REFBQ0UsVUFBVUssUUFBUTtRQUFDQyxPQUFPO1lBQUNIO1lBQVVDO1FBQVU7a0JBQ3BERjs7Ozs7O0FBRUwsRUFBQztBQUNNLE1BQU1LLGdCQUFnQixDQUFDLEVBQUNMLFNBQVEsRUFBQyxHQUFLO0lBQzNDLE1BQU0sQ0FBRU0scUJBQXFCQyxnQkFBaUIsR0FBR1gsK0NBQVFBLENBQUMsQ0FBQztJQUUzRCxxQkFDRSw4REFBQ0MsYUFBYU0sUUFBUTtRQUFDQyxPQUFPO1lBQUVFO1lBQXNCQztRQUFlO2tCQUNsRVA7Ozs7OztBQUdQLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWZlcy8uL2NvbnRleHQvc3RvcmUtY29udGV4dC5qcz9hYzg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBMTENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgTExQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PntcclxuICBjb25zdCBbbGF0bG9uZyAsIHNldGxhdGxvbmddID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuKDxMTENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tsYXRsb25nICwgc2V0bGF0bG9uZ319PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvTExDb250ZXh0LlByb3ZpZGVyPilcclxufVxyXG5leHBvcnQgY29uc3QgU3RvcmVQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3QgWyBGZXRjaGVkY29mZmVlU3RvcmVzLCBzZXRDb2ZmZWVTdG9yZXMgXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgRmV0Y2hlZGNvZmZlZVN0b3JlcyAsIHNldENvZmZlZVN0b3Jlc319PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0b3JlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlN0b3JlQ29udGV4dCIsIkxMQ29udGV4dCIsIkxMUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxhdGxvbmciLCJzZXRsYXRsb25nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlN0b3JlUHJvdmlkZXIiLCJGZXRjaGVkY29mZmVlU3RvcmVzIiwic2V0Q29mZmVlU3RvcmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/store-context.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/store-context */ \"./context/store-context.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_store_context__WEBPACK_IMPORTED_MODULE_2__.LLProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_store_context__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/druvvv/coffee-conaissour/src/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 37\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/druvvv/coffee-conaissour/src/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 22\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/druvvv/coffee-conaissour/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQzJCO0FBQ0c7QUFFNUMsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3BELHFCQUFPLDhEQUFDSiw4REFBVUE7a0JBQUMsNEVBQUNDLGlFQUFhQTtzQkFBQyw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUM1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FmZXMvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBMTFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dC9zdG9yZS1jb250ZXh0J1xuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHQvc3RvcmUtY29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPExMUHJvdmlkZXI+PFN0b3JlUHJvdmlkZXI+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvU3RvcmVQcm92aWRlcj48L0xMUHJvdmlkZXI+XG59XG4iXSwibmFtZXMiOlsiTExQcm92aWRlciIsIlN0b3JlUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();