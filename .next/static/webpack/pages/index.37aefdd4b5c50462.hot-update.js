"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card.js */ \"./components/card.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/banner.js */ \"./components/banner.js\");\n/* harmony import */ var _lib_coffee_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/coffee-store */ \"./lib/coffee-store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst getLatLong = ()=>{\n    _s();\n    const [latlong, setlatlong] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [locationErrorMsg, setLocationErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [isLocating, setIsLocating] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [hasFetched, setHasFetched] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const success = async (position)=>{\n        const latitude = await position.coords.latitude;\n        const longitude = await position.coords.longitude;\n        setIsLocating(false);\n        setHasFetched(true);\n        setlatlong(\"\".concat(latitude, \",\").concat(longitude));\n        setLocationErrorMsg(\"\");\n    };\n    const error = ()=>{\n        setIsLocating(false);\n        setlatlong(\"\");\n        setLocationErrorMsg(\"Unable to retrieve your location\");\n    };\n    const handleTrackLocation = ()=>{\n        setIsLocating(true);\n        if (!navigator.geolocation) {\n            setlatlong(\"\");\n            setLocationErrorMsg(\"Geolocation is not supported by your browser\");\n        } else {\n            navigator.geolocation.getCurrentPosition(success, error);\n        }\n    };\n    return {\n        handleTrackLocation,\n        latlong,\n        locationErrorMsg,\n        isLocating,\n        hasFetched\n    };\n};\n_s(getLatLong, \"te82uLIQ9EwGqSaBe1EKgxw1LHQ=\");\nvar __N_SSG = true;\nfunction Home(props) {\n    _s1();\n    const [FetchedCoffeeStores, setCoffeeStores] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const fetchStores = async (latlong)=>{\n        const fetchedStores = await (0,_lib_coffee_store__WEBPACK_IMPORTED_MODULE_5__.getcoffeestores)(\"cafes\", latlong, 30);\n        setCoffeeStores(fetchedStores);\n        console.log({\n            fetchedStores\n        });\n    };\n    const { handleTrackLocation , latlong , locationErrorMsg , isLocating , hasFetched  } = getLatLong();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (latlong) {\n            fetchStores(latlong);\n        }\n    }, [\n        latlong\n    ]);\n    const buttonClickHandler = async ()=>{\n        handleTrackLocation();\n    };\n    if (locationErrorMsg != \"\") {\n        alert(\"Something went wrong : \".concat(locationErrorMsg));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Coffee shops\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_banner_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().banner),\n                        buttonText: isLocating ? \"Locating...\" : \"View Nearby Stores\",\n                        HandleOnClick: buttonClickHandler\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    props.coffeeStores.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading2),\n                                children: \"Ranchi Stores\"\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 49\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardLayout),\n                                children: props.coffeeStores.map((coffeeStore)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                        name: coffeeStore.name,\n                                        imageurl: coffeeStore.imgUrl || \"/static/mesh-gradient.jpeg\",\n                                        url: \"/coffee-store/\".concat(coffeeStore.fsq_id)\n                                    }, coffeeStore.fsq_id, false, {\n                                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 22\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 43\n                    }, this),\n                    hasFetched && FetchedCoffeeStores.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading2),\n                                children: \"Stores Nearby You\"\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 120,\n                                columnNumber: 65\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().cardLayout),\n                                children: FetchedCoffeeStores.map((fetchedCoffeeStore)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                        name: fetchedCoffeeStore.name,\n                                        imageurl: fetchedCoffeeStore.imgUrl || \"/static/mesh-gradient.jpeg\",\n                                        url: \"/coffee-store/\".concat(fetchedCoffeeStore.fsq_id)\n                                    }, fetchedCoffeeStore.fsq_id, false, {\n                                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 22\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 59\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s1(Home, \"3+4ZxScHFpdrtyW7+56EcCDaQsg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUNNLEdBQUcsQ0FBQ0MsQ0FBQUEsY0FBYztvQ0FDcEMscUJBQU8sOERBQUN6RCwyREFBSUE7d0NBQ1Y4QyxXQUFXNUMscUVBQVc7d0NBRXRCc0MsTUFBT2lCLFlBQVlqQixJQUFJO3dDQUN2Qm1CLFVBQVdGLFlBQVlHLE1BQU0sSUFBSTt3Q0FDakNDLEtBQUssaUJBQW9DLE9BQW5CSixZQUFZSyxNQUFNO3VDQUhqQ0wsWUFBWUssTUFBTTs7Ozs7Z0NBSTNCOzs7Ozs7Ozs7Ozs7b0JBSUgvQyxjQUFjYyxvQkFBb0JzQixNQUFNLEdBQUMsbUJBQU0sOERBQUNDOzs0QkFBSTswQ0FBQyw4REFBQ0M7Z0NBQUdQLFdBQVc1Qyx5RUFBZTswQ0FBRTs7Ozs7OzBDQUN0Riw4REFBQ2tEO2dDQUFJTixXQUFXNUMsMkVBQWlCOzBDQUM5QjJCLG9CQUFvQjJCLEdBQUcsQ0FBQ08sQ0FBQUEscUJBQXFCO29DQUM1QyxxQkFBTyw4REFBQy9ELDJEQUFJQTt3Q0FDVjhDLFdBQVc1QyxxRUFBVzt3Q0FFdEJzQyxNQUFPdUIsbUJBQW1CdkIsSUFBSTt3Q0FDOUJtQixVQUFXSSxtQkFBbUJILE1BQU0sSUFBSTt3Q0FDeENDLEtBQUssaUJBQTJDLE9BQTFCRSxtQkFBbUJELE1BQU07dUNBSHhDQyxtQkFBbUJELE1BQU07Ozs7O2dDQUlsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZZCxDQUFDO0lBMUV1Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmQuanNcIlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhbm5lci5qc1wiXG5pbXBvcnQgeyBnZXRjb2ZmZWVzdG9yZXMgfSBmcm9tIFwiLi4vLi4vbGliL2NvZmZlZS1zdG9yZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gJy4vX2FwcC5qcydcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XG4gIFxuICBjb25zdCBjb2ZmZWVTdG9yZXMgPSBhd2FpdCBnZXRjb2ZmZWVzdG9yZXMoJ2NhZmVzJyxcIjIzLjM0Nzc4OTE1ODEwNjE4NSw4NS4zMjY0ODYzODA1MzY3NVwiLDYpO1xuICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgICBjb2ZmZWVTdG9yZXMgOiBjb2ZmZWVTdG9yZXMsIFxuICAgIH0sXG4gIH07XG59XG5jb25zdCBnZXRMYXRMb25nID0gKCkgPT4ge1xuICBjb25zdCBbbGF0bG9uZyAsIHNldGxhdGxvbmddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2NhdGlvbkVycm9yTXNnICwgc2V0TG9jYXRpb25FcnJvck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9jYXRpbmcgLCBzZXRJc0xvY2F0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhc0ZldGNoZWQgLCBzZXRIYXNGZXRjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzdWNjZXNzID0gYXN5bmMgKHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBsYXRpdHVkZSA9IGF3YWl0IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgIGNvbnN0IGxvbmdpdHVkZSA9ICBhd2FpdCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgIHNldElzTG9jYXRpbmcoZmFsc2UpXG4gICAgc2V0SGFzRmV0Y2hlZCh0cnVlKVxuICAgICBzZXRsYXRsb25nKGAke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gKTtcbiAgICAgc2V0TG9jYXRpb25FcnJvck1zZyhcIlwiKTtcbiAgfVxuXG4gIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgIHNldElzTG9jYXRpbmcoZmFsc2UpXG4gICAgc2V0bGF0bG9uZyhcIlwiKVxuICAgICAgc2V0TG9jYXRpb25FcnJvck1zZyhcIlVuYWJsZSB0byByZXRyaWV2ZSB5b3VyIGxvY2F0aW9uXCIpO1xuICB9XG4gIFxuICBjb25zdCBoYW5kbGVUcmFja0xvY2F0aW9uID0gKCkgPT4ge1xuICAgICAgc2V0SXNMb2NhdGluZyh0cnVlKVxuICAgICAgaWYoIW5hdmlnYXRvci5nZW9sb2NhdGlvbil7XG4gICAgICAgIHNldGxhdGxvbmcoXCJcIilcbiAgICAgICAgICBzZXRMb2NhdGlvbkVycm9yTXNnKFwiR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXJcIik7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcyAsIGVycm9yKTtcbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgICBoYW5kbGVUcmFja0xvY2F0aW9uLFxuICAgICAgbGF0bG9uZyxcbiAgICAgIGxvY2F0aW9uRXJyb3JNc2csXG4gICAgICBpc0xvY2F0aW5nLFxuICAgICAgaGFzRmV0Y2hlZFxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuY29uc3QgW0ZldGNoZWRDb2ZmZWVTdG9yZXMgLCBzZXRDb2ZmZWVTdG9yZXNdID0gdXNlU3RhdGUoJycpXG5cbmNvbnN0IGZldGNoU3RvcmVzID0gYXN5bmMgKGxhdGxvbmcpID0+IHsgICAgXG5jb25zdCBmZXRjaGVkU3RvcmVzID0gYXdhaXQgZ2V0Y29mZmVlc3RvcmVzKCdjYWZlcycgLCBsYXRsb25nICwgMzApO1xuICBzZXRDb2ZmZWVTdG9yZXMoZmV0Y2hlZFN0b3JlcylcbiAgY29uc29sZS5sb2coe2ZldGNoZWRTdG9yZXN9KTtcbn1cblxuY29uc3Qge2hhbmRsZVRyYWNrTG9jYXRpb24gLCBsYXRsb25nICwgbG9jYXRpb25FcnJvck1zZywgaXNMb2NhdGluZyAsaGFzRmV0Y2hlZH0gPSBnZXRMYXRMb25nKCk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmKGxhdGxvbmcpe1xuICAgIGZldGNoU3RvcmVzKGxhdGxvbmcpO1xuICB9XG59LFtsYXRsb25nXSlcblxuICBjb25zdCBidXR0b25DbGlja0hhbmRsZXIgPSBhc3luYyAoKSA9PntcbiAgICAgaGFuZGxlVHJhY2tMb2NhdGlvbigpO1xuICB9XG4gIGlmKGxvY2F0aW9uRXJyb3JNc2cgIT0gJycpe1xuICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VudCB3cm9uZyA6ICR7bG9jYXRpb25FcnJvck1zZ31gKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvZmZlZSBzaG9wczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgXG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgXG4gICAgICAgIDxCYW5uZXIgXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0gXG4gICAgICAgIGJ1dHRvblRleHQ9IHtpc0xvY2F0aW5nID8gXCJMb2NhdGluZy4uLlwiIDpcIlZpZXcgTmVhcmJ5IFN0b3Jlc1wifVxuICAgICAgICBIYW5kbGVPbkNsaWNrPXtidXR0b25DbGlja0hhbmRsZXJ9IC8+XG5cbiAgICAgICAge3Byb3BzLmNvZmZlZVN0b3Jlcy5sZW5ndGggPjAgJiYgKDxkaXY+IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nMn0+UmFuY2hpIFN0b3JlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTGF5b3V0fT5cbiAgICAgICAgICAgIHtwcm9wcy5jb2ZmZWVTdG9yZXMubWFwKGNvZmZlZVN0b3JlID0+eyBcbiAgICAgICAgICAgICAgcmV0dXJuKDxDYXJkIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICAgICAga2V5ID0ge2NvZmZlZVN0b3JlLmZzcV9pZH1cbiAgICAgICAgICAgICAgICBuYW1lPSB7Y29mZmVlU3RvcmUubmFtZSB9IFxuICAgICAgICAgICAgICAgIGltYWdldXJsPSB7Y29mZmVlU3RvcmUuaW1nVXJsIHx8IFwiL3N0YXRpYy9tZXNoLWdyYWRpZW50LmpwZWdcIn0gXG4gICAgICAgICAgICAgICAgdXJsPXtgL2NvZmZlZS1zdG9yZS8ke2NvZmZlZVN0b3JlLmZzcV9pZH1gfSAvPik7XG4gICAgICAgICAgICAgIH0pfSAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICBcbiAgICAgICAgICB7aGFzRmV0Y2hlZCAmJiBGZXRjaGVkQ29mZmVlU3RvcmVzLmxlbmd0aD4wICYmICg8ZGl2PiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZzJ9PlN0b3JlcyBOZWFyYnkgWW91PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRMYXlvdXR9PlxuICAgICAgICAgICAge0ZldGNoZWRDb2ZmZWVTdG9yZXMubWFwKGZldGNoZWRDb2ZmZWVTdG9yZSA9PnsgXG4gICAgICAgICAgICAgIHJldHVybig8Q2FyZCBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgICAgIGtleSA9IHtmZXRjaGVkQ29mZmVlU3RvcmUuZnNxX2lkfVxuICAgICAgICAgICAgICAgIG5hbWU9IHtmZXRjaGVkQ29mZmVlU3RvcmUubmFtZSB9IFxuICAgICAgICAgICAgICAgIGltYWdldXJsPSB7ZmV0Y2hlZENvZmZlZVN0b3JlLmltZ1VybCB8fCBcIi9zdGF0aWMvbWVzaC1ncmFkaWVudC5qcGVnXCJ9IFxuICAgICAgICAgICAgICAgIHVybD17YC9jb2ZmZWUtc3RvcmUvJHtmZXRjaGVkQ29mZmVlU3RvcmUuZnNxX2lkfWB9IC8+KTtcbiAgICAgICAgICAgICAgfSl9ICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2Pil9XG5cblxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiQ2FyZCIsIkltYWdlIiwic3R5bGVzIiwiQmFubmVyIiwiZ2V0Y29mZmVlc3RvcmVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiZ2V0TGF0TG9uZyIsImxhdGxvbmciLCJzZXRsYXRsb25nIiwibG9jYXRpb25FcnJvck1zZyIsInNldExvY2F0aW9uRXJyb3JNc2ciLCJpc0xvY2F0aW5nIiwic2V0SXNMb2NhdGluZyIsImhhc0ZldGNoZWQiLCJzZXRIYXNGZXRjaGVkIiwic3VjY2VzcyIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJlcnJvciIsImhhbmRsZVRyYWNrTG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIkhvbWUiLCJwcm9wcyIsIkZldGNoZWRDb2ZmZWVTdG9yZXMiLCJzZXRDb2ZmZWVTdG9yZXMiLCJmZXRjaFN0b3JlcyIsImZldGNoZWRTdG9yZXMiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwiYWxlcnQiLCJ0aXRsZSIsIm1ldGEiLCJjaGFyc2V0IiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJiYW5uZXIiLCJidXR0b25UZXh0IiwiSGFuZGxlT25DbGljayIsImNvZmZlZVN0b3JlcyIsImxlbmd0aCIsImRpdiIsImgyIiwiaGVhZGluZzIiLCJjYXJkTGF5b3V0IiwibWFwIiwiY29mZmVlU3RvcmUiLCJjYXJkIiwiaW1hZ2V1cmwiLCJpbWdVcmwiLCJ1cmwiLCJmc3FfaWQiLCJmZXRjaGVkQ29mZmVlU3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});