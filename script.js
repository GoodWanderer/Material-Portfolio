/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/hello.js":
/*!*************************!*\
  !*** ./src/js/hello.js ***!
  \*************************/
/***/ (function() {


const t = 1727999;
let k = localStorage.getItem('sec');
if (localStorage.getItem('sec') == null) {
  k = t;
  const k2 = Math.floor(new Date().getTime() / 1000) + k;
  localStorage.setItem('sec', k2);
} else {
  k = k - Math.floor(new Date().getTime() / 1000);
}

function err() {
  elem = document.querySelector('.stock-start__timer');
  elem.innerHTML = '<div style="color: #fffc;">Ошибка! Обратить к администрации</div>';
}

if (k > t || k < 0) {
  err();
}

try {

  let timer;
  countdown();

  function countdown(){ 
    let d = Math.floor(k / 3600 / 24),
    h = Math.floor(k / 3600 % 24),
    m = Math.floor(k % 3600 / 60),
    s = Math.floor( k % 60 );
    document.getElementById('days').innerHTML = (d < 10) ? `0${d}`: d;
    document.getElementById('hours').innerHTML = (h < 10) ? `0${h}`: h;
    document.getElementById('minutes').innerHTML = (m < 10) ? `0${m}`: m;
    document.getElementById('seconds').innerHTML = (s < 10) ? `0${s}`: s;
    k--;
    if (k<0)clearTimeout(timer);
    else timer = setTimeout(countdown, 1000);
}

} catch (err) {

  err();

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello */ "./src/js/hello.js");
/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hello__WEBPACK_IMPORTED_MODULE_1__);




}();
/******/ })()
;
//# sourceMappingURL=script.js.map
