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
exports.id = "pages/api/getCoffeeStoreById";
exports.ids = ["pages/api/getCoffeeStoreById"];
exports.modules = {

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ "(api)/./lib/airtable.js":
/*!*************************!*\
  !*** ./lib/airtable.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoffeeStoreRecords\": () => (/* binding */ getCoffeeStoreRecords),\n/* harmony export */   \"getRecords\": () => (/* binding */ getRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\nconst Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nconst base = new Airtable({\n    apiKey: process.env.AIRTABLE_APIKEY\n}).base(process.env.AIRTABLE_BASEKEY);\nconst table = base(\"Coffee-Stores\");\nconst getRecords = (records)=>{\n    return records.map((record)=>{\n        return {\n            ...record.fields\n        };\n    });\n};\nconst getCoffeeStoreRecords = async (fsq_id)=>{\n    const findCoffeeStoreRecords = await table.select({\n        filterByFormula: `fsq_id=\"${fsq_id}\"`\n    }).firstPage();\n    const records = getRecords(findCoffeeStoreRecords);\n    return records;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDekIsTUFBTUMsT0FBTyxJQUFJRixTQUFTO0lBQUNHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUFBLEdBQUdKLElBQUksQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0I7QUFFbEcsTUFBTUMsUUFBUU4sS0FBSztBQUVuQixNQUFNTyxhQUFhLENBQUNDLFVBQVc7SUFFM0IsT0FDSUEsUUFBUUMsR0FBRyxDQUFDQyxDQUFBQSxTQUFVO1FBQ2xCLE9BQU87WUFDSCxHQUFHQSxPQUFPQyxNQUFNO1FBQ3BCO0lBQ0o7QUFFUjtBQUVBLE1BQU1DLHdCQUF3QixPQUFPQyxTQUFVO0lBQzNDLE1BQU1DLHlCQUF5QixNQUFNUixNQUFNUyxNQUFNLENBQzdDO1FBQUNDLGlCQUFrQixDQUFDLFFBQVEsRUFBRUgsT0FBTyxDQUFDLENBQUM7SUFBQSxHQUN6Q0ksU0FBUztJQUVYLE1BQU1ULFVBQVVELFdBQVdPO0lBQzNCLE9BQVFOO0FBQ1o7QUFDcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWZlcy8uL2xpYi9haXJ0YWJsZS5qcz9jZDllIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuY29uc3QgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElLRVl9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VLRVkpO1xyXG5cclxuY29uc3QgdGFibGUgPSBiYXNlKCdDb2ZmZWUtU3RvcmVzJyk7XHJcblxyXG5jb25zdCBnZXRSZWNvcmRzID0gKHJlY29yZHMpID0+e1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICByZWNvcmRzLm1hcChyZWNvcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4ucmVjb3JkLmZpZWxkcyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5jb25zdCBnZXRDb2ZmZWVTdG9yZVJlY29yZHMgPSBhc3luYyAoZnNxX2lkKSA9PntcclxuICAgIGNvbnN0IGZpbmRDb2ZmZWVTdG9yZVJlY29yZHMgPSBhd2FpdCB0YWJsZS5zZWxlY3QoXHJcbiAgICAgICAge2ZpbHRlckJ5Rm9ybXVsYSA6IGBmc3FfaWQ9XCIke2ZzcV9pZH1cImB9XHJcbiAgICApLmZpcnN0UGFnZSgpXHJcblxyXG4gICAgY29uc3QgcmVjb3JkcyA9IGdldFJlY29yZHMoZmluZENvZmZlZVN0b3JlUmVjb3JkcylcclxuICAgIHJldHVybiAocmVjb3Jkcyk7XHJcbn1cclxuZXhwb3J0IHsgdGFibGUgLCBnZXRSZWNvcmRzICwgZ2V0Q29mZmVlU3RvcmVSZWNvcmRzIH0iXSwibmFtZXMiOlsiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBSVJUQUJMRV9BUElLRVkiLCJBSVJUQUJMRV9CQVNFS0VZIiwidGFibGUiLCJnZXRSZWNvcmRzIiwicmVjb3JkcyIsIm1hcCIsInJlY29yZCIsImZpZWxkcyIsImdldENvZmZlZVN0b3JlUmVjb3JkcyIsImZzcV9pZCIsImZpbmRDb2ZmZWVTdG9yZVJlY29yZHMiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJmaXJzdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/getCoffeeStoreById.js":
/*!*********************************************!*\
  !*** ./src/pages/api/getCoffeeStoreById.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\nconst getCoffeeStoreById = async (req, res)=>{\n    const { fsq_id  } = req.query;\n    if (fsq_id) {\n        try {\n            const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.getCoffeeStoreRecords)(fsq_id);\n            if (records.length !== 0) {\n                res.json(records);\n            } else {\n                res.json({\n                    message: `id could not be found`\n                });\n            }\n        } catch (error) {\n            res.status(500);\n            res.json({\n                message: \"Something went wrong :(\"\n            });\n        }\n    } else {\n        res.status(400);\n        res.json({\n            message: \"Gimme ID mf\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldENvZmZlZVN0b3JlQnlJZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4RDtBQUU5RCxNQUFNQyxxQkFBcUIsT0FBT0MsS0FBSUMsTUFBUTtJQUUxQyxNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHRixJQUFJRyxLQUFLO0lBQzFCLElBQUdELFFBQU87UUFDVixJQUFHO1lBQ0EsTUFBTUUsVUFBVSxNQUFNTixvRUFBcUJBLENBQUNJO1lBQzNDLElBQUdFLFFBQVFDLE1BQU0sS0FBSyxHQUFFO2dCQUNwQkosSUFBSUssSUFBSSxDQUFDRjtZQUNiLE9BQ0k7Z0JBQ0pILElBQUlLLElBQUksQ0FBQztvQkFBQ0MsU0FBVSxDQUFDLHFCQUFxQixDQUFDO2dCQUFBO1lBQzNDLENBQUM7UUFDTCxFQUNBLE9BQU1DLE9BQU07WUFDUlAsSUFBSVEsTUFBTSxDQUFDO1lBQ1hSLElBQUlLLElBQUksQ0FBQztnQkFBQ0MsU0FBVTtZQUF5QjtRQUNqRDtJQUFDLE9BQ0c7UUFDQU4sSUFBSVEsTUFBTSxDQUFDO1FBQ1hSLElBQUlLLElBQUksQ0FBQztZQUFDQyxTQUFVO1FBQWE7SUFDckMsQ0FBQztBQUNMO0FBRUEsaUVBQWVSLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhZmVzLy4vc3JjL3BhZ2VzL2FwaS9nZXRDb2ZmZWVTdG9yZUJ5SWQuanM/MzUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb2ZmZWVTdG9yZVJlY29yZHMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FpcnRhYmxlXCI7XHJcblxyXG5jb25zdCBnZXRDb2ZmZWVTdG9yZUJ5SWQgPSBhc3luYyAocmVxLHJlcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtmc3FfaWR9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgaWYoZnNxX2lkKXtcclxuICAgIHRyeXtcclxuICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBnZXRDb2ZmZWVTdG9yZVJlY29yZHMoZnNxX2lkKVxyXG4gICAgICAgIGlmKHJlY29yZHMubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVjb3Jkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgcmVzLmpzb24oe21lc3NhZ2UgOiBgaWQgY291bGQgbm90IGJlIGZvdW5kYH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxyXG4gICAgICAgIHJlcy5qc29uKHttZXNzYWdlIDogXCJTb21ldGhpbmcgd2VudCB3cm9uZyA6KFwifSlcclxuICAgIH19XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKTtcclxuICAgICAgICByZXMuanNvbih7bWVzc2FnZSA6IFwiR2ltbWUgSUQgbWZcIn0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvZmZlZVN0b3JlQnlJZDsiXSwibmFtZXMiOlsiZ2V0Q29mZmVlU3RvcmVSZWNvcmRzIiwiZ2V0Q29mZmVlU3RvcmVCeUlkIiwicmVxIiwicmVzIiwiZnNxX2lkIiwicXVlcnkiLCJyZWNvcmRzIiwibGVuZ3RoIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getCoffeeStoreById.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getCoffeeStoreById.js"));
module.exports = __webpack_exports__;

})();