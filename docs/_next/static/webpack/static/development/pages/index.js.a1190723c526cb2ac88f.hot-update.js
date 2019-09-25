webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/lazyloaded-image.js":
/*!****************************************!*\
  !*** ./components/lazyloaded-image.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LazyLoadedImage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");

var _jsxFileName = "/Users/jasongoldstein/dev/sites/ziggy/components/lazyloaded-image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function LazyLoadedImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    rootMargin: "500px"
  }),
      _useInView2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 3),
      ref = _useInView2[0],
      inView = _useInView2[1],
      entry = _useInView2[2];

  return __jsx("img", {
    ref: ref,
    key: src,
    className: "lazyload",
    src: inView ? src : "",
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.a1190723c526cb2ac88f.hot-update.js.map