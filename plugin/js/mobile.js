/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/***/ (() => {

eval("jQuery.noConflict();\n\n(function($, PLUGIN_ID) {\n  'use strict';\n\n  kintone.events.on('mobile.app.record.index.show', function() {\n    var config = kintone.plugin.app.getConfig(PLUGIN_ID);\n\n    var spaceElement = kintone.mobile.app.getHeaderSpaceElement();\n    var fragment = document.createDocumentFragment();\n    var headingEl = document.createElement('h3');\n    var messageEl = document.createElement('p');\n\n    messageEl.classList.add('plugin-space-message');\n    messageEl.textContent = config.message;\n    headingEl.classList.add('plugin-space-heading');\n    headingEl.textContent = 'Hello kintone plugin!';\n\n    fragment.appendChild(headingEl);\n    fragment.appendChild(messageEl);\n    spaceElement.appendChild(fragment);\n  });\n\n})(jQuery, kintone.$PLUGIN_ID);\n\n\n//# sourceURL=webpack://plugin/./src/mobile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/mobile.js"]();
/******/ 	
/******/ })()
;