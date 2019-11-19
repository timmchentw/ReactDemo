/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/components/app/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app/app.jsx":
/*!************************************!*\
  !*** ./src/components/app/app.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // 自訂組件 (render限定return一個TAG)

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello React World!"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/app/compositionTest.jsx":
/*!************************************************!*\
  !*** ./src/components/app/compositionTest.jsx ***!
  \************************************************/
/*! exports provided: UseCompos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseCompos", function() { return UseCompos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function UseCompos() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Compos, {
    myCompos: "This is created by props.myCompos."
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "This is created by props.children."));
}

function Compos(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Here's the part of composition (Unknown input):     ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), props.children, " ('children' is a default var)      ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), props.myCompos, " ('myCompos' is customized)         ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
}



/***/ }),

/***/ "./src/components/app/main.js":
/*!************************************!*\
  !*** ./src/components/app/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.jsx */ "./src/components/app/app.jsx");
/* harmony import */ var _propsTest_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propsTest.jsx */ "./src/components/app/propsTest.jsx");
/* harmony import */ var _tempTrans_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tempTrans.jsx */ "./src/components/app/tempTrans.jsx");
/* harmony import */ var _compositionTest_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compositionTest.jsx */ "./src/components/app/compositionTest.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // 引用App組件

 // 引用App組件


 // 檔案變多時則繼續引用其他組件

var MainApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainApp, _React$Component);

  function MainApp() {
    _classCallCheck(this, MainApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainApp).apply(this, arguments));
  }

  _createClass(MainApp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "1. Props Test:"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_propsTest_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "2. State & Event+Fetch Test:"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tempTrans_jsx__WEBPACK_IMPORTED_MODULE_4__["BtnShowDiv"], {
        btnText: "Show Temperature Calculater",
        inside: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tempTrans_jsx__WEBPACK_IMPORTED_MODULE_4__["TempTrans"], null)
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "3. Composition Test:"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_compositionTest_jsx__WEBPACK_IMPORTED_MODULE_5__["UseCompos"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "4. "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
    }
  }]);

  return MainApp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainApp, null), document.getElementById('app')); //export default MainApp;  // 輸出供index.js引用

/***/ }),

/***/ "./src/components/app/propsTest.jsx":
/*!******************************************!*\
  !*** ./src/components/app/propsTest.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PropsTest =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropsTest, _React$Component);

  function PropsTest(props) {
    var _this;

    _classCallCheck(this, PropsTest);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropsTest).call(this, props)); // 繼承props屬性

    _this.state = {
      textState: "This text was set by state." // (3)

    };
    return _this;
  }

  _createClass(PropsTest, [{
    key: "render",
    value: function render() {
      // (1)直接取props預設值 (2)直接指定props (3)使用State更改組件props
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyText, null), "                                      ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyText, {
        text: "This text was set manually."
      }), "   ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyText, {
        text: this.state.textState
      }), "          ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
    }
  }]);

  return PropsTest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MyText =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MyText, _React$Component2);

  function MyText() {
    _classCallCheck(this, MyText);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyText).apply(this, arguments));
  }

  _createClass(MyText, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.text);
    }
  }]);

  return MyText;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MyText.defaultProps = {
  // (1)
  text: "This text was set by defaultProps."
};
/* harmony default export */ __webpack_exports__["default"] = (PropsTest);

/***/ }),

/***/ "./src/components/app/tempTrans.jsx":
/*!******************************************!*\
  !*** ./src/components/app/tempTrans.jsx ***!
  \******************************************/
/*! exports provided: BtnShowDiv, TempTrans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnShowDiv", function() { return BtnShowDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempTrans", function() { return TempTrans; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "./node_modules/stream-http/index.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TempTrans =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TempTrans, _React$Component);

  function TempTrans() {
    var _this;

    _classCallCheck(this, TempTrans);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TempTrans).call(this)); // 繼承Props

    _this.state = {
      output: 'Default output state'
    }; // 設定預設state

    _this.HandlerCal = _this.HandlerCal.bind(_assertThisInitialized(_this)); // 綁定Handler

    return _this;
  }

  _createClass(TempTrans, [{
    key: "HandlerCal",
    value: function HandlerCal(event) {
      var _this2 = this;

      var input = event.target.value; // input值

      var testPass = /\d$/.test(input); // 檢查input須為全數字

      if (input && testPass) {
        // input有值且為數字 -> 傳送至後端API
        fetch("/Home/TempTrans", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            data: input
          })
        }).then(function (res) {
          return res.json();
        }) // 將Response轉成Json格式
        .then(function (result) {
          // 取得API傳回結果
          _this2.setState({
            output: result
          });
        }, function (error) {
          // 取得API傳回的錯誤
          alert('Error occured - ' + error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", null, "Temperature"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Input the Celsius degree\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.HandlerCal
      }), "   ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u3000\u3000\u2193  (Fetch to Server & Return the Result)  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Here's the Fahrenheit degree\uFF1A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.output,
        readOnly: true
      }), " (State Value) ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
    }
  }]);

  return TempTrans;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var BtnShowDiv =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(BtnShowDiv, _React$Component2);

  // 顯示&隱藏溫度轉換器的按鈕
  function BtnShowDiv() {
    var _this3;

    _classCallCheck(this, BtnShowDiv);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BtnShowDiv).call(this)); // 繼承

    _this3.state = {
      // 設定預設state
      showTransfer: false
    };
    _this3.handleShowHide = _this3.handleShowHide.bind(_assertThisInitialized(_this3)); // 綁定功能

    return _this3;
  }

  _createClass(BtnShowDiv, [{
    key: "handleShowHide",
    value: function handleShowHide(e) {
      // 被綁定功能
      var Show = this.state.showTransfer;
      this.setState({
        showTransfer: Show ? false : true
      }); // 切換state為另一個狀態
    }
  }, {
    key: "render",
    value: function render() {
      var IsDisplayed = {
        display: this.state.showTransfer ? '' : 'none' // 根據state更改CSS

      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "The state of \"showTransfer\" is: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        readOnly: true,
        type: "text",
        value: this.state.showTransfer,
        style: {
          width: "30px"
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.handleShowHide
      }, this.props.btnText), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: IsDisplayed
      }, this.props.inside)); // 點擊按鈕->切換state、根據state->轉換style；props.btnText=自訂按鈕、props.inside=被顯示內容
    }
  }]);

  return BtnShowDiv;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BtnShowDiv.defaultProps = {
  // 預設Prop的值
  btnText: "Show Something...",
  inside: "Insert a <Html Tag /> Here."
};


/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2NvbXBvc2l0aW9uVGVzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL3Byb3BzVGVzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL3RlbXBUcmFucy5qc3giLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT81MTYzIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVXNlQ29tcG9zIiwiQ29tcG9zIiwicHJvcHMiLCJjaGlsZHJlbiIsIm15Q29tcG9zIiwiTWFpbkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlByb3BzVGVzdCIsInN0YXRlIiwidGV4dFN0YXRlIiwiTXlUZXh0IiwidGV4dCIsImRlZmF1bHRQcm9wcyIsIlRlbXBUcmFucyIsIm91dHB1dCIsIkhhbmRsZXJDYWwiLCJiaW5kIiwiZXZlbnQiLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwidGVzdFBhc3MiLCJ0ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImVycm9yIiwiYWxlcnQiLCJCdG5TaG93RGl2Iiwic2hvd1RyYW5zZmVyIiwiaGFuZGxlU2hvd0hpZGUiLCJlIiwiU2hvdyIsIklzRGlzcGxheWVkIiwiZGlzcGxheSIsIndpZHRoIiwiYnRuVGV4dCIsImluc2lkZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFD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ZSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2NvbXBvbmVudHMvYXBwL21haW4uanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyDoh6roqILntYTku7YgKHJlbmRlcumZkOWumnJldHVybuS4gOWAi1RBRylcclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPkhlbGxvIFJlYWN0IFdvcmxkITwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBVc2VDb21wb3MgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb21wb3MgbXlDb21wb3M9XCJUaGlzIGlzIGNyZWF0ZWQgYnkgcHJvcHMubXlDb21wb3MuXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5UaGlzIGlzIGNyZWF0ZWQgYnkgcHJvcHMuY2hpbGRyZW4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0NvbXBvcz5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbXBvcyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBIZXJlJ3MgdGhlIHBhcnQgb2YgY29tcG9zaXRpb24gKFVua25vd24gaW5wdXQpOiAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn0gKCdjaGlsZHJlbicgaXMgYSBkZWZhdWx0IHZhcikgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge3Byb3BzLm15Q29tcG9zfSAoJ215Q29tcG9zJyBpcyBjdXN0b21pemVkKSAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBVc2VDb21wb3MgfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLmpzeCc7ICAgLy8g5byV55SoQXBw57WE5Lu2XHJcbmltcG9ydCBQcm9wc1Rlc3QgZnJvbSAnLi9wcm9wc1Rlc3QuanN4JzsgICAvLyDlvJXnlKhBcHDntYTku7ZcclxuaW1wb3J0IHsgQnRuU2hvd0RpdiwgVGVtcFRyYW5zIH0gZnJvbSAnLi90ZW1wVHJhbnMuanN4JztcclxuaW1wb3J0IHsgVXNlQ29tcG9zIH0gZnJvbSAnLi9jb21wb3NpdGlvblRlc3QuanN4JztcclxuLy8g5qqU5qGI6K6K5aSa5pmC5YmH57m857qM5byV55So5YW25LuW57WE5Lu2XHJcblxyXG5jbGFzcyBNYWluQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFwcCAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxiPjEuIFByb3BzIFRlc3Q6PC9iPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxQcm9wc1Rlc3QgLz4gIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxiPjIuIFN0YXRlICYgRXZlbnQrRmV0Y2ggVGVzdDo8L2I+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEJ0blNob3dEaXYgYnRuVGV4dD1cIlNob3cgVGVtcGVyYXR1cmUgQ2FsY3VsYXRlclwiIGluc2lkZT17PFRlbXBUcmFucyAvPn0gLz4gPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGI+My4gQ29tcG9zaXRpb24gVGVzdDo8L2I+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZUNvbXBvcyAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxiPjQuIDwvYj4gPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPE1haW5BcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgTWFpbkFwcDsgIC8vIOi8uOWHuuS+m2luZGV4Lmpz5byV55SoIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFByb3BzVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgICAvLyDnubzmib9wcm9wc+WxrOaAp1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRleHRTdGF0ZTogXCJUaGlzIHRleHQgd2FzIHNldCBieSBzdGF0ZS5cIiAgICAvLyAoMylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkgeyAgLy8gKDEp55u05o6l5Y+WcHJvcHPpoJDoqK3lgLwgKDIp55u05o6l5oyH5a6acHJvcHMgKDMp5L2/55SoU3RhdGXmm7TmlLnntYTku7Zwcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TXlUZXh0IC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxNeVRleHQgdGV4dD1cIlRoaXMgdGV4dCB3YXMgc2V0IG1hbnVhbGx5LlwiIC8+ICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TXlUZXh0IHRleHQ9e3RoaXMuc3RhdGUudGV4dFN0YXRlfSAvPiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTXlUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLnRleHR9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTXlUZXh0LmRlZmF1bHRQcm9wcyA9IHsgLy8gKDEpXHJcbiAgICB0ZXh0OiBcIlRoaXMgdGV4dCB3YXMgc2V0IGJ5IGRlZmF1bHRQcm9wcy5cIlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9wc1Rlc3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTUVUSE9EUyB9IGZyb20gJ2h0dHAnO1xyXG5cclxuY2xhc3MgVGVtcFRyYW5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnubzmib9Qcm9wc1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG91dHB1dDogJ0RlZmF1bHQgb3V0cHV0IHN0YXRlJyB9ICAgICAgIC8vIOioreWumumgkOiorXN0YXRlXHJcblxyXG4gICAgICAgIHRoaXMuSGFuZGxlckNhbCA9IHRoaXMuSGFuZGxlckNhbC5iaW5kKHRoaXMpOyAgIC8vIOe2geWumkhhbmRsZXJcclxuICAgIH1cclxuXHJcbiAgICBIYW5kbGVyQ2FsKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7ICAgLy8gaW5wdXTlgLxcclxuICAgICAgICBjb25zdCB0ZXN0UGFzcyA9IC9cXGQkLy50ZXN0KGlucHV0KTsgLy8g5qqi5p+laW5wdXTpoIjngrrlhajmlbjlrZdcclxuXHJcbiAgICAgICAgaWYgKGlucHV0ICYmIHRlc3RQYXNzKSB7ICAgICAgICAgICAgLy8gaW5wdXTmnInlgLzkuJTngrrmlbjlrZcgLT4g5YKz6YCB6Iez5b6M56uvQVBJXHJcbiAgICAgICAgICAgIGZldGNoKFwiL0hvbWUvVGVtcFRyYW5zXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGF0YTogaW5wdXQgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKSAgICAvLyDlsIdSZXNwb25zZei9ieaIkEpzb27moLzlvI9cclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHsgICAgICAgICAgIC8vIOWPluW+l0FQSeWCs+Wbnue1kOaenFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3V0cHV0OiByZXN1bHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHsgICAgICAgICAgICAvLyDlj5blvpdBUEnlgrPlm57nmoTpjK/oqqRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yIG9jY3VyZWQgLSAnICsgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8bGVnZW5kPlRlbXBlcmF0dXJlPC9sZWdlbmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGI+SW5wdXQgdGhlIENlbHNpdXMgZGVncmVl77yaPC9iPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuSGFuZGxlckNhbH0+PC9pbnB1dD4gICA8YnIgLz48YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICDjgIDjgIDihpMgIChGZXRjaCB0byBTZXJ2ZXIgJiBSZXR1cm4gdGhlIFJlc3VsdCkgIDxiciAvPjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxiPkhlcmUncyB0aGUgRmFocmVuaGVpdCBkZWdyZWXvvJo8L2I+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdXRwdXR9IHJlYWRPbmx5PjwvaW5wdXQ+IChTdGF0ZSBWYWx1ZSkgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQnRuU2hvd0RpdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7ICAgICAgICAvLyDpoa/npLom6Zqx6JeP5rqr5bqm6L2J5o+b5Zmo55qE5oyJ6YiVXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpOyAgICAgICAgICAgIC8vIOe5vOaJv1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ICAgICAgLy8g6Kit5a6a6aCQ6Kitc3RhdGVcclxuICAgICAgICAgICAgc2hvd1RyYW5zZmVyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZVNob3dIaWRlID0gdGhpcy5oYW5kbGVTaG93SGlkZS5iaW5kKHRoaXMpOyAgIC8vIOe2geWumuWKn+iDvVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNob3dIaWRlKGUpIHsgICAgIC8vIOiiq+e2geWumuWKn+iDvVxyXG4gICAgICAgIHZhciBTaG93ID0gdGhpcy5zdGF0ZS5zaG93VHJhbnNmZXI7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dUcmFuc2ZlcjogU2hvdyA/IGZhbHNlIDogdHJ1ZSB9KTsgICAvLyDliIfmj5tzdGF0ZeeCuuWPpuS4gOWAi+eLgOaFi1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBJc0Rpc3BsYXllZCA9IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93VHJhbnNmZXIgPyAnJyA6ICdub25lJyAgICAgIC8vIOagueaTmnN0YXRl5pu05pS5Q1NTXHJcbiAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+VGhlIHN0YXRlIG9mIFwic2hvd1RyYW5zZmVyXCIgaXM6IDxpbnB1dCByZWFkT25seSB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dUcmFuc2Zlcn0gc3R5bGU9e3sgd2lkdGg6IFwiMzBweFwiIH19PjwvaW5wdXQ+PC9kaXY+PGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93SGlkZX0+e3RoaXMucHJvcHMuYnRuVGV4dH08L2J1dHRvbj4gPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtJc0Rpc3BsYXllZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW5zaWRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApICAgLy8g6bue5pOK5oyJ6YiVLT7liIfmj5tzdGF0ZeOAgeagueaTmnN0YXRlLT7ovYnmj5tzdHlsZe+8m3Byb3BzLmJ0blRleHQ96Ieq6KiC5oyJ6YiV44CBcHJvcHMuaW5zaWRlPeiiq+mhr+ekuuWFp+WuuVxyXG4gICAgfVxyXG59XHJcblxyXG5CdG5TaG93RGl2LmRlZmF1bHRQcm9wcyA9IHsgICAgIC8vIOmgkOiorVByb3DnmoTlgLxcclxuICAgIGJ0blRleHQ6IFwiU2hvdyBTb21ldGhpbmcuLi5cIixcclxuICAgIGluc2lkZTogXCJJbnNlcnQgYSA8SHRtbCBUYWcgLz4gSGVyZS5cIlxyXG59XHJcblxyXG5leHBvcnQgeyBCdG5TaG93RGl2LCBUZW1wVHJhbnN9O1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9