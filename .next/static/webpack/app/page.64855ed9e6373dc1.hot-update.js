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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [array, setArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            6,\n            1\n        ],\n        [\n            4,\n            3\n        ],\n        [\n            5,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            2\n        ]\n    ]);\n    let doubleCount = 0;\n    array.forEach((param)=>{\n        let [top, bottom] = param;\n        if (top === bottom) {\n            doubleCount++;\n        }\n    });\n    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(array));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSource(JSON.stringify(array));\n    }, [\n        array\n    ]);\n    const handleSortASC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return a[0] - b[0]; // If totals are equal, sort by first element\n            } else {\n                return totalA - totalB; // Sort by total\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleSortDESC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return b[0] - a[0]; // If totals are equal, sort by first element in descending order\n            } else {\n                return totalB - totalA; // Sort by total in descending order\n            }\n        });\n        setArray(sortedArray);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"Dominoes\"\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Source\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            source\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Double Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            \"Double count: \",\n                            doubleCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4 \",\n                children: array.map((param, index)=>{\n                    let [top, bottom] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border p-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: top\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-divider\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: bottom\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortASC,\n                        children: \"Sort (ASC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortDESC,\n                        children: \"Sort (DESC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove Dup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full p-2 border rounded mb-2\",\n                        placeholder: \"Input Number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MhN0/c7BAEmxxmyIK/rUYnXAqBs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNoQjtrQ0FBZTs7Ozs7O2tDQUdyRiw4REFBQ2U7d0JBQU9OLFdBQVU7d0JBQTJDTyxTQUFTVDtrQ0FBZ0I7Ozs7OztrQ0FHdEYsOERBQUNRO3dCQUFPTixXQUFVO2tDQUEyQzs7Ozs7O2tDQUc3RCw4REFBQ007d0JBQU9OLFdBQVU7a0NBQTJDOzs7Ozs7a0NBRzdELDhEQUFDTTt3QkFBT04sV0FBVTtrQ0FBMkM7Ozs7Ozs7Ozs7OzswQkFJL0QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQ0NDLE1BQUs7d0JBQ0xULFdBQVU7d0JBQ1ZVLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0o7d0JBQU9OLFdBQVU7a0NBQTJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckU7R0E1R3dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKFtcbiAgICBbNiwgMV0sXG4gICAgWzQsIDNdLFxuICAgIFs1LCAxXSxcbiAgICBbMywgNF0sXG4gICAgWzEsIDFdLFxuICAgIFszLCA0XSxcbiAgICBbMSwgMl0sXG4gIF0pO1xuXG4gIGxldCBkb3VibGVDb3VudCA9IDA7XG5cbiAgYXJyYXkuZm9yRWFjaCgoW3RvcCwgYm90dG9tXSkgPT4ge1xuICAgIGlmICh0b3AgPT09IGJvdHRvbSkge1xuICAgICAgZG91YmxlQ291bnQrKztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IFtzb3VyY2UsIHNldFNvdXJjZV0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U291cmNlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH0sIFthcnJheV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNvcnRBU0MgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBbLi4uYXJyYXldLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFsQSA9IGFbMF0gKyBhWzFdO1xuICAgICAgY29uc3QgdG90YWxCID0gYlswXSArIGJbMV07XG4gICAgICBpZiAodG90YWxBID09PSB0b3RhbEIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdOyAvLyBJZiB0b3RhbHMgYXJlIGVxdWFsLCBzb3J0IGJ5IGZpcnN0IGVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b3RhbEEgLSB0b3RhbEI7IC8vIFNvcnQgYnkgdG90YWxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBcnJheShzb3J0ZWRBcnJheSk7XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVTb3J0REVTQyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5hcnJheV0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdG90YWxBID0gYVswXSArIGFbMV07XG4gICAgICBjb25zdCB0b3RhbEIgPSBiWzBdICsgYlsxXTtcbiAgICAgIGlmICh0b3RhbEEgPT09IHRvdGFsQikge1xuICAgICAgICByZXR1cm4gYlswXSAtIGFbMF07IC8vIElmIHRvdGFscyBhcmUgZXF1YWwsIHNvcnQgYnkgZmlyc3QgZWxlbWVudCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG90YWxCIC0gdG90YWxBOyAvLyBTb3J0IGJ5IHRvdGFsIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBcnJheShzb3J0ZWRBcnJheSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+RG9taW5vZXM8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBiZy1ncmF5LTEwMCBteS0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+U291cmNlPC9sYWJlbD5cbiAgICAgICAgICB7c291cmNlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIGJnLWdyYXktMTAwIG15LTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj5cbiAgICAgICAgICAgIERvdWJsZSBOdW1iZXJcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIERvdWJsZSBjb3VudDoge2RvdWJsZUNvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBtYi00IFwiPlxuICAgICAgICB7YXJyYXkubWFwKChbdG9wLCBib3R0b21dLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBib3JkZXIgcC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbWluby1oYWxmXCI+XG4gICAgICAgICAgICAgIDxzcGFuPnt0b3B9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbWluby1kaXZpZGVyXCI+LTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb21pbm8taGFsZlwiPlxuICAgICAgICAgICAgICA8c3Bhbj57Ym90dG9tfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBtYi00XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIG9uQ2xpY2s9e2hhbmRsZVNvcnRBU0N9PlxuICAgICAgICAgIFNvcnQgKEFTQylcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIG9uQ2xpY2s9e2hhbmRsZVNvcnRERVNDfT5cbiAgICAgICAgICBTb3J0IChERVNDKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCI+XG4gICAgICAgICAgRmxpcFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCI+XG4gICAgICAgICAgUmVtb3ZlIER1cFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCI+XG4gICAgICAgICAgUmVzZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBtYi0yXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIklucHV0IE51bWJlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiPlxuICAgICAgICAgIFJlbW92ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJhcnJheSIsInNldEFycmF5IiwiZG91YmxlQ291bnQiLCJmb3JFYWNoIiwidG9wIiwiYm90dG9tIiwic291cmNlIiwic2V0U291cmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZVNvcnRBU0MiLCJzb3J0ZWRBcnJheSIsInNvcnQiLCJhIiwiYiIsInRvdGFsQSIsInRvdGFsQiIsImhhbmRsZVNvcnRERVNDIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsIm1hcCIsImluZGV4Iiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});