import { s as setUpMiniBuyButtons } from '../bundle/shared.4eb58ca5.js';
import { j as getDefaultExportFromCjs, A as Accordion, i as compareAdd, g as compareDelete, O as Oe, k as sendSearchFilters, l as sendFilters, f as formatPrice } from './hoisted-ee803d20.js';

setUpMiniBuyButtons();

var tuiPagination = {exports: {}};

/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(window, function() {
	return /******/ (function(modules) { // webpackBootstrap
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
	/******/ 	__webpack_require__.p = "dist";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 10);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Extend the target object from other objects.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * @module object
	 */

	/**
	 * Extend the target object from other objects.
	 * @param {object} target - Object that will be extended
	 * @param {...object} objects - Objects as sources
	 * @returns {object} Extended object
	 * @memberof module:object
	 */
	function extend(target, objects) { // eslint-disable-line no-unused-vars
	  var hasOwnProp = Object.prototype.hasOwnProperty;
	  var source, prop, i, len;

	  for (i = 1, len = arguments.length; i < len; i += 1) {
	    source = arguments[i];
	    for (prop in source) {
	      if (hasOwnProp.call(source, prop)) {
	        target[prop] = source[prop];
	      }
	    }
	  }

	  return target;
	}

	module.exports = extend;


	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is undefined or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Check whether the given variable is undefined or not.
	 * If the given variable is undefined, returns true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is undefined?
	 * @memberof module:type
	 */
	function isUndefined(obj) {
	  return obj === undefined; // eslint-disable-line no-undefined
	}

	module.exports = isUndefined;


	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is an instance of Array or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Check whether the given variable is an instance of Array or not.
	 * If the given variable is an instance of Array, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is array instance?
	 * @memberof module:type
	 */
	function isArray(obj) {
	  return obj instanceof Array;
	}

	module.exports = isArray;


	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var isArray = __webpack_require__(2);
	var forEachArray = __webpack_require__(17);
	var forEachOwnProperties = __webpack_require__(6);

	/**
	 * @module collection
	 */

	/**
	 * Execute the provided callback once for each property of object(or element of array) which actually exist.
	 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
	 * If the callback function returns false, the loop will be stopped.
	 * Callback function(iteratee) is invoked with three arguments:
	 *  1) The value of the property(or The value of the element)
	 *  2) The name of the property(or The index of the element)
	 *  3) The object being traversed
	 * @param {Object} obj The object that will be traversed
	 * @param {function} iteratee Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @memberof module:collection
	 * @example
	 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
	 *
	 * var sum = 0;
	 *
	 * forEach([1,2,3], function(value){
	 *     sum += value;
	 * });
	 * alert(sum); // 6
	 *
	 * // In case of Array-like object
	 * var array = Array.prototype.slice.call(arrayLike); // change to array
	 * forEach(array, function(value){
	 *     sum += value;
	 * });
	 */
	function forEach(obj, iteratee, context) {
	  if (isArray(obj)) {
	    forEachArray(obj, iteratee, context);
	  } else {
	    forEachOwnProperties(obj, iteratee, context);
	  }
	}

	module.exports = forEach;


	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is a string or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Check whether the given variable is a string or not.
	 * If the given variable is a string, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is string?
	 * @memberof module:type
	 */
	function isString(obj) {
	  return typeof obj === 'string' || obj instanceof String;
	}

	module.exports = isString;


	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is a function or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Check whether the given variable is a function or not.
	 * If the given variable is a function, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is function?
	 * @memberof module:type
	 */
	function isFunction(obj) {
	  return obj instanceof Function;
	}

	module.exports = isFunction;


	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Execute the provided callback once for each property of object which actually exist.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Execute the provided callback once for each property of object which actually exist.
	 * If the callback function returns false, the loop will be stopped.
	 * Callback function(iteratee) is invoked with three arguments:
	 *  1) The value of the property
	 *  2) The name of the property
	 *  3) The object being traversed
	 * @param {Object} obj The object that will be traversed
	 * @param {function} iteratee  Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @memberof module:collection
	 * @example
	 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
	 *
	 * var sum = 0;
	 *
	 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
	 *     sum += value;
	 * });
	 * alert(sum); // 6
	 */
	function forEachOwnProperties(obj, iteratee, context) {
	  var key;

	  context = context || null;

	  for (key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      if (iteratee.call(context, obj[key], key, obj) === false) {
	        break;
	      }
	    }
	  }
	}

	module.exports = forEachOwnProperties;


	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview
	 * This module provides a function to make a constructor
	 * that can inherit from the other constructors like the CLASS easily.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var inherit = __webpack_require__(18);
	var extend = __webpack_require__(0);

	/**
	 * @module defineClass
	 */

	/**
	 * Help a constructor to be defined and to inherit from the other constructors
	 * @param {*} [parent] Parent constructor
	 * @param {Object} props Members of constructor
	 *  @param {Function} props.init Initialization method
	 *  @param {Object} [props.static] Static members of constructor
	 * @returns {*} Constructor
	 * @memberof module:defineClass
	 * @example
	 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
	 *
	 * //-- #2. Use property --//
	 * var Parent = defineClass({
	 *     init: function() { // constuructor
	 *         this.name = 'made by def';
	 *     },
	 *     method: function() {
	 *         // ...
	 *     },
	 *     static: {
	 *         staticMethod: function() {
	 *              // ...
	 *         }
	 *     }
	 * });
	 *
	 * var Child = defineClass(Parent, {
	 *     childMethod: function() {}
	 * });
	 *
	 * Parent.staticMethod();
	 *
	 * var parentInstance = new Parent();
	 * console.log(parentInstance.name); //made by def
	 * parentInstance.staticMethod(); // Error
	 *
	 * var childInstance = new Child();
	 * childInstance.method();
	 * childInstance.childMethod();
	 */
	function defineClass(parent, props) {
	  var obj;

	  if (!props) {
	    props = parent;
	    parent = null;
	  }

	  obj = props.init || function() {};

	  if (parent) {
	    inherit(obj, parent);
	  }

	  if (props.hasOwnProperty('static')) {
	    extend(obj, props['static']);
	    delete props['static'];
	  }

	  extend(obj.prototype, props);

	  return obj;
	}

	module.exports = defineClass;


	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {
	/* eslint-disable complexity */
	/**
	 * @fileoverview Returns the first index at which a given element can be found in the array.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var isArray = __webpack_require__(2);

	/**
	 * @module array
	 */

	/**
	 * Returns the first index at which a given element can be found in the array
	 * from start index(default 0), or -1 if it is not present.
	 * It compares searchElement to elements of the Array using strict equality
	 * (the same method used by the ===, or triple-equals, operator).
	 * @param {*} searchElement Element to locate in the array
	 * @param {Array} array Array that will be traversed.
	 * @param {number} startIndex Start index in array for searching (default 0)
	 * @returns {number} the First index at which a given element, or -1 if it is not present
	 * @memberof module:array
	 * @example
	 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
	 *
	 * var arr = ['one', 'two', 'three', 'four'];
	 * var idx1 = inArray('one', arr, 3); // -1
	 * var idx2 = inArray('one', arr); // 0
	 */
	function inArray(searchElement, array, startIndex) {
	  var i;
	  var length;
	  startIndex = startIndex || 0;

	  if (!isArray(array)) {
	    return -1;
	  }

	  if (Array.prototype.indexOf) {
	    return Array.prototype.indexOf.call(array, searchElement, startIndex);
	  }

	  length = array.length;
	  for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
	    if (array[i] === searchElement) {
	      return i;
	    }
	  }

	  return -1;
	}

	module.exports = inArray;


	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {


	var template = __webpack_require__(29);
	var sendHostname = __webpack_require__(30);
	var isFunction = __webpack_require__(5);

	var util = {
	  /**
	   * Capitalize first letter
	   * @param {string} str - String to change
	   * @returns {string} Changed string
	   */
	  capitalizeFirstLetter: function(str) {
	    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
	  },

	  /**
	   * Check the element is contained
	   * @param {HTMLElement} find - Target element
	   * @param {HTMLElement} parent - Wrapper element
	   * @returns {boolean} Whether contained or not
	   */
	  isContained: function(find, parent) {
	    if (!parent) {
	      return false;
	    }

	    return find === parent ? true : parent.contains(find);
	  },

	  /**
	   * Create an new element by template literals.
	   * @param {string|function} tmpl - template
	   * @param {Object} context - context
	   * @returns {HTMLElement}
	   */
	  createElementByTemplate: function(tmpl, context) {
	    var parent = document.createElement('div');
	    var html = isFunction(tmpl) ? tmpl(context) : template(tmpl, context);
	    parent.innerHTML = html;

	    return parent.firstChild;
	  },

	  /**
	   * Create a new function that, when called, has its this keyword set to the provided value.
	   * @param {function} fn A original function before binding
	   * @param {*} obj context of function in arguments[0]
	   * @returns {function} A new bound function with context that is in arguments[1]
	   */
	  bind: function(fn, obj) {
	    var slice = Array.prototype.slice;
	    var args;

	    if (fn.bind) {
	      return fn.bind.apply(fn, slice.call(arguments, 1));
	    }

	    args = slice.call(arguments, 2);

	    return function() {
	      return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
	    };
	  },

	  /**
	   * Send hostname for GA
	   * @ignore
	   */
	  sendHostName: function() {
	    sendHostname('pagination', 'UA-129987462-1');
	  }
	};

	module.exports = util;


	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview The entry file of Pagination components
	 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
	 */



	__webpack_require__(11);

	module.exports = __webpack_require__(12);


	/***/ }),
	/* 11 */
	/***/ (function(module, exports, __webpack_require__) {

	// extracted by mini-css-extract-plugin

	/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {


	var CustomEvents = __webpack_require__(13);
	var defineClass = __webpack_require__(7);
	var extend = __webpack_require__(0);
	var isUndefined = __webpack_require__(1);

	var View = __webpack_require__(20);
	var util = __webpack_require__(9);

	var defaultOption = {
	  totalItems: 10,
	  itemsPerPage: 10,
	  visiblePages: 10,
	  page: 1,
	  centerAlign: false,
	  firstItemClassName: 'tui-first-child',
	  lastItemClassName: 'tui-last-child',
	  usageStatistics: true
	};

	/**
	 * Pagination class
	 * @class Pagination
	 * @param {string|HTMLElement|jQueryObject} container - Container element or selector.
	 * In case of a string, it is considered as an id selector and find the element by id.
	 * If there is no element, it is considered as a selector and find the element by querySelector().
	 * Passing jQueryObject and considering an id selector at first will be deprecated in v4.0.0.
	 * @param {object} options - Option object
	 *     @param {number} [options.totalItems=10] Total item count
	 *     @param {number} [options.itemsPerPage=10] Item count per page
	 *     @param {number} [options.visiblePages=10] Display page link count
	 *     @param {number} [options.page=1] Display page after pagination draw.
	 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
	 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
	 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
	 *     @param {object} [options.template] A markup string set to make element. Refer to {@link https://github.com/nhn/tui.pagination/blob/master/docs/getting-started.md#how-to-use-template Getting Started: How to use template}.
	 *         @param {string|function} [options.template.page] HTML template
	 *         @param {string|function} [options.template.currentPage] HTML template
	 *         @param {string|function} [options.template.moveButton] HTML template
	 *         @param {string|function} [options.template.disabledMoveButton] HTML template
	 *         @param {string|function} [options.template.moreButton] HTML template
	 *     @param {boolean} [options.usageStatistics=true] Send the hostname to google analytics.
	 *         If you do not want to send the hostname, this option set to false.
	 * @example
	 * // ES6
	 * import Pagination from 'tui-pagination';
	 *
	 * // CommonJS
	 * const Pagination = require('tui-pagination');
	 *
	 * // Browser
	 * const Pagination = tui.Pagination;
	 *
	 * const container = document.getElementById('pagination');
	 * const options = { // below default value of options
	 *      totalItems: 10,
	 *      itemsPerPage: 10,
	 *      visiblePages: 10,
	 *      page: 1,
	 *      centerAlign: false,
	 *      firstItemClassName: 'tui-first-child',
	 *      lastItemClassName: 'tui-last-child',
	 *      template: {
	 *          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
	 *          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
	 *          moveButton:
	 *              '<a href="#" class="tui-page-btn tui-{{type}}">' +
	 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
	 *              '</a>',
	 *          disabledMoveButton:
	 *              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
	 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
	 *              '</span>',
	 *          moreButton:
	 *              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
	 *                  '<span class="tui-ico-ellip">...</span>' +
	 *              '</a>'
	 *      }
	 * };
	 * const pagination = new Pagination(container, options);
	 */
	var Pagination = defineClass(
	  /** @lends Pagination.prototype */ {
	    init: function(container, options) {
	      /**
	       * Option object
	       * @type {object}
	       * @private
	       */
	      this._options = extend({}, defaultOption, options);

	      /**
	       * Current page number
	       * @type {number}
	       * @private
	       */
	      this._currentPage = 0;

	      /**
	       * View instance
	       * @type {View}
	       * @private
	       */
	      this._view = new View(container, this._options, util.bind(this._onClickHandler, this));

	      this._paginate();

	      if (this._options.usageStatistics) {
	        util.sendHostName();
	      }
	    },

	    /**
	     * Set current page
	     * @param {number} page - Current page
	     * @private
	     */
	    _setCurrentPage: function(page) {
	      this._currentPage = page || this._options.page;
	    },

	    /**
	     * Get last page number
	     * @returns {number} Last page number
	     * @private
	     */
	    _getLastPage: function() {
	      var lastPage = Math.ceil(this._options.totalItems / this._options.itemsPerPage);

	      return !lastPage ? 1 : lastPage;
	    },

	    /**
	     * Index of list in total lists
	     * @param {number} pageNumber - Page number
	     * @returns {number} Page index or number
	     * @private
	     */
	    _getPageIndex: function(pageNumber) {
	      var left, pageIndex;

	      if (this._options.centerAlign) {
	        left = Math.floor(this._options.visiblePages / 2);
	        pageIndex = pageNumber - left;
	        pageIndex = Math.max(pageIndex, 1);
	        pageIndex = Math.min(pageIndex, this._getLastPage() - this._options.visiblePages + 1);

	        return pageIndex;
	      }

	      return Math.ceil(pageNumber / this._options.visiblePages);
	    },

	    /**
	     * Get relative page
	     * @param {string} moveType - Move type ('prev' or 'next')
	     * @returns {number} Relative page number
	     * @private
	     */
	    _getRelativePage: function(moveType) {
	      var isPrevMove = moveType === 'prev';
	      var currentPage = this.getCurrentPage();

	      return isPrevMove ? currentPage - 1 : currentPage + 1;
	    },

	    /**
	     * Get more page index
	     * @param {string} moveType - Move type ('prev' or 'next')
	     * @returns {number} Page index
	     * @private
	     */
	    _getMorePageIndex: function(moveType) {
	      var currentPageIndex = this._getPageIndex(this.getCurrentPage());
	      var pageCount = this._options.visiblePages;
	      var isPrevMove = moveType === 'prev';
	      var pageIndex;

	      if (this._options.centerAlign) {
	        pageIndex = isPrevMove ? currentPageIndex - 1 : currentPageIndex + pageCount;
	      } else {
	        pageIndex = isPrevMove
	          ? (currentPageIndex - 1) * pageCount
	          : currentPageIndex * pageCount + 1;
	      }

	      return pageIndex;
	    },
	    /* eslint-enable complexity */

	    /**
	     * Get available page number from over number
	     * If total page is 23, but input number is 30 => return 23
	     * @param {number} page - Page number
	     * @returns {number} Replaced pgae number
	     * @private
	     */
	    _convertToValidPage: function(page) {
	      var lastPageNumber = this._getLastPage();
	      page = Math.max(page, 1);
	      page = Math.min(page, lastPageNumber);

	      return page;
	    },

	    /**
	     * Create require view set, notify view to update
	     * @param {number} page - Page number
	     * @private
	     */
	    _paginate: function(page) {
	      var viewData = this._makeViewData(page || this._options.page);
	      this._setCurrentPage(page);
	      this._view.update(viewData);
	    },

	    /**
	     * Create and get view data
	     * @param {number} page - Page number
	     * @returns {object} view data
	     * @private
	     */
	    _makeViewData: function(page) {
	      var viewData = {};
	      var lastPage = this._getLastPage();
	      var currentPageIndex = this._getPageIndex(page);
	      var lastPageListIndex = this._getPageIndex(lastPage);
	      var edges = this._getEdge(page);

	      viewData.leftPageNumber = edges.left;
	      viewData.rightPageNumber = edges.right;

	      viewData.prevMore = currentPageIndex > 1;
	      viewData.nextMore = currentPageIndex < lastPageListIndex;

	      viewData.page = page;
	      viewData.currentPageIndex = page;
	      viewData.lastPage = lastPage;
	      viewData.lastPageListIndex = lastPage;

	      return viewData;
	    },

	    /**
	     * Get each edge page
	     * @param {object} page - Page number
	     * @returns {{left: number, right: number}} Edge page numbers
	     * @private
	     */
	    _getEdge: function(page) {
	      var leftPageNumber, rightPageNumber, left;
	      var lastPage = this._getLastPage();
	      var visiblePages = this._options.visiblePages;
	      var currentPageIndex = this._getPageIndex(page);

	      if (this._options.centerAlign) {
	        left = Math.floor(visiblePages / 2);
	        leftPageNumber = Math.max(page - left, 1);
	        rightPageNumber = leftPageNumber + visiblePages - 1;

	        if (rightPageNumber > lastPage) {
	          leftPageNumber = Math.max(lastPage - visiblePages + 1, 1);
	          rightPageNumber = lastPage;
	        }
	      } else {
	        leftPageNumber = (currentPageIndex - 1) * visiblePages + 1;
	        rightPageNumber = currentPageIndex * visiblePages;
	        rightPageNumber = Math.min(rightPageNumber, lastPage);
	      }

	      return {
	        left: leftPageNumber,
	        right: rightPageNumber
	      };
	    },

	    /**
	     * Pagelist click event hadnler
	     * @param {?string} buttonType - Button type
	     * @param {?number} page - Page number
	     * @private
	     */
	    /* eslint-disable complexity */
	    _onClickHandler: function(buttonType, page) {
	      switch (buttonType) {
	        case 'first':
	          page = 1;
	          break;
	        case 'prev':
	          page = this._getRelativePage('prev');
	          break;
	        case 'next':
	          page = this._getRelativePage('next');
	          break;
	        case 'prevMore':
	          page = this._getMorePageIndex('prev');
	          break;
	        case 'nextMore':
	          page = this._getMorePageIndex('next');
	          break;
	        case 'last':
	          page = this._getLastPage();
	          break;
	        default:
	          if (!page) {
	            return;
	          }
	      }

	      this.movePageTo(page);
	    },
	    /* eslint-enable complexity */

	    /**
	     * Reset pagination
	     * @param {*} totalItems - Redraw page item count
	     * @example
	     * pagination.reset();
	     * pagination.reset(100);
	     */
	    reset: function(totalItems) {
	      if (isUndefined(totalItems)) {
	        totalItems = this._options.totalItems;
	      }

	      this._options.totalItems = totalItems;
	      this._paginate(1);
	    },

	    /**
	     * Move to specific page, redraw list.
	     * Before move fire beforeMove event, After move fire afterMove event.
	     * @param {Number} targetPage - Target page
	     * @example
	     * pagination.movePageTo(10);
	     */
	    movePageTo: function(targetPage) {
	      targetPage = this._convertToValidPage(targetPage);

	      /**
	       * @event Pagination#beforeMove
	       * @type {object} evt - Custom event object
	       * @property {number} page - Moved page
	       * @example
	       * paganation.on('beforeMove', (event) => {
	       *     const currentPage = event.page;
	       *
	       *     if (currentPage === 10) {
	       *         return false;
	       *         // return true;
	       *     }
	       * });
	       */
	      if (!this.invoke('beforeMove', { page: targetPage })) {
	        return;
	      }

	      this._paginate(targetPage);

	      /**
	       * @event Pagination#afterMove
	       * @type {object} evt - Custom event object
	       * @property {number} page - Moved page
	       * @example
	       * paganation.on('afterMove', (event) => {
	       *      const currentPage = event.page;
	       *      console.log(currentPage);
	       * });
	       */
	      this.fire('afterMove', { page: targetPage });
	    },

	    /**
	     * Set total count of items
	     * @param {number} itemCount - Total item count
	     */
	    setTotalItems: function(itemCount) {
	      this._options.totalItems = itemCount;
	    },

	    /**
	     * Set count of items per page
	     * @param {number} itemCount - Item count
	     */
	    setItemsPerPage: function(itemCount) {
	      this._options.itemsPerPage = itemCount;
	    },

	    /**
	     * Get current page
	     * @returns {number} Current page
	     */
	    getCurrentPage: function() {
	      return this._currentPage || this._options.page;
	    }
	  }
	);

	CustomEvents.mixin(Pagination);

	module.exports = Pagination;


	/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var extend = __webpack_require__(0);
	var isExisty = __webpack_require__(14);
	var isString = __webpack_require__(4);
	var isObject = __webpack_require__(16);
	var isArray = __webpack_require__(2);
	var isFunction = __webpack_require__(5);
	var forEach = __webpack_require__(3);

	var R_EVENTNAME_SPLIT = /\s+/g;

	/**
	 * @class
	 * @example
	 * // node, commonjs
	 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
	 */
	function CustomEvents() {
	  /**
	     * @type {HandlerItem[]}
	     */
	  this.events = null;

	  /**
	     * only for checking specific context event was binded
	     * @type {object[]}
	     */
	  this.contexts = null;
	}

	/**
	 * Mixin custom events feature to specific constructor
	 * @param {function} func - constructor
	 * @example
	 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
	 *
	 * var model;
	 * function Model() {
	 *     this.name = '';
	 * }
	 * CustomEvents.mixin(Model);
	 *
	 * model = new Model();
	 * model.on('change', function() { this.name = 'model'; }, this);
	 * model.fire('change');
	 * alert(model.name); // 'model';
	 */
	CustomEvents.mixin = function(func) {
	  extend(func.prototype, CustomEvents.prototype);
	};

	/**
	 * Get HandlerItem object
	 * @param {function} handler - handler function
	 * @param {object} [context] - context for handler
	 * @returns {HandlerItem} HandlerItem object
	 * @private
	 */
	CustomEvents.prototype._getHandlerItem = function(handler, context) {
	  var item = {handler: handler};

	  if (context) {
	    item.context = context;
	  }

	  return item;
	};

	/**
	 * Get event object safely
	 * @param {string} [eventName] - create sub event map if not exist.
	 * @returns {(object|array)} event object. if you supplied `eventName`
	 *  parameter then make new array and return it
	 * @private
	 */
	CustomEvents.prototype._safeEvent = function(eventName) {
	  var events = this.events;
	  var byName;

	  if (!events) {
	    events = this.events = {};
	  }

	  if (eventName) {
	    byName = events[eventName];

	    if (!byName) {
	      byName = [];
	      events[eventName] = byName;
	    }

	    events = byName;
	  }

	  return events;
	};

	/**
	 * Get context array safely
	 * @returns {array} context array
	 * @private
	 */
	CustomEvents.prototype._safeContext = function() {
	  var context = this.contexts;

	  if (!context) {
	    context = this.contexts = [];
	  }

	  return context;
	};

	/**
	 * Get index of context
	 * @param {object} ctx - context that used for bind custom event
	 * @returns {number} index of context
	 * @private
	 */
	CustomEvents.prototype._indexOfContext = function(ctx) {
	  var context = this._safeContext();
	  var index = 0;

	  while (context[index]) {
	    if (ctx === context[index][0]) {
	      return index;
	    }

	    index += 1;
	  }

	  return -1;
	};

	/**
	 * Memorize supplied context for recognize supplied object is context or
	 *  name: handler pair object when off()
	 * @param {object} ctx - context object to memorize
	 * @private
	 */
	CustomEvents.prototype._memorizeContext = function(ctx) {
	  var context, index;

	  if (!isExisty(ctx)) {
	    return;
	  }

	  context = this._safeContext();
	  index = this._indexOfContext(ctx);

	  if (index > -1) {
	    context[index][1] += 1;
	  } else {
	    context.push([ctx, 1]);
	  }
	};

	/**
	 * Forget supplied context object
	 * @param {object} ctx - context object to forget
	 * @private
	 */
	CustomEvents.prototype._forgetContext = function(ctx) {
	  var context, contextIndex;

	  if (!isExisty(ctx)) {
	    return;
	  }

	  context = this._safeContext();
	  contextIndex = this._indexOfContext(ctx);

	  if (contextIndex > -1) {
	    context[contextIndex][1] -= 1;

	    if (context[contextIndex][1] <= 0) {
	      context.splice(contextIndex, 1);
	    }
	  }
	};

	/**
	 * Bind event handler
	 * @param {(string|{name:string, handler:function})} eventName - custom
	 *  event name or an object {eventName: handler}
	 * @param {(function|object)} [handler] - handler function or context
	 * @param {object} [context] - context for binding
	 * @private
	 */
	CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
	  var events = this._safeEvent(eventName);
	  this._memorizeContext(context);
	  events.push(this._getHandlerItem(handler, context));
	};

	/**
	 * Bind event handlers
	 * @param {(string|{name:string, handler:function})} eventName - custom
	 *  event name or an object {eventName: handler}
	 * @param {(function|object)} [handler] - handler function or context
	 * @param {object} [context] - context for binding
	 * //-- #1. Get Module --//
	 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
	 *
	 * //-- #2. Use method --//
	 * // # 2.1 Basic Usage
	 * CustomEvents.on('onload', handler);
	 *
	 * // # 2.2 With context
	 * CustomEvents.on('onload', handler, myObj);
	 *
	 * // # 2.3 Bind by object that name, handler pairs
	 * CustomEvents.on({
	 *     'play': handler,
	 *     'pause': handler2
	 * });
	 *
	 * // # 2.4 Bind by object that name, handler pairs with context object
	 * CustomEvents.on({
	 *     'play': handler
	 * }, myObj);
	 */
	CustomEvents.prototype.on = function(eventName, handler, context) {
	  var self = this;

	  if (isString(eventName)) {
	    // [syntax 1, 2]
	    eventName = eventName.split(R_EVENTNAME_SPLIT);
	    forEach(eventName, function(name) {
	      self._bindEvent(name, handler, context);
	    });
	  } else if (isObject(eventName)) {
	    // [syntax 3, 4]
	    context = handler;
	    forEach(eventName, function(func, name) {
	      self.on(name, func, context);
	    });
	  }
	};

	/**
	 * Bind one-shot event handlers
	 * @param {(string|{name:string,handler:function})} eventName - custom
	 *  event name or an object {eventName: handler}
	 * @param {function|object} [handler] - handler function or context
	 * @param {object} [context] - context for binding
	 */
	CustomEvents.prototype.once = function(eventName, handler, context) {
	  var self = this;

	  if (isObject(eventName)) {
	    context = handler;
	    forEach(eventName, function(func, name) {
	      self.once(name, func, context);
	    });

	    return;
	  }

	  function onceHandler() { // eslint-disable-line require-jsdoc
	    handler.apply(context, arguments);
	    self.off(eventName, onceHandler, context);
	  }

	  this.on(eventName, onceHandler, context);
	};

	/**
	 * Splice supplied array by callback result
	 * @param {array} arr - array to splice
	 * @param {function} predicate - function return boolean
	 * @private
	 */
	CustomEvents.prototype._spliceMatches = function(arr, predicate) {
	  var i = 0;
	  var len;

	  if (!isArray(arr)) {
	    return;
	  }

	  for (len = arr.length; i < len; i += 1) {
	    if (predicate(arr[i]) === true) {
	      arr.splice(i, 1);
	      len -= 1;
	      i -= 1;
	    }
	  }
	};

	/**
	 * Get matcher for unbind specific handler events
	 * @param {function} handler - handler function
	 * @returns {function} handler matcher
	 * @private
	 */
	CustomEvents.prototype._matchHandler = function(handler) {
	  var self = this;

	  return function(item) {
	    var needRemove = handler === item.handler;

	    if (needRemove) {
	      self._forgetContext(item.context);
	    }

	    return needRemove;
	  };
	};

	/**
	 * Get matcher for unbind specific context events
	 * @param {object} context - context
	 * @returns {function} object matcher
	 * @private
	 */
	CustomEvents.prototype._matchContext = function(context) {
	  var self = this;

	  return function(item) {
	    var needRemove = context === item.context;

	    if (needRemove) {
	      self._forgetContext(item.context);
	    }

	    return needRemove;
	  };
	};

	/**
	 * Get matcher for unbind specific hander, context pair events
	 * @param {function} handler - handler function
	 * @param {object} context - context
	 * @returns {function} handler, context matcher
	 * @private
	 */
	CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
	  var self = this;

	  return function(item) {
	    var matchHandler = (handler === item.handler);
	    var matchContext = (context === item.context);
	    var needRemove = (matchHandler && matchContext);

	    if (needRemove) {
	      self._forgetContext(item.context);
	    }

	    return needRemove;
	  };
	};

	/**
	 * Unbind event by event name
	 * @param {string} eventName - custom event name to unbind
	 * @param {function} [handler] - handler function
	 * @private
	 */
	CustomEvents.prototype._offByEventName = function(eventName, handler) {
	  var self = this;
	  var andByHandler = isFunction(handler);
	  var matchHandler = self._matchHandler(handler);

	  eventName = eventName.split(R_EVENTNAME_SPLIT);

	  forEach(eventName, function(name) {
	    var handlerItems = self._safeEvent(name);

	    if (andByHandler) {
	      self._spliceMatches(handlerItems, matchHandler);
	    } else {
	      forEach(handlerItems, function(item) {
	        self._forgetContext(item.context);
	      });

	      self.events[name] = [];
	    }
	  });
	};

	/**
	 * Unbind event by handler function
	 * @param {function} handler - handler function
	 * @private
	 */
	CustomEvents.prototype._offByHandler = function(handler) {
	  var self = this;
	  var matchHandler = this._matchHandler(handler);

	  forEach(this._safeEvent(), function(handlerItems) {
	    self._spliceMatches(handlerItems, matchHandler);
	  });
	};

	/**
	 * Unbind event by object(name: handler pair object or context object)
	 * @param {object} obj - context or {name: handler} pair object
	 * @param {function} handler - handler function
	 * @private
	 */
	CustomEvents.prototype._offByObject = function(obj, handler) {
	  var self = this;
	  var matchFunc;

	  if (this._indexOfContext(obj) < 0) {
	    forEach(obj, function(func, name) {
	      self.off(name, func);
	    });
	  } else if (isString(handler)) {
	    matchFunc = this._matchContext(obj);

	    self._spliceMatches(this._safeEvent(handler), matchFunc);
	  } else if (isFunction(handler)) {
	    matchFunc = this._matchHandlerAndContext(handler, obj);

	    forEach(this._safeEvent(), function(handlerItems) {
	      self._spliceMatches(handlerItems, matchFunc);
	    });
	  } else {
	    matchFunc = this._matchContext(obj);

	    forEach(this._safeEvent(), function(handlerItems) {
	      self._spliceMatches(handlerItems, matchFunc);
	    });
	  }
	};

	/**
	 * Unbind custom events
	 * @param {(string|object|function)} eventName - event name or context or
	 *  {name: handler} pair object or handler function
	 * @param {(function)} handler - handler function
	 * @example
	 * //-- #1. Get Module --//
	 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
	 *
	 * //-- #2. Use method --//
	 * // # 2.1 off by event name
	 * CustomEvents.off('onload');
	 *
	 * // # 2.2 off by event name and handler
	 * CustomEvents.off('play', handler);
	 *
	 * // # 2.3 off by handler
	 * CustomEvents.off(handler);
	 *
	 * // # 2.4 off by context
	 * CustomEvents.off(myObj);
	 *
	 * // # 2.5 off by context and handler
	 * CustomEvents.off(myObj, handler);
	 *
	 * // # 2.6 off by context and event name
	 * CustomEvents.off(myObj, 'onload');
	 *
	 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
	 * CustomEvents.off({
	 *   'play': handler,
	 *   'pause': handler2
	 * });
	 *
	 * // # 2.8 off the all events
	 * CustomEvents.off();
	 */
	CustomEvents.prototype.off = function(eventName, handler) {
	  if (isString(eventName)) {
	    // [syntax 1, 2]
	    this._offByEventName(eventName, handler);
	  } else if (!arguments.length) {
	    // [syntax 8]
	    this.events = {};
	    this.contexts = [];
	  } else if (isFunction(eventName)) {
	    // [syntax 3]
	    this._offByHandler(eventName);
	  } else if (isObject(eventName)) {
	    // [syntax 4, 5, 6]
	    this._offByObject(eventName, handler);
	  }
	};

	/**
	 * Fire custom event
	 * @param {string} eventName - name of custom event
	 */
	CustomEvents.prototype.fire = function(eventName) {  // eslint-disable-line
	  this.invoke.apply(this, arguments);
	};

	/**
	 * Fire a event and returns the result of operation 'boolean AND' with all
	 *  listener's results.
	 *
	 * So, It is different from {@link CustomEvents#fire}.
	 *
	 * In service code, use this as a before event in component level usually
	 *  for notifying that the event is cancelable.
	 * @param {string} eventName - Custom event name
	 * @param {...*} data - Data for event
	 * @returns {boolean} The result of operation 'boolean AND'
	 * @example
	 * var map = new Map();
	 * map.on({
	 *     'beforeZoom': function() {
	 *         // It should cancel the 'zoom' event by some conditions.
	 *         if (that.disabled && this.getState()) {
	 *             return false;
	 *         }
	 *         return true;
	 *     }
	 * });
	 *
	 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
	 *     // if true,
	 *     // doSomething
	 * }
	 */
	CustomEvents.prototype.invoke = function(eventName) {
	  var events, args, index, item;

	  if (!this.hasListener(eventName)) {
	    return true;
	  }

	  events = this._safeEvent(eventName);
	  args = Array.prototype.slice.call(arguments, 1);
	  index = 0;

	  while (events[index]) {
	    item = events[index];

	    if (item.handler.apply(item.context, args) === false) {
	      return false;
	    }

	    index += 1;
	  }

	  return true;
	};

	/**
	 * Return whether at least one of the handlers is registered in the given
	 *  event name.
	 * @param {string} eventName - Custom event name
	 * @returns {boolean} Is there at least one handler in event name?
	 */
	CustomEvents.prototype.hasListener = function(eventName) {
	  return this.getListenerLength(eventName) > 0;
	};

	/**
	 * Return a count of events registered.
	 * @param {string} eventName - Custom event name
	 * @returns {number} number of event
	 */
	CustomEvents.prototype.getListenerLength = function(eventName) {
	  var events = this._safeEvent(eventName);

	  return events.length;
	};

	module.exports = CustomEvents;


	/***/ }),
	/* 14 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is existing or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var isUndefined = __webpack_require__(1);
	var isNull = __webpack_require__(15);

	/**
	 * Check whether the given variable is existing or not.
	 * If the given variable is not null and not undefined, returns true.
	 * @param {*} param - Target for checking
	 * @returns {boolean} Is existy?
	 * @memberof module:type
	 * @example
	 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
	 *
	 * isExisty(''); //true
	 * isExisty(0); //true
	 * isExisty([]); //true
	 * isExisty({}); //true
	 * isExisty(null); //false
	 * isExisty(undefined); //false
	*/
	function isExisty(param) {
	  return !isUndefined(param) && !isNull(param);
	}

	module.exports = isExisty;


	/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is null or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Check whether the given variable is null or not.
	 * If the given variable(arguments[0]) is null, returns true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is null?
	 * @memberof module:type
	 */
	function isNull(obj) {
	  return obj === null;
	}

	module.exports = isNull;


	/***/ }),
	/* 16 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is an object or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Check whether the given variable is an object or not.
	 * If the given variable is an object, return true.
	 * @param {*} obj - Target for checking
	 * @returns {boolean} Is object?
	 * @memberof module:type
	 */
	function isObject(obj) {
	  return obj === Object(obj);
	}

	module.exports = isObject;


	/***/ }),
	/* 17 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Execute the provided callback once for each element present
	 * in the array(or Array-like object) in ascending order.
	 * If the callback function returns false, the loop will be stopped.
	 * Callback function(iteratee) is invoked with three arguments:
	 *  1) The value of the element
	 *  2) The index of the element
	 *  3) The array(or Array-like object) being traversed
	 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
	 * @param {function} iteratee Callback function
	 * @param {Object} [context] Context(this) of callback function
	 * @memberof module:collection
	 * @example
	 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
	 *
	 * var sum = 0;
	 *
	 * forEachArray([1,2,3], function(value){
	 *     sum += value;
	 * });
	 * alert(sum); // 6
	 */
	function forEachArray(arr, iteratee, context) {
	  var index = 0;
	  var len = arr.length;

	  context = context || null;

	  for (; index < len; index += 1) {
	    if (iteratee.call(context, arr[index], index, arr) === false) {
	      break;
	    }
	  }
	}

	module.exports = forEachArray;


	/***/ }),
	/* 18 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Provide a simple inheritance in prototype-oriented.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var createObject = __webpack_require__(19);

	/**
	 * Provide a simple inheritance in prototype-oriented.
	 * Caution :
	 *  Don't overwrite the prototype of child constructor.
	 *
	 * @param {function} subType Child constructor
	 * @param {function} superType Parent constructor
	 * @memberof module:inheritance
	 * @example
	 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
	 *
	 * // Parent constructor
	 * function Animal(leg) {
	 *     this.leg = leg;
	 * }
	 * Animal.prototype.growl = function() {
	 *     // ...
	 * };
	 *
	 * // Child constructor
	 * function Person(name) {
	 *     this.name = name;
	 * }
	 *
	 * // Inheritance
	 * inherit(Person, Animal);
	 *
	 * // After this inheritance, please use only the extending of property.
	 * // Do not overwrite prototype.
	 * Person.prototype.walk = function(direction) {
	 *     // ...
	 * };
	 */
	function inherit(subType, superType) {
	  var prototype = createObject(superType.prototype);
	  prototype.constructor = subType;
	  subType.prototype = prototype;
	}

	module.exports = inherit;


	/***/ }),
	/* 19 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Create a new object with the specified prototype object and properties.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * @module inheritance
	 */

	/**
	 * Create a new object with the specified prototype object and properties.
	 * @param {Object} obj This object will be a prototype of the newly-created object.
	 * @returns {Object}
	 * @memberof module:inheritance
	 */
	function createObject(obj) {
	  function F() {} // eslint-disable-line require-jsdoc
	  F.prototype = obj;

	  return new F();
	}

	module.exports = createObject;


	/***/ }),
	/* 20 */
	/***/ (function(module, exports, __webpack_require__) {


	var forEach = __webpack_require__(3);
	var defineClass = __webpack_require__(7);
	var getTarget = __webpack_require__(21);
	var on = __webpack_require__(22);
	var preventDefault = __webpack_require__(24);
	var addClass = __webpack_require__(25);
	var extend = __webpack_require__(0);
	var isString = __webpack_require__(4);
	var isHTMLNode = __webpack_require__(28);

	var util = __webpack_require__(9);

	var defaultTemplate = {
	  page: '<a href="#" class="tui-page-btn">{{page}}</a>',
	  currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
	  moveButton:
	    '<a href="#" class="tui-page-btn tui-{{type}}">' +
	    '<span class="tui-ico-{{type}}">{{type}}</span>' +
	    '</a>',
	  disabledMoveButton:
	    '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
	    '<span class="tui-ico-{{type}}">{{type}}</span>' +
	    '</span>',
	  moreButton:
	    '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
	    '<span class="tui-ico-ellip">...</span>' +
	    '</a>'
	};
	var moveButtons = ['first', 'prev', 'next', 'last'];
	var moreButtons = ['prev', 'next'];

	var INVALID_CONTAINER_ELEMENT = 'The container element is invalid.';

	/**
	 * Pagination view class
	 * @class View
	 * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
	 * @param {object} options - Option object
	 *     @param {number} [options.totalItems=10] Total item count
	 *     @param {number} [options.itemsPerPage=10] Item count per page
	 *     @param {number} [options.visiblePages=10] Display page link count
	 *     @param {number} [options.page=1] Display page after pagination draw.
	 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
	 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
	 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
	 *     @param {object} [options.template] A markup string set to make element
	 *         @param {string|function} [options.template.page] HTML template
	 *         @param {string|function} [options.template.currentPage] HTML template
	 *         @param {string|function} [options.template.moveButton] HTML template
	 *         @param {string|function} [options.template.disabledMoveButton] HTML template
	 *         @param {string|function} [options.template.moreButton] HTML template
	 * @param {function} handler - Event handler
	 * @ignore
	 */
	var View = defineClass(
	  /** @lends View.prototype */ {
	    init: function(container, options, handler) {
	      /**
	       * Root element
	       * @type {HTMLElement}
	       * @private
	       */
	      this._containerElement = null;

	      /**
	       * First item's class name
	       * @type {string}
	       * @private
	       */
	      this._firstItemClassName = options.firstItemClassName;

	      /**
	       * Last item's class name
	       * @type {string}
	       * @private
	       */
	      this._lastItemClassName = options.lastItemClassName;

	      /**
	       * Default template
	       * @type {object.<string, string|function>}
	       * @private
	       */
	      this._template = extend({}, defaultTemplate, options.template);

	      /**
	       * Map of buttons
	       * @type {object.<string, HTMLElement>}
	       * @private
	       */
	      this._buttons = {};

	      /**
	       * Enabled page elements list
	       * @type {array}
	       * @private
	       */

	      this._enabledPageElements = [];

	      this._setRootElement(container);
	      this._setMoveButtons();
	      this._setDisabledMoveButtons();
	      this._setMoreButtons();
	      this._attachClickEvent(handler);
	    },
	    /* eslint-enable complexity */

	    /**
	     * Set root element
	     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
	     * @private
	     */
	    _setRootElement: function(container) {
	      if (isString(container)) {
	        container = document.getElementById(container) || document.querySelector(container);
	      } else if (container.jquery) {
	        container = container[0];
	      }

	      if (!isHTMLNode(container)) {
	        throw new Error(INVALID_CONTAINER_ELEMENT);
	      }

	      this._containerElement = container;
	    },

	    /**
	     * Assign move buttons to option
	     * @private
	     */
	    _setMoveButtons: function() {
	      forEach(
	        moveButtons,
	        function(type) {
	          this._buttons[type] = util.createElementByTemplate(this._template.moveButton, {
	            type: type
	          });
	        },
	        this
	      );
	    },

	    /**
	     * Assign disabled move buttons to option
	     * @private
	     */
	    _setDisabledMoveButtons: function() {
	      forEach(
	        moveButtons,
	        function(type) {
	          var key = 'disabled' + util.capitalizeFirstLetter(type);
	          this._buttons[key] = util.createElementByTemplate(this._template.disabledMoveButton, {
	            type: type
	          });
	        },
	        this
	      );
	    },

	    /**
	     * Assign more buttons to option
	     * @private
	     */
	    _setMoreButtons: function() {
	      forEach(
	        moreButtons,
	        function(type) {
	          var key = type + 'More';
	          this._buttons[key] = util.createElementByTemplate(this._template.moreButton, {
	            type: type
	          });
	        },
	        this
	      );
	    },
	    /* eslint-enable camelcase */

	    /**
	     * Get container element
	     * @returns {HTMLElement} Container element
	     * @private
	     */
	    _getContainerElement: function() {
	      return this._containerElement;
	    },

	    /**
	     * Append first button on container element
	     * @param {object} viewData - View data to render pagination
	     * @private
	     */
	    _appendFirstButton: function(viewData) {
	      var button;

	      if (viewData.page > 1) {
	        button = this._buttons.first;
	      } else {
	        button = this._buttons.disabledFirst;
	      }

	      this._getContainerElement().appendChild(button);
	    },

	    /**
	     * Append previous button on container element
	     * @param {object} viewData - View data to render pagination
	     * @private
	     */
	    _appendPrevButton: function(viewData) {
	      var button;

	      if (viewData.currentPageIndex > 1) {
	        button = this._buttons.prev;
	      } else {
	        button = this._buttons.disabledPrev;
	      }

	      this._getContainerElement().appendChild(button);
	    },

	    /**
	     * Append next button on container element
	     * @param {object} viewData - View data to render pagination
	     * @private
	     */
	    _appendNextButton: function(viewData) {
	      var button;

	      if (viewData.currentPageIndex < viewData.lastPageListIndex) {
	        button = this._buttons.next;
	      } else {
	        button = this._buttons.disabledNext;
	      }

	      this._getContainerElement().appendChild(button);
	    },

	    /**
	     * Append last button on container element
	     * @param {object} viewData - View data to render pagination
	     * @private
	     */
	    _appendLastButton: function(viewData) {
	      var button;

	      if (viewData.page < viewData.lastPage) {
	        button = this._buttons.last;
	      } else {
	        button = this._buttons.disabledLast;
	      }

	      this._getContainerElement().appendChild(button);
	    },

	    /**
	     * Append previous more button on container element
	     * @param {object} viewData - View data to render pagination
	     * @private
	     */
	    _appendPrevMoreButton: function(viewData) {
	      var button;

	      if (viewData.prevMore) {
	        button = this._buttons.prevMore;
	        addClass(button, this._firstItemClassName);
	        this._getContainerElement().appendChild(button);
	      }
	    },

	    /**
	     * Append next more button on container element
	     * @param {object} viewData - View data to render pagination
	     * @private
	     */
	    _appendNextMoreButton: function(viewData) {
	      var button;

	      if (viewData.nextMore) {
	        button = this._buttons.nextMore;
	        addClass(button, this._lastItemClassName);
	        this._getContainerElement().appendChild(button);
	      }
	    },

	    /**
	     * Append page number elements on container element
	     * @param {object} viewData - View data to render pagination
	     * @private
	     */
	    // eslint-disable-next-line complexity
	    _appendPages: function(viewData) {
	      var firstPage = viewData.leftPageNumber;
	      var lastPage = viewData.rightPageNumber;
	      var pageItem, i;

	      for (i = firstPage; i <= lastPage; i += 1) {
	        if (i === viewData.page) {
	          pageItem = util.createElementByTemplate(this._template.currentPage, { page: i });
	        } else {
	          pageItem = util.createElementByTemplate(this._template.page, { page: i });
	          this._enabledPageElements.push(pageItem);
	        }

	        if (i === firstPage && !viewData.prevMore) {
	          addClass(pageItem, this._firstItemClassName);
	        }
	        if (i === lastPage && !viewData.nextMore) {
	          addClass(pageItem, this._lastItemClassName);
	        }
	        this._getContainerElement().appendChild(pageItem);
	      }
	    },

	    /**
	     * Attach click event
	     * @param {function} callback - Callback function
	     * @private
	     */
	    _attachClickEvent: function(callback) {
	      var rootElement = this._getContainerElement();

	      on(
	        rootElement,
	        'click',
	        function(ev) {
	          var target = getTarget(ev);
	          var page, buttonType;

	          preventDefault(ev);

	          buttonType = this._getButtonType(target);

	          if (!buttonType) {
	            page = this._getPageNumber(target);
	          }

	          callback(buttonType, page);
	        },
	        this
	      );
	    },

	    /**
	     * Get button type to move button elements
	     * @param {HTMLElement} targetElement - Each move button element
	     * @returns {?string} Button type
	     * @private
	     */
	    _getButtonType: function(targetElement) {
	      var buttonType;
	      var buttons = this._buttons;

	      forEach(
	        buttons,
	        function(button, type) {
	          if (util.isContained(targetElement, button)) {
	            buttonType = type;

	            return false;
	          }

	          return true;
	        },
	        this
	      );

	      return buttonType;
	    },
	    /* eslint-enable no-lonely-if */

	    /**
	     * Get number to page elements
	     * @param {HTMLElement} targetElement - Each page element
	     * @returns {?number} Page number
	     * @private
	     */
	    _getPageNumber: function(targetElement) {
	      var targetPage = this._findPageElement(targetElement);
	      var page;

	      if (targetPage) {
	        page = parseInt(targetPage.innerText, 10);
	      }

	      return page;
	    },

	    /**
	     * Find target element from page elements
	     * @param {HTMLElement} targetElement - Each page element
	     * @returns {HTMLElement} Found element
	     * @ignore
	     */
	    _findPageElement: function(targetElement) {
	      var i = 0;
	      var length = this._enabledPageElements.length;
	      var pickedItem;

	      for (; i < length; i += 1) {
	        pickedItem = this._enabledPageElements[i];

	        if (util.isContained(targetElement, pickedItem)) {
	          return pickedItem;
	        }
	      }

	      return null;
	    },

	    /**
	     * Reset container element
	     * @private
	     */
	    _empty: function() {
	      this._enabledPageElements = [];

	      forEach(
	        this._buttons,
	        function(buttonElement, type) {
	          this._buttons[type] = buttonElement.cloneNode(true);
	        },
	        this
	      );

	      this._getContainerElement().innerHTML = '';
	    },

	    /**
	     * Update view
	     * @param {object} viewData - View data to render pagination
	     * @ignore
	     */
	    update: function(viewData) {
	      this._empty();
	      this._appendFirstButton(viewData);
	      this._appendPrevButton(viewData);
	      this._appendPrevMoreButton(viewData);
	      this._appendPages(viewData);
	      this._appendNextMoreButton(viewData);
	      this._appendNextButton(viewData);
	      this._appendLastButton(viewData);
	    }
	  }
	);

	module.exports = View;


	/***/ }),
	/* 21 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Get a target element from an event object.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Get a target element from an event object.
	 * @param {Event} e - event object
	 * @returns {HTMLElement} - target element
	 * @memberof module:domEvent
	 */
	function getTarget(e) {
	  return e.target || e.srcElement;
	}

	module.exports = getTarget;


	/***/ }),
	/* 22 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Bind DOM events
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var isString = __webpack_require__(4);
	var forEach = __webpack_require__(3);

	var safeEvent = __webpack_require__(23);

	/**
	 * Bind DOM events.
	 * @param {HTMLElement} element - element to bind events
	 * @param {(string|object)} types - Space splitted events names or eventName:handler object
	 * @param {(function|object)} handler - handler function or context for handler method
	 * @param {object} [context] context - context for handler method.
	 * @memberof module:domEvent
	 * @example
	 * var div = document.querySelector('div');
	 * 
	 * // Bind one event to an element.
	 * on(div, 'click', toggle);
	 * 
	 * // Bind multiple events with a same handler to multiple elements at once.
	 * // Use event names splitted by a space.
	 * on(div, 'mouseenter mouseleave', changeColor);
	 * 
	 * // Bind multiple events with different handlers to an element at once.
	 * // Use an object which of key is an event name and value is a handler function.
	 * on(div, {
	 *   keydown: highlight,
	 *   keyup: dehighlight
	 * });
	 * 
	 * // Set a context for handler method.
	 * var name = 'global';
	 * var repository = {name: 'CodeSnippet'};
	 * on(div, 'drag', function() {
	 *  console.log(this.name);
	 * }, repository);
	 * // Result when you drag a div: "CodeSnippet"
	 */
	function on(element, types, handler, context) {
	  if (isString(types)) {
	    forEach(types.split(/\s+/g), function(type) {
	      bindEvent(element, type, handler, context);
	    });

	    return;
	  }

	  forEach(types, function(func, type) {
	    bindEvent(element, type, func, handler);
	  });
	}

	/**
	 * Bind DOM events
	 * @param {HTMLElement} element - element to bind events
	 * @param {string} type - events name
	 * @param {function} handler - handler function or context for handler method
	 * @param {object} [context] context - context for handler method.
	 * @private
	 */
	function bindEvent(element, type, handler, context) {
	  /**
	     * Event handler
	     * @param {Event} e - event object
	     */
	  function eventHandler(e) {
	    handler.call(context || element, e || window.event);
	  }

	  if ('addEventListener' in element) {
	    element.addEventListener(type, eventHandler);
	  } else if ('attachEvent' in element) {
	    element.attachEvent('on' + type, eventHandler);
	  }
	  memorizeHandler(element, type, handler, eventHandler);
	}

	/**
	 * Memorize DOM event handler for unbinding.
	 * @param {HTMLElement} element - element to bind events
	 * @param {string} type - events name
	 * @param {function} handler - handler function that user passed at on() use
	 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
	 * @private
	 */
	function memorizeHandler(element, type, handler, wrappedHandler) {
	  var events = safeEvent(element, type);
	  var existInEvents = false;

	  forEach(events, function(obj) {
	    if (obj.handler === handler) {
	      existInEvents = true;

	      return false;
	    }

	    return true;
	  });

	  if (!existInEvents) {
	    events.push({
	      handler: handler,
	      wrappedHandler: wrappedHandler
	    });
	  }
	}

	module.exports = on;


	/***/ }),
	/* 23 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Get event collection for specific HTML element
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var EVENT_KEY = '_feEventKey';

	/**
	 * Get event collection for specific HTML element
	 * @param {HTMLElement} element - HTML element
	 * @param {string} type - event type
	 * @returns {array}
	 * @private
	 */
	function safeEvent(element, type) {
	  var events = element[EVENT_KEY];
	  var handlers;

	  if (!events) {
	    events = element[EVENT_KEY] = {};
	  }

	  handlers = events[type];
	  if (!handlers) {
	    handlers = events[type] = [];
	  }

	  return handlers;
	}

	module.exports = safeEvent;


	/***/ }),
	/* 24 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Prevent default action
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Prevent default action
	 * @param {Event} e - event object
	 * @memberof module:domEvent
	 */
	function preventDefault(e) {
	  if (e.preventDefault) {
	    e.preventDefault();

	    return;
	  }

	  e.returnValue = false;
	}

	module.exports = preventDefault;


	/***/ }),
	/* 25 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Add css class to element
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var forEach = __webpack_require__(3);
	var inArray = __webpack_require__(8);
	var getClass = __webpack_require__(26);
	var setClassName = __webpack_require__(27);

	/**
	 * domUtil module
	 * @module domUtil
	 */

	/**
	 * Add css class to element
	 * @param {(HTMLElement|SVGElement)} element - target element
	 * @param {...string} cssClass - css classes to add
	 * @memberof module:domUtil
	 */
	function addClass(element) {
	  var cssClass = Array.prototype.slice.call(arguments, 1);
	  var classList = element.classList;
	  var newClass = [];
	  var origin;

	  if (classList) {
	    forEach(cssClass, function(name) {
	      element.classList.add(name);
	    });

	    return;
	  }

	  origin = getClass(element);

	  if (origin) {
	    cssClass = [].concat(origin.split(/\s+/), cssClass);
	  }

	  forEach(cssClass, function(cls) {
	    if (inArray(cls, newClass) < 0) {
	      newClass.push(cls);
	    }
	  });

	  setClassName(element, newClass);
	}

	module.exports = addClass;


	/***/ }),
	/* 26 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Get HTML element's design classes.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var isUndefined = __webpack_require__(1);

	/**
	 * Get HTML element's design classes.
	 * @param {(HTMLElement|SVGElement)} element target element
	 * @returns {string} element css class name
	 * @memberof module:domUtil
	 */
	function getClass(element) {
	  if (!element || !element.className) {
	    return '';
	  }

	  if (isUndefined(element.className.baseVal)) {
	    return element.className;
	  }

	  return element.className.baseVal;
	}

	module.exports = getClass;


	/***/ }),
	/* 27 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Set className value
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var isArray = __webpack_require__(2);
	var isUndefined = __webpack_require__(1);

	/**
	 * Set className value
	 * @param {(HTMLElement|SVGElement)} element - target element
	 * @param {(string|string[])} cssClass - class names
	 * @private
	 */
	function setClassName(element, cssClass) {
	  cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;

	  cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

	  if (isUndefined(element.className.baseVal)) {
	    element.className = cssClass;

	    return;
	  }

	  element.className.baseVal = cssClass;
	}

	module.exports = setClassName;


	/***/ }),
	/* 28 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	/**
	 * Check whether the given variable is a instance of HTMLNode or not.
	 * If the given variables is a instance of HTMLNode, return true.
	 * @param {*} html - Target for checking
	 * @returns {boolean} Is HTMLNode ?
	 * @memberof module:type
	 */
	function isHTMLNode(html) {
	  if (typeof HTMLElement === 'object') {
	    return (html && (html instanceof HTMLElement || !!html.nodeType));
	  }

	  return !!(html && html.nodeType);
	}

	module.exports = isHTMLNode;


	/***/ }),
	/* 29 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Convert text by binding expressions with context.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var inArray = __webpack_require__(8);
	var forEach = __webpack_require__(3);
	var isArray = __webpack_require__(2);
	var isString = __webpack_require__(4);
	var extend = __webpack_require__(0);

	// IE8 does not support capture groups.
	var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
	var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
	var BRACKET_REGEXP = /\[\s?|\s?\]/;
	var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
	var DOT_REGEXP = /\./;
	var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
	var STRING_REGEXP = /"|'/g;
	var NUMBER_REGEXP = /^-?\d+\.?\d*$/;

	var EXPRESSION_INTERVAL = 2;

	var BLOCK_HELPERS = {
	  'if': handleIf,
	  'each': handleEach,
	  'with': handleWith
	};

	var isValidSplit = 'a'.split(/a/).length === 3;

	/**
	 * Split by RegExp. (Polyfill for IE8)
	 * @param {string} text - text to be splitted\
	 * @param {RegExp} regexp - regular expression
	 * @returns {Array.<string>}
	 */
	var splitByRegExp = (function() {
	  if (isValidSplit) {
	    return function(text, regexp) {
	      return text.split(regexp);
	    };
	  }

	  return function(text, regexp) {
	    var result = [];
	    var prevIndex = 0;
	    var match, index;

	    if (!regexp.global) {
	      regexp = new RegExp(regexp, 'g');
	    }

	    match = regexp.exec(text);
	    while (match !== null) {
	      index = match.index;
	      result.push(text.slice(prevIndex, index));

	      prevIndex = index + match[0].length;
	      match = regexp.exec(text);
	    }
	    result.push(text.slice(prevIndex));

	    return result;
	  };
	})();

	/**
	 * Find value in the context by an expression.
	 * @param {string} exp - an expression
	 * @param {object} context - context
	 * @returns {*}
	 * @private
	 */
	// eslint-disable-next-line complexity
	function getValueFromContext(exp, context) {
	  var splitedExps;
	  var value = context[exp];

	  if (exp === 'true') {
	    value = true;
	  } else if (exp === 'false') {
	    value = false;
	  } else if (STRING_NOTATION_REGEXP.test(exp)) {
	    value = exp.replace(STRING_REGEXP, '');
	  } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
	    splitedExps = exp.split(BRACKET_REGEXP);
	    value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
	  } else if (DOT_NOTATION_REGEXP.test(exp)) {
	    splitedExps = exp.split(DOT_REGEXP);
	    value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
	  } else if (NUMBER_REGEXP.test(exp)) {
	    value = parseFloat(exp);
	  }

	  return value;
	}

	/**
	 * Extract elseif and else expressions.
	 * @param {Array.<string>} ifExps - args of if expression
	 * @param {Array.<string>} sourcesInsideBlock - sources inside if block
	 * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
	 * @private
	 */
	function extractElseif(ifExps, sourcesInsideBlock) {
	  var exps = [ifExps];
	  var sourcesInsideIf = [];
	  var otherIfCount = 0;
	  var start = 0;

	  // eslint-disable-next-line complexity
	  forEach(sourcesInsideBlock, function(source, index) {
	    if (source.indexOf('if') === 0) {
	      otherIfCount += 1;
	    } else if (source === '/if') {
	      otherIfCount -= 1;
	    } else if (!otherIfCount && (source.indexOf('elseif') === 0 || source === 'else')) {
	      exps.push(source === 'else' ? ['true'] : source.split(' ').slice(1));
	      sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
	      start = index + 1;
	    }
	  });

	  sourcesInsideIf.push(sourcesInsideBlock.slice(start));

	  return {
	    exps: exps,
	    sourcesInsideIf: sourcesInsideIf
	  };
	}

	/**
	 * Helper function for "if". 
	 * @param {Array.<string>} exps - array of expressions split by spaces
	 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
	 * @param {object} context - context
	 * @returns {string}
	 * @private
	 */
	function handleIf(exps, sourcesInsideBlock, context) {
	  var analyzed = extractElseif(exps, sourcesInsideBlock);
	  var result = false;
	  var compiledSource = '';

	  forEach(analyzed.exps, function(exp, index) {
	    result = handleExpression(exp, context);
	    if (result) {
	      compiledSource = compile(analyzed.sourcesInsideIf[index], context);
	    }

	    return !result;
	  });

	  return compiledSource;
	}

	/**
	 * Helper function for "each".
	 * @param {Array.<string>} exps - array of expressions split by spaces
	 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
	 * @param {object} context - context
	 * @returns {string}
	 * @private
	 */
	function handleEach(exps, sourcesInsideBlock, context) {
	  var collection = handleExpression(exps, context);
	  var additionalKey = isArray(collection) ? '@index' : '@key';
	  var additionalContext = {};
	  var result = '';

	  forEach(collection, function(item, key) {
	    additionalContext[additionalKey] = key;
	    additionalContext['@this'] = item;
	    extend(context, additionalContext);

	    result += compile(sourcesInsideBlock.slice(), context);
	  });

	  return result;
	}

	/**
	 * Helper function for "with ... as"
	 * @param {Array.<string>} exps - array of expressions split by spaces
	 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
	 * @param {object} context - context
	 * @returns {string}
	 * @private
	 */
	function handleWith(exps, sourcesInsideBlock, context) {
	  var asIndex = inArray('as', exps);
	  var alias = exps[asIndex + 1];
	  var result = handleExpression(exps.slice(0, asIndex), context);

	  var additionalContext = {};
	  additionalContext[alias] = result;

	  return compile(sourcesInsideBlock, extend(context, additionalContext)) || '';
	}

	/**
	 * Extract sources inside block in place.
	 * @param {Array.<string>} sources - array of sources
	 * @param {number} start - index of start block
	 * @param {number} end - index of end block
	 * @returns {Array.<string>}
	 * @private
	 */
	function extractSourcesInsideBlock(sources, start, end) {
	  var sourcesInsideBlock = sources.splice(start + 1, end - start);
	  sourcesInsideBlock.pop();

	  return sourcesInsideBlock;
	}

	/**
	 * Handle block helper function
	 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
	 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
	 * @param {object} context - context
	 * @returns {Array.<string>}
	 * @private
	 */
	function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
	  var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
	  var helperCount = 1;
	  var startBlockIndex = 0;
	  var endBlockIndex;
	  var index = startBlockIndex + EXPRESSION_INTERVAL;
	  var expression = sourcesToEnd[index];

	  while (helperCount && isString(expression)) {
	    if (expression.indexOf(helperKeyword) === 0) {
	      helperCount += 1;
	    } else if (expression.indexOf('/' + helperKeyword) === 0) {
	      helperCount -= 1;
	      endBlockIndex = index;
	    }

	    index += EXPRESSION_INTERVAL;
	    expression = sourcesToEnd[index];
	  }

	  if (helperCount) {
	    throw Error(helperKeyword + ' needs {{/' + helperKeyword + '}} expression.');
	  }

	  sourcesToEnd[startBlockIndex] = executeBlockHelper(
	    sourcesToEnd[startBlockIndex].split(' ').slice(1),
	    extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex),
	    context
	  );

	  return sourcesToEnd;
	}

	/**
	 * Helper function for "custom helper".
	 * If helper is not a function, return helper itself.
	 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
	 * @param {object} context - context
	 * @returns {string}
	 * @private
	 */
	function handleExpression(exps, context) {
	  var result = getValueFromContext(exps[0], context);

	  if (result instanceof Function) {
	    return executeFunction(result, exps.slice(1), context);
	  }

	  return result;
	}

	/**
	 * Execute a helper function.
	 * @param {Function} helper - helper function
	 * @param {Array.<string>} argExps - expressions of arguments
	 * @param {object} context - context
	 * @returns {string} - result of executing the function with arguments
	 * @private
	 */
	function executeFunction(helper, argExps, context) {
	  var args = [];
	  forEach(argExps, function(exp) {
	    args.push(getValueFromContext(exp, context));
	  });

	  return helper.apply(null, args);
	}

	/**
	 * Get a result of compiling an expression with the context.
	 * @param {Array.<string>} sources - array of sources split by regexp of expression.
	 * @param {object} context - context
	 * @returns {Array.<string>} - array of sources that bind with its context
	 * @private
	 */
	function compile(sources, context) {
	  var index = 1;
	  var expression = sources[index];
	  var exps, firstExp, result;

	  while (isString(expression)) {
	    exps = expression.split(' ');
	    firstExp = exps[0];

	    if (BLOCK_HELPERS[firstExp]) {
	      result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
	      sources = sources.concat(result);
	    } else {
	      sources[index] = handleExpression(exps, context);
	    }

	    index += EXPRESSION_INTERVAL;
	    expression = sources[index];
	  }

	  return sources.join('');
	}

	/**
	 * Convert text by binding expressions with context.
	 * <br>
	 * If expression exists in the context, it will be replaced.
	 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
	 * An array or object can be accessed using bracket and dot notation.
	 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
	 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
	 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
	 * <br>
	 * If replaced expression is a function, next expressions will be arguments of the function.
	 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
	 * <br>
	 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
	 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
	 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
	 * 3) 'with ... as ...' provides an alias.
	 * @param {string} text - text with expressions
	 * @param {object} context - context
	 * @returns {string} - text that bind with its context
	 * @memberof module:domUtil
	 * @example
	 * var template = require('tui-code-snippet/domUtil/template');
	 * 
	 * var source = 
	 *     '<h1>'
	 *   +   '{{if isValidNumber title}}'
	 *   +     '{{title}}th'
	 *   +   '{{elseif isValidDate title}}'
	 *   +     'Date: {{title}}'
	 *   +   '{{/if}}'
	 *   + '</h1>'
	 *   + '{{each list}}'
	 *   +   '{{with addOne @index as idx}}'
	 *   +     '<p>{{idx}}: {{@this}}</p>'
	 *   +   '{{/with}}'
	 *   + '{{/each}}';
	 * 
	 * var context = {
	 *   isValidDate: function(text) {
	 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
	 *   },
	 *   isValidNumber: function(text) {
	 *     return /^\d+$/.test(text);
	 *   }
	 *   title: '2019-11-25',
	 *   list: ['Clean the room', 'Wash the dishes'],
	 *   addOne: function(num) {
	 *     return num + 1;
	 *   }
	 * };
	 * 
	 * var result = template(source, context);
	 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
	 */
	function template(text, context) {
	  return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
	}

	module.exports = template;


	/***/ }),
	/* 30 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Send hostname on DOMContentLoaded.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var isUndefined = __webpack_require__(1);
	var imagePing = __webpack_require__(31);

	var ms7days = 7 * 24 * 60 * 60 * 1000;

	/**
	 * Check if the date has passed 7 days
	 * @param {number} date - milliseconds
	 * @returns {boolean}
	 * @private
	 */
	function isExpired(date) {
	  var now = new Date().getTime();

	  return now - date > ms7days;
	}

	/**
	 * Send hostname on DOMContentLoaded.
	 * To prevent hostname set tui.usageStatistics to false.
	 * @param {string} appName - application name
	 * @param {string} trackingId - GA tracking ID
	 * @ignore
	 */
	function sendHostname(appName, trackingId) {
	  var url = 'https://www.google-analytics.com/collect';
	  var hostname = location.hostname;
	  var hitType = 'event';
	  var eventCategory = 'use';
	  var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
	  var date = window.localStorage.getItem(applicationKeyForStorage);

	  // skip if the flag is defined and is set to false explicitly
	  if (!isUndefined(window.tui) && window.tui.usageStatistics === false) {
	    return;
	  }

	  // skip if not pass seven days old
	  if (date && !isExpired(date)) {
	    return;
	  }

	  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());

	  setTimeout(function() {
	    if (document.readyState === 'interactive' || document.readyState === 'complete') {
	      imagePing(url, {
	        v: 1,
	        t: hitType,
	        tid: trackingId,
	        cid: hostname,
	        dp: hostname,
	        dh: appName,
	        el: appName,
	        ec: eventCategory
	      });
	    }
	  }, 1000);
	}

	module.exports = sendHostname;


	/***/ }),
	/* 31 */
	/***/ (function(module, exports, __webpack_require__) {
	/**
	 * @fileoverview Request image ping.
	 * @author NHN FE Development Lab <dl_javascript@nhn.com>
	 */



	var forEachOwnProperties = __webpack_require__(6);

	/**
	 * @module request
	 */

	/**
	 * Request image ping.
	 * @param {String} url url for ping request
	 * @param {Object} trackingInfo infos for make query string
	 * @returns {HTMLElement}
	 * @memberof module:request
	 * @example
	 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
	 *
	 * imagePing('https://www.google-analytics.com/collect', {
	 *     v: 1,
	 *     t: 'event',
	 *     tid: 'trackingid',
	 *     cid: 'cid',
	 *     dp: 'dp',
	 *     dh: 'dh'
	 * });
	 */
	function imagePing(url, trackingInfo) {
	  var trackingElement = document.createElement('img');
	  var queryString = '';
	  forEachOwnProperties(trackingInfo, function(value, key) {
	    queryString += '&' + key + '=' + value;
	  });
	  queryString = queryString.substring(1);

	  trackingElement.src = url + '?' + queryString;

	  trackingElement.style.display = 'none';
	  document.body.appendChild(trackingElement);
	  document.body.removeChild(trackingElement);

	  return trackingElement;
	}

	module.exports = imagePing;


	/***/ })
	/******/ ]);
	}); 
} (tuiPagination));

var tuiPaginationExports = tuiPagination.exports;
const Pagination = /*@__PURE__*/getDefaultExportFromCjs(tuiPaginationExports);

var choices = {exports: {}};

/*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(window, function() {
	return /******/ (function() { // webpackBootstrap
	/******/ 	var __webpack_modules__ = ({

	/***/ 282:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
	var constants_1 = __webpack_require__(883);
	var addChoice = function (_a) {
	  var value = _a.value,
	    label = _a.label,
	    id = _a.id,
	    groupId = _a.groupId,
	    disabled = _a.disabled,
	    elementId = _a.elementId,
	    customProperties = _a.customProperties,
	    placeholder = _a.placeholder,
	    keyCode = _a.keyCode;
	  return {
	    type: constants_1.ACTION_TYPES.ADD_CHOICE,
	    value: value,
	    label: label,
	    id: id,
	    groupId: groupId,
	    disabled: disabled,
	    elementId: elementId,
	    customProperties: customProperties,
	    placeholder: placeholder,
	    keyCode: keyCode
	  };
	};
	exports.addChoice = addChoice;
	var filterChoices = function (results) {
	  return {
	    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
	    results: results
	  };
	};
	exports.filterChoices = filterChoices;
	var activateChoices = function (active) {
	  if (active === void 0) {
	    active = true;
	  }
	  return {
	    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
	    active: active
	  };
	};
	exports.activateChoices = activateChoices;
	var clearChoices = function () {
	  return {
	    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
	  };
	};
	exports.clearChoices = clearChoices;

	/***/ }),

	/***/ 783:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.addGroup = void 0;
	var constants_1 = __webpack_require__(883);
	var addGroup = function (_a) {
	  var value = _a.value,
	    id = _a.id,
	    active = _a.active,
	    disabled = _a.disabled;
	  return {
	    type: constants_1.ACTION_TYPES.ADD_GROUP,
	    value: value,
	    id: id,
	    active: active,
	    disabled: disabled
	  };
	};
	exports.addGroup = addGroup;

	/***/ }),

	/***/ 464:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.highlightItem = exports.removeItem = exports.addItem = void 0;
	var constants_1 = __webpack_require__(883);
	var addItem = function (_a) {
	  var value = _a.value,
	    label = _a.label,
	    id = _a.id,
	    choiceId = _a.choiceId,
	    groupId = _a.groupId,
	    customProperties = _a.customProperties,
	    placeholder = _a.placeholder,
	    keyCode = _a.keyCode;
	  return {
	    type: constants_1.ACTION_TYPES.ADD_ITEM,
	    value: value,
	    label: label,
	    id: id,
	    choiceId: choiceId,
	    groupId: groupId,
	    customProperties: customProperties,
	    placeholder: placeholder,
	    keyCode: keyCode
	  };
	};
	exports.addItem = addItem;
	var removeItem = function (id, choiceId) {
	  return {
	    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
	    id: id,
	    choiceId: choiceId
	  };
	};
	exports.removeItem = removeItem;
	var highlightItem = function (id, highlighted) {
	  return {
	    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
	    id: id,
	    highlighted: highlighted
	  };
	};
	exports.highlightItem = highlightItem;

	/***/ }),

	/***/ 137:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
	var constants_1 = __webpack_require__(883);
	var clearAll = function () {
	  return {
	    type: constants_1.ACTION_TYPES.CLEAR_ALL
	  };
	};
	exports.clearAll = clearAll;
	var resetTo = function (state) {
	  return {
	    type: constants_1.ACTION_TYPES.RESET_TO,
	    state: state
	  };
	};
	exports.resetTo = resetTo;
	var setIsLoading = function (isLoading) {
	  return {
	    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
	    isLoading: isLoading
	  };
	};
	exports.setIsLoading = setIsLoading;

	/***/ }),

	/***/ 373:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	};
	var __importDefault = this && this.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var deepmerge_1 = __importDefault(__webpack_require__(996));
	/* eslint-disable @typescript-eslint/no-explicit-any */
	var fuse_js_1 = __importDefault(__webpack_require__(221));
	var choices_1 = __webpack_require__(282);
	var groups_1 = __webpack_require__(783);
	var items_1 = __webpack_require__(464);
	var misc_1 = __webpack_require__(137);
	var components_1 = __webpack_require__(520);
	var constants_1 = __webpack_require__(883);
	var defaults_1 = __webpack_require__(789);
	var utils_1 = __webpack_require__(799);
	var reducers_1 = __webpack_require__(655);
	var store_1 = __importDefault(__webpack_require__(744));
	var templates_1 = __importDefault(__webpack_require__(686));
	/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */
	var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
	var USER_DEFAULTS = {};
	/**
	 * Choices
	 * @author Josh Johnson<josh@joshuajohnson.co.uk>
	 */
	var Choices = /** @class */function () {
	  function Choices(element, userConfig) {
	    if (element === void 0) {
	      element = '[data-choice]';
	    }
	    if (userConfig === void 0) {
	      userConfig = {};
	    }
	    var _this = this;
	    if (userConfig.allowHTML === undefined) {
	      console.warn('Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.');
	    }
	    this.config = deepmerge_1.default.all([defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig],
	    // When merging array configs, replace with a copy of the userConfig array,
	    // instead of concatenating with the default array
	    {
	      arrayMerge: function (_, sourceArray) {
	        return __spreadArray([], sourceArray, true);
	      }
	    });
	    var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
	    if (invalidConfigOptions.length) {
	      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
	    }
	    var passedElement = typeof element === 'string' ? document.querySelector(element) : element;
	    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
	      throw TypeError('Expected one of the following types text|select-one|select-multiple');
	    }
	    this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
	    this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
	    this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
	    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
	    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
	    if (!['auto', 'always'].includes("".concat(this.config.renderSelectedChoices))) {
	      this.config.renderSelectedChoices = 'auto';
	    }
	    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
	      var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
	      this.config.addItemFilter = re.test.bind(re);
	    }
	    if (this._isTextElement) {
	      this.passedElement = new components_1.WrappedInput({
	        element: passedElement,
	        classNames: this.config.classNames,
	        delimiter: this.config.delimiter
	      });
	    } else {
	      this.passedElement = new components_1.WrappedSelect({
	        element: passedElement,
	        classNames: this.config.classNames,
	        template: function (data) {
	          return _this._templates.option(data);
	        }
	      });
	    }
	    this.initialised = false;
	    this._store = new store_1.default();
	    this._initialState = reducers_1.defaultState;
	    this._currentState = reducers_1.defaultState;
	    this._prevState = reducers_1.defaultState;
	    this._currentValue = '';
	    this._canSearch = !!this.config.searchEnabled;
	    this._isScrollingOnIe = false;
	    this._highlightPosition = 0;
	    this._wasTap = true;
	    this._placeholderValue = this._generatePlaceholderValue();
	    this._baseId = (0, utils_1.generateId)(this.passedElement.element, 'choices-');
	    /**
	     * setting direction in cases where it's explicitly set on passedElement
	     * or when calculated direction is different from the document
	     */
	    this._direction = this.passedElement.dir;
	    if (!this._direction) {
	      var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
	      var documentDirection = window.getComputedStyle(document.documentElement).direction;
	      if (elementDirection !== documentDirection) {
	        this._direction = elementDirection;
	      }
	    }
	    this._idNames = {
	      itemChoice: 'item-choice'
	    };
	    if (this._isSelectElement) {
	      // Assign preset groups from passed element
	      this._presetGroups = this.passedElement.optionGroups;
	      // Assign preset options from passed element
	      this._presetOptions = this.passedElement.options;
	    }
	    // Assign preset choices from passed object
	    this._presetChoices = this.config.choices;
	    // Assign preset items from passed object first
	    this._presetItems = this.config.items;
	    // Add any values passed from attribute
	    if (this.passedElement.value && this._isTextElement) {
	      var splitValues = this.passedElement.value.split(this.config.delimiter);
	      this._presetItems = this._presetItems.concat(splitValues);
	    }
	    // Create array of choices from option elements
	    if (this.passedElement.options) {
	      this.passedElement.options.forEach(function (option) {
	        _this._presetChoices.push({
	          value: option.value,
	          label: option.innerHTML,
	          selected: !!option.selected,
	          disabled: option.disabled || option.parentNode.disabled,
	          placeholder: option.value === '' || option.hasAttribute('placeholder'),
	          customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
	        });
	      });
	    }
	    this._render = this._render.bind(this);
	    this._onFocus = this._onFocus.bind(this);
	    this._onBlur = this._onBlur.bind(this);
	    this._onKeyUp = this._onKeyUp.bind(this);
	    this._onKeyDown = this._onKeyDown.bind(this);
	    this._onClick = this._onClick.bind(this);
	    this._onTouchMove = this._onTouchMove.bind(this);
	    this._onTouchEnd = this._onTouchEnd.bind(this);
	    this._onMouseDown = this._onMouseDown.bind(this);
	    this._onMouseOver = this._onMouseOver.bind(this);
	    this._onFormReset = this._onFormReset.bind(this);
	    this._onSelectKey = this._onSelectKey.bind(this);
	    this._onEnterKey = this._onEnterKey.bind(this);
	    this._onEscapeKey = this._onEscapeKey.bind(this);
	    this._onDirectionKey = this._onDirectionKey.bind(this);
	    this._onDeleteKey = this._onDeleteKey.bind(this);
	    // If element has already been initialised with Choices, fail silently
	    if (this.passedElement.isActive) {
	      if (!this.config.silent) {
	        console.warn('Trying to initialise Choices on element already initialised', {
	          element: element
	        });
	      }
	      this.initialised = true;
	      return;
	    }
	    // Let's go
	    this.init();
	  }
	  Object.defineProperty(Choices, "defaults", {
	    get: function () {
	      return Object.preventExtensions({
	        get options() {
	          return USER_DEFAULTS;
	        },
	        get templates() {
	          return templates_1.default;
	        }
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Choices.prototype.init = function () {
	    if (this.initialised) {
	      return;
	    }
	    this._createTemplates();
	    this._createElements();
	    this._createStructure();
	    this._store.subscribe(this._render);
	    this._render();
	    this._addEventListeners();
	    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');
	    if (shouldDisable) {
	      this.disable();
	    }
	    this.initialised = true;
	    var callbackOnInit = this.config.callbackOnInit;
	    // Run callback if it is a function
	    if (callbackOnInit && typeof callbackOnInit === 'function') {
	      callbackOnInit.call(this);
	    }
	  };
	  Choices.prototype.destroy = function () {
	    if (!this.initialised) {
	      return;
	    }
	    this._removeEventListeners();
	    this.passedElement.reveal();
	    this.containerOuter.unwrap(this.passedElement.element);
	    this.clearStore();
	    if (this._isSelectElement) {
	      this.passedElement.options = this._presetOptions;
	    }
	    this._templates = templates_1.default;
	    this.initialised = false;
	  };
	  Choices.prototype.enable = function () {
	    if (this.passedElement.isDisabled) {
	      this.passedElement.enable();
	    }
	    if (this.containerOuter.isDisabled) {
	      this._addEventListeners();
	      this.input.enable();
	      this.containerOuter.enable();
	    }
	    return this;
	  };
	  Choices.prototype.disable = function () {
	    if (!this.passedElement.isDisabled) {
	      this.passedElement.disable();
	    }
	    if (!this.containerOuter.isDisabled) {
	      this._removeEventListeners();
	      this.input.disable();
	      this.containerOuter.disable();
	    }
	    return this;
	  };
	  Choices.prototype.highlightItem = function (item, runEvent) {
	    if (runEvent === void 0) {
	      runEvent = true;
	    }
	    if (!item || !item.id) {
	      return this;
	    }
	    var id = item.id,
	      _a = item.groupId,
	      groupId = _a === void 0 ? -1 : _a,
	      _b = item.value,
	      value = _b === void 0 ? '' : _b,
	      _c = item.label,
	      label = _c === void 0 ? '' : _c;
	    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
	    this._store.dispatch((0, items_1.highlightItem)(id, true));
	    if (runEvent) {
	      this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
	        id: id,
	        value: value,
	        label: label,
	        groupValue: group && group.value ? group.value : null
	      });
	    }
	    return this;
	  };
	  Choices.prototype.unhighlightItem = function (item) {
	    if (!item || !item.id) {
	      return this;
	    }
	    var id = item.id,
	      _a = item.groupId,
	      groupId = _a === void 0 ? -1 : _a,
	      _b = item.value,
	      value = _b === void 0 ? '' : _b,
	      _c = item.label,
	      label = _c === void 0 ? '' : _c;
	    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
	    this._store.dispatch((0, items_1.highlightItem)(id, false));
	    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
	      id: id,
	      value: value,
	      label: label,
	      groupValue: group && group.value ? group.value : null
	    });
	    return this;
	  };
	  Choices.prototype.highlightAll = function () {
	    var _this = this;
	    this._store.items.forEach(function (item) {
	      return _this.highlightItem(item);
	    });
	    return this;
	  };
	  Choices.prototype.unhighlightAll = function () {
	    var _this = this;
	    this._store.items.forEach(function (item) {
	      return _this.unhighlightItem(item);
	    });
	    return this;
	  };
	  Choices.prototype.removeActiveItemsByValue = function (value) {
	    var _this = this;
	    this._store.activeItems.filter(function (item) {
	      return item.value === value;
	    }).forEach(function (item) {
	      return _this._removeItem(item);
	    });
	    return this;
	  };
	  Choices.prototype.removeActiveItems = function (excludedId) {
	    var _this = this;
	    this._store.activeItems.filter(function (_a) {
	      var id = _a.id;
	      return id !== excludedId;
	    }).forEach(function (item) {
	      return _this._removeItem(item);
	    });
	    return this;
	  };
	  Choices.prototype.removeHighlightedItems = function (runEvent) {
	    var _this = this;
	    if (runEvent === void 0) {
	      runEvent = false;
	    }
	    this._store.highlightedActiveItems.forEach(function (item) {
	      _this._removeItem(item);
	      // If this action was performed by the user
	      // trigger the event
	      if (runEvent) {
	        _this._triggerChange(item.value);
	      }
	    });
	    return this;
	  };
	  Choices.prototype.showDropdown = function (preventInputFocus) {
	    var _this = this;
	    if (this.dropdown.isActive) {
	      return this;
	    }
	    requestAnimationFrame(function () {
	      _this.dropdown.show();
	      _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
	      if (!preventInputFocus && _this._canSearch) {
	        _this.input.focus();
	      }
	      _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
	    });
	    return this;
	  };
	  Choices.prototype.hideDropdown = function (preventInputBlur) {
	    var _this = this;
	    if (!this.dropdown.isActive) {
	      return this;
	    }
	    requestAnimationFrame(function () {
	      _this.dropdown.hide();
	      _this.containerOuter.close();
	      if (!preventInputBlur && _this._canSearch) {
	        _this.input.removeActiveDescendant();
	        _this.input.blur();
	      }
	      _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
	    });
	    return this;
	  };
	  Choices.prototype.getValue = function (valueOnly) {
	    if (valueOnly === void 0) {
	      valueOnly = false;
	    }
	    var values = this._store.activeItems.reduce(function (selectedItems, item) {
	      var itemValue = valueOnly ? item.value : item;
	      selectedItems.push(itemValue);
	      return selectedItems;
	    }, []);
	    return this._isSelectOneElement ? values[0] : values;
	  };
	  Choices.prototype.setValue = function (items) {
	    var _this = this;
	    if (!this.initialised) {
	      return this;
	    }
	    items.forEach(function (value) {
	      return _this._setChoiceOrItem(value);
	    });
	    return this;
	  };
	  Choices.prototype.setChoiceByValue = function (value) {
	    var _this = this;
	    if (!this.initialised || this._isTextElement) {
	      return this;
	    }
	    // If only one value has been passed, convert to array
	    var choiceValue = Array.isArray(value) ? value : [value];
	    // Loop through each value and
	    choiceValue.forEach(function (val) {
	      return _this._findAndSelectChoiceByValue(val);
	    });
	    return this;
	  };
	  /**
	   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
	   * a value field name and a label field name.
	   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
	   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
	   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
	   *
	   * **Input types affected:** select-one, select-multiple
	   *
	   * @example
	   * ```js
	   * const example = new Choices(element);
	   *
	   * example.setChoices([
	   *   {value: 'One', label: 'Label One', disabled: true},
	   *   {value: 'Two', label: 'Label Two', selected: true},
	   *   {value: 'Three', label: 'Label Three'},
	   * ], 'value', 'label', false);
	   * ```
	   *
	   * @example
	   * ```js
	   * const example = new Choices(element);
	   *
	   * example.setChoices(async () => {
	   *   try {
	   *      const items = await fetch('/items');
	   *      return items.json()
	   *   } catch(err) {
	   *      console.error(err)
	   *   }
	   * });
	   * ```
	   *
	   * @example
	   * ```js
	   * const example = new Choices(element);
	   *
	   * example.setChoices([{
	   *   label: 'Group one',
	   *   id: 1,
	   *   disabled: false,
	   *   choices: [
	   *     {value: 'Child One', label: 'Child One', selected: true},
	   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
	   *     {value: 'Child Three', label: 'Child Three'},
	   *   ]
	   * },
	   * {
	   *   label: 'Group two',
	   *   id: 2,
	   *   disabled: false,
	   *   choices: [
	   *     {value: 'Child Four', label: 'Child Four', disabled: true},
	   *     {value: 'Child Five', label: 'Child Five'},
	   *     {value: 'Child Six', label: 'Child Six', customProperties: {
	   *       description: 'Custom description about child six',
	   *       random: 'Another random custom property'
	   *     }},
	   *   ]
	   * }], 'value', 'label', false);
	   * ```
	   */
	  Choices.prototype.setChoices = function (choicesArrayOrFetcher, value, label, replaceChoices) {
	    var _this = this;
	    if (choicesArrayOrFetcher === void 0) {
	      choicesArrayOrFetcher = [];
	    }
	    if (value === void 0) {
	      value = 'value';
	    }
	    if (label === void 0) {
	      label = 'label';
	    }
	    if (replaceChoices === void 0) {
	      replaceChoices = false;
	    }
	    if (!this.initialised) {
	      throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
	    }
	    if (!this._isSelectElement) {
	      throw new TypeError("setChoices can't be used with INPUT based Choices");
	    }
	    if (typeof value !== 'string' || !value) {
	      throw new TypeError("value parameter must be a name of 'value' field in passed objects");
	    }
	    // Clear choices if needed
	    if (replaceChoices) {
	      this.clearChoices();
	    }
	    if (typeof choicesArrayOrFetcher === 'function') {
	      // it's a choices fetcher function
	      var fetcher_1 = choicesArrayOrFetcher(this);
	      if (typeof Promise === 'function' && fetcher_1 instanceof Promise) {
	        // that's a promise
	        // eslint-disable-next-line no-promise-executor-return
	        return new Promise(function (resolve) {
	          return requestAnimationFrame(resolve);
	        }).then(function () {
	          return _this._handleLoadingState(true);
	        }).then(function () {
	          return fetcher_1;
	        }).then(function (data) {
	          return _this.setChoices(data, value, label, replaceChoices);
	        }).catch(function (err) {
	          if (!_this.config.silent) {
	            console.error(err);
	          }
	        }).then(function () {
	          return _this._handleLoadingState(false);
	        }).then(function () {
	          return _this;
	        });
	      }
	      // function returned something else than promise, let's check if it's an array of choices
	      if (!Array.isArray(fetcher_1)) {
	        throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
	      }
	      // recursion with results, it's sync and choices were cleared already
	      return this.setChoices(fetcher_1, value, label, false);
	    }
	    if (!Array.isArray(choicesArrayOrFetcher)) {
	      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
	    }
	    this.containerOuter.removeLoadingState();
	    this._startLoading();
	    choicesArrayOrFetcher.forEach(function (groupOrChoice) {
	      if (groupOrChoice.choices) {
	        _this._addGroup({
	          id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
	          group: groupOrChoice,
	          valueKey: value,
	          labelKey: label
	        });
	      } else {
	        var choice = groupOrChoice;
	        _this._addChoice({
	          value: choice[value],
	          label: choice[label],
	          isSelected: !!choice.selected,
	          isDisabled: !!choice.disabled,
	          placeholder: !!choice.placeholder,
	          customProperties: choice.customProperties
	        });
	      }
	    });
	    this._stopLoading();
	    return this;
	  };
	  Choices.prototype.clearChoices = function () {
	    this._store.dispatch((0, choices_1.clearChoices)());
	    return this;
	  };
	  Choices.prototype.clearStore = function () {
	    this._store.dispatch((0, misc_1.clearAll)());
	    return this;
	  };
	  Choices.prototype.clearInput = function () {
	    var shouldSetInputWidth = !this._isSelectOneElement;
	    this.input.clear(shouldSetInputWidth);
	    if (!this._isTextElement && this._canSearch) {
	      this._isSearching = false;
	      this._store.dispatch((0, choices_1.activateChoices)(true));
	    }
	    return this;
	  };
	  Choices.prototype._render = function () {
	    if (this._store.isLoading()) {
	      return;
	    }
	    this._currentState = this._store.state;
	    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
	    var shouldRenderChoices = this._isSelectElement;
	    var shouldRenderItems = this._currentState.items !== this._prevState.items;
	    if (!stateChanged) {
	      return;
	    }
	    if (shouldRenderChoices) {
	      this._renderChoices();
	    }
	    if (shouldRenderItems) {
	      this._renderItems();
	    }
	    this._prevState = this._currentState;
	  };
	  Choices.prototype._renderChoices = function () {
	    var _this = this;
	    var _a = this._store,
	      activeGroups = _a.activeGroups,
	      activeChoices = _a.activeChoices;
	    var choiceListFragment = document.createDocumentFragment();
	    this.choiceList.clear();
	    if (this.config.resetScrollPosition) {
	      requestAnimationFrame(function () {
	        return _this.choiceList.scrollToTop();
	      });
	    }
	    // If we have grouped options
	    if (activeGroups.length >= 1 && !this._isSearching) {
	      // If we have a placeholder choice along with groups
	      var activePlaceholders = activeChoices.filter(function (activeChoice) {
	        return activeChoice.placeholder === true && activeChoice.groupId === -1;
	      });
	      if (activePlaceholders.length >= 1) {
	        choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
	      }
	      choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
	    } else if (activeChoices.length >= 1) {
	      choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
	    }
	    // If we have choices to show
	    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
	      var activeItems = this._store.activeItems;
	      var canAddItem = this._canAddItem(activeItems, this.input.value);
	      // ...and we can select them
	      if (canAddItem.response) {
	        // ...append them and highlight the first choice
	        this.choiceList.append(choiceListFragment);
	        this._highlightChoice();
	      } else {
	        var notice = this._getTemplate('notice', canAddItem.notice);
	        this.choiceList.append(notice);
	      }
	    } else {
	      // Otherwise show a notice
	      var dropdownItem = void 0;
	      var notice = void 0;
	      if (this._isSearching) {
	        notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
	        dropdownItem = this._getTemplate('notice', notice, 'no-results');
	      } else {
	        notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
	        dropdownItem = this._getTemplate('notice', notice, 'no-choices');
	      }
	      this.choiceList.append(dropdownItem);
	    }
	  };
	  Choices.prototype._renderItems = function () {
	    var activeItems = this._store.activeItems || [];
	    this.itemList.clear();
	    // Create a fragment to store our list items
	    // (so we don't have to update the DOM for each item)
	    var itemListFragment = this._createItemsFragment(activeItems);
	    // If we have items to add, append them
	    if (itemListFragment.childNodes) {
	      this.itemList.append(itemListFragment);
	    }
	  };
	  Choices.prototype._createGroupsFragment = function (groups, choices, fragment) {
	    var _this = this;
	    if (fragment === void 0) {
	      fragment = document.createDocumentFragment();
	    }
	    var getGroupChoices = function (group) {
	      return choices.filter(function (choice) {
	        if (_this._isSelectOneElement) {
	          return choice.groupId === group.id;
	        }
	        return choice.groupId === group.id && (_this.config.renderSelectedChoices === 'always' || !choice.selected);
	      });
	    };
	    // If sorting is enabled, filter groups
	    if (this.config.shouldSort) {
	      groups.sort(this.config.sorter);
	    }
	    groups.forEach(function (group) {
	      var groupChoices = getGroupChoices(group);
	      if (groupChoices.length >= 1) {
	        var dropdownGroup = _this._getTemplate('choiceGroup', group);
	        fragment.appendChild(dropdownGroup);
	        _this._createChoicesFragment(groupChoices, fragment, true);
	      }
	    });
	    return fragment;
	  };
	  Choices.prototype._createChoicesFragment = function (choices, fragment, withinGroup) {
	    var _this = this;
	    if (fragment === void 0) {
	      fragment = document.createDocumentFragment();
	    }
	    if (withinGroup === void 0) {
	      withinGroup = false;
	    }
	    // Create a fragment to store our list items (so we don't have to update the DOM for each item)
	    var _a = this.config,
	      renderSelectedChoices = _a.renderSelectedChoices,
	      searchResultLimit = _a.searchResultLimit,
	      renderChoiceLimit = _a.renderChoiceLimit;
	    var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
	    var appendChoice = function (choice) {
	      var shouldRender = renderSelectedChoices === 'auto' ? _this._isSelectOneElement || !choice.selected : true;
	      if (shouldRender) {
	        var dropdownItem = _this._getTemplate('choice', choice, _this.config.itemSelectText);
	        fragment.appendChild(dropdownItem);
	      }
	    };
	    var rendererableChoices = choices;
	    if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
	      rendererableChoices = choices.filter(function (choice) {
	        return !choice.selected;
	      });
	    }
	    // Split array into placeholders and "normal" choices
	    var _b = rendererableChoices.reduce(function (acc, choice) {
	        if (choice.placeholder) {
	          acc.placeholderChoices.push(choice);
	        } else {
	          acc.normalChoices.push(choice);
	        }
	        return acc;
	      }, {
	        placeholderChoices: [],
	        normalChoices: []
	      }),
	      placeholderChoices = _b.placeholderChoices,
	      normalChoices = _b.normalChoices;
	    // If sorting is enabled or the user is searching, filter choices
	    if (this.config.shouldSort || this._isSearching) {
	      normalChoices.sort(filter);
	    }
	    var choiceLimit = rendererableChoices.length;
	    // Prepend placeholeder
	    var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
	    if (this._isSearching) {
	      choiceLimit = searchResultLimit;
	    } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
	      choiceLimit = renderChoiceLimit;
	    }
	    // Add each choice to dropdown within range
	    for (var i = 0; i < choiceLimit; i += 1) {
	      if (sortedChoices[i]) {
	        appendChoice(sortedChoices[i]);
	      }
	    }
	    return fragment;
	  };
	  Choices.prototype._createItemsFragment = function (items, fragment) {
	    var _this = this;
	    if (fragment === void 0) {
	      fragment = document.createDocumentFragment();
	    }
	    // Create fragment to add elements to
	    var _a = this.config,
	      shouldSortItems = _a.shouldSortItems,
	      sorter = _a.sorter,
	      removeItemButton = _a.removeItemButton;
	    // If sorting is enabled, filter items
	    if (shouldSortItems && !this._isSelectOneElement) {
	      items.sort(sorter);
	    }
	    if (this._isTextElement) {
	      // Update the value of the hidden input
	      this.passedElement.value = items.map(function (_a) {
	        var value = _a.value;
	        return value;
	      }).join(this.config.delimiter);
	    } else {
	      // Update the options of the hidden input
	      this.passedElement.options = items;
	    }
	    var addItemToFragment = function (item) {
	      // Create new list element
	      var listItem = _this._getTemplate('item', item, removeItemButton);
	      // Append it to list
	      fragment.appendChild(listItem);
	    };
	    // Add each list item to list
	    items.forEach(addItemToFragment);
	    return fragment;
	  };
	  Choices.prototype._triggerChange = function (value) {
	    if (value === undefined || value === null) {
	      return;
	    }
	    this.passedElement.triggerEvent(constants_1.EVENTS.change, {
	      value: value
	    });
	  };
	  Choices.prototype._selectPlaceholderChoice = function (placeholderChoice) {
	    this._addItem({
	      value: placeholderChoice.value,
	      label: placeholderChoice.label,
	      choiceId: placeholderChoice.id,
	      groupId: placeholderChoice.groupId,
	      placeholder: placeholderChoice.placeholder
	    });
	    this._triggerChange(placeholderChoice.value);
	  };
	  Choices.prototype._handleButtonAction = function (activeItems, element) {
	    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
	      return;
	    }
	    var itemId = element.parentNode && element.parentNode.dataset.id;
	    var itemToRemove = itemId && activeItems.find(function (item) {
	      return item.id === parseInt(itemId, 10);
	    });
	    if (!itemToRemove) {
	      return;
	    }
	    // Remove item associated with button
	    this._removeItem(itemToRemove);
	    this._triggerChange(itemToRemove.value);
	    if (this._isSelectOneElement && this._store.placeholderChoice) {
	      this._selectPlaceholderChoice(this._store.placeholderChoice);
	    }
	  };
	  Choices.prototype._handleItemAction = function (activeItems, element, hasShiftKey) {
	    var _this = this;
	    if (hasShiftKey === void 0) {
	      hasShiftKey = false;
	    }
	    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
	      return;
	    }
	    var passedId = element.dataset.id;
	    // We only want to select one item with a click
	    // so we deselect any items that aren't the target
	    // unless shift is being pressed
	    activeItems.forEach(function (item) {
	      if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) {
	        _this.highlightItem(item);
	      } else if (!hasShiftKey && item.highlighted) {
	        _this.unhighlightItem(item);
	      }
	    });
	    // Focus input as without focus, a user cannot do anything with a
	    // highlighted item
	    this.input.focus();
	  };
	  Choices.prototype._handleChoiceAction = function (activeItems, element) {
	    if (!activeItems || !element) {
	      return;
	    }
	    // If we are clicking on an option
	    var id = element.dataset.id;
	    var choice = id && this._store.getChoiceById(id);
	    if (!choice) {
	      return;
	    }
	    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
	    var hasActiveDropdown = this.dropdown.isActive;
	    // Update choice keyCode
	    choice.keyCode = passedKeyCode;
	    this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
	      choice: choice
	    });
	    if (!choice.selected && !choice.disabled) {
	      var canAddItem = this._canAddItem(activeItems, choice.value);
	      if (canAddItem.response) {
	        this._addItem({
	          value: choice.value,
	          label: choice.label,
	          choiceId: choice.id,
	          groupId: choice.groupId,
	          customProperties: choice.customProperties,
	          placeholder: choice.placeholder,
	          keyCode: choice.keyCode
	        });
	        this._triggerChange(choice.value);
	      }
	    }
	    this.clearInput();
	    // We want to close the dropdown if we are dealing with a single select box
	    if (hasActiveDropdown && this._isSelectOneElement) {
	      this.hideDropdown(true);
	      this.containerOuter.focus();
	    }
	  };
	  Choices.prototype._handleBackspace = function (activeItems) {
	    if (!this.config.removeItems || !activeItems) {
	      return;
	    }
	    var lastItem = activeItems[activeItems.length - 1];
	    var hasHighlightedItems = activeItems.some(function (item) {
	      return item.highlighted;
	    });
	    // If editing the last item is allowed and there are not other selected items,
	    // we can edit the item value. Otherwise if we can remove items, remove all selected items
	    if (this.config.editItems && !hasHighlightedItems && lastItem) {
	      this.input.value = lastItem.value;
	      this.input.setWidth();
	      this._removeItem(lastItem);
	      this._triggerChange(lastItem.value);
	    } else {
	      if (!hasHighlightedItems) {
	        // Highlight last item if none already highlighted
	        this.highlightItem(lastItem, false);
	      }
	      this.removeHighlightedItems(true);
	    }
	  };
	  Choices.prototype._startLoading = function () {
	    this._store.dispatch((0, misc_1.setIsLoading)(true));
	  };
	  Choices.prototype._stopLoading = function () {
	    this._store.dispatch((0, misc_1.setIsLoading)(false));
	  };
	  Choices.prototype._handleLoadingState = function (setLoading) {
	    if (setLoading === void 0) {
	      setLoading = true;
	    }
	    var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
	    if (setLoading) {
	      this.disable();
	      this.containerOuter.addLoadingState();
	      if (this._isSelectOneElement) {
	        if (!placeholderItem) {
	          placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
	          if (placeholderItem) {
	            this.itemList.append(placeholderItem);
	          }
	        } else {
	          placeholderItem.innerHTML = this.config.loadingText;
	        }
	      } else {
	        this.input.placeholder = this.config.loadingText;
	      }
	    } else {
	      this.enable();
	      this.containerOuter.removeLoadingState();
	      if (this._isSelectOneElement) {
	        if (placeholderItem) {
	          placeholderItem.innerHTML = this._placeholderValue || '';
	        }
	      } else {
	        this.input.placeholder = this._placeholderValue || '';
	      }
	    }
	  };
	  Choices.prototype._handleSearch = function (value) {
	    if (!this.input.isFocussed) {
	      return;
	    }
	    var choices = this._store.choices;
	    var _a = this.config,
	      searchFloor = _a.searchFloor,
	      searchChoices = _a.searchChoices;
	    var hasUnactiveChoices = choices.some(function (option) {
	      return !option.active;
	    });
	    // Check that we have a value to search and the input was an alphanumeric character
	    if (value !== null && typeof value !== 'undefined' && value.length >= searchFloor) {
	      var resultCount = searchChoices ? this._searchChoices(value) : 0;
	      // Trigger search event
	      this.passedElement.triggerEvent(constants_1.EVENTS.search, {
	        value: value,
	        resultCount: resultCount
	      });
	    } else if (hasUnactiveChoices) {
	      // Otherwise reset choices to active
	      this._isSearching = false;
	      this._store.dispatch((0, choices_1.activateChoices)(true));
	    }
	  };
	  Choices.prototype._canAddItem = function (activeItems, value) {
	    var canAddItem = true;
	    var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;
	    if (!this._isSelectOneElement) {
	      var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
	      if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
	        // If there is a max entry limit and we have reached that limit
	        // don't update
	        canAddItem = false;
	        notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
	      }
	      if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
	        canAddItem = false;
	        notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
	      }
	      if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
	        canAddItem = false;
	        notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
	      }
	    }
	    return {
	      response: canAddItem,
	      notice: notice
	    };
	  };
	  Choices.prototype._searchChoices = function (value) {
	    var newValue = typeof value === 'string' ? value.trim() : value;
	    var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;
	    if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
	      return 0;
	    }
	    // If new value matches the desired length and is not the same as the current value with a space
	    var haystack = this._store.searchableChoices;
	    var needle = newValue;
	    var options = Object.assign(this.config.fuseOptions, {
	      keys: __spreadArray([], this.config.searchFields, true),
	      includeMatches: true
	    });
	    var fuse = new fuse_js_1.default(haystack, options);
	    var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303
	    this._currentValue = newValue;
	    this._highlightPosition = 0;
	    this._isSearching = true;
	    this._store.dispatch((0, choices_1.filterChoices)(results));
	    return results.length;
	  };
	  Choices.prototype._addEventListeners = function () {
	    var documentElement = document.documentElement;
	    // capture events - can cancel event processing or propagation
	    documentElement.addEventListener('touchend', this._onTouchEnd, true);
	    this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
	    this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true);
	    // passive events - doesn't call `preventDefault` or `stopPropagation`
	    documentElement.addEventListener('click', this._onClick, {
	      passive: true
	    });
	    documentElement.addEventListener('touchmove', this._onTouchMove, {
	      passive: true
	    });
	    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
	      passive: true
	    });
	    if (this._isSelectOneElement) {
	      this.containerOuter.element.addEventListener('focus', this._onFocus, {
	        passive: true
	      });
	      this.containerOuter.element.addEventListener('blur', this._onBlur, {
	        passive: true
	      });
	    }
	    this.input.element.addEventListener('keyup', this._onKeyUp, {
	      passive: true
	    });
	    this.input.element.addEventListener('focus', this._onFocus, {
	      passive: true
	    });
	    this.input.element.addEventListener('blur', this._onBlur, {
	      passive: true
	    });
	    if (this.input.element.form) {
	      this.input.element.form.addEventListener('reset', this._onFormReset, {
	        passive: true
	      });
	    }
	    this.input.addEventListeners();
	  };
	  Choices.prototype._removeEventListeners = function () {
	    var documentElement = document.documentElement;
	    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
	    this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
	    this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
	    documentElement.removeEventListener('click', this._onClick);
	    documentElement.removeEventListener('touchmove', this._onTouchMove);
	    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
	    if (this._isSelectOneElement) {
	      this.containerOuter.element.removeEventListener('focus', this._onFocus);
	      this.containerOuter.element.removeEventListener('blur', this._onBlur);
	    }
	    this.input.element.removeEventListener('keyup', this._onKeyUp);
	    this.input.element.removeEventListener('focus', this._onFocus);
	    this.input.element.removeEventListener('blur', this._onBlur);
	    if (this.input.element.form) {
	      this.input.element.form.removeEventListener('reset', this._onFormReset);
	    }
	    this.input.removeEventListeners();
	  };
	  Choices.prototype._onKeyDown = function (event) {
	    var keyCode = event.keyCode;
	    var activeItems = this._store.activeItems;
	    var hasFocusedInput = this.input.isFocussed;
	    var hasActiveDropdown = this.dropdown.isActive;
	    var hasItems = this.itemList.hasChildren();
	    var keyString = String.fromCharCode(keyCode);
	    // eslint-disable-next-line no-control-regex
	    var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
	    var BACK_KEY = constants_1.KEY_CODES.BACK_KEY,
	      DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY,
	      ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY,
	      A_KEY = constants_1.KEY_CODES.A_KEY,
	      ESC_KEY = constants_1.KEY_CODES.ESC_KEY,
	      UP_KEY = constants_1.KEY_CODES.UP_KEY,
	      DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY,
	      PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY,
	      PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
	    if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
	      this.showDropdown();
	      if (!this.input.isFocussed) {
	        /*
	          We update the input value with the pressed key as
	          the input was not focussed at the time of key press
	          therefore does not have the value of the key.
	        */
	        this.input.value += event.key.toLowerCase();
	      }
	    }
	    switch (keyCode) {
	      case A_KEY:
	        return this._onSelectKey(event, hasItems);
	      case ENTER_KEY:
	        return this._onEnterKey(event, activeItems, hasActiveDropdown);
	      case ESC_KEY:
	        return this._onEscapeKey(hasActiveDropdown);
	      case UP_KEY:
	      case PAGE_UP_KEY:
	      case DOWN_KEY:
	      case PAGE_DOWN_KEY:
	        return this._onDirectionKey(event, hasActiveDropdown);
	      case DELETE_KEY:
	      case BACK_KEY:
	        return this._onDeleteKey(event, activeItems, hasFocusedInput);
	    }
	  };
	  Choices.prototype._onKeyUp = function (_a) {
	    var target = _a.target,
	      keyCode = _a.keyCode;
	    var value = this.input.value;
	    var activeItems = this._store.activeItems;
	    var canAddItem = this._canAddItem(activeItems, value);
	    var backKey = constants_1.KEY_CODES.BACK_KEY,
	      deleteKey = constants_1.KEY_CODES.DELETE_KEY;
	    // We are typing into a text input and have a value, we want to show a dropdown
	    // notice. Otherwise hide the dropdown
	    if (this._isTextElement) {
	      var canShowDropdownNotice = canAddItem.notice && value;
	      if (canShowDropdownNotice) {
	        var dropdownItem = this._getTemplate('notice', canAddItem.notice);
	        this.dropdown.element.innerHTML = dropdownItem.outerHTML;
	        this.showDropdown(true);
	      } else {
	        this.hideDropdown(true);
	      }
	    } else {
	      var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
	      var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
	      var canReactivateChoices = !this._isTextElement && this._isSearching;
	      var canSearch = this._canSearch && canAddItem.response;
	      if (userHasRemovedValue && canReactivateChoices) {
	        this._isSearching = false;
	        this._store.dispatch((0, choices_1.activateChoices)(true));
	      } else if (canSearch) {
	        this._handleSearch(this.input.rawValue);
	      }
	    }
	    this._canSearch = this.config.searchEnabled;
	  };
	  Choices.prototype._onSelectKey = function (event, hasItems) {
	    var ctrlKey = event.ctrlKey,
	      metaKey = event.metaKey;
	    var hasCtrlDownKeyPressed = ctrlKey || metaKey;
	    // If CTRL + A or CMD + A have been pressed and there are items to select
	    if (hasCtrlDownKeyPressed && hasItems) {
	      this._canSearch = false;
	      var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
	      if (shouldHightlightAll) {
	        this.highlightAll();
	      }
	    }
	  };
	  Choices.prototype._onEnterKey = function (event, activeItems, hasActiveDropdown) {
	    var target = event.target;
	    var enterKey = constants_1.KEY_CODES.ENTER_KEY;
	    var targetWasButton = target && target.hasAttribute('data-button');
	    if (this._isTextElement && target && target.value) {
	      var value = this.input.value;
	      var canAddItem = this._canAddItem(activeItems, value);
	      if (canAddItem.response) {
	        this.hideDropdown(true);
	        this._addItem({
	          value: value
	        });
	        this._triggerChange(value);
	        this.clearInput();
	      }
	    }
	    if (targetWasButton) {
	      this._handleButtonAction(activeItems, target);
	      event.preventDefault();
	    }
	    if (hasActiveDropdown) {
	      var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
	      if (highlightedChoice) {
	        // add enter keyCode value
	        if (activeItems[0]) {
	          activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
	        }

	        this._handleChoiceAction(activeItems, highlightedChoice);
	      }
	      event.preventDefault();
	    } else if (this._isSelectOneElement) {
	      this.showDropdown();
	      event.preventDefault();
	    }
	  };
	  Choices.prototype._onEscapeKey = function (hasActiveDropdown) {
	    if (hasActiveDropdown) {
	      this.hideDropdown(true);
	      this.containerOuter.focus();
	    }
	  };
	  Choices.prototype._onDirectionKey = function (event, hasActiveDropdown) {
	    var keyCode = event.keyCode,
	      metaKey = event.metaKey;
	    var downKey = constants_1.KEY_CODES.DOWN_KEY,
	      pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY,
	      pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
	    // If up or down key is pressed, traverse through options
	    if (hasActiveDropdown || this._isSelectOneElement) {
	      this.showDropdown();
	      this._canSearch = false;
	      var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
	      var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
	      var selectableChoiceIdentifier = '[data-choice-selectable]';
	      var nextEl = void 0;
	      if (skipKey) {
	        if (directionInt > 0) {
	          nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
	        } else {
	          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
	        }
	      } else {
	        var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
	        if (currentEl) {
	          nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
	        } else {
	          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
	        }
	      }
	      if (nextEl) {
	        // We prevent default to stop the cursor moving
	        // when pressing the arrow
	        if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
	          this.choiceList.scrollToChildElement(nextEl, directionInt);
	        }
	        this._highlightChoice(nextEl);
	      }
	      // Prevent default to maintain cursor position whilst
	      // traversing dropdown options
	      event.preventDefault();
	    }
	  };
	  Choices.prototype._onDeleteKey = function (event, activeItems, hasFocusedInput) {
	    var target = event.target;
	    // If backspace or delete key is pressed and the input has no value
	    if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
	      this._handleBackspace(activeItems);
	      event.preventDefault();
	    }
	  };
	  Choices.prototype._onTouchMove = function () {
	    if (this._wasTap) {
	      this._wasTap = false;
	    }
	  };
	  Choices.prototype._onTouchEnd = function (event) {
	    var target = (event || event.touches[0]).target;
	    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
	    if (touchWasWithinContainer) {
	      var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
	      if (containerWasExactTarget) {
	        if (this._isTextElement) {
	          this.input.focus();
	        } else if (this._isSelectMultipleElement) {
	          this.showDropdown();
	        }
	      }
	      // Prevents focus event firing
	      event.stopPropagation();
	    }
	    this._wasTap = true;
	  };
	  /**
	   * Handles mousedown event in capture mode for containetOuter.element
	   */
	  Choices.prototype._onMouseDown = function (event) {
	    var target = event.target;
	    if (!(target instanceof HTMLElement)) {
	      return;
	    }
	    // If we have our mouse down on the scrollbar and are on IE11...
	    if (IS_IE11 && this.choiceList.element.contains(target)) {
	      // check if click was on a scrollbar area
	      var firstChoice = this.choiceList.element.firstElementChild;
	      var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
	      this._isScrollingOnIe = isOnScrollbar;
	    }
	    if (target === this.input.element) {
	      return;
	    }
	    var item = target.closest('[data-button],[data-item],[data-choice]');
	    if (item instanceof HTMLElement) {
	      var hasShiftKey = event.shiftKey;
	      var activeItems = this._store.activeItems;
	      var dataset = item.dataset;
	      if ('button' in dataset) {
	        this._handleButtonAction(activeItems, item);
	      } else if ('item' in dataset) {
	        this._handleItemAction(activeItems, item, hasShiftKey);
	      } else if ('choice' in dataset) {
	        this._handleChoiceAction(activeItems, item);
	      }
	    }
	    event.preventDefault();
	  };
	  /**
	   * Handles mouseover event over this.dropdown
	   * @param {MouseEvent} event
	   */
	  Choices.prototype._onMouseOver = function (_a) {
	    var target = _a.target;
	    if (target instanceof HTMLElement && 'choice' in target.dataset) {
	      this._highlightChoice(target);
	    }
	  };
	  Choices.prototype._onClick = function (_a) {
	    var target = _a.target;
	    var clickWasWithinContainer = this.containerOuter.element.contains(target);
	    if (clickWasWithinContainer) {
	      if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
	        if (this._isTextElement) {
	          if (document.activeElement !== this.input.element) {
	            this.input.focus();
	          }
	        } else {
	          this.showDropdown();
	          this.containerOuter.focus();
	        }
	      } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
	        this.hideDropdown();
	      }
	    } else {
	      var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
	      if (hasHighlightedItems) {
	        this.unhighlightAll();
	      }
	      this.containerOuter.removeFocusState();
	      this.hideDropdown(true);
	    }
	  };
	  Choices.prototype._onFocus = function (_a) {
	    var _b;
	    var _this = this;
	    var target = _a.target;
	    var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
	    if (!focusWasWithinContainer) {
	      return;
	    }
	    var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
	      if (target === _this.input.element) {
	        _this.containerOuter.addFocusState();
	      }
	    }, _b[constants_1.SELECT_ONE_TYPE] = function () {
	      _this.containerOuter.addFocusState();
	      if (target === _this.input.element) {
	        _this.showDropdown(true);
	      }
	    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
	      if (target === _this.input.element) {
	        _this.showDropdown(true);
	        // If element is a select box, the focused element is the container and the dropdown
	        // isn't already open, focus and show dropdown
	        _this.containerOuter.addFocusState();
	      }
	    }, _b);
	    focusActions[this.passedElement.element.type]();
	  };
	  Choices.prototype._onBlur = function (_a) {
	    var _b;
	    var _this = this;
	    var target = _a.target;
	    var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
	    if (blurWasWithinContainer && !this._isScrollingOnIe) {
	      var activeItems = this._store.activeItems;
	      var hasHighlightedItems_1 = activeItems.some(function (item) {
	        return item.highlighted;
	      });
	      var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function () {
	        if (target === _this.input.element) {
	          _this.containerOuter.removeFocusState();
	          if (hasHighlightedItems_1) {
	            _this.unhighlightAll();
	          }
	          _this.hideDropdown(true);
	        }
	      }, _b[constants_1.SELECT_ONE_TYPE] = function () {
	        _this.containerOuter.removeFocusState();
	        if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) {
	          _this.hideDropdown(true);
	        }
	      }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function () {
	        if (target === _this.input.element) {
	          _this.containerOuter.removeFocusState();
	          _this.hideDropdown(true);
	          if (hasHighlightedItems_1) {
	            _this.unhighlightAll();
	          }
	        }
	      }, _b);
	      blurActions[this.passedElement.element.type]();
	    } else {
	      // On IE11, clicking the scollbar blurs our input and thus
	      // closes the dropdown. To stop this, we refocus our input
	      // if we know we are on IE *and* are scrolling.
	      this._isScrollingOnIe = false;
	      this.input.element.focus();
	    }
	  };
	  Choices.prototype._onFormReset = function () {
	    this._store.dispatch((0, misc_1.resetTo)(this._initialState));
	  };
	  Choices.prototype._highlightChoice = function (el) {
	    var _this = this;
	    if (el === void 0) {
	      el = null;
	    }
	    var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));
	    if (!choices.length) {
	      return;
	    }
	    var passedEl = el;
	    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
	    // Remove any highlighted choices
	    highlightedChoices.forEach(function (choice) {
	      choice.classList.remove(_this.config.classNames.highlightedState);
	      choice.setAttribute('aria-selected', 'false');
	    });
	    if (passedEl) {
	      this._highlightPosition = choices.indexOf(passedEl);
	    } else {
	      // Highlight choice based on last known highlight location
	      if (choices.length > this._highlightPosition) {
	        // If we have an option to highlight
	        passedEl = choices[this._highlightPosition];
	      } else {
	        // Otherwise highlight the option before
	        passedEl = choices[choices.length - 1];
	      }
	      if (!passedEl) {
	        passedEl = choices[0];
	      }
	    }
	    passedEl.classList.add(this.config.classNames.highlightedState);
	    passedEl.setAttribute('aria-selected', 'true');
	    this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
	      el: passedEl
	    });
	    if (this.dropdown.isActive) {
	      // IE11 ignores aria-label and blocks virtual keyboard
	      // if aria-activedescendant is set without a dropdown
	      this.input.setActiveDescendant(passedEl.id);
	      this.containerOuter.setActiveDescendant(passedEl.id);
	    }
	  };
	  Choices.prototype._addItem = function (_a) {
	    var value = _a.value,
	      _b = _a.label,
	      label = _b === void 0 ? null : _b,
	      _c = _a.choiceId,
	      choiceId = _c === void 0 ? -1 : _c,
	      _d = _a.groupId,
	      groupId = _d === void 0 ? -1 : _d,
	      _e = _a.customProperties,
	      customProperties = _e === void 0 ? {} : _e,
	      _f = _a.placeholder,
	      placeholder = _f === void 0 ? false : _f,
	      _g = _a.keyCode,
	      keyCode = _g === void 0 ? -1 : _g;
	    var passedValue = typeof value === 'string' ? value.trim() : value;
	    var items = this._store.items;
	    var passedLabel = label || passedValue;
	    var passedOptionId = choiceId || -1;
	    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
	    var id = items ? items.length + 1 : 1;
	    // If a prepended value has been passed, prepend it
	    if (this.config.prependValue) {
	      passedValue = this.config.prependValue + passedValue.toString();
	    }
	    // If an appended value has been passed, append it
	    if (this.config.appendValue) {
	      passedValue += this.config.appendValue.toString();
	    }
	    this._store.dispatch((0, items_1.addItem)({
	      value: passedValue,
	      label: passedLabel,
	      id: id,
	      choiceId: passedOptionId,
	      groupId: groupId,
	      customProperties: customProperties,
	      placeholder: placeholder,
	      keyCode: keyCode
	    }));
	    if (this._isSelectOneElement) {
	      this.removeActiveItems(id);
	    }
	    // Trigger change event
	    this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
	      id: id,
	      value: passedValue,
	      label: passedLabel,
	      customProperties: customProperties,
	      groupValue: group && group.value ? group.value : null,
	      keyCode: keyCode
	    });
	  };
	  Choices.prototype._removeItem = function (item) {
	    var id = item.id,
	      value = item.value,
	      label = item.label,
	      customProperties = item.customProperties,
	      choiceId = item.choiceId,
	      groupId = item.groupId;
	    var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
	    if (!id || !choiceId) {
	      return;
	    }
	    this._store.dispatch((0, items_1.removeItem)(id, choiceId));
	    this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
	      id: id,
	      value: value,
	      label: label,
	      customProperties: customProperties,
	      groupValue: group && group.value ? group.value : null
	    });
	  };
	  Choices.prototype._addChoice = function (_a) {
	    var value = _a.value,
	      _b = _a.label,
	      label = _b === void 0 ? null : _b,
	      _c = _a.isSelected,
	      isSelected = _c === void 0 ? false : _c,
	      _d = _a.isDisabled,
	      isDisabled = _d === void 0 ? false : _d,
	      _e = _a.groupId,
	      groupId = _e === void 0 ? -1 : _e,
	      _f = _a.customProperties,
	      customProperties = _f === void 0 ? {} : _f,
	      _g = _a.placeholder,
	      placeholder = _g === void 0 ? false : _g,
	      _h = _a.keyCode,
	      keyCode = _h === void 0 ? -1 : _h;
	    if (typeof value === 'undefined' || value === null) {
	      return;
	    }
	    // Generate unique id
	    var choices = this._store.choices;
	    var choiceLabel = label || value;
	    var choiceId = choices ? choices.length + 1 : 1;
	    var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
	    this._store.dispatch((0, choices_1.addChoice)({
	      id: choiceId,
	      groupId: groupId,
	      elementId: choiceElementId,
	      value: value,
	      label: choiceLabel,
	      disabled: isDisabled,
	      customProperties: customProperties,
	      placeholder: placeholder,
	      keyCode: keyCode
	    }));
	    if (isSelected) {
	      this._addItem({
	        value: value,
	        label: choiceLabel,
	        choiceId: choiceId,
	        customProperties: customProperties,
	        placeholder: placeholder,
	        keyCode: keyCode
	      });
	    }
	  };
	  Choices.prototype._addGroup = function (_a) {
	    var _this = this;
	    var group = _a.group,
	      id = _a.id,
	      _b = _a.valueKey,
	      valueKey = _b === void 0 ? 'value' : _b,
	      _c = _a.labelKey,
	      labelKey = _c === void 0 ? 'label' : _c;
	    var groupChoices = (0, utils_1.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
	    var groupId = id || Math.floor(new Date().valueOf() * Math.random());
	    var isDisabled = group.disabled ? group.disabled : false;
	    if (groupChoices) {
	      this._store.dispatch((0, groups_1.addGroup)({
	        value: group.label,
	        id: groupId,
	        active: true,
	        disabled: isDisabled
	      }));
	      var addGroupChoices = function (choice) {
	        var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
	        _this._addChoice({
	          value: choice[valueKey],
	          label: (0, utils_1.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
	          isSelected: choice.selected,
	          isDisabled: isOptDisabled,
	          groupId: groupId,
	          customProperties: choice.customProperties,
	          placeholder: choice.placeholder
	        });
	      };
	      groupChoices.forEach(addGroupChoices);
	    } else {
	      this._store.dispatch((0, groups_1.addGroup)({
	        value: group.label,
	        id: group.id,
	        active: false,
	        disabled: group.disabled
	      }));
	    }
	  };
	  Choices.prototype._getTemplate = function (template) {
	    var _a;
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	      args[_i - 1] = arguments[_i];
	    }
	    return (_a = this._templates[template]).call.apply(_a, __spreadArray([this, this.config], args, false));
	  };
	  Choices.prototype._createTemplates = function () {
	    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
	    var userTemplates = {};
	    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
	      userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
	    }
	    this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
	  };
	  Choices.prototype._createElements = function () {
	    this.containerOuter = new components_1.Container({
	      element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
	      classNames: this.config.classNames,
	      type: this.passedElement.element.type,
	      position: this.config.position
	    });
	    this.containerInner = new components_1.Container({
	      element: this._getTemplate('containerInner'),
	      classNames: this.config.classNames,
	      type: this.passedElement.element.type,
	      position: this.config.position
	    });
	    this.input = new components_1.Input({
	      element: this._getTemplate('input', this._placeholderValue),
	      classNames: this.config.classNames,
	      type: this.passedElement.element.type,
	      preventPaste: !this.config.paste
	    });
	    this.choiceList = new components_1.List({
	      element: this._getTemplate('choiceList', this._isSelectOneElement)
	    });
	    this.itemList = new components_1.List({
	      element: this._getTemplate('itemList', this._isSelectOneElement)
	    });
	    this.dropdown = new components_1.Dropdown({
	      element: this._getTemplate('dropdown'),
	      classNames: this.config.classNames,
	      type: this.passedElement.element.type
	    });
	  };
	  Choices.prototype._createStructure = function () {
	    // Hide original element
	    this.passedElement.conceal();
	    // Wrap input in container preserving DOM ordering
	    this.containerInner.wrap(this.passedElement.element);
	    // Wrapper inner container with outer container
	    this.containerOuter.wrap(this.containerInner.element);
	    if (this._isSelectOneElement) {
	      this.input.placeholder = this.config.searchPlaceholderValue || '';
	    } else if (this._placeholderValue) {
	      this.input.placeholder = this._placeholderValue;
	      this.input.setWidth();
	    }
	    this.containerOuter.element.appendChild(this.containerInner.element);
	    this.containerOuter.element.appendChild(this.dropdown.element);
	    this.containerInner.element.appendChild(this.itemList.element);
	    if (!this._isTextElement) {
	      this.dropdown.element.appendChild(this.choiceList.element);
	    }
	    if (!this._isSelectOneElement) {
	      this.containerInner.element.appendChild(this.input.element);
	    } else if (this.config.searchEnabled) {
	      this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
	    }
	    if (this._isSelectElement) {
	      this._highlightPosition = 0;
	      this._isSearching = false;
	      this._startLoading();
	      if (this._presetGroups.length) {
	        this._addPredefinedGroups(this._presetGroups);
	      } else {
	        this._addPredefinedChoices(this._presetChoices);
	      }
	      this._stopLoading();
	    }
	    if (this._isTextElement) {
	      this._addPredefinedItems(this._presetItems);
	    }
	  };
	  Choices.prototype._addPredefinedGroups = function (groups) {
	    var _this = this;
	    // If we have a placeholder option
	    var placeholderChoice = this.passedElement.placeholderOption;
	    if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === 'SELECT') {
	      this._addChoice({
	        value: placeholderChoice.value,
	        label: placeholderChoice.innerHTML,
	        isSelected: placeholderChoice.selected,
	        isDisabled: placeholderChoice.disabled,
	        placeholder: true
	      });
	    }
	    groups.forEach(function (group) {
	      return _this._addGroup({
	        group: group,
	        id: group.id || null
	      });
	    });
	  };
	  Choices.prototype._addPredefinedChoices = function (choices) {
	    var _this = this;
	    // If sorting is enabled or the user is searching, filter choices
	    if (this.config.shouldSort) {
	      choices.sort(this.config.sorter);
	    }
	    var hasSelectedChoice = choices.some(function (choice) {
	      return choice.selected;
	    });
	    var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
	      return choice.disabled === undefined || !choice.disabled;
	    });
	    choices.forEach(function (choice, index) {
	      var _a = choice.value,
	        value = _a === void 0 ? '' : _a,
	        label = choice.label,
	        customProperties = choice.customProperties,
	        placeholder = choice.placeholder;
	      if (_this._isSelectElement) {
	        // If the choice is actually a group
	        if (choice.choices) {
	          _this._addGroup({
	            group: choice,
	            id: choice.id || null
	          });
	        } else {
	          /**
	           * If there is a selected choice already or the choice is not the first in
	           * the array, add each choice normally.
	           *
	           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
	           */
	          var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
	          var isSelected = shouldPreselect ? true : choice.selected;
	          var isDisabled = choice.disabled;
	          _this._addChoice({
	            value: value,
	            label: label,
	            isSelected: !!isSelected,
	            isDisabled: !!isDisabled,
	            placeholder: !!placeholder,
	            customProperties: customProperties
	          });
	        }
	      } else {
	        _this._addChoice({
	          value: value,
	          label: label,
	          isSelected: !!choice.selected,
	          isDisabled: !!choice.disabled,
	          placeholder: !!choice.placeholder,
	          customProperties: customProperties
	        });
	      }
	    });
	  };
	  Choices.prototype._addPredefinedItems = function (items) {
	    var _this = this;
	    items.forEach(function (item) {
	      if (typeof item === 'object' && item.value) {
	        _this._addItem({
	          value: item.value,
	          label: item.label,
	          choiceId: item.id,
	          customProperties: item.customProperties,
	          placeholder: item.placeholder
	        });
	      }
	      if (typeof item === 'string') {
	        _this._addItem({
	          value: item
	        });
	      }
	    });
	  };
	  Choices.prototype._setChoiceOrItem = function (item) {
	    var _this = this;
	    var itemType = (0, utils_1.getType)(item).toLowerCase();
	    var handleType = {
	      object: function () {
	        if (!item.value) {
	          return;
	        }
	        // If we are dealing with a select input, we need to create an option first
	        // that is then selected. For text inputs we can just add items normally.
	        if (!_this._isTextElement) {
	          _this._addChoice({
	            value: item.value,
	            label: item.label,
	            isSelected: true,
	            isDisabled: false,
	            customProperties: item.customProperties,
	            placeholder: item.placeholder
	          });
	        } else {
	          _this._addItem({
	            value: item.value,
	            label: item.label,
	            choiceId: item.id,
	            customProperties: item.customProperties,
	            placeholder: item.placeholder
	          });
	        }
	      },
	      string: function () {
	        if (!_this._isTextElement) {
	          _this._addChoice({
	            value: item,
	            label: item,
	            isSelected: true,
	            isDisabled: false
	          });
	        } else {
	          _this._addItem({
	            value: item
	          });
	        }
	      }
	    };
	    handleType[itemType]();
	  };
	  Choices.prototype._findAndSelectChoiceByValue = function (value) {
	    var _this = this;
	    var choices = this._store.choices;
	    // Check 'value' property exists and the choice isn't already selected
	    var foundChoice = choices.find(function (choice) {
	      return _this.config.valueComparer(choice.value, value);
	    });
	    if (foundChoice && !foundChoice.selected) {
	      this._addItem({
	        value: foundChoice.value,
	        label: foundChoice.label,
	        choiceId: foundChoice.id,
	        groupId: foundChoice.groupId,
	        customProperties: foundChoice.customProperties,
	        placeholder: foundChoice.placeholder,
	        keyCode: foundChoice.keyCode
	      });
	    }
	  };
	  Choices.prototype._generatePlaceholderValue = function () {
	    if (this._isSelectElement && this.passedElement.placeholderOption) {
	      var placeholderOption = this.passedElement.placeholderOption;
	      return placeholderOption ? placeholderOption.text : null;
	    }
	    var _a = this.config,
	      placeholder = _a.placeholder,
	      placeholderValue = _a.placeholderValue;
	    var dataset = this.passedElement.element.dataset;
	    if (placeholder) {
	      if (placeholderValue) {
	        return placeholderValue;
	      }
	      if (dataset.placeholder) {
	        return dataset.placeholder;
	      }
	    }
	    return null;
	  };
	  return Choices;
	}();
	exports["default"] = Choices;

	/***/ }),

	/***/ 613:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var utils_1 = __webpack_require__(799);
	var constants_1 = __webpack_require__(883);
	var Container = /** @class */function () {
	  function Container(_a) {
	    var element = _a.element,
	      type = _a.type,
	      classNames = _a.classNames,
	      position = _a.position;
	    this.element = element;
	    this.classNames = classNames;
	    this.type = type;
	    this.position = position;
	    this.isOpen = false;
	    this.isFlipped = false;
	    this.isFocussed = false;
	    this.isDisabled = false;
	    this.isLoading = false;
	    this._onFocus = this._onFocus.bind(this);
	    this._onBlur = this._onBlur.bind(this);
	  }
	  Container.prototype.addEventListeners = function () {
	    this.element.addEventListener('focus', this._onFocus);
	    this.element.addEventListener('blur', this._onBlur);
	  };
	  Container.prototype.removeEventListeners = function () {
	    this.element.removeEventListener('focus', this._onFocus);
	    this.element.removeEventListener('blur', this._onBlur);
	  };
	  /**
	   * Determine whether container should be flipped based on passed
	   * dropdown position
	   */
	  Container.prototype.shouldFlip = function (dropdownPos) {
	    if (typeof dropdownPos !== 'number') {
	      return false;
	    }
	    // If flip is enabled and the dropdown bottom position is
	    // greater than the window height flip the dropdown.
	    var shouldFlip = false;
	    if (this.position === 'auto') {
	      shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
	    } else if (this.position === 'top') {
	      shouldFlip = true;
	    }
	    return shouldFlip;
	  };
	  Container.prototype.setActiveDescendant = function (activeDescendantID) {
	    this.element.setAttribute('aria-activedescendant', activeDescendantID);
	  };
	  Container.prototype.removeActiveDescendant = function () {
	    this.element.removeAttribute('aria-activedescendant');
	  };
	  Container.prototype.open = function (dropdownPos) {
	    this.element.classList.add(this.classNames.openState);
	    this.element.setAttribute('aria-expanded', 'true');
	    this.isOpen = true;
	    if (this.shouldFlip(dropdownPos)) {
	      this.element.classList.add(this.classNames.flippedState);
	      this.isFlipped = true;
	    }
	  };
	  Container.prototype.close = function () {
	    this.element.classList.remove(this.classNames.openState);
	    this.element.setAttribute('aria-expanded', 'false');
	    this.removeActiveDescendant();
	    this.isOpen = false;
	    // A dropdown flips if it does not have space within the page
	    if (this.isFlipped) {
	      this.element.classList.remove(this.classNames.flippedState);
	      this.isFlipped = false;
	    }
	  };
	  Container.prototype.focus = function () {
	    if (!this.isFocussed) {
	      this.element.focus();
	    }
	  };
	  Container.prototype.addFocusState = function () {
	    this.element.classList.add(this.classNames.focusState);
	  };
	  Container.prototype.removeFocusState = function () {
	    this.element.classList.remove(this.classNames.focusState);
	  };
	  Container.prototype.enable = function () {
	    this.element.classList.remove(this.classNames.disabledState);
	    this.element.removeAttribute('aria-disabled');
	    if (this.type === constants_1.SELECT_ONE_TYPE) {
	      this.element.setAttribute('tabindex', '0');
	    }
	    this.isDisabled = false;
	  };
	  Container.prototype.disable = function () {
	    this.element.classList.add(this.classNames.disabledState);
	    this.element.setAttribute('aria-disabled', 'true');
	    if (this.type === constants_1.SELECT_ONE_TYPE) {
	      this.element.setAttribute('tabindex', '-1');
	    }
	    this.isDisabled = true;
	  };
	  Container.prototype.wrap = function (element) {
	    (0, utils_1.wrap)(element, this.element);
	  };
	  Container.prototype.unwrap = function (element) {
	    if (this.element.parentNode) {
	      // Move passed element outside this element
	      this.element.parentNode.insertBefore(element, this.element);
	      // Remove this element
	      this.element.parentNode.removeChild(this.element);
	    }
	  };
	  Container.prototype.addLoadingState = function () {
	    this.element.classList.add(this.classNames.loadingState);
	    this.element.setAttribute('aria-busy', 'true');
	    this.isLoading = true;
	  };
	  Container.prototype.removeLoadingState = function () {
	    this.element.classList.remove(this.classNames.loadingState);
	    this.element.removeAttribute('aria-busy');
	    this.isLoading = false;
	  };
	  Container.prototype._onFocus = function () {
	    this.isFocussed = true;
	  };
	  Container.prototype._onBlur = function () {
	    this.isFocussed = false;
	  };
	  return Container;
	}();
	exports["default"] = Container;

	/***/ }),

	/***/ 217:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var Dropdown = /** @class */function () {
	  function Dropdown(_a) {
	    var element = _a.element,
	      type = _a.type,
	      classNames = _a.classNames;
	    this.element = element;
	    this.classNames = classNames;
	    this.type = type;
	    this.isActive = false;
	  }
	  Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
	    /**
	     * Bottom position of dropdown in viewport coordinates
	     */
	    get: function () {
	      return this.element.getBoundingClientRect().bottom;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Dropdown.prototype.getChild = function (selector) {
	    return this.element.querySelector(selector);
	  };
	  /**
	   * Show dropdown to user by adding active state class
	   */
	  Dropdown.prototype.show = function () {
	    this.element.classList.add(this.classNames.activeState);
	    this.element.setAttribute('aria-expanded', 'true');
	    this.isActive = true;
	    return this;
	  };
	  /**
	   * Hide dropdown from user
	   */
	  Dropdown.prototype.hide = function () {
	    this.element.classList.remove(this.classNames.activeState);
	    this.element.setAttribute('aria-expanded', 'false');
	    this.isActive = false;
	    return this;
	  };
	  return Dropdown;
	}();
	exports["default"] = Dropdown;

	/***/ }),

	/***/ 520:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	var __importDefault = this && this.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
	var dropdown_1 = __importDefault(__webpack_require__(217));
	exports.Dropdown = dropdown_1.default;
	var container_1 = __importDefault(__webpack_require__(613));
	exports.Container = container_1.default;
	var input_1 = __importDefault(__webpack_require__(11));
	exports.Input = input_1.default;
	var list_1 = __importDefault(__webpack_require__(624));
	exports.List = list_1.default;
	var wrapped_input_1 = __importDefault(__webpack_require__(541));
	exports.WrappedInput = wrapped_input_1.default;
	var wrapped_select_1 = __importDefault(__webpack_require__(982));
	exports.WrappedSelect = wrapped_select_1.default;

	/***/ }),

	/***/ 11:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var utils_1 = __webpack_require__(799);
	var constants_1 = __webpack_require__(883);
	var Input = /** @class */function () {
	  function Input(_a) {
	    var element = _a.element,
	      type = _a.type,
	      classNames = _a.classNames,
	      preventPaste = _a.preventPaste;
	    this.element = element;
	    this.type = type;
	    this.classNames = classNames;
	    this.preventPaste = preventPaste;
	    this.isFocussed = this.element.isEqualNode(document.activeElement);
	    this.isDisabled = element.disabled;
	    this._onPaste = this._onPaste.bind(this);
	    this._onInput = this._onInput.bind(this);
	    this._onFocus = this._onFocus.bind(this);
	    this._onBlur = this._onBlur.bind(this);
	  }
	  Object.defineProperty(Input.prototype, "placeholder", {
	    set: function (placeholder) {
	      this.element.placeholder = placeholder;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Input.prototype, "value", {
	    get: function () {
	      return (0, utils_1.sanitise)(this.element.value);
	    },
	    set: function (value) {
	      this.element.value = value;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Input.prototype, "rawValue", {
	    get: function () {
	      return this.element.value;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Input.prototype.addEventListeners = function () {
	    this.element.addEventListener('paste', this._onPaste);
	    this.element.addEventListener('input', this._onInput, {
	      passive: true
	    });
	    this.element.addEventListener('focus', this._onFocus, {
	      passive: true
	    });
	    this.element.addEventListener('blur', this._onBlur, {
	      passive: true
	    });
	  };
	  Input.prototype.removeEventListeners = function () {
	    this.element.removeEventListener('input', this._onInput);
	    this.element.removeEventListener('paste', this._onPaste);
	    this.element.removeEventListener('focus', this._onFocus);
	    this.element.removeEventListener('blur', this._onBlur);
	  };
	  Input.prototype.enable = function () {
	    this.element.removeAttribute('disabled');
	    this.isDisabled = false;
	  };
	  Input.prototype.disable = function () {
	    this.element.setAttribute('disabled', '');
	    this.isDisabled = true;
	  };
	  Input.prototype.focus = function () {
	    if (!this.isFocussed) {
	      this.element.focus();
	    }
	  };
	  Input.prototype.blur = function () {
	    if (this.isFocussed) {
	      this.element.blur();
	    }
	  };
	  Input.prototype.clear = function (setWidth) {
	    if (setWidth === void 0) {
	      setWidth = true;
	    }
	    if (this.element.value) {
	      this.element.value = '';
	    }
	    if (setWidth) {
	      this.setWidth();
	    }
	    return this;
	  };
	  /**
	   * Set the correct input width based on placeholder
	   * value or input value
	   */
	  Input.prototype.setWidth = function () {
	    // Resize input to contents or placeholder
	    var _a = this.element,
	      style = _a.style,
	      value = _a.value,
	      placeholder = _a.placeholder;
	    style.minWidth = "".concat(placeholder.length + 1, "ch");
	    style.width = "".concat(value.length + 1, "ch");
	  };
	  Input.prototype.setActiveDescendant = function (activeDescendantID) {
	    this.element.setAttribute('aria-activedescendant', activeDescendantID);
	  };
	  Input.prototype.removeActiveDescendant = function () {
	    this.element.removeAttribute('aria-activedescendant');
	  };
	  Input.prototype._onInput = function () {
	    if (this.type !== constants_1.SELECT_ONE_TYPE) {
	      this.setWidth();
	    }
	  };
	  Input.prototype._onPaste = function (event) {
	    if (this.preventPaste) {
	      event.preventDefault();
	    }
	  };
	  Input.prototype._onFocus = function () {
	    this.isFocussed = true;
	  };
	  Input.prototype._onBlur = function () {
	    this.isFocussed = false;
	  };
	  return Input;
	}();
	exports["default"] = Input;

	/***/ }),

	/***/ 624:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var constants_1 = __webpack_require__(883);
	var List = /** @class */function () {
	  function List(_a) {
	    var element = _a.element;
	    this.element = element;
	    this.scrollPos = this.element.scrollTop;
	    this.height = this.element.offsetHeight;
	  }
	  List.prototype.clear = function () {
	    this.element.innerHTML = '';
	  };
	  List.prototype.append = function (node) {
	    this.element.appendChild(node);
	  };
	  List.prototype.getChild = function (selector) {
	    return this.element.querySelector(selector);
	  };
	  List.prototype.hasChildren = function () {
	    return this.element.hasChildNodes();
	  };
	  List.prototype.scrollToTop = function () {
	    this.element.scrollTop = 0;
	  };
	  List.prototype.scrollToChildElement = function (element, direction) {
	    var _this = this;
	    if (!element) {
	      return;
	    }
	    var listHeight = this.element.offsetHeight;
	    // Scroll position of dropdown
	    var listScrollPosition = this.element.scrollTop + listHeight;
	    var elementHeight = element.offsetHeight;
	    // Distance from bottom of element to top of parent
	    var elementPos = element.offsetTop + elementHeight;
	    // Difference between the element and scroll position
	    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
	    requestAnimationFrame(function () {
	      _this._animateScroll(destination, direction);
	    });
	  };
	  List.prototype._scrollDown = function (scrollPos, strength, destination) {
	    var easing = (destination - scrollPos) / strength;
	    var distance = easing > 1 ? easing : 1;
	    this.element.scrollTop = scrollPos + distance;
	  };
	  List.prototype._scrollUp = function (scrollPos, strength, destination) {
	    var easing = (scrollPos - destination) / strength;
	    var distance = easing > 1 ? easing : 1;
	    this.element.scrollTop = scrollPos - distance;
	  };
	  List.prototype._animateScroll = function (destination, direction) {
	    var _this = this;
	    var strength = constants_1.SCROLLING_SPEED;
	    var choiceListScrollTop = this.element.scrollTop;
	    var continueAnimation = false;
	    if (direction > 0) {
	      this._scrollDown(choiceListScrollTop, strength, destination);
	      if (choiceListScrollTop < destination) {
	        continueAnimation = true;
	      }
	    } else {
	      this._scrollUp(choiceListScrollTop, strength, destination);
	      if (choiceListScrollTop > destination) {
	        continueAnimation = true;
	      }
	    }
	    if (continueAnimation) {
	      requestAnimationFrame(function () {
	        _this._animateScroll(destination, direction);
	      });
	    }
	  };
	  return List;
	}();
	exports["default"] = List;

	/***/ }),

	/***/ 730:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var utils_1 = __webpack_require__(799);
	var WrappedElement = /** @class */function () {
	  function WrappedElement(_a) {
	    var element = _a.element,
	      classNames = _a.classNames;
	    this.element = element;
	    this.classNames = classNames;
	    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
	      throw new TypeError('Invalid element passed');
	    }
	    this.isDisabled = false;
	  }
	  Object.defineProperty(WrappedElement.prototype, "isActive", {
	    get: function () {
	      return this.element.dataset.choice === 'active';
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(WrappedElement.prototype, "dir", {
	    get: function () {
	      return this.element.dir;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(WrappedElement.prototype, "value", {
	    get: function () {
	      return this.element.value;
	    },
	    set: function (value) {
	      // you must define setter here otherwise it will be readonly property
	      this.element.value = value;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  WrappedElement.prototype.conceal = function () {
	    // Hide passed input
	    this.element.classList.add(this.classNames.input);
	    this.element.hidden = true;
	    // Remove element from tab index
	    this.element.tabIndex = -1;
	    // Backup original styles if any
	    var origStyle = this.element.getAttribute('style');
	    if (origStyle) {
	      this.element.setAttribute('data-choice-orig-style', origStyle);
	    }
	    this.element.setAttribute('data-choice', 'active');
	  };
	  WrappedElement.prototype.reveal = function () {
	    // Reinstate passed element
	    this.element.classList.remove(this.classNames.input);
	    this.element.hidden = false;
	    this.element.removeAttribute('tabindex');
	    // Recover original styles if any
	    var origStyle = this.element.getAttribute('data-choice-orig-style');
	    if (origStyle) {
	      this.element.removeAttribute('data-choice-orig-style');
	      this.element.setAttribute('style', origStyle);
	    } else {
	      this.element.removeAttribute('style');
	    }
	    this.element.removeAttribute('data-choice');
	    // Re-assign values - this is weird, I know
	    // @todo Figure out why we need to do this
	    this.element.value = this.element.value; // eslint-disable-line no-self-assign
	  };

	  WrappedElement.prototype.enable = function () {
	    this.element.removeAttribute('disabled');
	    this.element.disabled = false;
	    this.isDisabled = false;
	  };
	  WrappedElement.prototype.disable = function () {
	    this.element.setAttribute('disabled', '');
	    this.element.disabled = true;
	    this.isDisabled = true;
	  };
	  WrappedElement.prototype.triggerEvent = function (eventType, data) {
	    (0, utils_1.dispatchEvent)(this.element, eventType, data);
	  };
	  return WrappedElement;
	}();
	exports["default"] = WrappedElement;

	/***/ }),

	/***/ 541:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	var __extends = this && this.__extends || function () {
	  var extendStatics = function (d, b) {
	    extendStatics = Object.setPrototypeOf || {
	      __proto__: []
	    } instanceof Array && function (d, b) {
	      d.__proto__ = b;
	    } || function (d, b) {
	      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	    };
	    return extendStatics(d, b);
	  };
	  return function (d, b) {
	    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() {
	      this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	  };
	}();
	var __importDefault = this && this.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var wrapped_element_1 = __importDefault(__webpack_require__(730));
	var WrappedInput = /** @class */function (_super) {
	  __extends(WrappedInput, _super);
	  function WrappedInput(_a) {
	    var element = _a.element,
	      classNames = _a.classNames,
	      delimiter = _a.delimiter;
	    var _this = _super.call(this, {
	      element: element,
	      classNames: classNames
	    }) || this;
	    _this.delimiter = delimiter;
	    return _this;
	  }
	  Object.defineProperty(WrappedInput.prototype, "value", {
	    get: function () {
	      return this.element.value;
	    },
	    set: function (value) {
	      this.element.setAttribute('value', value);
	      this.element.value = value;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  return WrappedInput;
	}(wrapped_element_1.default);
	exports["default"] = WrappedInput;

	/***/ }),

	/***/ 982:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	var __extends = this && this.__extends || function () {
	  var extendStatics = function (d, b) {
	    extendStatics = Object.setPrototypeOf || {
	      __proto__: []
	    } instanceof Array && function (d, b) {
	      d.__proto__ = b;
	    } || function (d, b) {
	      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	    };
	    return extendStatics(d, b);
	  };
	  return function (d, b) {
	    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() {
	      this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	  };
	}();
	var __importDefault = this && this.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var wrapped_element_1 = __importDefault(__webpack_require__(730));
	var WrappedSelect = /** @class */function (_super) {
	  __extends(WrappedSelect, _super);
	  function WrappedSelect(_a) {
	    var element = _a.element,
	      classNames = _a.classNames,
	      template = _a.template;
	    var _this = _super.call(this, {
	      element: element,
	      classNames: classNames
	    }) || this;
	    _this.template = template;
	    return _this;
	  }
	  Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
	    get: function () {
	      return this.element.querySelector('option[value=""]') ||
	      // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
	      this.element.querySelector('option[placeholder]');
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
	    get: function () {
	      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(WrappedSelect.prototype, "options", {
	    get: function () {
	      return Array.from(this.element.options);
	    },
	    set: function (options) {
	      var _this = this;
	      var fragment = document.createDocumentFragment();
	      var addOptionToFragment = function (data) {
	        // Create a standard select option
	        var option = _this.template(data);
	        // Append it to fragment
	        fragment.appendChild(option);
	      };
	      // Add each list item to list
	      options.forEach(function (optionData) {
	        return addOptionToFragment(optionData);
	      });
	      this.appendDocFragment(fragment);
	    },
	    enumerable: false,
	    configurable: true
	  });
	  WrappedSelect.prototype.appendDocFragment = function (fragment) {
	    this.element.innerHTML = '';
	    this.element.appendChild(fragment);
	  };
	  return WrappedSelect;
	}(wrapped_element_1.default);
	exports["default"] = WrappedSelect;

	/***/ }),

	/***/ 883:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
	exports.EVENTS = {
	  showDropdown: 'showDropdown',
	  hideDropdown: 'hideDropdown',
	  change: 'change',
	  choice: 'choice',
	  search: 'search',
	  addItem: 'addItem',
	  removeItem: 'removeItem',
	  highlightItem: 'highlightItem',
	  highlightChoice: 'highlightChoice',
	  unhighlightItem: 'unhighlightItem'
	};
	exports.ACTION_TYPES = {
	  ADD_CHOICE: 'ADD_CHOICE',
	  FILTER_CHOICES: 'FILTER_CHOICES',
	  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
	  CLEAR_CHOICES: 'CLEAR_CHOICES',
	  ADD_GROUP: 'ADD_GROUP',
	  ADD_ITEM: 'ADD_ITEM',
	  REMOVE_ITEM: 'REMOVE_ITEM',
	  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
	  CLEAR_ALL: 'CLEAR_ALL',
	  RESET_TO: 'RESET_TO',
	  SET_IS_LOADING: 'SET_IS_LOADING'
	};
	exports.KEY_CODES = {
	  BACK_KEY: 46,
	  DELETE_KEY: 8,
	  ENTER_KEY: 13,
	  A_KEY: 65,
	  ESC_KEY: 27,
	  UP_KEY: 38,
	  DOWN_KEY: 40,
	  PAGE_UP_KEY: 33,
	  PAGE_DOWN_KEY: 34
	};
	exports.TEXT_TYPE = 'text';
	exports.SELECT_ONE_TYPE = 'select-one';
	exports.SELECT_MULTIPLE_TYPE = 'select-multiple';
	exports.SCROLLING_SPEED = 4;

	/***/ }),

	/***/ 789:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
	var utils_1 = __webpack_require__(799);
	exports.DEFAULT_CLASSNAMES = {
	  containerOuter: 'choices',
	  containerInner: 'choices__inner',
	  input: 'choices__input',
	  inputCloned: 'choices__input--cloned',
	  list: 'choices__list',
	  listItems: 'choices__list--multiple',
	  listSingle: 'choices__list--single',
	  listDropdown: 'choices__list--dropdown',
	  item: 'choices__item',
	  itemSelectable: 'choices__item--selectable',
	  itemDisabled: 'choices__item--disabled',
	  itemChoice: 'choices__item--choice',
	  placeholder: 'choices__placeholder',
	  group: 'choices__group',
	  groupHeading: 'choices__heading',
	  button: 'choices__button',
	  activeState: 'is-active',
	  focusState: 'is-focused',
	  openState: 'is-open',
	  disabledState: 'is-disabled',
	  highlightedState: 'is-highlighted',
	  selectedState: 'is-selected',
	  flippedState: 'is-flipped',
	  loadingState: 'is-loading',
	  noResults: 'has-no-results',
	  noChoices: 'has-no-choices'
	};
	exports.DEFAULT_CONFIG = {
	  items: [],
	  choices: [],
	  silent: false,
	  renderChoiceLimit: -1,
	  maxItemCount: -1,
	  addItems: true,
	  addItemFilter: null,
	  removeItems: true,
	  removeItemButton: false,
	  editItems: false,
	  allowHTML: true,
	  duplicateItemsAllowed: true,
	  delimiter: ',',
	  paste: true,
	  searchEnabled: true,
	  searchChoices: true,
	  searchFloor: 1,
	  searchResultLimit: 4,
	  searchFields: ['label', 'value'],
	  position: 'auto',
	  resetScrollPosition: true,
	  shouldSort: true,
	  shouldSortItems: false,
	  sorter: utils_1.sortByAlpha,
	  placeholder: true,
	  placeholderValue: null,
	  searchPlaceholderValue: null,
	  prependValue: null,
	  appendValue: null,
	  renderSelectedChoices: 'auto',
	  loadingText: 'Loading...',
	  noResultsText: 'No results found',
	  noChoicesText: 'No choices to choose from',
	  itemSelectText: 'Press to select',
	  uniqueItemText: 'Only unique values can be added',
	  customAddItemText: 'Only values matching specific conditions can be added',
	  addItemText: function (value) {
	    return "Press Enter to add <b>\"".concat((0, utils_1.sanitise)(value), "\"</b>");
	  },
	  maxItemText: function (maxItemCount) {
	    return "Only ".concat(maxItemCount, " values can be added");
	  },
	  valueComparer: function (value1, value2) {
	    return value1 === value2;
	  },
	  fuseOptions: {
	    includeScore: true
	  },
	  labelId: '',
	  callbackOnInit: null,
	  callbackOnCreateTemplates: null,
	  classNames: exports.DEFAULT_CLASSNAMES
	};

	/***/ }),

	/***/ 18:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 978:
	/***/ (function(__unused_webpack_module, exports) {



	/* eslint-disable @typescript-eslint/no-explicit-any */
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 948:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 359:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 285:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 533:
	/***/ (function(__unused_webpack_module, exports) {



	/* eslint-disable @typescript-eslint/no-explicit-any */
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 187:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	    desc = {
	      enumerable: true,
	      get: function () {
	        return m[k];
	      }
	    };
	  }
	  Object.defineProperty(o, k2, desc);
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	});
	var __exportStar = this && this.__exportStar || function (m, exports) {
	  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	__exportStar(__webpack_require__(18), exports);
	__exportStar(__webpack_require__(978), exports);
	__exportStar(__webpack_require__(948), exports);
	__exportStar(__webpack_require__(359), exports);
	__exportStar(__webpack_require__(285), exports);
	__exportStar(__webpack_require__(533), exports);
	__exportStar(__webpack_require__(287), exports);
	__exportStar(__webpack_require__(132), exports);
	__exportStar(__webpack_require__(837), exports);
	__exportStar(__webpack_require__(598), exports);
	__exportStar(__webpack_require__(369), exports);
	__exportStar(__webpack_require__(37), exports);
	__exportStar(__webpack_require__(47), exports);
	__exportStar(__webpack_require__(923), exports);
	__exportStar(__webpack_require__(876), exports);

	/***/ }),

	/***/ 287:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 132:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 837:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 598:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 37:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 369:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 47:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 923:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 876:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));

	/***/ }),

	/***/ 799:
	/***/ (function(__unused_webpack_module, exports) {



	/* eslint-disable @typescript-eslint/no-explicit-any */
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
	var getRandomNumber = function (min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	};
	exports.getRandomNumber = getRandomNumber;
	var generateChars = function (length) {
	  return Array.from({
	    length: length
	  }, function () {
	    return (0, exports.getRandomNumber)(0, 36).toString(36);
	  }).join('');
	};
	exports.generateChars = generateChars;
	var generateId = function (element, prefix) {
	  var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
	  id = id.replace(/(:|\.|\[|\]|,)/g, '');
	  id = "".concat(prefix, "-").concat(id);
	  return id;
	};
	exports.generateId = generateId;
	var getType = function (obj) {
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};
	exports.getType = getType;
	var isType = function (type, obj) {
	  return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
	};
	exports.isType = isType;
	var wrap = function (element, wrapper) {
	  if (wrapper === void 0) {
	    wrapper = document.createElement('div');
	  }
	  if (element.parentNode) {
	    if (element.nextSibling) {
	      element.parentNode.insertBefore(wrapper, element.nextSibling);
	    } else {
	      element.parentNode.appendChild(wrapper);
	    }
	  }
	  return wrapper.appendChild(element);
	};
	exports.wrap = wrap;
	var getAdjacentEl = function (startEl, selector, direction) {
	  if (direction === void 0) {
	    direction = 1;
	  }
	  var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
	  var sibling = startEl[prop];
	  while (sibling) {
	    if (sibling.matches(selector)) {
	      return sibling;
	    }
	    sibling = sibling[prop];
	  }
	  return sibling;
	};
	exports.getAdjacentEl = getAdjacentEl;
	var isScrolledIntoView = function (element, parent, direction) {
	  if (direction === void 0) {
	    direction = 1;
	  }
	  if (!element) {
	    return false;
	  }
	  var isVisible;
	  if (direction > 0) {
	    // In view from bottom
	    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
	  } else {
	    // In view from top
	    isVisible = element.offsetTop >= parent.scrollTop;
	  }
	  return isVisible;
	};
	exports.isScrolledIntoView = isScrolledIntoView;
	var sanitise = function (value) {
	  if (typeof value !== 'string') {
	    return value;
	  }
	  return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
	};
	exports.sanitise = sanitise;
	exports.strToEl = function () {
	  var tmpEl = document.createElement('div');
	  return function (str) {
	    var cleanedInput = str.trim();
	    tmpEl.innerHTML = cleanedInput;
	    var firldChild = tmpEl.children[0];
	    while (tmpEl.firstChild) {
	      tmpEl.removeChild(tmpEl.firstChild);
	    }
	    return firldChild;
	  };
	}();
	var sortByAlpha = function (_a, _b) {
	  var value = _a.value,
	    _c = _a.label,
	    label = _c === void 0 ? value : _c;
	  var value2 = _b.value,
	    _d = _b.label,
	    label2 = _d === void 0 ? value2 : _d;
	  return label.localeCompare(label2, [], {
	    sensitivity: 'base',
	    ignorePunctuation: true,
	    numeric: true
	  });
	};
	exports.sortByAlpha = sortByAlpha;
	var sortByScore = function (a, b) {
	  var _a = a.score,
	    scoreA = _a === void 0 ? 0 : _a;
	  var _b = b.score,
	    scoreB = _b === void 0 ? 0 : _b;
	  return scoreA - scoreB;
	};
	exports.sortByScore = sortByScore;
	var dispatchEvent = function (element, type, customArgs) {
	  if (customArgs === void 0) {
	    customArgs = null;
	  }
	  var event = new CustomEvent(type, {
	    detail: customArgs,
	    bubbles: true,
	    cancelable: true
	  });
	  return element.dispatchEvent(event);
	};
	exports.dispatchEvent = dispatchEvent;
	var existsInArray = function (array, value, key) {
	  if (key === void 0) {
	    key = 'value';
	  }
	  return array.some(function (item) {
	    if (typeof value === 'string') {
	      return item[key] === value.trim();
	    }
	    return item[key] === value;
	  });
	};
	exports.existsInArray = existsInArray;
	var cloneObject = function (obj) {
	  return JSON.parse(JSON.stringify(obj));
	};
	exports.cloneObject = cloneObject;
	/**
	 * Returns an array of keys present on the first but missing on the second object
	 */
	var diff = function (a, b) {
	  var aKeys = Object.keys(a).sort();
	  var bKeys = Object.keys(b).sort();
	  return aKeys.filter(function (i) {
	    return bKeys.indexOf(i) < 0;
	  });
	};
	exports.diff = diff;
	var parseCustomProperties = function (customProperties) {
	  if (typeof customProperties !== 'undefined') {
	    try {
	      return JSON.parse(customProperties);
	    } catch (e) {
	      return customProperties;
	    }
	  }
	  return {};
	};
	exports.parseCustomProperties = parseCustomProperties;

	/***/ }),

	/***/ 273:
	/***/ (function(__unused_webpack_module, exports) {



	var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.defaultState = void 0;
	exports.defaultState = [];
	function choices(state, action) {
	  if (state === void 0) {
	    state = exports.defaultState;
	  }
	  if (action === void 0) {
	    action = {};
	  }
	  switch (action.type) {
	    case 'ADD_CHOICE':
	      {
	        var addChoiceAction = action;
	        var choice = {
	          id: addChoiceAction.id,
	          elementId: addChoiceAction.elementId,
	          groupId: addChoiceAction.groupId,
	          value: addChoiceAction.value,
	          label: addChoiceAction.label || addChoiceAction.value,
	          disabled: addChoiceAction.disabled || false,
	          selected: false,
	          active: true,
	          score: 9999,
	          customProperties: addChoiceAction.customProperties,
	          placeholder: addChoiceAction.placeholder || false
	        };
	        /*
	          A disabled choice appears in the choice dropdown but cannot be selected
	          A selected choice has been added to the passed input's value (added as an item)
	          An active choice appears within the choice dropdown
	        */
	        return __spreadArray(__spreadArray([], state, true), [choice], false);
	      }
	    case 'ADD_ITEM':
	      {
	        var addItemAction_1 = action;
	        // When an item is added and it has an associated choice,
	        // we want to disable it so it can't be chosen again
	        if (addItemAction_1.choiceId > -1) {
	          return state.map(function (obj) {
	            var choice = obj;
	            if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) {
	              choice.selected = true;
	            }
	            return choice;
	          });
	        }
	        return state;
	      }
	    case 'REMOVE_ITEM':
	      {
	        var removeItemAction_1 = action;
	        // When an item is removed and it has an associated choice,
	        // we want to re-enable it so it can be chosen again
	        if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) {
	          return state.map(function (obj) {
	            var choice = obj;
	            if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) {
	              choice.selected = false;
	            }
	            return choice;
	          });
	        }
	        return state;
	      }
	    case 'FILTER_CHOICES':
	      {
	        var filterChoicesAction_1 = action;
	        return state.map(function (obj) {
	          var choice = obj;
	          // Set active state based on whether choice is
	          // within filtered results
	          choice.active = filterChoicesAction_1.results.some(function (_a) {
	            var item = _a.item,
	              score = _a.score;
	            if (item.id === choice.id) {
	              choice.score = score;
	              return true;
	            }
	            return false;
	          });
	          return choice;
	        });
	      }
	    case 'ACTIVATE_CHOICES':
	      {
	        var activateChoicesAction_1 = action;
	        return state.map(function (obj) {
	          var choice = obj;
	          choice.active = activateChoicesAction_1.active;
	          return choice;
	        });
	      }
	    case 'CLEAR_CHOICES':
	      {
	        return exports.defaultState;
	      }
	    default:
	      {
	        return state;
	      }
	  }
	}
	exports["default"] = choices;

	/***/ }),

	/***/ 871:
	/***/ (function(__unused_webpack_module, exports) {



	var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.defaultState = void 0;
	exports.defaultState = [];
	function groups(state, action) {
	  if (state === void 0) {
	    state = exports.defaultState;
	  }
	  if (action === void 0) {
	    action = {};
	  }
	  switch (action.type) {
	    case 'ADD_GROUP':
	      {
	        var addGroupAction = action;
	        return __spreadArray(__spreadArray([], state, true), [{
	          id: addGroupAction.id,
	          value: addGroupAction.value,
	          active: addGroupAction.active,
	          disabled: addGroupAction.disabled
	        }], false);
	      }
	    case 'CLEAR_CHOICES':
	      {
	        return [];
	      }
	    default:
	      {
	        return state;
	      }
	  }
	}
	exports["default"] = groups;

	/***/ }),

	/***/ 655:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	var __importDefault = this && this.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.defaultState = void 0;
	var redux_1 = __webpack_require__(791);
	var items_1 = __importDefault(__webpack_require__(52));
	var groups_1 = __importDefault(__webpack_require__(871));
	var choices_1 = __importDefault(__webpack_require__(273));
	var loading_1 = __importDefault(__webpack_require__(502));
	var utils_1 = __webpack_require__(799);
	exports.defaultState = {
	  groups: [],
	  items: [],
	  choices: [],
	  loading: false
	};
	var appReducer = (0, redux_1.combineReducers)({
	  items: items_1.default,
	  groups: groups_1.default,
	  choices: choices_1.default,
	  loading: loading_1.default
	});
	var rootReducer = function (passedState, action) {
	  var state = passedState;
	  // If we are clearing all items, groups and options we reassign
	  // state and then pass that state to our proper reducer. This isn't
	  // mutating our actual state
	  // See: http://stackoverflow.com/a/35641992
	  if (action.type === 'CLEAR_ALL') {
	    state = exports.defaultState;
	  } else if (action.type === 'RESET_TO') {
	    return (0, utils_1.cloneObject)(action.state);
	  }
	  return appReducer(state, action);
	};
	exports["default"] = rootReducer;

	/***/ }),

	/***/ 52:
	/***/ (function(__unused_webpack_module, exports) {



	var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.defaultState = void 0;
	exports.defaultState = [];
	function items(state, action) {
	  if (state === void 0) {
	    state = exports.defaultState;
	  }
	  if (action === void 0) {
	    action = {};
	  }
	  switch (action.type) {
	    case 'ADD_ITEM':
	      {
	        var addItemAction = action;
	        // Add object to items array
	        var newState = __spreadArray(__spreadArray([], state, true), [{
	          id: addItemAction.id,
	          choiceId: addItemAction.choiceId,
	          groupId: addItemAction.groupId,
	          value: addItemAction.value,
	          label: addItemAction.label,
	          active: true,
	          highlighted: false,
	          customProperties: addItemAction.customProperties,
	          placeholder: addItemAction.placeholder || false,
	          keyCode: null
	        }], false);
	        return newState.map(function (obj) {
	          var item = obj;
	          item.highlighted = false;
	          return item;
	        });
	      }
	    case 'REMOVE_ITEM':
	      {
	        // Set item to inactive
	        return state.map(function (obj) {
	          var item = obj;
	          if (item.id === action.id) {
	            item.active = false;
	          }
	          return item;
	        });
	      }
	    case 'HIGHLIGHT_ITEM':
	      {
	        var highlightItemAction_1 = action;
	        return state.map(function (obj) {
	          var item = obj;
	          if (item.id === highlightItemAction_1.id) {
	            item.highlighted = highlightItemAction_1.highlighted;
	          }
	          return item;
	        });
	      }
	    default:
	      {
	        return state;
	      }
	  }
	}
	exports["default"] = items;

	/***/ }),

	/***/ 502:
	/***/ (function(__unused_webpack_module, exports) {



	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	exports.defaultState = void 0;
	exports.defaultState = false;
	var general = function (state, action) {
	  if (state === void 0) {
	    state = exports.defaultState;
	  }
	  if (action === void 0) {
	    action = {};
	  }
	  switch (action.type) {
	    case 'SET_IS_LOADING':
	      {
	        return action.isLoading;
	      }
	    default:
	      {
	        return state;
	      }
	  }
	};
	exports["default"] = general;

	/***/ }),

	/***/ 744:
	/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



	var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	};
	var __importDefault = this && this.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	/* eslint-disable @typescript-eslint/no-explicit-any */
	var redux_1 = __webpack_require__(791);
	var index_1 = __importDefault(__webpack_require__(655));
	var Store = /** @class */function () {
	  function Store() {
	    this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	  }
	  /**
	   * Subscribe store to function call (wrapped Redux method)
	   */
	  Store.prototype.subscribe = function (onChange) {
	    this._store.subscribe(onChange);
	  };
	  /**
	   * Dispatch event to store (wrapped Redux method)
	   */
	  Store.prototype.dispatch = function (action) {
	    this._store.dispatch(action);
	  };
	  Object.defineProperty(Store.prototype, "state", {
	    /**
	     * Get store object (wrapping Redux method)
	     */
	    get: function () {
	      return this._store.getState();
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "items", {
	    /**
	     * Get items from store
	     */
	    get: function () {
	      return this.state.items;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "activeItems", {
	    /**
	     * Get active items from store
	     */
	    get: function () {
	      return this.items.filter(function (item) {
	        return item.active === true;
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "highlightedActiveItems", {
	    /**
	     * Get highlighted items from store
	     */
	    get: function () {
	      return this.items.filter(function (item) {
	        return item.active && item.highlighted;
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "choices", {
	    /**
	     * Get choices from store
	     */
	    get: function () {
	      return this.state.choices;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "activeChoices", {
	    /**
	     * Get active choices from store
	     */
	    get: function () {
	      return this.choices.filter(function (choice) {
	        return choice.active === true;
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "selectableChoices", {
	    /**
	     * Get selectable choices from store
	     */
	    get: function () {
	      return this.choices.filter(function (choice) {
	        return choice.disabled !== true;
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "searchableChoices", {
	    /**
	     * Get choices that can be searched (excluding placeholders)
	     */
	    get: function () {
	      return this.selectableChoices.filter(function (choice) {
	        return choice.placeholder !== true;
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "placeholderChoice", {
	    /**
	     * Get placeholder choice from store
	     */
	    get: function () {
	      return __spreadArray([], this.choices, true).reverse().find(function (choice) {
	        return choice.placeholder === true;
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "groups", {
	    /**
	     * Get groups from store
	     */
	    get: function () {
	      return this.state.groups;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Store.prototype, "activeGroups", {
	    /**
	     * Get active groups from store
	     */
	    get: function () {
	      var _a = this,
	        groups = _a.groups,
	        choices = _a.choices;
	      return groups.filter(function (group) {
	        var isActive = group.active === true && group.disabled === false;
	        var hasActiveOptions = choices.some(function (choice) {
	          return choice.active === true && choice.disabled === false;
	        });
	        return isActive && hasActiveOptions;
	      }, []);
	    },
	    enumerable: false,
	    configurable: true
	  });
	  /**
	   * Get loading state from store
	   */
	  Store.prototype.isLoading = function () {
	    return this.state.loading;
	  };
	  /**
	   * Get single choice by it's ID
	   */
	  Store.prototype.getChoiceById = function (id) {
	    return this.activeChoices.find(function (choice) {
	      return choice.id === parseInt(id, 10);
	    });
	  };
	  /**
	   * Get group by group id
	   */
	  Store.prototype.getGroupById = function (id) {
	    return this.groups.find(function (group) {
	      return group.id === id;
	    });
	  };
	  return Store;
	}();
	exports["default"] = Store;

	/***/ }),

	/***/ 686:
	/***/ (function(__unused_webpack_module, exports) {



	/**
	 * Helpers to create HTML elements used by Choices
	 * Can be overridden by providing `callbackOnCreateTemplates` option
	 */
	Object.defineProperty(exports, "__esModule", ({
	  value: true
	}));
	var templates = {
	  containerOuter: function (_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
	    var containerOuter = _a.classNames.containerOuter;
	    var div = Object.assign(document.createElement('div'), {
	      className: containerOuter
	    });
	    div.dataset.type = passedElementType;
	    if (dir) {
	      div.dir = dir;
	    }
	    if (isSelectOneElement) {
	      div.tabIndex = 0;
	    }
	    if (isSelectElement) {
	      div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
	      if (searchEnabled) {
	        div.setAttribute('aria-autocomplete', 'list');
	      }
	    }
	    div.setAttribute('aria-haspopup', 'true');
	    div.setAttribute('aria-expanded', 'false');
	    if (labelId) {
	      div.setAttribute('aria-labelledby', labelId);
	    }
	    return div;
	  },
	  containerInner: function (_a) {
	    var containerInner = _a.classNames.containerInner;
	    return Object.assign(document.createElement('div'), {
	      className: containerInner
	    });
	  },
	  itemList: function (_a, isSelectOneElement) {
	    var _b = _a.classNames,
	      list = _b.list,
	      listSingle = _b.listSingle,
	      listItems = _b.listItems;
	    return Object.assign(document.createElement('div'), {
	      className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
	    });
	  },
	  placeholder: function (_a, value) {
	    var _b;
	    var allowHTML = _a.allowHTML,
	      placeholder = _a.classNames.placeholder;
	    return Object.assign(document.createElement('div'), (_b = {
	      className: placeholder
	    }, _b[allowHTML ? 'innerHTML' : 'innerText'] = value, _b));
	  },
	  item: function (_a, _b, removeItemButton) {
	    var _c, _d;
	    var allowHTML = _a.allowHTML,
	      _e = _a.classNames,
	      item = _e.item,
	      button = _e.button,
	      highlightedState = _e.highlightedState,
	      itemSelectable = _e.itemSelectable,
	      placeholder = _e.placeholder;
	    var id = _b.id,
	      value = _b.value,
	      label = _b.label,
	      customProperties = _b.customProperties,
	      active = _b.active,
	      disabled = _b.disabled,
	      highlighted = _b.highlighted,
	      isPlaceholder = _b.placeholder;
	    var div = Object.assign(document.createElement('div'), (_c = {
	      className: item
	    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c));
	    Object.assign(div.dataset, {
	      item: '',
	      id: id,
	      value: value,
	      customProperties: customProperties
	    });
	    if (active) {
	      div.setAttribute('aria-selected', 'true');
	    }
	    if (disabled) {
	      div.setAttribute('aria-disabled', 'true');
	    }
	    if (isPlaceholder) {
	      div.classList.add(placeholder);
	    }
	    div.classList.add(highlighted ? highlightedState : itemSelectable);
	    if (removeItemButton) {
	      if (disabled) {
	        div.classList.remove(itemSelectable);
	      }
	      div.dataset.deletable = '';
	      /** @todo This MUST be localizable, not hardcoded! */
	      var REMOVE_ITEM_TEXT = 'Remove item';
	      var removeButton = Object.assign(document.createElement('button'), (_d = {
	        type: 'button',
	        className: button
	      }, _d[allowHTML ? 'innerHTML' : 'innerText'] = REMOVE_ITEM_TEXT, _d));
	      removeButton.setAttribute('aria-label', "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
	      removeButton.dataset.button = '';
	      div.appendChild(removeButton);
	    }
	    return div;
	  },
	  choiceList: function (_a, isSelectOneElement) {
	    var list = _a.classNames.list;
	    var div = Object.assign(document.createElement('div'), {
	      className: list
	    });
	    if (!isSelectOneElement) {
	      div.setAttribute('aria-multiselectable', 'true');
	    }
	    div.setAttribute('role', 'listbox');
	    return div;
	  },
	  choiceGroup: function (_a, _b) {
	    var _c;
	    var allowHTML = _a.allowHTML,
	      _d = _a.classNames,
	      group = _d.group,
	      groupHeading = _d.groupHeading,
	      itemDisabled = _d.itemDisabled;
	    var id = _b.id,
	      value = _b.value,
	      disabled = _b.disabled;
	    var div = Object.assign(document.createElement('div'), {
	      className: "".concat(group, " ").concat(disabled ? itemDisabled : '')
	    });
	    div.setAttribute('role', 'group');
	    Object.assign(div.dataset, {
	      group: '',
	      id: id,
	      value: value
	    });
	    if (disabled) {
	      div.setAttribute('aria-disabled', 'true');
	    }
	    div.appendChild(Object.assign(document.createElement('div'), (_c = {
	      className: groupHeading
	    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = value, _c)));
	    return div;
	  },
	  choice: function (_a, _b, selectText) {
	    var _c;
	    var allowHTML = _a.allowHTML,
	      _d = _a.classNames,
	      item = _d.item,
	      itemChoice = _d.itemChoice,
	      itemSelectable = _d.itemSelectable,
	      selectedState = _d.selectedState,
	      itemDisabled = _d.itemDisabled,
	      placeholder = _d.placeholder;
	    var id = _b.id,
	      value = _b.value,
	      label = _b.label,
	      groupId = _b.groupId,
	      elementId = _b.elementId,
	      isDisabled = _b.disabled,
	      isSelected = _b.selected,
	      isPlaceholder = _b.placeholder;
	    var div = Object.assign(document.createElement('div'), (_c = {
	      id: elementId
	    }, _c[allowHTML ? 'innerHTML' : 'innerText'] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
	    if (isSelected) {
	      div.classList.add(selectedState);
	    }
	    if (isPlaceholder) {
	      div.classList.add(placeholder);
	    }
	    div.setAttribute('role', groupId && groupId > 0 ? 'treeitem' : 'option');
	    Object.assign(div.dataset, {
	      choice: '',
	      id: id,
	      value: value,
	      selectText: selectText
	    });
	    if (isDisabled) {
	      div.classList.add(itemDisabled);
	      div.dataset.choiceDisabled = '';
	      div.setAttribute('aria-disabled', 'true');
	    } else {
	      div.classList.add(itemSelectable);
	      div.dataset.choiceSelectable = '';
	    }
	    return div;
	  },
	  input: function (_a, placeholderValue) {
	    var _b = _a.classNames,
	      input = _b.input,
	      inputCloned = _b.inputCloned;
	    var inp = Object.assign(document.createElement('input'), {
	      type: 'search',
	      name: 'search_terms',
	      className: "".concat(input, " ").concat(inputCloned),
	      autocomplete: 'off',
	      autocapitalize: 'off',
	      spellcheck: false
	    });
	    inp.setAttribute('role', 'textbox');
	    inp.setAttribute('aria-autocomplete', 'list');
	    inp.setAttribute('aria-label', placeholderValue);
	    return inp;
	  },
	  dropdown: function (_a) {
	    var _b = _a.classNames,
	      list = _b.list,
	      listDropdown = _b.listDropdown;
	    var div = document.createElement('div');
	    div.classList.add(list, listDropdown);
	    div.setAttribute('aria-expanded', 'false');
	    return div;
	  },
	  notice: function (_a, innerText, type) {
	    var _b;
	    var allowHTML = _a.allowHTML,
	      _c = _a.classNames,
	      item = _c.item,
	      itemChoice = _c.itemChoice,
	      noResults = _c.noResults,
	      noChoices = _c.noChoices;
	    if (type === void 0) {
	      type = '';
	    }
	    var classes = [item, itemChoice];
	    if (type === 'no-choices') {
	      classes.push(noChoices);
	    } else if (type === 'no-results') {
	      classes.push(noResults);
	    }
	    return Object.assign(document.createElement('div'), (_b = {}, _b[allowHTML ? 'innerHTML' : 'innerText'] = innerText, _b.className = classes.join(' '), _b));
	  },
	  option: function (_a) {
	    var label = _a.label,
	      value = _a.value,
	      customProperties = _a.customProperties,
	      active = _a.active,
	      disabled = _a.disabled;
	    var opt = new Option(label, value, false, active);
	    if (customProperties) {
	      opt.dataset.customProperties = "".concat(customProperties);
	    }
	    opt.disabled = !!disabled;
	    return opt;
	  }
	};
	exports["default"] = templates;

	/***/ }),

	/***/ 996:
	/***/ (function(module) {



	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return target.propertyIsEnumerable(symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function propertyIsOnObject(object, property) {
		try {
			return property in object
		} catch(_) {
			return false
		}
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) {
				return
			}

			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			} else {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
		// implementations can use it. The caller may not replace it.
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	module.exports = deepmerge_1;


	/***/ }),

	/***/ 221:
	/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

	__webpack_require__.r(__webpack_exports__);
	/* harmony export */ __webpack_require__.d(__webpack_exports__, {
	/* harmony export */   "default": function() { return /* binding */ Fuse; }
	/* harmony export */ });
	/**
	 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
	 *
	 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
	 * All Rights Reserved. Apache Software License 2.0
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */

	function isArray(value) {
	  return !Array.isArray
	    ? getTag(value) === '[object Array]'
	    : Array.isArray(value)
	}

	// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
	const INFINITY = 1 / 0;
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value
	  }
	  let result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result
	}

	function toString(value) {
	  return value == null ? '' : baseToString(value)
	}

	function isString(value) {
	  return typeof value === 'string'
	}

	function isNumber(value) {
	  return typeof value === 'number'
	}

	// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
	function isBoolean(value) {
	  return (
	    value === true ||
	    value === false ||
	    (isObjectLike(value) && getTag(value) == '[object Boolean]')
	  )
	}

	function isObject(value) {
	  return typeof value === 'object'
	}

	// Checks if `value` is object-like.
	function isObjectLike(value) {
	  return isObject(value) && value !== null
	}

	function isDefined(value) {
	  return value !== undefined && value !== null
	}

	function isBlank(value) {
	  return !value.trim().length
	}

	// Gets the `toStringTag` of `value`.
	// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
	function getTag(value) {
	  return value == null
	    ? value === undefined
	      ? '[object Undefined]'
	      : '[object Null]'
	    : Object.prototype.toString.call(value)
	}

	const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

	const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
	  `Invalid value for key ${key}`;

	const PATTERN_LENGTH_TOO_LARGE = (max) =>
	  `Pattern length exceeds max of ${max}.`;

	const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

	const INVALID_KEY_WEIGHT_VALUE = (key) =>
	  `Property 'weight' in key '${key}' must be a positive integer`;

	const hasOwn = Object.prototype.hasOwnProperty;

	class KeyStore {
	  constructor(keys) {
	    this._keys = [];
	    this._keyMap = {};

	    let totalWeight = 0;

	    keys.forEach((key) => {
	      let obj = createKey(key);

	      totalWeight += obj.weight;

	      this._keys.push(obj);
	      this._keyMap[obj.id] = obj;

	      totalWeight += obj.weight;
	    });

	    // Normalize weights so that their sum is equal to 1
	    this._keys.forEach((key) => {
	      key.weight /= totalWeight;
	    });
	  }
	  get(keyId) {
	    return this._keyMap[keyId]
	  }
	  keys() {
	    return this._keys
	  }
	  toJSON() {
	    return JSON.stringify(this._keys)
	  }
	}

	function createKey(key) {
	  let path = null;
	  let id = null;
	  let src = null;
	  let weight = 1;
	  let getFn = null;

	  if (isString(key) || isArray(key)) {
	    src = key;
	    path = createKeyPath(key);
	    id = createKeyId(key);
	  } else {
	    if (!hasOwn.call(key, 'name')) {
	      throw new Error(MISSING_KEY_PROPERTY('name'))
	    }

	    const name = key.name;
	    src = name;

	    if (hasOwn.call(key, 'weight')) {
	      weight = key.weight;

	      if (weight <= 0) {
	        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
	      }
	    }

	    path = createKeyPath(name);
	    id = createKeyId(name);
	    getFn = key.getFn;
	  }

	  return { path, id, weight, src, getFn }
	}

	function createKeyPath(key) {
	  return isArray(key) ? key : key.split('.')
	}

	function createKeyId(key) {
	  return isArray(key) ? key.join('.') : key
	}

	function get(obj, path) {
	  let list = [];
	  let arr = false;

	  const deepGet = (obj, path, index) => {
	    if (!isDefined(obj)) {
	      return
	    }
	    if (!path[index]) {
	      // If there's no path left, we've arrived at the object we care about.
	      list.push(obj);
	    } else {
	      let key = path[index];

	      const value = obj[key];

	      if (!isDefined(value)) {
	        return
	      }

	      // If we're at the last value in the path, and if it's a string/number/bool,
	      // add it to the list
	      if (
	        index === path.length - 1 &&
	        (isString(value) || isNumber(value) || isBoolean(value))
	      ) {
	        list.push(toString(value));
	      } else if (isArray(value)) {
	        arr = true;
	        // Search each item in the array.
	        for (let i = 0, len = value.length; i < len; i += 1) {
	          deepGet(value[i], path, index + 1);
	        }
	      } else if (path.length) {
	        // An object. Recurse further.
	        deepGet(value, path, index + 1);
	      }
	    }
	  };

	  // Backwards compatibility (since path used to be a string)
	  deepGet(obj, isString(path) ? path.split('.') : path, 0);

	  return arr ? list : list[0]
	}

	const MatchOptions = {
	  // Whether the matches should be included in the result set. When `true`, each record in the result
	  // set will include the indices of the matched characters.
	  // These can consequently be used for highlighting purposes.
	  includeMatches: false,
	  // When `true`, the matching function will continue to the end of a search pattern even if
	  // a perfect match has already been located in the string.
	  findAllMatches: false,
	  // Minimum number of characters that must be matched before a result is considered a match
	  minMatchCharLength: 1
	};

	const BasicOptions = {
	  // When `true`, the algorithm continues searching to the end of the input even if a perfect
	  // match is found before the end of the same input.
	  isCaseSensitive: false,
	  // When true, the matching function will continue to the end of a search pattern even if
	  includeScore: false,
	  // List of properties that will be searched. This also supports nested properties.
	  keys: [],
	  // Whether to sort the result list, by score
	  shouldSort: true,
	  // Default sort function: sort by ascending score, ascending index
	  sortFn: (a, b) =>
	    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
	};

	const FuzzyOptions = {
	  // Approximately where in the text is the pattern expected to be found?
	  location: 0,
	  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
	  // (of both letters and location), a threshold of '1.0' would match anything.
	  threshold: 0.6,
	  // Determines how close the match must be to the fuzzy location (specified above).
	  // An exact letter match which is 'distance' characters away from the fuzzy location
	  // would score as a complete mismatch. A distance of '0' requires the match be at
	  // the exact location specified, a threshold of '1000' would require a perfect match
	  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
	  distance: 100
	};

	const AdvancedOptions = {
	  // When `true`, it enables the use of unix-like search commands
	  useExtendedSearch: false,
	  // The get function to use when fetching an object's properties.
	  // The default will search nested paths *ie foo.bar.baz*
	  getFn: get,
	  // When `true`, search will ignore `location` and `distance`, so it won't matter
	  // where in the string the pattern appears.
	  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
	  ignoreLocation: false,
	  // When `true`, the calculation for the relevance score (used for sorting) will
	  // ignore the field-length norm.
	  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
	  ignoreFieldNorm: false,
	  // The weight to determine how much field length norm effects scoring.
	  fieldNormWeight: 1
	};

	var Config = {
	  ...BasicOptions,
	  ...MatchOptions,
	  ...FuzzyOptions,
	  ...AdvancedOptions
	};

	const SPACE = /[^ ]+/g;

	// Field-length norm: the shorter the field, the higher the weight.
	// Set to 3 decimals to reduce index size.
	function norm(weight = 1, mantissa = 3) {
	  const cache = new Map();
	  const m = Math.pow(10, mantissa);

	  return {
	    get(value) {
	      const numTokens = value.match(SPACE).length;

	      if (cache.has(numTokens)) {
	        return cache.get(numTokens)
	      }

	      // Default function is 1/sqrt(x), weight makes that variable
	      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

	      // In place of `toFixed(mantissa)`, for faster computation
	      const n = parseFloat(Math.round(norm * m) / m);

	      cache.set(numTokens, n);

	      return n
	    },
	    clear() {
	      cache.clear();
	    }
	  }
	}

	class FuseIndex {
	  constructor({
	    getFn = Config.getFn,
	    fieldNormWeight = Config.fieldNormWeight
	  } = {}) {
	    this.norm = norm(fieldNormWeight, 3);
	    this.getFn = getFn;
	    this.isCreated = false;

	    this.setIndexRecords();
	  }
	  setSources(docs = []) {
	    this.docs = docs;
	  }
	  setIndexRecords(records = []) {
	    this.records = records;
	  }
	  setKeys(keys = []) {
	    this.keys = keys;
	    this._keysMap = {};
	    keys.forEach((key, idx) => {
	      this._keysMap[key.id] = idx;
	    });
	  }
	  create() {
	    if (this.isCreated || !this.docs.length) {
	      return
	    }

	    this.isCreated = true;

	    // List is Array<String>
	    if (isString(this.docs[0])) {
	      this.docs.forEach((doc, docIndex) => {
	        this._addString(doc, docIndex);
	      });
	    } else {
	      // List is Array<Object>
	      this.docs.forEach((doc, docIndex) => {
	        this._addObject(doc, docIndex);
	      });
	    }

	    this.norm.clear();
	  }
	  // Adds a doc to the end of the index
	  add(doc) {
	    const idx = this.size();

	    if (isString(doc)) {
	      this._addString(doc, idx);
	    } else {
	      this._addObject(doc, idx);
	    }
	  }
	  // Removes the doc at the specified index of the index
	  removeAt(idx) {
	    this.records.splice(idx, 1);

	    // Change ref index of every subsquent doc
	    for (let i = idx, len = this.size(); i < len; i += 1) {
	      this.records[i].i -= 1;
	    }
	  }
	  getValueForItemAtKeyId(item, keyId) {
	    return item[this._keysMap[keyId]]
	  }
	  size() {
	    return this.records.length
	  }
	  _addString(doc, docIndex) {
	    if (!isDefined(doc) || isBlank(doc)) {
	      return
	    }

	    let record = {
	      v: doc,
	      i: docIndex,
	      n: this.norm.get(doc)
	    };

	    this.records.push(record);
	  }
	  _addObject(doc, docIndex) {
	    let record = { i: docIndex, $: {} };

	    // Iterate over every key (i.e, path), and fetch the value at that key
	    this.keys.forEach((key, keyIndex) => {
	      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);

	      if (!isDefined(value)) {
	        return
	      }

	      if (isArray(value)) {
	        let subRecords = [];
	        const stack = [{ nestedArrIndex: -1, value }];

	        while (stack.length) {
	          const { nestedArrIndex, value } = stack.pop();

	          if (!isDefined(value)) {
	            continue
	          }

	          if (isString(value) && !isBlank(value)) {
	            let subRecord = {
	              v: value,
	              i: nestedArrIndex,
	              n: this.norm.get(value)
	            };

	            subRecords.push(subRecord);
	          } else if (isArray(value)) {
	            value.forEach((item, k) => {
	              stack.push({
	                nestedArrIndex: k,
	                value: item
	              });
	            });
	          } else ;
	        }
	        record.$[keyIndex] = subRecords;
	      } else if (isString(value) && !isBlank(value)) {
	        let subRecord = {
	          v: value,
	          n: this.norm.get(value)
	        };

	        record.$[keyIndex] = subRecord;
	      }
	    });

	    this.records.push(record);
	  }
	  toJSON() {
	    return {
	      keys: this.keys,
	      records: this.records
	    }
	  }
	}

	function createIndex(
	  keys,
	  docs,
	  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
	) {
	  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
	  myIndex.setKeys(keys.map(createKey));
	  myIndex.setSources(docs);
	  myIndex.create();
	  return myIndex
	}

	function parseIndex(
	  data,
	  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
	) {
	  const { keys, records } = data;
	  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
	  myIndex.setKeys(keys);
	  myIndex.setIndexRecords(records);
	  return myIndex
	}

	function computeScore$1(
	  pattern,
	  {
	    errors = 0,
	    currentLocation = 0,
	    expectedLocation = 0,
	    distance = Config.distance,
	    ignoreLocation = Config.ignoreLocation
	  } = {}
	) {
	  const accuracy = errors / pattern.length;

	  if (ignoreLocation) {
	    return accuracy
	  }

	  const proximity = Math.abs(expectedLocation - currentLocation);

	  if (!distance) {
	    // Dodge divide by zero error.
	    return proximity ? 1.0 : accuracy
	  }

	  return accuracy + proximity / distance
	}

	function convertMaskToIndices(
	  matchmask = [],
	  minMatchCharLength = Config.minMatchCharLength
	) {
	  let indices = [];
	  let start = -1;
	  let end = -1;
	  let i = 0;

	  for (let len = matchmask.length; i < len; i += 1) {
	    let match = matchmask[i];
	    if (match && start === -1) {
	      start = i;
	    } else if (!match && start !== -1) {
	      end = i - 1;
	      if (end - start + 1 >= minMatchCharLength) {
	        indices.push([start, end]);
	      }
	      start = -1;
	    }
	  }

	  // (i-1 - start) + 1 => i - start
	  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
	    indices.push([start, i - 1]);
	  }

	  return indices
	}

	// Machine word size
	const MAX_BITS = 32;

	function search(
	  text,
	  pattern,
	  patternAlphabet,
	  {
	    location = Config.location,
	    distance = Config.distance,
	    threshold = Config.threshold,
	    findAllMatches = Config.findAllMatches,
	    minMatchCharLength = Config.minMatchCharLength,
	    includeMatches = Config.includeMatches,
	    ignoreLocation = Config.ignoreLocation
	  } = {}
	) {
	  if (pattern.length > MAX_BITS) {
	    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
	  }

	  const patternLen = pattern.length;
	  // Set starting location at beginning text and initialize the alphabet.
	  const textLen = text.length;
	  // Handle the case when location > text.length
	  const expectedLocation = Math.max(0, Math.min(location, textLen));
	  // Highest score beyond which we give up.
	  let currentThreshold = threshold;
	  // Is there a nearby exact match? (speedup)
	  let bestLocation = expectedLocation;

	  // Performance: only computer matches when the minMatchCharLength > 1
	  // OR if `includeMatches` is true.
	  const computeMatches = minMatchCharLength > 1 || includeMatches;
	  // A mask of the matches, used for building the indices
	  const matchMask = computeMatches ? Array(textLen) : [];

	  let index;

	  // Get all exact matches, here for speed up
	  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
	    let score = computeScore$1(pattern, {
	      currentLocation: index,
	      expectedLocation,
	      distance,
	      ignoreLocation
	    });

	    currentThreshold = Math.min(score, currentThreshold);
	    bestLocation = index + patternLen;

	    if (computeMatches) {
	      let i = 0;
	      while (i < patternLen) {
	        matchMask[index + i] = 1;
	        i += 1;
	      }
	    }
	  }

	  // Reset the best location
	  bestLocation = -1;

	  let lastBitArr = [];
	  let finalScore = 1;
	  let binMax = patternLen + textLen;

	  const mask = 1 << (patternLen - 1);

	  for (let i = 0; i < patternLen; i += 1) {
	    // Scan for the best match; each iteration allows for one more error.
	    // Run a binary search to determine how far from the match location we can stray
	    // at this error level.
	    let binMin = 0;
	    let binMid = binMax;

	    while (binMin < binMid) {
	      const score = computeScore$1(pattern, {
	        errors: i,
	        currentLocation: expectedLocation + binMid,
	        expectedLocation,
	        distance,
	        ignoreLocation
	      });

	      if (score <= currentThreshold) {
	        binMin = binMid;
	      } else {
	        binMax = binMid;
	      }

	      binMid = Math.floor((binMax - binMin) / 2 + binMin);
	    }

	    // Use the result from this iteration as the maximum for the next.
	    binMax = binMid;

	    let start = Math.max(1, expectedLocation - binMid + 1);
	    let finish = findAllMatches
	      ? textLen
	      : Math.min(expectedLocation + binMid, textLen) + patternLen;

	    // Initialize the bit array
	    let bitArr = Array(finish + 2);

	    bitArr[finish + 1] = (1 << i) - 1;

	    for (let j = finish; j >= start; j -= 1) {
	      let currentLocation = j - 1;
	      let charMatch = patternAlphabet[text.charAt(currentLocation)];

	      if (computeMatches) {
	        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
	        matchMask[currentLocation] = +!!charMatch;
	      }

	      // First pass: exact match
	      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

	      // Subsequent passes: fuzzy match
	      if (i) {
	        bitArr[j] |=
	          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
	      }

	      if (bitArr[j] & mask) {
	        finalScore = computeScore$1(pattern, {
	          errors: i,
	          currentLocation,
	          expectedLocation,
	          distance,
	          ignoreLocation
	        });

	        // This match will almost certainly be better than any existing match.
	        // But check anyway.
	        if (finalScore <= currentThreshold) {
	          // Indeed it is
	          currentThreshold = finalScore;
	          bestLocation = currentLocation;

	          // Already passed `loc`, downhill from here on in.
	          if (bestLocation <= expectedLocation) {
	            break
	          }

	          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
	          start = Math.max(1, 2 * expectedLocation - bestLocation);
	        }
	      }
	    }

	    // No hope for a (better) match at greater error levels.
	    const score = computeScore$1(pattern, {
	      errors: i + 1,
	      currentLocation: expectedLocation,
	      expectedLocation,
	      distance,
	      ignoreLocation
	    });

	    if (score > currentThreshold) {
	      break
	    }

	    lastBitArr = bitArr;
	  }

	  const result = {
	    isMatch: bestLocation >= 0,
	    // Count exact matches (those with a score of 0) to be "almost" exact
	    score: Math.max(0.001, finalScore)
	  };

	  if (computeMatches) {
	    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
	    if (!indices.length) {
	      result.isMatch = false;
	    } else if (includeMatches) {
	      result.indices = indices;
	    }
	  }

	  return result
	}

	function createPatternAlphabet(pattern) {
	  let mask = {};

	  for (let i = 0, len = pattern.length; i < len; i += 1) {
	    const char = pattern.charAt(i);
	    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
	  }

	  return mask
	}

	class BitapSearch {
	  constructor(
	    pattern,
	    {
	      location = Config.location,
	      threshold = Config.threshold,
	      distance = Config.distance,
	      includeMatches = Config.includeMatches,
	      findAllMatches = Config.findAllMatches,
	      minMatchCharLength = Config.minMatchCharLength,
	      isCaseSensitive = Config.isCaseSensitive,
	      ignoreLocation = Config.ignoreLocation
	    } = {}
	  ) {
	    this.options = {
	      location,
	      threshold,
	      distance,
	      includeMatches,
	      findAllMatches,
	      minMatchCharLength,
	      isCaseSensitive,
	      ignoreLocation
	    };

	    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

	    this.chunks = [];

	    if (!this.pattern.length) {
	      return
	    }

	    const addChunk = (pattern, startIndex) => {
	      this.chunks.push({
	        pattern,
	        alphabet: createPatternAlphabet(pattern),
	        startIndex
	      });
	    };

	    const len = this.pattern.length;

	    if (len > MAX_BITS) {
	      let i = 0;
	      const remainder = len % MAX_BITS;
	      const end = len - remainder;

	      while (i < end) {
	        addChunk(this.pattern.substr(i, MAX_BITS), i);
	        i += MAX_BITS;
	      }

	      if (remainder) {
	        const startIndex = len - MAX_BITS;
	        addChunk(this.pattern.substr(startIndex), startIndex);
	      }
	    } else {
	      addChunk(this.pattern, 0);
	    }
	  }

	  searchIn(text) {
	    const { isCaseSensitive, includeMatches } = this.options;

	    if (!isCaseSensitive) {
	      text = text.toLowerCase();
	    }

	    // Exact match
	    if (this.pattern === text) {
	      let result = {
	        isMatch: true,
	        score: 0
	      };

	      if (includeMatches) {
	        result.indices = [[0, text.length - 1]];
	      }

	      return result
	    }

	    // Otherwise, use Bitap algorithm
	    const {
	      location,
	      distance,
	      threshold,
	      findAllMatches,
	      minMatchCharLength,
	      ignoreLocation
	    } = this.options;

	    let allIndices = [];
	    let totalScore = 0;
	    let hasMatches = false;

	    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
	      const { isMatch, score, indices } = search(text, pattern, alphabet, {
	        location: location + startIndex,
	        distance,
	        threshold,
	        findAllMatches,
	        minMatchCharLength,
	        includeMatches,
	        ignoreLocation
	      });

	      if (isMatch) {
	        hasMatches = true;
	      }

	      totalScore += score;

	      if (isMatch && indices) {
	        allIndices = [...allIndices, ...indices];
	      }
	    });

	    let result = {
	      isMatch: hasMatches,
	      score: hasMatches ? totalScore / this.chunks.length : 1
	    };

	    if (hasMatches && includeMatches) {
	      result.indices = allIndices;
	    }

	    return result
	  }
	}

	class BaseMatch {
	  constructor(pattern) {
	    this.pattern = pattern;
	  }
	  static isMultiMatch(pattern) {
	    return getMatch(pattern, this.multiRegex)
	  }
	  static isSingleMatch(pattern) {
	    return getMatch(pattern, this.singleRegex)
	  }
	  search(/*text*/) {}
	}

	function getMatch(pattern, exp) {
	  const matches = pattern.match(exp);
	  return matches ? matches[1] : null
	}

	// Token: 'file

	class ExactMatch extends BaseMatch {
	  constructor(pattern) {
	    super(pattern);
	  }
	  static get type() {
	    return 'exact'
	  }
	  static get multiRegex() {
	    return /^="(.*)"$/
	  }
	  static get singleRegex() {
	    return /^=(.*)$/
	  }
	  search(text) {
	    const isMatch = text === this.pattern;

	    return {
	      isMatch,
	      score: isMatch ? 0 : 1,
	      indices: [0, this.pattern.length - 1]
	    }
	  }
	}

	// Token: !fire

	class InverseExactMatch extends BaseMatch {
	  constructor(pattern) {
	    super(pattern);
	  }
	  static get type() {
	    return 'inverse-exact'
	  }
	  static get multiRegex() {
	    return /^!"(.*)"$/
	  }
	  static get singleRegex() {
	    return /^!(.*)$/
	  }
	  search(text) {
	    const index = text.indexOf(this.pattern);
	    const isMatch = index === -1;

	    return {
	      isMatch,
	      score: isMatch ? 0 : 1,
	      indices: [0, text.length - 1]
	    }
	  }
	}

	// Token: ^file

	class PrefixExactMatch extends BaseMatch {
	  constructor(pattern) {
	    super(pattern);
	  }
	  static get type() {
	    return 'prefix-exact'
	  }
	  static get multiRegex() {
	    return /^\^"(.*)"$/
	  }
	  static get singleRegex() {
	    return /^\^(.*)$/
	  }
	  search(text) {
	    const isMatch = text.startsWith(this.pattern);

	    return {
	      isMatch,
	      score: isMatch ? 0 : 1,
	      indices: [0, this.pattern.length - 1]
	    }
	  }
	}

	// Token: !^fire

	class InversePrefixExactMatch extends BaseMatch {
	  constructor(pattern) {
	    super(pattern);
	  }
	  static get type() {
	    return 'inverse-prefix-exact'
	  }
	  static get multiRegex() {
	    return /^!\^"(.*)"$/
	  }
	  static get singleRegex() {
	    return /^!\^(.*)$/
	  }
	  search(text) {
	    const isMatch = !text.startsWith(this.pattern);

	    return {
	      isMatch,
	      score: isMatch ? 0 : 1,
	      indices: [0, text.length - 1]
	    }
	  }
	}

	// Token: .file$

	class SuffixExactMatch extends BaseMatch {
	  constructor(pattern) {
	    super(pattern);
	  }
	  static get type() {
	    return 'suffix-exact'
	  }
	  static get multiRegex() {
	    return /^"(.*)"\$$/
	  }
	  static get singleRegex() {
	    return /^(.*)\$$/
	  }
	  search(text) {
	    const isMatch = text.endsWith(this.pattern);

	    return {
	      isMatch,
	      score: isMatch ? 0 : 1,
	      indices: [text.length - this.pattern.length, text.length - 1]
	    }
	  }
	}

	// Token: !.file$

	class InverseSuffixExactMatch extends BaseMatch {
	  constructor(pattern) {
	    super(pattern);
	  }
	  static get type() {
	    return 'inverse-suffix-exact'
	  }
	  static get multiRegex() {
	    return /^!"(.*)"\$$/
	  }
	  static get singleRegex() {
	    return /^!(.*)\$$/
	  }
	  search(text) {
	    const isMatch = !text.endsWith(this.pattern);
	    return {
	      isMatch,
	      score: isMatch ? 0 : 1,
	      indices: [0, text.length - 1]
	    }
	  }
	}

	class FuzzyMatch extends BaseMatch {
	  constructor(
	    pattern,
	    {
	      location = Config.location,
	      threshold = Config.threshold,
	      distance = Config.distance,
	      includeMatches = Config.includeMatches,
	      findAllMatches = Config.findAllMatches,
	      minMatchCharLength = Config.minMatchCharLength,
	      isCaseSensitive = Config.isCaseSensitive,
	      ignoreLocation = Config.ignoreLocation
	    } = {}
	  ) {
	    super(pattern);
	    this._bitapSearch = new BitapSearch(pattern, {
	      location,
	      threshold,
	      distance,
	      includeMatches,
	      findAllMatches,
	      minMatchCharLength,
	      isCaseSensitive,
	      ignoreLocation
	    });
	  }
	  static get type() {
	    return 'fuzzy'
	  }
	  static get multiRegex() {
	    return /^"(.*)"$/
	  }
	  static get singleRegex() {
	    return /^(.*)$/
	  }
	  search(text) {
	    return this._bitapSearch.searchIn(text)
	  }
	}

	// Token: 'file

	class IncludeMatch extends BaseMatch {
	  constructor(pattern) {
	    super(pattern);
	  }
	  static get type() {
	    return 'include'
	  }
	  static get multiRegex() {
	    return /^'"(.*)"$/
	  }
	  static get singleRegex() {
	    return /^'(.*)$/
	  }
	  search(text) {
	    let location = 0;
	    let index;

	    const indices = [];
	    const patternLen = this.pattern.length;

	    // Get all exact matches
	    while ((index = text.indexOf(this.pattern, location)) > -1) {
	      location = index + patternLen;
	      indices.push([index, location - 1]);
	    }

	    const isMatch = !!indices.length;

	    return {
	      isMatch,
	      score: isMatch ? 0 : 1,
	      indices
	    }
	  }
	}

	// ❗Order is important. DO NOT CHANGE.
	const searchers = [
	  ExactMatch,
	  IncludeMatch,
	  PrefixExactMatch,
	  InversePrefixExactMatch,
	  InverseSuffixExactMatch,
	  SuffixExactMatch,
	  InverseExactMatch,
	  FuzzyMatch
	];

	const searchersLen = searchers.length;

	// Regex to split by spaces, but keep anything in quotes together
	const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
	const OR_TOKEN = '|';

	// Return a 2D array representation of the query, for simpler parsing.
	// Example:
	// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
	function parseQuery(pattern, options = {}) {
	  return pattern.split(OR_TOKEN).map((item) => {
	    let query = item
	      .trim()
	      .split(SPACE_RE)
	      .filter((item) => item && !!item.trim());

	    let results = [];
	    for (let i = 0, len = query.length; i < len; i += 1) {
	      const queryItem = query[i];

	      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
	      let found = false;
	      let idx = -1;
	      while (!found && ++idx < searchersLen) {
	        const searcher = searchers[idx];
	        let token = searcher.isMultiMatch(queryItem);
	        if (token) {
	          results.push(new searcher(token, options));
	          found = true;
	        }
	      }

	      if (found) {
	        continue
	      }

	      // 2. Handle single query matches (i.e, once that are *not* quoted)
	      idx = -1;
	      while (++idx < searchersLen) {
	        const searcher = searchers[idx];
	        let token = searcher.isSingleMatch(queryItem);
	        if (token) {
	          results.push(new searcher(token, options));
	          break
	        }
	      }
	    }

	    return results
	  })
	}

	// These extended matchers can return an array of matches, as opposed
	// to a singl match
	const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

	/**
	 * Command-like searching
	 * ======================
	 *
	 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
	 * search in a given text.
	 *
	 * Search syntax:
	 *
	 * | Token       | Match type                 | Description                            |
	 * | ----------- | -------------------------- | -------------------------------------- |
	 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
	 * | `=scheme`   | exact-match                | Items that are `scheme`                |
	 * | `'python`   | include-match              | Items that include `python`            |
	 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
	 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
	 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
	 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
	 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
	 *
	 * A single pipe character acts as an OR operator. For example, the following
	 * query matches entries that start with `core` and end with either`go`, `rb`,
	 * or`py`.
	 *
	 * ```
	 * ^core go$ | rb$ | py$
	 * ```
	 */
	class ExtendedSearch {
	  constructor(
	    pattern,
	    {
	      isCaseSensitive = Config.isCaseSensitive,
	      includeMatches = Config.includeMatches,
	      minMatchCharLength = Config.minMatchCharLength,
	      ignoreLocation = Config.ignoreLocation,
	      findAllMatches = Config.findAllMatches,
	      location = Config.location,
	      threshold = Config.threshold,
	      distance = Config.distance
	    } = {}
	  ) {
	    this.query = null;
	    this.options = {
	      isCaseSensitive,
	      includeMatches,
	      minMatchCharLength,
	      findAllMatches,
	      ignoreLocation,
	      location,
	      threshold,
	      distance
	    };

	    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
	    this.query = parseQuery(this.pattern, this.options);
	  }

	  static condition(_, options) {
	    return options.useExtendedSearch
	  }

	  searchIn(text) {
	    const query = this.query;

	    if (!query) {
	      return {
	        isMatch: false,
	        score: 1
	      }
	    }

	    const { includeMatches, isCaseSensitive } = this.options;

	    text = isCaseSensitive ? text : text.toLowerCase();

	    let numMatches = 0;
	    let allIndices = [];
	    let totalScore = 0;

	    // ORs
	    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
	      const searchers = query[i];

	      // Reset indices
	      allIndices.length = 0;
	      numMatches = 0;

	      // ANDs
	      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
	        const searcher = searchers[j];
	        const { isMatch, indices, score } = searcher.search(text);

	        if (isMatch) {
	          numMatches += 1;
	          totalScore += score;
	          if (includeMatches) {
	            const type = searcher.constructor.type;
	            if (MultiMatchSet.has(type)) {
	              allIndices = [...allIndices, ...indices];
	            } else {
	              allIndices.push(indices);
	            }
	          }
	        } else {
	          totalScore = 0;
	          numMatches = 0;
	          allIndices.length = 0;
	          break
	        }
	      }

	      // OR condition, so if TRUE, return
	      if (numMatches) {
	        let result = {
	          isMatch: true,
	          score: totalScore / numMatches
	        };

	        if (includeMatches) {
	          result.indices = allIndices;
	        }

	        return result
	      }
	    }

	    // Nothing was matched
	    return {
	      isMatch: false,
	      score: 1
	    }
	  }
	}

	const registeredSearchers = [];

	function register(...args) {
	  registeredSearchers.push(...args);
	}

	function createSearcher(pattern, options) {
	  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
	    let searcherClass = registeredSearchers[i];
	    if (searcherClass.condition(pattern, options)) {
	      return new searcherClass(pattern, options)
	    }
	  }

	  return new BitapSearch(pattern, options)
	}

	const LogicalOperator = {
	  AND: '$and',
	  OR: '$or'
	};

	const KeyType = {
	  PATH: '$path',
	  PATTERN: '$val'
	};

	const isExpression = (query) =>
	  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

	const isPath = (query) => !!query[KeyType.PATH];

	const isLeaf = (query) =>
	  !isArray(query) && isObject(query) && !isExpression(query);

	const convertToExplicit = (query) => ({
	  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
	    [key]: query[key]
	  }))
	});

	// When `auto` is `true`, the parse function will infer and initialize and add
	// the appropriate `Searcher` instance
	function parse(query, options, { auto = true } = {}) {
	  const next = (query) => {
	    let keys = Object.keys(query);

	    const isQueryPath = isPath(query);

	    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
	      return next(convertToExplicit(query))
	    }

	    if (isLeaf(query)) {
	      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

	      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

	      if (!isString(pattern)) {
	        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
	      }

	      const obj = {
	        keyId: createKeyId(key),
	        pattern
	      };

	      if (auto) {
	        obj.searcher = createSearcher(pattern, options);
	      }

	      return obj
	    }

	    let node = {
	      children: [],
	      operator: keys[0]
	    };

	    keys.forEach((key) => {
	      const value = query[key];

	      if (isArray(value)) {
	        value.forEach((item) => {
	          node.children.push(next(item));
	        });
	      }
	    });

	    return node
	  };

	  if (!isExpression(query)) {
	    query = convertToExplicit(query);
	  }

	  return next(query)
	}

	// Practical scoring function
	function computeScore(
	  results,
	  { ignoreFieldNorm = Config.ignoreFieldNorm }
	) {
	  results.forEach((result) => {
	    let totalScore = 1;

	    result.matches.forEach(({ key, norm, score }) => {
	      const weight = key ? key.weight : null;

	      totalScore *= Math.pow(
	        score === 0 && weight ? Number.EPSILON : score,
	        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
	      );
	    });

	    result.score = totalScore;
	  });
	}

	function transformMatches(result, data) {
	  const matches = result.matches;
	  data.matches = [];

	  if (!isDefined(matches)) {
	    return
	  }

	  matches.forEach((match) => {
	    if (!isDefined(match.indices) || !match.indices.length) {
	      return
	    }

	    const { indices, value } = match;

	    let obj = {
	      indices,
	      value
	    };

	    if (match.key) {
	      obj.key = match.key.src;
	    }

	    if (match.idx > -1) {
	      obj.refIndex = match.idx;
	    }

	    data.matches.push(obj);
	  });
	}

	function transformScore(result, data) {
	  data.score = result.score;
	}

	function format(
	  results,
	  docs,
	  {
	    includeMatches = Config.includeMatches,
	    includeScore = Config.includeScore
	  } = {}
	) {
	  const transformers = [];

	  if (includeMatches) transformers.push(transformMatches);
	  if (includeScore) transformers.push(transformScore);

	  return results.map((result) => {
	    const { idx } = result;

	    const data = {
	      item: docs[idx],
	      refIndex: idx
	    };

	    if (transformers.length) {
	      transformers.forEach((transformer) => {
	        transformer(result, data);
	      });
	    }

	    return data
	  })
	}

	class Fuse {
	  constructor(docs, options = {}, index) {
	    this.options = { ...Config, ...options };

	    if (
	      this.options.useExtendedSearch &&
	      !true
	    ) ;

	    this._keyStore = new KeyStore(this.options.keys);

	    this.setCollection(docs, index);
	  }

	  setCollection(docs, index) {
	    this._docs = docs;

	    if (index && !(index instanceof FuseIndex)) {
	      throw new Error(INCORRECT_INDEX_TYPE)
	    }

	    this._myIndex =
	      index ||
	      createIndex(this.options.keys, this._docs, {
	        getFn: this.options.getFn,
	        fieldNormWeight: this.options.fieldNormWeight
	      });
	  }

	  add(doc) {
	    if (!isDefined(doc)) {
	      return
	    }

	    this._docs.push(doc);
	    this._myIndex.add(doc);
	  }

	  remove(predicate = (/* doc, idx */) => false) {
	    const results = [];

	    for (let i = 0, len = this._docs.length; i < len; i += 1) {
	      const doc = this._docs[i];
	      if (predicate(doc, i)) {
	        this.removeAt(i);
	        i -= 1;
	        len -= 1;

	        results.push(doc);
	      }
	    }

	    return results
	  }

	  removeAt(idx) {
	    this._docs.splice(idx, 1);
	    this._myIndex.removeAt(idx);
	  }

	  getIndex() {
	    return this._myIndex
	  }

	  search(query, { limit = -1 } = {}) {
	    const {
	      includeMatches,
	      includeScore,
	      shouldSort,
	      sortFn,
	      ignoreFieldNorm
	    } = this.options;

	    let results = isString(query)
	      ? isString(this._docs[0])
	        ? this._searchStringList(query)
	        : this._searchObjectList(query)
	      : this._searchLogical(query);

	    computeScore(results, { ignoreFieldNorm });

	    if (shouldSort) {
	      results.sort(sortFn);
	    }

	    if (isNumber(limit) && limit > -1) {
	      results = results.slice(0, limit);
	    }

	    return format(results, this._docs, {
	      includeMatches,
	      includeScore
	    })
	  }

	  _searchStringList(query) {
	    const searcher = createSearcher(query, this.options);
	    const { records } = this._myIndex;
	    const results = [];

	    // Iterate over every string in the index
	    records.forEach(({ v: text, i: idx, n: norm }) => {
	      if (!isDefined(text)) {
	        return
	      }

	      const { isMatch, score, indices } = searcher.searchIn(text);

	      if (isMatch) {
	        results.push({
	          item: text,
	          idx,
	          matches: [{ score, value: text, norm, indices }]
	        });
	      }
	    });

	    return results
	  }

	  _searchLogical(query) {

	    const expression = parse(query, this.options);

	    const evaluate = (node, item, idx) => {
	      if (!node.children) {
	        const { keyId, searcher } = node;

	        const matches = this._findMatches({
	          key: this._keyStore.get(keyId),
	          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
	          searcher
	        });

	        if (matches && matches.length) {
	          return [
	            {
	              idx,
	              item,
	              matches
	            }
	          ]
	        }

	        return []
	      }

	      const res = [];
	      for (let i = 0, len = node.children.length; i < len; i += 1) {
	        const child = node.children[i];
	        const result = evaluate(child, item, idx);
	        if (result.length) {
	          res.push(...result);
	        } else if (node.operator === LogicalOperator.AND) {
	          return []
	        }
	      }
	      return res
	    };

	    const records = this._myIndex.records;
	    const resultMap = {};
	    const results = [];

	    records.forEach(({ $: item, i: idx }) => {
	      if (isDefined(item)) {
	        let expResults = evaluate(expression, item, idx);

	        if (expResults.length) {
	          // Dedupe when adding
	          if (!resultMap[idx]) {
	            resultMap[idx] = { idx, item, matches: [] };
	            results.push(resultMap[idx]);
	          }
	          expResults.forEach(({ matches }) => {
	            resultMap[idx].matches.push(...matches);
	          });
	        }
	      }
	    });

	    return results
	  }

	  _searchObjectList(query) {
	    const searcher = createSearcher(query, this.options);
	    const { keys, records } = this._myIndex;
	    const results = [];

	    // List is Array<Object>
	    records.forEach(({ $: item, i: idx }) => {
	      if (!isDefined(item)) {
	        return
	      }

	      let matches = [];

	      // Iterate over every key (i.e, path), and fetch the value at that key
	      keys.forEach((key, keyIndex) => {
	        matches.push(
	          ...this._findMatches({
	            key,
	            value: item[keyIndex],
	            searcher
	          })
	        );
	      });

	      if (matches.length) {
	        results.push({
	          idx,
	          item,
	          matches
	        });
	      }
	    });

	    return results
	  }
	  _findMatches({ key, value, searcher }) {
	    if (!isDefined(value)) {
	      return []
	    }

	    let matches = [];

	    if (isArray(value)) {
	      value.forEach(({ v: text, i: idx, n: norm }) => {
	        if (!isDefined(text)) {
	          return
	        }

	        const { isMatch, score, indices } = searcher.searchIn(text);

	        if (isMatch) {
	          matches.push({
	            score,
	            key,
	            value: text,
	            idx,
	            norm,
	            indices
	          });
	        }
	      });
	    } else {
	      const { v: text, n: norm } = value;

	      const { isMatch, score, indices } = searcher.searchIn(text);

	      if (isMatch) {
	        matches.push({ score, key, value: text, norm, indices });
	      }
	    }

	    return matches
	  }
	}

	Fuse.version = '6.6.2';
	Fuse.createIndex = createIndex;
	Fuse.parseIndex = parseIndex;
	Fuse.config = Config;

	{
	  Fuse.parseQuery = parse;
	}

	{
	  register(ExtendedSearch);
	}




	/***/ }),

	/***/ 791:
	/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

	// ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);

	// EXPORTS
	__webpack_require__.d(__webpack_exports__, {
	  "__DO_NOT_USE__ActionTypes": function() { return /* binding */ ActionTypes; },
	  "applyMiddleware": function() { return /* binding */ applyMiddleware; },
	  "bindActionCreators": function() { return /* binding */ bindActionCreators; },
	  "combineReducers": function() { return /* binding */ combineReducers; },
	  "compose": function() { return /* binding */ compose; },
	  "createStore": function() { return /* binding */ createStore; },
	  "legacy_createStore": function() { return /* binding */ legacy_createStore; }
	});
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	function _toPrimitive(input, hint) {
	  if (_typeof(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}


	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return _typeof(key) === "symbol" ? key : String(key);
	}

	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	  return keys;
	}
	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	  return target;
	}


	/**
	 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
	 *
	 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
	 * during build.
	 * @param {number} code
	 */
	function formatProdErrorMessage(code) {
	  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
	}

	// Inlined version of the `symbol-observable` polyfill
	var $$observable = (function () {
	  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
	})();

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};

	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;

	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(obj) === proto;
	}

	/**
	 * @deprecated
	 *
	 * **We recommend using the `configureStore` method
	 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
	 *
	 * Redux Toolkit is our recommended approach for writing Redux logic today,
	 * including store setup, reducers, data fetching, and more.
	 *
	 * **For more details, please read this Redux docs page:**
	 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
	 *
	 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
	 * simplifies setup and helps avoid common bugs.
	 *
	 * You should not be using the `redux` core package by itself today, except for learning purposes.
	 * The `createStore` method from the core `redux` package will not be removed, but we encourage
	 * all users to migrate to using Redux Toolkit for all Redux code.
	 *
	 * If you want to use `createStore` without this visual deprecation warning, use
	 * the `legacy_createStore` import instead:
	 *
	 * `import { legacy_createStore as createStore} from 'redux'`
	 *
	 */

	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error( formatProdErrorMessage(0) );
	  }

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error( formatProdErrorMessage(1) );
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error( formatProdErrorMessage(2) );
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	  /**
	   * This makes a shallow copy of currentListeners so we can use
	   * nextListeners as a temporary list while dispatching.
	   *
	   * This prevents any bugs around consumers calling
	   * subscribe/unsubscribe in the middle of a dispatch.
	   */

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */


	  function getState() {
	    if (isDispatching) {
	      throw new Error( formatProdErrorMessage(3) );
	    }

	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */


	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error( formatProdErrorMessage(4) );
	    }

	    if (isDispatching) {
	      throw new Error( formatProdErrorMessage(5) );
	    }

	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      if (isDispatching) {
	        throw new Error( formatProdErrorMessage(6) );
	      }

	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	      currentListeners = null;
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */


	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error( formatProdErrorMessage(7) );
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error( formatProdErrorMessage(8) );
	    }

	    if (isDispatching) {
	      throw new Error( formatProdErrorMessage(9) );
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;

	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */


	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error( formatProdErrorMessage(10) );
	    }

	    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
	    // Any reducers that existed in both the new and old rootReducer
	    // will receive the previous state. This effectively populates
	    // the new state tree with any relevant data from the old one.

	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */


	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new Error( formatProdErrorMessage(11) );
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.


	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}
	/**
	 * Creates a Redux store that holds the state tree.
	 *
	 * **We recommend using `configureStore` from the
	 * `@reduxjs/toolkit` package**, which replaces `createStore`:
	 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
	 *
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	var legacy_createStore = createStore;

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, {
	      type: ActionTypes.INIT
	    });

	    if (typeof initialState === 'undefined') {
	      throw new Error( formatProdErrorMessage(12) );
	    }

	    if (typeof reducer(undefined, {
	      type: ActionTypes.PROBE_UNKNOWN_ACTION()
	    }) === 'undefined') {
	      throw new Error( formatProdErrorMessage(13) );
	    }
	  });
	}
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */


	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};

	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }

	  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same

	  var shapeAssertionError;

	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination(state, action) {
	    if (state === void 0) {
	      state = {};
	    }

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    var hasChanged = false;
	    var nextState = {};

	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);

	      if (typeof nextStateForKey === 'undefined') {
	        action && action.type;
	        throw new Error( formatProdErrorMessage(14) );
	      }

	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }

	    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
	    return hasChanged ? nextState : state;
	  };
	}

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(this, arguments));
	  };
	}
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass an action creator as the first argument,
	 * and get a dispatch wrapped function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */


	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error( formatProdErrorMessage(16) );
	  }

	  var boundActionCreators = {};

	  for (var key in actionCreators) {
	    var actionCreator = actionCreators[key];

	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }

	  return boundActionCreators;
	}

	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(void 0, arguments));
	    };
	  });
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function () {
	      var store = createStore.apply(void 0, arguments);

	      var _dispatch = function dispatch() {
	        throw new Error( formatProdErrorMessage(15) );
	      };

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(void 0, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(void 0, chain)(store.dispatch);
	      return _objectSpread2(_objectSpread2({}, store), {}, {
	        dispatch: _dispatch
	      });
	    };
	  };
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
	/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
	/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
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
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	!function() {
	/* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
	/* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
	/* harmony import */ __webpack_require__(187);
	/* harmony import */ __webpack_require__(883);
	/* harmony import */ __webpack_require__(789);
	/* harmony import */ __webpack_require__(686);







	/* harmony default export */ __webpack_exports__["default"] = ((_scripts_choices__WEBPACK_IMPORTED_MODULE_0___default()));

	}();
	__webpack_exports__ = __webpack_exports__["default"];
	/******/ 	return __webpack_exports__;
	/******/ })()
	;
	}); 
} (choices));

var choicesExports = choices.exports;
const Choices = /*@__PURE__*/getDefaultExportFromCjs(choicesExports);

function addButtonsListener() {
  const compareButtons = document.querySelectorAll(".product-card__compare");
  compareButtons?.forEach((el) => {
    const id = el.closest(".product-card").getAttribute("data-id");
    const category = el.closest(".product-card").getAttribute("data-category");
    el.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        let isAdd = JSON.parse(el.getAttribute("data-isadd"));
        const text = el.querySelector(".product-card__compare-text");
        el.style.pointerEvents = "none";
        const { count } = isAdd ? await compareAdd(+id, +category) : await compareDelete(+id, +category);
        setCompareCount(count);
        text.innerText = isAdd ? "В сравнении" : "Сравнить";
        el.setAttribute("data-isadd", isAdd ? "false" : "true");
        el.style.pointerEvents = "auto";
        if (isAdd) {
          const modal = new Oe([{ src: "#compare-success" }], {
            closeButton: false,
            compact: false,
            autoFocus: false
          });
          const close = document.querySelector("#compare-success .button");
          if (close) {
            close.addEventListener("click", () => modal.close());
          }
        }
      } catch {
      }
    });
    function setCompareCount(count) {
      const counters = document.querySelectorAll(".header__compare");
      counters.forEach((counter) => {
        if (counter instanceof HTMLElement) {
          counter.setAttribute("data-count", String(count));
        }
      });
    }
  });
}
addButtonsListener();
const accordion = document.querySelector(".filter__accordion");
if (accordion) {
  const accordions = accordion.querySelectorAll(".ac");
  let opened = [];
  Array.from(accordions).forEach((ac, index) => {
    if (ac.getAttribute("data-open") === "true") {
      opened.push(index);
    }
  });
  new Accordion(".filter__accordion", {
    duration: 380,
    showMultiple: true,
    openOnInit: opened
  });
}
const catalog = document.querySelector(".category");
if (catalog) {
  let filterHandler = function(container) {
    const inputs = container.querySelectorAll(".filter input");
    const sort = document.querySelector(".category__sort select");
    const search2 = document.querySelector(".search-bar__element");
    const showMore = document.querySelector(".category__more .button");
    const pagination2 = document.querySelector(".category__pagination");
    inputs.forEach((input) => {
      if (input instanceof HTMLInputElement) {
        input.addEventListener("change", CatalogHandler);
      }
    });
    pagination2?.addEventListener("click", CatalogHandler);
    showMore?.addEventListener("click", CatalogHandler);
    sort?.addEventListener("change", CatalogHandler);
    search2?.addEventListener("change", CatalogHandler);
  }, setFilters = function() {
    let params = new URLSearchParams(window.location.search);
    const result = {};
    params.forEach((value2, key) => {
      if (!result[key]) {
        result[key] = [];
      }
      if (result[key] instanceof Array) {
        result[key].push(value2);
      }
    });
    for (var value in result) {
      const item = document.querySelector(`input[name="${value}"]`);
      switch (value) {
        case "sale":
          item.checked = true;
          break;
        case "sort":
          choice.setChoiceByValue(result[value]);
          break;
        case "page":
          pagination.movePageTo(Number(result[value]));
          break;
        case "min_price":
        case "max_price":
          item.value = String(result[value]);
          break;
        default:
          if (result[value] instanceof Array) {
            result[value].forEach((el) => {
              const item2 = document.querySelector(`input[data-name="${value}"][name="${el}"]`);
              if (item2) {
                item2.checked = true;
              }
            });
          }
          break;
      }
    }
    params.forEach((value2, key) => {
      if (checked[key]) {
        checked[key] = [...checked[key], value2];
      } else if (key === "min_price" || key === "max_price" || key === "sort" || key === "sale" || key === "page" || key === "s") {
        checked[key] = value2;
      } else {
        checked[key] = [value2];
      }
    });
  }, createProduct = function(product) {
    const element = document.createElement("a");
    if (product.link) element.setAttribute("href", product.link);
    element.setAttribute("class", "product-card product-card--small");
    element.setAttribute("data-id", String(product["data-id"]));
    element.setAttribute("data-category", String(product["data-category"]));
    const container = document.createElement("div");
    container.classList.add("product-card__container");
    const image = document.createElement("img");
    if (product.img) {
      image.classList.add("product-card__image");
      image.src = product.img;
      if (product.title) image.alt = product.title;
      container.appendChild(image);
    }
    const title = document.createElement("div");
    if (product.title) {
      title.classList.add("product-card__title");
      title.innerHTML = product.title;
      container.appendChild(title);
    }
    if (product.price && product.sale) {
      const sale = document.createElement("div");
      sale.innerHTML = formatPrice(product.price);
      sale.setAttribute("class", "product-card__sale ruble");
      container.appendChild(sale);
      const discount = document.createElement("div");
      discount.innerHTML = formatPrice(product.sale - product.price);
      discount.setAttribute("class", "product-card__tag ruble");
      container.appendChild(discount);
    }
    if (product.price) {
      const price = document.createElement("div");
      price.setAttribute("class", "product-card__price ruble");
      price.innerHTML = formatPrice(product.sale ?? product.price);
      container.appendChild(price);
    }
    const compare = document.createElement("div");
    compare.classList.add("product-card__compare");
    compare.dataset.isadd = "true";
    compare.innerHTML = `
                    <span class="product-card__compare-icon icon-compare"></span>
                    <span class="product-card__compare-text"> Сравнить </span>
                    `;
    container.appendChild(compare);
    const add = document.createElement("div");
    add.setAttribute("class", "add-cart product-buy icon-cart-arrow");
    container.appendChild(add);
    element.appendChild(container);
    return element;
  }, getNoun = function(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };
  let currentPage = 0;
  const paginationItems = document.querySelector('.category__pagination input[type="hidden"]');
  let paginationItemsValue = Number(paginationItems?.value);
  if (paginationItemsValue <= 1) {
    document.querySelector(".category__pagination")?.classList.add("hidden");
    document.querySelector(".category__more")?.classList.add("hidden");
  }
  const pagination = new Pagination(document.querySelector(".pagination"), {
    totalItems: paginationItemsValue ?? 1,
    itemsPerPage: 1,
    visiblePages: 5,
    centerAlign: false
  });
  setTimeout(function() {
    if (document.querySelector(".tui-is-selected.tui-last-child")) {
      document.querySelector(".category__more")?.classList.add("hidden");
    }
  }, 100);
  pagination.on("afterMove", (event) => {
    currentPage = event.page;
    console.log(currentPage);
  });
  const select = document.querySelector(".select__element");
  const choice = new Choices(select ?? "", {
    searchEnabled: false,
    itemSelectText: "",
    allowHTML: false
  });
  let checked = {};
  const filter = document.querySelector(".filter__content");
  if (filter instanceof HTMLElement) {
    filterHandler(filter);
    setFilters();
  }
  const path = new URL(window.location.href).pathname;
  const list = document.querySelector(".category__content");
  const card = list?.querySelector(".product-card");
  const categoryID = card?.getAttribute("data-category");
  const searchValue = document.querySelector(".search-bar__element");
  const search = document.querySelector(".category__content");
  const isSearch = search.dataset.search;
  async function CatalogHandler(e) {
    e.preventDefault();
    let isPaginationClick = false;
    const item = e.target;
    let isShowMore = false;
    let params = new URLSearchParams();
    if (item instanceof HTMLInputElement) {
      if (item?.type === "checkbox") {
        if (item instanceof HTMLInputElement) {
          const key = item.getAttribute("data-name");
          const value = item.getAttribute("name");
          if (key && value) {
            const set = new Set(checked[key]);
            if (item.checked) {
              set.add(value);
            } else {
              set.delete(value);
            }
            checked[key] = Array.from(set);
          }
        }
      }
      if (item.closest(".filter__even")) {
        if (item instanceof HTMLInputElement) {
          const key = item.getAttribute("name");
          const value = item.value;
          if (value) {
            checked[key ?? 0] = value;
          } else {
            delete checked[key ?? 0];
          }
        }
      }
      if (item.classList.contains("switch__element")) {
        const key = item.getAttribute("name");
        const value = item.checked;
        if (value) {
          checked[key ?? 0] = String(value);
        } else {
          delete checked[key ?? 0];
        }
      }
    }
    if (item instanceof HTMLSelectElement) {
      if (item.classList.contains("select__element")) {
        const value = item.querySelector("option")?.getAttribute("value");
        checked["sort"] = value ?? "";
      }
    }
    if (item instanceof HTMLInputElement) {
      if (item.classList.contains("search-bar__element")) {
        const key = "s";
        const value = item.value;
        if (value) {
          checked[key] = String(value);
        } else {
          delete checked[key];
        }
      }
      console.log(checked);
    }
    if (item instanceof Element) {
      if (item.classList.contains("tui-page-btn")) {
        const value = currentPage;
        isPaginationClick = true;
        checked["page"] = value;
      }
      if (item.closest(".category__more")) {
        const count = document.querySelector(".category__count")?.textContent;
        const countNum = count?.match(/\d+/);
        if (countNum) {
          console.log(
            document.querySelectorAll(".product-card.product-card--small").length / parseInt(countNum.join("")) < 1
          );
          if (document.querySelectorAll(".product-card.product-card--small").length / parseInt(countNum.join("")) < 1) {
            document.querySelector(".category__more")?.classList.add("hidden");
          }
        }
        checked["page"] = checked["page"] ? Number(checked["page"]) + 1 : 2;
        pagination.movePageTo(checked["page"]);
        isShowMore = true;
      }
    }
    for (const [k, v] of Object.entries(checked)) {
      if (v instanceof Array) {
        v.forEach((i) => {
          params.append(k, i);
        });
      }
      if (k === "min_price" || k === "max_price" || k === "sale" || k === "sort" || k === "s") {
        if (!params.has(k)) {
          params.append(k, v);
        }
      }
      if (k === "page") {
        params.append(k, v);
      }
    }
    history.pushState({}, "", `${path}?${params.toString()}`);
    if (list instanceof HTMLElement) {
      if (isSearch) {
        checked["s"] = searchValue?.value;
      } else {
        checked["term_id"] = categoryID;
      }
      try {
        let data;
        const maxPrice = document.querySelector('input[name="max_price"]');
        const minPrice = document.querySelector('input[name="min_price"]');
        maxPrice.setAttribute("disabled", "true");
        minPrice.setAttribute("disabled", "true");
        if (isSearch) {
          data = await sendSearchFilters(JSON.stringify(checked));
        } else {
          data = await sendFilters(JSON.stringify(checked));
        }
        maxPrice.removeAttribute("disabled");
        minPrice.removeAttribute("disabled");
        const counter = document.querySelector(".category__count");
        const newElements = [];
        data.products.forEach((product) => newElements.push(createProduct(product)));
        minPrice.placeholder = formatPrice(+data.minPrice);
        maxPrice.placeholder = formatPrice(+data.maxPrice);
        if (counter) {
          counter.innerHTML = `${data.count} ${getNoun(data.count, "товар", "товара", "товаров")}`;
        }
        if (Math.ceil(data.count / 16) > 1) {
          document.querySelector(".category__pagination")?.classList.remove("hidden");
          document.querySelector(".category__more")?.classList.remove("hidden");
        } else {
          document.querySelector(".category__pagination")?.classList.add("hidden");
          document.querySelector(".category__more")?.classList.add("hidden");
        }
        if (document.querySelector(".tui-is-selected.tui-last-child")) {
          document.querySelector(".category__more")?.classList.add("hidden");
        }
        pagination.setTotalItems(Math.ceil(data.count / 16));
        if (!isPaginationClick) {
          paginationItemsValue = Math.ceil(data.count / 16);
        }
        isShowMore ? "" : list.innerHTML = "";
        newElements.forEach((element) => list.appendChild(element));
        addButtonsListener();
        setUpMiniBuyButtons();
      } catch (error) {
      }
    }
  }
}

function openSearch(container2) {
  document.body.classList.add("body-overflow");
  if (container2 instanceof HTMLElement) container2.style.top = "0";
}
function closeSearch(container2) {
  document.body.classList.remove("body-overflow");
  if (container2 instanceof HTMLElement) container2.removeAttribute("style");
}
const trigger = document.querySelector(".filter-trigger");
const container = document.querySelector(".filter");
const close = document.querySelector(".filter-close");
if (trigger && container && close) {
  trigger.addEventListener("click", () => {
    openSearch(container);
    if (typeof CloseWatcher !== "undefined") {
      let watcher = new CloseWatcher();
      watcher.onclose = () => {
        closeSearch(container);
        watcher.destroy();
      };
    }
  });
  close.addEventListener("click", () => {
    closeSearch(container);
  });
}
