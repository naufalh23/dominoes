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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [array, setArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            1,\n            2\n        ],\n        [\n            1,\n            2\n        ],\n        [\n            2,\n            1\n        ],\n        [\n            1,\n            3\n        ]\n    ]);\n    const handleReset = ()=>{\n        setArray([\n            [\n                6,\n                1\n            ],\n            [\n                4,\n                3\n            ],\n            [\n                5,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                2\n            ]\n        ]);\n        setSource(JSON.stringify([\n            [\n                6,\n                1\n            ],\n            [\n                4,\n                3\n            ],\n            [\n                5,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                2\n            ]\n        ]));\n        doubleCount = 0;\n    };\n    let doubleCount = 0;\n    array.forEach((param)=>{\n        let [top, bottom] = param;\n        if (top === bottom) {\n            doubleCount++;\n        }\n    });\n    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(array));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSource(JSON.stringify(array));\n    }, [\n        array\n    ]);\n    const handleSortASC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return a[0] - b[0]; // If totals are equal, sort by first element\n            } else {\n                return totalA - totalB; // Sort by total\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleSortDESC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return b[0] - a[0]; // If totals are equal, sort by first element in descending order\n            } else {\n                return totalB - totalA; // Sort by total in descending order\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleFlip = ()=>{\n        const flippedArray = array.map((param)=>{\n            let [top, bottom] = param;\n            return [\n                bottom,\n                top\n            ];\n        });\n        setArray(flippedArray);\n    };\n    const handleRemoveDup = ()=>{\n        const uniqueArray = array.filter((item, index, self)=>self.findIndex((t)=>t[0] === item[0] && t[1] === item[1]) === index);\n        setArray(uniqueArray);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"Dominoes\"\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Source\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            source\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Double Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            \"Double count: \",\n                            doubleCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4 \",\n                children: array.map((param, index)=>{\n                    let [top, bottom] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border p-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: top\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-divider\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: bottom\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortASC,\n                        children: \"Sort (ASC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleSortDESC,\n                        children: \"Sort (DESC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleFlip,\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleRemoveDup,\n                        children: \"Remove Dup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleReset,\n                        children: \"Reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full p-2 border rounded mb-2\",\n                        placeholder: \"Input Number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"5HB80OL2DXhg+6MMLaldIcmW6Bg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7MEJBSXJGLDhEQUFDNEI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFDQ0MsTUFBSzt3QkFDTFAsV0FBVTt3QkFDVlEsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDSjt3QkFBT0osV0FBVTtrQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRTtHQXhJd0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoW1xuICAgIFsxLDJdLFsxLDJdLFsyLDFdLFsxLDNdLFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRBcnJheShbXG4gICAgICBbNiwgMV0sXG4gICAgICBbNCwgM10sXG4gICAgICBbNSwgMV0sXG4gICAgICBbMywgNF0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMywgNF0sXG4gICAgICBbMSwgMl0sXG4gICAgXSk7XG4gICAgc2V0U291cmNlKEpTT04uc3RyaW5naWZ5KFtcbiAgICAgIFs2LCAxXSxcbiAgICAgIFs0LCAzXSxcbiAgICAgIFs1LCAxXSxcbiAgICAgIFszLCA0XSxcbiAgICAgIFsxLCAxXSxcbiAgICAgIFszLCA0XSxcbiAgICAgIFsxLCAyXSxcbiAgICBdKSk7XG4gICAgZG91YmxlQ291bnQgPSAwO1xuICB9O1xuXG4gIGxldCBkb3VibGVDb3VudCA9IDA7XG5cbiAgYXJyYXkuZm9yRWFjaCgoW3RvcCwgYm90dG9tXSkgPT4ge1xuICAgIGlmICh0b3AgPT09IGJvdHRvbSkge1xuICAgICAgZG91YmxlQ291bnQrKztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IFtzb3VyY2UsIHNldFNvdXJjZV0gPSB1c2VTdGF0ZShKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U291cmNlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH0sIFthcnJheV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNvcnRBU0MgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBbLi4uYXJyYXldLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFsQSA9IGFbMF0gKyBhWzFdO1xuICAgICAgY29uc3QgdG90YWxCID0gYlswXSArIGJbMV07XG4gICAgICBpZiAodG90YWxBID09PSB0b3RhbEIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gLSBiWzBdOyAvLyBJZiB0b3RhbHMgYXJlIGVxdWFsLCBzb3J0IGJ5IGZpcnN0IGVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b3RhbEEgLSB0b3RhbEI7IC8vIFNvcnQgYnkgdG90YWxcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBcnJheShzb3J0ZWRBcnJheSk7XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVTb3J0REVTQyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5hcnJheV0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdG90YWxBID0gYVswXSArIGFbMV07XG4gICAgICBjb25zdCB0b3RhbEIgPSBiWzBdICsgYlsxXTtcbiAgICAgIGlmICh0b3RhbEEgPT09IHRvdGFsQikge1xuICAgICAgICByZXR1cm4gYlswXSAtIGFbMF07IC8vIElmIHRvdGFscyBhcmUgZXF1YWwsIHNvcnQgYnkgZmlyc3QgZWxlbWVudCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG90YWxCIC0gdG90YWxBOyAvLyBTb3J0IGJ5IHRvdGFsIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBcnJheShzb3J0ZWRBcnJheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmxpcCA9ICgpID0+IHtcbiAgICBjb25zdCBmbGlwcGVkQXJyYXkgPSBhcnJheS5tYXAoKFt0b3AsIGJvdHRvbV0pID0+IFtib3R0b20sIHRvcF0pO1xuICAgIHNldEFycmF5KGZsaXBwZWRBcnJheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHVuaXF1ZUFycmF5ID0gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCwgc2VsZikgPT5cbiAgICAgIHNlbGYuZmluZEluZGV4KCh0KSA9PiB0WzBdID09PSBpdGVtWzBdICYmIHRbMV0gPT09IGl0ZW1bMV0pID09PSBpbmRleFxuICAgICk7XG4gICAgc2V0QXJyYXkodW5pcXVlQXJyYXkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPkRvbWlub2VzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgYmctZ3JheS0xMDAgbXktM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPlNvdXJjZTwvbGFiZWw+XG4gICAgICAgICAge3NvdXJjZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBiZy1ncmF5LTEwMCBteS0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICBEb3VibGUgTnVtYmVyXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICBEb3VibGUgY291bnQ6IHtkb3VibGVDb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbWItNCBcIj5cbiAgICAgICAge2FycmF5Lm1hcCgoW3RvcCwgYm90dG9tXSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyIHAtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb21pbm8taGFsZlwiPlxuICAgICAgICAgICAgICA8c3Bhbj57dG9wfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb21pbm8tZGl2aWRlclwiPi08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9taW5vLWhhbGZcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e2JvdHRvbX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbWItNFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBvbkNsaWNrPXtoYW5kbGVTb3J0QVNDfT5cbiAgICAgICAgICBTb3J0IChBU0MpXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBvbkNsaWNrPXtoYW5kbGVTb3J0REVTQ30+XG4gICAgICAgICAgU29ydCAoREVTQylcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIG9uQ2xpY2s9e2hhbmRsZUZsaXB9PlxuICAgICAgICAgIEZsaXBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZUR1cH0+XG4gICAgICAgICAgUmVtb3ZlIER1cFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCIgb25DbGljaz17aGFuZGxlUmVzZXR9PlxuICAgICAgICAgIFJlc2V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgbWItMlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBOdW1iZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBSZW1vdmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiYXJyYXkiLCJzZXRBcnJheSIsImhhbmRsZVJlc2V0Iiwic2V0U291cmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRvdWJsZUNvdW50IiwiZm9yRWFjaCIsInRvcCIsImJvdHRvbSIsInNvdXJjZSIsImhhbmRsZVNvcnRBU0MiLCJzb3J0ZWRBcnJheSIsInNvcnQiLCJhIiwiYiIsInRvdGFsQSIsInRvdGFsQiIsImhhbmRsZVNvcnRERVNDIiwiaGFuZGxlRmxpcCIsImZsaXBwZWRBcnJheSIsIm1hcCIsImhhbmRsZVJlbW92ZUR1cCIsInVuaXF1ZUFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4Iiwic2VsZiIsImZpbmRJbmRleCIsInQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});