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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [originalArray, setOriginalArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            6,\n            1\n        ],\n        [\n            4,\n            3\n        ],\n        [\n            5,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            1\n        ],\n        [\n            3,\n            4\n        ],\n        [\n            1,\n            2\n        ]\n    ]);\n    const handleReset = ()=>{\n        setArray([\n            [\n                6,\n                1\n            ],\n            [\n                4,\n                3\n            ],\n            [\n                5,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                2\n            ]\n        ]);\n        setSource(JSON.stringify([\n            [\n                6,\n                1\n            ],\n            [\n                4,\n                3\n            ],\n            [\n                5,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                1\n            ],\n            [\n                3,\n                4\n            ],\n            [\n                1,\n                2\n            ]\n        ]));\n        doubleCount = 0;\n    };\n    let doubleCount = 0;\n    const [array, setArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalArray);\n    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(originalArray));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setArray(originalArray); // reset array to original state on mount\n    }, []);\n    array.forEach((param)=>{\n        let [top, bottom] = param;\n        if (top === bottom) {\n            doubleCount++;\n        }\n    });\n    const handleSortASC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return a[0] - b[0]; // If totals are equal, sort by first element\n            } else {\n                return totalA - totalB; // Sort by total\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleSortDESC = ()=>{\n        const sortedArray = [\n            ...array\n        ].sort((a, b)=>{\n            const totalA = a[0] + a[1];\n            const totalB = b[0] + b[1];\n            if (totalA === totalB) {\n                return b[0] - a[0]; // If totals are equal, sort by first element in descending order\n            } else {\n                return totalB - totalA; // Sort by total in descending order\n            }\n        });\n        setArray(sortedArray);\n    };\n    const handleFlip = ()=>{\n        const flippedArray = array.map((param)=>{\n            let [top, bottom] = param;\n            return [\n                bottom,\n                top\n            ];\n        });\n        setArray(flippedArray);\n    };\n    const handleRemoveDup = ()=>{\n        const uniqueArray = array.filter((item, index, self)=>{\n            const sortedItem = item.slice().sort((a, b)=>a - b).join(\",\");\n            return self.filter((t)=>{\n                const sortedT = t.slice().sort((a, b)=>a - b).join(\",\");\n                return sortedT === sortedItem;\n            }).length === 1;\n        });\n        setArray(uniqueArray);\n    };\n    const [inputNumber, setInputNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRemove = ()=>{\n        if (inputNumber !== \"\") {\n            const newArray = array.filter((param)=>{\n                let [top, bottom] = param;\n                return top + bottom !== parseInt(inputNumber);\n            });\n            setArray(newArray);\n            setInputNumber(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-4\",\n                children: \"Dominoes\"\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Source\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, this),\n                            source\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full p-2 border rounded bg-gray-100 my-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-lg font-semibold mb-2\",\n                                children: \"Double Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            \"Double count: \",\n                            doubleCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4 \",\n                children: array.map((param, index)=>{\n                    let [top, bottom] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col border p-2 text-center domino\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half bg-gray-200 p-2 rounded\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg\",\n                                    children: top\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-divider\",\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"domino-half bg-gray-200 p-2 rounded\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg\",\n                                    children: bottom\n                                }, void 0, false, {\n                                    fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        onClick: handleSortASC,\n                        children: \"Sort (ASC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        onClick: handleSortDESC,\n                        children: \"Sort (DESC)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        onClick: handleFlip,\n                        children: \"Flip\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        onClick: handleRemoveDup,\n                        children: \"Remove Dup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        onClick: handleReset,\n                        children: \"Reset\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full p-2 border rounded mb-2\",\n                        placeholder: \"Input Number\",\n                        value: inputNumber,\n                        onChange: (e)=>setInputNumber(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        onClick: handleRemove,\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                        lineNumber: 190,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n                lineNumber: 182,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/naufalhesantra/Purwadhika/dominoes/dominoes/src/app/page.tsx\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KbFN+7yG3GEaCAuI3PSY2CfiBiA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTswQ0FDYiw0RUFBQ0c7b0NBQUtILFdBQVU7OENBQVcvQjs7Ozs7Ozs7Ozs7MENBRTdCLDhEQUFDOEI7Z0NBQUlDLFdBQVU7MENBQWlCOzs7Ozs7MENBQ2hDLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0c7b0NBQUtILFdBQVU7OENBQVc5Qjs7Ozs7Ozs7Ozs7O3VCQVJ4QmdCOzs7Ozs7Ozs7OzswQkFhWCw4REFBQ2E7Z0JBQUlDLFdBQVU7O2tDQUNuQiw4REFBQ0k7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVNsQztrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDaUM7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVMzQjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDMEI7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVMxQjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDeUI7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVN2QjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDc0I7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVM3QztrQ0FDVjs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDdUM7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFDQ0MsTUFBSzt3QkFDTFAsV0FBVTt3QkFDVlEsYUFBWTt3QkFDWkMsT0FBT2Y7d0JBQ1BnQixVQUFVLENBQUNDLElBQU1oQixlQUFlZ0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRWhELDhEQUFDTDt3QkFDQ0osV0FBVTt3QkFDVkssU0FBU1Q7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1IO0dBbE13QnZDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbb3JpZ2luYWxBcnJheSwgc2V0T3JpZ2luYWxBcnJheV0gPSB1c2VTdGF0ZShbXG4gICAgWzYsIDFdLFxuICAgIFs0LCAzXSxcbiAgICBbNSwgMV0sXG4gICAgWzMsIDRdLFxuICAgIFsxLCAxXSxcbiAgICBbMywgNF0sXG4gICAgWzEsIDJdLFxuICBdKTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRBcnJheShbXG4gICAgICBbNiwgMV0sXG4gICAgICBbNCwgM10sXG4gICAgICBbNSwgMV0sXG4gICAgICBbMywgNF0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMywgNF0sXG4gICAgICBbMSwgMl0sXG4gICAgXSk7XG4gICAgc2V0U291cmNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBbNiwgMV0sXG4gICAgICAgIFs0LCAzXSxcbiAgICAgICAgWzUsIDFdLFxuICAgICAgICBbMywgNF0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgICAgWzMsIDRdLFxuICAgICAgICBbMSwgMl0sXG4gICAgICBdKVxuICAgICk7XG4gICAgZG91YmxlQ291bnQgPSAwO1xuICB9O1xuXG4gIGxldCBkb3VibGVDb3VudCA9IDA7XG5cbiAgY29uc3QgW2FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZShvcmlnaW5hbEFycmF5KTtcblxuICBjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUoSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxBcnJheSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QXJyYXkob3JpZ2luYWxBcnJheSk7IC8vIHJlc2V0IGFycmF5IHRvIG9yaWdpbmFsIHN0YXRlIG9uIG1vdW50XG4gIH0sIFtdKTtcblxuICBhcnJheS5mb3JFYWNoKChbdG9wLCBib3R0b21dKSA9PiB7XG4gICAgaWYgKHRvcCA9PT0gYm90dG9tKSB7XG4gICAgICBkb3VibGVDb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU29ydEFTQyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5hcnJheV0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdG90YWxBID0gYVswXSArIGFbMV07XG4gICAgICBjb25zdCB0b3RhbEIgPSBiWzBdICsgYlsxXTtcbiAgICAgIGlmICh0b3RhbEEgPT09IHRvdGFsQikge1xuICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07IC8vIElmIHRvdGFscyBhcmUgZXF1YWwsIHNvcnQgYnkgZmlyc3QgZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsQSAtIHRvdGFsQjsgLy8gU29ydCBieSB0b3RhbFxuICAgICAgfVxuICAgIH0pO1xuICAgIHNldEFycmF5KHNvcnRlZEFycmF5KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTb3J0REVTQyA9ICgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IFsuLi5hcnJheV0uc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgdG90YWxBID0gYVswXSArIGFbMV07XG4gICAgICBjb25zdCB0b3RhbEIgPSBiWzBdICsgYlsxXTtcbiAgICAgIGlmICh0b3RhbEEgPT09IHRvdGFsQikge1xuICAgICAgICByZXR1cm4gYlswXSAtIGFbMF07IC8vIElmIHRvdGFscyBhcmUgZXF1YWwsIHNvcnQgYnkgZmlyc3QgZWxlbWVudCBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG90YWxCIC0gdG90YWxBOyAvLyBTb3J0IGJ5IHRvdGFsIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRBcnJheShzb3J0ZWRBcnJheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmxpcCA9ICgpID0+IHtcbiAgICBjb25zdCBmbGlwcGVkQXJyYXkgPSBhcnJheS5tYXAoKFt0b3AsIGJvdHRvbV0pID0+IFtib3R0b20sIHRvcF0pO1xuICAgIHNldEFycmF5KGZsaXBwZWRBcnJheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlRHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHVuaXF1ZUFycmF5ID0gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCwgc2VsZikgPT4ge1xuICAgICAgY29uc3Qgc29ydGVkSXRlbSA9IGl0ZW1cbiAgICAgICAgLnNsaWNlKClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICAuam9pbihcIixcIik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBzZWxmLmZpbHRlcigodCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNvcnRlZFQgPSB0XG4gICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICAgICAgLmpvaW4oXCIsXCIpO1xuICAgICAgICAgIHJldHVybiBzb3J0ZWRUID09PSBzb3J0ZWRJdGVtO1xuICAgICAgICB9KS5sZW5ndGggPT09IDFcbiAgICAgICk7XG4gICAgfSk7XG4gICAgc2V0QXJyYXkodW5pcXVlQXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IFtpbnB1dE51bWJlciwgc2V0SW5wdXROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgIGlmIChpbnB1dE51bWJlciAhPT0gXCJcIikge1xuICAgICAgY29uc3QgbmV3QXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAgIChbdG9wLCBib3R0b21dKSA9PiB0b3AgKyBib3R0b20gIT09IHBhcnNlSW50KGlucHV0TnVtYmVyKVxuICAgICAgKTtcbiAgICAgIHNldEFycmF5KG5ld0FycmF5KTtcbiAgICAgIHNldElucHV0TnVtYmVyKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5Eb21pbm9lczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIGJnLWdyYXktMTAwIG15LTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj5Tb3VyY2U8L2xhYmVsPlxuICAgICAgICAgIHtzb3VyY2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWQgYmctZ3JheS0xMDAgbXktM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRG91YmxlIE51bWJlclxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgRG91YmxlIGNvdW50OiB7ZG91YmxlQ291bnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG1iLTQgXCI+XG4gICAgICAgIHthcnJheS5tYXAoKFt0b3AsIGJvdHRvbV0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyIHAtMiB0ZXh0LWNlbnRlciBkb21pbm9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9taW5vLWhhbGYgYmctZ3JheS0yMDAgcC0yIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPnt0b3B9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbWluby1kaXZpZGVyXCI+LTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb21pbm8taGFsZiBiZy1ncmF5LTIwMCBwLTIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2JvdHRvbX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbWItNFwiPlxuICA8YnV0dG9uXG4gICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnRBU0N9XG4gID5cbiAgICBTb3J0IChBU0MpXG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uXG4gICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgIG9uQ2xpY2s9e2hhbmRsZVNvcnRERVNDfVxuICA+XG4gICAgU29ydCAoREVTQylcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgb25DbGljaz17aGFuZGxlRmxpcH1cbiAgPlxuICAgIEZsaXBcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgb25DbGljaz17aGFuZGxlUmVtb3ZlRHVwfVxuICA+XG4gICAgUmVtb3ZlIER1cFxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cbiAgPlxuICAgIFJlc2V0XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICA8aW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZCBtYi0yXCJcbiAgICBwbGFjZWhvbGRlcj1cIklucHV0IE51bWJlclwiXG4gICAgdmFsdWU9e2lucHV0TnVtYmVyfVxuICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXROdW1iZXIoZS50YXJnZXQudmFsdWUpfVxuICAvPlxuICA8YnV0dG9uXG4gICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX1cbiAgPlxuICAgIFJlbW92ZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsIm9yaWdpbmFsQXJyYXkiLCJzZXRPcmlnaW5hbEFycmF5IiwiaGFuZGxlUmVzZXQiLCJzZXRBcnJheSIsInNldFNvdXJjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkb3VibGVDb3VudCIsImFycmF5Iiwic291cmNlIiwiZm9yRWFjaCIsInRvcCIsImJvdHRvbSIsImhhbmRsZVNvcnRBU0MiLCJzb3J0ZWRBcnJheSIsInNvcnQiLCJhIiwiYiIsInRvdGFsQSIsInRvdGFsQiIsImhhbmRsZVNvcnRERVNDIiwiaGFuZGxlRmxpcCIsImZsaXBwZWRBcnJheSIsIm1hcCIsImhhbmRsZVJlbW92ZUR1cCIsInVuaXF1ZUFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4Iiwic2VsZiIsInNvcnRlZEl0ZW0iLCJzbGljZSIsImpvaW4iLCJ0Iiwic29ydGVkVCIsImxlbmd0aCIsImlucHV0TnVtYmVyIiwic2V0SW5wdXROdW1iZXIiLCJoYW5kbGVSZW1vdmUiLCJuZXdBcnJheSIsInBhcnNlSW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});