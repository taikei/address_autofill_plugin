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

eval("jQuery.noConflict();\n\n(function($, PLUGIN_ID){\n  'use strict';\n\n  let config = kintone.plugin.app.getConfig(PLUGIN_ID);\n  console.log(config);\n\n  console.log('hello');\n\n  const sub = kintone.app.record.getFieldElement('suburb');\n  console.log(sub);\n \n  \n  const events = [`app.record.create.change.${config.postcode}`,\n                  `app.record.edit.change.${config.postcode}`]\n  \n  kintone.events.on(events, (event) => {\n\n    let postalcode = event.changes.field.value;\n    kintone.proxy(`https://v0.postcodeapi.com.au/suburbs/${postalcode}.json`, 'GET', {}, {}, function(body, status, headers) {\n      // success\n    let resp = JSON.parse(body);\n    console.log(resp);\n    \n    const obj = kintone.app.record.get();\n    obj.record[config.state].value = resp[0].state.name;\n    kintone.app.record.set(obj);\n\n\n\n  　const dropdown = document.createElement('select');\n    dropdown.innerText = '';\n    resp.forEach((value, index) => {\n      const el = document.createElement('option');\n      const node = document.createTextNode(value.name);\n      el.appendChild(node);\n      dropdown.appendChild(el);\n    })\n\n    kintone.app.record.getSpaceElement('space').appendChild(dropdown);\n\n    //console.log(event.record[config.state]);\n    \n    //insertAdjacentElement('beforeend', dropdown);\n  \n    \n    \n    \n\n\n\n\n\n    \n\n\n\n\n      return event;\n\n\n    }, function(error) {\n      // error\n      console.log(error); // proxy APIのレスポンスボディ(文字列)を表示\n    });\n    \n    \n  });\n\n\n\n})(jQuery, kintone.$PLUGIN_ID);\n\n\n\n//# sourceURL=webpack://plugin/./src/desktop.js?");

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