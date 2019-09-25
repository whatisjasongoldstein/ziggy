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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/jasongoldstein/dev/sites/ziggy/components/lazyloaded-image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var observer;
var observerCallbackHandlers = {}; // new IntersectionObserver(
//   (entries, observerInstance) => {
//     // checks to see if the element is intersecting
//     if (entries[0].intersectionRatio > 0) {
//       // if it is update the state, we set triggered
//       // as to not re-observe the element
//       setState({
//         inView: true,
//         triggered: true
//       });
//       // unobserve the element
//       observerInstance.unobserve(ref.current);
//     }
//     return;
//   },
// {
//   rootMargin: "500px"
// }
// );

function getObserver() {
  if ( false || observer) {
    return observer;
  }

  observer = new IntersectionObserver(function (entries, observerInstance) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        console.log(entry);
        observerCallbackHandlers[entry.target]();
      }
    });
  }, {
    rootMargin: "500px"
  });
  return observer;
}
/**
 * Inspired by https://billyjacoby.dev/intersection-observer-react-hooks
 */


var useIntersectionObserver = function useIntersectionObserver(ref) {
  // configure the state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    inView: false,
    triggered: false
  }),
      state = _useState[0],
      setState = _useState[1]; // Use this to cache the observer across lifecycles


  var observerInstance = getObserver(); // Obviously this only works in the browser
  // if (process.browser && !observerRef.current) {
  //   console.log("Observer created");
  //   observerRef.current = new IntersectionObserver(
  //     (entries, observerInstance) => {
  //       // checks to see if the element is intersecting
  //       if (entries[0].intersectionRatio > 0) {
  //         // if it is update the state, we set triggered
  //         // as to not re-observe the element
  //         setState({
  //           inView: true,
  //           triggered: true
  //         });
  //         // unobserve the element
  //         observerInstance.unobserve(ref.current);
  //       }
  //       return;
  //     },
  //     {
  //       rootMargin: "500px"
  //     }
  //   );
  // }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // check that the element exists, and has not
    // already been triggered
    if (observerInstance && ref.current && !state.triggered) {
      observerCallbackHandlers[ref.current] = function () {
        console.log(ref.current.outerHTML);
      };

      observerInstance.observe(ref.current);
    }

    return function () {
      if (observerInstance) {
        observerInstance.unobserve(ref.current);
      }
    };
  });
  return [state.inView];
}; // export default function LazyLoadedImage({ src, alt }) {
//   const elementRef = useRef(null);
//   const [inView] = useIntersectionObserver(elementRef);
//   return (
//     <img
//       ref={elementRef}
//       key={src}
//       className="lazyload"
//       src={inView ? src : ""}
//       alt={alt}
//     />
//   );
// }

var LazyLoadedImage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LazyLoadedImage, _Component);

  function LazyLoadedImage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LazyLoadedImage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LazyLoadedImage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LazyLoadedImage, [{
    key: "render",
    value: function render() {
      var inView = this.state.inView;
      var _this$props = this.props,
          src = _this$props.src,
          alt = _this$props.alt;
      return __jsx("img", {
        ref: elementRef,
        key: src,
        className: "lazyload",
        src: inView ? src : "",
        alt: alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      });
    }
  }]);

  return LazyLoadedImage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LazyLoadedImage);

/***/ })

})
//# sourceMappingURL=index.js.61b619932f6118663498.hot-update.js.map