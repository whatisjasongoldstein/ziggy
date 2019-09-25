webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/lazyloaded-image.js":
/*!****************************************!*\
  !*** ./components/lazyloaded-image.js ***!
  \****************************************/
/*! exports provided: useIntersectionObserver, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIntersectionObserver", function() { return useIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LazyLoadedImage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/jasongoldstein/dev/sites/ziggy/components/lazyloaded-image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/**
 * Inspired by https://billyjacoby.dev/intersection-observer-react-hooks
 */

var useIntersectionObserver = function useIntersectionObserver(ref) {
  // configure the state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    inView: false,
    triggered: false
  }),
      state = _useState[0],
      setState = _useState[1]; // Use this to cache the observer across lifecycles


  var observerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // Obviously this only works in the browser

  if ( true && !observerRef.current) {
    console.log("Observer created");
    observerRef.current = new IntersectionObserver(function (entries, observerInstance) {
      // checks to see if the element is intersecting
      if (entries[0].intersectionRatio > 0) {
        // if it is update the state, we set triggered
        // as to not re-observe the element
        setState({
          inView: true,
          triggered: true
        }); // unobserve the element

        observerInstance.unobserve(ref.current);
      }

      return;
    }, {
      rootMargin: "500px"
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // check that the element exists, and has not
    // already been triggered
    if (observerRef.current && ref.current && !state.triggered) {
      observerRef.current.observe(ref.current);
    }

    return function () {
      observerRef.current.unobserve(ref.current);
    };
  });
  return [state.inView];
};
function LazyLoadedImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useIntersectionObser = useIntersectionObserver(elementRef),
      _useIntersectionObser2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIntersectionObser, 1),
      inView = _useIntersectionObser2[0];

  return __jsx("img", {
    ref: elementRef,
    key: src,
    className: "lazyload",
    src: inView ? src : "",
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.4c11c14c740476bdb704.hot-update.js.map