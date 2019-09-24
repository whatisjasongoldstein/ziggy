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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/jasongoldstein/dev/sites/ziggy/components/lazyloaded-image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // export default class LazyLoadedImage extends Component {
//   constructor() {
//     super();
//     this.elRef = React.createRef();
//     this.state = {
//       src: ""
//     };
//   }
//   handleObserver(entries, observer) {
//     console.log("!");
//     const isIntersecting = entries[0].isIntersecting;
//     if (isIntersecting) {
//       this.setState({ src: this.props.src });
//     }
//     this.unobserve();
//   }
//   componentDidMount() {
//     this.observer = new IntersectionObserver(
//       this.handleObserver.bind(this), //callback
//       {
//         root: null,
//         rootMargin: "500px"
//       }
//     );
//     console.log(this.observer);
//     this.el = findDOMNode(this);
//     console.log(this.el);
//     this.observer.observe(this.el);
//   }
//   unobserve() {
//     if (this.el && this.observer) {
//       // Remove the observation listener
//       this.observer.unobserve(this.el);
//     }
//     this.observer = null;
//   }
//   componentWillUnmount() {
//     this.unobserve();
//   }
//   render() {
//     const { src, alt } = this.props;
//     const activeSrc = this.state.src;
//     return <img key={src} className="lazyload" src={activeSrc} alt={alt} />;
//   }
// }

var useIntersectionObserver = function useIntersectionObserver(ref, _ref) {
  var threshold = _ref.threshold,
      root = _ref.root,
      rootMargin = _ref.rootMargin;

  // configure the state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    inView: false,
    triggered: false,
    entry: undefined
  }),
      state = _useState[0],
      setState = _useState[1];

  var observer;

  if (true) {
    observer = observer || new IntersectionObserver(function (entries, observerInstance) {
      // checks to see if the element is intersecting
      if (entries[0].intersectionRatio > 0) {
        // if it is update the state, we set triggered as to not re-observe the element
        setState({
          inView: true,
          triggered: true,
          entry: observerInstance
        }); // unobserve the element

        observerInstance.unobserve(ref.current);
      }

      return;
    }, {
      root: root || null,
      rootMargin: "500px"
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // check that the element exists, and has not already been triggered
    if (observer && ref.current && !state.triggered) {
      observer.observe(ref.current);
    }
  });
  return [state.inView, state.entry];
};
function LazyLoadedImage(_ref2) {
  var src = _ref2.src,
      alt = _ref2.alt;
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useIntersectionObser = useIntersectionObserver(elementRef, {
    threshold: 0
  }),
      _useIntersectionObser2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useIntersectionObser, 2),
      inView = _useIntersectionObser2[0],
      entry = _useIntersectionObser2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, [inView]);
  return __jsx("img", {
    ref: elementRef,
    key: src,
    className: "lazyload",
    src: inView ? src : "",
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.3904e2f2881e72a8043d.hot-update.js.map