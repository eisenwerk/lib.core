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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/enum.js":
/*!*********************!*\
  !*** ./src/enum.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Enum = function () {\n    function Enum(declaration) {\n        var _this = this;\n\n        _classCallCheck(this, Enum);\n\n        if (!_.isArray(declaration)) {\n            throw new TypeError('Illegal enum declaration');\n        }\n\n        declaration.filter(function (item) {\n            item.key = item.key.toString().trim().toUpperCase();\n            return _.isStringNotEmpty(item.key);\n        });\n\n        this._items = declaration || [];\n        declaration.forEach(function (item) {\n            _this['KEY_' + item.key] = item.key;\n        });\n    }\n\n    _createClass(Enum, [{\n        key: 'getKey',\n        value: function getKey(value) {\n            if (!this._k2v) {\n                this._k2v = this.makeMap('value', 'key');\n            }\n\n            return this._k2v[value];\n        }\n    }, {\n        key: 'getValue',\n        value: function getValue(key) {\n            if (!this._v2k) {\n                // todo: this will not work well with value duplicates\n                this._v2k = this.makeMap('key', 'value');\n            }\n\n            return this._v2k[key] || null;\n        }\n    }, {\n        key: 'getKeys',\n        value: function getKeys() {\n            return this.get('key');\n        }\n    }, {\n        key: 'getValues',\n        value: function getValues() {\n            return this.get('value');\n        }\n    }, {\n        key: 'getValuesByKeys',\n        value: function getValuesByKeys(keys) {\n            var _this2 = this;\n\n            if (_.isArrayNotEmpty(keys)) {\n                return keys.map(function (key) {\n                    return _this2.getValue(key);\n                });\n            }\n\n            return [];\n        }\n    }, {\n        key: 'get',\n        value: function get(key) {\n            return this._items.reduce(function (result, item) {\n                if (key in item) {\n                    result.push(item[key]);\n                }\n                return result;\n            }, []);\n        }\n    }, {\n        key: 'getItemByKey',\n        value: function getItemByKey(key) {\n            if (!this._k2o) {\n                this._k2o = this._items.reduce(function (result, item) {\n                    result[item.key] = item;\n                    return result;\n                }, {});\n            }\n\n            return this._k2o[key] || null;\n        }\n    }, {\n        key: 'getItemsByValue',\n        value: function getItemsByValue() {\n            // todo: (mind the plural notation)\n        }\n    }, {\n        key: 'isLegalKey',\n        value: function isLegalKey(key) {\n            return _.isObjectNotEmpty(this.getItemByKey(key));\n        }\n    }, {\n        key: 'selectize',\n        value: function selectize() {\n            var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n            var source = this._items;\n            if (_.isStringNotEmpty(search)) {\n                search = search.toLowerCase();\n                source = source.filter(function (item) {\n                    // todo: search also by additional keys in the item\n                    return item.key.toLowerCase().indexOf(search) >= 0 || item.value.toLowerCase().indexOf(search) >= 0;\n                });\n            }\n\n            return source.map(function (item) {\n                return {\n                    value: item.key,\n                    label: item.value\n                };\n            });\n        }\n    }, {\n        key: 'makeMap',\n        value: function makeMap() {\n            var keyAs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n            var valueAs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n            keyAs = keyAs || 'key';\n            valueAs = valueAs || 'value';\n\n            return this._items.reduce(function (result, item) {\n                result[item[keyAs]] = item[valueAs];\n                return result;\n            }, {});\n        }\n    }, {\n        key: 'map',\n        value: function map(cb) {\n            if (_.isFunction(cb)) {\n                return this._items.map(cb);\n            }\n\n            return [];\n        }\n    }, {\n        key: 'forEach',\n        value: function forEach(cb) {\n            if (_.isFunction(cb)) {\n                this._items.forEach(cb);\n            }\n        }\n    }, {\n        key: 'find',\n        value: function find(cb) {\n            if (_.isFunction(cb)) {\n                return this._items.find(cb);\n            }\n\n            return false;\n        }\n    }, {\n        key: 'add',\n        value: function add(item) {\n            this._items.push(item);\n            this.clearCaches();\n        }\n    }, {\n        key: 'clearCaches',\n        value: function clearCaches() {\n            this._k2v = null;\n            this._v2k = null;\n            this._k2o = null;\n        }\n    }, {\n        key: 'sort',\n        value: function sort(attribute, comparator) {\n            this._items.sort(function (a, b) {\n                return comparator(a[attribute], b[attribute]);\n            });\n        }\n    }, {\n        key: 'clone',\n        value: function clone() {\n            return new this.constructor(_.deepClone(this._items));\n        }\n    }, {\n        key: 'getRandomItem',\n        value: function getRandomItem() {\n            return _.sample(this._items);\n        }\n    }]);\n\n    return Enum;\n}();\n\nexports.default = Enum;\n\n//# sourceURL=webpack:///./src/enum.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nObject.defineProperty(exports, 'Util', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_util).default;\n  }\n});\n\nvar _enum = __webpack_require__(/*! ./enum.js */ \"./src/enum.js\");\n\nObject.defineProperty(exports, 'Enum', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_enum).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _urlParse = __webpack_require__(/*! url-parse */ \"url-parse\");\n\nvar _urlParse2 = _interopRequireDefault(_urlParse);\n\nvar _underscoreMixin = __webpack_require__(/*! underscore-mixin */ \"underscore-mixin\");\n\nvar _underscoreMixin2 = _interopRequireDefault(_underscoreMixin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Util = function () {\n    function Util() {\n        _classCallCheck(this, Util);\n    }\n\n    _createClass(Util, null, [{\n        key: 'getAlphabeticalComparator',\n        value: function getAlphabeticalComparator() {\n            if ('localeCompare' in String.prototype) {\n                return function (a, b) {\n                    return a.localeCompare(b);\n                };\n            } else {\n                return this.getNumericComparator(a.order, b.order);\n            }\n        }\n    }, {\n        key: 'getNumericComparator',\n        value: function getNumericComparator() {\n            return function (a, b) {\n                if (a < b) return -1;\n                if (a > b) return 1;\n                return 0;\n            };\n        }\n    }, {\n        key: 'transformCamel',\n        value: function transformCamel(string) {\n            if (!_underscoreMixin2.default.isStringNotEmpty(string)) {\n                return '';\n            }\n\n            if (!this._tcRegExp) {\n                this._tcRegExp = /([A-Z]{1})/g;\n            }\n\n            return _underscoreMixin2.default.uCFirst(string.replace(this._tcRegExp, ' $1').trim());\n        }\n    }, {\n        key: 'parseUrl',\n        value: function parseUrl(url) {\n            url = new _urlParse2.default(url);\n\n            var q = url.query;\n            url.params = {};\n            if (q) {\n                url.params = q.trim().replace(/^\\?/, '').split('&').reduce(function (result, item) {\n                    item = item.split('=');\n                    result[item[0]] = decodeURIComponent(item[1]);\n\n                    return result;\n                }, {});\n            }\n\n            return url;\n        }\n    }]);\n\n    return Util;\n}();\n\nexports.default = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "underscore-mixin":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = _;\n\n//# sourceURL=webpack:///external_%22_%22?");

/***/ }),

/***/ "url-parse":
/*!***************************!*\
  !*** external "URLParse" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = URLParse;\n\n//# sourceURL=webpack:///external_%22URLParse%22?");

/***/ })

/******/ });