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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _signIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signIn */ \"./components/authFormComponent/userMenu/signIn/index.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ \"./components/authFormComponent/userMenu/register/index.js\");\n/* harmony import */ var _forgotPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgotPassword */ \"./components/authFormComponent/userMenu/forgotPassword/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/elvis/WebApps/PortFolio/ecommerce/components/authFormComponent/userMenu/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AuthMenu(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      forgotPassword = _useState[0],\n      setForgotPassword = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      register = _useState2[0],\n      setRegister = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      signin = _useState3[0],\n      setSignin = _useState3[1];\n\n  var expand = {\n    width: \"100%\",\n    height: \"auto\",\n    transition: \"0.4s\",\n    margin: \"0 2em\"\n  };\n  var collapse = {\n    maxWidth: 0,\n    height: 0,\n    transition: \"0.4s\"\n  };\n\n  var handleRegister = function handleRegister() {\n    setForgotPassword(false);\n    setSignin(false);\n    setRegister(true);\n  };\n\n  var handleForgotPassword = function handleForgotPassword() {\n    setForgotPassword(true);\n    setSignin(false);\n    setRegister(false);\n  };\n\n  var handleSigin = function handleSigin() {\n    setForgotPassword(false);\n    setSignin(true);\n    setRegister(false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        display: \"flex\",\n        flexDirection: 'row',\n        overflow: 'hidden',\n        marginLeft: '1em',\n        marginTop: \"1.0em\",\n        width: \"86%\"\n      },\n      children: [register ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_register__WEBPACK_IMPORTED_MODULE_3__.default, {\n        style: register ? expand : collapse,\n        setSignin: handleSigin\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 26\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), signin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_signIn__WEBPACK_IMPORTED_MODULE_2__.default, {\n        style: signin ? expand : collapse,\n        setForgotPassword: handleForgotPassword,\n        setRegister: handleRegister\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 24\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), forgotPassword ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_forgotPassword__WEBPACK_IMPORTED_MODULE_4__.default, {\n        style: forgotPassword ? expand : collapse,\n        setSignin: handleSigin\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 32\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 12\n    }, this)\n  }, void 0, false);\n}\n\n_s(AuthMenu, \"QEE5uTTUklpSHBTeH0AfFDDwrMk=\");\n\n_c = AuthMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGhGb3JtQ29tcG9uZW50L3VzZXJNZW51L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLGtCQUNNTCwrQ0FBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQzdCTSxjQUQ2QjtBQUFBLE1BQ2RDLGlCQURjOztBQUFBLG1CQUVQUCwrQ0FBUSxDQUFDLEtBQUQsQ0FGRDtBQUFBLE1BRTdCUSxRQUY2QjtBQUFBLE1BRXBCQyxXQUZvQjs7QUFBQSxtQkFHWFQsK0NBQVEsQ0FBQyxJQUFELENBSEc7QUFBQSxNQUc3QlUsTUFINkI7QUFBQSxNQUd0QkMsU0FIc0I7O0FBSXBDLE1BQUlDLE1BQU0sR0FBRTtBQUFFQyxJQUFBQSxLQUFLLEVBQUMsTUFBUjtBQUFlQyxJQUFBQSxNQUFNLEVBQUMsTUFBdEI7QUFBNkJDLElBQUFBLFVBQVUsRUFBQyxNQUF4QztBQUErQ0MsSUFBQUEsTUFBTSxFQUFDO0FBQXRELEdBQVo7QUFDQSxNQUFJQyxRQUFRLEdBQUM7QUFBQ0MsSUFBQUEsUUFBUSxFQUFDLENBQVY7QUFBWUosSUFBQUEsTUFBTSxFQUFDLENBQW5CO0FBQXFCQyxJQUFBQSxVQUFVLEVBQUM7QUFBaEMsR0FBYjs7QUFDQSxNQUFNSSxjQUFjLEdBQUMsU0FBZkEsY0FBZSxHQUFJO0FBQ3JCWixJQUFBQSxpQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0FJLElBQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUYsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEdBSkQ7O0FBS0EsTUFBTVcsb0JBQW9CLEdBQUMsU0FBckJBLG9CQUFxQixHQUFJO0FBQzNCYixJQUFBQSxpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FJLElBQUFBLFNBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQUYsSUFBQUEsV0FBVyxDQUFDLEtBQUQsQ0FBWDtBQUNILEdBSkQ7O0FBS0EsTUFBTVksV0FBVyxHQUFDLFNBQVpBLFdBQVksR0FBSTtBQUNsQmQsSUFBQUEsaUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBSSxJQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FGLElBQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7QUFDSCxHQUpEOztBQU1BLHNCQUNHO0FBQUEsMkJBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBQ2EsUUFBQUEsT0FBTyxFQUFDLE1BQVQ7QUFBZ0JDLFFBQUFBLGFBQWEsRUFBQyxLQUE5QjtBQUFvQ0MsUUFBQUEsUUFBUSxFQUFDLFFBQTdDO0FBQXNEQyxRQUFBQSxVQUFVLEVBQUMsS0FBakU7QUFBdUVDLFFBQUFBLFNBQVMsRUFBQyxPQUFqRjtBQUF5RmIsUUFBQUEsS0FBSyxFQUFDO0FBQS9GLE9BQVo7QUFBQSxpQkFDS0wsUUFBUSxnQkFBQyw4REFBQyw4Q0FBRDtBQUFVLGFBQUssRUFBRUEsUUFBUSxHQUFDSSxNQUFELEdBQVFLLFFBQWpDO0FBQTJDLGlCQUFTLEVBQUVJO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBRCxnQkFBc0UsNklBRG5GLEVBRUtYLE1BQU0sZ0JBQUMsOERBQUMsNENBQUQ7QUFBUSxhQUFLLEVBQUVBLE1BQU0sR0FBR0UsTUFBSCxHQUFZSyxRQUFqQztBQUEyQyx5QkFBaUIsRUFBRUcsb0JBQTlEO0FBQ0MsbUJBQVcsRUFBRUQ7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUQsZ0JBQ2lDLDZJQUg1QyxFQUlLYixjQUFjLGdCQUFDLDhEQUFDLG9EQUFEO0FBQWdCLGFBQUssRUFBRUEsY0FBYyxHQUFHTSxNQUFILEdBQVlLLFFBQWpEO0FBQTJELGlCQUFTLEVBQUVJO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBRCxnQkFBc0YsNklBSnpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURIO0FBVUg7O0dBaEN1QmpCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGhGb3JtQ29tcG9uZW50L3VzZXJNZW51L2luZGV4LmpzPzMzZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vc2lnbkluXCI7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vcmVnaXN0ZXJcIjtcbmltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tIFwiLi9mb3Jnb3RQYXNzd29yZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoTWVudShwcm9wcykge1xuICAgIGNvbnN0IFtmb3Jnb3RQYXNzd29yZCxzZXRGb3Jnb3RQYXNzd29yZF09IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcmVnaXN0ZXIsc2V0UmVnaXN0ZXJdPXVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2lnbmluLHNldFNpZ25pbl09dXNlU3RhdGUodHJ1ZSk7XG4gICAgbGV0IGV4cGFuZCA9eyB3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCJhdXRvXCIsdHJhbnNpdGlvbjpcIjAuNHNcIixtYXJnaW46XCIwIDJlbVwifVxuICAgIGxldCBjb2xsYXBzZT17bWF4V2lkdGg6MCxoZWlnaHQ6MCx0cmFuc2l0aW9uOlwiMC40c1wifVxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyPSgpPT57XG4gICAgICAgIHNldEZvcmdvdFBhc3N3b3JkKGZhbHNlKTtcbiAgICAgICAgc2V0U2lnbmluKGZhbHNlKTtcbiAgICAgICAgc2V0UmVnaXN0ZXIodHJ1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUZvcmdvdFBhc3N3b3JkPSgpPT57XG4gICAgICAgIHNldEZvcmdvdFBhc3N3b3JkKHRydWUpO1xuICAgICAgICBzZXRTaWduaW4oZmFsc2UpO1xuICAgICAgICBzZXRSZWdpc3RlcihmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNpZ2luPSgpPT57XG4gICAgICAgIHNldEZvcmdvdFBhc3N3b3JkKGZhbHNlKTtcbiAgICAgICAgc2V0U2lnbmluKHRydWUpO1xuICAgICAgICBzZXRSZWdpc3RlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICA8PlxuICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOidyb3cnLG92ZXJmbG93OidoaWRkZW4nLG1hcmdpbkxlZnQ6JzFlbScsbWFyZ2luVG9wOlwiMS4wZW1cIix3aWR0aDpcIjg2JVwifX0+XG4gICAgICAgICAgICAgICB7cmVnaXN0ZXI/PFJlZ2lzdGVyIHN0eWxlPXtyZWdpc3Rlcj9leHBhbmQ6Y29sbGFwc2V9IHNldFNpZ25pbj17aGFuZGxlU2lnaW59Lz46PD48Lz59XG4gICAgICAgICAgICAgICB7c2lnbmluPzxTaWduSW4gc3R5bGU9e3NpZ25pbiA/IGV4cGFuZCA6IGNvbGxhcHNlfSBzZXRGb3Jnb3RQYXNzd29yZD17aGFuZGxlRm9yZ290UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWdpc3Rlcj17aGFuZGxlUmVnaXN0ZXJ9Lz46PD48Lz59XG4gICAgICAgICAgICAgICB7Zm9yZ290UGFzc3dvcmQ/PEZvcmdvdFBhc3N3b3JkIHN0eWxlPXtmb3Jnb3RQYXNzd29yZCA/IGV4cGFuZCA6IGNvbGxhcHNlfSBzZXRTaWduaW49e2hhbmRsZVNpZ2lufS8+Ojw+PC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaWduSW4iLCJSZWdpc3RlciIsIkZvcmdvdFBhc3N3b3JkIiwiQXV0aE1lbnUiLCJwcm9wcyIsImZvcmdvdFBhc3N3b3JkIiwic2V0Rm9yZ290UGFzc3dvcmQiLCJyZWdpc3RlciIsInNldFJlZ2lzdGVyIiwic2lnbmluIiwic2V0U2lnbmluIiwiZXhwYW5kIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwibWFyZ2luIiwiY29sbGFwc2UiLCJtYXhXaWR0aCIsImhhbmRsZVJlZ2lzdGVyIiwiaGFuZGxlRm9yZ290UGFzc3dvcmQiLCJoYW5kbGVTaWdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3ciLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/authFormComponent/userMenu/index.js\n");

/***/ })

});