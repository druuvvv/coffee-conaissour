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
exports.id = "pages/api/createCoffeeStore";
exports.ids = ["pages/api/createCoffeeStore"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoffeeStoreRecords\": () => (/* binding */ getCoffeeStoreRecords),\n/* harmony export */   \"getRecords\": () => (/* binding */ getRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\nconst Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nconst base = new Airtable({\n    apiKey: process.env.AIRTABLE_APIKEY\n}).base(process.env.AIRTABLE_BASEKEY);\nconst table = base(\"Coffee-Stores\");\nconst getRecords = (records)=>{\n    return records.map((record)=>{\n        return {\n            recordId: record.id,\n            ...record.fields\n        };\n    });\n};\nconst getCoffeeStoreRecords = async (fsq_id)=>{\n    const findCoffeeStoreRecords = await table.select({\n        filterByFormula: `fsq_id=\"${fsq_id}\"`\n    }).firstPage();\n    const records = getRecords(findCoffeeStoreRecords);\n    return records;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDekIsTUFBTUMsT0FBTyxJQUFJRixTQUFTO0lBQUNHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUFBLEdBQUdKLElBQUksQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0I7QUFFbEcsTUFBTUMsUUFBUU4sS0FBSztBQUVuQixNQUFNTyxhQUFhLENBQUNDLFVBQVc7SUFFM0IsT0FDSUEsUUFBUUMsR0FBRyxDQUFDQyxDQUFBQSxTQUFVO1FBQ2xCLE9BQU87WUFDSEMsVUFBV0QsT0FBT0UsRUFBRTtZQUNwQixHQUFHRixPQUFPRyxNQUFNO1FBQ2hCO0lBQ1I7QUFFUjtBQUVBLE1BQU1DLHdCQUF3QixPQUFPQyxTQUFVO0lBQzNDLE1BQU1DLHlCQUF5QixNQUFNVixNQUFNVyxNQUFNLENBQzdDO1FBQUNDLGlCQUFrQixDQUFDLFFBQVEsRUFBRUgsT0FBTyxDQUFDLENBQUM7SUFBQSxHQUN6Q0ksU0FBUztJQUVYLE1BQU1YLFVBQVVELFdBQVdTO0lBQzNCLE9BQVFSO0FBQ1o7QUFDcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWZlcy8uL2xpYi9haXJ0YWJsZS5qcz9jZDllIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuY29uc3QgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElLRVl9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VLRVkpO1xyXG5cclxuY29uc3QgdGFibGUgPSBiYXNlKCdDb2ZmZWUtU3RvcmVzJyk7XHJcblxyXG5jb25zdCBnZXRSZWNvcmRzID0gKHJlY29yZHMpID0+e1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICByZWNvcmRzLm1hcChyZWNvcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgOiByZWNvcmQuaWQsXHJcbiAgICAgICAgICAgICAgICAuLi5yZWNvcmQuZmllbGRzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5jb25zdCBnZXRDb2ZmZWVTdG9yZVJlY29yZHMgPSBhc3luYyAoZnNxX2lkKSA9PntcclxuICAgIGNvbnN0IGZpbmRDb2ZmZWVTdG9yZVJlY29yZHMgPSBhd2FpdCB0YWJsZS5zZWxlY3QoXHJcbiAgICAgICAge2ZpbHRlckJ5Rm9ybXVsYSA6IGBmc3FfaWQ9XCIke2ZzcV9pZH1cImB9XHJcbiAgICApLmZpcnN0UGFnZSgpXHJcblxyXG4gICAgY29uc3QgcmVjb3JkcyA9IGdldFJlY29yZHMoZmluZENvZmZlZVN0b3JlUmVjb3JkcylcclxuICAgIHJldHVybiAocmVjb3Jkcyk7XHJcbn1cclxuZXhwb3J0IHsgdGFibGUgLCBnZXRSZWNvcmRzICwgZ2V0Q29mZmVlU3RvcmVSZWNvcmRzIH0iXSwibmFtZXMiOlsiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBSVJUQUJMRV9BUElLRVkiLCJBSVJUQUJMRV9CQVNFS0VZIiwidGFibGUiLCJnZXRSZWNvcmRzIiwicmVjb3JkcyIsIm1hcCIsInJlY29yZCIsInJlY29yZElkIiwiaWQiLCJmaWVsZHMiLCJnZXRDb2ZmZWVTdG9yZVJlY29yZHMiLCJmc3FfaWQiLCJmaW5kQ29mZmVlU3RvcmVSZWNvcmRzIiwic2VsZWN0IiwiZmlsdGVyQnlGb3JtdWxhIiwiZmlyc3RQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/createCoffeeStore.js":
/*!********************************************!*\
  !*** ./src/pages/api/createCoffeeStore.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\nconst createCoffeeStore = async (req, res)=>{\n    const { fsq_id , name , address , neighbourhood , voting , imgUrl  } = req.body;\n    if (fsq_id) {\n        try {\n            if (req.method === \"POST\") {\n                const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.getCoffeeStoreRecords)(fsq_id);\n                if (records.length !== 0) {\n                    res.json(records);\n                } else {}\n            }\n        } catch (error) {\n            console.error({\n                message: \"Error updateing coffeestore\",\n                error\n            });\n            res.status(500);\n            res.json({\n                message: \"Error updateing coffeestore\",\n                error\n            });\n        }\n    } else {\n        res.status(400);\n        res.json({\n            message: \"Gimme ID mf\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZUNvZmZlZVN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStFO0FBRS9FLE1BQU1HLG9CQUFvQixPQUFPQyxLQUFJQyxNQUFRO0lBQ3pDLE1BQU0sRUFBQ0MsT0FBTSxFQUFDQyxLQUFJLEVBQUNDLFFBQU8sRUFBQ0MsY0FBYSxFQUFDQyxPQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHUCxJQUFJUSxJQUFJO0lBQ2xFLElBQUdOLFFBQU87UUFDTixJQUFHO1lBQ0gsSUFBR0YsSUFBSVMsTUFBTSxLQUFLLFFBQU87Z0JBRXJCLE1BQU1DLFVBQVUsTUFBTVosb0VBQXFCQSxDQUFDSTtnQkFFaEQsSUFBR1EsUUFBUUMsTUFBTSxLQUFLLEdBQUU7b0JBQ3BCVixJQUFJVyxJQUFJLENBQUNGO2dCQUNiLE9BQ0ksQ0FFSixDQUFDO1lBQUEsQ0FBQztRQUFBLEVBQ0YsT0FBTUcsT0FBTTtZQUNSQyxRQUFRRCxLQUFLLENBQUM7Z0JBQUNFLFNBQVM7Z0JBQWdDRjtZQUFNO1lBQzlEWixJQUFJZSxNQUFNLENBQUM7WUFDWGYsSUFBSVcsSUFBSSxDQUFDO2dCQUFDRyxTQUFTO2dCQUFnQ0Y7WUFBTTtRQUM3RDtJQUFDLE9BQ087UUFDQVosSUFBSWUsTUFBTSxDQUFDO1FBQ1hmLElBQUlXLElBQUksQ0FBQztZQUNMRyxTQUFRO1FBQ1o7SUFDSixDQUFDO0FBQ2I7QUFJQSxpRUFBZWhCLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhZmVzLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGVDb2ZmZWVTdG9yZS5qcz9lMzFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhYmxlLGdldFJlY29yZHMsZ2V0Q29mZmVlU3RvcmVSZWNvcmRzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9haXJ0YWJsZVwiO1xyXG5cclxuY29uc3QgY3JlYXRlQ29mZmVlU3RvcmUgPSBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2ZzcV9pZCxuYW1lLGFkZHJlc3MsbmVpZ2hib3VyaG9vZCx2b3RpbmcsaW1nVXJsfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYoZnNxX2lkKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBnZXRDb2ZmZWVTdG9yZVJlY29yZHMoZnNxX2lkKTtcclxuICAgIFxyXG4gICAgICAgIGlmKHJlY29yZHMubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVjb3Jkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfX19XHJcbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHttZXNzYWdlOiBcIkVycm9yIHVwZGF0ZWluZyBjb2ZmZWVzdG9yZVwiICwgZXJyb3IgfSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZXNzYWdlOiBcIkVycm9yIHVwZGF0ZWluZyBjb2ZmZWVzdG9yZVwiICwgZXJyb3IgfSlcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApO1xyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XCJHaW1tZSBJRCBtZlwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbn1cclxuICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvZmZlZVN0b3JlOyJdLCJuYW1lcyI6WyJ0YWJsZSIsImdldFJlY29yZHMiLCJnZXRDb2ZmZWVTdG9yZVJlY29yZHMiLCJjcmVhdGVDb2ZmZWVTdG9yZSIsInJlcSIsInJlcyIsImZzcV9pZCIsIm5hbWUiLCJhZGRyZXNzIiwibmVpZ2hib3VyaG9vZCIsInZvdGluZyIsImltZ1VybCIsImJvZHkiLCJtZXRob2QiLCJyZWNvcmRzIiwibGVuZ3RoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/createCoffeeStore.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/createCoffeeStore.js"));
module.exports = __webpack_exports__;

})();