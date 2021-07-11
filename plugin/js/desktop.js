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

/***/ "./src/desktop.js":
/*!************************!*\
  !*** ./src/desktop.js ***!
  \************************/
/***/ (() => {

eval("jQuery.noConflict();\n\n(function ($, PLUGIN_ID) {\n  'use strict';\n\n  var config = kintone.plugin.app.getConfig(PLUGIN_ID);\n  console.log(config);\n  console.log('hello');\n  var sub = kintone.app.record.getFieldElement('suburb');\n  console.log(sub);\n  var events = [\"app.record.create.change.\".concat(config.postcode), \"app.record.edit.change.\".concat(config.postcode)];\n  kintone.events.on(events, function (event) {\n    var postalcode = event.changes.field.value;\n    kintone.proxy(\"https://v0.postcodeapi.com.au/suburbs/\".concat(postalcode, \".json\"), 'GET', {}, {}, function (body, status, headers) {\n      // success\n      var resp = JSON.parse(body);\n      console.log(resp);\n      var obj = kintone.app.record.get();\n      obj.record[config.state].value = resp[0].state.name;\n      kintone.app.record.set(obj);\n      var dropdown = document.createElement('select');\n      dropdown.innerText = '';\n      resp.forEach(function (value, index) {\n        var el = document.createElement('option');\n        var node = document.createTextNode(value.name);\n        el.appendChild(node);\n        dropdown.appendChild(el);\n      });\n      kintone.app.record.getSpaceElement('space').appendChild(dropdown); //console.log(event.record[config.state]);\n      //insertAdjacentElement('beforeend', dropdown);\n\n      return event;\n    }, function (error) {\n      // error\n      console.log(error); // proxy APIのレスポンスボディ(文字列)を表示\n    });\n  });\n})(jQuery, kintone.$PLUGIN_ID);\n\n//# sourceURL=webpack://plugin/./src/desktop.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/desktop.js"]();
/******/ 	
/******/ })()
;