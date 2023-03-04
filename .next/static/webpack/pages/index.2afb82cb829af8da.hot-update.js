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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card.js */ \"./components/card.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_banner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/banner.js */ \"./components/banner.js\");\n/* harmony import */ var _lib_coffee_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/coffee-store */ \"./lib/coffee-store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_app.js */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst getLatLong = ()=>{\n    _s();\n    const [latlong, setlatlong] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [locationErrorMsg, setLocationErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [isLocating, setIsLocating] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [hasFetched, setHasFetched] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const success = async (position)=>{\n        const latitude = await position.coords.latitude;\n        const longitude = await position.coords.longitude;\n        setIsLocating(false);\n        setHasFetched(true);\n        setlatlong(\"\".concat(latitude, \",\").concat(longitude));\n        setLocationErrorMsg(\"\");\n    };\n    const error = ()=>{\n        setIsLocating(false);\n        setlatlong(\"\");\n        setLocationErrorMsg(\"Unable to retrieve your location\");\n    };\n    const handleTrackLocation = ()=>{\n        setIsLocating(true);\n        if (!navigator.geolocation) {\n            setlatlong(\"\");\n            setLocationErrorMsg(\"Geolocation is not supported by your browser\");\n        } else {\n            navigator.geolocation.getCurrentPosition(success, error);\n        }\n    };\n    return {\n        handleTrackLocation,\n        latlong,\n        locationErrorMsg,\n        isLocating,\n        hasFetched\n    };\n};\n_s(getLatLong, \"te82uLIQ9EwGqSaBe1EKgxw1LHQ=\");\nvar __N_SSG = true;\nfunction Home(props) {\n    _s1();\n    const [] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const { FetchedCoffeeStores , setCoffeeStores  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_app_js__WEBPACK_IMPORTED_MODULE_7__.StoreContext);\n    console.log(FetchedCoffeeStores);\n    const fetchStores = async (latlong)=>{\n        const fetchedStores = await (0,_lib_coffee_store__WEBPACK_IMPORTED_MODULE_5__.getcoffeestores)(\"cafes\", latlong, 30);\n        setCoffeeStores(fetchedStores);\n        console.log({\n            fetchedStores\n        });\n    };\n    const { handleTrackLocation , latlong , locationErrorMsg , isLocating , hasFetched  } = getLatLong();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (latlong) {\n            fetchStores(latlong);\n        }\n    }, [\n        latlong\n    ]);\n    const buttonClickHandler = async ()=>{\n        handleTrackLocation();\n    };\n    if (locationErrorMsg != \"\") {\n        alert(\"Something went wrong : \".concat(locationErrorMsg));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Coffee shops\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charset: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_banner_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().banner),\n                        buttonText: isLocating ? \"Locating...\" : \"View Nearby Stores\",\n                        HandleOnClick: buttonClickHandler\n                    }, void 0, false, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    props.coffeeStores.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading2),\n                                children: \"Ranchi Stores\"\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 49\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().cardLayout),\n                                children: props.coffeeStores.map((coffeeStore)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                                        name: coffeeStore.name,\n                                        imageurl: coffeeStore.imgUrl || \"/static/mesh-gradient.jpeg\",\n                                        url: \"/coffee-store/\".concat(coffeeStore.fsq_id)\n                                    }, coffeeStore.fsq_id, false, {\n                                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 22\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 43\n                    }, this),\n                    hasFetched && FetchedCoffeeStores.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading2),\n                                children: \"Stores Nearby You\"\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 121,\n                                columnNumber: 65\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().cardLayout),\n                                children: FetchedCoffeeStores.map((fetchedCoffeeStore)=>{\n                                    console.log(FetchedCoffeeStores);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                                        name: fetchedCoffeeStore.name,\n                                        imageurl: fetchedCoffeeStore.imgUrl || \"/static/mesh-gradient.jpeg\",\n                                        url: \"/coffee-store/\".concat(fetchedCoffeeStore.fsq_id)\n                                    }, fetchedCoffeeStore.fsq_id, false, {\n                                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 22\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 59\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/druvvv/coffee-conaissour/src/pages/index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s1(Home, \"wlzm2GEt0IMKPZrrmQMP4OSokjs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHUCxXQUFXN0MseUVBQWU7MENBQUU7Ozs7OzswQ0FDdEUsOERBQUNtRDtnQ0FBSU4sV0FBVzdDLDJFQUFpQjswQ0FDOUIyQixNQUFNc0IsWUFBWSxDQUFDTSxHQUFHLENBQUNDLENBQUFBLGNBQWM7b0NBQ3BDLHFCQUFPLDhEQUFDMUQsMkRBQUlBO3dDQUNWK0MsV0FBVzdDLHFFQUFXO3dDQUV0QnVDLE1BQU9pQixZQUFZakIsSUFBSTt3Q0FDdkJtQixVQUFXRixZQUFZRyxNQUFNLElBQUk7d0NBQ2pDQyxLQUFLLGlCQUFvQyxPQUFuQkosWUFBWUssTUFBTTt1Q0FIakNMLFlBQVlLLE1BQU07Ozs7O2dDQUkzQjs7Ozs7Ozs7Ozs7O29CQUlIL0MsY0FBY2Msb0JBQW9Cc0IsTUFBTSxHQUFDLG1CQUFNLDhEQUFDQzs7NEJBQUk7MENBQUMsOERBQUNDO2dDQUFHUCxXQUFXN0MseUVBQWU7MENBQUU7Ozs7OzswQ0FDdEYsOERBQUNtRDtnQ0FBSU4sV0FBVzdDLDJFQUFpQjswQ0FDOUI0QixvQkFBb0IyQixHQUFHLENBQUNPLENBQUFBLHFCQUFxQjtvQ0FDNUNoQyxRQUFRQyxHQUFHLENBQUNIO29DQUNaLHFCQUFPLDhEQUFDOUIsMkRBQUlBO3dDQUNWK0MsV0FBVzdDLHFFQUFXO3dDQUV0QnVDLE1BQU91QixtQkFBbUJ2QixJQUFJO3dDQUM5Qm1CLFVBQVdJLG1CQUFtQkgsTUFBTSxJQUFJO3dDQUN4Q0MsS0FBSyxpQkFBMkMsT0FBMUJFLG1CQUFtQkQsTUFBTTt1Q0FIeENDLG1CQUFtQkQsTUFBTTs7Ozs7Z0NBSWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlkLENBQUM7SUE1RXVCbkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZC5qc1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFubmVyLmpzXCJcbmltcG9ydCB7IGdldGNvZmZlZXN0b3JlcyB9IGZyb20gXCIuLi8uLi9saWIvY29mZmVlLXN0b3JlXCJcbmltcG9ydCB7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N0b3JlQ29udGV4dH0gZnJvbSAnLi9fYXBwLmpzJ1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KXtcbiAgXG4gIGNvbnN0IGNvZmZlZVN0b3JlcyA9IGF3YWl0IGdldGNvZmZlZXN0b3JlcygnY2FmZXMnLFwiMjMuMzQ3Nzg5MTU4MTA2MTg1LDg1LjMyNjQ4NjM4MDUzNjc1XCIsNik7XG4gIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGNvZmZlZVN0b3JlcyA6IGNvZmZlZVN0b3JlcywgXG4gICAgfSxcbiAgfTtcbn1cbmNvbnN0IGdldExhdExvbmcgPSAoKSA9PiB7XG4gIGNvbnN0IFtsYXRsb25nICwgc2V0bGF0bG9uZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvY2F0aW9uRXJyb3JNc2cgLCBzZXRMb2NhdGlvbkVycm9yTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNMb2NhdGluZyAsIHNldElzTG9jYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzRmV0Y2hlZCAsIHNldEhhc0ZldGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN1Y2Nlc3MgPSBhc3luYyAocG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGxhdGl0dWRlID0gYXdhaXQgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgY29uc3QgbG9uZ2l0dWRlID0gIGF3YWl0IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgc2V0SXNMb2NhdGluZyhmYWxzZSlcbiAgICBzZXRIYXNGZXRjaGVkKHRydWUpXG4gICAgIHNldGxhdGxvbmcoYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWApO1xuICAgICBzZXRMb2NhdGlvbkVycm9yTXNnKFwiXCIpO1xuICB9XG5cbiAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgc2V0SXNMb2NhdGluZyhmYWxzZSlcbiAgICBzZXRsYXRsb25nKFwiXCIpXG4gICAgICBzZXRMb2NhdGlvbkVycm9yTXNnKFwiVW5hYmxlIHRvIHJldHJpZXZlIHlvdXIgbG9jYXRpb25cIik7XG4gIH1cbiAgXG4gIGNvbnN0IGhhbmRsZVRyYWNrTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgICBzZXRJc0xvY2F0aW5nKHRydWUpXG4gICAgICBpZighbmF2aWdhdG9yLmdlb2xvY2F0aW9uKXtcbiAgICAgICAgc2V0bGF0bG9uZyhcIlwiKVxuICAgICAgICAgIHNldExvY2F0aW9uRXJyb3JNc2coXCJHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlclwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzICwgZXJyb3IpO1xuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAgIGhhbmRsZVRyYWNrTG9jYXRpb24sXG4gICAgICBsYXRsb25nLFxuICAgICAgbG9jYXRpb25FcnJvck1zZyxcbiAgICAgIGlzTG9jYXRpbmcsXG4gICAgICBoYXNGZXRjaGVkXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG5jb25zdCBbICwgXSA9IHVzZVN0YXRlKCcnKVxuY29uc3Qge0ZldGNoZWRDb2ZmZWVTdG9yZXMsc2V0Q29mZmVlU3RvcmVzIH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XG5jb25zb2xlLmxvZyhGZXRjaGVkQ29mZmVlU3RvcmVzKTtcbmNvbnN0IGZldGNoU3RvcmVzID0gYXN5bmMgKGxhdGxvbmcpID0+IHsgICAgXG5jb25zdCBmZXRjaGVkU3RvcmVzID0gYXdhaXQgZ2V0Y29mZmVlc3RvcmVzKCdjYWZlcycgLCBsYXRsb25nICwgMzApO1xuICBzZXRDb2ZmZWVTdG9yZXMoZmV0Y2hlZFN0b3JlcylcbiAgY29uc29sZS5sb2coe2ZldGNoZWRTdG9yZXN9KTtcbn1cblxuY29uc3Qge2hhbmRsZVRyYWNrTG9jYXRpb24gLCBsYXRsb25nICwgbG9jYXRpb25FcnJvck1zZywgaXNMb2NhdGluZyAsaGFzRmV0Y2hlZH0gPSBnZXRMYXRMb25nKCk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmKGxhdGxvbmcpe1xuICAgIGZldGNoU3RvcmVzKGxhdGxvbmcpO1xuICB9XG59LFtsYXRsb25nXSlcblxuICBjb25zdCBidXR0b25DbGlja0hhbmRsZXIgPSBhc3luYyAoKSA9PntcbiAgICAgaGFuZGxlVHJhY2tMb2NhdGlvbigpO1xuICB9XG4gIGlmKGxvY2F0aW9uRXJyb3JNc2cgIT0gJycpe1xuICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VudCB3cm9uZyA6ICR7bG9jYXRpb25FcnJvck1zZ31gKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvZmZlZSBzaG9wczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgXG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgXG4gICAgICAgIDxCYW5uZXIgXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0gXG4gICAgICAgIGJ1dHRvblRleHQ9IHtpc0xvY2F0aW5nID8gXCJMb2NhdGluZy4uLlwiIDpcIlZpZXcgTmVhcmJ5IFN0b3Jlc1wifVxuICAgICAgICBIYW5kbGVPbkNsaWNrPXtidXR0b25DbGlja0hhbmRsZXJ9IC8+XG5cbiAgICAgICAge3Byb3BzLmNvZmZlZVN0b3Jlcy5sZW5ndGggPjAgJiYgKDxkaXY+IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nMn0+UmFuY2hpIFN0b3JlczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTGF5b3V0fT5cbiAgICAgICAgICAgIHtwcm9wcy5jb2ZmZWVTdG9yZXMubWFwKGNvZmZlZVN0b3JlID0+eyBcbiAgICAgICAgICAgICAgcmV0dXJuKDxDYXJkIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICAgICAga2V5ID0ge2NvZmZlZVN0b3JlLmZzcV9pZH1cbiAgICAgICAgICAgICAgICBuYW1lPSB7Y29mZmVlU3RvcmUubmFtZSB9IFxuICAgICAgICAgICAgICAgIGltYWdldXJsPSB7Y29mZmVlU3RvcmUuaW1nVXJsIHx8IFwiL3N0YXRpYy9tZXNoLWdyYWRpZW50LmpwZWdcIn0gXG4gICAgICAgICAgICAgICAgdXJsPXtgL2NvZmZlZS1zdG9yZS8ke2NvZmZlZVN0b3JlLmZzcV9pZH1gfSAvPik7XG4gICAgICAgICAgICAgIH0pfSAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICBcbiAgICAgICAgICB7aGFzRmV0Y2hlZCAmJiBGZXRjaGVkQ29mZmVlU3RvcmVzLmxlbmd0aD4wICYmICg8ZGl2PiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZzJ9PlN0b3JlcyBOZWFyYnkgWW91PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRMYXlvdXR9PlxuICAgICAgICAgICAge0ZldGNoZWRDb2ZmZWVTdG9yZXMubWFwKGZldGNoZWRDb2ZmZWVTdG9yZSA9PnsgXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKEZldGNoZWRDb2ZmZWVTdG9yZXMpO1xuICAgICAgICAgICAgICByZXR1cm4oPENhcmQgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgICAgICBrZXkgPSB7ZmV0Y2hlZENvZmZlZVN0b3JlLmZzcV9pZH1cbiAgICAgICAgICAgICAgICBuYW1lPSB7ZmV0Y2hlZENvZmZlZVN0b3JlLm5hbWUgfSBcbiAgICAgICAgICAgICAgICBpbWFnZXVybD0ge2ZldGNoZWRDb2ZmZWVTdG9yZS5pbWdVcmwgfHwgXCIvc3RhdGljL21lc2gtZ3JhZGllbnQuanBlZ1wifSBcbiAgICAgICAgICAgICAgICB1cmw9e2AvY29mZmVlLXN0b3JlLyR7ZmV0Y2hlZENvZmZlZVN0b3JlLmZzcV9pZH1gfSAvPik7XG4gICAgICAgICAgICAgIH0pfSAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj4pfVxuXG5cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICBcbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkNhcmQiLCJJbWFnZSIsInN0eWxlcyIsIkJhbm5lciIsImdldGNvZmZlZXN0b3JlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsImdldExhdExvbmciLCJsYXRsb25nIiwic2V0bGF0bG9uZyIsImxvY2F0aW9uRXJyb3JNc2ciLCJzZXRMb2NhdGlvbkVycm9yTXNnIiwiaXNMb2NhdGluZyIsInNldElzTG9jYXRpbmciLCJoYXNGZXRjaGVkIiwic2V0SGFzRmV0Y2hlZCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImxhdGl0dWRlIiwiY29vcmRzIiwibG9uZ2l0dWRlIiwiZXJyb3IiLCJoYW5kbGVUcmFja0xvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJIb21lIiwicHJvcHMiLCJGZXRjaGVkQ29mZmVlU3RvcmVzIiwic2V0Q29mZmVlU3RvcmVzIiwiY29uc29sZSIsImxvZyIsImZldGNoU3RvcmVzIiwiZmV0Y2hlZFN0b3JlcyIsImJ1dHRvbkNsaWNrSGFuZGxlciIsImFsZXJ0IiwidGl0bGUiLCJtZXRhIiwiY2hhcnNldCIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiYmFubmVyIiwiYnV0dG9uVGV4dCIsIkhhbmRsZU9uQ2xpY2siLCJjb2ZmZWVTdG9yZXMiLCJsZW5ndGgiLCJkaXYiLCJoMiIsImhlYWRpbmcyIiwiY2FyZExheW91dCIsIm1hcCIsImNvZmZlZVN0b3JlIiwiY2FyZCIsImltYWdldXJsIiwiaW1nVXJsIiwidXJsIiwiZnNxX2lkIiwiZmV0Y2hlZENvZmZlZVN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});