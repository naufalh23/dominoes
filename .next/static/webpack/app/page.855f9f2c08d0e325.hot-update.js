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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [array, setArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            1,\n            2\n        ],\n        [\n            1,\n            2\n        ],\n        [\n            2,\n            1\n        ][1, 3]\n    ]);\n    const handleReset = ()=>{\n        setArray([\n            [\n                6,\n                1\n            ],\n            [\n                4,\n                3\n            ],\n            [\n                5,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                2\n            ]\n        ]);\n        setSource(JSON.stringify([\n            [\n                6,\n                1\n            ],\n            [\n                4,\n                3\n            ],\n            [\n                5,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                2\n            ]\n        ]));\n        doubleCount = 0;\n    };\n    let doubleCount = 0;\n    array.forEach((param)=>{\n        let [top, bottom] = param;\n        if (top === bottom) {\n            doubleCount++;\n        }\n    });\n    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(array));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSource(JSON.stringify(array));\n    }, [\n        array\n    ]);\n    const handleSortASC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return a[0] - b[0]; // If totals are equal, sort by first element\n            } else {\n                return totalA - totalB; // Sort by total\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleSortDESC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return b[0] - a[0]; // If totals are equal, sort by first element in descending order\n            } else {\n                return totalB - totalA; // Sort by total in descending order\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleFlip = ()=>{\n        const flippedArray = array.map((param)=>{\n            let [top, bottom] = param;\n            return [\n                bottom,\n                top\n            ];\n        });\n        setArray(flippedArray);\n    };\n    const handleRemoveDup = ()=>{\n        const uniqueArray = array.filter((item, index, self)=>self.findIndex((t)=>t[0] === item[0] && t[1] === item[1]) === index);\n        setArray(uniqueArray);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"Dominoes\"\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Source\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            source\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Double Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            \"Double count: \",\n                            doubleCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4 \",\n                children: array.map((param, index)=>{\n                    let [top, bottom] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border p-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: top\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-divider\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: bottom\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortASC,\n                        children: \"Sort (ASC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortDESC,\n                        children: \"Sort (DESC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleFlip,\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleRemoveDup,\n                        children: \"Remove Dup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleReset,\n                        children: \"Reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full p-2 border rounded mb-2\",\n                        placeholder: \"Input Number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"FbdFWMcObte0h9T6AZ4m6YKS6Hs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlyRiw4REFBQzRCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ007d0JBQ0NDLE1BQUs7d0JBQ0xQLFdBQVU7d0JBQ1ZRLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0o7d0JBQU9KLFdBQVU7a0NBQTJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckU7R0F4SXdCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKFtcbiAgICBbMSwyXSxbMSwyXSxbMiwxXVsxLDNdLFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRBcnJheShbXG4gICAgICBbNiwgMV0sXG4gICAgICBbNCwgM10sXG4gICAgICBbNSwgMV0sXG4gICAgICBbMywgNF0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMywgNF0sXG4gICAgICBbMSwgMl0sXG4gICAgXSk7XG4gICAgc2V0U291cmNlKEpTT04uc3RyaW5naWZ5KFtcbiAgICAgIFs2LCAxXSxcbiAgICAgIFs0LCAzXSxcbiAgICAgIFs1LCAxXSxcbiAgICAgIFszLCA0XSxcbiAgICAgIFsxLCAxXSxcbiAgICAgIFszLCA0XSxcbiAgICAgIFsxLCAyXSxcbiAgICBdKSk7XG4gICAgZG91YmxlQ291bnQgPSAwO1xuICB9O1xuXG4gIGxldCBkb3VibGVDb3VudCA9IDA7XG5cbiAgYXJyYXkuZm9yRWFjaCgoW3RvcCwgYm90dG9tXSkgPT4ge1xuICAgIGlmICh0b3AgPT09IGJvdHRvbSkge1xuICAgICAgZG91YmxlQ291bnQrKztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IFtzb3VyY2UsIHNldFNvdXJjZV0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U291cmNlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH0sIFthcnJheV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNvcnRBU0MgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBbLi4uYXJyYXldLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFsQSA9IGFbMF0gKyBhWzFdO1xuICAgICAgY29uc3QgdG90YWxCID0gYlswXSArIGJbMV07XG4gICAgICBpZiAodG90YWxBID09PSB0b3RhbEIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdOyAvLyBJZiB0b3RhbHMgYXJlIGVxdWFsLCBzb3J0IGJ5IGZpcnN0IGVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b3RhbEEgLSB0b3RhbEI7IC8vIFNvcnQgYnkgdG90YWxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBcnJheShzb3J0ZWRBcnJheSk7XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVTb3J0REVTQyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5hcnJheV0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdG90YWxBID0gYVswXSArIGFbMV07XG4gICAgICBjb25zdCB0b3RhbEIgPSBiWzBdICsgYlsxXTtcbiAgICAgIGlmICh0b3RhbEEgPT09IHRvdGFsQikge1xuICAgICAgICByZXR1cm4gYlswXSAtIGFbMF07IC8vIElmIHRvdGFscyBhcmUgZXF1YWwsIHNvcnQgYnkgZmlyc3QgZWxlbWVudCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG90YWxCIC0gdG90YWxBOyAvLyBTb3J0IGJ5IHRvdGFsIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBcnJheShzb3J0ZWRBcnJheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmxpcCA9ICgpID0+IHtcbiAgICBjb25zdCBmbGlwcGVkQXJyYXkgPSBhcnJheS5tYXAoKFt0b3AsIGJvdHRvbV0pID0+IFtib3R0b20sIHRvcF0pO1xuICAgIHNldEFycmF5KGZsaXBwZWRBcnJheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHVuaXF1ZUFycmF5ID0gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCwgc2VsZikgPT5cbiAgICAgIHNlbGYuZmluZEluZGV4KCh0KSA9PiB0WzBdID09PSBpdGVtWzBdICYmIHRbMV0gPT09IGl0ZW1bMV0pID09PSBpbmRleFxuICAgICk7XG4gICAgc2V0QXJyYXkodW5pcXVlQXJyYXkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPkRvbWlub2VzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgYmctZ3JheS0xMDAgbXktM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPlNvdXJjZTwvbGFiZWw+XG4gICAgICAgICAge3NvdXJjZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBiZy1ncmF5LTEwMCBteS0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICBEb3VibGUgTnVtYmVyXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICBEb3VibGUgY291bnQ6IHtkb3VibGVDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbWItNCBcIj5cbiAgICAgICAge2FycmF5Lm1hcCgoW3RvcCwgYm90dG9tXSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyIHAtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb21pbm8taGFsZlwiPlxuICAgICAgICAgICAgICA8c3Bhbj57dG9wfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb21pbm8tZGl2aWRlclwiPi08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9taW5vLWhhbGZcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e2JvdHRvbX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbWItNFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBvbkNsaWNrPXtoYW5kbGVTb3J0QVNDfT5cbiAgICAgICAgICBTb3J0IChBU0MpXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBvbkNsaWNrPXtoYW5kbGVTb3J0REVTQ30+XG4gICAgICAgICAgU29ydCAoREVTQylcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIG9uQ2xpY2s9e2hhbmRsZUZsaXB9PlxuICAgICAgICAgIEZsaXBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUR1cH0+XG4gICAgICAgICAgUmVtb3ZlIER1cFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCIgb25DbGljaz17aGFuZGxlUmVzZXR9PlxuICAgICAgICAgIFJlc2V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgbWItMlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBOdW1iZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBSZW1vdmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiYXJyYXkiLCJzZXRBcnJheSIsImhhbmRsZVJlc2V0Iiwic2V0U291cmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRvdWJsZUNvdW50IiwiZm9yRWFjaCIsInRvcCIsImJvdHRvbSIsInNvdXJjZSIsImhhbmRsZVNvcnRBU0MiLCJzb3J0ZWRBcnJheSIsInNvcnQiLCJhIiwiYiIsInRvdGFsQSIsInRvdGFsQiIsImhhbmRsZVNvcnRERVNDIiwiaGFuZGxlRmxpcCIsImZsaXBwZWRBcnJheSIsIm1hcCIsImhhbmRsZVJlbW92ZUR1cCIsInVuaXF1ZUFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4Iiwic2VsZiIsImZpbmRJbmRleCIsInQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});