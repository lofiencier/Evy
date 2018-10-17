'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bind = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index_message__1ymdG{color:red}";
var styles = { "message": "index_message__1ymdG" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var cx = bind.bind(styles);

var XXX = function (_React$Component) {
  inherits(XXX, _React$Component);

  function XXX(props) {
    classCallCheck(this, XXX);
    return possibleConstructorReturn(this, (XXX.__proto__ || Object.getPrototypeOf(XXX)).call(this));
  }

  createClass(XXX, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: cx('message') },
        React.createElement(
          'p',
          null,
          'title'
        ),
        React.createElement(
          'span',
          null,
          '22222'
        )
      );
    }
  }]);
  return XXX;
}(React.Component);

XXX.defaultProps = {
  whatever: 'whatever'
};
XXX.propTypes = {
  /** jsjsjsjsajdoiajsoj  */
  whatever: PropTypes.string.isRequired,
  /** finalllllllly 啊，you mother fucker */
  motherFucker: PropTypes.bool
};

var css$1 = ".index_order__2eeW-{color:red}";
var styles$1 = { "order": "index_order__2eeW-" };
styleInject(css$1);

var cx$1 = bind.bind(styles$1);
console.log(styles$1);

var HHH = function (_React$Component) {
  inherits(HHH, _React$Component);

  function HHH(props) {
    classCallCheck(this, HHH);
    return possibleConstructorReturn(this, (HHH.__proto__ || Object.getPrototypeOf(HHH)).call(this));
  }

  createClass(HHH, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: cx$1('order') },
        React.createElement(
          'p',
          null,
          'title'
        ),
        React.createElement(
          'span',
          null,
          '22222'
        )
      );
    }
  }]);
  return HHH;
}(React.Component);

HHH.defaultProps = {
  whatever: 'whatever'
};
HHH.propTypes = {
  /** jsjsjsjsajdoiajsoj  */
  whatever: PropTypes.string.isRequired,
  /** finalllllllly 啊，you mother fucker */
  motherFucker: PropTypes.bool
};

exports.XXX = XXX;
exports.HHH = HHH;
//# sourceMappingURL=index.cjs.js.map
