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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
      lineNumber: 110
    },
    __self: this
  });
} // class LazyLoadedImage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inView: false
//     };
//     this.elementRef = React.createRef();
//   }
//   render() {
//     let { inView } = this.state;
//     const { src, alt } = this.props;
//     // inView = true;
//     return (
//       <img
//         ref={this.elementRef}
//         key={src}
//         className="lazyload"
//         src={inView ? src : ""}
//         alt={alt}
//       />
//     );
//   }
// }
// export default LazyLoadedImage;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
false

})
//# sourceMappingURL=index.js.2c6044062cdcb062b14c.hot-update.js.map