"use strict";
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
exports.id = "pages/api/getCoffeeStoreByLocation";
exports.ids = ["pages/api/getCoffeeStoreByLocation"];
exports.modules = {

/***/ "unsplash-js":
/*!******************************!*\
  !*** external "unsplash-js" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("unsplash-js");

/***/ }),

/***/ "(api)/./lib/coffee-store.js":
/*!*****************************!*\
  !*** ./lib/coffee-store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getcoffeestores\": () => (/* binding */ getcoffeestores)\n/* harmony export */ });\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unsplash-js */ \"unsplash-js\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst unsplashApi = (0,unsplash_js__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    accessKey: \"LF3nvBtKqd53H0SybllEjD-qiw7GF3EKSomdqdljNZU\"\n});\nconst getfetchurl = async (query, latlong, limit)=>{\n    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`;\n};\nconst getcoffeestoresimage = async ()=>{\n    const photojson = await unsplashApi.search.getPhotos({\n        query: \"coffee shops\",\n        perPage: 40\n    });\n    return photojson.response.results.map((result)=>result.urls[\"small\"]);\n};\nconst getcoffeestores = async (query, latlong, limit)=>{\n    const response = await fetch(await getfetchurl(query, latlong, limit), {\n        headers: {\n            \"Authorization\": \"fsq3xWaJbZnuZ5gJAYIldNBdKN9Bi5a83qeLUjdV4rxfHFA=\",\n            \"accept\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    const photos = await getcoffeestoresimage();\n    return data.results.map((result, idx)=>{\n        return {\n            ...result,\n            imgUrl: photos[idx]\n        };\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29mZmVlLXN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUV4QyxNQUFNQyxjQUFjRCxzREFBU0EsQ0FBQztJQUMxQkUsV0FBWUMsNkNBQXlDO0FBQ3pEO0FBRUEsTUFBTUcsY0FBYyxPQUFPQyxPQUFNQyxTQUFRQyxRQUFVO0lBQy9DLE9BQU8sQ0FBQyxrREFBa0QsRUFBRUYsTUFBTSxJQUFJLEVBQUVDLFFBQVEsT0FBTyxFQUFFQyxNQUFNLENBQUM7QUFDcEc7QUFFQSxNQUFNQyx1QkFBdUIsVUFBWTtJQUVyQyxNQUFNQyxZQUFZLE1BQU1WLFlBQVlXLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1FBQ2pETixPQUFRO1FBQ1JPLFNBQVM7SUFDYjtJQUNBLE9BQU9ILFVBQVVJLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsSUFBSSxDQUFDLFFBQVE7QUFDMUU7QUFFTyxNQUFNQyxrQkFBa0IsT0FBT2IsT0FBUUMsU0FBVUMsUUFBVTtJQUM5RCxNQUFNTSxXQUFXLE1BQU1NLE1BQU0sTUFBTWYsWUFBWUMsT0FBTUMsU0FBUUMsUUFBUTtRQUNqRWEsU0FBUztZQUNMLGlCQUFpQm5CLGtEQUF5QztZQUMxRCxVQUFVO1FBQ2Q7SUFDSjtJQUNBLE1BQU1xQixPQUFPLE1BQU1ULFNBQVNVLElBQUk7SUFDaEMsTUFBTUMsU0FBUyxNQUFNaEI7SUFFbkIsT0FBT2MsS0FBS1IsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUVMsTUFBTztRQUN0QyxPQUFNO1lBQ04sR0FBR1QsTUFBTTtZQUNUVSxRQUFRRixNQUFNLENBQUNDLElBQUk7UUFDM0I7SUFBQztBQUVELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWZlcy8uL2xpYi9jb2ZmZWUtc3RvcmUuanM/MzYyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGkgfSBmcm9tIFwidW5zcGxhc2gtanNcIjtcclxuXHJcbmNvbnN0IHVuc3BsYXNoQXBpID0gY3JlYXRlQXBpKHtcclxuICAgIGFjY2Vzc0tleSA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VOU1BMU0hfQUNDRVNTS0VZLFxyXG59KVxyXG5cclxuY29uc3QgZ2V0ZmV0Y2h1cmwgPSBhc3luYyAocXVlcnksbGF0bG9uZyxsaW1pdCkgPT4ge1xyXG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5mb3Vyc3F1YXJlLmNvbS92My9wbGFjZXMvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9JmxsPSR7bGF0bG9uZ30mbGltaXQ9JHtsaW1pdH1gXHJcbn1cclxuXHJcbmNvbnN0IGdldGNvZmZlZXN0b3Jlc2ltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBob3RvanNvbiA9IGF3YWl0IHVuc3BsYXNoQXBpLnNlYXJjaC5nZXRQaG90b3Moe1xyXG4gICAgICAgIHF1ZXJ5IDogXCJjb2ZmZWUgc2hvcHNcIixcclxuICAgICAgICBwZXJQYWdlOiA0MCxcclxuICAgIH0pIFxyXG4gICAgcmV0dXJuIHBob3RvanNvbi5yZXNwb25zZS5yZXN1bHRzLm1hcCgocmVzdWx0KSA9PiByZXN1bHQudXJsc1tcInNtYWxsXCJdKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldGNvZmZlZXN0b3JlcyA9IGFzeW5jIChxdWVyeSAsIGxhdGxvbmcgLCBsaW1pdCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhd2FpdCBnZXRmZXRjaHVybChxdWVyeSxsYXRsb25nLGxpbWl0KSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GT1VSU1FVQVJFX0FQSUtFWSxcclxuICAgICAgICAgICAgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBwaG90b3MgPSBhd2FpdCBnZXRjb2ZmZWVzdG9yZXNpbWFnZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cy5tYXAoKHJlc3VsdCAsaWR4KSA9PntcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgLi4ucmVzdWx0LFxyXG4gICAgICAgIGltZ1VybDogcGhvdG9zW2lkeF1cclxufX0pO1xyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwidW5zcGxhc2hBcGkiLCJhY2Nlc3NLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVU5TUExTSF9BQ0NFU1NLRVkiLCJnZXRmZXRjaHVybCIsInF1ZXJ5IiwibGF0bG9uZyIsImxpbWl0IiwiZ2V0Y29mZmVlc3RvcmVzaW1hZ2UiLCJwaG90b2pzb24iLCJzZWFyY2giLCJnZXRQaG90b3MiLCJwZXJQYWdlIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwibWFwIiwicmVzdWx0IiwidXJscyIsImdldGNvZmZlZXN0b3JlcyIsImZldGNoIiwiaGVhZGVycyIsIk5FWFRfUFVCTElDX0ZPVVJTUVVBUkVfQVBJS0VZIiwiZGF0YSIsImpzb24iLCJwaG90b3MiLCJpZHgiLCJpbWdVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/coffee-store.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/getCoffeeStoreByLocation.js":
/*!***************************************************!*\
  !*** ./src/pages/api/getCoffeeStoreByLocation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_coffee_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/coffee-store */ \"(api)/./lib/coffee-store.js\");\n\nconst getCoffeeStoreByLocation = async (req, res)=>{\n    try {\n        const { latlong , limit  } = req.query;\n        const response = await (0,_lib_coffee_store__WEBPACK_IMPORTED_MODULE_0__.getcoffeestores)(\"cafes\", latlong, limit);\n        res.status(200);\n        res.json(response);\n    } catch (err) {\n        console.error(\"lol\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreByLocation);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldENvZmZlZVN0b3JlQnlMb2NhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUU1RCxNQUFNQywyQkFBMkIsT0FBT0MsS0FBTUMsTUFBTztJQUNyRCxJQUFHO1FBQ0MsTUFBTSxFQUFFQyxRQUFPLEVBQUdDLE1BQUssRUFBRSxHQUFHSCxJQUFJSSxLQUFLO1FBQ3JDLE1BQU1DLFdBQVcsTUFBTVAsa0VBQWVBLENBQUMsU0FBVUksU0FBVUM7UUFDM0RGLElBQUlLLE1BQU0sQ0FBQztRQUNYTCxJQUFJTSxJQUFJLENBQUNGO0lBRWIsRUFDQSxPQUFNRyxLQUFJO1FBQ05DLFFBQVFDLEtBQUssQ0FBQztJQUNsQjtBQUdBO0FBRUEsaUVBQWVYLHdCQUF3QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhZmVzLy4vc3JjL3BhZ2VzL2FwaS9nZXRDb2ZmZWVTdG9yZUJ5TG9jYXRpb24uanM/Yzg3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRjb2ZmZWVzdG9yZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NvZmZlZS1zdG9yZVwiO1xyXG5cclxuY29uc3QgZ2V0Q29mZmVlU3RvcmVCeUxvY2F0aW9uID0gYXN5bmMgKHJlcSAsIHJlcykgPT57XHJcbnRyeXtcclxuICAgIGNvbnN0IHsgbGF0bG9uZyAsIGxpbWl0IH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldGNvZmZlZXN0b3JlcygnY2FmZXMnICwgbGF0bG9uZyAsIGxpbWl0KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5qc29uKHJlc3BvbnNlKTtcclxuXHJcbn1cclxuY2F0Y2goZXJyKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJsb2xcIik7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb2ZmZWVTdG9yZUJ5TG9jYXRpb247Il0sIm5hbWVzIjpbImdldGNvZmZlZXN0b3JlcyIsImdldENvZmZlZVN0b3JlQnlMb2NhdGlvbiIsInJlcSIsInJlcyIsImxhdGxvbmciLCJsaW1pdCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getCoffeeStoreByLocation.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getCoffeeStoreByLocation.js"));
module.exports = __webpack_exports__;

})();