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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [array, setArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            6,\n            1\n        ],\n        [\n            4,\n            3\n        ],\n        [\n            5,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            2\n        ]\n    ]);\n    let doubleCount = 0;\n    array.forEach((param)=>{\n        let [top, bottom] = param;\n        if (top === bottom) {\n            doubleCount++;\n        }\n    });\n    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(array));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSource(JSON.stringify(array));\n    }, [\n        array\n    ]);\n    const handleSortASC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>a[0] + a[1] - (b[0] + b[1]));\n        setArray(sortedArray);\n    };\n    const handleSortDESC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>b[0] + b[1] - (a[0] + a[1]));\n        setArray(sortedArray);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"Dominoes\"\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Source\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            source\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Double Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            doubleCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4 \",\n                children: array.map((param, index)=>{\n                    let [top, bottom] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border p-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: top\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-divider\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: bottom\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSortASC,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Sort (ASC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSortDESC,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Sort (DESC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove Dup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full p-2 border rounded mb-2\",\n                        placeholder: \"Input Number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MhN0/c7BAEmxxmyIK/rUYnXAqBs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNckU7R0E1RndCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoW1xuICAgIFs2LCAxXSxcbiAgICBbNCwgM10sXG4gICAgWzUsIDFdLFxuICAgIFszLCA0XSxcbiAgICBbMSwgMV0sXG4gICAgWzMsIDRdLFxuICAgIFsxLCAyXSxcbiAgXSk7XG5cbiAgbGV0IGRvdWJsZUNvdW50ID0gMDtcblxuICBhcnJheS5mb3JFYWNoKChbdG9wLCBib3R0b21dKSA9PiB7XG4gICAgaWYgKHRvcCA9PT0gYm90dG9tKSB7XG4gICAgICBkb3VibGVDb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IHVzZVN0YXRlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTb3VyY2UoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgfSwgW2FycmF5XSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydEFTQyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5hcnJheV0uc29ydCgoYSwgYikgPT4gKGFbMF0gKyBhWzFdKSAtIChiWzBdICsgYlsxXSkpO1xuICAgIHNldEFycmF5KHNvcnRlZEFycmF5KTtcbiAgfTtcbiAgXG4gIGNvbnN0IGhhbmRsZVNvcnRERVNDID0gKCkgPT4ge1xuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gWy4uLmFycmF5XS5zb3J0KChhLCBiKSA9PiAoYlswXSArIGJbMV0pIC0gKGFbMF0gKyBhWzFdKSk7XG4gICAgc2V0QXJyYXkoc29ydGVkQXJyYXkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPkRvbWlub2VzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgYmctZ3JheS0xMDAgbXktM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPlNvdXJjZTwvbGFiZWw+XG4gICAgICAgICAge3NvdXJjZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBiZy1ncmF5LTEwMCBteS0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICBEb3VibGUgTnVtYmVyXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICB7ZG91YmxlQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG1iLTQgXCI+XG4gICAgICAgIHthcnJheS5tYXAoKFt0b3AsIGJvdHRvbV0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGJvcmRlciBwLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9taW5vLWhhbGZcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3RvcH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9taW5vLWRpdmlkZXJcIj4tPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbWluby1oYWxmXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntib3R0b219PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG1iLTRcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTb3J0QVNDfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCI+XG4gICAgICAgICAgU29ydCAoQVNDKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTb3J0REVTQ30gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiPlxuICAgICAgICAgIFNvcnQgKERFU0MpXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBGbGlwXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBSZW1vdmUgRHVwXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICBSZXNldFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIG1iLTJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5wdXQgTnVtYmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCI+XG4gICAgICAgICAgUmVtb3ZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiYXJyYXkiLCJzZXRBcnJheSIsImRvdWJsZUNvdW50IiwiZm9yRWFjaCIsInRvcCIsImJvdHRvbSIsInNvdXJjZSIsInNldFNvdXJjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVTb3J0QVNDIiwic29ydGVkQXJyYXkiLCJzb3J0IiwiYSIsImIiLCJoYW5kbGVTb3J0REVTQyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJtYXAiLCJpbmRleCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});