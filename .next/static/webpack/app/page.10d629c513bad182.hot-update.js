"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [array, setArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            6,\n            1\n        ],\n        [\n            4,\n            3\n        ],\n        [\n            5,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            2\n        ]\n    ]);\n    let doubleCount = 0;\n    array.forEach((param)=>{\n        let [top, bottom] = param;\n        if (top === bottom) {\n            doubleCount++;\n        }\n    });\n    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(array));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSource(JSON.stringify(array));\n    }, [\n        array\n    ]);\n    const handleSortASC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return a[0] - b[0]; // If totals are equal, sort by first element\n            } else {\n                return totalA - totalB; // Sort by total\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleSortDESC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return b[0] - a[0]; // If totals are equal, sort by first element in descending order\n            } else {\n                return totalB - totalA; // Sort by total in descending order\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleFlip = ()=>{\n        const flippedArray = array.map((param)=>{\n            let [top, bottom] = param;\n            return [\n                bottom,\n                top\n            ];\n        });\n        setArray(flippedArray);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"Dominoes\"\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Source\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            source\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Double Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            \"Double count: \",\n                            doubleCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4 \",\n                children: array.map((param, index)=>{\n                    let [top, bottom] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border p-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: top\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-divider\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: bottom\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortASC,\n                        children: \"Sort (ASC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortDESC,\n                        children: \"Sort (DESC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove Dup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full p-2 border rounded mb-2\",\n                        placeholder: \"Input Number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MhN0/c7BAEmxxmyIK/rUYnXAqBs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSTs4Q0FBTXJCOzs7Ozs7Ozs7Ozs7dUJBTkRvQjs7Ozs7Ozs7Ozs7MEJBV2QsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQU9MLFdBQVU7d0JBQTJDTSxTQUFTbEI7a0NBQWU7Ozs7OztrQ0FHckYsOERBQUNpQjt3QkFBT0wsV0FBVTt3QkFBMkNNLFNBQVNYO2tDQUFnQjs7Ozs7O2tDQUd0Riw4REFBQ1U7d0JBQU9MLFdBQVU7a0NBQTJDOzs7Ozs7a0NBRzdELDhEQUFDSzt3QkFBT0wsV0FBVTtrQ0FBMkM7Ozs7OztrQ0FHN0QsOERBQUNLO3dCQUFPTCxXQUFVO2tDQUEyQzs7Ozs7Ozs7Ozs7OzBCQUkvRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTzt3QkFDQ0MsTUFBSzt3QkFDTFIsV0FBVTt3QkFDVlMsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDSjt3QkFBT0wsV0FBVTtrQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRTtHQWpId0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoW1xuICAgIFs2LCAxXSxcbiAgICBbNCwgM10sXG4gICAgWzUsIDFdLFxuICAgIFszLCA0XSxcbiAgICBbMSwgMV0sXG4gICAgWzMsIDRdLFxuICAgIFsxLCAyXSxcbiAgXSk7XG5cbiAgbGV0IGRvdWJsZUNvdW50ID0gMDtcblxuICBhcnJheS5mb3JFYWNoKChbdG9wLCBib3R0b21dKSA9PiB7XG4gICAgaWYgKHRvcCA9PT0gYm90dG9tKSB7XG4gICAgICBkb3VibGVDb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IHVzZVN0YXRlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTb3VyY2UoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgfSwgW2FycmF5XSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydEFTQyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5hcnJheV0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdG90YWxBID0gYVswXSArIGFbMV07XG4gICAgICBjb25zdCB0b3RhbEIgPSBiWzBdICsgYlsxXTtcbiAgICAgIGlmICh0b3RhbEEgPT09IHRvdGFsQikge1xuICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07IC8vIElmIHRvdGFscyBhcmUgZXF1YWwsIHNvcnQgYnkgZmlyc3QgZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsQSAtIHRvdGFsQjsgLy8gU29ydCBieSB0b3RhbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHNldEFycmF5KHNvcnRlZEFycmF5KTtcbiAgfTtcbiAgXG4gIGNvbnN0IGhhbmRsZVNvcnRERVNDID0gKCkgPT4ge1xuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gWy4uLmFycmF5XS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCB0b3RhbEEgPSBhWzBdICsgYVsxXTtcbiAgICAgIGNvbnN0IHRvdGFsQiA9IGJbMF0gKyBiWzFdO1xuICAgICAgaWYgKHRvdGFsQSA9PT0gdG90YWxCKSB7XG4gICAgICAgIHJldHVybiBiWzBdIC0gYVswXTsgLy8gSWYgdG90YWxzIGFyZSBlcXVhbCwgc29ydCBieSBmaXJzdCBlbGVtZW50IGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b3RhbEIgLSB0b3RhbEE7IC8vIFNvcnQgYnkgdG90YWwgaW4gZGVzY2VuZGluZyBvcmRlclxuICAgICAgfVxuICAgIH0pO1xuICAgIHNldEFycmF5KHNvcnRlZEFycmF5KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGbGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IGZsaXBwZWRBcnJheSA9IGFycmF5Lm1hcCgoW3RvcCwgYm90dG9tXSkgPT4gW2JvdHRvbSwgdG9wXSk7XG4gICAgc2V0QXJyYXkoZmxpcHBlZEFycmF5KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5Eb21pbm9lczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIGJnLWdyYXktMTAwIG15LTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj5Tb3VyY2U8L2xhYmVsPlxuICAgICAgICAgIHtzb3VyY2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgYmctZ3JheS0xMDAgbXktM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRG91YmxlIE51bWJlclxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgRG91YmxlIGNvdW50OiB7ZG91YmxlQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG1iLTQgXCI+XG4gICAgICAgIHthcnJheS5tYXAoKFt0b3AsIGJvdHRvbV0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlciBwLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9taW5vLWhhbGZcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3RvcH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9taW5vLWRpdmlkZXJcIj4tPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbWluby1oYWxmXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntib3R0b219PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG1iLTRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCIgb25DbGljaz17aGFuZGxlU29ydEFTQ30+XG4gICAgICAgICAgU29ydCAoQVNDKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCIgb25DbGljaz17aGFuZGxlU29ydERFU0N9PlxuICAgICAgICAgIFNvcnQgKERFU0MpXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBGbGlwXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBSZW1vdmUgRHVwXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBSZXNldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIG1iLTJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5wdXQgTnVtYmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCI+XG4gICAgICAgICAgUmVtb3ZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImFycmF5Iiwic2V0QXJyYXkiLCJkb3VibGVDb3VudCIsImZvckVhY2giLCJ0b3AiLCJib3R0b20iLCJzb3VyY2UiLCJzZXRTb3VyY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlU29ydEFTQyIsInNvcnRlZEFycmF5Iiwic29ydCIsImEiLCJiIiwidG90YWxBIiwidG90YWxCIiwiaGFuZGxlU29ydERFU0MiLCJoYW5kbGVGbGlwIiwiZmxpcHBlZEFycmF5IiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImluZGV4Iiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});