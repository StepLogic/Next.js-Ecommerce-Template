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

/***/ "./components/authFormComponent/userMenu/index.js":
/*!********************************************************!*\
  !*** ./components/authFormComponent/userMenu/index.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _signIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signIn */ \"./components/authFormComponent/userMenu/signIn/index.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ \"./components/authFormComponent/userMenu/register/index.js\");\n/* harmony import */ var _forgotPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgotPassword */ \"./components/authFormComponent/userMenu/forgotPassword/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/elvis/WebApps/PortFolio/ecommerce/components/authFormComponent/userMenu/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AuthMenu(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      forgotPassword = _useState[0],\n      setForgotPassword = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      register = _useState2[0],\n      setRegister = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      signin = _useState3[0],\n      setSignin = _useState3[1];\n\n  var expand = {\n    width: \"100%\",\n    marginRight: \"2em\",\n    transition: \"0.4s\"\n  };\n  var collapse = {\n    maxWidth: 0,\n    transition: \"0.4s\"\n  };\n\n  var handleRegister = function handleRegister() {\n    setForgotPassword(false);\n    setSignin(false);\n    setRegister(true);\n  };\n\n  var handleForgotPassword = function handleForgotPassword() {\n    setForgotPassword(true);\n    setSignin(false);\n    setRegister(false);\n  };\n\n  var handleSigin = function handleSigin() {\n    setForgotPassword(false);\n    setSignin(true);\n    setRegister(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        display: \"flex\",\n        flexDirection: 'row',\n        marginLeft: '1em',\n        marginTop: \"1.0em\",\n        width: \"86%\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_register__WEBPACK_IMPORTED_MODULE_3__.default, {\n        style: register ? expand : collapse,\n        setSignin: handleSigin\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 16\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_signIn__WEBPACK_IMPORTED_MODULE_2__.default, {\n        style: signin ? expand : collapse,\n        setForgotPassword: handleForgotPassword,\n        setRegister: handleRegister\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forgotPassword__WEBPACK_IMPORTED_MODULE_4__.default, {\n        style: forgotPassword ? expand : collapse,\n        setSignin: handleSigin\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 16\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 12\n    }, this)\n  }, void 0, false);\n}\n\n_s(AuthMenu, \"QEE5uTTUklpSHBTeH0AfFDDwrMk=\");\n\n_c = AuthMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGhGb3JtQ29tcG9uZW50L3VzZXJNZW51L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNNTCwrQ0FBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQzdCTSxjQUQ2QjtBQUFBLE1BQ2RDLGlCQURjOztBQUFBLG1CQUVQUCwrQ0FBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRTdCUSxRQUY2QjtBQUFBLE1BRXBCQyxXQUZvQjs7QUFBQSxtQkFHWFQsK0NBQVEsQ0FBQyxJQUFELENBSEc7QUFBQSxNQUc3QlUsTUFINkI7QUFBQSxNQUd0QkMsU0FIc0I7O0FBSXBDLE1BQUlDLE1BQU0sR0FBRTtBQUFDQyxJQUFBQSxLQUFLLEVBQUMsTUFBUDtBQUFjQyxJQUFBQSxXQUFXLEVBQUMsS0FBMUI7QUFBZ0NDLElBQUFBLFVBQVUsRUFBQztBQUEzQyxHQUFaO0FBQ0EsTUFBSUMsUUFBUSxHQUFDO0FBQUNDLElBQUFBLFFBQVEsRUFBQyxDQUFWO0FBQVlGLElBQUFBLFVBQVUsRUFBQztBQUF2QixHQUFiOztBQUNBLE1BQU1HLGNBQWMsR0FBQyxTQUFmQSxjQUFlLEdBQUk7QUFDckJYLElBQUFBLGlCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQUksSUFBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRixJQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsR0FKRDs7QUFLQSxNQUFNVSxvQkFBb0IsR0FBQyxTQUFyQkEsb0JBQXFCLEdBQUk7QUFDM0JaLElBQUFBLGlCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUksSUFBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRixJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0gsR0FKRDs7QUFLQSxNQUFNVyxXQUFXLEdBQUMsU0FBWkEsV0FBWSxHQUFJO0FBQ2xCYixJQUFBQSxpQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FJLElBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUYsSUFBQUEsV0FBVyxDQUFDLEtBQUQsQ0FBWDtBQUNILEdBSkQ7O0FBTUEsc0JBQ0c7QUFBQSwyQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFDWSxRQUFBQSxPQUFPLEVBQUMsTUFBVDtBQUFnQkMsUUFBQUEsYUFBYSxFQUFDLEtBQTlCO0FBQW9DQyxRQUFBQSxVQUFVLEVBQUMsS0FBL0M7QUFBcURDLFFBQUFBLFNBQVMsRUFBQyxPQUEvRDtBQUF1RVgsUUFBQUEsS0FBSyxFQUFDO0FBQTdFLE9BQVo7QUFBQSw4QkFDSSw4REFBQyw4Q0FBRDtBQUFVLGFBQUssRUFBRUwsUUFBUSxHQUFDSSxNQUFELEdBQVFJLFFBQWpDO0FBQTJDLGlCQUFTLEVBQUVJO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVLLDhEQUFDLDRDQUFEO0FBQVEsYUFBSyxFQUFFVixNQUFNLEdBQUNFLE1BQUQsR0FBUUksUUFBN0I7QUFBdUMseUJBQWlCLEVBQUVHLG9CQUExRDtBQUFnRixtQkFBVyxFQUFFRDtBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkwsZUFHSSw4REFBQyxvREFBRDtBQUFpQixhQUFLLEVBQUVaLGNBQWMsR0FBQ00sTUFBRCxHQUFRSSxRQUE5QztBQUF3RCxpQkFBUyxFQUFFSTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREg7QUFTSDs7R0EvQnVCaEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aEZvcm1Db21wb25lbnQvdXNlck1lbnUvaW5kZXguanM/MzNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9zaWduSW5cIjtcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9yZWdpc3RlclwiO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gXCIuL2ZvcmdvdFBhc3N3b3JkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhNZW51KHByb3BzKSB7XG4gICAgY29uc3QgW2ZvcmdvdFBhc3N3b3JkLHNldEZvcmdvdFBhc3N3b3JkXT0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtyZWdpc3RlcixzZXRSZWdpc3Rlcl09dXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaWduaW4sc2V0U2lnbmluXT11c2VTdGF0ZSh0cnVlKTtcbiAgICBsZXQgZXhwYW5kID17d2lkdGg6XCIxMDAlXCIsbWFyZ2luUmlnaHQ6XCIyZW1cIix0cmFuc2l0aW9uOlwiMC40c1wifVxuICAgIGxldCBjb2xsYXBzZT17bWF4V2lkdGg6MCx0cmFuc2l0aW9uOlwiMC40c1wifVxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyPSgpPT57XG4gICAgICAgIHNldEZvcmdvdFBhc3N3b3JkKGZhbHNlKTtcbiAgICAgICAgc2V0U2lnbmluKGZhbHNlKTtcbiAgICAgICAgc2V0UmVnaXN0ZXIodHJ1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUZvcmdvdFBhc3N3b3JkPSgpPT57XG4gICAgICAgIHNldEZvcmdvdFBhc3N3b3JkKHRydWUpO1xuICAgICAgICBzZXRTaWduaW4oZmFsc2UpO1xuICAgICAgICBzZXRSZWdpc3RlcihmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNpZ2luPSgpPT57XG4gICAgICAgIHNldEZvcmdvdFBhc3N3b3JkKGZhbHNlKTtcbiAgICAgICAgc2V0U2lnbmluKHRydWUpO1xuICAgICAgICBzZXRSZWdpc3RlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICA8PlxuICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOidyb3cnLG1hcmdpbkxlZnQ6JzFlbScsbWFyZ2luVG9wOlwiMS4wZW1cIix3aWR0aDpcIjg2JVwifX0+XG4gICAgICAgICAgICAgICA8UmVnaXN0ZXIgc3R5bGU9e3JlZ2lzdGVyP2V4cGFuZDpjb2xsYXBzZX0gc2V0U2lnbmluPXtoYW5kbGVTaWdpbn0vPlxuICAgICAgICAgICAgICAgIDxTaWduSW4gc3R5bGU9e3NpZ25pbj9leHBhbmQ6Y29sbGFwc2V9IHNldEZvcmdvdFBhc3N3b3JkPXtoYW5kbGVGb3Jnb3RQYXNzd29yZH0gc2V0UmVnaXN0ZXI9e2hhbmRsZVJlZ2lzdGVyfS8+XG4gICAgICAgICAgICAgICA8Rm9yZ290UGFzc3dvcmQgIHN0eWxlPXtmb3Jnb3RQYXNzd29yZD9leHBhbmQ6Y29sbGFwc2V9IHNldFNpZ25pbj17aGFuZGxlU2lnaW59Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiU2lnbkluIiwiUmVnaXN0ZXIiLCJGb3Jnb3RQYXNzd29yZCIsIkF1dGhNZW51IiwicHJvcHMiLCJmb3Jnb3RQYXNzd29yZCIsInNldEZvcmdvdFBhc3N3b3JkIiwicmVnaXN0ZXIiLCJzZXRSZWdpc3RlciIsInNpZ25pbiIsInNldFNpZ25pbiIsImV4cGFuZCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2l0aW9uIiwiY29sbGFwc2UiLCJtYXhXaWR0aCIsImhhbmRsZVJlZ2lzdGVyIiwiaGFuZGxlRm9yZ290UGFzc3dvcmQiLCJoYW5kbGVTaWdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/authFormComponent/userMenu/index.js\n");

/***/ })

});