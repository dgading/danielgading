/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_post_teaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/post-teaser */ \"./src/js/post-teaser.js\");\n/* harmony import */ var _js_post_teaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_post_teaser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_main_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main-nav */ \"./src/js/main-nav.js\");\n/* harmony import */ var _js_main_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_nav__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/main-nav.js":
/*!****************************!*\
  !*** ./src/js/main-nav.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mainNav = document.getElementById('site-navigation');\nconst menuButton = document.getElementById('menu-toggle');\nconst menuStyle = window.getComputedStyle(mainNav);\nconst rootElement = document.documentElement;\n\nmenuButton.addEventListener('click', () => {\n  if(mainNav.classList.contains('menu-closed')) {\n    mainNav.classList.remove('menu-closed');\n    menuButton.classList.remove('closed');\n    rootElement.style.setProperty('--nav-width', '150px');\n  } else {\n    mainNav.classList.add('menu-closed');\n    menuButton.classList.add('closed');\n    rootElement.style.setProperty('--nav-width', '75px');\n  }\n});\n\n\n//# sourceURL=webpack:///./src/js/main-nav.js?");

/***/ }),

/***/ "./src/js/post-teaser.js":
/*!*******************************!*\
  !*** ./src/js/post-teaser.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const postArticles = document.getElementById('main').getElementsByClassName('post');\n\n// if (postArticles.length > 1) {\n//   for(let i = 0; i <= 1; i++) {\n//     const thisPost = document.getElementsByClassName('post')[i];\n\n//     const thisHeader = thisPost.getElementsByTagName('header');\n//     const thisThumbnail = thisPost.getElementsByTagName('img');\n\n//     const newHeight = thisHeader[0].offsetHeight + thisThumbnail[0].height;\n//     console.log(thisThumbnail[0].height)\n//     thisPost.setAttribute('style', 'height: ' + newHeight + 'px; overflow: hidden;');\n//   }\n// }\n\n//# sourceURL=webpack:///./src/js/post-teaser.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ })

/******/ });