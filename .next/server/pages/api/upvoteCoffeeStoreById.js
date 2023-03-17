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
exports.id = "pages/api/upvoteCoffeeStoreById";
exports.ids = ["pages/api/upvoteCoffeeStoreById"];
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

/***/ "(api)/./src/pages/api/upvoteCoffeeStoreById.js":
/*!************************************************!*\
  !*** ./src/pages/api/upvoteCoffeeStoreById.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\n\nconst upvoteCoffeeStoreById = async (req, res)=>{\n    if (req.method === \"PUT\") {\n        const { fsq_id  } = req.body;\n        console.log({\n            fsq_id\n        });\n        if (fsq_id) {\n            try {\n                const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.getCoffeeStoreRecords)(fsq_id);\n                if (records.length !== 0) {\n                    const record = records[0];\n                    const upvote = parseInt(record.voting) + parseInt(1);\n                    console.log(222);\n                    const updateRecord = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__.table.update([\n                        {\n                            id: record.recordId,\n                            fields: {\n                                voting: upvote\n                            }\n                        }\n                    ]);\n                    if (updateRecord) {\n                        res.json({\n                            updateRecord\n                        });\n                    } else {\n                        res.json({\n                            message: \"Something went wrong\"\n                        });\n                    }\n                } else {}\n            } catch (error) {\n                console.error(\"Something went wrong bozo\", error);\n            }\n        } else {\n            res.json({\n                message: \"Gimme ID mf\"\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upvoteCoffeeStoreById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Vwdm90ZUNvZmZlZVN0b3JlQnlJZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUNnQjtBQUU5RCxNQUFNRSx3QkFBd0IsT0FBT0MsS0FBSUMsTUFBUTtJQUVqRCxJQUFHRCxJQUFJRSxNQUFNLEtBQUssT0FBTTtRQUNwQixNQUFNLEVBQUNDLE9BQU0sRUFBQyxHQUFHSCxJQUFJSSxJQUFJO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUM7WUFBQ0g7UUFBTTtRQUNuQixJQUFHQSxRQUFPO1lBQ1YsSUFBRztnQkFDSCxNQUFNSSxVQUFTLE1BQU1ULG9FQUFxQkEsQ0FBQ0s7Z0JBQzNDLElBQUdJLFFBQVFDLE1BQU0sS0FBSyxHQUFFO29CQUNwQixNQUFNQyxTQUFTRixPQUFPLENBQUMsRUFBRTtvQkFDekIsTUFBTUcsU0FBU0MsU0FBU0YsT0FBT0csTUFBTSxJQUFJRCxTQUFTO29CQUNsRE4sUUFBUUMsR0FBRyxDQUFDO29CQUNaLE1BQU1PLGVBQWUsTUFBTWhCLHVEQUFZLENBQUM7d0JBQ3BDOzRCQUNJa0IsSUFBS04sT0FBT08sUUFBUTs0QkFDcEJDLFFBQVM7Z0NBQ0xMLFFBQVNGOzRCQUNiO3dCQUNKO3FCQUNIO29CQUVELElBQUdHLGNBQWE7d0JBQ1paLElBQUlpQixJQUFJLENBQUM7NEJBQUNMO3dCQUFZO29CQUMxQixPQUNJO3dCQUNBWixJQUFJaUIsSUFBSSxDQUFDOzRCQUFDQyxTQUFVO3dCQUFzQjtvQkFDOUMsQ0FBQztnQkFDTCxPQUNJLENBQ0osQ0FBQztZQUNELEVBQUMsT0FBTUMsT0FBTTtnQkFDVGYsUUFBUWUsS0FBSyxDQUFDLDZCQUE4QkE7WUFDaEQ7UUFDQSxPQUFLO1lBQ0RuQixJQUFJaUIsSUFBSSxDQUFDO2dCQUFDQyxTQUFVO1lBQWE7UUFDckMsQ0FBQztJQUNMLENBQUM7QUFHRDtBQUVBLGlFQUFlcEIscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FmZXMvLi9zcmMvcGFnZXMvYXBpL3Vwdm90ZUNvZmZlZVN0b3JlQnlJZC5qcz80YTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9haXJ0YWJsZVwiO1xyXG5pbXBvcnQgeyBnZXRDb2ZmZWVTdG9yZVJlY29yZHMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FpcnRhYmxlXCI7XHJcblxyXG5jb25zdCB1cHZvdGVDb2ZmZWVTdG9yZUJ5SWQgPSBhc3luYyAocmVxLHJlcykgPT4ge1xyXG5cclxuaWYocmVxLm1ldGhvZCA9PT0gJ1BVVCcpe1xyXG4gICAgY29uc3Qge2ZzcV9pZH0gPSByZXEuYm9keTtcclxuICAgIGNvbnNvbGUubG9nKHtmc3FfaWR9KTtcclxuICAgIGlmKGZzcV9pZCl7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZWNvcmRzID1hd2FpdCBnZXRDb2ZmZWVTdG9yZVJlY29yZHMoZnNxX2lkKTtcclxuICAgIGlmKHJlY29yZHMubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICBjb25zdCByZWNvcmQgPSByZWNvcmRzWzBdO1xyXG4gICAgICAgIGNvbnN0IHVwdm90ZSA9IHBhcnNlSW50KHJlY29yZC52b3RpbmcpICsgcGFyc2VJbnQoMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coMjIyKVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVJlY29yZCA9IGF3YWl0IHRhYmxlLnVwZGF0ZShbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkIDogcmVjb3JkLnJlY29yZElkLFxyXG4gICAgICAgICAgICAgICAgZmllbGRzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZvdGluZyA6IHVwdm90ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIGlmKHVwZGF0ZVJlY29yZCl7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHt1cGRhdGVSZWNvcmR9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXMuanNvbih7bWVzc2FnZSA6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIn0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICB9XHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyBib3pvXCIgLCBlcnJvcilcclxuICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJlcy5qc29uKHttZXNzYWdlIDogXCJHaW1tZSBJRCBtZlwifSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwdm90ZUNvZmZlZVN0b3JlQnlJZDsiXSwibmFtZXMiOlsidGFibGUiLCJnZXRDb2ZmZWVTdG9yZVJlY29yZHMiLCJ1cHZvdGVDb2ZmZWVTdG9yZUJ5SWQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmc3FfaWQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInJlY29yZHMiLCJsZW5ndGgiLCJyZWNvcmQiLCJ1cHZvdGUiLCJwYXJzZUludCIsInZvdGluZyIsInVwZGF0ZVJlY29yZCIsInVwZGF0ZSIsImlkIiwicmVjb3JkSWQiLCJmaWVsZHMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/upvoteCoffeeStoreById.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/upvoteCoffeeStoreById.js"));
module.exports = __webpack_exports__;

})();