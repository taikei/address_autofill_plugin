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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (() => {

eval("jQuery.noConflict();\n\n(function ($, PLUGIN_ID) {\n  'use strict';\n\n  let $form = $('.js-submit-settings');\n  let $cancelButton = $('.js-cancel-button');\n  let $postcodeField = $('#config-select-postcode');\n  let $addressField = $('#config-select-address');\n  let $suburbField = $('#config-select-suburb');\n  let $stateField = $('#config-select-state');\n  let fieldArr =[];\n  //console.log(Kuc)\n\nconsole.log();\n\n   // 前回の設定情報を反映 (Bring previous configuration to the page)\n   $(document).ready(()=>{\n    let conf = kintone.plugin.app.getConfig(PLUGIN_ID);\n    \n    \n  })\nßß\n\n  //　フィールドの一覧を取得 (fetch fields list)\n  kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', {'app': kintone.app.getId()}, function(resp) {\n    // success\n    let fieldProperties = resp['properties'];\n\n    jQuery.each(fieldProperties, (key, value) => {\n       $postcodeField.append(`<option id=\"${value.code}\">${value.label}</option>`);\n       $addressField.append(`<option id=\"${value.code}\">${value.label}</option>`);\n       $suburbField.append(`<option id=\"${value.code}\">${value.label}</option>`);\n       $stateField.append(`<option id=\"${value.code}\">${value.label}</option>`);\n       fieldArr.push({name: value.label, code: value.code});\n    })\n    console.log(fieldArr);\n  }, function(error) {\n    // error\n    console.log(error);\n  });\n\n\n  \n  $form.submit( e => {\n    e.preventDefault();\n\n    let config = {}\n\n    fieldArr.forEach((val, ind) => {\n      if(val.name === $postcodeField.val()){\n        config.postcode = val.code;\n      } \n      if(val.name === $addressField.val()){\n        config.address = val.code;\n      } \n      if(val.name === $suburbField.val()){\n        config.suburb = val.code;\n      } \n      if(val.name === $stateField.val()){\n        config.state = val.code;\n      } \n    })\n\n    kintone.plugin.app.setConfig(config, () => {\n      window.location.href = '../../flow?app=' + kintone.app.getId();\n    });\n\n  });\n\n  $cancelButton.on('click', function () {\n    window.location.href = '../../' + kintone.app.getId() + '/plugin/';\n  });\n})(jQuery, kintone.$PLUGIN_ID);\n\n\n//# sourceURL=webpack://plugin/./src/config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/config.js"]();
/******/ 	
/******/ })()
;