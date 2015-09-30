/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(10);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Array.prototype.forEach.call(document.querySelectorAll('[data-react-class]'), function (element) {
	  var Component = __webpack_require__(2)("./" + element.dataset.reactClass);
	  ReactDOM.render(React.createElement(Component, null), element);
	});

	Array.prototype.forEach.call(document.querySelectorAll('[data-relay-class]'), function (element) {
	  var Component = __webpack_require__(2)("./" + element.dataset.relayClass);
	  var Route = __webpack_require__(8)("./" + element.dataset.relayRoute);
	  ReactDOM.render(React.createElement(Relay.RootContainer, { Component: Component, route: new Route() }), element);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./landing-app": 3,
		"./landing-app.js": 3,
		"./login-app": 4,
		"./login-app.js": 4,
		"./register-app": 5,
		"./register-app.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LandingApp = (function (_React$Component) {
	  _inherits(LandingApp, _React$Component);

	  function LandingApp() {
	    var _this = this;

	    _classCallCheck(this, LandingApp);

	    _get(Object.getPrototypeOf(LandingApp.prototype), "constructor", this).apply(this, arguments);

	    this.render = function () {
	      return React.createElement(
	        "section",
	        null,
	        React.createElement(
	          "span",
	          null,
	          "Landing App Component for "
	        ),
	        _this.props.viewer.name
	      );
	    };
	  }

	  return LandingApp;
	})(React.Component);

	exports["default"] = Relay.createContainer(LandingApp, {

	  fragments: {

	    viewer: function viewer() {
	      return (function () {
	        var GraphQL = Relay.QL.__GraphQL;
	        return new GraphQL.QueryFragment("Landing", "User", [new GraphQL.Field("name", null, null, null, null, null, {
	          parentType: "User"
	        })]);
	      })();
	    }

	  }

	});
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    var _this = this;

	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);

	    this.render = function () {
	      return React.createElement(
	        "section",
	        { className: "login-app" },
	        React.createElement(
	          "ul",
	          null,
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "button",
	              { onClick: _this.handleLoginButtonClick.bind(_this, 'facebook') },
	              "Login with Facebook",
	              React.createElement("i", { className: "fa fa-facebook" })
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "button",
	              { onClick: _this.handleLoginButtonClick.bind(_this, 'twitter') },
	              "Login with Twitter",
	              React.createElement("i", { className: "fa fa-twitter" })
	            )
	          )
	        )
	      );
	    };

	    this.handleLoginButtonClick = function (provider, event) {
	      location = '/auth/' + provider;
	    };
	  }

	  return _default;
	})(React.Component);

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _isomorphicFetch = __webpack_require__(6);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    var _this = this;

	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);

	    this.state = {
	      name: '',
	      email: '',
	      password: '',
	      password_confirmation: '',
	      errors: {},
	      sync: false
	    };

	    this.render = function () {
	      return React.createElement(
	        'section',
	        { className: 'register-app' },
	        _this.renderRegisterForm()
	      );
	    };

	    this.renderRegisterForm = function () {
	      return React.createElement(
	        'form',
	        { onSubmit: _this.handleSubmit },
	        React.createElement(
	          'dl',
	          null,
	          _this.renderNameInput(),
	          _this.renderEmailInput(),
	          _this.renderPasswordInput(),
	          _this.renderPasswordConfirmationInput()
	        ),
	        React.createElement(
	          'section',
	          { className: 'buttons' },
	          React.createElement(
	            'button',
	            { type: 'submit' },
	            'Register'
	          )
	        )
	      );
	    };

	    this.renderNameInput = function () {
	      return [React.createElement(
	        'dt',
	        { key: 'name-title' },
	        'Name'
	      ), React.createElement(
	        'dd',
	        { key: 'name-input' },
	        React.createElement('input', { type: 'text', autoFocus: true, value: _this.state.name, onChange: _this.handleInputChange.bind(_this, 'name') })
	      )];
	    };

	    this.renderEmailInput = function () {
	      return [React.createElement(
	        'dt',
	        { key: 'email-title' },
	        'Email'
	      ), React.createElement(
	        'dd',
	        { key: 'email-input' },
	        React.createElement('input', { type: 'email', value: _this.state.email, onChange: _this.handleInputChange.bind(_this, 'email') })
	      )];
	    };

	    this.renderPasswordInput = function () {
	      return [React.createElement(
	        'dt',
	        { key: 'password-title' },
	        'Password'
	      ), React.createElement(
	        'dd',
	        { key: 'password-input' },
	        React.createElement('input', { type: 'password', value: _this.state.password, onChange: _this.handleInputChange.bind(_this, 'password') })
	      )];
	    };

	    this.renderPasswordConfirmationInput = function () {
	      return [React.createElement(
	        'dt',
	        { key: 'password-confirmation-title' },
	        'Password Confirmation'
	      ), React.createElement(
	        'dd',
	        { key: 'password-confirmation-input' },
	        React.createElement('input', { type: 'password', value: _this.state.password_confirmation, onChange: _this.handleInputChange.bind(_this, 'password_confirmation') })
	      )];
	    };

	    this.handleSubmit = function (event) {
	      event.preventDefault();
	    };

	    this.handleInputChange = function (name, event) {
	      var state = {};state[name] = event.target.value;
	      _this.setState(state);
	    };
	  }

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

	// Renders
	//

	// Event handlers
	//

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	'use strict';

	__webpack_require__(7);
	module.exports = self.fetch.bind(self);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	(function () {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = name.toString();
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = value.toString();
	    }
	    return value;
	  }

	  function Headers(headers) {
	    this.map = {};

	    var self = this;
	    if (headers instanceof Headers) {
	      headers.forEach(function (name, values) {
	        values.forEach(function (value) {
	          self.append(name, value);
	        });
	      });
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        self.append(name, headers[name]);
	      });
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };

	  // Instead of iterable for now.
	  Headers.prototype.forEach = function (callback) {
	    var self = this;
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      callback(name, self.map[name]);
	    });
	  };

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    })(),
	    formData: 'FormData' in self
	  };

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(url, options) {
	    options = options || {};
	    this.url = url;

	    this.credentials = options.credentials || 'omit';
	    this.headers = new Headers(options.headers);
	    this.method = normalizeMethod(options.method || 'GET');
	    this.mode = options.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(options.body);
	  }

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this._initBody(bodyInit);
	    this.type = 'default';
	    this.url = null;
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	  }

	  Body.call(Response.prototype);

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    // TODO: Request constructor should accept input, init
	    var request;
	    if (Request.prototype.isPrototypeOf(input) && !init) {
	      request = input;
	    } else {
	      request = new Request(input, init);
	    }

	    return new Promise(function (resolve, reject) {
	      var xhr = new XMLHttpRequest();

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (name, values) {
	        values.forEach(function (value) {
	          xhr.setRequestHeader(name, value);
	        });
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./viewer-route": 9,
		"./viewer-route.js": 9
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _default = (function (_Relay$Route) {
	  _inherits(_default, _Relay$Route);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, null, [{
	    key: 'queries',
	    value: {
	      viewer: function viewer() {
	        return (function () {
	          var GraphQL = Relay.QL.__GraphQL;
	          return new GraphQL.Query('viewer', null, null, null, null, 'Viewer');
	        })();
	      }
	    },
	    enumerable: true
	  }, {
	    key: 'routeName',
	    value: 'ViewerRoute',
	    enumerable: true
	  }]);

	  return _default;
	})(Relay.Route);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);